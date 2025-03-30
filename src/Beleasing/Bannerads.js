import React, { useEffect, useState } from 'react'

const Bannerads = () => {
    const [adId, setAdId] = useState("");

    useEffect(() => {
        // Generate unique ID for the ad container
        const uniqueId = "banner-ad-" + Math.random().toString(36).substr(2, 9);
        setAdId(uniqueId);

        if (adId) {
            const script = document.createElement("script");
            script.async = true;
            script.dataset.cfasync = "false";
            script.src = "//pl26253785.effectiveratecpm.com/e77bb2e2acba01d8566247f1d3ac8b8d/invoke.js";

            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            };
        }
    }, [adId]);

    return (
        <div>
            <h2>Sponsored Ad</h2>
            <div id={adId} style={{ width: "728px", height: "90px", margin: "20px auto", background: "#f1f1f1" }}></div>
        </div>
    );

}

export default Bannerads
