cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.asapsystems.barcodemin/www/BarcodeminCDV.js",
        "id": "com.asapsystems.barcodemin.BarcodeminCDV",
        "clobbers": [
            "barcodemin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "id": "cordova-plugin-dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
        "id": "cordova-plugin-dialogs.notification_android",
        "merges": [
            "navigator.notification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.asapsystems.barcodemin": "0.1.5",
    "cordova-plugin-compat": "1.0.0",
    "cordova-plugin-console": "1.0.3",
    "cordova-plugin-device": "1.1.2",
    "cordova-plugin-dialogs": "1.2.1",
    "cordova-plugin-whitelist": "1.2.2"
};
// BOTTOM OF METADATA
});