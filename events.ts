export enum EventEnum {
  SETTINGS_CHANGED = 'settings.changed',
}

export interface SettingsChangedEvent {
  type: EventEnum.SETTINGS_CHANGED;
  payload: any;
}
