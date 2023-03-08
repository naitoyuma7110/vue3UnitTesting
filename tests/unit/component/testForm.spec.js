import { shallowMount } from '@vue/test-utils';
import TestForm from '@/components/TestForm.vue';

describe('初期状態のテスト', () => {
  it('名前が空文字列である', () => {
    const wrapper = shallowMount(TestForm);
    const nameInput = wrapper.get('#name');
    // 要素が持つinput[type="text"]のValueにアクセス
    expect(nameInput.element.value).toBe('');
  });

  it('性別が未選択である', () => {
    const wrapper = shallowMount(TestForm);
    // input[type="radio or chackbox"]のValueにアクセス
    const isCheckedMan = wrapper.get('#man').element.checked;
    const isCheckedWoman = wrapper.get('#woman').element.checked;
    const isCheckedOther = wrapper.get('#other').element.checked;

    expect(isCheckedMan).toBe(false);
    expect(isCheckedWoman).toBe(false);
    expect(isCheckedOther).toBe(false);
  });

  it('趣味が未選択である', () => {
    const wrapper = shallowMount(TestForm);

    const isCheckedDrive = wrapper.get('#drive').element.checked;
    const isCheckedTravel = wrapper.get('#travel').element.checked;
    const isCheckedPrograming = wrapper.get('#programing').element.checked;

    expect(isCheckedDrive).toBe(false);
    expect(isCheckedTravel).toBe(false);
    expect(isCheckedPrograming).toBe(false);
  });

  it('お問い合わせ種別が未選択である', () => {
    const wrapper = shallowMount(TestForm);
    const selectedVal = wrapper.get('#contact-type').element.value;
    expect(selectedVal).toBe('');
  });

  it('お問い合わせ内容が未入力である', () => {
    const wrapper = shallowMount(TestForm);
    const contentVal = wrapper.get('#contact-content').element.value;
    expect(contentVal).toBe('');
  });

  it('送信ボタンをクリックしても`isSuccess`が`false`である', () => {
    const wrapper = shallowMount(TestForm);
    wrapper.get('#send-btn').trigger('click');
    expect(wrapper.vm.isSuccess).toBe(false);
  });
});

describe('フォームの入力テスト（v-model）', () => {
  it('変数`name`に「山田太郎」を代入すると、inputに「山田太郎」という値が入る', () => {
    const wrapper = shallowMount(TestForm, {
      data() {
        return {
          name: '山田太郎',
        };
      },
    });
    const nameInput = wrapper.get('#name');
    expect(nameInput.element.value).toBe('山田太郎');
  });

  it('変数`gender`に「man」を代入すると、ラジオボタンの「男」が選択される', () => {
    const wrapper = shallowMount(TestForm, {
      data() {
        return {
          gender: 'man',
        };
      },
    });

    const isCheckedMan = wrapper.get('#man').element.checked;
    expect(isCheckedMan).toBe(true);
  });

  it('変数`hobbies`に「drive」を追加すると、チェックボックスの「ドライブ」が選択される', () => {
    const wrapper = shallowMount(TestForm, {
      data() {
        return {
          hobbies: ['drive'],
        };
      },
    });
    const isCheckedDrive = wrapper.get('#drive').element.checked;

    expect(isCheckedDrive).toBe(true);
  });

  it('変数`contactType`に「1」を代入すると、セレクトボックスの「質問・要望」が選択される', () => {});

  it('変数`contactContent`に「サンプルテキスト」を代入すると、テキストエリアに「サンプルテキスト」という値が入る', () => {});

  it('名前入力欄に「山田太郎」と入力すると、変数`name`に「山田太郎」が格納される', () => {});

  it('性別選択欄で「女」を選択すると、変数`gender`に「woman」が格納される', () => {});

  it('趣味選択欄で「プログラミング」を選択すると、変数`hobbies`に「programing」が追加される', () => {});

  it('お問い合わせ種別選択欄で「仕事の依頼」を選択すると、変数`contactType`に「2」が格納される', () => {});

  it('お問い合わせ内容入力欄で「サンプルテキスト」を入力すると、変数`contactContent`に「サンプルテキスト」が格納される', () => {});
});

describe('必須項目不足のテスト', () => {
  it('名前に「山田太郎」と入力して送信ボタンをクリックしても`isSuccess`が`false`である', () => {});

  it('性別選択欄で「女」を選択して送信ボタンをクリックしても`isSuccess`が`false`である', () => {});

  it('お問い合わせ種別選択欄で「仕事の依頼」を選択して送信ボタンをクリックしても`isSuccess`が`false`である', () => {});

  it('お問い合わせ内容入力欄で「お願いします」と入力して送信ボタンをクリックしても`isSuccess`が`false`である', () => {});

  it('名前以外の項目を全て埋めて送信ボタンをクリックしても`isSuccess`が`false`である', () => {});

  it('性別以外の項目を全て埋めて送信ボタンをクリックしても`isSuccess`が`false`である', () => {});

  it('お問い合わせ種別以外の項目を全て埋めて送信ボタンをクリックしても`isSuccess`が`false`である', () => {});

  it('お問い合わせ内容以外の項目を全て埋めて送信ボタンをクリックしても`isSuccess`が`false`である', () => {});
});

describe('フォームが正しく送信されるテスト', () => {
  it('全ての項目を埋めて送信ボタンをクリックすると、`isSuccess`が`true`になる', () => {});

  it('趣味以外の項目を埋めて送信ボタンをクリックすると、`isSuccess`が`true`になる', () => {});
});
