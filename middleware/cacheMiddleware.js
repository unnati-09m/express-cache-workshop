const cache = {};

function cacheMiddleware(req, res, next) {
    const key = req.url;

    if (cache[key]) {
        res.set("X-Cache", "HIT");
        return res.json(cache[key]);
    }

    res.set("X-Cache", "MISS");
    next();
}

module.exports = {
    cache,
    cacheMiddleware
};