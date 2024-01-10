import React, { useEffect, useState } from "react";

const SmartEmbed = () => {
  // State variables
  const [receivedMessage, setReceivedMessage] = useState("");
  
  useEffect(() => {
    window.addEventListener("message", function (e) {

      const data = e.data;
      if (e.origin !== "https://zoom.us") return;

      if (data) {
        console.log("Contact Center Smart Embed events based on the postMessage API: ", data);
        setReceivedMessage("Got this message from child: " + data);
      }
    });
  }, []);


  return (
    <div>
      <iframe
        
        src="https://zoom.us/crm-int/callbar/"
        sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-scripts allow-same-origin allow-downloads"
        allow=";autoplay;microphone;camera;display-capture;midi;encrypted-media;clipboard-write;"
        id="zoom-embeddable-phone-iframe"
      ></iframe>
      <p>{receivedMessage}</p>


    </div>
  );
};

export default SmartEmbed;
