import React, { useEffect } from 'react'

const NativeBnerads = () => {
    useEffect(() => {
        // Script dynamically add karva mate
        const script = document.createElement("script");
        script.async = true;
        script.dataset.cfasync = "false";
        script.src = "//pl26253785.effectiveratecpm.com/e77bb2e2acba01d8566247f1d3ac8b8d/invoke.js";

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Cleanup script on unmount
        };
    }, []);

    return (
        <div>
            <h2>Sponsored Ad</h2>
            {/* Ad Display Here */}
            <div id="container-e77bb2e2acba01d8566247f1d3ac8b8d"></div>
        </div>
    );
}

export default NativeBnerads
