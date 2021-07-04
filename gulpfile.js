const { series, watch } = require('gulp');
const exec = require('child_process').exec;
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

function upload(cb) {
  console.log(
    `
    _======================================_
    _===============_Upload_===============_
    _======================================_`
  );

  exec('cd codes && clasp push', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });

  cb();
}

function refresh(cb) {
  browserSync.init(null, {
    proxy: 'https://script.google.com/macros/s/AKfycbyF1mGzd7sYsXWu8-6_HjzotsO1277hlSYMx4OPXX1_/dev',
    open: true,
  });

  cb();
}

exports.upload = upload;
exports.refresh = refresh;
exports.default = function () {
  // You can use a single task
  watch('codes/form.html', series(upload));
  // Or a composed task
  watch('codes/Code.js', series(upload));
};
