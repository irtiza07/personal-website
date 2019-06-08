import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Backend from "../components/Backend";

configure({ adapter: new Adapter() });
let wrapper;

beforeEach(() => (wrapper = shallow(<Backend />)));

describe("Backend", () => {
  it("Component Exists", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("Correct heading", () => {
    expect(
      wrapper
        .find(".tech-title")
        .text()
        .includes("Back-end Developer")
    ).toBe(true);
  });

  it("At least 5 skills available", () => {
    expect(wrapper.find(".tech-list").length).toBeGreaterThanOrEqual(5);
  });
});
