@echo off
chcp 65001 >nul

:: 加载 node 环境
call nvm use 20.8.1

echo [1/5] Committing local changes...
git add -A
git commit -m "update"
if %errorlevel% neq 0 (
    echo.
    echo [!] Git add/commit failed!
    pause
    exit /b %errorlevel%
)

echo [2/5] Pushing source to remote...
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

echo [3/5] Building static files...
call yarn build:win
if %errorlevel% neq 0 (
    echo.
    echo [!] Build failed!
    pause
    exit /b %errorlevel%
)

set "dist_path=docs\.vuepress\dist"
cd /d "%dist_path%"

echo [4/5] Deploying to github pages...
git init
git add -A
git commit -m "deploy"
git push -f https://github.com/zyg525/myblog.git HEAD:master

echo [5/5] Cleaning up dist...
cd /d "%~dp0"
rd /s /q "%dist_path%"

echo.
echo Deploy done!
pause
