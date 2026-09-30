const cache = {};

function cacheMiddleware(req, res, next) {
    const key = req.url;

    if (cache[key]) {
        res.set("X-Cache", "HIT");
        return res.json(cache[key].value);
    }

    res.set("X-Cache", "MISS");
    next();
}

function clearCache() {
    Object.keys(cache).forEach((key) => {
        delete cache[key];
    });
}

module.exports = {
    cache,
    cacheMiddleware,
    clearCache
};