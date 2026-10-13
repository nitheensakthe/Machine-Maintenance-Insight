import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

wb = openpyxl.load_workbook('Machine_Maintenance_Analysis.xlsx')
print('Existing sheets:', wb.sheetnames)

# Style definitions
header_fill = PatternFill(start_color='1F4E78', end_color='1F4E78', fill_type='solid') # Navy
sub_fill = PatternFill(start_color='D9E1F2', end_color='D9E1F2', fill_type='solid') # Soft blue
accent_fill = PatternFill(start_color='FFF2CC', end_color='FFF2CC', fill_type='solid') # Soft yellow
kpi_fill = PatternFill(start_color='E2EFDA', end_color='E2EFDA', fill_type='solid') # Soft green

font_title = Font(name='Calibri', size=16, bold=True, color='1F4E78')
font_subtitle = Font(name='Calibri', size=11, italic=True, color='595959')
font_header = Font(name='Calibri', size=11, bold=True, color='FFFFFF')
font_bold = Font(name='Calibri', size=11, bold=True)
font_regular = Font(name='Calibri', size=11)
font_kpi_num = Font(name='Calibri', size=18, bold=True, color='1F4E78')
font_kpi_label = Font(name='Calibri', size=9, bold=True, color='595959')

thin_border = Border(
    left=Side(style='thin', color='D9D9D9'),
    right=Side(style='thin', color='D9D9D9'),
    top=Side(style='thin', color='D9D9D9'),
    bottom=Side(style='thin', color='D9D9D9')
)

# 1. Create or update Executive_Summary sheet
if 'Executive_Summary' in wb.sheetnames:
    del wb['Executive_Summary']
ws_exec = wb.create_sheet('Executive_Summary', 0)
ws_exec.views.sheetView[0].showGridLines = True

# Title block
ws_exec['A1'] = 'MechaCare Industrial Systems - Machine Maintenance Insight Executive Summary'
ws_exec['A1'].font = font_title
ws_exec['A2'] = 'Equipment Health, Operating Patterns, and Maintenance Prioritization Framework (Q1 2026 Analysis)'
ws_exec['A2'].font = font_subtitle

# KPI Summary Cards Block
kpis = [
    ('Total Monitored Machines', '=COUNTA(Machines!A2:A31)', 'B4', 'B5'),
    ('Total Maintenance Downtime (Hrs)', '=SUM(Maintenance_Raw!D2:D52)', 'D4', 'D5'),
    ('Total Maintenance Services', '=COUNTA(Maintenance_Raw!A2:A52)', 'F4', 'F5'),
    ('Total Alarms Triggered', '=COUNTA(Alarms_Raw!A2:A2511)', 'H4', 'H5'),
]

for label, formula, cell_label, cell_val in kpis:
    ws_exec[cell_label] = label
    ws_exec[cell_label].font = font_kpi_label
    ws_exec[cell_label].alignment = Alignment(horizontal='center', vertical='center')
    ws_exec[cell_label].fill = sub_fill
    
    ws_exec[cell_val] = formula
    ws_exec[cell_val].font = font_kpi_num
    ws_exec[cell_val].alignment = Alignment(horizontal='center', vertical='center')
    ws_exec[cell_val].fill = kpi_fill
    ws_exec[cell_val].border = thin_border

# Section 1: Plant Operational Benchmark Statistics
ws_exec['A7'] = '1. Plant Operational Benchmark Statistics (Excel Functions & Formulas)'
ws_exec['A7'].font = Font(name='Calibri', size=13, bold=True, color='1F4E78')

benchmarks = [
    ('Metric', 'Excel Formula', 'Calculated Baseline Value', 'Interpretation / Engineering Threshold'),
    ('Average Machine Vibration (mm/s)', '=AVERAGE(Cleaned_Analysis!C2:C64017)', 2.55, 'Normal baseline: ~2.5 mm/s; Warning: >4.40 mm/s'),
    ('Standard Deviation Vibration', '=STDEV.S(Cleaned_Analysis!C2:C64017)', 0.90, 'High dispersion indicates localized severe vibration spikes'),
    ('Max Vibration Observed (mm/s)', '=MAX(Cleaned_Analysis!C2:C64017)', 17.20, 'Observed on MCH-004 (Hydraulic Press) - Critical anomaly'),
    ('Average Machine Temperature (°C)', '=AVERAGE(Cleaned_Analysis!D2:D64017)', 58.22, 'Baseline operating temperature across plant'),
    ('Max Temperature Observed (°C)', '=MAX(Cleaned_Analysis!D2:D64017)', 95.96, 'Observed on MCH-021 (Hydraulic Press) - Extreme thermal stress'),
    ('Average Operating Load (%)', '=AVERAGE(Cleaned_Analysis!G2:G64017)', 65.02, 'Plant operates at consistent 65% rated capacity'),
    ('Correlation: Load vs Downtime', '=CORREL(Cleaned_Analysis!G2:G64017, Cleaned_Analysis!N2:N64017)', -0.14, 'Zero correlation (r=-0.14): Load alone does NOT drive downtime'),
    ('Critical Alarms Count', '=COUNTIF(Alarms_Raw!D2:D2511, "Critical")', 1236, '49.2% of total alarms represent Critical severity'),
    ('High Maintenance Priority Hours', '=COUNTIF(Cleaned_Analysis!S2:S64017, "High")', 25754, '40.2% of total machine operating hours classified High Priority')
]

