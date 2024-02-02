const path = require('path');

module.exports = {
  hooks: {
    readPackage(pkg) {
      if (pkg.name === 'react-native') {
        pkg.peerDependencies = Object.assign(
          {
            expo: '^37.0.0',
            'expo-font': '^8.0.0',
            'expo-constants': '^9.0.0',
            'expo-asset': '^8.0.0',
            'expo-linking': '^1.0.0',
            'expo-web-browser': '^8.0.0',
            'expo-image-picker': '^8.0.0',
            'react-native-unimodules': '^0.9.0',
            'react-native-web': '^0.13.18',
          },
          pkg.peerDependencies || {}
        );

        pkg.dependencies = Object.assign(
          {
            'metro-react-native-babel-preset': '^0.54.0',
          },
          pkg.dependencies || {}
        );
      }

      return pkg;
    },
  },
};
