import { createTracker } from "@trackpoint-sdk/core";
import { PageViewPlugin } from "@trackpoint-sdk/plugin-pageview";

// 创建 Tracker 实例
const tracker = createTracker({
  debug: true,
});

// 使用 PageView 插件
tracker.use(new PageViewPlugin());

document.getElementById("test-btn")?.addEventListener("click", () => {
  tracker.track({
    type: "MC",
    data: {
      page: "/home",
      title: "Home Page",
    },
  });
});
