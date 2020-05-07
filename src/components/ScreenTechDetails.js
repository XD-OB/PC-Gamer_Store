import React from 'react';

export default function ScreenTechDetails(props) {
    const detail = props.detail;

    return (
        <div>
            <h3>Technical Details:</h3><br />
            <table className="table">
                <tbody>
                    <tr>
                        <th scope="row">Technology</th>
                        <td>{detail["Type"]}</td>
                    </tr>
                    <tr>
                        <th scope="row">Size</th>
                        <td>{detail["Size"]} inch</td>
                    </tr>
                    <tr>
                        <th scope="row">Refresh Rate</th>
                        <td>{detail["RefreshRate"]} Hz</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}