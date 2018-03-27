/**
 * Created by Edel on 2018/3/18.
 */

import {connect} from "react-redux";
import APP from "../component/App";

const mapStateToProps = state => {
    return {
        scene : state.current.scene
    }
};

const mapDispatchToProps = dispatch => {
    return {}
};

const APPContainer = connect(mapStateToProps, mapDispatchToProps)(APP);

export default APPContainer;