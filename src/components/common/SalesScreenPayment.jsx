import React, { Component } from 'react';
class SalesScreenPayment extends Component {
    render() {
        return (
            <div className="cash-counter">
                <div className="row">
                    <div className="col-md-6">
                        <table className="table table-bordered table-sm" style={{ border: "1px solid #dee2e6" }}>
                            <tbody>
                                <tr>
                                    <td style={{ backgroundColor: '#17a2b8', textAlign: "right", color: "#ffffff" }}>Total</td>
                                    <td style={{ backgroundColor: '#17a2b8', textAlign: "right", color: "#ffffff" }}>{this.props.calBean.total}</td>
                                </tr>
                                <tr>
                                    <td style={{ background: "#ffffff", textAlign: "right" }}>Discount</td>
                                    <td style={{ background: "#ffffff", textAlign: "right" }}>0</td>
                                </tr>
                                <tr>
                                    <td style={{ backgroundColor: '#17a2b8', textAlign: "right", color: "#ffffff" }}>Net Total</td>
                                    <td style={{ backgroundColor: '#17a2b8', textAlign: "right", color: "#ffffff" }}>{this.props.calBean.net_total}</td>
                                </tr>
                                <tr>
                                    <td style={{ background: "#ffffff", textAlign: "right" }}>Voucher</td>
                                    <td style={{ background: "#ffffff", textAlign: "right" }}></td>
                                </tr>
                                <tr>
                                    <td style={{ background: "#ffffff", textAlign: "right" }}>Loyalty</td>
                                    <td style={{ background: "#ffffff", textAlign: "right" }}></td>
                                </tr>
                                <tr>
                                    <td style={{ background: "#ffffff", textAlign: "right" }}>Cash</td>
                                    <td style={{ background: "#ffffff", textAlign: "right", padding: "0px" }}> <input style={{ height: "32px" }} type="text" className="form-control inputstyle" id="cash" /></td>
                                </tr>
                                <tr>
                                    <td style={{ backgroundColor: '#17a2b8', color: "#ffffff", textAlign: "right" }}>Refund</td>
                                    <td style={{ backgroundColor: '#17a2b8', color: "#ffffff", textAlign: "right" }}></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    };
}
export default SalesScreenPayment;
