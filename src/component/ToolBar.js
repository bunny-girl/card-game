import React from "react";

const ToolBar = ({tools, current, moveScene}) => (
    <div className="fixed-bottom row text-center">
        {tools.map(t => <div className="col-lg-1 col-md-2 col-sm-3" onClick={() => moveScene(t.id)}
                             key={t.id}>{t.name}</div>)}
    </div>
);

export default ToolBar;