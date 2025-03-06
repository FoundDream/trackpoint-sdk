export interface TrackerConfig {
  debug?: boolean;
}

export interface TrackEvent {
  type: string;
  data: Record<string, any>;
  timestamp?: number;
}

export interface Plugin {
  name: string;
  install: (tracker: any) => void;
}

export interface TrackerInstance {
  use: (plugin: Plugin) => TrackerInstance;
  track: (event: TrackEvent) => void;
}
