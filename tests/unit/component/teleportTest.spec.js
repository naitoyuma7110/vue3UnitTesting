import { mount } from '@vue/test-utils';
import ModalWindow from '@/components/ModalWindow.vue';

// DOM操作の対象はTeleport
beforeEach(() => {
  // Teleportのレンダリング先のDOMを作成
  // <div id="app"></div>を仮想htmlのbody直下に作成
  const el = document.createElement('div');
  el.id = 'app';
  document.body.appendChild(el);
});

afterEach(() => {
  // デフォルトだとテスト毎にDOMはリセットされないため
  // テスト後にクリーンアップ
  document.body.outerHTML = '';
});

describe('レンダリングテスト', () => {
  it("ModalWindowコンポーネントが`<div id='app'>`直下にレンダリングされる", () => {
    const wrapper = mount(ModalWindow);
    console.log(wrapper.html());

    // beforeで作成したid="app"のDOM以下のHTMLを取得
    const app = document.getElementById('app').innerHTML;

    // wrapperのmount
    expect(app).toContain('<div class="modal-window"><div class="content"></div></div>');
  });

  it("デフォルトslotに`<p>hoge</p>`と渡すと、`<div id='app'>`直下にレンダリングされる", () => {
    // 親から指定したslot要素を受け取ったように設定できる
  });
});

describe('slotでのコンポーネントレンダリング', () => {
  it('デフォルトslotに`CustomInput.vue`を渡すと、`CustomInput.vue`の中身がレンダリングされる', () => {});
});
