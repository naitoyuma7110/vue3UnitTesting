import axios from "axios";
import { fetchUserData } from "@/utils"

describe("axios.get spyOn の例", () => {
	it("axios.getをモックしてfetchUserDataを呼び出すと、戻り値`{title: 'mock title'}`を返すように設定", async () => {
		
    // module内の特定の関数をmock化する
    // axios内のgetメソッドを指定
		jest.spyOn(axios, "get");

		// モックしたaxios.getの戻り値を指定
		const dummyResp = { data: { title: "mock title" } };
		axios.get.mockResolvedValue(dummyResp);

    const res = await fetchUserData(1);

    // おそらくget以外のメソッドはaxiosのデフォルトのまま
		expect(res.title).toBe("mock title");
	});
});

