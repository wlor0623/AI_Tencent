const md5 = require('md5');

function getReqSign(params, appkey) {
  let sortParams = jsonSort(params);
  let str = "";
  for (const key in sortParams) {
    if (sortParams[key]) {
      str = str + key + "=" + encodeURI(sortParams[key]) + "&"
    }
  }
  str = str + "app_key=" + appkey;
  let sign = md5(str).toUpperCase();
  return sign
}
let params = {
  app_id: "10000",
  key1: "腾讯AI开放平台",
  key2: "示例仅供参考",
  nonce_str: "20e3408a79",
  time_stamp: "1493449657",
}
let appkey = 'a95eceb1ac8c24ee28b70f7dbba912bf';

function jsonSort(jsonData) {
  try {
    let tempJsonObj = {};
    let sdic = Object.keys(jsonData).sort();
    sdic.map((item, index) => {
      tempJsonObj[item] = jsonData[sdic[index]]
    })
    return tempJsonObj;
  } catch (e) {
    return jsonData;
  }
}


console.log(getReqSign(params, appkey));