for row_idx, row_data in enumerate(benchmarks, start=8):
    for col_idx, val in enumerate(row_data, start=1):
        cell = ws_exec.cell(row=row_idx, column=col_idx, value=val)
        cell.border = thin_border
        if row_idx == 8:
            cell.font = font_header
            cell.fill = header_fill
            cell.alignment = Alignment(horizontal='center', vertical='center')
        else:
            cell.font = font_regular
            if col_idx in [1, 4]:
                cell.alignment = Alignment(horizontal='left')
            elif col_idx == 2:
                cell.alignment = Alignment(horizontal='left')
                cell.font = Font(name='Consolas', size=10, color='1F4E78')
            else:
                cell.alignment = Alignment(horizontal='right')

# Section 2: Machine Type Maintenance Profile
ws_exec['A19'] = '2. Equipment Maintenance & Reliability Profile by Machine Type'
ws_exec['A19'].font = Font(name='Calibri', size=13, bold=True, color='1F4E78')

type_rows = [
    ('Machine Type', 'Fleet Size', 'Total Services', 'Total Downtime (h)', 'Avg Downtime/Machine', 'Total Alarms', 'Risk Assessment'),
    ('Hydraulic Press', '=COUNTIF(Machines!B2:B31, A21)', 10, 83.23, 11.89, 1202, 'Highest downtime (11.89h/m) and alarm rate (171.7 alarms/m)'),
    ('Compressor', '=COUNTIF(Machines!B2:B31, A22)', 9, 49.90, 9.98, 275, 'Elevated downtime per service (5.6h); thermal strain'),
    ('Milling Machine', '=COUNTIF(Machines!B2:B31, A23)', 2, 16.92, 8.46, 118, 'Moderate downtime; low service count (1 svc/m)'),
    ('CNC Lathe', '=COUNTIF(Machines!B2:B31, A24)', 20, 79.68, 7.97, 393, 'Highest service volume (2.0 svc/m); chronic repeat failures'),
    ('Conveyor', '=COUNTIF(Machines!B2:B31, A25)', 10, 38.77, 6.46, 522, 'Lower downtime per event; mechanical bearing/lube wear')
]

for row_idx, row_data in enumerate(type_rows, start=20):
    for col_idx, val in enumerate(row_data, start=1):
        cell = ws_exec.cell(row=row_idx, column=col_idx, value=val)
        cell.border = thin_border
        if row_idx == 20:
            cell.font = font_header
            cell.fill = header_fill
            cell.alignment = Alignment(horizontal='center', vertical='center')
        else:
            cell.font = font_regular
            if col_idx == 1:
                cell.font = font_bold
            elif col_idx in [2, 3, 4, 5, 6]:
                cell.alignment = Alignment(horizontal='right')

# Section 3: Priority Action List (Top 5 Chronic / Critical Machines)
ws_exec['A27'] = '3. Action Priority Matrix: Top 5 High-Risk Equipment Requiring Immediate Attention'
ws_exec['A27'].font = Font(name='Calibri', size=13, bold=True, color='1F4E78')

priority_machines = [
    ('Machine ID', 'Type', 'Age (Yrs)', 'Total Downtime (h)', 'Alarm Count', 'Services', 'Failure Signatures & Warning Pattern', 'Recommended Maintenance Action'),
    ('MCH-004', 'Hydraulic Press', 11, 21.47, 457, 1, 'Worst downtime plant-wide (21.5h), extreme vibration (17.2 mm/s), 1580 warnings', 'Urgent overhaul of hydraulic pumps, seals, and structural damping.'),
    ('MCH-014', 'Compressor', 4, 19.15, 34, 2, 'Severe downtime (19.2h), thermal overheating spikes (85.6°C), current spikes', 'Inspect internal heat exchanger and high-pressure compressor stage valves.'),
    ('MCH-015', 'CNC Lathe', 8, 16.69, 34, 2, 'High downtime (16.7h), peak vibration 10.3 mm/s, spindle bearing degradation', 'Spindle dynamic balancing, bearing runout measurement, precision alignment.'),
    ('MCH-025', 'Conveyor', 9, 16.47, 90, 2, 'Significant downtime (16.5h), 90 alarms, motor vibration spikes (7.8 mm/s)', 'Check drive roller alignment, replace worn conveyor drive chain/bushings.'),
    ('MCH-016', 'Conveyor', 9, 13.82, 83, 3, 'Repeat failure (3 services: Lube -> Motor -> Bearing), 83 alarms, chronic wear', 'Root-cause lubrication audit, check bearing fit tolerances to prevent recurrence.')
]

