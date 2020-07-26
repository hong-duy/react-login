interface IHandleResponse {
    isError: boolean;
    idValidate: boolean;
    message: any;
    result: any;
}

/**
 * 
 * @param res:Response
 * @return IHandleResponse
 */
export default async function HandleResponse(res: Response) {
    let isError = false;
    let idValidate = false;
    let message = null;
    let result = null

    if (res.ok && res.status >= 200 && res.status < 300) {
        result = await res.json();
    }

    if (!res.ok && res.status === 422) {
        idValidate = true;
        message = await res.json();
    }

    if (!res.ok && res.status === 500) {
        isError = true;
        message = res.statusText;
    }

    return { isError, idValidate, message, result } as IHandleResponse;
};
