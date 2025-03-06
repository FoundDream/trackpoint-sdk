import { Tracker } from "./tracker";
import { TrackerConfig } from "./types";

// 工厂函数
export function createTracker(config: TrackerConfig) {
  return new Tracker(config);
}

export type { Plugin, TrackerInstance, TrackEvent } from "./types";
