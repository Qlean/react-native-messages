# react-native-messages

React Native notification-like messages

![Default messages](./default-messages.gif)

## Features
- Customizable message component
- Fast native driver animations
- Auto-hide current message to display a next one
- Robust implementation, used in production code

Messages are not interactable in any way

## Installation
```
$ npm install --save react-native-messages
```

## Usage
1. Add `<MessageBar/>` to the top of your view hierarchy, as a last component:
```
import { MessageBar } from 'react-native-messages';

<View>
  <App/>
  <MessageBar/>
<View>
```

2. Call `showMessage` in any other component:
```
import { showMessage } from 'react-native-messages';

<Button onPress={() => showMessage('Hi there!')}/>
```

## Config
Prop                  | Type      | Default              
----------------------|-----------|--------------------------
messageComponent      | Component | Default message component
duration              | Number    | 1000
slideAnimationOffset  | Number    | 40
showAnimationDuration | Number    | 255
hideAnimationDuration | Number    | 255

## Custom message component
Default message will receive only string, but you can implement your own message component to work with any other objects e.g Error instances:

```
function Message({ message }) {
  if (message instanceof Error) {
    // return error-styled message
  } else {
    // return normal message
  }
}

<MessageBar messageComponent={Message}/>

<Button onPress={() => showMessage(new Error('Boom!'))}/>
```

![Custom messages](./custom-messages.gif)