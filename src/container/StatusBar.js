import {connect} from "react-redux";
import StatusBar from "../component/StatusBar";

const mapStateToProps = state => ({
	cardNum : state.bag.card.length,
	coin : state.bag.coin,
	stamina : state.bag.stamina
});

const mapDispatchToProps = dispatch => ({
});

const MapSelectContainer = connect(mapStateToProps, mapDispatchToProps)(StatusBar);

export default MapSelectContainer;