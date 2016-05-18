@echo off
echo #################################
echo Remove Platforms
echo #################################
call cordova platforms remove ios
echo ios has been removed
call cordova platforms remove android
echo android has been removed
call cordova platforms remove browser
echo browser has been removed
timeout 1
echo #################################
echo Add Platforms
echo #################################
call cordova platforms add ios
echo ios has been added
call cordova platforms add android
echo android has been added
call cordova platforms add browser
echo browser has been added
call cordova run browser