// Promiseを返す非同期関数
const fetchData = (num) => {
  // Promiseオブジェクトを返す（データ + 実行結果）
  return new Promise((resolve, reject) => {
    // 10秒後にnumに応じて、resolve or rejectを返す
		setTimeout(() => {
			if (num !== -1) {
				resolve("success");
			} else {
				reject("error");
			}
		}, 1000);
	});
};

it("Promiseのテスト（resolve）", () => {
	// マッチャによる検査が1回呼ばれることを確認
	expect.assertions(1);

	// itのreturnにPromiseを返す処理を指定
  // 今回のテストではfetchDataをreturnする事で、Promiseが解決するまで待機する
	// return fetchData(1).then((result) => {
	// 	expect(result).toBe("success");
  // });

  // resolveを使用した省略表現
  return expect(fetchData(1)).resolves.toBe("success");
});

// rejectも同様
it("Promiseのテスト（reject）", () => {
	expect.assertions(1);
	// return fetchData(-1).catch((e) => {
	// 	expect(e).toBe("error");
  // });

  // rejectsを使用した省略表現
  return expect(fetchData(-1)).rejects.toBe("error");
});
