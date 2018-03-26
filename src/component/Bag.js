import React from "react";
import ToolBar from "../container/ToolBar";

const Bag = ({cards}) => (
    <div>
        <div className="row">
            {
                cards.map((card, index) => <div className="col-lg-2 col-sm-1" key={index}>{card.name}</div>)
            }
        </div>
        <ToolBar/>
    </div>
);

export default Bag;