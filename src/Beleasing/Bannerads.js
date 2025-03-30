import React, { useEffect } from 'react'

const Bannerads = ({ adId, scriptSrc }) => {
    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.setAttribute("data-cfasync", "false");
        script.src = scriptSrc;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Cleanup script on unmount
        };
    }, [scriptSrc]);

    return <div id={adId} style={{ margin: "20px 0" }}></div>;

}

export default Bannerads
