import HandleResponse from './HandleResponse';
import { objectToQueryString, isEmpty } from '../common/Utils';
import CONFIG from '../configs/config';

export function setHeader() {
    let options = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    } as any;

    const token =  localStorage.getItem('token');
    if (!isEmpty(token)) {
        options.Authorization = `Bearer ${JSON.parse(localStorage.getItem('token')!)}`
    }

    return options;
}

export const getToken = async (URL: string) => {
    const requestInit = {
        method: "POST",
        headers: setHeader()
    } as RequestInit;

    const result = await fetch(URL, requestInit);

    return HandleResponse(result);
}

/**
 * Make request with method get
 * @method GET
 * @param url 
 * @param page 
 * @param limit 
 * @param sortbyc 
 * @param sortby 
 * @param search 
 * @param columns 
 * 
 * @return HandleResponse
 */
export const getList = async (URL: string, page = 0, limit: number = 10, offset: number = 10) => {
    const requestInit = {
        method: "GET",
        headers: setHeader()
    } as RequestInit;

    const queryString = page > 0 ? objectToQueryString( { page }, '=', '&') :objectToQueryString( { limit, offset }, '=', '&');
    const result = await fetch(`${URL}?${queryString}`, requestInit);

    return HandleResponse(result);
};


export async function fetchData(URL: string, method: string = 'GET', body?: object) {
    let requestInit = {
        method: method,
        headers: setHeader()
    } as RequestInit;

    if (method === 'POST' || method === 'PUT') {
        requestInit.body = JSON.stringify(body)
    }

    const result = await fetch(URL, requestInit);

    return HandleResponse(result);
}

export async function loginCallback(driver: string, body?: object) {
    return await fetchData(`${CONFIG.API_AUTH_CALLBACK}/${driver}`, 'POST', body);
}

/**
 * Fine one by id and select dynamic columns
 * @method GET
 * @param url 
 * @param id 
 * @param columns 
 * 
 * @return HandleResponse
 */
export const findOne = async (url: string, id: string, columns?: string[]) => {
    var fullUrl: string = "";
    if (columns === undefined) {
        fullUrl = `${url}?id=${id}`;
    } else {
        fullUrl = `${url}?id=${id}&columns=${columns}`;
    }

    const result = await fetch(fullUrl, {
        method: "GET",
        headers: setHeader(),
    });

    return HandleResponse(result);
};


/**
 * Function store data
 * @method POST
 * @param url 
 * @param model 
 * @return HandleResponse
 */
export const Store = async (url: string, model: object) => {
    const result = await fetch(`${url}`, {
        method: "POST",
        headers: setHeader(),
        body: JSON.stringify(model)
    });

    return HandleResponse(result);
};

/**
 * Function edit
 * @param url 
 * @param id 
 */

/**
* Function edit
* @method GET
* @param url 
* 
* @return HandleResponse
*/
export const Edit = async (url: string, id: number | string) => {
    const result = await fetch(`${url}/${id}/edit`, {
        method: "GET",
        headers: setHeader(),
    });

    return HandleResponse(result);
};

/**
 * Function update
 * @method GET
 * @param url
 * @param model
 * @param id
 * 
 * @return HandleResponse
 */
export const Update = async (url: string, model: object, id: string | number) => {
    const result = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: setHeader(),
        body: JSON.stringify(model)
    });

    return HandleResponse(result);
}

/**
 * Function delete
 * @method GET
 * @param url 
 * 
 * @return HandleResponse
 */
export const Destroy = async (url: string, id: string) => {
    const result = await fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: setHeader()
    });

    return HandleResponse(result);
}
