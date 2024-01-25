const { src, dest, watch, series } = require('gulp');

// Compilar CSS
const sass = require('gulp-sass')(require('sass'));

// Imagenes
const imagemin = require('gulp-imagemin');

function css( done ) {

    src('src/scss/app.scss') // Identificar el archivo principal
        .pipe( sass() ) // Compilar SASS
        .pipe( dest('build/css') ) // Exportarlo o guardarlo en una ubicación
    done();
}

function dev(  ) {
    console.log("Compilando Sass modo vista")
    watch('src/scss/**/*.scss',css)

}

function imagenes(done) {
    src('src/img/**/*')
        .pipe( imagemin({ optimizationLevel: 3}) )
        .pipe( dest('build/img') )
    done();
}
function imagenes(done) {
    src('src/img/**/*')
        .pipe( imagemin({ optimizationLevel: 3}) )
        .pipe( dest('build/img') )
    done();
}



exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
