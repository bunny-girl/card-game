/**
 * Created by Edel on 2018/3/23.
 */

import React from "react";
import areas from "../data/map";
import Area from "../container/Area";

const MapSelect = ({enterMap}) => (
    <ul>
        {
            areas.map(a =>
                <Area key={a.id} area={a}/>
            )
        }
    </ul>
);

export default MapSelect;