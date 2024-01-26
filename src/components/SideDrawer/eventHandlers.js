import { setItem, getItem } from "../storageUtil";
import { v4 as uuidv4 } from "uuid"; 

export function processZccInitConfigRequest(event) {
  // Handle 'zcc-init-config-request' event here
  console.log("1. zcc-init-config-request received", event);
}

export function processZccContactSearchEvent(event) {
  // Handle 'zcc-contact-search-event' event here
  console.log("2. zcc-contact-search-event received", event);
}

export function processZccIncomingPhoneRequest(event) {
  // Handle 'zcc-incomingPhone-request' event here
  setItem("incomingCall", event);
  console.log("3. zcc-incomingPhone-request received", event);
}

export function processZccIncomingEmailRequest(event) {
  // Handle 'zcc-incomingEmail-request' event here
  console.log("4. zcc-incomingEmail-request received", event);
}

export function processZccCallRinging(event) {
  // Handle 'zcc-call-ringing' event here
  setItem("callRinging", event);
  console.log("5. zcc-call-ringing received", event);
}

export function processZccChatRinging(event) {
  // Handle 'zcc-chat-ringing' event here
  console.log("6. zcc-chat-ringing received", event);
}

export function processZccScreenPop(event) {
  // Handle 'zcc-screen-pop' event here
  console.log("7. zcc-screen-pop received", event);
}

export function processZccZallConnectedEvent(event) {
  // Handle 'zcc-call-connected' event here

  setItem("callConnectedReceived", event);
  console.log("8. zcc-call-connected received", event);
}

export function processZccPhoneCallLog(data) {
  // Handle 'zcc-phone-call-log' event here
  const phoneCallLog = getItem("phoneCallLog") || []; // Get the existing array from local storage
  
  // Check if the event already exists in the array
  const eventExists = phoneCallLog.some((entry) => entry.engagementId === data.engagementId);

  if (!eventExists) {
    phoneCallLog.push(data); // Add the incoming data object to the array
    setItem("phoneCallLog", phoneCallLog); // Save the updated array to local storage
    console.log("9. zcc-phone-call-log received", data);
  } else {
    console.log("Event already exists in phoneCallLog", data.engagementId);
  }
}





export function processZccResize(event) {
  // Handle 'zcc-resize' event here
  console.log("10. zcc-resize received", event);
}

export function processZccCallRecording(event) {
  // Handle 'callRecording' event here
  setItem("callRecording", event);
  console.log("11. zcc-call-recording received", event);
}
