const fetchData = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num !== -1) {
        resolve("success");
      } else {
        reject("error");
      }
    }, 1000);
  });
};

// itのコールバックでasyncを宣言
it("async/awaitのテスト（resolve1）", async () => {
  expect.assertions(1);
  // awaitを使用してfetchDataの処理が完了しresultに代入されるまで待機
  const result = await fetchData(1);
  expect(result).toBe("success");
});

//
it("async/await（reject1）", async () => {
  expect.assertions(1);
  try {
    // try中のrejectはcatchできる？
    await fetchData(-1);
  } catch (e) {
    // rejectの値が"error"ならOK
    expect(e).toBe("error");
  }
});

it("async/awaitのテスト（resolve2）", async () => {
  expect.assertions(1);
  // expectが解決されたPromise(resolve)を受け取り、値が"success"ならOK
  await expect(fetchData(1)).resolves.toBe("success");
});

it("async/await（reject2）", async () => {
  expect.assertions(1);
  await expect(fetchData(-1)).rejects.toBe("error");
});
