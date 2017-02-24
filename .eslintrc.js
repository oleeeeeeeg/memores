module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "modules":true,
            "arrowFunctions":true,
            "classes":true,
            "spread":true,
            "sourceType": "module",
            "allowImportExportEverywhere": false
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "parser": "babel-eslint",
    "rules": {
        "indent": [
            "error",
            4
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "eqeqeq": [
            "error",
            "always"
        ],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
    }
};