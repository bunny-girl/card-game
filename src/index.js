import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import "./index.css";
import App from "./container/AppCon";
import registerServiceWorker from "./registerServiceWorker";

import coreReducer from "./reducer/index";

let store = createStore(coreReducer);

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
