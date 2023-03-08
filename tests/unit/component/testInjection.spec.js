import { shallowMount } from '@vue/test-utils';
import TestInjection from '@/components/TestInjection.vue';

describe('正常系', () => {
  it('`provide`で`userId`というキーで`001`を渡すと、`<p>001</p>`と表示される', () => {
    // globalオプションで親コンポーネントがprovideされ、子に渡される値を設定できる
    // 本来の使用方法は親：provide:{key:value}、子：inject("key")
    // この場合、親でprovide(userId,"001")を宣言した状態となる
    const wrapper = shallowMount(TestInjection, {
      global: {
        provide: {
          userId: '001',
        },
      },
    });
    expect(wrapper.html()).toContain('<p>001</p>');
  });
});

describe('異常系', () => {
  it('`provide`で`userId2`というキーで`001`を渡すと、`<p></p>`と表示される', () => {
    const wrapper = shallowMount(TestInjection, {
      global: {
        provide: {
          userId2: '001',
        },
      },
    });
    // コンポーネントではinject(userId)でglobalな値を呼び出しているため、
    // userId2にどんな値を設定してもコンポーネントでは呼び出せない
    expect(wrapper.html()).toContain('<p></p>');
  });
});
