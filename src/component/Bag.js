import React from "react";
import ToolBar from "../container/ToolBar";
import Card from "./Card";

const Bag = ({cards}) => (
    <div>
        <div className="row">
            {
                cards.map((card, index) => (<div className="col-lg-1" key={index}><Card {...card}/></div>))
            }
        </div>
        <ToolBar/>
    </div>
);

export default Bag;