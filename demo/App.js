import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { MessageBar, showMessage } from 'react-native-messages';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    height: 10,
  },
  customMessage: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  customMessageText: {
    fontSize: 16,
  },
});

function CustomMessage({ message }) {
  return (
    <View style={styles.customMessage}>
      <Text style={styles.customMessageText}>{message}</Text>
      <View style={styles.separator}/>
      <Button
        title="Hi there!"
        onPress={() => showMessage('Hey!')}
      />
    </View>
  );
}

function AppContent() {
  return (
    <View style={styles.content}>
      <Button
        title="Show Default Message"
        onPress={() => showMessage('You are awesome!')}
      />
      <View style={styles.separator}/>
      <Button
        title="Show Custom Message"
        onPress={() => showMessage(
          'You are so awesome! And this message is so slow. And quite long too. Also, uses custom component.',
          {
            messageComponent: CustomMessage,
            duration: 3000,
            slideAnimationOffset: 10,
            showAnimationDuration: 600,
            hideAnimationDuration: 600,
          },
        )}
      />
      <View style={styles.separator}/>
      <Button
        title="Show Another Custom Message"
        onPress={() => showMessage(
          'You are so awesome! But you still can\'t close this slow animating message with swipe.',
          {
            duration: 3000,
            showAnimationDuration: 600,
            hideAnimationDuration: 600,
            closeOnSwipe: false,
          },
        )}
      />
    </View>
  );
}

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <AppContent/>
      <MessageBar/>
    </View>
  );
}
