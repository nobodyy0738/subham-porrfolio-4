@echo off
title Shubham Murari - Portfolio Server
echo ========================================================
echo   Starting Shubham Murari Developer Portfolio...
echo ========================================================
echo.
cd /d "%~dp0"
echo Opening in browser...
start http://localhost:5173/
cmd /c npm run dev -- --port 5173 --host
pause
