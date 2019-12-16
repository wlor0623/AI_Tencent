const http = require("./http");

function translate(text) {
  http.post('/nlp/nlp_texttranslate ', {
      text: text,
      source: "zh",
      target: "en"
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => {});
}

translate("你好")
