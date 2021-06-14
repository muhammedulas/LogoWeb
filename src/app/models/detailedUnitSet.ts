import { detailedUnit } from "./detailedUnit";

export class detailedUnitSet {
    "INSPECT"?:boolean;
    "INTERNAL_REFERENCE"?: number;
    "CODE": string;
    "DESCRIPTION": string;
    "XML_ATTRIBUTE": number;
    "TYPE": number;
    "ITEM_SPECIFIC": number;
    "AUXIL_CODE": string;
    "AUTH_CODE": string;
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
    "WF_STATUS": number;
    "UNITS": {
        "items": detailedUnit[]
    };
    "GUID": string;
}