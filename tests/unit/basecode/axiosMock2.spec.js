import { fetchUserData } from "@/utils.js";
import axios from "axios";

// jest.fun(callback):関数のmock化
// jest.mock(module):モジュールのmock化
jest.mock("axios");

describe("正しくモックできること", () => {
  it("axiosをモックしてaxios.getを呼び出すと、戻り値を`{title: 'mock title'}`を返すように設定", async () => {
    const dummyResp = { data: { title: "mock title" } };

    // モック化した関数axiosのgetに続く.mockResolvedValue()を使用してget時のresolve戻り値を指定
    // テスト時のみモジュールを上書きするイメージか…
    // 関数fetchUserDataは既に別ファイルでaxiosを使用して定義されているが
    // import axios from "axios" に続くjest.mock("axios")でfetchUserDataの関数の定義自体を変更している
    // テスト実行時のテストも含めたファイル実行順序を理解しておく必要あり
    axios.get.mockResolvedValue(dummyResp);
    const res = await fetchUserData(1);

    expect(res.title).toBe("mock title");
  });

  it("axiosをモックしてaxios.postを呼び出すと、戻り値を`{dummyStatusCode: 200}`を返すように設定", async () => {
    const dummyResp = { dummyStatusCode: 200 };

    // .postに続くmockResolvedValueでaxios.post時のresolve戻り値を指定
    axios.post.mockResolvedValue(dummyResp);
    const res = await axios.post();

    expect(res.dummyStatusCode).toBe(200);
  });
});
