import AWS from 'aws-sdk';
import logging from '../config/logging';

const NAMESPACE = 'SendToSQS';
AWS.config.update({ region: 'us-east-1' });
const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });

const sendToSQS = async (e: any): Promise<any> => {
    const params = {
        MessageBody: JSON.stringify(e),
        QueueUrl: `https://sqs.us-east-1.amazonaws.com/769068150320/FacElectronica-FuerzaFit`
    };

    return new Promise(resolve => {
        sqs.sendMessage(params, (err, data) => {
            if (err) {
                logging.error(NAMESPACE, `message: ${err}`);
                resolve(err);
            } else {
                logging.info(NAMESPACE, `message: ${data}`);
                resolve(data);
            }
        });
    })
};

export default sendToSQS;
