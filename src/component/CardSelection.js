/**
 * Created by Edel on 2018/3/27.
 */

import React from "react";
import Card from "./Card";

const CardSelection = ({cards, onClick}) => (
    <div>
        <div className="row">
            {
                cards.map((card, index) => (
                    <div className="col-lg-1 col-md-3 col-sm-4" key={index} onClick={e => onClick(card._id)}>
                        <Card {...card}/></div>))
            }
        </div>
    </div>
);

export default CardSelection;