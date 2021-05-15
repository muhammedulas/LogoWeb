import { unit } from "./unit";

export class purchasedService{
        "INSPECT": boolean;
        "INTERNAL_REFERENCE": number;
        "CARD_TYPE": number;
        "CODE": string;
        "DESCRIPTION": string;
        "VAT_PERC": number;
        "UNITSET_CODE": string;
        "CREATED_BY": number;
        "DATE_CREATED": string;
        "HOUR_CREATED": number;
        "MIN_CREATED": number;
        "SEC_CREATED": number;
        "DATE_MODIFIED": string;
        "DATA_REFERENCE": number;
        "UNITS": {
            "items": unit[]
        };
        "GL_LINKS": {
            "items": number;

        };
        "RETURNVAT": number;
        "MULTI_ADD_TAX": number;
        "DEDUCTION_PART1": number;
        "DEDUCTION_PART2": number;
}