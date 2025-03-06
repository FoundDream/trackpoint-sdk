import { Tracker } from "./tracker";
import { TrackerConfig, TrackEvent, Plugin } from "./types";

export { Tracker };
export type { TrackerConfig, TrackEvent, Plugin };

// 工厂函数
export function createTracker(config: TrackerConfig) {
  return new Tracker(config);
}
