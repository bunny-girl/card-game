/**
 * Created by Edel on 2018/3/27.
 */

import {connect} from "react-redux";
import CardSelection from "../component/CardSelection";
import {putCardIntoDeck} from "../action/index";

const mapStateToProps = state => {
    return {
        cards: state.bag.card.filter(c => !state.bag.deck.includes(c._id))
    }
};

const mapDispatchToProps = dispatch => ({
    onClick: id => dispatch(putCardIntoDeck(id))
});

const CardSelectionContainer = connect(mapStateToProps, mapDispatchToProps)(CardSelection);

export default CardSelectionContainer;