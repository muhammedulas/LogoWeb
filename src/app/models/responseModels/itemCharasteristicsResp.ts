export class itemCharasteristicsResp {
    "Meta": {
        "href": string;
        "mediaType": string;
        "apiVersion": string;
    };
    "offset": number;
    "count": number;
    "totalCount":number;
    "limit": number;
    "first": {
        "href": string;
        "mediaType": string;
        "apiVersion": string;
    };
    "next": {
        "href": string;
        "mediaType": string;
        "apiVersion": string;
    };
    "previous": {
        "mediaType": string;
        "apiVersion": string;
    };
    "items": [
        {
            "INSPECT":boolean;
            "INTERNAL_REFERENCE": number;
            "CODE": string;
            "NAME": string;
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
            "DATA_REFERENCE": number;
            "VALUES": {
                "items": [
                    {
                        "INTERNAL_REFERENCE": number;
                        "VALNO": number;
                        "CODE": string;
                        "NAME": string;
                    }
                ]
            }
        }
    ]
}