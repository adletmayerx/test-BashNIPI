import { describe, it, expect } from "vitest";
import { BlockTitle } from "../components/shared";
import { shallowMount } from "@vue/test-utils";

describe("salam", () => {
  it("privet", () => {
    const wrapper = shallowMount(BlockTitle, { props: { title: "string" } });

    expect(wrapper.text()).toEqual("string");
  });
});
