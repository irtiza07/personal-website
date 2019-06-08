import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Basic from "../components/Basic";

configure({ adapter: new Adapter() });
let wrapper;

beforeEach(
  () => (wrapper = shallow(<Basic title="Test Title" content="Test text" />))
);

describe("Basic", () => {
  it("Basic Component Exists", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("Contains title tag", () => {
    expect(wrapper.find(".basic-section-title").exists()).toBe(true);
  });

  it("Contains text tag", () => {
    expect(wrapper.find(".basic-section-text").exists()).toBe(true);
  });
});
