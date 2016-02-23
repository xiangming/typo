module.exports = function(grunt){
	//项目配置
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*!\n' +
	            ' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
	            ' * <%= pkg.description%>\n' +
	            ' * © <%= grunt.template.today("yyyy") %> <%= pkg.author%>. All rights reserved.\n' +
	            ' */\n',
		less: {
			build: {
				files: {
					'css/typo.css': 'less/typo.less'
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
					'css/typo.min.css': 'css/typo.css'
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