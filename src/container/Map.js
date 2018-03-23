import {connect} from "react-redux";
import Map from "../component/Map";
import mapData from "../data/map";
import {move_forward} from "../action/index";

const mapStateToProps = state => {
    let area = mapData.find(a => a.id === state.current.areaId);
    let map;
    if (area && area.maps) {
        map = area.maps.find(m => m.id === state.current.mapId);
    }

    let width = Math.floor(state.current.progress / map.steps * 100, 1);

    let style = {
        width: `${width}%`
    };

    return {
        area,
        map,
        style,
        width
    }
};

const mapDispatchToProps = dispatch => ({
    onClick: () => dispatch(move_forward())
});

const MapContainer = connect(mapStateToProps, mapDispatchToProps)(Map);

export default MapContainer;