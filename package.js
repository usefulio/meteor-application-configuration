Package.describe({
  summary: "Custom version of the official package that lets you connect a to a mongo url specified in your settings. Currently compatible with v0.8.1.",
  internal: true
});

Package.on_use(function (api) {
  api.use(['logging', 'underscore', 'livedata', 'ejson', 'follower-livedata']);
  api.use(['mongo-livedata'], {
    unordered: true
  });
  api.add_files(['config.js'], 'server');
  api.export('AppConfig', 'server');
});
