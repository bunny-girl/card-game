import {connect} from "react-redux";
import Area from "../component/Area";
import {enterMap} from "../action/index";
import {fetchMapData} from "../action/mapData";

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => ({
	enterMap: (mapId, areaId) => {
		dispatch(enterMap(mapId, areaId));
		dispatch(fetchMapData(areaId, mapId));
	}
});

const AreaContainer = connect(mapStateToProps, mapDispatchToProps)(Area);

export default AreaContainer;