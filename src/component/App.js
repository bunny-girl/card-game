/**
 * Created by Edel on 2018/3/18.
 */

import React from "react";
import "../App.css";
import StatusBar from "../container/StatusBarCon";
import MapSelect from "../container/MapSelectCon";
import Map from "../container/MapCon";
import Lobby from "../container/LobbyCon";
import Bag from "../container/BagCon";
import Deck from "../container/DeckCon";

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
        case "bag" :
            mainScene = <Bag/>;
            break;
        case "deck" :
            mainScene = <Deck/>;
            break;
        default:
            mainScene = <Lobby/>;
    }
    return <div><StatusBar/>{mainScene}</div>
};

export default App;
