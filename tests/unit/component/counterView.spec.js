import { shallowMount } from "@vue/test-utils";
import counterView from "@/views/counterView.vue";
import store from "@/store";

describe("Vuexのテスト", () => {
  it("カウントアップボタンをクリックすると、Storeが更新され、現在のカウントが1になる", async () => {
    // Vuexを使用したコンポーネントをテスト用にmountする
    const wrapper = shallowMount(counterView, {
      global: {
        plugins: [store],
      },
    });

    await wrapper.get("button").trigger("click");
    expect(wrapper.get("p").text()).toBe("現在のカウント:1");
  });
});

describe("より細かく分割したVuexのテスト", () => {
  it("カウントアップボタンをクリックすると、Storeが更新され、現在のカウントが1になる", async () => {
    const $store = {
      state: {
        count: 0,
      },
      commit: jest.fn(),
    };

    const wrapper = shallowMount(counterView, {
      global: {
        mocks: {
          $store, // $store: $store の省略記法です
        },
      },
    });

    await wrapper.get("button").trigger("click");
    // store.commitが正しく呼ばれることを確認
    expect($store.commit).toHaveBeenCalled();
  });
});
