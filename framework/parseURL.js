export default (baseURL) => (request, response) => {
    const parsedURL = new URL(request.url, baseURL);
    const params = {};
    parsedURL.searchParams.forEach((value, key) => (params[key] = value));

    request.pathname = parsedURL.pathname;
    request.params = params;
};
