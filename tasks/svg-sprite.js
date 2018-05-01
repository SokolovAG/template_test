 import gulp from 'gulp';
 import svgSprite from 'gulp-svg-sprites';
 import plumber from 'gulp-plumber';
 import fs from 'fs';

 gulp.task('svg-sprite', () => {
     gulp.src('./__dev/sprites/svg/*.svg')
         .pipe(svgSprite({
             cssFile: "../styles/helpers/08_svg-sprite.styl",
             svg: {
                 sprite: "../images/sprite-icons.svg"
             },
             svgPath: './images/sprite-icons.svg',
             mode: "symbols",
             preview: false,
             padding: 0,
             templates: {
                 css: fs.readFileSync(process.cwd() + '/__dev/styles/helpers/svg-sprite-template.css', "utf-8")
             },
             svgId: "icon-*"
         }))
         .pipe(plumber())
         .pipe(gulp.dest('./__dev/images'))
 });