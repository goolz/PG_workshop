@echo off
echo #################################
echo Update Platforms
echo #################################
call cordova platforms update ios
echo ios has been updated
call cordova platforms update android
echo android has been updated
call cordova platforms update browser
echo browser has been updated
call cordova run browser