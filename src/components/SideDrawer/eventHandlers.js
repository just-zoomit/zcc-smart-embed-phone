import { setItem } from "../storageUtil";

export function processZccInitConfigRequest(event) {
  // Handle 'zcc-init-config-request' event here
  console.log("1. zcc-init-config-request received", event);
}

export function processZccContactSearchEvent(event) {
  // Handle 'zcc-contact-search-event' event here
  // console.log("2. zcc-contact-search-event received", event);
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

export function processZccPhoneCallLog(event) {
  // Handle 'zcc-phone-call-log' event here

  setItem("phoneCallLog", event);
  console.log("9. zcc-phone-call-log received", event);
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
