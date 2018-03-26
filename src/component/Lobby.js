/**
 * Created by Edel on 2018/3/18.
 */

import React from "react";

const Lobby = ({moveScene}) => (
    <div>
        <div className="fixed-bottom row text-center justify-content-end">
            <div className="col-lg-1 col-md-2 col-sm-3" onClick={() => moveScene('mapSelect')}>探索</div>
            <div className="col-lg-1 col-md-2 col-sm-3">背包</div>
        </div>
    </div>
);

export default Lobby;