module.exports = function(grunt){
	//项目配置
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*!\n' +
	            ' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
	            ' * <%= pkg.description%>\n' +
            	' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>.\n' +
	            ' */',
		less: {
			build: {
				files: {
					'typo.css': 'less/typo.less'
				}
			}
		},
		cssmin: {
			options: {
				banner: '<%= banner %>',
				keepSpecialComments: '0'
			},
			build: {
				files: {
					'typo.min.css': 'typo.css'
				}
			}
		},
		watch: {
			less: {
				files: [
					'less/*.less',
					'less/*/*.less'
				],
				tasks: ['less', 'cssmin']
			}
		}
	});
	//加载插件
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//制定任务
	grunt.registerTask('default',['less', 'cssmin', 'watch']);
}