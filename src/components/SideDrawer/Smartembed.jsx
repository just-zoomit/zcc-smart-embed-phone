import { useEffect, useState } from "react";

import { processZccInitConfigRequest, processZccContactSearchEvent, processZccIncomingPhoneRequest,
      processZccIncomingEmailRequest, processZccCallRinging, processZccChatRinging, processZccScreenPop,
      processZccZallConnectedEvent, processZccPhoneCallLog, processZccResize, processZccCallRecording
      } from './eventHandlers';

const SmartEmbed = () => {
  // State variables
  const [receivedMessage, setReceivedMessage] = useState("");
  
  useEffect(() => {
    window.addEventListener("message", function (e) {

      const data = e.data;
      if (e.origin !== "https://zoom.us") return;

      if (data) {
        console.log("PostMessage received event (TYPE) ", data.type);
        console.log("PostMessage content ", JSON.stringify(data));

        setReceivedMessage("Got this message from child: " + data);
        switch (data.type) {
          case 'zcc-init-config-request':
            console.log("Hit here -> ", data);
            processZccInitConfigRequest(e);
            break;
          case 'zcc-contact-search-event':
            processZccContactSearchEvent(e);
            break;
          case 'zcc-incomingPhone-request':
            processZccIncomingPhoneRequest(e);
            break;
          case 'zcc-incomingEmail-request':
            processZccIncomingEmailRequest(e)
            break;
          case 'zcc-call-ringing':
              processZccCallRinging(data.data);
              break;
          case 'zcc-chat-ringing':
              processZccChatRinging(data.data);
              break;
          case 'zcc-screen-pop':
              processZccScreenPop(data.data);
              break;
          case 'zcc-call-connected':
              processZccZallConnectedEvent(data.data);
              break;
          case 'zcc-phone-call-log':
              processZccPhoneCallLog(data.data);
              break;
          case 'zcc-resize':
              processZccResize(data.data);
              break;
          case 'zcc-call-recording':
              processZccCallRecording(data.data);
              break;
          default:
            // Handle default case if needed
            break;
        }

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
      >
        
      </iframe>
      <p>{receivedMessage}</p>


    </div>
  );
};

export default SmartEmbed;
