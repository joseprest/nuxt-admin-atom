import _ from 'lodash'

export default ({ app }, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    inject('_', _)
  }