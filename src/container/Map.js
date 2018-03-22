import {connect} from "react-redux";
import Map from "../component/Map";
import {} from "../action/index";

const mapStateToProps = state => {
    return {
        map : state.current.map,
        progress : state.current.progress
    }
};

const mapDispatchToProps = dispatch => {
    return {}
};

const MapContainer = connect(mapStateToProps, mapDispatchToProps)(Map);

export default MapContainer;