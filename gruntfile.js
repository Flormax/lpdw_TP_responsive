module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'assets/css/build/index.min.css' : 'assets/sass/src/index.sass'
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
        connect: {
            server: {
                options: {
                    port: 9000,
                    hostname: '*',
                    keepalive: true
                }
            }
        },
        watch: {
            sass: {
                options: {
                    livereload: true,
                    open: true
                },
                files: ['assets/sass/src/*.sass'],
                tasks: ['sass']
            },
            html: {
                options: {
                    livereload: true
                },
                files: ['index.html']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['connect:server']);
};
