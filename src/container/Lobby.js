/**
 * Created by Edel on 2018/3/18.
 */

import {connect} from "react-redux";
import Lobby from "../component/Lobby";
import {change_scene} from "../action/index";

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {
        moveScene: scene => {
            dispatch(change_scene(scene));
        }
    }
};

const LobbyContainer = connect(mapStateToProps, mapDispatchToProps)(Lobby);

export default LobbyContainer;