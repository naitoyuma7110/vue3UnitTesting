import { fetchUserData } from "@/utils.js";

describe("jest.mock()の利用例", () => {
	it("引数に1を渡して帰ってきたJSONのnameが'delectus aut autem'である", async () => {
		// fetchUserDataは非同期処理のため、実行の際はawaitでPromiseの解決を待つ
		// 関数定義でasync/awaitを設定しているのに、実行する時も宣言する？
		const res = await fetchUserData(1);

		expect(res.title).toBe("delectus aut autem");
	});
});