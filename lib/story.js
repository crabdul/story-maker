
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
            opts: [option, '', '', '', '']
        }
    }
    // Returns Path corresponding to id
    getOptions(id) {
        const p = this.paths.find(path => path.id == id);
        return [p.opts[0],p.opts[1],p.opts[2],p.opts[3],p.opts[4]];
    }
    // Stores new option
    addOption(option, id, branch) {
        // Find the index of the path
        const pathIndex = this.paths.findIndex((path => path.id == id));
        // Add option to current story path
        this.paths[pathIndex].opts[branch] = option;
        // Create a new story path
        this.paths.push(this.createPath(`${id}${branch}`, option));
    }
}

const story = new Story('Once upon a time, there was a big bad wolf');

module.exports = story;