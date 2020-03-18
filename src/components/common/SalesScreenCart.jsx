import React, { Component, Fragment } from 'react';
class SalesCart extends Component {
    deleteArticle = (article) => {
        this.props.deleteArticle(article);
    }
    render() {
        const cart = this.props.cart;
        var sl = 1;
        return (
            <div className="cart-section">
                <table className="table table-bordered table-striped table-sm">
                    <thead>
                        <tr style={{ backgroundColor: '#17a2b8' }}>
                            <th style={{ color: '#ffffff' }}>SN</th>
                            <th style={{ color: '#ffffff' }}>Article</th>
                            <th style={{ color: '#ffffff' }}>Sales Staf</th>
                            <th style={{ color: '#ffffff' }}>Size</th>
                            <th style={{ color: '#ffffff' }}>Qty</th>
                            <th style={{ color: '#ffffff' }}>Price</th>
                            <th style={{ color: '#ffffff' }}>Disc %</th>
                            <th style={{ color: '#ffffff' }}>Disc Amount</th>
                            <th style={{ color: '#ffffff' }}>Amount</th>
                            <th style={{ color: '#ffffff' }}></th>
                        </tr>
                    </thead>
                    <tbody style={{ overflow: "scroll", height: '300px' }}>
                        {
                            cart.map((article) =>
                                <Fragment key={sl}>
                                    <tr>
                                        <td>{sl++}</td>
                                        <td>{article.articleCode}</td>
                                        <td>{article.salesStaf}</td>
                                        <td>{article.size}</td>
                                        <td>{article.qty}</td>
                                        <td>{article.price}</td>
                                        <td>{article.disc}</td>
                                        <td>{article.discAmount}</td>
                                        <td>{article.amount}</td>
                                        <td onClick={() => this.deleteArticle(article)}><i style={{ color: 'red', cursor: 'pointer' }} className="fa fa-trash"></i></td>
                                    </tr>
                                </Fragment>)
                        }
                    </tbody>
                    <tfoot>
                        <tr style={{ backgroundColor: '#17a2b8' }}>
                            <th colSpan="4" style={{ color: '#ffffff' }}>Total</th>
                            <th style={{ color: '#ffffff' }}>{this.props.calBean.tot_qty}</th>
                            <th colSpan="3" style={{ color: '#ffffff' }}></th>
                            <th style={{ color: '#ffffff' }}>{this.props.calBean.total}</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    };
}
export default SalesCart;
