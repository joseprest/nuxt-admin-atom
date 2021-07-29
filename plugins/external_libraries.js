import _ from 'lodash'
import fn from 'cash-dom'
import tippy from "tippy.js";

export default ({ app }, inject) => {
    // Inject $_ (lodash) in Vue, context and store.
    inject('_', _)

    // Inject $cash (cash-dom) in Vue, context and store.
    inject('cash', fn)

    // Inject $cash (cash-dom) in Vue, context and store.
    inject('tippy', tippy)
  }