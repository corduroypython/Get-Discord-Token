var req = webpackJsonp.push([
    [], {
        extra_id: (e, r, t) => e.exports = t
    },
    [
        ["extra_id"]
    ]
]);
for (let e in req.c) {
    if (req.c.hasOwnProperty(e)) {
        let r = req.c[e].exports;
        if (r && r.__esModule && r.default)
            for (let e in r.default)
                if ("getToken" === e) {
                    token = r.default.getToken();
                }
    }
}
console.log(token)
