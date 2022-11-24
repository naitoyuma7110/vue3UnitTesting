import { shallowMount } from "@vue/test-utils";
import CounterUp from "@/components/CounterUp.vue";

// propsが渡されない
describe("propsからdisabledが渡されない場合", () => {
  it("コンポーネントレンダリング時に「現在のカウント:0」と表示される", () => {
    const wrapper = shallowMount(CounterUp);

    expect(wrapper.get("p").text()).toBe("現在のカウント:0");
  });

  it("カウントアップボタンをクリックすると、「現在のカウント:1」と表示される", async () => {
    const wrapper = shallowMount(CounterUp);

    // button要素を取得し@clickイベントを発火
    // イベント発火時はDOMの更新を待つためにasync/awaitを使用する
    // VueのDOM更新は非同期処理で実行される
    await wrapper.get("button").trigger("click");

    expect(wrapper.get("p").text()).toBe("現在のカウント:1");
  });

  it("カウントアップボタンを2回クリックすると、「現在のカウント:2」と表示される", async () => {
    const wrapper = shallowMount(CounterUp);

    await wrapper.get("button").trigger("click");
    await wrapper.get("button").trigger("click");

    expect(wrapper.get("p").text()).toBe("現在のカウント:2");
  });
});

// props=falseが渡される
describe("propsからdisabled=falseが渡された場合", () => {
  it("コンポーネントレンダリング時に「現在のカウント:0」と表示される", () => {
    const wrapper = shallowMount(CounterUp, {
      props: {
        disabled: false,
      },
    });
    expect(wrapper.get("p").text()).toBe("現在のカウント:0");
  });

  it("カウントアップボタンをクリックすると、「現在のカウント:1」と表示される", async () => {
    const wrapper = shallowMount(CounterUp, {
      props: {
        disabled: false,
      },
    });

    await wrapper.get("button").trigger("click");
    expect(wrapper.get("p").text()).toBe("現在のカウント:1");
  });

  it("カウントアップボタンを2回クリックすると、「現在のカウント:2」と表示される", async () => {
    const wrapper = shallowMount(CounterUp, {
      props: {
        disabled: false,
      },
    });

    await wrapper.get("button").trigger("click");
    await wrapper.get("button").trigger("click");
    expect(wrapper.get("p").text()).toBe("現在のカウント:2");
  });
});

// props=trueが渡される
describe("propsからdisabled=trueが渡された場合", () => {
  it("コンポーネントレンダリング時に「現在のカウント:0」と表示される", async () => {
    const wrapper = shallowMount(CounterUp, {
      props: {
        disabled: true,
      },
    });

    expect(wrapper.get("p").text()).toBe("現在のカウント:0");
  });

  it("カウントアップボタンをクリックすると、「現在のカウント:0」と表示される", async () => {
    const wrapper = shallowMount(CounterUp, {
      props: {
        disabled: true,
      },
    });
    await wrapper.get("button").trigger("click");
    expect(wrapper.get("p").text()).toBe("現在のカウント:0");
  });

  it("カウントアップボタンを2回クリックすると、「現在のカウント:0」と表示される", async () => {
    const wrapper = shallowMount(CounterUp, {
      props: {
        disabled: true,
      },
    });
    await wrapper.get("button").trigger("click");
    await wrapper.get("button").trigger("click");
    expect(wrapper.get("p").text()).toBe("現在のカウント:0");
  });
});
