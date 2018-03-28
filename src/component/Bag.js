import React from "react";
import ToolBar from "../container/ToolBarCon";
import Card from "./Card";

const Bag = ({cards}) => (
    <div>
        <div className="row">
            {
                cards.map((card, index) => (
                	<div className="col-lg-1 col-md-3 col-sm-4" key={index}>
                		{/*<Card {...card}/>*/}
                		<div>{card.id}</div>
            		</div>
            	))
            }
        </div>
        <ToolBar/>
    </div>
);

export default Bag;