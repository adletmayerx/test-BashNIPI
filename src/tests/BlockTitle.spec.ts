import { describe, it, expect } from "vitest";
import { BlockTitle } from "../components/shared";
import { shallowMount } from "@vue/test-utils";

describe("BlockTitle", () => {
  it("корректное отображение заголовка", () => {
    const wrapper = shallowMount(BlockTitle, { props: { title: "string" } });

    expect(wrapper.text()).toEqual("string");
  });

  it("корректное добавление класса", () => {
    const wrapper = shallowMount(BlockTitle, { props: { title: "string", className: "text-green" } });

    expect(wrapper.classes()).toContain("text-green");
  });
});
