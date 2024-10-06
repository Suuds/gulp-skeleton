import rename from 'gulp-rename';
import cleanJs from 'gulp-uglify';

export const js = () => {
    return app.gulp.src(app.path.src.js, { sourcemap: true })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "JS",
                message: "Error: <%= error.message %>",
            })
        ))
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        /* uncompress file */
        .pipe(app.gulp.dest(app.path.build.js)) // Save uncompressed files
        .pipe(cleanJs()) // Optionally minify the JS here
        .pipe(rename({
            extname: ".min.js"
        }))
        .pipe(app.gulp.dest(app.path.build.js)) // Save minified files
        .pipe(app.plugins.browsersync.stream());
}
