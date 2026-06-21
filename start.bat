@echo off
echo Starting Todo App...
echo.

echo [1/2] Starting backend on http://localhost:8000 ...
start "Backend" cmd /k "cd /d %~dp0backend && .venv\Scripts\python -m uvicorn main:app --reload"

timeout /t 2 /nobreak >nul

echo [2/2] Starting frontend on http://localhost:5173 ...
start "Frontend" cmd /k "cd /d %~dp0frontend && npm run dev"

echo.
echo Both servers are starting.
echo   Backend:  http://localhost:8000
echo   Frontend: http://localhost:5173
echo.
echo Close the server windows to stop them.
