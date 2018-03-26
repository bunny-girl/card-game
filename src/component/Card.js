/**
 * Created by Edel on 2018/3/26.
 */

import React from "react";

const Card = ({name, id}) => {
    return <div className="card">
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">这里是卡片的描述</p>
        </div>
    </div>
};

export default Card;