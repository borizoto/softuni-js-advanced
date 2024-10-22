function requestValidator(obj) {
    const methodsArr= ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versionsArr= ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const uriPattern = /^[\w.*]+$/gm;
    const msgPattern = /^[^<>&'\"\\]*$/gm;

    if (!methodsArr.includes(obj.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }

    if (!obj.hasOwnProperty("uri")) {
        throw new Error("Invalid request header: Invalid URI");
    }

    if (obj.uri === "" || !obj.uri.match(uriPattern)) {
        throw new Error("Invalid request header: Invalid URI");
    }

    if (!versionsArr.includes(obj.version)) {
        throw new Error("Invalid request header: Invalid Version");
    }

    if (!obj.hasOwnProperty("message")) {
        throw new Error("Invalid request header: Invalid Message");
    }

    if (!obj.message.match(msgPattern)) {
        throw new Error("Invalid request header: Invalid Message");
    }

    return obj;
}
