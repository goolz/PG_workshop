@echo off

echo #################################
echo Build for browser
echo #################################
call cordova platforms remove browser
call cordova platforms add browser
timeout 1
echo #################################
echo Start Browser
echo #################################
call cordova run browser