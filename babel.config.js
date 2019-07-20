module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/react',
  ],
  plugins: [
    ['styled-components', { ssr: true, displayName: false, preprocess: false }],
    [
      'module-resolver',
      {
        root: ['./'],
      },
    ],
    ['@babel/plugin-proposal-class-properties'],
    ['dynamic-import-node'],
    ['transform-es2015-modules-commonjs'],
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
          },
        ],
        '@babel/react',
      ],
      plugins: [['transform-es2015-modules-commonjs']],
    },
  },
};
