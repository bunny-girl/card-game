import {connect} from "react-redux";
import MapSelect from "../component/MapSelect";
import {change_scene} from "../action/index";

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => ({
    moveScene: scene => dispatch(change_scene(scene))
});

const MapSelectContainer = connect(mapStateToProps, mapDispatchToProps)(MapSelect);

export default MapSelectContainer;