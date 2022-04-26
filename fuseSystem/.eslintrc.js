module.exports = {
    root: true,

    env: {
        node: true
    },

    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
    ],

    parserOptions: {
        parser: "babel-eslint"
    },
    // "writable" 以允许重写变量，或 "readonly" 不允许重写变量
    globals: {
        XE: "readonly",
        VE_ENV: "readonly",
        VE_API: "readonly"
    },

    rules: {
        indent: [0, 2, { SwitchCase: 1 }],
        "no-console": "off",
        "no-debugger": "off"
    }
};
