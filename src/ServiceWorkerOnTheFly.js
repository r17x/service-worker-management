export default class ServiceWorkerOnTheFly {
  __swRegistration = []

  __options = {
    onRegister: null,
  }

  construct() {}

  get __supportForServiceWorker() {
    return 'navigator' in window && 'serviceWorker' in navigator
  }

  get all(){
    return this.__swRegistration
  }
  /*
   * @module register
   * @param {String} swURL - Service Worker Location `https://example.com/service-worker` 
   * @param {Options} options
   * @return {Void} 
   *
   * @typedef {Object} Options 
   * @property {Function} onRegister - a callback after registration of service worker 
   */
  register(swURL, options) {
    // overwrite options on every register
    Object.assign(this.__options, options)
    if (this.__supportForServiceWorker) {
      navigator.serviceWorker
        .register(swURL)
        .then(reg => {
          console.log('ServiceWorkerOnTheFly.js : has registered with', swURL)
          this._onRegister(reg)
        })
        .catch(e => {
          console.error('ServiceWorkerOnTheFly.js :' + e.message)
        })
    }
  }

  _onRegister(registration) {
    // if have a callback after register
    // then call a callback
    typeof this.__options.onRegister === 'function' && this.__options.onRegister(registration)
    // add service worker to list registration service worker
    this.__swRegistration.push(registration)
  }

  unregister() {
    // get all registration sw
    // unregister all
    this.__swRegistration.forEach(registration => registration.unregister())
  }
}

/*
`* @see - have an idea for new `options` ? @link {https://github.com/ri7nz/service-worker-management/pulls|Here} 
 */
