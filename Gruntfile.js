module.exports = function(grunt) {

  grunt.initConfig({
    clean: [ "dist" ],
    less: {
      production: {
        options: {
          paths: [ "bower_components/bootstrap/less" ],
          cleancss: true
        },
        files: {
          "dist/css/app.min.css": "less/app.less"
        }
      }
    },
    uglify: {
      bootstrap: {
        files: {
          "dist/js/app.min.js": [
            "bower_components/bootstrap/js/transition.js",
            "bower_components/bootstrap/js/alert.js",
            "bower_components/bootstrap/js/button.js",
            "bower_components/bootstrap/js/carousel.js",
            "bower_components/bootstrap/js/collapse.js",
            "bower_components/bootstrap/js/dropdown.js",
            "bower_components/bootstrap/js/modal.js",
            "bower_components/bootstrap/js/tooltip.js",
            "bower_components/bootstrap/js/popover.js",
            "bower_components/bootstrap/js/scrollspy.js",
            "bower_components/bootstrap/js/tab.js",
            "bower_components/bootstrap/js/affix.js"
          ]
        }
      }
    },
    copy: {
      jquery: {
        src: "bower_components/jquery/dist/jquery.min.js",
        dest: "dist/js/jquery.min.js"
      }
    },
    watch: {
      less: {
        files: [
          "less/*.less"
        ],
        tasks: [ "less" ]
      }
    },
  });
  
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");
   
  grunt.registerTask("default", [ "clean", "less", "uglify", "copy" ]);

};
