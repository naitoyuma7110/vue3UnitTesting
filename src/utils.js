import axios from "axios";

// 完全自作の関数をexport
export const double = (num) => {
  return num * 2;
};

// axiosを使用したgetリクエストを実行する関数を名前付きexport
export const fetchUserData = async (userId) => {
  // 指定したuserIDに応じてdataを取得
  const endPoint = `https://jsonplaceholder.typicode.com/todos/${userId}`;
  const res = await axios.get(endPoint);

  // axiosで取得したオブジェクトのbodyへはdataでアクセスする？
  return res.data;
};

/*
JSON Placeholder:web公開されているmockデータを返すAPI

エンドポイント
https://jsonplaceholder.typicode.com/users

ユーザIDを指定して取得する場合
https://jsonplaceholder.typicode.com/users/1

ユーザID1のユーザを取得した際の戻り値
{
  userId: 1
  id: 1
  title: "delectus aut autem"
  completed: false
}

*/
