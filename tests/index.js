import SWManagement from '../src/index'
import SWOnTheFly from '../src/ServiceWorkerOnTheFly'

const spyRegister = jest.spyOn(SWOnTheFly.prototype, 'register')

test('Test SWRegister', () => {
  SWManagement.register('service-worker.js')
  expect(spyRegister).toHaveBeenCalled()
})
