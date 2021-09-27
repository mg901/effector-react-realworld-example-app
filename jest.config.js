module.exports = {
  setupFiles: ['dotenv/config'],
  testURL: 'https://mg901.github.io/effector-react-realworld-example-app',
  testEnvironment: './.test/custom-jest-environment.js',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
