export class inwardProccessingPermit {
    "INTERNAL_REFERENCE": number;
    "FICHENO": string;
    "BEGDATE": string;
    "ENDDATE": string;
    "DOCODE": string;
    "PRINT_DATE": string;
    "XML_ATTRIBUTE": number;
    "DATA_REFERENCE": number;
    "CREATED_BY": number;
    "DATE_CREATED": string;
    "HOUR_CREATED": number;
    "MIN_CREATED": number;
    "SEC_CREATED": number;
    "DATE_MODIFIED": string;
    "IMPORT_LINES": {
        "items": [
            {
                "INTERNAL_REFERENCE": number;
                "LINETYPE": number;
                "GTIPCODE": string;
                "AMOUNT": number;
                "TRNET": number;
                "TRCURR": number;
                "XML_ATTRIBUTE": number;
                "DATA_REFERENCE": number;
                "GTIPDESC": string;
                "USETCODE": string;
                "UNITCODE": string;
            }
        ]
    }
    "EXPORT_LINES": {
        "items": [
            {
                "INTERNAL_REFERENCE": number;
                "LINETYPE": number;
                "GTIPCODE": string;
                "AMOUNT": number;
                "TRNET": number;
                "TRCURR": number;
                "XML_ATTRIBUTE": number;
                "DATA_REFERENCE": number;
                "GTIPDESC": string;
                "USETCODE": string;
                "UNITCODE": string;
            }
        ]
    }
}