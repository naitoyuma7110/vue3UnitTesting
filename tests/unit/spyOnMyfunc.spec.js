import * as utils from "@/utils";

describe("utils.double spyOn の例", () => {
  it("引数を5倍するメソッドにモックする", () => {
		// 元の関数を変数に格納（元に戻す際に利用）
		const originalDouble = utils.double;

		const doubleMock = jest.spyOn(utils, "double");
		doubleMock.mockImplementation((num) => num * 5);
		// mock化したモジュールの関数に対してjest.fn()を使用する形でもＯＫ
		// jest.spyOn(utils, "double");
		// utils.double = jest.fn((num) => num * 5);

		expect(utils.double(5)).toBe(25);

		// モックした関数を元に戻す
		utils.double = originalDouble;
			expect(utils.double(5)).toBe(10);
	});
});