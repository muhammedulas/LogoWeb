export class httpErrResp {
    "status": number;
    "statusText": string;
    "url": string;
    "ok": boolean
    "name": string;
    "message": string;
    "error": {
        Message: string;
        ModelState: {
            OtherError: string[]
            DBError: string[]
    }
    }
}