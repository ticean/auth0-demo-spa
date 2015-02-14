module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'src/', src: ['images/**'], dest: 'build/', filter: 'isFile'},
          {expand: true, cwd: 'src/', src: ['stylesheets/**'], dest: 'build/', filter: 'isFile'},
        ],
      },
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
  grunt.loadNpmTasks('grunt-replace');

  // Default task(s).
  grunt.registerTask('default', ['copy:main', 'replace:config']);

};
