export class safeDepositSlip {
    "INTERNAL_REFERENCE": number;
    "TYPE": number;
    "SD_CODE": string;
    "CARDREF": number;
    "SD_CODE_CROSS": string;
    "VCARDREF": number;
    "SD_NUMBER_CROSS": string;
    "CROSS_DATA_REFERENCE": number;
    "CLIENTREF": number;
    "GL_CODE1": string;
    "ACCREF": number;
    "OHP_CODE1": string;
    "CENTERREF": number;
    "GL_CODE2": string;
    "CSACCREF": number;
    "OHP_CODE2": string;
    "CSCENTERREF": number;
    "DATE": string;
    "HOUR": number;
    "MINUTE": number;
    "DIVISION": number;
    "DEPARTMENT": number;
    "DEST_DIVISION": number;
    "DEST_DEPARTMENT": number;
    "AUXIL_CODE": string;
    "AUTH_CODE": string;
    "NUMBER": string;
    "MASTER_TITLE": string;
    "MASTER_TITLE2": string;
    "DESCRIPTION": string;
    "AMOUNT": number;
    "SIGN": number;
    "RC_XRATE": number;
    "RC_AMOUNT": number;
    "TC_XRATE": number;
    "TC_AMOUNT": number;
    "CURR_TRANS": number;
    "GL_POSTED": number;
    "CANCELLED": number;
    "ACCFICHEREF": number;
    "PRINT_COUNTER": number;
    "PRINT_DATE": string;
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
    "CANCELLEDACC": number;
    "CURRSEL_TOTALS": number;
    "CURRSEL_DETAILS": number;
    "TRADING_GRP": string;
    "TEXTINC": number;
    "DATA_SITEID": number;
    "DATA_REFERENCE": number;
    "ATTACHMENT_ARP": {
        "items": [
            {
                "INTERNAL_REFERENCE": number;
                "ARP_CODE": string;
                "CLIENTREF": number;
                "GL_CODE1": string;
                "CLACCREF": number;
                "OHP_CODE1": string;
                "CLCENTERREF": number;
                "OHP_CODE2": string;
                "CASHCENTERREF": number;
                "GL_CODE2": string;
                "CASHACCOUNTREF": number;
                "VIRMANREF": number;
                "SOURCEFREF": number;
                "DATE": string;
                "DEPARTMENT": number;
                "DIVISION": number;
                "MODULENR": number;
                "TRCODE": number;
                "LINENR": number;
                "AUXIL_CODE": string;
                "AUTH_CODE": string;
                "CYPHCODE": string;
                "AUXIL_CODE2": string;
                "TRANNO": string;
                "DOC_NUMBER": string;
                "DESCRIPTION": string;
                "GL_POSTED": number;
                "DEBIT": number;
                "CREDIT": number;
                "SIGN": number;
                "TOTAL_VAT": number;
                "TOTAL_VAT_TC": number;
                "TOTAL_VAT_RC": number;
                "GROSS_AMOUNT": number;
                "GROSS_AMOUNT_TC": number;
                "GROSS_AMOUNT_RC": number;
                "NET_AMOUNT": number;
                "NET_AMOUNT_TC": number;
                "NET_AMOUNT_RC": number;
                "AMOUNT": number;
                "CURR_TRANS": number;
                "TC_XRATE": number;
                "TC_AMOUNT": number;
                "RC_XRATE": number;
                "RC_AMOUNT": number;
                "BNLN_TC_CURR": number;
                "BNLN_TC_XRATE": number;
                "BNLN_TC_AMOUNT": number;
                "EXTENREF": number;
                "PAYMENT_CODE": string;
                "PAYDEFREF": number;
                "ACCFICHEREF": number;
                "PRINTCNT": number;
                "PRINT_DATE": string;
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
                "CANCELLED": number;
                "TRGFLAG": number;
                "TRADING_GRP": string;
                "CURRSEL_TRANS": number;
                "SINGLE_PAYMENT": number;
                "DISCOUNTED": number;
                "DISCOUNT_RATE": number;
                "STOPPAGE_AMOUNT": number;
                "STOPPAGE_AMOUNT_TC": number;
                "STOPPAGE_AMOUNT_RC": number;
                "VAT_RATE": number;
                "VAT_AMOUNTX": number;
                "VAT_AMOUNTX_TC": number;
                "VAT_AMOUNTX_RC": number;
                "DISCOUNTED_AMOUNT": number;
                "GL_CODE3": string;
                "DISCACCREF": number;
                "OHP_CODE3": string;
                "DISCCENREF": number;
                "GL_CODE4": string;
                "VATRACCREF": number;
                "OHP_CODE4": string;
                "PAYMENT_LIST": {
                    "items": [
                        {
                            "INTERNAL_REFERENCE": number;
                            "CARDREF": number;
                            "DATE": string;
                            "MODULENR": number;
                            "SIGN": number;
                            "FICHEREF": number;
                            "FICHELINEREF": number;
                            "TRCODE": number;
                            "TOTAL": number;
                            "PAID": number;
                            "DAYS": number;
                            "EARLYINTRATE": number;
                            "LATELYINTRATE": number;
                            "CROSSREF": number;
                            "PAIDINCASH": number;
                            "CANCELLED": number;
                            "PROCDATE": string;
                            "TRCURR": number;
                            "TRRATE": number;
                            "REPORTRATE": number;
                            "MODIFIED": number;
                            "REMIND_LEVEL": number;
                            "REMIND_SENT": number;
                            "CROSSCURR": number;
                            "CROSSTOTAL": number;
                            "DISCOUNTED": number;
                            "DATE_SITEID": number;
                            "DATA_REFERENCE": number;
                            "WFSTATUS": number;
                            "CLOSINGRATE": number;
                            "DISCOUNT_DUEDATE": string;
                            "OP_STATUS": number;
                            "XML_ATTRIBUTE": number;
                            "INFLATION_IDX": number;
                            "PAY_NO": number;
                            "DELAY_TOTAL": number;
                            "LAST_SEND_REM_LEV": number;
                            "POINT_TRANS": number;
                            "BANK_PAY_DATE": string;
                            "POS_COMSN": number;
                            "POINT_COMSN": number;
                            "BANKACCREF": number;
                            "BANKACC_CODE": string;
                            "PAYMENT_TYPE": number;
                            "DISCTRDELLIST": string;
                            "CASHACCREF": number;
                            "CASHACC_CODE": string;
                            "TRNET": number;
                            "REPAYPLANREF": number;
                            "DUEDIFF_COMSN": number;
                            "CALC_TYPE": number;
                            "NET_TOTAL": number;
                            "REPAYPLN_APPLIED": number;
                            "PAYTR_CURR": number;
                            "PAYTR_RATE": number;
                            "PAYTR_NET": number;
                            "REPAYPLAN_CODE": string;
                            "BNFCLINE": number;
                            "ORGLOGOID": string;
                            "CREDIT_CARD_NUMBER": string;
                            "VAL_BEG_DATE": string;
                            "RET_REF_NUMBER": string;
                            "DO_CODE": string;
                            "BATCH_NUMBER": string;
                            "APPROVE_NUMBER": string;
                            "POS_TERMINAL_NUMBER": string;
                            "GLOBAL_CODE": string;
                            "CL_BNACC_NUMBER": string;
                            "OLD_TOTAL": number;
                            "OLD_BNACC_NUMBER": string;
                            "LINE_EXP": string;
                            "CURR_DIFF_RATE": number;
                            "CURR_DIFF_CLOSED": number;
                            "CURR_DIFF_CLSREF": number;
                            "VAT_FLAG": number;
                        }
                    ]
                },
                "VATRCENREF": number;
                "PAYMENTREF": number;
                "XBUFS": string;
                "DATA_REFERENCE": number;
                "XML_ATTRIBUTE": number;
                "DATA_SITEID": number;
                "INFLATION_IDX": number;
                "CASH_TRAN_GRP_NO": string;
                "CASH_TRAN_GRPLINE_NO": number;
                "CASH_INFLDX": number;
                "CASH_ORGLOGOID": number;
                "INVOICE_ORGLOGOID": number;
                "CREDIT_CARD_NO": string;
                "PROJECTREF": number;
                "PROJECT_CODE": string;
                "EXIM_FILECODE_CLF": string;
                "EXIM_FILECODE": string;
                "EXIM_FILEREF": number;
                "EXIM_FILELINENR": number;
                "EXIM_PROCNR": number;
                "FUNDSHARERAT": number;
                "FUNDSHARE_AMOUNT": number;
                "FUNDSHARE_AMOUNT_TC": number;
                "FUNDSHARE_AMOUNT_RC": number;
                "MONTH": number;
                "YEAR": number;
                "AFFECT_COLLATRL": number;
                "GRPFIRMTRANS": number;
                "AFFECT_RISK": number;
                "BATCH_NR": string;
                "APPROVE_NR": string;
                "ORGLOGOID": string;
                "BANKACCREF": number;
                "BANKACC_CODE": string;
                "BNACCREF": number;
                "BANK_GL_CODE": string;
                "BNCENTERREF": number;
                "BANK_OHP_CODE": string;
                "DEVIR_PROC_DATE": "1899-12-30T00:00:00",
                "DOC_DATE": "2021-06-13T00:00:00",
                "SALESMANREF": number;
                "SALESMAN_CODE": string;
                "POSCOMMACCREF": number;
                "POSCOMM_GL_CODE": string;
                "POSCOMMCENREF": number;
                "POSCOMM_OHP_CODE": string;
                "POINTCOMMACCREF": number;
                "POINTCOMM_GL_CODE": string;
                "POINTCOMMCENREF": number;
                "POINTCOMM_OHP_CODE": string;
                "VAT_AMOUNT": number;
                "RETCCFCREF": number;
                "RET_CC_FC_NO": string;
                "CAN_DEDUCT": number;
                "DEDUCTION_PART1": number;
                "DEDUCTION_PART2": number;
                "DEDUCTION_AMOUNT": number;
                "DEDUCTION_AMOUNT_TC": number;
                "DEDUCTION_AMOUNT_RC": number;
                "CANT_CRE_DEDUCT": number;
                "INC_DEDUCT_AMOUNT": number;
                "GL_CODE5": string;
                "VAT_DEDUCT_ACCREF": number;
                "OHP_CODE5": string;
                "VAT_DEDUCT_CENREF": number;
                "GL_CODE6": string;
                "VAT_DEDUCT_OTHACCREF": number;
                "OHP_CODE6": string;
                "VAT_DEDUCT_OTHCENREF": number;
                "DISTRIBUTION_TYPE_FNO": number;
                "OFFER_REFERENCE": number;
                "AFFECT_COST": number;
                "SERVICE_REASON": string;
            }
        ]
    }
    "XBUFS": string;
    "DOCALS": string;
    "TEXTCHG": number;
    "ITEXT": string;
    "SMMVATRATE": number;
    "INCOMETAXRATE": number;
    "FUNDSHARERATE": number;
    "SMMDOCODE": string;
    "SMMADDR": string;
    "NUMBERPLATE": string;
    "OPTIONTYPE": number;
    "TAX_ACC_CODE": string;
    "GPTAXACC": number;
    "FUND_ACC_CODE": string;
    "FUNDACC": number;
    "SMM_VAT_ACC_CODE": string;
    "SMMVATACC": number;
    "XML_ATTRIBUTE": number;
    "INFLATION_IDX": number;
    "TRAN_GRP_NO": string;
    "TRAN_GRP_LINE_NO": number;
    "CS_DETDELLIST": string;
    "DETDELLIST": string;
    "CASH_INFLDX": number;
    "CASH_ORGLOGOID": number;
    "INVOICE_ORGLOGOID": number;
    "VAT_INC": number;
    "VAT_RAT": number;
    "VAT_ACCREF": number;
    "VAT_ACC_CODE": string;
    "VAT_TOT": number;
    "PROJECT_CODE": string;
    "PROJECTREF": number;
    "STATUS": number;
    "AFFECT_COLLATRL": number;
    "GRPFIRMTRANS": number;
    "TRAN_NO": string;
    "DOC_NUMBER": string;
    "CONTROL_INFO": number;
    "POS_TRANSFER_INFO": string;
    "CS_TRANS_REFERENCE": number;
    "TAX_NR": string;
    "TCKNO": string;
    "APPROVE": number;
    "APPROVE_DATE": string;
    "ACC_FICHE_SITEID": number;
    "DOC_DATE": string;
    "TAX_OHP_CODE": string;
    "SMM_VAT_OHP_CODE": string;
    "SMMVATCENTREF": number;
    "CASH_ACC_CODE": string;
    "CASH_ACC_REF": number;
    "CASH_OHP_CODE": string;
    "CASH_OHP_REF": number;
    "ORGLOGOID": string;
    "CAN_DEDUCT": number;
    "DEDUCTION_PART1": number;
    "DEDUCTION_PART2": number;
    "CANT_CRE_DEDUCT": number;
    "INC_DEDUCT_AMOUNT": number;
    "DEDUCT_CODE": string;
    "SMM_VAT_DEDUCT_ACC_CODE": string;
    "SMMVATDEDUCTACCREF": number;
    "SMM_VAT_DEDUCT_CEN_CODE": string;
    "SMMVATDEDUCTCENREF": number;
    "SMM_VAT_DEDUCT_OTH_ACC_CODE": string;
    "SMMVATDEDUCTOTHACCREF": number;
    "SMM_VAT_DEDUCT_OTH_CEN_CODE": string;
    "SMMVATDEDUCTOTHCENREF": number;
    "SALESMAN_CODE": string;
    "SALESMANREF": number;
    "CL_TR_CURR": number;
    "CL_TR_RATE": number;
    "CL_TR_NET": number;
    "OFFER_REFERENCE": number;
    "CRCARD_WIZARD": number;
    "SMM_SERIAL_CODE": string;
    "AFFECT_COST": number;
    "TYPE_CODE": string;
    "CANCEL_AUTO_CAMP_PROC": number;
    "CANCEL_AUTO_GL_PROC": number;
    "TIME": number;
    "SERVICE_REASON": string;
    "EINVOICE": number;
    "STOPPAGE_AMOUNT": number;
    "STOPPAGE_AMOUNT_TC": number;
    "STOPPAGE_AMOUNT_RC": number;
    "FUNDSHARE_AMOUNT": number;
    "FUNDSHARE_AMOUNT_TC": number;
    "FUNDSHARE_AMOUNT_RC": number;
    "VAT_AMOUNTX": number;
    "VAT_AMOUNTX_TC": number;
    "VAT_AMOUNTX_RC": number;
    "DEDUCTION_AMOUNT": number;
    "DEDUCTION_AMOUNT_TC": number;
    "DEDUCTION_AMOUNT_RC": number;
    "TOTAL_VAT": number;
    "TOTAL_VAT_TC": number;
    "TOTAL_VAT_RC": number;
    "GROSS_AMOUNT": number;
    "GROSS_AMOUNT_TC": number;
    "GROSS_AMOUNT_RC": number;
    "NET_AMOUNT": number;
    "NET_AMOUNT_TC": number;
    "NET_AMOUNT_RC": number;
    "CROSS_TC_XRATE": number;
    "CROSS_TC_CURR": number;
    "CROSS_TC_AMOUNT": number;
    "GUID": string;
    "EBOOK_DOCDATE": string;
    "EBOOK_NODOCUMENT": number;
    "EBOOK_DOCNR": string;
    "EBOOK_DOCTYPE": number;
    "EBOOK_EXPLAIN": string;
    "EBOOK_PAYTYPE": string;
    "EBOOK_NOPAY": number;
    "ETRADE_STATUS": number;
    "ETRADE_GRPKOD": number;
    "ETRADE_SENDMOD": number;
    "ETRADE_TAXNR": string;
    "ETRADE_TCKNO": string;
    "ETRADE_NAME": string;
    "ETRADE_SURNAME": string;
    "ETRADE_DEFINITION": string;
    "ETRADE_ADDR1": string;
    "ETRADE_ADDR2": string;
    "ETRADE_CITYCODE": string;
    "ETRADE_CITY": string;
    "ETRADE_COUNTRYCODE": string;
    "ETRADE_COUNTRY": string;
    "ETRADE_POSTCODE": string;
    "ETRADE_DISTRICTCODE": string;
    "ETRADE_DISTRICT": string;
    "ETRADE_TOWNCODE": string;
    "ETRADE_TOWN": string;
    "ETRADE_EMAILADDR": string;
    "ETRADE_ISCOMP": number;
}