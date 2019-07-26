module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			dist: {
				files: {
					'public/assets/scripts/script.min.js': ['<%= concat.dist.dest %>']
				}
			}
		},
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['src/js/*.js'],
				dest: 'public/assets/scripts/script.js'
			}
		},
		jshint: {
			options: {
				globals: {
					"curly": true,
				    "eqeqeq": true,
				    "eqnull": true,
				    "expr": true,
				    "latedef": true,
				    "onevar": true,
				    "noarg": true,
				    "node": true,
				    "trailing": true,
				    "undef": true,
				    "unused": true
				}
			},
			files: {
				src: ['src/js/*.js']
			}
		},
		watch: {
			scripts: {
				files: ['src/js/*.js'],
				tasks: ['jshint', 'concat']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['watch','concat']);
	grunt.registerTask('build', ['jshint', 'concat', 'uglify']);
};