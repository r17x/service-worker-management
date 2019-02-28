/**
 * An Example how to use SW-management.
 * @example
 * // src/index.js
 * import SWRegister from 'sw-management'
 *
 * // Registration of Service - Worker
 * const swURL = 'https://example.com/service-worker.js' 
 * SWRegister.register(
 *  swURL,
 *  {
 *    onRegister: () => console.log('Has Registered with:', swURL)
 *  }
 * )
 *
 * // Checking all of service-worker registered by SW-Management
 * SWRegister.all()
 *
 * // Unregister All Service Worker
 * SWRegister.unregister()
 *
 */
import ServiceWorkerOnTheFly from './ServiceWorkerOnTheFly'

const SWRegister = new ServiceWorkerOnTheFly()


/*
 * @function SWRegister.register
 * @description This function for register your service worker by URL
 * @param {String} swURL - Service Worker Location `https://example.com/service-worker` 
 * @typedef {Object} options 
 * @property {Function} onRegister - a callback after registration of service worker 
 * @return {Undefined} 
`* @todo - have an idea for new `options` ? @link {https://github.com/ri7nz/service-worker-management/pulls|Here} 
 */
export default SWRegister

