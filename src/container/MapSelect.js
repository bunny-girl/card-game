import {connect} from "react-redux";
import MapSelect from "../component/MapSelect";
import {enterMap, selectArea} from "../action/index";
import mapData from '../data/map';

const mapStateToProps = state => {
    let area = mapData.find(m => m.id === state.current.areaId);
    console.log(area);
    return {
        currentArea: area
    }
};

const mapDispatchToProps = dispatch => ({
    enterMap: map => dispatch(enterMap(map)),
    selectArea: areaId => dispatch(selectArea(areaId))
});

const MapSelectContainer = connect(mapStateToProps, mapDispatchToProps)(MapSelect);

export default MapSelectContainer;