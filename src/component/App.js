/**
 * Created by Edel on 2018/3/18.
 */

import React from "react";
import "../App.css";
import StatusBar from "./StatusBar";
import MapSelect from "../container/MapSelect";
import Map from "../container/Map";
import Lobby from "../container/Lobby";

const App = ({scene}) => {
    let mainScene;
    switch
        (scene) {
        case "mapSelect" :
            mainScene = <MapSelect/>;
            break;
        case "map" :
            mainScene = <Map/>;
            break;
        default:
            mainScene = <Lobby/>;
    }
    return <div><StatusBar/>{mainScene}</div>
};

export default App;
