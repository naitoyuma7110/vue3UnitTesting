const user = {};

describe("jest.fn()の利用例", () => {
  // it/test前の初期化
  beforeEach(() => {
    user.name = "山田太郎";
    user.hobbies = [];
    // hobiies追加処理
    user.addHobby = function (newHobby) {
      this.hobbies.push(newHobby);
    };
    // hobiies取得処理
    user.getHobbies = function () {
      return this.hobbies;
    };
  });

  it("user.addHobby()をモックする", () => {
    // user.addHobby()が正常に機能していることを確認
    user.addHobby("drive");
    expect(user.hobbies).toContain("drive");

    // user.addHobby()をgest.fn()に置き換える
    const mockFunction = jest.fn();
    user.addHobby = mockFunction;

    // user.addHobby()が置換された事を確認
    user.addHobby("dummy");
    expect(user.hobbies).not.toContain("dummy");

    // mock関数が置換後に一回以上呼ばれているが確認
    expect(mockFunction).toHaveBeenCalled();
  });

  it("user.getHobbies()をモックして戻り値を任意の値にする", () => {
    // user.getHobbies()が正常に機能していることを確認
    expect(user.getHobbies().length).toBe(0);

    // user.getHobbies()をmock関数に置換
    // mock関数の処理内容はコールバック関数で設定可能
    const mockFunction = jest.fn(() => "dummy");
    user.getHobbies = mockFunction;

    // user.getHobbies()がモックされたことを確認
    expect(user.getHobbies()).toBe("dummy");
    // mock関数が置換後に一回以上呼ばれているが確認
    expect(mockFunction).toHaveBeenCalled();
  });

  it("user.getHobbies()をモックしてロジックをカスタマイズする", () => {
    // hobbyを追加
    user.addHobby("ドライブ");
    user.addHobby("旅行");
    // user.getHobbies()が正常に機能していることを確認
    expect(user.getHobbies().length).toBe(2);
    expect(user.getHobbies()).toContain("ドライブ");
    expect(user.getHobbies()).toContain("旅行");

    // user.getHobbies()をモックして「`${user.name}の趣味は${user.hobbies}`です」
    // という値を返すように設定
    const mockFunction = jest.fn(() => {
      const stringHobbies = user.hobbies.join(",");
      return `${user.name}の趣味は${stringHobbies}です`;
    });
    user.getHobbies = mockFunction;

    // user.getHobbies()がモックされたことを確認
    expect(user.getHobbies()).toBe("山田太郎の趣味はドライブ,旅行です");
    // モック関数が１回以上呼ばれたことを確認
    expect(mockFunction).toHaveBeenCalled();
  });
});
