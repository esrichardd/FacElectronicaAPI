"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonBilling = exports.jsonPersonPhone = void 0;
exports.jsonPersonPhone = {
    id: '/person_phone',
    type: 'object',
    properties: {
        area_code: { type: 'string' },
        country_code: { type: 'string' },
        number: { type: 'string' }
    }
};
exports.jsonBilling = {
    id: '/jsonBilling',
    type: 'object',
    properties: {
        location_address: { type: 'string' },
        document_kind: { type: 'string' },
        email: { type: 'string' },
        iva_total: { type: 'string' },
        person_phone: { $ref: '/person_phone' },
        person_address: { type: 'string' },
        person_name: { type: 'string' },
        document: { type: 'string' },
        date: { type: 'string' },
        city: { type: 'string' },
        sequential: { type: 'string' },
        items: { type: 'array' },
        amount_before_tax: { type: 'string' },
        total_amount: { type: 'string' },
        location_name: { type: 'string' },
        location_city: { type: 'string' },
        location_phone: { type: 'object' },
        iva_base: { type: 'string' },
        invoice_uuid: { type: 'string' },
    },
    required: [
        'location_address',
        'document_kind',
        'email',
        'iva_total',
        'person_phone',
        'person_address',
        'person_name',
        'document',
        'date',
        'city',
        'sequential',
        'items',
        'amount_before_tax',
        'total_amount',
        'location_name',
        'location_city',
        'location_phone',
        'iva_base',
        'invoice_uuid',
    ]
};
//# sourceMappingURL=jsonBilling.js.map