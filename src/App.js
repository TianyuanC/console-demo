import React, { useEffect } from "react";
import "./App.css";
import { normal, color, grouping, various, timing } from "./console";

export default () => {
    useEffect(() => {
        normal();
        color();
        grouping();
        various();
        timing();
        // and more...
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <code>Console.log demo</code>
                <p>
                    Where are you staring at? <br />
                    Open your dev console now 🤣
                </p>
            </header>
        </div>
    );
};
