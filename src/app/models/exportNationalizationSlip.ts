export class exportNationalizationSlip {
    "INTERNAL_REFERENCE": number;
    "TRCODE": number;
    "FICHENO": string;
    "DATE": string;
    "FTIME": string;
    "EXIMPROCNR": number;
    "CREATED_BY": number;
    "DATE_CREATED": string;
    "HOUR_CREATED": number;
    "MIN_CREATED": number;
    "SEC_CREATED": number;
    "DATE_MODIFIED":string;
    "XML_ATTRIBUTE": number;
    "DATA_REFERENCE": number;
    "GENEXCTYPE": number;
    "EXIMFILECODE": string;
    "EXIMFILELNNR": number;
    "TRANSACTIONS": {
        "items": [
            {
                "INTERNAL_REFERENCE": number;
                "DATE": string;
                "FTIME": string;
                "AMOUNT": number;
                "LINENO": number;
                "DATA_REFERENCE": number;
                "AV_AMOUNT": number;
                "UINFO1": number;
                "UINFO2": number;
                "STCODE": string;
                "IMPUEDIT": string;
                "UNITSET_CODE": string;
                "UNIT_CODE": string;
                "EDTCURR": number;
                "SLINETYPE": string;
                "EXIMPROCNR": number;
                "EXIMFILECODE": string;
                "EXIMFILELNNR": number;
            }
        ]
    }
    "PRINT_DATE": string;
    "APPROVE_DATE": string;
}