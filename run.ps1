# PowerShell runner for MechaCare Machine Maintenance Insight
$pythonPath = "C:\Users\Nitheen Sakthe P E\AppData\Local\Python\pythoncore-3.14-64\python.exe"
if (Test-Path $pythonPath) {
    & $pythonPath run_project.py
} else {
    python run_project.py
}
