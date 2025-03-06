import { createTracker } from "@trackpoint-sdk/core";
import { PageViewPlugin } from "@trackpoint-sdk/plugin-pageview";

// 创建 Tracker 实例
const tracker = createTracker({
  debug: true,
});

// 使用 PageView 插件
const temp = tracker.use(new PageViewPlugin());
console.log("tracker", temp);

// 测试 PageView 功能
// tracker.track({
//   type: "page_view",
//   data: {
//     page: "/home",
//     title: "Home Page",
//   },
// });
