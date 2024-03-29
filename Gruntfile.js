module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      cname: {
        files: [
          {src: ['CNAME'], dest: 'build/'},
        ],
      },
      main: {
        files: [
          {expand: true, cwd: 'src/', src: ['*'], dest: 'build/', filter: 'isFile'},
          {expand: true, cwd: 'src/', src: ['images/**'], dest: 'build/'},
          {expand: true, cwd: 'src/', src: ['stylesheets/**'], dest: 'build/'},
        ],
      },
    },
    'gh-pages': {
      options: {
        base: 'build',
        message: 'Auto-generated commit'
      },
      src: ['**']
    },
    replace: {
      config: {
        options: {
          patterns: [
            {
              json: {
                "auth0ClientId": process.env['AUTH0_CLIENT_ID'],
                "auth0Domain": process.env['AUTH0_DOMAIN']
              }
            }
          ]
        },
        files: [{
          expand: true,
          flatten: true,
          src: ['src/javascripts/*.js'],
          dest: 'build/javascripts/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-replace');

  // Tasks.
  grunt.registerTask('build', ['copy:main', 'copy:cname', 'replace:config']);
  grunt.registerTask('deploy', ['build', 'gh-pages']);
  grunt.registerTask('default', ['build']);

};
