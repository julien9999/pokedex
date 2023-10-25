module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-transform-flow-strip-types',
    ['@babel/plugin-transform-private-methods', {loose: true}],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          hooks: './src/utils/hooks',
          helper: './src/utils/helper',
          '~constants': './src/constants',
          api: './src/services/api',
          locales: './src/locales',
          global: './src/components/global',
          containers: './src/containers',
          components: './src/components',
          globalStore: './globalStore.js',
          utils: './src/utils',
          types: './src/types',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
