module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'assets/css/build/*.css',
            '*.html'
          ]
        },
        options: {
          watchTask: true,
          server: '.'
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'assets/css/build/index.min.css': 'assets/sass/src/index.sass'
        }
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'assets/img/src/',
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: 'assets/img/build/'
        }]
      }
    },
    uglify: {
      my_target: {
        files: {
          'index.min.js': ['index.js']
        }
      }
    },
    watch: {
      sass:{
        files: ['assets/sass/src/*.sass'],
        tasks: ['sass'],
        options: {
          livereload: true
        }
      },
      scripts: {
        files: ['index.js'],
        tasks: ['uglify'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['browserSync', 'watch']);

};
