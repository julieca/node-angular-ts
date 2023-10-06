import {PlatformTest} from "@tsed/common";
import {OrderDir, getOrderDir} from "../utils/pagination";

describe("util", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);
  describe("order dir", () => {
    it("asc should return 1", () => {
      const orderDir = getOrderDir(OrderDir.ASC)
      expect(orderDir).toEqual(1);
    });
  });
});