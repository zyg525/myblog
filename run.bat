%1 mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/k %~s0 ::","","runas",1)(window.close)&&exit cd /d "%~dp0"
cd /d "%~dp0"
nvm use 20.8.1
yarn dev:win

pause
