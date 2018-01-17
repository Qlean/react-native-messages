const path = require('path');

const config = {
  getProjectRoots() {
    return [
      path.resolve(__dirname),
      path.resolve(__dirname, '..'),
    ];
  },
  extraNodeModules: {
    react: path.resolve(__dirname, 'node_modules/react'),
    'react-native': path.resolve(__dirname, 'node_modules/react-native')
  }
}

module.exports = config;
