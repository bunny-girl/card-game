/**
 * Created by Edel on 2018/3/18.
 */

import React from "react";

const Lobby = ({moveScene}) => (
    <div>
        <ul classID="toolbar">
            <li className="tool" onClick={() => moveScene('mapSelect')}>探索</li>
            <li className="tool">背包</li>
        </ul>
    </div>
);

export default Lobby;