import { describe, it, expect } from "vitest";
import { DetailsInput } from "../shared";
import { mount } from "@vue/test-utils";

describe("LabelVue", () => {
  it("успешный рендер span", () => {
    const wrapper = mount(DetailsInput, { props: { block: "address", name: "bs", value: "string" } });
    const span = wrapper.find("span");

    expect(span.exists()).toBeTruthy();
  });

  it("успешный рендер input", () => {
    const wrapper = mount(DetailsInput, { props: { block: "address", name: "bs", value: "string" } });
    const input = wrapper.find("input");

    expect(input.exists()).toBeTruthy();
  });

  it("корректное отображение значения поля ввода", () => {
    const wrapper = mount(DetailsInput, { props: { block: "address", name: "bs", value: "string" } });
    const input = wrapper.find("input");

    expect(input.element.value).toMatch("string");
  });

  it("корректное отображение значения span", () => {
    const wrapper = mount(DetailsInput, { props: { block: "address", name: "bs", value: "string" } });
    const span = wrapper.get("span");

    expect(span.text()).toMatch("bs");
  });
});
