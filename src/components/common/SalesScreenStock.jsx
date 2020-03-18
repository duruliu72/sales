import React, { Component } from 'react';
class SalesStock extends Component {
    render() {
        // console.log(this.props.article);
        const article = this.props.article;
        const r1 = article.Qty_R1 ? article.Qty_R1 : 0;
        const r2 = article.Qty_R1 ? article.Qty_R2 : 0;
        const r3 = article.Qty_R1 ? article.Qty_R3 : 0;
        const r4 = article.Qty_R1 ? article.Qty_R4 : 0;
        const r5 = article.Qty_R1 ? article.Qty_R5 : 0;
        const r6 = article.Qty_R1 ? article.Qty_R6 : 0;
        const r7 = article.Qty_R1 ? article.Qty_R7 : 0;
        const r8 = article.Qty_R1 ? article.Qty_R8 : 0;
        const r9 = article.Qty_R1 ? article.Qty_R9 : 0;
        const r10 = article.Qty_R1 ? article.Qty_R10 : 0;
        const r11 = article.Qty_R1 ? article.Qty_R11 : 0;
        const r12 = article.Qty_R1 ? article.Qty_R12 : 0;
        const r13 = article.Qty_R1 ? article.Qty_R13 : 0;
        const r14 = article.Qty_R1 ? article.Qty_R14 : 0;
        const r15 = article.Qty_R1 ? article.Qty_R15 : 0;
        let tot = r1 + r2 + r3 + r4 + r5 + r6 + r7 + r8 + r9 + r10 + r11 + r12 + r13 + r14 + r15;
        if (tot === 0) {
            tot = "";
        }
        return (
            <div className="stock-section">
                <table className="table table-bordered table-striped table-sm">
                    <tbody>
                        <tr className="sizes" style={{ backgroundColor: '#17a2b8' }}>
                            <td style={{ color: '#ffffff' }}>Sizes</td>
                            <td style={{ color: '#ffffff' }}>{article.R1 ? article.R1 : ""}</td>
                            <td style={{ color: '#ffffff' }}>{article.R2 ? article.R2 : ""}</td>
                            <td style={{ color: '#ffffff' }}>{article.R3 ? article.R3 : ""}</td>
                            <td style={{ color: '#ffffff' }}>{article.R4 ? article.R4 : ""}</td>
                            <td style={{ color: '#ffffff' }}>{article.R5 ? article.R5 : ""}</td>
                            <td style={{ color: '#ffffff' }}>{article.R6 ? article.R6 : ""}</td>
                            <td style={{ color: '#ffffff' }}>{article.R7 ? article.R7 : ""}</td>
                            <td style={{ color: '#ffffff' }}>{article.R8 ? article.R8 : ""}</td>
                            <td style={{ color: '#ffffff' }}>{article.R9 ? article.R9 : ""}</td>
                            <td style={{ color: '#ffffff' }}>{article.R10 ? article.R10 : ""}</td>
                            <td style={{ color: '#ffffff' }}>{article.R111 ? article.R11 : ""}</td>
                            <td style={{ color: '#ffffff' }}>{article.R12 ? article.R12 : ""}</td>
                            <td style={{ color: '#ffffff' }}>{article.R13 ? article.R13 : ""}</td>
                            <td style={{ color: '#ffffff' }}>{article.R14 ? article.R14 : ""}</td>
                            <td style={{ color: '#ffffff' }}>{article.R15 ? article.R15 : ""}</td>
                            <td style={{ color: '#ffffff' }}>Total</td>
                        </tr>
                        <tr className="stock">
                            <td>Stock</td>
                            <td>{article.Qty_R1 ? article.Qty_R1 : ""}</td>
                            <td>{article.Qty_R2 ? article.Qty_R2 : ""}</td>
                            <td>{article.Qty_R3 ? article.Qty_R3 : ""}</td>
                            <td>{article.Qty_R4 ? article.Qty_R4 : ""}</td>
                            <td>{article.Qty_R5 ? article.Qty_R5 : ""}</td>
                            <td>{article.Qty_R6 ? article.Qty_R6 : ""}</td>
                            <td>{article.Qty_R7 ? article.Qty_R7 : ""}</td>
                            <td>{article.Qty_R8 ? article.Qty_R8 : ""}</td>
                            <td>{article.Qty_R9 ? article.Qty_R9 : ""}</td>
                            <td>{article.Qty_R10 ? article.Qty_R10 : ""}</td>
                            <td>{article.Qty_R11 ? article.Qty_R11 : ""}</td>
                            <td>{article.Qty_R12 ? article.Qty_R12 : ""}</td>
                            <td>{article.Qty_R13 ? article.Qty_R13 : ""}</td>
                            <td>{article.Qty_R14 ? article.Qty_R14 : ""}</td>
                            <td>{article.Qty_R15 ? article.Qty_R15 : ""}</td>
                            <td>{tot}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };
}
export default SalesStock;
