/**
 * Created by Edel on 2018/3/18.
 */

import React, {Component} from "react";

class Lobby extends Component {
    render() {
        return (
            <div>
                <ul classID="toolbar">
                    <li className="tool" onClick={() => this.props.moveScene('mapSelect')}>Fight</li>
                    <li className="tool">Inventory</li>
                </ul>
            </div>
        );
    }
}

export default Lobby;