module.exports = {
  name: 'car-game-ai',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/car-game-ai',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
