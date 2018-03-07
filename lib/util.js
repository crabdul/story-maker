
// Helper Class
class Helper {
    // Get Id for story path from request params
    getId(req) {
        return Object.values(req.params)
            .join('').replace(/[^0-9\.]+/g, "");
    }
}

const util = new Helper

module.exports = util