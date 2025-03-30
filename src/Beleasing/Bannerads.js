import { useEffect } from "react";

const BannerAd = () => {
    useEffect(() => {
        const adContainer = document.getElementById("ad-container");

        if (adContainer) {
            adContainer.innerHTML = ""; // Purge old ads

            const script1 = document.createElement("script");
            script1.type = "text/javascript";
            script1.innerHTML = `
        atOptions = {
          'key' : 'eaa60ae4631a88d3d82d16b72b9c9d81',
          'format' : 'iframe',
          'height' : 60,
          'width' : 468,
          'params' : {}
        };
      `;
            adContainer.appendChild(script1);

            const script2 = document.createElement("script");
            script2.type = "text/javascript";
            script2.src = "//www.highperformanceformat.com/eaa60ae4631a88d3d82d16b72b9c9d81/invoke.js";
            script2.async = true;
            script2.defer = true;
            adContainer.appendChild(script2);
        }
    }, []);

    return (
        <div>
            <h3>Adsterra Banner Ad</h3>
            <div
                id="ad-container"
                style={{ width: "468px", height: "60px", overflow: "hidden" }}
            ></div>
        </div>
    );
};

export default BannerAd;
