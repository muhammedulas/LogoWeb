export class purchaseOrder {
    "INTERNAL_REFERENCE": number;
    "TYPE": number;
    "NUMBER": string;
    "DOC_TRACK_NR": string;
    "DATE": string;
    "TIME": number;
    "DOC_NUMBER": string;
    "AUXIL_CODE": string;
    "AUTH_CODE": string;
    "ARP_CODE": string;
    "CLIENTREF": number;
    "ARP_CODE_SHPM": string;
    "RECVREF": number;
    "SHIPLOC_CODE": string;
    "GL_CODE": string;
    "ACCOUNTREF": number;
    "OHP_CODE": string;
    "CENTERREF": number;
    "SOURCE_WH": number;
    "SOURCE_COST_GRP": number;
    "UPDCURR": number;
    "ADD_DISCOUNTS": number;
    "TOTAL_DISCOUNTS": number;
    "TOTAL_DISCOUNTED": number;
    "ADD_EXPENSES": number;
    "TOTAL_EXPENSES": number;
    "TOTAL_PROMOTIONS": number;
    "TOTAL_VAT": number;
    "TOTAL_GROSS": number;
    "TOTAL_NET": number;
    "RC_RATE": number;
    "RC_NET": number;
    "NOTES1": string;
    "NOTES2": string;
    "NOTES3": string;
    "NOTES4": string;
    "NOTES5": string;
    "NOTES6": string;
    "EXTENREF": number;
    "PAYMENT_CODE": string;
    "PAYDEFREF": number;
    "PRINT_COUNTER": number;
    "PRINT_DATE": string;
    "DIVISION": number;
    "DEPARTMENT": number;
    "ORDER_STATUS": number;
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
    "SALESMAN_CODE": string;
    "SALESMANREF": number;
    "SHIPMENT_TYPE": string;
    "SHIPPING_AGENT": string;
    "CURRSEL_TOTAL": number;
    "CURRSEL_DETAILS": number;
    "TRADING_GRP": string;
    "TEXTINC": number;
    "DATA_SITEID": number;
    "DATA_REFERENCE": number;
    "FACTORY": number;
    "TRANSACTIONS": {
        "items": [
            {
                "DEVIR": string;
                "INTERNAL_REFERENCE": number;
                "TYPE": number;
                "MASTER_CODE": string;
                "STOCKREF": number;
                "ORDFICHEREF": number;
                "CLIENTREF": number;
                "PREVLINEREF": number;
                "PREVLINENO": number;
                "DETLINE": number;
                "LINENO": number;
                "SLIP_TYPE": 2,
                "DATE": string;
                "TIME": string;
                "DETAIL_LEVEL": number;
                "CALC_TYPE": number;
                "OHP_CODE1": string;
                "CENTERREF": number;
                "GL_CODE1": string;
                "ACCOUNTREF": number;
                "GL_CODE2": string;
                "VATACCREF": number;
                "OHP_CODE2": string;
                "VATCENTERREF": number;
                "GL_CODE3": string;
                "PRACCREF": number;
                "OHP_CODE3": string;
                "PRCENTERREF": number;
                "GL_CODE4": string;
                "PRVATACCREF": number;
                "OHP_CODE4": string;
                "PRVATCENREF": number;
                "PROMREF": number;
                "AUXIL_CODE": string;
                "DELVRY_CODE": string;
                "QUANTITY": number;
                "PRICE": number;
                "TOTAL": number;
                "QUANTITY_SHIPPED": number;
                "DISCOUNT_RATE": number;
                "COST_DISTR": number;
                "DISCOUNT_DISTR": number;
                "EXPENSE_DISTR": number;
                "PROMOTION_DISTR": number;
                "VAT_RATE": number;
                "VAT_AMOUNT": number;
                "VAT_BASE": number;
                "TRANS_DESCRIPTION": string;
                "UNIT_CODE": string;
                "UOMREF": number;
                "USREF": number;
                "UNIT_CONV1": number;
                "UNIT_CONV2": number;
                "UNIT_CONV3": number;
                "UNIT_CONV4": number;
                "UNIT_CONV5": number;
                "UNIT_CONV6": number;
                "UNIT_CONV7": number;
                "UNIT_CONV8": number;
                "VAT_INCLUDED": number;
                "ORDER_CLOSED": number;
                "ORDER_RESERVE": number;
                "INUSE": number;
                "DUE_DATE": string;
                "CURR_PRICE": number;
                "PC_PRICE": number;
                "RC_XRATE": number;
                "BILLED_ITEM": number;
                "PAYMENT_CODE": string;
                "PAYDEFREF": number;
                "EXTENREF": number;
                "COMPOSITE": number;
                "SOURCE_WH": number;
                "SOURCE_COST_GRP": number;
                "DIVISION": number;
                "DEPARTMENT": number;
                "TOTAL_NET": number;
                "SALESMANREF": number;
                "ORDER_STATUS": number;
                "DREF": number;
                "TRGFLAG": number;
                "DATA_SITEID": number;
                "DATA_REFERENCE": number;
                "FACTORY": number;
                "NET_DSC_FLAG": number;
                "NET_DSC_RATE": number;
                "NET_DSC_AMOUNT": number;
                "PRODUCED": number;
                "ORDER_CODE": string;
                "DETDELLIST": string;
                "XML_ATTRIBUTE": number;
                "REASON_FOR_NOT_SHP": number;
                "CMPG_LINE_REF": number;
                "CAMPAIGN_INFOS": {
                    "items": [
                        {
                            "CAMPCODE1": string;
                            "CAMPCODE2": string;
                            "CAMPCODE3": string;
                            "CAMPCODE4": string;
                            "CAMPCODE5": string;
                            "PCAMPCODE": string;
                            "CAMP_LN_NO": number;
                        }
                    ]
                },
                "CAMPAIGN_POINT": number;
                "PROM_CLAS_ITEM_CODE": string;
                "PR_RATE": number;
                "GROSS_U_INFO1": number;
                "GROSS_U_INFO2": number;
                "CANCELLED": number;
                "DEM_PEGGED_AMNT": number;
                "TEXTINC": number;
                "SALESMAN_CODE": string;
                "PROJECT_CODE": string;
                "PROJECTREF": number;
                "CURR_TRANSACTIN": number;
                "ITEXT": string;
                "PRCLISTREF": number;
                "AFFECT_COLLATRL": number;
                "VARIANTREF": number;
                "VARIANTCODE": string;
                "VARIANTNAME": string;
                "CANCONFIG": number;
                "VCHARLIST": string;
                "PRIORITY": number;
                "ADD_TAX_RATE": number;
                "ADD_TAX_CONVFACT": number;
                "ADD_TAX_AMOUNT": number;
                "ADD_TAX_ACCREF": number;
                "ADD_TAX_CENTERREF": number;
                "ADD_TAX_AMNTISUPD": number;
                "ADD_TAX_DISC_AMOUNT": number;
                "EX_ADD_TAX_RATE": number;
                "EX_ADD_TAX_CONVF": number;
                "EX_ADD_TAX_AMOUNT": number;
                "EU_VAT_STATUS": number;
                "ADD_TAX_EFFECT_KDV": number;
                "MULTI_ADD_TAX": number;
                "AFFECT_RISK": number;
                "EXCLINE_INTERNAL_REFERENCE": number;
                "EXCLINE_TRANS_REF": number;
                "EXCLINE_PRICE": number;
                "EXCLINE_TOTAL": number;
                "EXCLINE_DIST_COST": number;
                "EXCLINE_DIST_DISC": number;
                "EXCLINE_DIST_EXP": number;
                "EXCLINE_DIST_PROM": number;
                "EXCLINE_VAT_AMOUNT": number;
                "EXCLINE_VAT_MATRAH": number;
                "EXCLINE_LINE_NET": number;
                "EXCLINE_DIST_ADD_EXP": number;
                "EXCLINE_NET_DISC_AMOUNT": number;
                "EXCLINE_VAT_CALC_DIFF": number;
                "EXCLINE_EU_VAT_AMOUNT": number;
                "EXCLINE_ADD_TAX_AMOUNT": number;
                "EXCLINE_ADD_TAX_CONV_FACT": number;
                "EXCLINE_ADD_TAX_DISC_AMOUNT": number;
                "EXCLINE_EX_ADD_TAX_AMOUNT": number;
                "EXCLINE_EX_ADD_TAX_CONVF": number;
                "ADD_TAX_VAT_MATRAH": number;
                "EXCLINE_ADD_TAX_VAT_MATRAH": number;
                "EDT_PRICE": number;
                "EDT_CURR": number;
                "ORG_DUE_DATE": string;
                "ORG_QUANTITY": number;
                "ORG_PRICE": number;
                "AUXIL_CODE2": string;
                "RESERVE_DATE": string;
                "RESERVE_AMOUNT": number;
                "PRCLISTCODE": string;
                "PRCLISTTYPE": number;
                "GLOBAL_ID": string;
                "DEDUCTION_PART1": number;
                "DEDUCTION_PART2": number;
                "CANDEDUCT": number;
                "DEDUCTION_TOT": number;
                "DEDUCTION_TOT_TC": number;
                "OFFERREF": number;
                "OFFTRANSREF": number;
                "PRODUCER_CODE": string;
                "BOMREF": number;
                "BOM_CODE": string;
                "BOM_TYPE": number;
                "BOMREVREF": number;
                "BOM_REV_CODE": string;
                "ROUTINGREF": number;
                "ROUTING_CODE": string;
                "OPERATIONREF": number;
                "OPERATION_CODE": string;
                "WSREF": number;
                "WS_CODE": string;
                "ADDITIONAL_ITEMS_CODE": string;
                "PROMOTION_CODE": string;
                "APPLY_ADD_TAX": number;
                "VATEXCEPT_CODE": string;
                "VATEXCEPT_REASON": string;
                "ADDTAXEXCEPT_CODE": string;
                "ADDTAXEXCEPT_REASON": string;
                "CPA_CODE": string;
                "GTIP_CODE": string;
                "PUBLICCOUNTRYREF": number;
                "PUBLIC_COUNTRY_CODE": string;
                "PUBLIC_COUNTRY_NAME": string;
                "DIST_DISC_VAT": number;
                "GUID": "0DDAA7A4-5E54-49C1-B43E-4DC496959CF9"
            }
        ]
    }
    "XBUFS": string;
    "XCNT": number;
    "DOCALS": string;
    "ITEXT": string;
    "XML_ATTRIBUTE": number;
    "CUST_ORD_NO": string;
    "DLV_CLIENT": number;
    "DOC_TRACKING_NR": string;
    "CANCELLED": number;
    "ORGLOGOID": string;
    "OFFER_REFERENCE": number;
    "OFFALT_REFERENCE": number;
    "OFFER_TYP": number;
    "OFFER_ALTNR": number;
    "CURR_TRANSACTIN": number;
    "TC_RATE": number;
    "TC_NET": number;
    "WITH_PAYMENT": number;
    "PROJECT_CODE": string;
    "PROJECTREF": number;
    "WFLOWCARDREF": number;
    "OP_STATUS": number;
    "UPD_CURR": number;
    "UPD_TRCURR": number;
    "GUARANTOR1_FICHETYPE": number;
    "GUARANTOR1_NR": number;
    "GUARANTOR1_NAMESURNAME": string;
    "GUARANTOR1_ADDR1": string;
    "GUARANTOR1_ADDR2": string;
    "GUARANTOR1_DISTRICT": string;
    "GUARANTOR1_TOWN": string;
    "GUARANTOR1_CITY": string;
    "GUARANTOR1_COUNTRY": string;
    "GUARANTOR1_POSTCODE": string;
    "GUARANTOR1_TELNR1": string;
    "GUARANTOR1_TELNR2": string;
    "GUARANTOR1_FAXNR": string;
    "GUARANTOR1_SITEID": number;
    "GUARANTOR1_ORGLOGICREF": number;
    "GUARANTOR1_CLIENTREF": number;
    "GUARANTOR1_TAXNR": string;
    "GUARANTOR1_TAXOFFICE": string;
    "GUARANTOR1_TAXXOFFCODE": string;
    "GUARANTOR1_BANKBRANCHCODE": string;
    "GUARANTOR1_BANKBRANCHS": string;
    "GUARANTOR1_BANKACCOUNTS": string;
    "GUARANTOR2_FICHETYPE": number;
    "GUARANTOR2_NR": number;
    "GUARANTOR2_NAMESURNAME": string;
    "GUARANTOR2_ADDR1": string;
    "GUARANTOR2_ADDR2": string;
    "GUARANTOR2_DISTRICT": string;
    "GUARANTOR2_TOWN": string;
    "GUARANTOR2_CITY": string;
    "GUARANTOR2_COUNTRY": string;
    "GUARANTOR2_POSTCODE": string;
    "GUARANTOR2_TELNR1": string;
    "GUARANTOR2_TELNR2": string;
    "GUARANTOR2_FAXNR": string;
    "GUARANTOR2_SITEID": number;
    "GUARANTOR2_ORGLOGICREF": number;
    "GUARANTOR2_CLIENTREF": number;
    "GUARANTOR2_TAXNR": string;
    "GUARANTOR2_TAXOFFICE": string;
    "GUARANTOR2_TAXOFFCODE": string;
    "GUARANTOR2_BANKBRANCHCODE": string;
    "GUARANTOR2_BANKBRANCHS": string;
    "GUARANTOR2_BANKACCOUNTS": string;
    "AFFECT_COLLATRL": number;
    "TOTAL_ADD_TAX": number;
    "TOTAL_EX_ADD_TAX": number;
    "AFFECT_RISK": number;
    "EXCHINFO_INTERNAL_REFERENCE": number;
    "EXCHINFO_FICHE_REF": number;
    "EXCHINFO_ADD_DISCOUNTS": number;
    "EXCHINFO_TOTAL_DISCOUNTS": number;
    "EXCHINFO_TOTAL_DISCOUNTED": number;
    "EXCHINFO_ADD_EXPENSES": number;
    "EXCHINFO_TOTAL_EXPENSES": number;
    "EXCHINFO_DIST_EXPENSE": number;
    "EXCHINFO_TOTAL_DEPOZITO": number;
    "EXCHINFO_TOTAL_PROMOTIONS": number;
    "EXCHINFO_VAT_INC_GROSS": number;
    "EXCHINFO_TOTAL_VAT": number;
    "EXCHINFO_GROSS_TOTAL": number;
    "EXCHINFO_TOTAL_ADD_TAX": number;
    "EXCHINFO_TOTAL_EX_ADD_TAX": number;
    "EXCHINFO_BAGKUR": number;
    "EXCHINFO_STOPAJ": number;
    "EXCHINFO_SSDF": number;
    "EXCHINFO_BORSA": number;
    "EXCHINFO_KOMISYON": number;
    "EXCHINFO_KOM_KDV": number;
    "EXCHINFO_EK1": number;
    "EXCHINFO_EK2": number;
    "EXCHINFO_EK3": number;
    "EXCHINFO_EK4": number;
    "EXCHINFO_EK5": number;
    "PAYMENT_TYPE": number;
    "APPROVE": number;
    "APPROVE_DATE": string;
    "GUID": string;
    "FC_STATUS_NAME": string;
    "DEDUCTIONPART1": number;
    "DEDUCTIONPART2": number;
    "GLOBAL_ID": string;
    "CANCEL_AUTO_CAMP_PROC": number;
    "CAMPAIGN_CODE": string;
    "APPLY_ARP_DISCOUNT": number;
    "DEVIR": number;
    "DELIVERY_CODE": string;
    "ORIGINAL_DATE": string;
    "ACTIVITY_RENTING": number;
    "ADD_DISCOUNTS_VAT": number;
    "EINVOICE_TYPE": number;
    "EINVOICE": number;
    "EINVOICE_PROFILEID": number;
    "EINVOICE_STATUS": number;
    "EINVOICE_STARTDATE": string;
    "EINVOICE_ENDDATE": string;
    "EINVOICE_DESCRIPTION": string;
    "EINVOICE_DURATION": number;
    "EINVOICE_DURATIONTYPE": number;
    "EINVOICE_TAXTYPE": number;
    "EINVOICE_TUNAME": string;
    "EINVOICE_TUSURNAME": string;
    "EINVOICE_TUPASSPORTNO": string;
    "EINVOICE_TUPASSPORTDATE": string;
    "EINVOICE_TUNATIONALITY": string;
    "EINVOICE_TUNATIONALITYNAME": string;
    "EINVOICE_TUBANKNAME": string;
    "EINVOICE_TUBNACCOUNTNO": string;
    "EINVOICE_TUBNBRANCH": string;
    "EINVOICE_TUPAYMENTNOTE": string;
    "EINVOICE_TUBNCURR": string;
    "EINVOICE_ADDR1": string;
    "EINVOICE_ADDR2": string;
    "EINVOICE_CITYCODE": string;
    "EINVOICE_CITY": string;
    "EINVOICE_COUNTRYCODE": string;
    "EINVOICE_COUNTRY": string;
    "EINVOICE_DISTRICTCODE": string;
    "EINVOICE_DISTRICT": string;
    "EINVOICE_TOWNCODE": string;
    "EINVOICE_TOWN": string;
    "EINVOICE_EXITTOWN": string;
    "EINVOICE_EXITGATECODE": string;
    "EINVOICE_EXITGATE": string;
    "EINVOICE_AGENCYCODE": string;
    "EINVOICE_AGENCY": string;
    "EINVOICE_EXITCOUNTRYCODE": string;
    "EINVOICE_EXITCOUNTRY": string;
    "EINVOICE_TRANSPORTTYP": number;
    "EINVOICE_TRANSPORTTYPCODE": string;
    "EINVOICE_TRANSPORTTYPNAME": string;
    "EINVOICE_EXITDATE": string;
    "EINVOICE_EXITTIME": string;
    "EINVOICE_FLIGHTNUMBER": string;
    "EINVOICE_GUIDE": string;
    "EINVOICE_TURETPRICE": number;
    "EINVOICE_TURETPRICESTR": string;
    "EINVOICE_SENDEINVCUSTOM": number;
    "EINVOICE_EINVOICETYPSGK": number;
    "EINVOICE_TAXPAYERCODE": string;
    "EINVOICE_TAXPAYERNAME": string;
    "EINVOICE_DOCUMENTNOSGK": string;
    "EINVOICE_DRIVERNAME1": string;
    "EINVOICE_DRIVERSURNAME1": string;
    "EINVOICE_DRIVERTCKNO1": string;
    "EINVOICE_PLATENUM1": string;
    "EINVOICE_CHASSISNUM1": string;
    "EINVOICE_DRIVERNAME2": string;
    "EINVOICE_DRIVERSURNAME2": string;
    "EINVOICE_DRIVERTCKNO2": string;
    "EINVOICE_PLATENUM2": string;
    "EINVOICE_CHASSISNUM2": string;
    "EINVOICE_DRIVERNAME3": string;
    "EINVOICE_DRIVERSURNAME3": string;
    "EINVOICE_DRIVERTCKNO3": string;
    "EINVOICE_PLATENUM3": string;
    "EINVOICE_CHASSISNUM3": string;
    "EINVOICE_CHAINDELIVERY": number;
    "EINVOICE_SELLERCLIENTREF": number;
    "EINVOICE_SELLERCLIENTCODE": string;
    "EINVOICE_TAXNRTOPAY": string;
    "PUBLICBNACCREF": number;
    "PUBLIC_BNACC_CODE": string;
    "PUBLIC_BNACC_IBAN": string;
    "PUBLIC_BNACC_CURRENCY": number;
    "ACCEPT_EINV_PUBLIC": number;
    "EINSTEAD_OF_DISPATCH": number;
    "VATEXCEPT_CODE": string;
    "VATEXCEPT_REASON": string;
    "ADDTAXEXCEPT_CODE": string;
    "ADDTAXEXCEPT_REASON": string;
    "TAX_FREE_CHECK": number;
    "EARCHIVEDETR_LOGICALREF": number;
    "EARCHIVEDETR_ORDFCREF": number;
    "EARCHIVEDETR_INSTALLMENTNUMBER": string;
    "EARCHIVEDETR_EARCHIVESTATUS": number;
    "EARCHIVEDETR_EARCHIVESTATUSOLD": number;
    "EARCHIVEDETR_SENDMOD": number;
    "EARCHIVEDETR_INTSALESADDR": string;
    "EARCHIVEDETR_INTPAYMENTDESC": string;
    "EARCHIVEDETR_INTPAYMENTTYPE": number;
    "EARCHIVEDETR_INTPAYMENTAGENT": string;
    "EARCHIVEDETR_INTPAYMENTDATEORG": number;
    "EARCHIVEDETR_INTPAYMENTDATE": string;
    "EARCHIVEDETR_OCKSERIALNUMBER": string;
    "EARCHIVEDETR_OCKZNUMBER": string;
    "EARCHIVEDETR_OCKFICHENUMBER": string;
    "EARCHIVEDETR_OCKFICHEDATEORG": number;
    "EARCHIVEDETR_OCKFICHEDATE": string;
    "EARCHIVEDETR_ISCOMP": number;
    "EARCHIVEDETR_TAXNR": string;
    "EARCHIVEDETR_TCKNO": string;
    "EARCHIVEDETR_NAME": string;
    "EARCHIVEDETR_SURNAME": string;
    "EARCHIVEDETR_DEFINITION": string;
    "EARCHIVEDETR_ADDR1": string;
    "EARCHIVEDETR_ADDR2": string;
    "EARCHIVEDETR_CITYCODE": string;
    "EARCHIVEDETR_CITY": string;
    "EARCHIVEDETR_COUNTRYCODE": string;
    "EARCHIVEDETR_COUNTRY": string;
    "EARCHIVEDETR_POSTCODE": string;
    "EARCHIVEDETR_DISTRICTCODE": string;
    "EARCHIVEDETR_DISTRICT": string;
    "EARCHIVEDETR_TOWNCODE": string;
    "EARCHIVEDETR_TOWN": string;
    "EARCHIVEDETR_EMAILADDR": string;
    "EARCHIVEDETR_ISPERCURR": number;
    "EARCHIVEDETR_INSTEADOFDESP": number;
    "EARCHIVEDETR_TAXOFFICE": string;
    "EARCHIVEDETR_TELCODES1": string;
    "EARCHIVEDETR_TELCODES2": string;
    "EARCHIVEDETR_TELNRS1": string;
    "EARCHIVEDETR_TELNRS2": string;
    "EARCHIVEDETR_DRIVERNAME1": string;
    "EARCHIVEDETR_DRIVERSURNAME1": string;
    "EARCHIVEDETR_DRIVERTCKNO1": string;
    "EARCHIVEDETR_PLATENUM1": string;
    "EARCHIVEDETR_CHASSISNUM1": string;
    "EARCHIVEDETR_DRIVERNAME2": string;
    "EARCHIVEDETR_DRIVERSURNAME2": string;
    "EARCHIVEDETR_DRIVERTCKNO2": string;
    "EARCHIVEDETR_PLATENUM2": string;
    "EARCHIVEDETR_CHASSISNUM2": string;
    "EARCHIVEDETR_DRIVERNAME3": string;
    "EARCHIVEDETR_DRIVERSURNAME3": string;
    "EARCHIVEDETR_DRIVERTCKNO3": string;
    "EARCHIVEDETR_PLATENUM3": string;
    "EARCHIVEDETR_CHASSISNUM3": string;
    "EARCHIVEDETR_CHAINDELIVERY": number;
    "EARCHIVEDETR_SELLERCLIENTREF": number;
    "EARCHIVEDETR_SELLERCLIENTCODE": string;
}