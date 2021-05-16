@echo off
set year=%date:~-4,4%
set month=%date:~-10,2%
set day=%date:~-7,2%
set hour=%time:~-11,2%
set hour=%hour: =0%
set min=%time:~-8,2%

set zipfilename=about_%year%%month%%day%%hour%%min%.7z
set destination=%~dp1

set source="C:\WORKS\00PAL00\about\"
set dest="%destination%Backups\%zipfilename%"

set AppExePath="%Program Files%\7-Zip\7z.exe"
if not exist %AppExePath% set AppExePath="%ProgramFiles%\7-Zip\7z.exe"

if not exist %AppExePath% goto notInstalled

echo Backing up %source% to %dest%

REM %AppExePath% a -r -x!*.7z -x!node_modules -tzip %dest% %source%

%AppExePath% a -t7z %dest% %source% -mx0 -xr!bin -xr!obj -xr!node_modules -xr!Backups -xr!dist -xr!lib -xr!.history -xr!package-lock.json    

echo %source% backed up to %dest% is complete!

xcopy %dest% C:\__BACKUPS\05GATSBY\

goto end

:notInstalled

echo Can not find 7-Zip, please install it from:
echo  http://7-zip.org/

:end
:PAUSE