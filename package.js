Package.describe({
  name: 'socialize:user-blocking',
  version: '1.0.0',
  summary: 'Allow users to block each other',
  git: 'https://github.com/copleykj/socialize-user-blocking.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use([
      'ecmascript'
      'socialize:user-model@1.0.0'
  ]);
  api.mainModule('commmon/common.js');
});
