import { paymentTerms } from "./paymentTerms"

export class paymentPlan{
    "INSPECT"?:boolean;
    "INTERNAL_REFERENCE": number;
    "RECORD_STATUS": number;
    "CODE": string;
    "DESCRIPTION": string;
    "AUXIL_CODE": string;
    "AUTH_CODE": string;
    "EARLY_INTRATE": number;
    "LATE_INTRATE": number;
    "COUNTER": number;
    "WORK_DAYS": number;
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
    "PAYMENT_TERMS": {
        "items": paymentTerms[]
    };
    "XBUFS": string;
    "XML_ATTRIBUTE": number;
    "PP_GROUP_CODE": string;
    "BANKACCREF": number;
    "CRDCARD_CODE": string;
    "PP_GROUP_REF": number;
    "GLOBAL_CODE": string;
    "SEPERATE_DAYS": number;
    "LAST_DAY_MONTH": number;
}