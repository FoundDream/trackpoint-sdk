import { TrackerConfig, Plugin, TrackEvent } from "./types";

export class Tracker {
  private readonly config: TrackerConfig;
  private plugins: Plugin[] = [];

  constructor(config: TrackerConfig) {
    this.config = config;
  }

  use(plugin: Plugin) {
    this.plugins.push(plugin);
    return this;
  }

  track(event: TrackEvent) {
    const fullEvent: TrackEvent = {
      ...event,
      timestamp: Date.now(),
    };

    if (this.config.debug) {
      console.log("[Tracker]", fullEvent);
    }
  }
}
