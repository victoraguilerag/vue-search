import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ListItem from "./ListItem.vue";

describe("ListItem", () => {
  it("renders the title properly", () => {
    const wrapper = mount(ListItem, {
      props: { text: "test text" },
    });
    const title = wrapper.find(".title");
    expect(title.text()).toContain("test type");
  });
  it("renders the description properly", () => {
    const wrapper = mount(ListItem, {
      props: { type: "test type" },
    });
    const description = wrapper.find(".type");
    expect(description.text()).toContain("test type");
  });
});
