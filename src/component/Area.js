import React from "react";

const Area = ({area, enterMap}) => {
    {
        let areaBasic, mapList = '';
        if (area.open) {
            areaBasic = <p>{area.name}</p>;
            mapList = <ul>
                {
                    area.maps.map(m => (<li key={m.id} onClick={e => enterMap(m.id, area.id)}>{m.name}</li>))
                }
            </ul>
        } else {
            areaBasic = <p className="closed"><strike>{area.name}</strike></p>
        }
        return <li>{areaBasic}{mapList}</li>;
    }
};

export default Area;