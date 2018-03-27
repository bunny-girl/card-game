import React from "react";
import Card from "./Card";
import ToolBar from "../container/ToolBar";

const Deck = ({cards}) => (
    <div>
        <div className="row">
        	<div className="col-4">
	            {
		            cards.map((card, index) => (<div className="col-lg-1 col-md-3 col-sm-4" key={index}><Card {...card}/></div>))
		        }
        	</div>
        	<div className="col-8">
        	</div>
        </div>
        <ToolBar/>
    </div>
);

export default Deck;