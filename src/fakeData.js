// @see  src/components/callLogs
const recentCalls = [
  {
    engagementId: 1,
    callType: "inbound",
    queue: "Sales",
    fromNumber: "123-456-7890",
    toNumber: "9174994441",
    timestamp: "2021-01-01 12:00:00",
    duration: "00:00:30",
    dispositionCode: "ANSWERED",
    notes: "This is a note",
    recordingURL: "https://www.google.com",
  },
];

// @see src/components/accountsandContacts
const sampleContacts = [
  {
    id: 1,
    name: "Maurice Lawson",
    email: "donte.zoomie@gmail.com",
    account: "67890",
    location: "Town",
    orders: 15,
    phone: "9174994441",
  },
  {
    id: 2,
    name: "Ashlee York",
    email: "jane@example.com",
    account: "67890",
    location: "Town",
    orders: 15,
    phone: "987-654-3210",
  },
  {
    id: 3,
    name: "Simu Liu",
    email: "john@example.com",
    account: "18945",
    location: "City",
    orders: 10,
    phone: "123-456-7890",
  },
];

// @see src/components/contactDetails
const sampleContactLogs = [
  {
    callType: "inbound",
    queue: "Sales",
    timestamp: "2021-08-20 12:00:00",
    duration: "00:01:00",
    engagementId: "168545",
    dispositionCode: "Closed",
    notes: "This is a note",
    type: "voice",
  },
  {
    callType: "inbound",
    queue: "Sales",
    timestamp: "2021-08-20 12:00:00",
    duration: "00:01:00",
    engagementId: "165845",
    dispositionCode: "Closed",
    notes: "This is a note",
    type: "voice",
  },
  {
    callType: "inbound",
    queue: "Sales",
    timestamp: "2021-08-20 12:00:00",
    duration: "00:01:00",
    engagementId: "189745",
    dispositionCode: "Closed",
    notes: "This is a note",
    type: "voice",
  },
];

export { recentCalls, sampleContacts, sampleContactLogs };
