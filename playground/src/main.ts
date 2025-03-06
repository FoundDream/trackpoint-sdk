import { createTracker } from "@trackpoint-sdk/core";

const tracker = createTracker({
  appId: "test-app",
  endpoint: "http://localhost:3000/collect",
  debug: true,
});

// 测试事件追踪
document.getElementById("test-btn")?.addEventListener("click", () => {
  tracker.track({
    type: "click",
    data: {
      buttonId: "test-btn",
      text: "Test Track",
    },
  });
});
