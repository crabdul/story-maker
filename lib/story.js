
// Class represents a story object which stores an array of the story paths
class Story {
    // Create first path with specified story starting point
    constructor(initialLine) {
        this.paths = {}
        this.createPath('0', initialLine);
    }
    // Create Story Path
    createPath(id, option) {
            this.paths[id] = [id, '', '', '', '']
    }
    // Returns Path corresponding to id
    getOptions(id) {
        return this.paths[id]
    }
    // Stores new option
    addOption(option, id, branch) {
        // Add option to current story path
        this.paths[id][branch] = option;
        // Create a new story path
        this.createPath(`${id}${branch}`, option);
    }
}

const story = new Story('Once upon a time, there was a big bad wolf');

module.exports = story;