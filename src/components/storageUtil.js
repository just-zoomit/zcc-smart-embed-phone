export const onMakeCall = (phone) => {
  const iframe = window.frames["zoom-embeddable-phone-iframe"];

  if (iframe) {
    if (iframe.contentWindow) {
      // If the iframe has already loaded, send the message
      console.log("iframe.contentWindow is available");
      iframe.contentWindow.postMessage(
        {
          type: "onclicktoact",
          data: { phone: phone },
        },
        "*"
      );
    } else {
      // If the iframe has not yet loaded, wait for the load event
      iframe.addEventListener("load", function () {
        iframe.contentWindow.postMessage(
          {
            type: "onclicktoact",
            data: { phone: phone },
          },
          "*"
        );
      });
    }
  } else {
    console.error("Iframe is not available");
  }
};

// Function to set data in localStorage
export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  // Function to get data from localStorage
  export const getItem = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };
  
  // Function to remove data from localStorage
  export const removeItem = (key) => {
    localStorage.removeItem(key);
  };
  