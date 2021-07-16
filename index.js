"use strict";

// インストールしたライブラリを読み込む
const { FaceClient } = require("@azure/cognitiveservices-face");
const { CognitiveServicesCredentials } = require("@azure/ms-rest-azure-js");

// Azure Face APIを使うための準備
const faceKey = "キー1を入力する";
const faceEndPoint = "エンドポイントを入力する";
const cognitiveServiceCredentials = new CognitiveServicesCredentials(faceKey);
const faceClient = new FaceClient(cognitiveServiceCredentials, faceEndPoint);

const main = async () => {
  // Azure Face APIに画像を送り、結果を受け取る
  const result = await faceClient.face.detectWithUrl("顔写真のURLを記入する", {
    returnFaceAttributes: ["smile", "makeup"], // ここにカンマ(,)区切りでパラメータを追加する
  });

  console.log(result);
  console.log(result[0].faceAttributes.makeup.eyeMakeup);
};

main();
