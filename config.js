const styleDictionary = require('style-dictionary')

function tokens() {
    return {
        "source": ["tokens/**/*.json"],
        "platforms": {
          "scss": {
            "transformGroup": "scss",
            "buildPath": "build/scss/",
            "files": [{
              "destination": "_variables.scss",
              "format": "scss/variables"
            }]
          },
    }
}
}

styleDictionary.extend(tokens()).buildPlatform(scss);
