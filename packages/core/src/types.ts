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
  init?: (tracker: any) => void;
}
