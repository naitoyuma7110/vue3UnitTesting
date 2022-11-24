// Promiseを返さない非同期関数（完全に非同期）
const fetchData = (f) => {
  // 10秒後にコールバック関数に"finished"を渡し実行する
  setTimeout(() => {
    f("finished!");
  }, 1000);
};

// describe省略も可能
it("コールバック関数のテスト（OK）", (done) => {
  // assertions:検査関数(この場合callback)が呼ばれる回数を指定
  expect.assertions(1);
  function callback(data) {
    try {
      expect(data).toBe("finished!");
      done();
    } catch (error) {
      done(error);
    }
  }

  // fetchDataを実行するも、非同期処理のため実行前にテスト関数が終了し何も実行しないうちにテストが終了してしまう
  // itに関数doneを渡しtry/chatchで明示的にテスト終了 or Errorを宣言する
  fetchData(callback);
});

// 上記テストは実質下記テストと同じ状態
it("コールバック関数のテスト（NG例）", () => {
  // expectがないのでテストが通る状態
});
