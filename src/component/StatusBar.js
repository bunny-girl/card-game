import React from "react";

const StatusBar = ({cardNum, coin, stamina}) => (
    <div className="row status-bar">
        <div className="col-2">卡牌:{cardNum}</div>
        <div className="col-2">金币:{coin}</div>
        <div className="col-2">体力:{stamina}</div>
    </div>
);

export default StatusBar;