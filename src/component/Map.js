import React from "react";
import ToolBar from "../container/ToolBarCon";

const Map = ({area, map, progress, width, onClick}) => (
    <div>
        <p>{area.name} -> {map.name}</p>
        <div className="progress">
            <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                style={
                    {width: `${width}%`}
                }
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100">
                {width}%
            </div>
        </div>
        <button
            onClick={onClick}
            style={{
                display: progress === map.steps ? "none" : ""
            }}>
            探索
        </button>
        <ToolBar/>
    </div>
);

export default Map;