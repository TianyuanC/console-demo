import React, { useEffect } from "react";
import "./App.css";
import { makeCoffee, consoles, color, timing } from "./console";

export default () => {
    useEffect(() => {
        console.log("Hey World");

        // color();

        // makeCoffee();

        // consoles();

        // timing();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <code>Console.log demo</code>
                <p>Open your Dev Console</p>
            </header>
        </div>
    );
};
