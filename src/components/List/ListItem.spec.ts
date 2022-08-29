import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ListItem from "./ListItem.vue";

describe("ListItem", () => {
  it("renders properly", () => {
    const wrapper = mount(ListItem, {
      props: { text: "test text", type: "test type" },
    });
    const title = wrapper.find(".title");
    const description = wrapper.find(".type");
    expect(title.text()).toContain("test text");
    expect(description.text()).toContain("test type");
  });
});
