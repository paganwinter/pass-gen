let testData = [
  {
    passphrase: 'passphrase',
    service: 'service',
  },
  {
    passphrase: 'passphrase',
    account: 'account',
    service: 'service',
  },
  {
    passphrase: 'passphrase',
    account: 'account',
    service: 'service',
    variant: 'variant',
  },
  {
    passphrase: 'passphrase',
    account: 'account',
    service: 'service',
    variant: 'variant',
    special: '!',
  },
]

;(function (root) {
  if (typeof(exports) !== 'undefined') {
    module.exports = testData
  } else {
    root.testData = testData
  }
}(this))

