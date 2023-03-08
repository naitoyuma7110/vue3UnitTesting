import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vueの初期テスト', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    // wrapperにマウントした際、propsにmsgを渡す
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    // text()でレンダリング時のテキストを取得し、渡したmsgが表示されているか確認
    expect(wrapper.text()).toMatch(msg);
  });
});
