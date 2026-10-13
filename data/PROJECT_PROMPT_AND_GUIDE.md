# Project: Machine Maintenance Insight (Use Case 25)

## Business goal
Use sensor, machine, usage, alarm and maintenance records to identify operating patterns that indicate which industrial machines need maintenance attention.

## Dataset
This project includes five synthetic CSV files:
- sensor.csv — timestamp, machine, vibration, temperature, current
- machines.csv — machine, type, age_years, installation_date
- usage.csv — timestamp, machine, runtime_hours, load_pct, cycles
- alarms.csv — timestamp, machine, alarm_type, severity
- maintenance.csv — machine, service_date, action, downtime_hours, technician_notes

Also included:
- cleaned_machine_analysis.csv — prepared analysis-level table with engineered features and a simple rule-based maintenance_priority.
- Machine_Maintenance_Analysis.xlsx — workbook with cleaned analysis and summary sheets.

Important: this is synthetic educational data created for the assignment. Values and maintenance labels are simulated, not real factory observations. The rule-based priority is a starting point for analysis, not a validated predictive model.

## Workflow
1. Inspect each CSV: shape, dtypes, missingness, duplicates and ranges.
2. Clean duplicate machine-timestamp rows; standardize alarm labels; handle missing values with a documented strategy; inspect extreme sensor values before deciding whether to cap/remove them.
3. Merge sensor and usage by machine + timestamp, then join machine metadata. Summarize alarms and maintenance per machine or per time window to avoid multiplying rows when joining event tables.
4. EDA: distributions of vibration, temperature, current and load; alarm counts by type; trends in the 24 hours/days before service; load vs downtime; compare machine types and age bands; identify repeat-failure machines.
5. Engineer features: rolling means/maxima, warning counts in the last 7 days, hours since last service, alarms in last 30 days, load bands, machine age bands and prior downtime.
6. Feature selection: correlation analysis and domain reasoning; optionally use mutual information or PCA after scaling numerical columns.
7. Excel: formulas, descriptive statistics, charts, Pivot Tables/Pivot Charts and one summary sheet.
8. Optional modelling: predict maintenance within the next 7 days using a time-based split. Create a target from future maintenance dates; avoid using future information in predictors. Compare a baseline model with Random Forest and report precision, recall, F1 and PR-AUC. Do not claim predictive validity without a careful time split.
9. Present 3–5 evidence-backed findings, business implications, priorities and recommendations.

## Copy-paste AI prompt
Act as a senior data scientist and mentor. Help me complete the Data Science Skill Based Assessment Use Case 25: Machine Maintenance Insight for MechaCare Industrial Systems. Use the supplied CSV files and do not invent results. First explain the business problem in beginner-friendly language. Then provide runnable Python code in small, clearly explained sections using pandas, NumPy, Matplotlib and Seaborn to load all five files, inspect data types, missing values, duplicate timestamps, inconsistent alarm labels and extreme sensor values. Clean the data transparently, merge at an appropriate grain, and explain why event tables must be aggregated before joining. Perform EDA to answer: (1) which machines have abnormal sensor ranges, (2) how readings change before maintenance, (3) most frequent alarms, (4) whether load relates to downtime, (5) which machine types require more service, and (6) repeated-failure patterns. Create meaningful charts with titles, labels and interpretations. Engineer features such as rolling sensor statistics, recent alarm counts, age bands, hours since service and downtime history. Explain feature selection and use PCA only if appropriate. Export a cleaned CSV. Build an Excel workbook plan with formulas, Pivot Tables, Pivot Charts and a summary sheet. Give evidence-backed findings only after running the code; clearly label synthetic-data findings as examples. Finally, create a short 5–7 slide business pitch with maintenance priorities and practical recommendations. If modelling is appropriate, create a leakage-safe future-maintenance target, use a chronological train/test split, compare a simple baseline with a suitable model, and evaluate precision, recall, F1 and PR-AUC. Explain every step at a beginner level and list the exact files and deliverables to submit.
