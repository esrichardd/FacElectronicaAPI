"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sendToSQS_1 = __importDefault(require("../aws/sendToSQS"));
const logging_1 = __importDefault(require("../config/logging"));
const validateJson_1 = __importDefault(require("../utilities/validateJson"));
const NAMESPACE = 'Controllers';
/** GetTestingRoute */
const getTestingRoute = (req, res, next) => {
    logging_1.default.info(NAMESPACE, 'GET API');
    return res.status(200).json({ 0: 'GET API' });
};
/** getDataBilling route */
const getDataBilling = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    logging_1.default.info(NAMESPACE, 'Send data to getDataBilling', `[REQUEST DATA] - ${req.body}`);
    const returnValidateJson = validateJson_1.default(req);
    if (!returnValidateJson.code) {
        return res.status(200).json({ status: returnValidateJson.status, data: { message: returnValidateJson.message, error: returnValidateJson.error } });
    }
    const responseSendToSQS = yield sendToSQS_1.default(req.body);
    return res.status(200).json({ status: returnValidateJson.status, data: { responseSendToSQS } });
});
exports.default = { getDataBilling, getTestingRoute };
//# sourceMappingURL=controllers.js.map