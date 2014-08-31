// gulp file

var 
gulp = require( 'gulp' ),
sourcemaps = require( 'gulp-sourcemaps' ),
webpack = require( 'gulp-webpack' ),
rename = require( 'gulp-rename' ),
less = require( 'gulp-less' ),
files = {
    js : [ './_js/main.js', './_js/**/*.js', './_js/**/*.jsx' ],
    less: [ './_less/site.less', './_less/**/*.less' ]
},
debug = !( process.env.NODE_ENV === 'production' ); 

// default task
gulp.task( 'default', [ 'js', 'less' ] );

gulp.task( 'js', function( ) {
    // build js file
    return gulp.src( files.js[0] )
        .pipe( webpack( {
            output: {
                filename: 'site.js',
                library: 'site'            
            },
            resolve: {
                extensions: ['', '.js', '.jsx' ]
            },
            module :{
                loaders: [
                  {
                    test: /\.jsx$/,
                    loader: 'jsx-loader'
                  },
                  {
                    test: /\.less$/,
                    loader: 'style-loader!css-loader!less-loader'
                  } 
                ]                
            },
            externals: {
                react: 'React'
            }
        } ) )
        .pipe( gulp.dest('./') );
} );

gulp.task( 'less', function( ) {
    // build js file
    return gulp.src( files.less[0] )
        .pipe( less({
            paths: [ __dirname + '/_less/' ],
            sourcemaps: debug
        } ) )
        .pipe( rename('site.css') )
        .pipe( gulp.dest('./') );
} );

gulp.task('watch', function() {
  gulp.watch( files.js, ['js']);
  gulp.watch( files.less, ['js', 'less']);
});