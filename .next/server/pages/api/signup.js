"use strict";
(() => {
var exports = {};
exports.id = 964;
exports.ids = [964];
exports.modules = {

/***/ 7068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ signup)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./helpers/db-util.js

const connectionString = `mongodb+srv://${"TrailUsers"}:${"IE4e4yFN6tm0e2y0"}@${"trailusers"}.acqlq.mongodb.net/${"TrailUsers"}?retryWrites=true&w=majority`;
async function connectDatabase() {
  const client = await external_mongodb_namespaceObject.MongoClient.connect(connectionString);
  return client;
}
async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}
;// CONCATENATED MODULE: ./components/organisms/Forms/FormValidation.js
const validationPassword = str => {
  const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  return re.test(str);
};
const validationEmail = str => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(str);
};
const Validate = values => {
  let errors = {};

  if (!values.email) {
    errors.email = "Email cannot be empty";
  } else if (!validationEmail(values.email)) {
    errors.email = "Email is incorrect";
  }

  if (!values.password) {
    errors.password = "Password cannot be empty";
  } else if (!validationPassword(values.password)) {
    errors.password = "Password is incorrect. Password should contain at least one number. One lowercase, one uppercase letter and also at least six characters.";
  }

  return errors;
};
;// CONCATENATED MODULE: ./pages/api/signup.js




async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    const userPassword = req.body.password;

    if (!validationEmail(userEmail)) {
      res.status(422).json({
        message: "Invalid email address."
      });
      return;
    }

    if (!validationPassword(userPassword)) {
      res.status(422).json({
        message: "Password is incorrect. Password should contain at least one number. One lowercase, one uppercase letter and also at least six characters."
      });
      return;
    }

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({
        message: "Connecting to the database failed!"
      });
      return;
    }

    try {
      await insertDocument(client, "users", {
        email: userEmail,
        password: userPassword
      });
      client.close();
    } catch (error) {
      res.status(500).json({
        message: "Inserting data failed!"
      });
      return;
    }

    res.status(201).json({
      message: "Signed up!"
    });
  }
}

/* harmony default export */ const signup = (handler);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7068));
module.exports = __webpack_exports__;

})();