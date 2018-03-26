import React from "react";
import ToolBar from "../container/ToolBar";

const Map = ({area, map, style, width, onClick}) => (
    <div>
        <p>{area.name} -> {map.name}</p>
        <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={style}
                 aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{width}%
            </div>
        </div>
        <button onClick={onClick}>探索</button>
        <ToolBar/>
    </div>
);

export default Map;