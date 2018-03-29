import React from "react";

class StatusBar extends React.Component {
    // ({cardNum, coin, stamina, maxStamina}) => {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    	this.props.getStatus();
    }

    render() {
        return (<div className="row status-bar">
            <div className="col-2">卡牌:{this.props.cardNum}</div>
            <div className="col-2">金币:{this.props.coin}</div>
            <div className="col-2">体力:{this.props.stamina}/{this.props.maxStamina}</div>
        </div>)
    }
}

export default StatusBar;