import {connect} from "react-redux";
import Map from "../component/Map";
import {dealEvent} from "../action/index";
import {moveForward} from "../action/mapData";

const mapStateToProps = state => {
	let {area, map, progress} = state.mapData;

	let width = Math.floor(progress / map.steps * 100, 1);

    return {
        area,
        map,
        width,
        progress,
    }
};

const mapDispatchToProps = dispatch => ({
    onClick: eventId => {
		dispatch(moveForward());
        dispatch(dealEvent(eventId));
    }
});

const MapContainer = connect(mapStateToProps, mapDispatchToProps)(Map);

export default MapContainer;