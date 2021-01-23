import { Request, Response, NextFunction } from 'express';
import sendToSQS from '../aws/sendToSQS';
import logging from '../config/logging';
import validateJson from '../utilities/validateJson';

const NAMESPACE = 'Controllers';

/** GetTestingRoute */
const getTestingRoute = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'GET API')
    return res.status(200).json({ 0: 'GET API' })
}

/** getDataBilling route */
const getDataBilling = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Send data to getDataBilling', `[REQUEST DATA] - ${req.body}`);
    const returnValidateJson = validateJson(req);

    if (!returnValidateJson.code) {
        return res.status(200).json({ 0: returnValidateJson });
    }

    const responseSendToSQS: any = await sendToSQS(req.body);
    return res.status(200).json({ 0: returnValidateJson, 1: responseSendToSQS });
};

export default { getDataBilling, getTestingRoute };
