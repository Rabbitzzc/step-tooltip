const tasks = arr => arr.join(' && ')

module.exports = {
  'hooks': {
    'pre-commit': tasks([
        'yarn commit-name',
        'yarn prettier',
        'yarn lint',
        'yarn test',
    ]),
    'commit-msg': tasks([
        'yarn commit-msg'
    ]),
    'pre-push': tasks([
        'yarn pre-push'
    ])
  }
}
