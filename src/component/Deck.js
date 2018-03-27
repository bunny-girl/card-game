import React from "react";
import Card from "./Card";
import ToolBar from "../container/ToolBarCon";
import CardSelection from "../container/CardSelectionCon";

const Deck = ({cards}) => (
    <div>
        <div className="row">
            <div className="col-4 row">
                {
                    cards.map((card, index) => (
                        <div className="col-4" key={index}><Card {...card}/></div>))
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