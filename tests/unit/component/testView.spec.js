import { mount } from "@vue/test-utils";
import TestView from "@/views/TestView";

describe("dataのdisabledがfalseの場合", () => {
  it("testchildコンポーネントがレンダリングされている状態で、counteuprコンポーネントに対して、propsでdisabled=falseが渡される", () => {
    // globalオプションにスタブする子コンポーネントを指定
    // スタブ：下位モジュールの代用品、この場合、子コンポーネントをoptionを追跡可能な形に変換する
    const wrapper = mount(TestView, {
      global: { stubs: ["Counter"] },
    });
    // getは要素が見つからない場合例外をスロー,findは何もしない
    const testChild = wrapper.getComponent({ name: "TestChild" });
    const counterUp = wrapper.getComponent({ name: "CounterUp" });

    const childComponentText = testChild.get(".child-component").text();
    // コンポーネントのレンダリングは要素内のテキストを検証する事で確認
    expect(childComponentText).toBe("ChildComponentです");

    // counterUPコンポーネントのprops.disableの値を確認
    expect(counterUp.props("disabled")).toBe(false);
  });
});

describe("propsからdisabled=trueが渡された場合", () => {
  it("childコンポーネントがレンダリングされている状態で、counterコンポーネントに対して、propsでdisabled=trueが渡される", () => {
    // option設定の形式でdataの上書きが可能
    // TestViewのdata.disbledをtrueに書き換える
    const wrapper = mount(TestView, {
      global: { stubs: ["Counter"] },
      data() {
        return {
          disabled: true,
        };
      },
    });

    const testChild = wrapper.getComponent({ name: "TestChild" });
    const counterUp = wrapper.getComponent({ name: "CounterUp" });

    // コンポーネントのレンダリングは要素内のテキストを検証する事で確認
    const childComponentText = testChild.get(".child-component").text();
    expect(childComponentText).toBe("ChildComponentです");

    expect(counterUp.props("disabled")).toBe(true);
    counterUp.get("button").trigger("click");
    expect(counterUp.get("p").text()).toBe("現在のカウント:0");
  });
});
