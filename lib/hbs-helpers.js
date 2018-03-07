// Handlebar helper function that returns link to next path from branch index and current path id
exports.href = function (branch, id) {
    // current path
    const path = branch.split("").join('/');
    return `href="/${path}/${id}/"`;
};
