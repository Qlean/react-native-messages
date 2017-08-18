export default {
  messageBar: null,
  registerMessageBar(component) {
    this.messageBar = component;
  },
  unregisterMessageBar() {
    this.messageBar = null;
  },
  showMessage(message) {
    this.messageBar.pushMessage({ message });
  },
};
