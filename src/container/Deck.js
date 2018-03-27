import {connect} from "react-redux";
import Deck from "../component/Deck";

const mapStateToProps = state => ({
    cards : state.bag.deck
});

const mapDispatchToProps = dispatch => ({
});

const BagContainer = connect(mapStateToProps, mapDispatchToProps)(Deck);

export default BagContainer;