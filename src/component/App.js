/**
 * Created by Edel on 2018/3/18.
 */

import React from "react";
import Lobby from '../container/Lobby';
import MapSelect from '../container/MapSelect';
import "../App.css";

const App = ({pos}) => {
    {
        console.log(pos);
        switch (pos) {
            case "mapSelect" :
                console.log('`');
                return <MapSelect/>;
            default:
                return <Lobby/>;
        }
    }
};

export default App;
