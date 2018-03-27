/**
 * Created by Edel on 2018/3/23.
 */

import React from "react";
import areas from "../data/map";
import Area from "../container/AreaCon";
import ToolBar from "../container/ToolBarCon";

const MapSelect = ({enterMap, selectArea, currentArea}) => (
    <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
            <ul>
                {
                    areas.map(a =>
                        <li key={a.id} onClick={e => selectArea(a.id)}>{a.name}</li>
                    )
                }
            </ul>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12">
            {
                currentArea ? <Area area={currentArea}/> : <p>未选定区域</p>
            }
        </div>
        <ToolBar/>
    </div>
);

export default MapSelect;