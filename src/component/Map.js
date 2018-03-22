import React from "react";

const Map = ({map, progress}) => (
    <div>
        <input type='range' value={progress} max={100} min={0} step={10}/>
    </div>
);

export default Map;