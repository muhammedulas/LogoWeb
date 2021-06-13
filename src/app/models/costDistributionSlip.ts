import { transaction } from "./transaction";

export class costDistributionSlip {
    "INSPECT": boolean;
    "INTERNAL_REFERENCE": number;
    "FICHENO": string;
    "DATE": string;
    "FTIME": number;
    "DOCODE": string;
    "SPECODE": string;
    "CYPHCODE": string;
    "PROJECTREF": number;
    "PROJECT_CODE": string;
    "ACCOUNTED": number;
    "ACCFICHEREF": number;
    "ACCOUNTEDCNT": number;
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
    "TEXTINC": number;
    "SITEID": number;
    "XML_ATTRIBUTE": number;
    "DATA_REFERENCE": number;
    "WFSTATUS": number;
    "TRANSACTIONS": {
        "items": transaction[]
    }
    "DOCALS": string;
    "XBUFS": string;
    "DOCNRREF": number;
    "LINECNT": number;
    "TEXTCHG": number;
    "ITEXT": string;
    "FCNOCHANGED": number;
    "CURREDLNSRVTRNREF": number;
    "CURREDLNPEGLIST": {
        "items": [
            {
                "INTERNAL_REFERENCE": number;
                "COSTDISTFCREF": number;
                "COSTDISTLNREF": number;
                "SRVFICHEREF": number;
                "SRVTRANSREF": number;
                "INVOICEREF": number;
                "STFICHENO": string;
                "STFICHEREF": number;
                "STTRANSREF": number;
                "STFICHELNNR": number;
                "PARENTSTTRREF": number;
                "EXIMWHFCREF": number;
                "EXIMWHLNREF": number;
                "LINENR": number;
                "ITEMREF": number;
                "TOTALAMNT": number;
                "UNITPRICE": number;
                "UNITRPPRICE": number;
                "ADDEXPENSE": number;
                "ADDRPEXPENSE": number;
                "ISDISTRIBUTED": number;
                "DISTRATE": number;
                "DISTTOTAL": number;
                "STACCREF": number;
                "STC_GL_CODE": string;
                "STCENTERREF": number;
                "STC_OHP_CODE": string;
                "DATA_SITEID": number;
                "XML_ATTRIBUTE": number;
                "DATA_REFERENCE": number;
                "WFSTATUS": number;
                "STTRINFO_LOGICALREF": number;
                "STOCKREF": number;
                "LINETYPE": number;
                "PREVLINEREF": number;
                "PREVLINENO": number;
                "DETLINE": number;
                "TRCODE": number;
                "DATE": "1899-12-30T00:00:00",
                "FTIME": number;
                "GLOBTRANS": number;
                "CALCTYPE": number;
                "PRODORDERREF": number;
                "QPROD_ITEM_TYPE": number;
                "SOURCETYPE": number;
                "SOURCEINDEX": number;
                "SOURCECOSTGRP": number;
                "SOURCEWSREF": number;
                "SOURCEPOLNREF": number;
                "DESTTYPE": number;
                "DESTINDEX": number;
                "DESTCOSTGRP": number;
                "DESTWSREF": number;
                "DESTPOLNREF": number;
                "FACTORYNR": number;
                "IOCODE": number;
                "INVFICHENO": string;
                "INVOICELNNO": number;
                "ARP_CODE": string;
                "CLIENTREF": number;
                "ORDTRANSREF": number;
                "ORDFICHEREF": number;
                "CENTERREF": number;
                "ACCOUNTREF": number;
                "VATACCREF": number;
                "VATCENTERREF": number;
                "PRACCREF": number;
                "PRCENTERREF": number;
                "PRVATACCREF": number;
                "PRVATCENREF": number;
                "PROMREF": number;
                "PAYDEFREF": number;
                "SPECODE": string;
                "DELVRYCODE": string;
                "AMOUNT": number;
                "PRICE": number;
                "TOTAL": number;
                "PRCURR": number;
                "PRPRICE": number;
                "TRCURR": number;
                "TRRATE": number;
                "REPORTRATE": number;
                "DISTCOST": number;
                "DISTDISC": number;
                "DISTEXP": number;
                "DISTPROM": number;
                "DISCPER": number;
                "LINEEXP": string;
                "UOMREF": number;
                "USREF": number;
                "UINFO1": number;
                "UINFO2": number;
                "UINFO3": number;
                "UINFO4": number;
                "UINFO5": number;
                "UINFO6": number;
                "UINFO7": number;
                "UINFO8": number;
                "PLNAMOUNT": number;
                "VATINC": number;
                "VAT": number;
                "VATAMNT": number;
                "VATMATRAH": number;
                "BILLEDITEM": number;
                "BILLED": number;
                "CPSTFLAG": number;
                "RETCOSTTYPE": number;
                "SOURCELINK": number;
                "RETCOST": number;
                "RETCOSTCURR": number;
                "OUTCOST": number;
                "OUTCOSTCURR": number;
                "RETAMOUNT": number;
                "FAREGREF": number;
                "FAATTRIB": number;
                "CANCELLED": number;
                "LINENET": number;
                "DISTADDEXP": number;
                "FADACCREF": number;
                "FADCENTERREF": number;
                "FARACCREF": number;
                "FARCENTERREF": number;
                "DIFFPRICE": number;
                "DIFFPRCOST": number;
                "DECPRDIFF": number;
                "LPRODSTAT": number;
                "PRDEXPTOTAL": number;
                "DIFFREPPRICE": number;
                "DIFFPRCRCOST": number;
                "SALESMANREF": number;
                "FAPLACCREF": number;
                "FAPLCENTERREF": number;
                "FAPROFITACCREF": number;
                "FAPROFITCENTREF": number;
                "FALOSSACCREF": number;
                "FALOSSCENTREF": number;
                "OUTPUTIDCODE": string;
                "DREF": number;
                "COSTRATE": number;
                "XPRICEUPD": number;
                "XPRICE": number;
                "XREPRATE": number;
                "DISTCOEF": number;
                "TRANSQCOK": number;
                "XML_REFERENCE": number;
                "POLINEREF": number;
                "PLNSTTRANSREF": number;
                "NETDISCFLAG": number;
                "NETDISCPERC": number;
                "NETDISCAMNT": number;
                "VATCALCDIFF": number;
                "CONDITIONREF": number;
                "DISTORDERREF": number;
                "DISTORDLINEREF": number;
                "CAMPAIGNREFS1": number;
                "CAMPAIGNREFS2": number;
                "CAMPAIGNREFS3": number;
                "CAMPAIGNREFS4": number;
                "CAMPAIGNREFS5": number;
                "POINTCAMPREF": number;
                "CAMPPOINT": number;
                "PROMCLASITEMREF": number;
                "CMPGLINEREF": number;
                "PLNSTTRANSPERNR": number;
                "PORDCLSPLNAMNT": number;
                "VENDCOMM": number;
                "PREVIOUSOUTCOST": number;
                "COSTOFSALEACCREF": number;
                "PURCHACCREF": number;
                "COSTOFSALECNTREF": number;
                "PURCHCENTREF": number;
                "PREVOUTCOSTCURR": number;
                "EUVATAMOUNT": number;
                "EUVATSTATUS": number;
                "PRRATE": number;
                "ADDTAXRATE": number;
                "ADDTAXCONVFACT": number;
                "ADDTAXAMOUNT": number;
                "ADDTAXPRCOST": number;
                "ADDTAXRETCOST": number;
                "ADDTAXRETCOSTCURR": number;
                "GROSSUINFO1": number;
                "GROSSUINFO2": number;
                "ADDTAXPRCOSTCURR": number;
                "ADDTAXACCREF": number;
                "ADDTAXCENTERREF": number;
                "ADDTAXAMNTISUPD": number;
                "INFIDX": number;
                "ADDTAXCOSACCREF": number;
                "ADDTAXCOSCNTREF": number;
                "PREVIOUSATAXPRCOST": number;
                "PREVATAXPRCOSTCURR": number;
                "PRDORDTOTCOEF": number;
                "DEMPEGGEDAMNT": number;
                "STDUNITCOST": number;
                "STDRPUNITCOST": number;
                "COSTDIFFACCREF": number;
                "COSTDIFFCENREF": number;
                "TEXTINC": number;
                "ADDTAXDISCAMOUNT": number;
                "ORGLOGOID": string;
                "EXIMFICHENO": string;
                "EXIMFCTYPE": number;
                "TRANSEXPLINE": number;
                "INSEXPLINE": number;
                "EXIMFILEREF": number;
                "EXIMPROCNR": number;
                "EISRVDSTTYP": number;
                "MAINSTLNREF": number;
                "MADEOFSHRED": number;
                "FROMORDWITHPAY": number;
                "PROJECTREF": number;
                "STATUS": number;
                "DORESERVE": number;
                "POINTCAMPREFS1": number;
                "POINTCAMPREFS2": number;
                "POINTCAMPREFS3": number;
                "POINTCAMPREFS4": number;
                "CAMPPOINTS1": number;
                "CAMPPOINTS2": number;
                "CAMPPOINTS3": number;
                "CAMPPOINTS4": number;
                "CMPGLINEREFS1": number;
                "CMPGLINEREFS2": number;
                "CMPGLINEREFS3": number;
                "CMPGLINEREFS4": number;
                "PRCLISTREF": number;
                "PORDSYMOUTLN": number;
                "MONTH": number;
                "YEAR": number;
                "EXADDTAXRATE": number;
                "EXADDTAXCONVF": number;
                "INF_DATE": "1899-12-30T00:00:00",
                "DEST_STATUS": number;
                "REGTYPREF": number;
                "REG_TYPE_CODE": string;
                "CPA_CODE": string;
                "GTIP_CODE": string;
                "PUBLICCOUNTRYREF": number;
                "PUBLIC_COUNTRY_CODE": string;
                "PUBLIC_COUNTRY_NAME": string;
                "FUTURE_MONTH_COUNT": number;
                "FUTURE_MONTH_BEGDATE": "1899-12-30T00:00:00",
                "FUTURE_MONTH_ENDDATE": "1899-12-30T00:00:00",
                "QC_TRANSFER_REF": number;
                "QC_TRANSFER_AMOUNT": number;
                "FA_KKEG_AMOUNT": number;
                "KKEGACCREF": number;
                "KKEG_GL_CODE": string;
                "KKEGCENREF": number;
                "KKEG_OHP_CODE": string;
                "KKEGVATACCREF": number;
                "KKEG_VAT_GL_CODE": string;
                "KKEGVATCENREF": number;
                "KKEG_VAT_OHP_CODE": string;
                "EXPRACCREF": number;
                "EXPR_GL_CODE": string;
                "EXPRCNTRREF": number;
                "EXPR_OHP_CODE": string;
                "ADDTAXVATACCREF": number;
                "ADD_TAX_VAT_ACC_CODE": string;
                "ADDTAXVATCENREF": number;
                "ADD_TAX_VAT_OHP_CODE": string;
                "MIDDLEMAN_EXP_TYPE": number;
                "MARKING_TAGNO": string;
                "OWNER": string;
                "TCK_TAXNR": string;
                "FICHENO": string;
                "ITEMCODE": string;
                "ITEMNAME": string;
                "ITEMMAINUNITE": string;
                "VARIANTREF": number;
                "VARIANTCODE": string;
                "VARIANTNAME": string;
                "TYPE": number;
            }
        ]
    }
    "APPROVE": number;
    "APPROVE_DATE": string;
    "ACC_FICHE_SITEID": number;
    "TYPE": number;
    "CANCEL_AUTO_GL_PROC": number

}