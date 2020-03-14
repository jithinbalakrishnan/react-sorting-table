export const tableData = {
  head: [
    {
      name: "Agent",
      key: "agent",
      enabledSorting: true
    },
    {
      name: "Total Conversations",
      key: "totalConversations",
      enabledSorting: true
    },
    {
      name: "Resolved",
      key: "resolved",
      enabledSorting: true
    },
    {
      name: "Open",
      key: "open",
      enabledSorting: true
    },
    {
      name: "First Response Time",
      key: "firstResponseTime",
      enabledSorting: true
    },
    {
      name: "Avg Resolution Time",
      key: "avgResolutionTime",
      enabledSorting: true
    },
    {
      name: "Time",
      key: "time",
      enabledSorting: true
    }
  ],
  row: [
    {
      agent: "Jithin",
      totalConversations: 12,
      resolved: 0,
      open: 12,
      firstResponseTime: {
        displayText: "39mins 28secs",
        value: "00:39:28"
      },
      time: "00:39:28"
    },
    {
      agent: "Suraj",
      totalConversations: 10,
      resolved: 3,
      open: 11,
      firstResponseTime: {
        displayText: "18hrs 09mins 01secs",
        value: "18:09:01"
      },
      time: "18:09:01"
    },
    {
      agent: "Pooja",
      totalConversations: 29,
      resolved: 25,
      open: 0,
      firstResponseTime: {
        displayText: "25secs",
        value: "00:00:25"
      },
      time: "00:00:25"
    },
    {
      agent: "Harish",
      totalConversations: 23,
      resolved: 23,
      open: 5,
      firstResponseTime: {
        displayText: "16hrs 39mins 28secs",
        value: "16:39:28"
      },
      time: "16:39:28"
    },
    {
      agent: "Dhabi",
      totalConversations: 0,
      resolved: 0,
      open: 0,
      firstResponseTime: "_",
      // firstResponseTime: {
      //     displayText: "2hrs 39mins 28secs",
      //     value: "2:39:28"
      // },
      time: "02:39:28"
    }
  ]
};
