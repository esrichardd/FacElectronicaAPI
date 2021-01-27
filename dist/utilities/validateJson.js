"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonschema_1 = __importDefault(require("jsonschema"));
const jsonBilling_1 = require("./jsonBilling");
const Validator = jsonschema_1.default.Validator;
let v = new Validator();
let error = [];
const validateJson = (req) => {
    v.addSchema(jsonBilling_1.jsonPersonPhone, '/person_phone');
    let validation = v.validate(req.body, jsonBilling_1.jsonBilling);
    if (!validation.valid) {
        validation.errors.forEach((element) => {
            error.push(`${element.path[0] == undefined ? '' : element.path[0]} ${element.message}`);
        });
        return {
            code: 0,
            status: 'fail',
            message: 'Error en el JSON',
            error
        };
    }
    return {
        code: 1,
        status: 'success',
        message: 'Success'
    };
};
exports.default = validateJson;
//# sourceMappingURL=validateJson.js.map