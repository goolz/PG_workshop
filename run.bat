@echo off

echo #################################
echo Remove Platforms
echo #################################
call cordova platforms remove browser
echo browser has been removed
timeout 1
echo #################################
echo Add Platforms
echo #################################
call cordova platforms add browser
echo browser has been added
call cordova run browser