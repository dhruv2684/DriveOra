import React, { useEffect } from 'react'

const Socialads = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//pl26256231.effectiveratecpm.com/94/07/a8/9407a89d9a1802dcf4ee720e266fcfeb.js";
        script.async = true;
        script.defer = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <div id="ad-container"></div>
        </div>
    );
}

export default Socialads
