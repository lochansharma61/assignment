import React, { Component } from "react";
import {  View, ScrollView, Dimensions } from "react-native";

import Video from "react-native-video";
import LightVideo from "../../themes/assets/song.mp4";

const THRESHOLD = 100;
export default class rnvideo extends Component {
  state = {
    paused: true,
  };
  position = {
    start: null,
    end: null,
  };
  handleVideoLayout = e => {
    const { height } = Dimensions.get("window");
    this.position.start = e.nativeEvent.layout.y - height + THRESHOLD;
    this.position.end = e.nativeEvent.layout.y + e.nativeEvent.layout.height - THRESHOLD;
  };

  handleScroll = e => {
    const scrollPosition = e.nativeEvent.contentOffset.y;
    const paused = this.state.paused;
    const { start, end } = this.position;

    if (scrollPosition > start && scrollPosition < end && paused) {
      this.setState({ paused: false });
    } else if (
      (scrollPosition > end || scrollPosition < start) && !paused
    ) {
      this.setState({ paused: true });
    }
  };
  render() {
    return (
      <View style={{flex:1}}>
        <ScrollView scrollEventThrottle={16} onScroll={this.handleScroll}>
          <View style={{ height: 850, backgroundColor: "grey", paddingTop: 250, alignItems: "center",}}></View>
          <Video
            repeat
            source={LightVideo}
            paused={this.state.paused}
            onLayout={this.handleVideoLayout}
            style={{ width:'100%', height: 300 }}
          />
         <View style={{ height: 850, backgroundColor: "grey", paddingTop: 250, alignItems: "center",}}></View>
        </ScrollView>
      </View>
    );
  }
}
