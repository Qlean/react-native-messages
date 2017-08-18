import MessageBar from './MessageBar';
import messageManager from './messageManager';

const showMessage = messageManager.showMessage.bind(messageManager);

export {
  MessageBar,
  showMessage,
};
