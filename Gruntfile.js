/*global module:false*/
module.exports = function(grunt) {

    pkg = grunt.file.readJSON('package.json');

    require('load-grunt-config')(grunt);
    require('load-grunt-tasks')(grunt);


    /***************************************
     * SETUP
     ***************************************/
    
    // Copy icons and splash screens into place
    grunt.registerTask('resources', ['copy:resourcesAndroid', 'copy:resourcesIos']);

    // Install all Cordova platforms and plugins
    grunt.registerTask('setup', ['cordovacli:removePlatforms', 'cordovacli:addPlatforms', 'resources']);


    /**************************************
     * RELEASE
     **************************************/

    // Builds a signed APK using the signing details specified in the `android-release-signing.properties` file
    grunt.registerTask('releaseAndroid', ['cordovacli:releaseAndroid']);

    // iOS release builds are done within XCode


    /***************************************
     * DEVELOPMENT
     ***************************************/

    grunt.registerTask('build', ['cordovacli:build']);
    grunt.registerTask('runIos', ['cordovacli:runIos']);
    grunt.registerTask('runAndroid', ['cordovacli:runAndroid']);

};