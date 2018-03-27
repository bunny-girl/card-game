import React from "react";
import ToolBar from "../container/ToolBarCon";
import CardSelection from "../container/CardSelectionCon";
import {getImgSrc} from "../util";

const Deck = ({cards}) => (
    <div>
        <div className="row">
            <div className="col-4 row">
                {
                    cards.map((card, index) => (
                        <div className="col-4" key={index}>
                            <img src={getImgSrc(`thumbnails/${card.id}.png`)} className="img-thumbnail"/>
                        </div>))
                }
            </div>
            <div className="col-8">
                <CardSelection/>
            </div>
        </div>
        <ToolBar/>
    </div>
);

export default Deck;