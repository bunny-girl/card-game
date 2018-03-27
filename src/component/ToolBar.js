import React from "react";

const ToolBar = ({tools, current, moveScene}) => (
    <div className="fixed-bottom row text-center">
        {tools.map(t => <div className="col-lg-1 col-md-2 col-sm-3 toolbar" onClick={() => moveScene(t.id)}
                             key={t.id}><button className="btn btn-primary">{t.name}</button></div>)}
    </div>
);

export default ToolBar;