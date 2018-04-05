import {connect} from "react-redux";
import Map from "../component/Map";
// import mapData from "../data/map";
import {dealEvent, move_forward} from "../action/index";

const mapStateToProps = state => {
	// let area = mapData.find(a => a.id === state.current.areaId);
	// let map;
	// if (area && area.maps) {
	//     map = area.maps.find(m => m.id === state.current.mapId);
	// }

	let {area, map} = state.mapData;

    let progress = state.current.progress;

    let width = Math.floor(state.current.progress / map.steps * 100, 1);

    // let style = {
    //     width: `${width}%`,
    //     display : progress === map.steps ? "none" : ""
    // };

    return {
        area,
        map,
        width,
        progress,
    }
};

const mapDispatchToProps = dispatch => ({
    onClick: eventId => {
        dispatch(move_forward(eventId));
        dispatch(dealEvent(eventId));
    }
});

const MapContainer = connect(mapStateToProps, mapDispatchToProps)(Map);

export default MapContainer;