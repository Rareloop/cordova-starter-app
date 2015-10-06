module.exports = {
    options: {
        path: '.',
        cli: 'cordova'
    },

    cordova: {
        options: {
            command: ['create','platform','plugin','build'],
            platforms: ['ios'],
            plugins: ['device','dialogs'],
            path: 'cordova',
            id: 'com.rareloop.cordovasampleapp',
            name: 'Cordova Starter App'
        }
    },

    prepare: {
        options: {
            command: ['prepare'],
            platforms: ['ios']
        }
    },

    addPlatforms: {
        options: {
            command: 'platform',
            action: 'add',
            platforms: ['ios', 'android']
        }
    },

    removePlatforms: {
        options: {
            command: 'platform',
            action: 'remove',
            platforms: ['ios']
        }
    },

    build: {
        options: {
            command: 'build',
            platforms: ['ios', 'android']
        }
    },

    runAndroid: {
        options: {
            command: 'run',
            platforms: ['android']
        }
    },

    runIos: {
        options: {
            command: 'run',
            platforms: ['ios']
        }
    },

    releaseAndroid: {
        options: {
            command: 'build',
            platforms: ['android'],
            args: ['--', '--release', '--gradleArg=-PcdvReleaseSigningPropertiesFile=../../android-release-signing.properties']
        }
    }
};
