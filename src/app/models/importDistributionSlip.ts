export class importDistributionSlip {
    "INTERNAL_REFERENCE": number;
    "FICHENO": string;
    "DATE": string;
    "FTIME": number;
    "PROCESSNR": number;
    "PRINT_DATE": string;
    "CREATED_BY": number;
    "DATE_CREATED": string;
    "HOUR_CREATED": number;
    "MIN_CREATED": number;
    "SEC_CREATED": number;
    "DATE_MODIFIED": string;
    "XML_ATTRIBUTE": number;
    "DATA_REFERENCE": number;
    "EXIMINFO_FILECODE": string;
    "TRANSACTIONS": {
        "items": [
            {
                "INTERNAL_REFERENCE": number;
                "DATE": string;
                "PEG_LINES": {
                    "items": [
                        {
                            "INTERNAL_REFERENCE": number;
                        }
                    ]
                }
            }
        ]
    }
    "LINECNT": number;
    "EXIM_FILELINENR": number;
    "APPROVE_DATE": string;
}