import React from 'react'
import { useEffect } from "react";

const Popunderads = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "//pl26253243.effectiveratecpm.com/de/71/e9/de71e9e84dad3721790aba10ebc6faf2.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Cleanup script on unmount
        };
    }, []);

    return (
        <div>
            <h2>Sponsored Ad</h2>
            <div id="ad-container"></div>
        </div>
    );
}

export default Popunderads
