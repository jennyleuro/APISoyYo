// Molde simulacion llamada


module.exports.serviceQuery = function(body, method, headers, querys, paths) {
    return {
        "body": body,
        "method": method,
        "headers": headers,
        "query": querys,
        "path": paths
    }
}