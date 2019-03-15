module.exports = {
  extends: 'stylelint-config-standard',

  ignoreFiles: [
    'node_modules',
    'bower_components',
    'wwwroot'
  ],

  rules: {
    'at-rule-no-unknown': null,
    'comment-empty-line-before': ['always', {
      except: ['first-nested'],
      ignore: ['after-comment', 'stylelint-commands']
    }],
    'comment-whitespace-inside': 'always'
  }
}
