import {
  Viro3DObject,
  ViroAmbientLight,
  ViroARScene,
  ViroARSceneNavigator,
  ViroText,
  ViroTrackingReason,
  ViroTrackingStateConstants,
} from "@reactvision/react-viro";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

const HelloWorldSceneAR = () => {
  const [text, setText] = useState("Initializing AR...");

  function onInitialized(state: any, reason: ViroTrackingReason) {
    console.log("onInitialized", state, reason);
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText("Hello World!");
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      // Handle loss of tracking
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0.2, -1]}
        style={styles.helloWorldTextStyle}
      />
      <ViroAmbientLight color={"#aaaaaa"} />
      <Viro3DObject
        source={require("./3Dmodels/object_pug_animated/pug_animated.vrx")}
        type="VRX"
        position={[0, -2, -5]}
        scale={[1, 1, 1]}
        rotation={[0, 0, 0]}
        dragType="FixedToWorld"
        onDrag={() => {}}
        animation={{
          name: "Take 001",
          run: true,
          loop: true,
          delay: 1000,
        }}
      />
    </ViroARScene>
  );
};

export default function ARScreen() {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
}

var styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});
