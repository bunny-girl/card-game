import React, {Component} from "react";
import levelData from '../data/level';

const MapSelect = ({moveScene}) => (
    <ul>
        {
            levelData.map(l =>
                <li key={l.id} onClick={() => moveScene('map')}>{l.name}</li>
            )
        }
    </ul>
);

export default MapSelect;