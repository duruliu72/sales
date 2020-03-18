import React, { Component, Fragment } from "react";
class SalesPromotionModals extends Component {
    state = {};
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "js/modelsCopy.js";
        script.async = true;
        document.body.appendChild(script);
    }
    selectPromotion = (e) => {
        const promotions = this.props.promotions;
        if (e.keyCode === 13) {
            var modal = document.getElementById("myModal");
            modal.style.display = "none";
            const promotion = promotions.find(element => element.Promotion_Code === e.currentTarget.value);
            this.props.art_Promotion(promotion);
        }
    }
    render() {
        const promotions = this.props.promotions;
        var sl = 1;
        var initialCheck = true;
        return (
            <div>
                {/* <span onClick={this.openModel} id="myBtn">Open Modal</span> */}
                <div id="myModal" className="salesmodal">
                    <div className="salesmodal-content">
                        <div className="salesmodal-header">
                            <span className="close">&times;</span>
                            <h2>Promotion</h2>
                        </div>
                        <div className="salesmodal-body">
                            <table className="table table-bordered table-sm" style={{ border: "1px solid #dee2e6" }}>
                                <thead>
                                    <tr>
                                        <th>SL</th>
                                        <th>Promo Code</th>
                                        <th>Promo Title</th>
                                        <th>Promo Desc</th>
                                        <th>New Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {promotions.map((promotion) =>
                                        <Fragment key={sl}>
                                            <tr>
                                                <td>{sl++}</td>
                                                <td >{promotion.Promotion_Code ? promotion.Promotion_Code : ""}</td>
                                                <td>{promotion.promotion_Title ? promotion.promotion_Title : ""}</td>
                                                <td>{promotion.promotion_Description ? promotion.promotion_Description : ""}</td>
                                                <td >{promotion.Article_Price_New ? promotion.Article_Price_New : ""}</td>
                                                <td><input className="promoarticle" defaultChecked={initialCheck ? initialCheck : false} onKeyDown={(e) => this.selectPromotion(e)} type="radio" name="promoarticle" value={promotion.Promotion_Code} /></td>
                                            </tr>
                                            {initialCheck = false}
                                        </Fragment>)}
                                </tbody>
                            </table>
                        </div>
                        {/* <div className="salesmodal-footer">
                            <h3>salesmodal Footer</h3>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default SalesPromotionModals;
