export class unitSetsResp {

    "Meta": {
        "href": string;
        "mediaType": string;
        "apiVersion": string;
    };
    "offset": number;
    "count": number;
    "totalCount":number;
    "limit":number;
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
        "href":string;
        "mediaType": string;
        "apiVersion": string;
    };
    "items": [
        {
            "INTERNAL_REFERENCE": number;
            "CODE": string;
            "DESCRIPTION": string;
            "TYPE": number;
            "CREATED_BY": number;
            "DATE_CREATED": string;
            "HOUR_CREATED": number;
            "MIN_CREATED": number;
            "SEC_CREATED": number;
            "DATA_REFERENCE": number;
            "UNITS": {
                "items": [
                    {
                        "INTERNAL_REFERENCE": number;
                        "CODE": string;
                        "NAME": string;
                        "UNIT_ORDER": number;
                        "MAIN_UNIT": number;
                        "CONV_FACT1": number;
                        "CONV_FACT2": number;
                        "GLOBAL_CODE": string;
                    }
                ]
            },
            "GUID": string;
        }
    ]
}
