import React, { Component } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import messageManager from './messageManager';

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  message: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  messageText: {
    color: 'white',
  },
});

function Message({ message }) {
  return (
    <View style={styles.message}>
      <Text style={styles.messageText}>{message}</Text>
    </View>
  );
}

export default class MessageBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisibleAnimValue: new Animated.Value(0),
      message: null,
    }
  }
  componentDidMount() {
    messageManager.registerMessageBar(this);
  }
  componentWillUnmount() {
    messageManager.unregisterMessageBar();
  }
  pushMessage(message) {
    this.setState({ message }, () => this.showMessage(message));
  }
  showMessage(message) {
    this.state.isVisibleAnimValue.setValue(0);
    Animated.timing(
      this.state.isVisibleAnimValue,
      { toValue: 1, duration: this.props.showAnimationDuration, useNativeDriver: true },
    ).start(
      () => setTimeout(() => this.hideMessage(message), 1000),
    );
  }
  hideMessage(message) {
    if (message === this.state.message) {
      Animated.timing(
        this.state.isVisibleAnimValue,
        { toValue: 0, duration: this.props.hideAnimationDuration, useNativeDriver: true },
      ).start(
        () => {
          if (message === this.state.message) {
            this.setState({ message: null });
          }
        },
      );
    }
  }
  render() {
    const { messageComponent: MessageComponent, slideAnimationOffset } = this.props;
    const translateY = this.state.isVisibleAnimValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-slideAnimationOffset, 0],
    });
    const opacity = this.state.isVisibleAnimValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });
    return (
      <Animated.View
        style={[
          styles.root,
          { transform: [{ translateY }] },
          { opacity },
        ]}
      >
        {this.state.message &&
          <MessageComponent message={this.state.message.message}/>
        }
      </Animated.View>
    );
  }
}

MessageBar.defaultProps = {
  messageComponent: Message,
  slideAnimationOffset: 40,
  showAnimationDuration: 255,
  hideAnimationDuration: 255,
}
