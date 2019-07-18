module.exports = {
  root: true,
  extends: 'airbnb-base',
  rules: {
    'semi': ['error', 'never'],
    'max-len': [
      'error',
      { 'code': 140, 'ignoreComments': true, 'ignoreTrailingComments': true, 'ignoreUrls': true, 'ignoreStrings': true },
    ],
    'arrow-parens': ['error', 'as-needed'],
  },
  overrides: [
    {
      files: [
        'src/application/**/*.js',
        'src/domain/**/*.js',
      ],
      rules: {
        'camelcase': 0,
        'new-cap': 0,
        'no-useless-computed-key': 0,
        'no-unneeded-ternary': 0,
        'no-trailing-spaces': 0,
        'padded-blocks': 0,
        'max-len': 0,
        'no-empty-pattern': 0,
        'no-unused-vars': 0,
        'quote-props': 0,
      },
    },
  ],
}
