@echo off
chcp 65001 >nul

:: 加载 node 环境
call nvm use 24.4.1

echo [1/3] Building static files...
call yarn build:win
if %errorlevel% neq 0 (
    echo.
    echo [!] Build failed!
    pause
    exit /b %errorlevel%
)

set "dist_path=docs\.vuepress\dist"
cd /d "%dist_path%"

echo [2/3] Deploying to github pages...
git init
git add -A
git commit -m "deploy"
git push -f git@github.com:zyg525/myblog.git HEAD:master

echo [3/3] Cleaning up dist...
cd /d "%~dp0"
rd /s /q "%dist_path%"

echo.
echo Deploy done!
pause
