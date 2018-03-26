import {connect} from "react-redux";
import Bag from "../component/Bag";

const mapStateToProps = state => ({
    cards : state.bag.card
});

const mapDispatchToProps = dispatch => ({
});

const BagContainer = connect(mapStateToProps, mapDispatchToProps)(Bag);

export default BagContainer;