'use strict';

var path = require('path');

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      all: {
        src: ['src/*.js']
      }
    },
    jshint: {
      files: ['src/*.js']
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> v<%= pkg.version%> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['src/<%= pkg.name%>.js']
        }
      }
    },
    cssmin: {
      add_banner: {
        options: {
          banner: "/*! <%= pkg.name %> v<%= pkg.version%> */"
        },
        files: {
          'dist/<%= pkg.name %>.min.css': ['src/<%= pkg.name%>.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  // Default task(s).
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('default', ['jshint','uglify','cssmin']);

};
