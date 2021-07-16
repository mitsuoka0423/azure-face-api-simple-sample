'use strict';

const { FaceClient } = require("@azure/cognitiveservices-face");
const { CognitiveServicesCredentials } = require("@azure/ms-rest-azure-js");

// Face APIパラメータ
const faceKey = "キー1を入力する";
const faceEndPoint = "エンドポイントを入力する";

const cognitiveServiceCredentials = new CognitiveServicesCredentials(faceKey);
const faceClient = new FaceClient(cognitiveServiceCredentials, faceEndPoint);

const main = async () => {
  const response = await faceClient.face.detectWithUrl('顔検出したい画像のURLを入力する');
  console.log(response);
};

main();
