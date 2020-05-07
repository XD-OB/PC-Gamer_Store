import React from 'react';

export default function TechDetails(props) {
    const detail = props.detail;

    return (
        <div>
            <h3>Technical Details:</h3><br />
            <table className="table">
                <tbody>
                    <tr>
                        <th scope="row">CPU</th>
                        <td>{detail["CPU"]}</td>
                    </tr>
                    <tr>
                        <th scope="row">GPU</th>
                        <td>{detail["GPU"]}</td>
                    </tr>
                    <tr>
                        <th scope="row">RAM</th>
                        <td>{detail["RAM"]} GB</td>
                    </tr>
                    <tr>
                        <th scope="row">Storage</th>
                        <td>{detail["Storage"]} GB</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}