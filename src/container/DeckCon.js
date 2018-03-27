import {connect} from "react-redux";
import Deck from "../component/Deck";

const mapStateToProps = state => ({
    cards: state.bag.card.filter(card => {
        return state.bag.deck.includes(card._id)
    })
});

const mapDispatchToProps = dispatch => ({
});

const BagContainer = connect(mapStateToProps, mapDispatchToProps)(Deck);

export default BagContainer;