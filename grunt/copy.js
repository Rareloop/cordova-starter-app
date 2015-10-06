module.exports =  {
    resourcesAndroid: {
        files: [
            {expand: true, cwd: 'resources/android/', src: ['**'], dest: 'platforms/android/res'},
        ]
    },
    resourcesIos: {
        files: [
            {expand: true, cwd: 'resources/ios/icons', src: ['**'], dest: 'platforms/ios/<%= cordovacli.cordova.options.name %>/Resources/icons'},
            {expand: true, cwd: 'resources/ios/splash', src: ['**'], dest: 'platforms/ios/<%= cordovacli.cordova.options.name %>/Resources/splash'}
        ]
    }
};
