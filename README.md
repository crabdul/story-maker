# Story Maker

Web application which enables the user to write "multi-path stories." A multi-path story is composed of sentences. 
After each sentence, there are up to four possible next sentences, and after each of those, another four possible 
next sentences, and so on.

## Getting Started

### Prerequisites

**[Node JS](https://nodejs.org/en/)** 

### Installing

```
git clone https://github.com/crabdul/story-maker.git
npm install
```
### Running application
```
cd story-maker
node app.js
```
Go to localhost:3000/0

## Author

* **Karim El Khazaani** - [crabdul](https://github.com/crabdul)

## Approach

The rendered story options depend on the current URL path.
If the current URL path is `/0/2/3/1` then the story path with `id = 0231`.
The story path objects contain two properties: this id and and array of the options for that path. 
From the path url, the id is found and the corrresponding options can be displayed.

### How the id for the path is determined

The option branches have indexes as show below:

```
   [1]
[4]  [2]
   [3]
```

When the story line goes through a branch, the index is appended to the current path id.

### Example

The starting path has `id = 0`.
Shown below are the ids of the possible story paths if the user goes through the top option, then the left option, the top again

```

   [01]              [ ]                [141]             [ ]
[ ][0][ ]  -->  [014][01][ ]   -->  [ ][014][ ]   --> [ ][141][ ]
   [ ]               [ ]                [ ]               [ ]
```

### Structure of the app

The templating uses [handlebars](https://handlebarsjs.com/)


```
.
├── app.js
├── lib
│   ├── helpers
│   └── story.js
├── package.json
├── public
│   └── stylesheets
├── routes
│   └── index.js
└── views
    ├── 404.hbs
    ├── index.hbs
    ├── layouts
    └── partials
```

#### lib

+ helpers - helper functions
+ story.js - story module for creating, storing, retrieving story path options

#### public

+ stylesheets 

#### routes

+ index.js - handles application routing

#### views

+ 404 - no corresponding story path found for current URL path
+ index - contains main content
+ layouts/base - base template with link to main stylsheet
+ partials/option - partial with conditionally rendered form or option link


### Story module

The story module stores an array of 'path' objects with two properties: an id and and array of the options for that path. When a path is created, the starting line is set as the first item in the array. The other items are empty strings.

the id of the story path, the branch index, and the option is required to update the current story path with a new option and create a new story path.


### Input form

The table cells render the input form or the story option depending on a conditional based on the falsy value of the option; if the option hasn't been set (string is empty), the former is rendered and if a string exists, the option is rendered.


### Submitting 

When the user submits the input text form, a POST request is sent to path `/submit` where the POST parameters are used to update the current story path with the new option and create a new path with the option as the starting text. 
The user is then redirected back to the page which referred them and a link with the newly submitted story option is now available. 


### Creating a link to the next path 

The URL path for the links are created from the id of the current story path and the index of the branch i.e if `id = 023` and `branch-index = 4` then the id for the next path is `0234`. The util library contains a function for creating this id.


### Shortcuts taken

Because the rendered path is dependent on the URL path and the id for the base story path `id = 0`, the user must start at `localhost:3000/0`


### What is the exercise testing?

**Ability to:**
+ follow a brief, identify the main features and implement them in a reasonable amount of time.
+ appropraitely structure a project from based on a brief.
+ dynamically create pages which are related by dynamically created links using POST and GET requests
+ rendering appropriate data based on URL path

