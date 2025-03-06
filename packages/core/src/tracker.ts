import { TrackerConfig, Plugin, TrackEvent } from "./types";

export class Tracker {
  private readonly config: TrackerConfig;
  private plugins: Map<string, Plugin> = new Map();

  constructor(config: TrackerConfig) {
    this.config = config;
  }

  use(plugin: Plugin): this {
    if (this.plugins.has(plugin.name)) {
      console.warn(`Plugin ${plugin.name} has already been registered.`);
      return this;
    }

    try {
      console.log(`Installing plugin: ${plugin.name}`);
      plugin.install(this);
      this.plugins.set(plugin.name, plugin);
    } catch (error) {
      console.error(`Failed to install plugin ${plugin.name}:`, error);
    }

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
