import { eximLine } from "./eximLine"
import { paymentList } from "./paymentList"
import { purchaseDispatch } from "./purchaseDispatch"

export class exportTypedPurchaseInvoice{
    "INTERNAL_REFERENCE": number;
    "TYPE": number;
    "NUMBER": string;
    "DATE": string;
    "TIME": number;
    "DOC_NUMBER":string;
    "ARP_CODE": string;
    "POST_FLAGS": number;
    "VAT_RATE": number;
    "TOTAL_DISCOUNTED": number;
    "TOTAL_VAT": number;
    "TOTAL_GROSS":number;
    "TOTAL_NET": number;
    "TC_NET": number;
    "PRINT_DATE": string;
    "CREATED_BY": number;
    "DATE_CREATED": string;
    "HOUR_CREATED": number;
    "MIN_CREATED": number;
    "SEC_CREATED":number;
    "MODIFIED_BY": number;
    "DATE_MODIFIED": string;
    "HOUR_MODIFIED": number;
    "MIN_MODIFIED": number;
    "SEC_MODIFIED": number;
    "CURRSEL_TOTALS": number;
    "DATA_REFERENCE": number;
    "DISPATCHES": {
        "items": purchaseDispatch[]
    }
    "EXIMLINES": {
        "items": eximLine[]
    }
    "PAYMENT_LIST": {
        "items": paymentList[]
    }
    "ORGLOGOID": string;
    "EXIM_CUSTOMDOCDATE": string;
    "EXIM_CLEARANCE_DATE":string;
    "EXIM_DUE_DATE": string;
    "SRVDISTS": {
        "items": [
            {
                "INTERNAL_REFERENCE":number;
                "INFO_DISTTYPE":number;
            }
        ]
    }
    "DEDUCTIONPART1": number;
    "DEDUCTIONPART2": number;
    "APPROVE_DATE": string;
    "TOTAL_NET_STR": string;
    "ESTATUS": number;
    "ESTARTDATE": string;
    "EENDDATE": string;
    "EINVOICE_TUPASSPORTDATE": string;
    "EINVOICE_EXITDATE": string;
    "EINVOICE_TURETPRICESTR": string;
    "EBOOK_DOCDATE": string;
    "ESEND_DATE": string;
}