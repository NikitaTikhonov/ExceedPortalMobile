module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          _atoms: './src/components/atoms',
          _molecules: './src/components/molecules',
          _organisms: './src/components/organisms',
          _assets: './src/assets',
          _navigations: './src/navigations',
          _services: './src/services',
          _screens: './src/screens',
          _styles: './src/styles',
          _utils: './src/utils',
          _store: './src/store',
        },
      },
    ],
  ],
};
