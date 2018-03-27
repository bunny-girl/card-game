/**
 * Created by Edel on 2018/3/18.
 */

import {connect} from "react-redux";
import ToolBar from "../component/ToolBar";
import {change_scene} from "../action/index";

const mapStateToProps = state => ({
    current : state.current.scene,
    tools : [
        {
            name: '首页',
            id: 'lobby'
        },
        {
            name: '探索',
            id: 'mapSelect'
        },
        {
            name: '背包',
            id: 'bag'
        },
        {
            name: '卡组',
            id: 'deck'
        },
    ]
});

const mapDispatchToProps = dispatch => ({
    moveScene: scene => dispatch(change_scene(scene))
});

const ToolBarContainer = connect(mapStateToProps, mapDispatchToProps)(ToolBar);

export default ToolBarContainer;