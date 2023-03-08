import { shallowMount } from '@vue/test-utils';
import SomeButton from '@/components/SomeButton.vue';

describe('emitのテスト', () => {
  it('ボタンA,Bをクリックすると`click-btn`というイベントと共に`a,b`という値がemitによって渡される', async () => {
    const wrapper = shallowMount(SomeButton);
    // イベントメソッドは非同期処理を同期的に処理するためPromiseオブジェクトを返すと思われる
    await wrapper.get('#a').trigger('click');
    await wrapper.get('#b').trigger('click');

    // コンポーネントのemitイベントを取得
    const emit = wrapper.emitted();
    console.log(emit);

    // emitによってclick-btnイベントが発火されたか確認
    // toHaveProperty:引数の名前のイベントが取得したemitイベントに含まれるか検証
    expect(emit).toHaveProperty('click-btn');

    // 取得したemitイベントの"click-btn"イベント(一回目？)に"a"が渡されているか検証
    expect(emit['click-btn'][0]).toEqual(['a']);
    expect(emit['click-btn'][1]).toEqual(['b']);
  });

  it('ボタンCをクリックすると`click-btn-c`というイベントがemitによって発行される', () => {
    const wrapper = shallowMount(SomeButton);
    wrapper.get('#c').trigger('click');

    const emit = wrapper.emitted();
    console.log(emit);
    expect(emit).toHaveProperty('click-btn-c');
  });
});
