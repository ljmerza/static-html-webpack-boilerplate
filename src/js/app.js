if (module.hot) {
  module.hot.accept();
}

const indexTemplate = require("../templates/index.hbs");
const app = document.getElementById("app");
if(app) {
  app.innerHTML = indexTemplate({});
}