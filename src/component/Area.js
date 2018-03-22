import React from "react";

const Area = ({area}) => {
    {
        let areaBasic, mapList = '';
        if (area.open) {
            areaBasic = <p>{area.name}</p>;
            mapList = <ul>
                {
                    area.maps.map((m, index) => (<li key={index}>{m.name}</li>))
                }
            </ul>
        } else {
            areaBasic = <p className="closed"><strike>{area.name}</strike></p>
        }
        return <li>{areaBasic}{mapList}</li>;
    }
};

export default Area;