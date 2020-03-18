import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import auth from "../services/authService";
import SalesScreenLink from "./common/SalesScreenLink";
import SalesScreenUserInfo from "./common/SalesScreenUserInfo";
import SalesScreenEstimate from "./common/SalesScreenEstimate";
import SalesScreenCart from "./common/SalesScreenCart";
import SalesScreenMessage from "./common/SalesScreenMessage";
import SalesScreenInput from "./common/SalesScreenInput";
import SalesPromotionModals from "./common/SalesPromotionModals";
import SalesScreenPayment from "./common/SalesScreenPayment";
import SalesScreenItemDetails from "./common/SalesScreenItemDetails";
import SalesScreenStock from "./common/SalesScreenStock";
class SalesScreen extends Component {
  state = {
    cart: [],
    calBean: {
      tot_qty: 0,
      total: 0,
      net_total: 0
    },
    article: {},
    articlepromos: [],
    article_details: {}
  };
  displayStock = (data) => {
    let article = { ...this.state.article };
    article = data;
    let article_details = {};
    if (Object.keys(data).length === 0 && data.constructor === Object) {
    } else {
      article_details.Article_Code = article.Article_Code;
      article_details.Article_Name = article.Article_Name;
      article_details.Price_1 = article.Price_1;
    }
    this.setState({ article, article_details });
  }
  promotionsChannel = (data) => {
    let articlepromos = this.state.articlepromos;
    articlepromos = data;
    this.setState({ articlepromos });
  }
  art_Promotion = (promotion) => {
    const article = { ...this.state.article };
    let article_details = { ...this.state.article_details };
    // article_details.Article_Code = article.Article_Code;
    // article_details.Article_Name = article.Article_Name;
    // article_details.Price_1 = article.Price_1;
    if (Object.keys(promotion).length === 0 && promotion.constructor === Object) {
      article_details.Current_Price = "";
      article_details.Promotion_Code = "";
    } else {
      if (promotion.Reduction_Type === "1") {
        article_details.Current_Price = article.Price_1 * ((100 - promotion.Reduction_Amount) / 100);
      } else if (promotion.Reduction_Type === "2") {
        article_details.Current_Price = promotion.Reduction_Amount;
      } else if (promotion.Reduction_Type === "3") {
        article_details.Current_Price = article.Price_1 - promotion.Reduction_Amount;
      }
      article_details.Promotion_Code = promotion.Promotion_Code;
    }
    this.setState({ article_details });
    // document.querySelector(`.promoarticle`).focus();
  }
  addToCart = () => {
    const { cart, calBean, article } = this.state;
    const selectedArticle = {
      articleCode: article.Article_Code,
      salesStaf: "Turret2",
      size: 3,
      qty: 4,
      price: 5.2,
      disc: 20,
      discAmount: 200,
      amount: 200
    };
    const cartItem = {
      id: cart.length + 1,
      ...selectedArticle
    };
    cart.push(cartItem);
    let total = 0;
    let tot_qty = 0;
    cart.forEach(item => {
      total = total + item.amount;
      tot_qty = tot_qty + item.qty;
    });
    calBean.total = total;
    calBean.tot_qty = tot_qty;
    this.setState({ cart: cart, calBean: calBean });
  };
  deleteArticle = article => {
    const { cart, calBean } = this.state;
    let index = cart.findIndex(item => item.id === article.id);
    cart.splice(index, 1);
    let total = 0;
    let tot_qty = 0;
    cart.forEach(item => {
      total = total + item.amount;
      tot_qty = tot_qty + item.qty;
    });
    calBean.total = total;
    calBean.tot_qty = tot_qty;
    this.setState({ cart: cart, calBean: calBean });
  };
  promotionModal() {
    const promotions = this.state.articlepromos;
    if (promotions.length === 0) {
      return null;
    }
    return <SalesPromotionModals promotions={promotions} art_Promotion={this.art_Promotion} />;
  }
  render() {
    const user = auth.getCurrentUser();
    if (!user) {
      return <Redirect to="/login" />;
    } else {
      if (!user.storeCode) {
        return <Redirect to="/store" />;
      }
      return (
        <div className="sales-screen">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 left">
                <SalesScreenLink />
              </div>
              <div className="col-md-6 right">
                <SalesScreenUserInfo user={user} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <form>
                  <div className="row">
                    <div className="col-md-6 left">
                      <SalesScreenEstimate calBean={this.state.calBean} />
                      <SalesScreenCart
                        cart={this.state.cart}
                        calBean={this.state.calBean}
                        deleteArticle={this.deleteArticle}
                      />
                      <SalesScreenMessage />
                    </div>
                    <div className="col-md-6 right">
                      <SalesScreenInput displayStock={this.displayStock} promotionsChannel={this.promotionsChannel} addToCart={this.addToCart} />
                      <SalesScreenStock article={this.state.article} />
                      {this.promotionModal()}
                      <SalesScreenItemDetails article_details={this.state.article_details} promotions={this.state.articlepromos} />
                      <SalesScreenPayment calBean={this.state.calBean} />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default SalesScreen;
