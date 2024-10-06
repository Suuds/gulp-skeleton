import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';


export const path = {
    build: {
        img: `${buildFolder}/assets/img`,
        css: `${buildFolder}/assets/css`,
        js: `${buildFolder}/assets/js`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
        libs: `${buildFolder}/assets/libs`,
        fonts: `${buildFolder}/assets/fonts`,
    },
    src: {
        scss: `${srcFolder}/assets/scss/*.*`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        libs: `${srcFolder}/assets/libs/**/*.*`,
        img: `${srcFolder}/assets/img/**/*.*`,
        js: `${srcFolder}/assets/js/**/*.*`,
        fonts: `${srcFolder}/assets/fonts/**/*.*`,
    },
    watch: {
        any: `${srcFolder}/assets/**//*.*`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        libs: `${srcFolder}/assets/libs/**/*.*`,
        img: `${srcFolder}/assets/img/**/*.*`,
        scss: `${srcFolder}/assets/scss/**/*.*`,
        js: `${srcFolder}/assets/js/**/*.*`,
        fonts: `${srcFolder}/assets/fonts/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: '',
};