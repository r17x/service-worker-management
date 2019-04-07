import ServiceWorkerOnTheFly from './ServiceWorkerOnTheFly'

/**
 * An Example how to use SW-management.
 * @example
 * // src/index.js
 * import SWRegister from 'sw-management'
 *
 * // Registration of Service - Worker
 * const swURL = 'https://example.com/service-worker.js' 
 * const options = {
 *    onRegister: () => console.log('Has Registered with:', swURL)
 *  }
 * // run
 * SWRegister.register(
 *  swURL,
 *  options,
 * )
 *
 * // Checking all of service-worker registered by SW-Management
 * SWRegister.all()
 *
 * // Unregister All Service Worker
 * SWRegister.unregister()
 *
 */

const SWRegister = new ServiceWorkerOnTheFly()

export default SWRegister
