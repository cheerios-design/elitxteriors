const manifest = {
  name: "Elite Exteriors",
  version: "1.0.0",
  description: "Elite Exteriors - Professional exterior services.",
  author: "Elite Exteriors Team",
  license: "MIT",
  scripts: {
    start: "node server.js",
    build: "webpack --mode production",
    dev: "webpack serve --mode development",
    test: "jest",
  },
  dependencies: {
    express: "^4.18.2",
    dotenv: "^16.0.3",
  },
  devDependencies: {
    webpack: "^5.88.2",
    "webpack-cli": "^5.1.4",
    jest: "^29.7.0",
  },
};

module.exports = manifest;