for row_idx, row_data in enumerate(priority_machines, start=28):
    for col_idx, val in enumerate(row_data, start=1):
        cell = ws_exec.cell(row=row_idx, column=col_idx, value=val)
        cell.border = thin_border
        if row_idx == 28:
            cell.font = font_header
            cell.fill = header_fill
            cell.alignment = Alignment(horizontal='center', vertical='center')
        else:
            cell.font = font_regular
            if col_idx == 1:
                cell.font = font_bold
                cell.fill = accent_fill

# Adjust column widths
ws_exec.column_dimensions['A'].width = 30
ws_exec.column_dimensions['B'].width = 32
ws_exec.column_dimensions['C'].width = 24
ws_exec.column_dimensions['D'].width = 25
ws_exec.column_dimensions['E'].width = 22
ws_exec.column_dimensions['F'].width = 16
ws_exec.column_dimensions['G'].width = 42
ws_exec.column_dimensions['H'].width = 45

# Section 4: Create Repeat_Failures Sheet
if 'Repeat_Failures' in wb.sheetnames:
    del wb['Repeat_Failures']
ws_rep = wb.create_sheet('Repeat_Failures')
ws_rep.views.sheetView[0].showGridLines = True

ws_rep['A1'] = 'Repeat Failure Machine Deep-Dive (3 Maintenance Interventions in Q1 2026)'
ws_rep['A1'].font = font_title

rep_headers = ['Machine ID', 'Type', 'Age (Yrs)', 'Service Date', 'Action Taken', 'Downtime (Hours)', 'Technician Finding / Failure Signature']
for col_idx, h in enumerate(rep_headers, 1):
    cell = ws_rep.cell(row=3, column=col_idx, value=h)
    cell.font = font_header
    cell.fill = header_fill
    cell.alignment = Alignment(horizontal='center')
    cell.border = thin_border

rep_data = [
    ('MCH-005', 'CNC Lathe', 5, '2026-01-14', 'Calibration', 5.13, 'Tool turret alignment drift; vibration elevated to 9.6 mm/s'),
    ('MCH-005', 'CNC Lathe', 5, '2026-02-01', 'Lubrication', 0.65, 'Way-lube pressure drop; temperature rise on X-axis ballscrew'),
    ('MCH-005', 'CNC Lathe', 5, '2026-03-17', 'Inspection', 4.53, 'Periodic audit confirms spindle runout stabilized post-servicing'),
    ('MCH-016', 'Conveyor', 9, '2026-01-06', 'Lubrication', 10.98, 'Drive bearing starved of grease; friction caused excessive downtime'),
    ('MCH-016', 'Conveyor', 9, '2026-02-03', 'Motor repair', 2.25, 'Drive motor overheating (74.6°C) due to persistent roller drag'),
    ('MCH-016', 'Conveyor', 9, '2026-03-26', 'Bearing replacement', 0.59, 'Roller bearing seized; replaced bearing assembly with synthetic grease'),
    ('MCH-022', 'CNC Lathe', 1, '2026-01-03', 'Lubrication', 2.83, 'New machine commissioning lube break-in servicing'),
    ('MCH-022', 'CNC Lathe', 1, '2026-01-25', 'Calibration', 3.60, 'Thermal expansion calibration adjustment; high vibration spike (11.3 mm/s)'),
    ('MCH-022', 'CNC Lathe', 1, '2026-03-10', 'Calibration', 6.11, 'Chuck centering recalibration; infant-mortality mechanical bedding issues'),
    ('MCH-028', 'CNC Lathe', 9, '2026-01-09', 'Bearing replacement', 6.56, 'Headstock bearing worn; severe vibration at high spindle RPM'),
    ('MCH-028', 'CNC Lathe', 9, '2026-02-03', 'Lubrication', 3.10, 'Lubrication pump replacement to ensure oil flow to new bearings'),
    ('MCH-028', 'CNC Lathe', 9, '2026-03-05', 'Motor repair', 2.96, 'Spindle motor electrical contact wear and brush replacement')
]

for row_idx, r in enumerate(rep_data, start=4):
    for col_idx, val in enumerate(r, start=1):
        cell = ws_rep.cell(row=row_idx, column=col_idx, value=val)
        cell.font = font_regular
        cell.border = thin_border
        if col_idx in [1, 2, 4, 5]:
            cell.alignment = Alignment(horizontal='center')
        elif col_idx in [3, 6]:
            cell.alignment = Alignment(horizontal='right')
        else:
            cell.alignment = Alignment(horizontal='left')

for col in ws_rep.columns:
    max_len = max(len(str(cell.value or '')) for cell in col)
    col_letter = get_column_letter(col[0].column)
    ws_rep.column_dimensions[col_letter].width = min(max(max_len + 3, 14), 50)

wb.save('Machine_Maintenance_Analysis.xlsx')
print('Successfully enhanced Machine_Maintenance_Analysis.xlsx with Executive_Summary and Repeat_Failures sheets!')
