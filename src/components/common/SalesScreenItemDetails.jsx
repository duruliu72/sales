import React, { Component } from 'react';
class SalesItemDetails extends Component {
    render() {
        const { article_details: article } = this.props;
        return (
            <div className="item-details">
                <div className="row">
                    <div className="col-md-3">
                        <div>
                            <img
                                src={article.Article_Code ? "http://turretpos.najjyo.com/uploads/article/thumb/" + article.Article_Code + ".jpg" : "http://turretpos.najjyo.com/image/login-logo.png"}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <table className="table table-bordered table-sm" style={{ border: "1px solid #dee2e6" }}>
                            <tbody>
                                <tr>
                                    <td style={{ background: "#ffffff" }}>{article.Article_Code ? article.Article_Code : ":"}</td>
                                    <td style={{ background: "#ffffff" }}>{article.Article_Name ? article.Article_Name : ""}</td>
                                </tr>
                                <tr>
                                    <td style={{ background: "#ffffff" }}>Retail Price:</td>
                                    <td style={{ background: "#ffffff" }}>{article.Price_1 ? article.Price_1 : ""}</td>
                                </tr>
                                <tr>
                                    <td style={{ background: "#ffffff" }}>Current Price:</td>
                                    <td style={{ background: "#ffffff" }}>{article.Current_Price ? article.Current_Price : ""}</td>
                                </tr>
                                <tr>
                                    <td style={{ background: "#ffffff" }}>Promotion:</td>
                                    <td style={{ background: "#ffffff" }}>{article.Promotion_Code ? article.Promotion_Code : ""}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    };
}
export default SalesItemDetails;
