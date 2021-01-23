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
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const logging_1 = __importDefault(require("../config/logging"));
const NAMESPACE = 'SendToSQS';
aws_sdk_1.default.config.update({ region: 'us-east-1' });
const sqs = new aws_sdk_1.default.SQS({ apiVersion: '2012-11-05' });
const sendToSQS = (e) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        MessageBody: JSON.stringify(e),
        QueueUrl: `https://sqs.us-east-1.amazonaws.com/769068150320/FacElectronica-FuerzaFit`
    };
    return new Promise(resolve => {
        sqs.sendMessage(params, (err, data) => {
            if (err) {
                logging_1.default.error(NAMESPACE, `message: ${err}`);
                resolve(err);
            }
            else {
                logging_1.default.info(NAMESPACE, `message: ${data}`);
                resolve(data);
            }
        });
    });
});
exports.default = sendToSQS;
//# sourceMappingURL=sendToSQS.js.map