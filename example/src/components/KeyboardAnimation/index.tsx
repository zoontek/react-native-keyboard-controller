import React from 'react';
import { Animated, TextInput, View } from 'react-native';
import {
  useKeyboardAnimation,
  useKeyboardAnimationReplica,
} from 'react-native-keyboard-controller';
import styles from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function KeyboardAnimation() {
  const { height, progress } = useKeyboardAnimation();
  const { height: heightReplica } = useKeyboardAnimationReplica();
  const { bottom: bottomInset } = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View>
        <Animated.View
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'green',
            borderRadius: 25,
            transform: [
              {
                translateX: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 100],
                }),
              },
            ],
          }}
        />
      </View>
      <View>
        <TextInput
          testID="keyboard_animation_text_input"
          style={{
            width: 200,
            marginTop: 50,
            height: 50,
            backgroundColor: 'yellow',
          }}
        />
        <View style={[styles.row, styles.center]}>
          <Animated.View
            style={{
              width: 50,
              height: 50,
              backgroundColor: 'red',
              borderRadius: 25,
              transform: [
                { translateY: Animated.subtract(height, bottomInset) },
              ],
            }}
          />
          <Animated.View
            style={{
              width: 50,
              height: 50,
              backgroundColor: 'blue',
              borderRadius: 25,
              transform: [
                { translateY: Animated.subtract(heightReplica, bottomInset) },
              ],
            }}
          />
        </View>
      </View>
    </View>
  );
}
