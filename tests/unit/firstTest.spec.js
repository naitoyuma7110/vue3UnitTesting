// 実際にはテストファイルに関数や変数を記述することはない
const double = (arg) => arg ** 2;

// describe:テストブロックの宣言
describe("double関数", () => {
  // it:テスト単体の宣言
  it("引数に2を渡したら4が返る", () => {
		const result = double(2);

		// expect：予期される値に関する評価メソッド
		expect(result).toBe(4);
	});

  it("引数に10を渡したら100が返る", () => {
  const result = double(10);

    expect(result).toBe(100);
  });
  
  test("引数に100を渡したら10000が返る", () => {
  const result = double(100);

    expect(result).toBe(10000);
    
  });
});