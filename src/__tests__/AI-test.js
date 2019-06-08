import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import AI from "../components/AI";

configure({ adapter: new Adapter() });
let wrapper;

beforeEach(() => (wrapper = shallow(<AI />)));

describe("AI", () => {
  it("AI Component Exists", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("Correct heading", () => {
    expect(
      wrapper
        .find(".tech-title")
        .text()
        .includes("Artificial Intelligence")
    ).toBe(true);
  });

  it("At least 5 skills available", () => {
    expect(wrapper.find(".tech-list").length).toBeGreaterThanOrEqual(5);
  });
});
