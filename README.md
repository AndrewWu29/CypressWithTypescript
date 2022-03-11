# CypressWithTypescript

Use Cypress to do automated testing my blog site.

## Installation

* [Node.js Downloads](https://nodejs.org/en/download/)

        #check installed version:
        node -v
* Cypress

        npm install cypress@version
        #check installed version
        npx cypress -v
* rimraf

        npm install rimraf
* mochawesome

        npm install mochawesome
* mochawesome-merge

        npm install mochawesome
* mochawesome-report-generator

        npm install mochawesome-report-generator
* Typescript

        npm install typescript
        #check installed version
        tsc -v

## Check package.json file's dependencies

Make sure your dependencies will like as below:

    "dependencies": {
        "cypress": "^9.5.0",
        "mochawesome": "^7.0.1",
        "mochawesome-merge": "^4.2.1",
        "mochawesome-report-generator": "^6.0.1",
        "rimraf": "^3.0.2",
        "typescript": "^4.5.5"
    }

## Open Cypress

    npx cypress open

## Run Cypress

    npx cypress run

## Add .gitignore

To ignore push *.mp4 files

    # Ignore all mp4 files
    *.mp4

## Testing my blog

In command line:

    npm test
