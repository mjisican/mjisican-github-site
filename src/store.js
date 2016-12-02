if (process.env.NODE_ENV === 'production') {
  module.exports = require('./redux/store.prod.js')
} else {
  module.exports = require('./redux/store.dev.js')
}
