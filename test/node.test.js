const passgen = require('../pass-gen')
const testData = require('./test-data')

;(async function () {
  const { generatePassword } = passgen
  testData.forEach(async function (t) {
    console.log(await generatePassword(t))
  })
}())
