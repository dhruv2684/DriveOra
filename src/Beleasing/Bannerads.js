import React, { useEffect, useState } from 'react'

const Bannerads = () => {
    
    useEffect(() => {
        const script1 = document.createElement("script");
        script1.type = "text/javascript";
        script1.innerHTML = `
          atOptions = {
            'key' : '83418254477f26e4d7c7658c837a66ec',
            'format' : 'iframe',
            'height' : 250,
            'width' : 300,
            'params' : {}
          };
        `;
        document.body.appendChild(script1);

        const script2 = document.createElement("script");
        script2.type = "text/javascript";
        script2.src = "//www.highperformanceformat.com/83418254477f26e4d7c7658c837a66ec/invoke.js";
        document.body.appendChild(script2);

        return () => {
            document.body.removeChild(script1);
            document.body.removeChild(script2);
        };
    }, []);

    return (
        <div>
            <h3>Banner Ad</h3>
            <div id="ad-container" style={{ width: "300px", height: "250px" }}></div>
        </div>
    );

}

export default Bannerads
