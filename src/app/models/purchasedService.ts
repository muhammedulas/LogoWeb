import { glLink } from "./glLink";
import { unit } from "./unit";

export class purchasedService {
    "INSPECT"?: boolean;
    "INTERNAL_REFERENCE": number;
    "RECORD_STATUS": number;
    "CARD_TYPE": number;
    "CODE": string;
    "PARENTSRVREF": number;
    "PARENT_CODE": string;
    "DESCRIPTION": string;
    "DESCRIPTION2": string;
    "AUXIL_CODE": string;
    "AUXIL_CODE2": string;
    "AUXIL_CODE3": string;
    "AUXIL_CODE4": string;
    "AUXIL_CODE5": string;
    "AUTH_CODE": string;
    "VAT_PERC": number;
    "EXTENREF": number;
    "PAYMENT_CODE": string;
    "PAYMENTREF": number;
    "UNITSET_CODE": string;
    "UNITSETREF": number;
    "CREATED_BY": number;
    "DATE_CREATED": string;
    "HOUR_CREATED": number;
    "MIN_CREATED": number;
    "SEC_CREATED": number;
    "MODIFIED_BY": number;
    "DATE_MODIFIED": string;
    "HOUR_MODIFIED": number;
    "MIN_MODIFIED": number;
    "SEC_MODIFIED": number;
    "DATA_SITEID": number;
    "DATA_REFERENCE": number;
    "XDEFS": string;
    "UNITS": {
        "items": unit[]
    }
    "GL_LINKS": {
        "items": glLink[]
    }
    "MAINUNITCODE": string;
    "XML_ATTRIBUTE": number;
    "RETURNVAT": number;
    "IMPORT_EXPENSES": number;
    "AFFECT_COST": number;
    "ADD_TAXREF": number;
    "ADD_TAXCODE": string;
    "MULTI_ADD_TAX": number;
    "ADDTAXDELLIST": string;
    "DIST_TYPE": number;
    "CANDEDUCT": number;
    "DEDUCT_CODE": string;
    "DEDUCT_DEF": string;
    "DEDUCTION_PART1": number;
    "DEDUCTION_PART2": number;
    "EXT_ACCESS_FLAGS": number;
    "EXEMPT_FROM_TAXDECL": number;
    "CURRDIFF": number;
    "PROJECTREF": number;
    "PROJECT_CODE": string;
    "GTIP_CODE": string;
    "CPA_CODE": string;
    "PUBLICCOUNTRYREF": number;
    "PUBLIC_COUNTRY_CODE": string;
    "PUBLIC_COUNTRY_NAME": string;
    "OPPOSESRVREF": number;
    "COUNTER_SRV_CODE": string;
    "VEHICLE_EXP": number;
    "VEHICLE_RENT": number;
}