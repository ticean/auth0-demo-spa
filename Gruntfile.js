module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    replace: {
      config: {
        src: ['src/app.js'],
        dest: 'assets/',
        replacements: [
          {
            from: 'OAUTH_CLIENT_ID',
            to: process.env['OAUTH_CLIENT_ID']
          },
          {
            from: 'OAUTH_DOMAIN',
            to: process.env['OAUTH_DOMAIN']
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-text-replace');

  // Default task(s).
  grunt.registerTask('default', ['replace:config']);

};
