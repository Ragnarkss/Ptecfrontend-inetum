module.exports = {
  default: {
    paths: [
      "features/**/*.feature"
    ],
    format: [
      "progress-bar",
      "summary",
      "html:reports/cucumber-report.html"
    ],
    formatOptions: {
      colorsEnabled: true,
      snippetInterface: "async-await"
    },
    require: [
      "src/steps/**/*.ts",
      "src/support/**/*.ts"
    ],
    requireModule: [
      "ts-node/register"
    ]
  }
};