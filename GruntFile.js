module.exports = function(grunt) {
 
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 9002
        }
      }
    },
    compass: {
      options: {
        require: 'breakpoint',
        sassDir: 'sass',
        cssDir: 'css',
        imagesDir: 'images',
        javascriptsDir: 'js'
      },
      dev: {
        options: {
          environment: 'development',
          outputStyle: 'expanded'
        }
      },
      dist: {
        options: {
          environment: 'production',
          outputStyle: 'compressed'
        }
      }
    },
    watch: {
      css: {
        files: ['sass/{,**/}*.scss'],
        tasks: ['compass:dev'],
         options: {
          livereload: true
        }
      },
      html: {
        files: ['*.html','js/*.js'],
        options: {
          livereload: true
        }
      }
    }    
  });
 
  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-concurrent');
 
  // Default task(s).
  grunt.registerTask('default', ['connect','watch']);

 
};