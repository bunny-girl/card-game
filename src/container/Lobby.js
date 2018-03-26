/**
 * Created by Edel on 2018/3/18.
 */

import {connect} from "react-redux";
import Lobby from "../component/Lobby";

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

const LobbyContainer = connect(mapStateToProps, mapDispatchToProps)(Lobby);

export default LobbyContainer;