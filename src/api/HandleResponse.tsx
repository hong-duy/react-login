interface IHandleResponse {
    isError: boolean;
    isValidate: boolean;
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
    let isValidate = false;
    let message = null;
    let result = null

    if (res.ok && res.status >= 200 && res.status < 300) {
        result = await res.json();
    }

    if (!res.ok && res.status === 422) {
        isValidate = true;
        message = await res.json();
    }

    if (!res.ok && res.status === 404) {
        isError = true;
        message = res.statusText;
    }

    if (!res.ok && res.status === 500) {
        isError = true;
        message = res.statusText;
    }

    return { isError, isValidate, message, result } as IHandleResponse;
};
