"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const controllers_1 = __importDefault(require("../controllers/controllers"));
const router = express_1.default.Router();
router.post('/generatebilling', controllers_1.default.getDataBilling);
router.get('/', controllers_1.default.getTestingRoute);
module.exports = router;
//# sourceMappingURL=routes.js.map