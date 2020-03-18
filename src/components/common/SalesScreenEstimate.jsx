import React, { Component } from 'react';
class SalesEstimate extends Component {
    render() {
        return (
            <div className="estimate-section">
                <table className="table table-bordered table-sm" style={{ border: "1px solid #dee2e6" }}>
                    <tbody>
                        <tr>
                            <td style={{ background: "#ffffff" }}>Pairs</td>
                            <td style={{ background: "#ffffff" }}>Est.</td>
                            <td style={{ background: "#ffffff", color: "red", textAlign: "right" }}>0</td>
                            <td style={{ background: "#ffffff" }}>Act.</td>
                            <td style={{ background: "#ffffff", textAlign: "right" }}>0</td>
                            <td rowSpan="2" style={{ textAlign: "center" }}><span style={{ fontSize: "40px", fontWeight: '400', color: '#17a2b8', verticalAlign: 'middle' }}>Total:{this.props.calBean.total}</span></td>
                        </tr>
                        <tr>
                            <td style={{ background: "#ffffff" }}>Amounts</td>
                            <td style={{ background: "#ffffff" }}>Est.</td>
                            <td style={{ background: "#ffffff", color: "red", textAlign: "right" }}>0</td>
                            <td style={{ background: "#ffffff" }}>Act.</td>
                            <td style={{ background: "#ffffff", textAlign: "right" }}>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };
}
export default SalesEstimate;
