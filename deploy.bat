@echo off
chcp 65001 >nul

:: 加载 node 环境
call nvm use 20.8.1

echo [1/4] Pushing source to remote...
git push origin source
if %errorlevel% neq 0 (
    echo.
    echo [!] Push failed! Remote may have new commits. Try:
    echo     git pull origin source --rebase
    echo     then re-run deploy.bat
    echo.
    pause
    exit /b %errorlevel%
)

echo [2/4] Building static files...
call yarn build:win
if %errorlevel% neq 0 (
    echo.
    echo [!] Build failed!
    pause
    exit /b %errorlevel%
)

set "dist_path=docs\.vuepress\dist"
cd /d "%dist_path%"

echo [3/4] Deploying to github pages...
git init
git add -A
git commit -m "deploy"
git push -f https://github.com/zyg525/myblog.git HEAD:master

echo [4/4] Cleaning up dist...
cd /d "%~dp0"
rd /s /q "%dist_path%"

echo.
echo Deploy done!
pause
