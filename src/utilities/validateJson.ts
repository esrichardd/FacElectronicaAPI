import { Request } from 'express';
import jsonschema from 'jsonschema';
import { jsonPersonPhone, jsonBilling } from './jsonBilling';

const Validator = jsonschema.Validator;
let v = new Validator();
let error: any[] = [];

const validateJson = (req: Request) => {
    v.addSchema(jsonPersonPhone, '/person_phone');
    let validation = v.validate(req.body, jsonBilling);

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

export default validateJson;
