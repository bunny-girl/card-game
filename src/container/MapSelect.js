import {connect} from "react-redux";
import MapSelect from "../component/MapSelect";
import {enterMap} from "../action/index";

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => ({
    enterMap: map => dispatch(enterMap(map))
});

const MapSelectContainer = connect(mapStateToProps, mapDispatchToProps)(MapSelect);

export default MapSelectContainer;