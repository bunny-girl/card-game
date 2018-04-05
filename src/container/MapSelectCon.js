import {connect} from "react-redux";
import MapSelect from "../component/MapSelect";
import mapData from "../data/map";

const mapStateToProps = state => {
	let area = mapData.find(m => m.id === state.current.areaId);
	return {
		currentArea: area
	}
};

const mapDispatchToProps = dispatch => ({
	// selectArea: areaId => dispatch(selectArea(areaId))
});

const MapSelectContainer = connect(mapStateToProps, mapDispatchToProps)(MapSelect);

export default MapSelectContainer;