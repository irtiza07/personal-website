import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Blog from "../components/Blog";
import axios from "axios";
import sinon from "sinon";
import { AssertionError } from "assert";

configure({ adapter: new Adapter() });

describe("Blog test suite", () => {
  let wrapper;
  const postsFetched = [
    {
      title: "Test Post 1"
    },
    {
      title: "Test Post 2"
    },
    {
      title: "Test Post 3"
    }
  ];

  beforeEach(() => {
    wrapper = shallow(<Blog />);
  });

  it("Contains Header, Basic & Footer", () => {
    expect(wrapper.find("Header").length).toBe(1);
    expect(wrapper.find("Basic").length).toBe(1);
    expect(wrapper.find("Footer").length).toBe(1);
  });

  it("Makes appropriate number of PostSnippets according to the data returned by the API", () => {
    const promise = Promise.resolve(postsFetched);
    sinon
      .stub(axios, "get")
      .withArgs(
        "http://ec2-18-217-52-23.us-eadfdst-2.compute.amazonaws.com/posts"
      )
      .returns(promise);

    promise
      .then(() => {
        expect(expect(wrapper.find("PostSnippet").length).toBe(3));
      })
      .catch(() => expect(wrapper.find("PostSnippet").length).toBe(0));
  });
});
