
// Class represents a story object which stores an array of the story paths
class Story {
    // Create first path with specified story starting point
    constructor(initialLine) {
        this.paths = [this.createPath(0, initialLine)];
    }
    // Create Story Path
    createPath(id, option) {
        return {
            id: id,
            '0': option,
            '1': '',
            '2': '',
            '3': '',
            '4': '',
        }
    }
    // Returns Path corresponding to id
    getOptions(id) {
        const p = this.paths.find(path => path.id == id);
        return [p[0],p[1],p[2],p[3],p[4]];
    }
    // Stores new option
    addOption(option, id, branch) {
        // Find the index of the path
        const pathIndex = this.paths.findIndex((path => path.id == id));
        // Add option to current story path
        this.paths[pathIndex][branch] = option;
        // Create a new story path
        this.paths.push(this.createPath(`${id}${branch}`, option));
    }
}

const story = new Story('Once upon a time, there was a big bad wolf');

module.exports = story;