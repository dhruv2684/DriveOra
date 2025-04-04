import { useEffect } from "react";

const BannerAd = () => {
    useEffect(() => {
        const script1 = document.createElement("script");
        script1.type = "text/javascript";
        script1.innerHTML = `
          atOptions = {
            'key' : 'fbea65dd12ea97222d03b5fa3a287cd1',
            'format' : 'iframe',
            'height' : 50,
            'width' : 320,
            'params' : {}
          };
        `;
        document.body.appendChild(script1);

        const script2 = document.createElement("script");
        script2.type = "text/javascript";
        script2.src = "//lanentablelanentableenemyattractive.com/fbea65dd12ea97222d03b5fa3a287cd1/invoke.js";
        document.body.appendChild(script2);

        return () => {
            document.body.removeChild(script1);
            document.body.removeChild(script2);
        };
    }, [])

    return (
        <div style={{ textAlign: "center", margin: "20px 0", minHeight: "50px" }}>
        {/* Ad will be injected here */}
      </div>
    );
};

export default BannerAd;
