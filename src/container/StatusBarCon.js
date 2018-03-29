import {connect} from "react-redux";
import StatusBar from "../component/StatusBar";
import {requestUserData} from "../action/index";

const mapStateToProps = state => ({
	cardNum : state.bag.card.length,
	coin : state.bag.coin,
	stamina : state.current.stamina,
	maxStamina : state.userData.maxStamina
});

const mapDispatchToProps = dispatch => ({
	getStatus : () => dispatch(requestUserData())
});

const MapSelectContainer = connect(mapStateToProps, mapDispatchToProps)(StatusBar);

export default MapSelectContainer;