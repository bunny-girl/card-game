import {connect} from "react-redux";
import StatusBar from "../component/StatusBar";
import {fetchUserData} from "../action/userData";
import {fetchUserInfo} from "../action/userInfo";

const mapStateToProps = state => ({
	cardNum : state.bag.card.length,
	coin : state.bag.coin,
	stamina : state.current.stamina,
	maxStamina: state.userData.maxStamina,
	nickname: state.userInfo.nickname
});

const mapDispatchToProps = dispatch => ({
	getStatus: () => {
		dispatch(fetchUserData());
		dispatch(fetchUserInfo());
	}
});

const MapSelectContainer = connect(mapStateToProps, mapDispatchToProps)(StatusBar);

export default MapSelectContainer;