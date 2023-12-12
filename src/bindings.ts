import { View } from 'react-native';

import type {
  KeyboardControllerProps,
  KeyboardEventsModule,
  KeyboardGestureAreaProps,
} from './types';
import type { EmitterSubscription } from 'react-native';

const NOOP = () => {};
export const KeyboardEvents: KeyboardEventsModule = {
  addListener: () => ({ remove: NOOP } as EmitterSubscription),
};
export const KeyboardControllerView =
  View as unknown as React.FC<KeyboardControllerProps>;
export const KeyboardGestureArea =
  View as unknown as React.FC<KeyboardGestureAreaProps>;
