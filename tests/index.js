import SWManagement from "../src/index";
import SWOnTheFly from "../src/ServiceWorkerOnTheFly";
const makeServiceWorkerEnv = require("service-worker-mock");
const makeFetchMock = require("service-worker-mock/fetch");

const spyRegister = jest.spyOn(SWOnTheFly.prototype, "register");

test("Test Register Service Worker", () => {
  SWManagement.register("service-worker.js");
  expect(spyRegister).toHaveBeenCalled();
});

