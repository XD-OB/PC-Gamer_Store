import React from 'react';

export default function RatingStars(props) {
    const classRate = ["fa fa-star", "fa fa-star", "fa fa-star", "fa fa-star", "fa fa-star"];
    let rating = props.rating;
    let i = 0;

    while (rating > 0) {
        classRate[i] += " checked";
        rating--;
        i++;
    }

    return (
        <div style={{textAlign: 'center', fontSize: '1.7em'}}>
            <span className={classRate[0]}></span>
            <span className={classRate[1]}></span>
            <span className={classRate[2]}></span>
            <span className={classRate[3]}></span>
            <span className={classRate[4]}></span>
        </div>
    )
}