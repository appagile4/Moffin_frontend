import React from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';

// Local Video Asset Path
const videoSource = require('../../assets/Video/logo.mp4');

interface AnimatedLogoProps {
  style?: StyleProp<ViewStyle>;
  width?: number;
  height?: number;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  style,
  width = 280,
  height = 280,
}) => {
  const player = useVideoPlayer(videoSource, (p) => {
    p.loop = true;
    p.muted = true;
    p.play();
  });

  return (
    <View style={[styles.container, style]}>
      <VideoView
        style={[{ width, height }, styles.video]}
        player={player}
        nativeControls={false}
        contentFit="contain"
      />
    </View>
  );
};

export default AnimatedLogo;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  video: {
    backgroundColor: 'transparent',
  },
});
