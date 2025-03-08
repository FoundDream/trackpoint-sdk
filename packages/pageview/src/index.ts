import type { Plugin, TrackerInstance } from "@trackpoint-sdk/core";

export interface PageViewData {
  url: string;
  title: string;
  referrer: string;
  timestamp: number;
}

export class PageViewPlugin implements Plugin {
  name = "pageview-plugin";
  version = "1.0.0";

  install(tracker: TrackerInstance): void {
    tracker.track({
      type: "PV",
      data: {
        page: "ss",
        title: "ss",
      },
    });
  }
}
