/**
 * Created by Edel on 2018/3/18.
 */

import React from "react";
import "../App.css";
import Lobby from '../container/Lobby';
import MapSelect from '../container/MapSelect';
import Map from "../container/Map";

const App = ({scene}) => {
    {
        switch (scene) {
            case "mapSelect" :
                return <MapSelect/>;
            case "map" :
                return <Map/>;
            default:
                return <Lobby/>;
        }
    }
};

export default App;
