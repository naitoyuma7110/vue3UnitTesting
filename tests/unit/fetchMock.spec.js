import fetchMock from "fetch-mock-jest";

describe("fetchのモックサンプル", () => {
	it("戻り値をカスタマイズ", async () => {
		// モックしたいURL
		const mockURL = "https://jsonplaceholder.typicode.com/todos/1";
		// ここで設定したURLがfetchで呼ばれると、第２引数に定義した値がレスポンスとして返される
		fetchMock.mock(mockURL, {
			status: 200,
			body: {
				userId: 1,
				id: 1,
				title: "mock value",
				completed: false,
			},
		});

		// ここでmockURLをfetchする処理を呼ぶ
		const response = await fetch(mockURL);
		const result = await response.json();

		expect(result.title).toBe("mock value");
	});
});
