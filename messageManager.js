export default {
  messageBar: null,
  registerMessageBar(component) {
    this.messageBar = component;
  },
  unregisterMessageBar() {
    this.messageBar = null;
  },
  showMessage(message, config) {
    this.messageBar.pushMessage({ message }, config || {});
  },
};
