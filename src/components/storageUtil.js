
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
  