import {connect} from "react-redux";
import Map from "../component/Map";
import mapData from "../data/map";

const mapStateToProps = state => {
    let map = mapData.find(m => m.id === state.current.map);

    return {
        map,
        progress: state.current.progress
    }
};

const mapDispatchToProps = dispatch => {
    return {}
};

const MapContainer = connect(mapStateToProps, mapDispatchToProps)(Map);

export default MapContainer;