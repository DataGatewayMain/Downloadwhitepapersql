const { getForms, getFormsbyid, postForms, putForms, deleteForms } = require("../Controller/Formscontroller");

const route = require("express").Router();

route.get("/", getForms);


route.post("/", postForms);



module.exports = route;
