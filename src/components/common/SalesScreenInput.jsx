
import React, { Component } from 'react';
import { getStaff, getArticle, getPromoOnArticle } from "../../services/slaesService";
import auth from "../../services/authService";
import { focusPrevNext } from "../../services/keyEvent";
class SalesScreenInput extends Component {
    state = {
        data: {
            barcode: "",
            salesStaf: "",
            article: "",
            size: "",
            quantity: "1",
        },
        article: {},
        articlepromos: [],
        user: auth.getCurrentUser(),
        staffLabel: "Sales Staff",
        articleLabel: "Article",
        errors: {}
    };
    barCodeKeyEvent = (e) => {
        if (e.ctrlKey && e.keyCode === 13) {
            focusPrevNext(e, 'barcode', 'salesStaf');
        } else if (e.currentTarget.value !== "") {
            focusPrevNext(e, 'barcode', 'salesStaf');
        }
    }
    salesStafKeyEvent = (e) => {
        if (e.ctrlKey && e.keyCode === 13) {
            focusPrevNext(e, 'barcode', 'article');
        } else if (e.currentTarget.value !== "") {
            focusPrevNext(e, 'barcode', 'article');
        }
    }
    articleKeyEvent = (e) => {
        if (e.ctrlKey && e.keyCode === 13) {
            focusPrevNext(e, 'salesStaf', 'size');
        } else if (e.currentTarget.value !== "") {
            focusPrevNext(e, 'salesStaf', 'size');
        }
    }
    sizeKeyEvent = (e) => {
        if (e.ctrlKey && e.keyCode === 13) {
            focusPrevNext(e, 'article', 'quantity');
        } else if (e.currentTarget.value !== "") {
            focusPrevNext(e, 'article', 'quantity');
        }
    }
    quantityKeyEvent = (e) => {
        if (e.ctrlKey && e.keyCode === 13) {
            focusPrevNext(e, 'size', 'quantity');
        } else if (e.currentTarget.value !== "") {
            this.props.addToCart();
            this.clearFields();
            this.props.displayStock({});
            focusPrevNext(e, 'size', 'article');
        }
    }
    onChangeValue = (e) => {
        const data = { ...this.state.data };
        data[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ data });
    }
    onFocusBarCode = (e) => {

    };
    focusOutBarCode = (e) => {

    };

    onFoucusStaff = (e) => {
        let staffLabel = this.state.staffLabel;
        staffLabel = "Sales Staff";
        this.setState({ staffLabel });
    }
    focusOutStaff = async (e) => {
        const data = { ...this.state.data };
        let staffLabel = this.state.staffLabel;
        const { user } = this.state;
        // console.log(user, data.salesStaf);
        const bean = {
            companyCode: user ? user.companyCode : "",
            storeCode: user ? user.storeCode : "",
            staffCode: data.salesStaf
        }
        const staff = await getStaff(bean);
        if (staff.data.status) {
            staffLabel = staff.data.staff.Staff_Name;
        } else {
            if (typeof staff.data.msg === "object") {

            } else {
                staffLabel = staff.data.msg;
            }
            data.salesStaf = "";
        }
        this.setState({ data, staffLabel });
    };
    onFocusArticle = () => {
        let articleLabel = this.state.articleLabel;
        articleLabel = "Article";
        this.setState({ articleLabel });
    }
    focusOutArticle = async () => {
        let article = { ...this.state.article };
        let articlepromos = this.state.articlepromos;
        const data = { ...this.state.data };
        let articleLabel = this.state.articleLabel;
        const { user } = this.state;
        const bean = {
            companyCode: user ? user.companyCode : "",
            storeCode: user ? user.storeCode : "",
            articleCode: data.article
        }
        const response = await getArticle(bean);
        const proresponse = await getPromoOnArticle(bean);
        if (response.data.status) {
            // console.log(response.data.article);
            article = { ...response.data.article };
            // console.log(article);
            this.props.displayStock(article);
        } else {
            if (typeof response.data.msg === "object") {
                // console.log(typeof article.data.msg);
            } else {
                articleLabel = response.data.msg;
            }
            // data.article = "";
            this.props.displayStock({});
        }
        if (proresponse.data.status) {
            articlepromos = proresponse.data.promotion;
            this.props.promotionsChannel(articlepromos);
            this.openModel();
            // console.log(articlepromos);
        } else {
            this.props.promotionsChannel([]);
        }
        this.setState({ data, article, articleLabel });
    };
    onFocusSize = () => {

    }
    focusOutSize = () => {

    }
    onFocusQuantity = () => {

    }
    focusOutQuantity = () => {

    }
    openModel = () => {
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
    }
    cashPaymnet(e) {

    };
    clearFields() {
        const data = { ...this.state.data };
        data.article = "";
        data.size = "";
        data.quantity = "1";
        this.setState({ data });
    }
    render() {
        return (
            <div className="input-section">
                <div className="form-group row">
                    <label htmlFor="barcode" className="col-sm-2 col-form-label">Barcode</label>
                    <div className="col-sm-10">
                        <input name="barcode" value={this.state.data.barcode} tabIndex="1" onKeyDown={(e) => { this.barCodeKeyEvent(e) }} onChange={(e) => this.onChangeValue(e)} onBlur={(e) => this.onFocusBarCode(e)} type="text" className="form-control inputstyle" id="barcode" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 pr">
                        <div className="form-group">
                            <label htmlFor="salesStaf">{this.state.staffLabel}</label>
                            <input name="salesStaf" value={this.state.data.salesStaf} tabIndex="2" onKeyDown={(e) => { this.salesStafKeyEvent(e) }} onChange={(e) => this.onChangeValue(e)} onBlur={this.focusOutStaff} onFocus={this.onFoucusStaff} type="text" className="form-control inputstyle" id="salesStaf" />
                        </div>
                    </div>
                    <div className="col-md-3 plr">
                        <div className="form-group">
                            <label htmlFor="article">{this.state.articleLabel}</label>
                            <input name="article" value={this.state.data.article} tabIndex="3" onKeyDown={(e) => { this.articleKeyEvent(e) }} onChange={(e) => this.onChangeValue(e)} onBlur={this.focusOutArticle} onFocus={this.onFocusArticle} type="text" className="form-control inputstyle" id="article" />
                        </div>
                    </div>
                    <div className="col-md-3 plr">
                        <div className="form-group">
                            <label htmlFor="size">Size</label>
                            <input name="size" value={this.state.data.size} tabIndex="4" onKeyDown={(e) => { this.sizeKeyEvent(e) }} onChange={(e) => this.onChangeValue(e)} type="text" className="form-control inputstyle" id="size" />
                        </div>
                    </div>
                    <div className="col-md-3 pl">
                        <div className="form-group">
                            <label htmlFor="quantity">Quantity</label>
                            <input name="quantity" value={this.state.data.quantity} tabIndex="5" onKeyDown={(e) => { this.quantityKeyEvent(e) }} onChange={(e) => this.onChangeValue(e)} type="text" className="form-control inputstyle" id="quantity" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SalesScreenInput;