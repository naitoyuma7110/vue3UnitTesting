import { shallowMount } from "@vue/test-utils";
import FirstTest from "@/components/FirstTest";

it("Componentをマウント", () => {
  const wrapper = shallowMount(FirstTest);

  // mountメソッドの違いを確認するためのログ
  console.log(wrapper.html());

  expect(wrapper.find("h1").text()).toBe("Component");
});
