module.exports = function (grunt) {
	'use strict';
	require('load-grunt-tasks')(grunt);

	 var config = {
      title: "Islay Theme for Ghost",
      pkg: grunt.file.readJSON('./package.json'),

		clean: {
		  css: ['assets/css/*'],
		  js:  ['assets/js/*.min.js', '!assets/js/*.js', '!assets/js/vendor','!assets/js/foundation']
		},

	    sass: {
	    	debug: {
	          options: {  
	          	sourcemap: true,
	          	debugInfo: true,
	          	style: 'nested',
	          	noCache: true,
	          	quiet: true
	          },	
	          files : {
	            'assets/css/styles.min.css': 'assets/scss/styles.scss',
	            'assets/css/styles.css': 'assets/scss/styles.scss'
	          }
	        },
	        dist: {
	          options: {
	        	style: 'compressed',
	        	noCache: true,
	        	quiet: true
	          },
	          files: {
	          	'assets/css/styles.min.css': 'assets/scss/styles.scss'
	          }
	        }
	    },

		concat: {
		 	options: {
			    separator: ';'
		 	},
		  	dist: {
			    src: [
			    	'assets/js/foundation/foundation.js',
			    	'assets/js/foundation/foundation.offcanvas.js',
			    	'assets/js/foundation/foundation.reveal.js',
			    	'assets/js/foundation/foundation.topbar.js'
			    	],
			    dest: 'assets/js/foundation.js'
			}
		},

		uglify: {
			options: {
		    	preserveComments: false
		  	},
		  	debug: {
			    files: {
			      'assets/js/foundation.min.js': ['<%= concat.dist.dest %>']
			    }
		  	},
		  	dist: {
			    files: {
			      'assets/js/foundation.min.js': ['<%= concat.dist.dest %>'],
			      'assets/js/index.min.js': ['assets/js/index.js']
			    }
		  	}
		},

      	copy: {
	        debug: {
	          	files: [{
	            	src: [
	                	'assets/js/index.js'
	            	],
	            	dest: 'assets/js/index.min.js'
	          	}]
	        }
      	},

		autoprefixer: {
			options: {
			    browsers: ['last 2 versions']
			},
            dist: {
                files: {
                    'assets/css/styles.min.css': 'assets/css/styles.min.css'
                }
            }
        },

	    watch: {
	        css: {
	          files: ['assets/scss/**/*','assets/scss/*'],
	          tasks: ['css:debug']
	        },
	        js: {
	          files: ['assets/js/*'],
	          tasks: ['js:debug']
	        }
	      }
      };

    grunt.registerTask('js:debug', ['clean:js', 'concat', 'uglify:debug', 'copy:debug']);
    grunt.registerTask('css:debug', ['clean:css', 'sass:debug']);
	grunt.registerTask('debug', ['css:debug', 'js:debug']);
	grunt.registerTask('default', ['clean', 'sass:dist', 'uglify:dist', 'autoprefixer']);
	grunt.initConfig(config);
}