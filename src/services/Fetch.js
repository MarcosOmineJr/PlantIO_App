


export const fetchAPI = async (url, method, token, body='')=>{
    let headers = new Headers();
    headers.append('Authorization', token);
    let init = {
        method:method,
        headers:headers,
        body:body
    }
    let response;

    fetch(url, init).then((r)=>r.json()).then((r)=>response=r);

    return response;
}