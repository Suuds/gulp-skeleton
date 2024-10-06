export const copy = () => {
    return app.gulp.src(app.path.src.files)
        .pipe(app.gulp.dest(app.path.build.files))
};

export const copyLibs = () => {
    return app.gulp.src(app.path.src.libs)
        .pipe(app.gulp.dest(app.path.build.libs))
};