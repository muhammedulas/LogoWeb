export class itemResp{
    "Meta": {
        "href": string;
        "mediaType": string;
        "apiVersion": string;
    };
    "offset": number;
    "count": number;
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
            "Meta": {
                "href": string;
                "mediaType": string;
                "apiVersion": string;
            },
            "INTERNAL_REFERENCE": number;
            "RECORD_STATUS": number;
            "CARD_TYPE": number;
            "CODE": string;
            "NAME": string;
            "CLASS_TYPE": number;
            "USEF_PURCHASING": number;
            "USEF_SALES": number;
            "USEF_MM": number;
            "VAT": number;
            "PAYMENTREF": number;
            "TRACK_TYPE": number;
            "LOCATION_TRACKING": number;
            "TOOL": number;
            "AUTOINCSL": number;
            "LOTS_DIVISIBLE": number;
            "SHELF_LIFE": number;
            "SHELF_DATE": number;
            "DOMINANTREFS1": number;
            "DOMINANTREFS2": number;
            "DOMINANTREFS3": number;
            "DOMINANTREFS4": number;
            "DOMINANTREFS5": number;
            "DOMINANTREFS6": number;
            "DOMINANTREFS7": number;
            "DOMINANTREFS8": number;
            "DOMINANTREFS9": number;
            "DOMINANTREFS10": number;
            "DOMINANTREFS11": number;
            "DOMINANTREFS12": number;
            "IMAGEINC": number;
            "TEXTINC": number;
            "DEPREC_TYPE": number;
            "DEPREC_RATE": number;
            "DEPREC_DURATION": number;
            "SALVAGE_VALUE": number;
            "REVAL_FLAG": number;
            "REVDEPREC_RFLAG": number;
            "PARTIAL_DEPREC": number;
            "DEPREC_TYPE2": number;
            "DEPREC_RATE2": number;
            "DEPREC_DURATION2": number;
            "REVAL_FLAG2": number;
            "REVDEPREC_FLAG2": number;
            "PARTIAL_DEPREC2": number;
            "APPROVED": number;
            "UNITSET_CODE": string;
            "UNITSETREF": number;
            "QCCSETREF": number;
            "DISTRIBUTED_AMOUNT": number;
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
            "DATA_REFERENCE": 2,
            "DIST_LOT_UNITS": 1,
            "COMB_LOT_UNITS": 1,
            "MAINUNIT": "ADET",
            "FACTORY_PARAMS": {
                "Meta": {
                    "href": string;
                    "mediaType": string;
                    "apiVersion": string;
                }
            },
            "WH_PARAMS": {
                "Meta": {
                    "href": string;
                    "mediaType": string;
                    "apiVersion": string;
                }
            },
            "CHARACTERISTICS": {
                "Meta": {
                    "href": string;
                    "mediaType": string;
                    "apiVersion": string;
                }
            },
            "DOMINANT_CLASSES": {
                "Meta": {
                    "href": string;
                    "mediaType": string;
                    "apiVersion": string;
                }
            },
            "UNITS": {
                "Meta": {
                    "href": string;
                    "mediaType": string;
                    "apiVersion": string;
                }
            },
            "COMPOSITES": {
                "Meta": {
                    "href": string;
                    "mediaType": string;
                    "apiVersion": string;
                }
            },
            "GL_LINKS": {
                "Meta": {
                    "href": string;
                    "mediaType": string;
                    "apiVersion": string;
                }
            },
            "SUPPLIERS": {
                "Meta": {
                    "href": string;
                    "mediaType": string;
                    "apiVersion": string;
                }
            },
            "XCNT": number;
            "LANGP":"",
            "XML_ATTRIBUTE": number;
            "DIST_POINT": number;
            "CAN_USE_IN_TRANS": number;
            "ADD_TAX_REF": number;
            "EXT_ACC_FLAGS": number;
            "MULTI_ADD_TAX": number;
            "ADDTAXLIST": {
                "Meta": {
                    "href": string;
                    "mediaType": string;
                    "apiVersion": string;
                }
            },
            "PACKET": number;
            "SALVAGE_VAL": number;
            "SELVAT": number;
            "RETURNVAT": number;
            "SELPRVAT": number;
            "RETURNPRVAT": number;
            "LID_CONFIRMED": number;
            "QPRODS": {
                "Meta": {
                    "href": string;
                    "mediaType": string;
                    "apiVersion": string;
                }
            },
            "QPRODSUBCONTS": {
                "Meta": {
                    "href": string;
                    "mediaType": string;
                    "apiVersion": string;
                }
            },
            "MARKREF": number;
            "IMG2INC": number;
            "EXTCRD_FLAGS": number;
            "MIN_ORD_AMNT": number;
            "FREIGHT_TYPE_DEF1": number;
            "FREIGHT_TYPE_DEF2": number;
            "FREIGHT_TYPE_DEF3": number;
            "FREIGHT_TYPE_DEF4": number;
            "FREIGHT_TYPE_DEF5": number;
            "FREIGHT_TYPE_DEF6": number;
            "FREIGHT_TYPE_DEF7": number;
            "FREIGHT_TYPE_DEF8": number;
            "FREIGHT_TYPE_DEF9": number;
            "FREIGHT_TYPE_DEF10": number;
            "QPRODAMNT": number;
            "QPROD_UOM": number;
            "QPRODSOURCEINDEX": number;
            "QPROD_DEPARTMENT": number;
            "QPRODSUB_AMOUNT": number;
            "QPRODSUB_UOM": number;
            "QPRODSUB_SOURCEINDEX": number;
            "QPRODSUB_DEPARTMENT": number;
            "TEXTINCENG": number;
            "LOSTFACTOR": number;
            "GENIUSFLDSLIST": {
                "Meta": {
                    "href": string;
                    "mediaType": string;
                    "apiVersion": string;
                }
            },
            "ADD_COST": number;
            "DEFNFLDSLIST": {
                "Meta": {
                    "href": string;
                    "mediaType": string;
                    "apiVersion": string;
                }
            },
            "WFLOWCARDREF": number;
            "CODE_CHANGED": number;
            "AVR_WH_DURAITON": number;
            "IMAGE1_SIZE": number;
            "IMAGE2_SIZE": number;
            "CANCONFIGURE": number;
            "CHARSETREF": number;
            "VGEN_DATA_REFERENCE": number;
            "VRNTEXCEPTIONS": {
                "Meta": {
                    "href": string;
                    "mediaType": string;
                    "apiVersion": string;
                }
            },
            "VRNTCODETEMPS": {
                "Meta": {
                    "href": string;
                    "mediaType": string;
                    "apiVersion": string;
                }
            },
            "VRNTEXCPTEMPS": {
                "Meta": {
                    "href": string;
                    "mediaType": string;
                    "apiVersion": string;
                }
            },
            "CONSCODEREF": number;
            "PROJECTREF": number;
            "UPDATECHILDS": number;
            "CAN_DEDUCT": number;
            "EXPENSE": number;
            "EXIM_TAX1": number;
            "EXIM_TAX2": number;
            "EXIM_TAX3": number;
            "EXIM_TAX4": number;
            "EXIM_TAX5": number;
            "KDV_DEPT_NR": number;
            "SCALES": number;
            "SCALE_NR": number;
            "APP_SPE_VAT_MATRAH": number;
            "FLTIMAGE1": number;
            "FLTIMAGE2": number;
            "SALE_DEDUCTION_PART1": number;
            "SALE_DEDUCTION_PART2": number;
            "PURCH_DEDUCTION_PART1": number;
            "PURCH_DEDUCTION_PART2": number;
            "PRODUCT_LEVEL": number;
            "PORD_AMOUNT_TOLERANCE": number;
            "SORD_AMOUNT_TOLERANCE": number;
            "ALTERNATIVES": {
                "Meta": {
                    "href": string;
                    "mediaType": string;
                    "apiVersion": string;
                }
            },
            "PUBLICCOUNTRYREF": number;
            "MOLD": number;
            "MOLD_LIFETRACKTYPE": number;
            "MOLD_USAGELIFE": number;
            "MOLD_FACTOR": number;
            "MOLD_MAINTNUMBER": number;
            "MOLD_MAINTLIFETYPE": number;
            "MOLD_MAINTLIFE": number;
            "MOLD_LIFEASRATIO": number;
            "MOLD_MAINTTYPE": number;
            "MOLD_MAINTBEGDATE": string;
            "MOLD_MAINTPERIOD": number;
            "MOLD_MAINTPERUNIT": number;
            "OBTAIN_TYPE": number;
            "GAIN_TYPE": number;
            "SALES_LIMIT_QUANTITY": number;
            "NO_DISCOUNT": number;
            "GUID": string;
        }
    ]
}