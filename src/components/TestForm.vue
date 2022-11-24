<template>
  <form @submit.prevent>
    <section class="basic-info">
      <h1>基本情報</h1>

      <section class="name">
        <h2>名前</h2>
        <input id="name" type="text" v-model="name" />
      </section>

      <section class="gender">
        <h2>性別</h2>
        <input
          id="man"
          type="radio"
          name="gender"
          value="man"
          v-model="gender"
        />
        <label for="man">男</label>
        <input
          id="woman"
          type="radio"
          name="gender"
          value="woman"
          v-model="gender"
        />
        <label for="woman">女</label>
        <input
          id="other"
          type="radio"
          name="gender"
          value="other"
          v-model="gender"
        />
        <label for="other">その他</label>
      </section>

      <section class="hobby">
        <h2>趣味</h2>
        <input id="drive" type="checkbox" value="drive" v-model="hobbies" />
        <label for="drive">ドライブ</label>
        <input id="travel" type="checkbox" value="travel" v-model="hobbies" />
        <label for="travel">旅行</label>
        <input
          id="programing"
          type="checkbox"
          value="programing"
          v-model="hobbies"
        />
        <label for="programing">プログラミング</label>
      </section>
    </section>

    <section class="contact-body">
      <h1>お問いわせ</h1>

      <section class="contact-type">
        <h2>お問い合わせ種別</h2>
        <select id="contact-type" v-model="contactType">
          <option value="1">質問・要望</option>
          <option value="2">仕事の依頼</option>
          <option value="3">その他</option>
        </select>
      </section>

      <section class="contact-content">
        <h2>お問い合わせ内容</h2>
        <textarea id="contact-content" v-model="contactContent"></textarea>
      </section>
    </section>

    <button id="send-btn" @click="submitForm">送信</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      // フォームに入力される値を格納
      name: "",
      gender: "",
      hobbies: [],
      contactType: "",
      contactContent: "",
      // フォームの送信が成功したことを表す
      isSuccess: false,
    };
  },
  methods: {
    submitForm() {
      // 必須項目が空の場合はreturn
      if (this.name === "") return;
      if (this.gender === "") return;
      if (this.contactType === "") return;
      if (this.contactContent === "") return;

      // 送信成功
      this.isSuccess = true;
    },
  },
};
</script>
<style lang="stylus" scoped>
.basic-info
  padding: 0 4rem
  text-align: start
  h1
    text-align: center
    margin: 20px 0
.contact-body
  padding: 0 4rem
  text-align: start
  h1
    text-align: center
</style>
