import gulp, { watch } from "gulp";

import {path} from "./gulp/config/path.js";

import {plugins} from "./gulp/config/plugins.js";

import {server} from "./gulp/tasks/server.js";
import {scss} from "./gulp/tasks/scss.js";
import {js} from "./gulp/tasks/js.js";

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
};


import {copy, copyLibs} from "./gulp/tasks/copy.js";
import {reset} from "./gulp/tasks/reset.js";
import {html} from "./gulp/tasks/html.js";
test
function watcher(){
    gulp.watch(path.watch.files, gulp.series(reset, copy));
    gulp.watch(path.watch.html, gulp.series(reset, html));
    gulp.watch(path.watch.scss, gulp.series(reset, scss));
    gulp.watch(path.watch.js, gulp.series(reset, js));
}

const mainTasks = gulp.parallel(copy, copyLibs, html, scss, js);

const dev =  gulp.series(reset, mainTasks, gulp.parallel(watcher/*, server*/));

gulp.task('default', dev); 