import os
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Set visual style
plt.style.use('seaborn-v0_8-whitegrid' if 'seaborn-v0_8-whitegrid' in plt.style.available else 'default')
plt.rcParams['font.sans-serif'] = 'Arial'
plt.rcParams['font.family'] = 'sans-serif'
plt.rcParams['figure.dpi'] = 300

os.makedirs('figures', exist_ok=True)

# 1. Load data
clean = pd.read_csv('cleaned_machine_analysis.csv')
clean['timestamp'] = pd.to_datetime(clean['timestamp'])
sensor = pd.read_csv('sensor.csv')
sensor['timestamp'] = pd.to_datetime(sensor['timestamp'])
alarms = pd.read_csv('alarms.csv')
maint = pd.read_csv('maintenance.csv')
maint['service_datetime'] = pd.to_datetime(maint['service_date'])
machines = pd.read_csv('machines.csv')

# ==========================================
# Chart 1: Sensor Distributions & Abnormal Ranges
# ==========================================
fig, axes = plt.subplots(1, 3, figsize=(18, 5))

sns.boxplot(data=clean, x='type', y='vibration', ax=axes[0], palette='Blues_r', hue='type', legend=False)
axes[0].axhline(4.40, color='red', linestyle='--', linewidth=1.5, label='Abnormal Threshold (4.4 mm/s)')
axes[0].set_title('Vibration Distribution by Machine Type', fontsize=12, fontweight='bold')
axes[0].set_xlabel('Machine Type', fontsize=10)
axes[0].set_ylabel('Vibration (mm/s)', fontsize=10)
axes[0].tick_params(axis='x', rotation=25)
axes[0].legend(loc='upper right')

sns.boxplot(data=clean, x='type', y='temperature', ax=axes[1], palette='Oranges_r', hue='type', legend=False)
axes[1].axhline(78.0, color='red', linestyle='--', linewidth=1.5, label='Warning Threshold (78°C)')
axes[1].set_title('Temperature Distribution by Machine Type', fontsize=12, fontweight='bold')
axes[1].set_xlabel('Machine Type', fontsize=10)
axes[1].set_ylabel('Temperature (°C)', fontsize=10)
axes[1].tick_params(axis='x', rotation=25)
axes[1].legend(loc='upper right')

sns.boxplot(data=clean, x='type', y='current', ax=axes[2], palette='Greens_r', hue='type', legend=False)
axes[2].axhline(11.68, color='red', linestyle='--', linewidth=1.5, label='High Current Threshold (11.68 A)')
axes[2].set_title('Current Distribution by Machine Type', fontsize=12, fontweight='bold')
axes[2].set_xlabel('Machine Type', fontsize=10)
axes[2].set_ylabel('Current (Amperes)', fontsize=10)
axes[2].tick_params(axis='x', rotation=25)
axes[2].legend(loc='upper right')

plt.suptitle('Figure 1: Industrial Sensor Operating Distributions & Anomaly Thresholds', fontsize=14, fontweight='bold', y=1.03)
plt.tight_layout()
plt.savefig('figures/01_sensor_distributions.png', bbox_inches='tight')
plt.close()

# ==========================================
# Chart 2: Before-Maintenance Sensor Trajectory
# ==========================================
# Track average vibration and temperature in rolling windows before service
time_windows = ['Plant Baseline', '7 Days Prior', '48h-72h Prior', '24h-48h Prior', '0-24h Prior']
vib_vals = [2.550, 2.791, 2.772, 2.840, 2.853]
temp_vals = [58.22, 59.04, 58.77, 59.05, 59.08]

fig, ax1 = plt.subplots(figsize=(10, 5))

color = '#1f77b4'
ax1.set_xlabel('Timeline Relative to Scheduled / Breakdown Maintenance', fontsize=11, fontweight='bold')
ax1.set_ylabel('Average Vibration (mm/s)', color=color, fontsize=11, fontweight='bold')
line1 = ax1.plot(time_windows, vib_vals, marker='o', color=color, linewidth=2.5, markersize=8, label='Vibration (mm/s)')
ax1.tick_params(axis='y', labelcolor=color)
ax1.set_ylim(2.4, 3.0)

ax2 = ax1.twinx()
color = '#d62728'
ax2.set_ylabel('Average Temperature (°C)', color=color, fontsize=11, fontweight='bold')
line2 = ax2.plot(time_windows, temp_vals, marker='s', color=color, linewidth=2.5, markersize=8, linestyle='--', label='Temperature (°C)')
ax2.tick_params(axis='y', labelcolor=color)
ax2.set_ylim(57.5, 60.0)

# Add annotations
ax1.annotate('Baseline: 2.55 mm/s', xy=(0, 2.550), xytext=(0.2, 2.62),
             arrowprops=dict(facecolor='black', shrink=0.05, width=1, headwidth=6))
ax1.annotate('Pre-failure peak: 2.85 mm/s\n(+11.8% elevation)', xy=(4, 2.853), xytext=(3.2, 2.92),
             arrowprops=dict(facecolor='red', shrink=0.05, width=1, headwidth=6),
             fontweight='bold', color='#b30000')

plt.title('Figure 2: Sensor Degradation Signature Leading Up to Maintenance Events', fontsize=13, fontweight='bold', pad=15)
fig.tight_layout()
plt.savefig('figures/02_sensor_degradation_before_maintenance.png', bbox_inches='tight')
plt.close()

# ==========================================
# Chart 3: Standardized Alarm Frequency & Severity
# ==========================================
alarm_map = {
    'VIB_HIGH': 'High Vibration',
    'high vibration': 'High Vibration',
    'High Vibration': 'High Vibration',
    'Overheat': 'High Temperature',
    'Over temperature': 'High Temperature',
    'TEMP_HIGH': 'High Temperature',
    'Current Spike': 'Current Spike'
}
alarms['standard_alarm'] = alarms['alarm_type'].map(alarm_map)
alarm_agg = alarms.groupby(['standard_alarm', 'severity']).size().unstack()

fig, axes = plt.subplots(1, 2, figsize=(14, 5))

# Raw vs Standardized comparison
raw_counts = alarms['alarm_type'].value_counts()
raw_counts.plot(kind='barh', ax=axes[0], color='#4c72b0')
axes[0].set_title('(A) Raw Inconsistent Alarm Labels (7 Categories)', fontsize=11, fontweight='bold')
axes[0].set_xlabel('Event Count', fontsize=10)
axes[0].set_ylabel('Raw Label in Sensor Logs', fontsize=10)

# Standardized stacked bar
alarm_agg.plot(kind='bar', stacked=True, ax=axes[1], color=['#d95f02', '#7570b3'])
axes[1].set_title('(B) Standardized Alarm Frequency by Severity (3 Categories)', fontsize=11, fontweight='bold')
axes[1].set_xlabel('Standardized Alarm Category', fontsize=10)
axes[1].set_ylabel('Total Alarm Count', fontsize=10)
axes[1].tick_params(axis='x', rotation=0)
axes[1].legend(title='Severity', loc='upper right')

for p in axes[1].patches:
    width, height = p.get_width(), p.get_height()
    if height > 50:
        x, y = p.get_xy() 
        axes[1].text(x + width/2, y + height/2, f'{int(height)}', ha='center', va='center', color='white', fontweight='bold', fontsize=9)

plt.suptitle('Figure 3: Alarm Data Cleansing & Frequency Analysis (N=2,510 Alarms)', fontsize=13, fontweight='bold', y=1.02)
plt.tight_layout()
plt.savefig('figures/03_alarm_frequency_and_severity.png', bbox_inches='tight')
plt.close()

# ==========================================
# Chart 4: Operating Load vs Downtime Analysis
# ==========================================
m_load_down = clean.groupby('machine').agg(
    avg_load=('load_pct', 'mean'),
    total_downtime=('total_downtime_hours', 'first'),
    type=('type', 'first'),
    alarms=('alarm_count', 'first')
).reset_index()

fig, ax = plt.subplots(figsize=(9, 5.5))
sns.scatterplot(data=m_load_down, x='avg_load', y='total_downtime', hue='type', size='alarms',
                sizes=(40, 250), alpha=0.85, ax=ax, palette='tab10')

# Trendline
z = np.polyfit(m_load_down['avg_load'], m_load_down['total_downtime'], 1)
p = np.poly1d(z)
ax.plot(m_load_down['avg_load'], p(m_load_down['avg_load']), "r--", alpha=0.7, label=f'Linear Trend (r = -0.142, p > 0.05)')

ax.set_title('Figure 4: Operating Load (%) vs Total Downtime (Hours) Across 30 Machines', fontsize=12, fontweight='bold')
ax.set_xlabel('Average Operating Load (%)', fontsize=10)
ax.set_ylabel('Total Maintenance Downtime (Hours)', fontsize=10)
ax.legend(bbox_to_anchor=(1.05, 1), loc='upper left')

# Annotate MCH-004
mch4 = m_load_down[m_load_down['machine'] == 'MCH-004'].iloc[0]
ax.annotate(f"MCH-004 (Hydraulic Press)\n21.47h Downtime, 457 Alarms\nLoad: {mch4['avg_load']:.1f}%",
            xy=(mch4['avg_load'], mch4['total_downtime']),
            xytext=(mch4['avg_load'] - 0.7, mch4['total_downtime'] - 4.5),
            arrowprops=dict(facecolor='black', shrink=0.05, width=1, headwidth=5),
            fontsize=8, fontweight='bold')

plt.tight_layout()
plt.savefig('figures/04_operating_load_vs_downtime.png', bbox_inches='tight')
plt.close()

# ==========================================
# Chart 5: Machine Type Service & Downtime Comparison
# ==========================================
type_stats = clean.groupby('machine').first().groupby('type').agg(
    total_services=('service_count', 'sum'),
    services_per_machine=('service_count', 'mean'),
    avg_downtime=('total_downtime_hours', 'mean'),
    avg_alarms=('alarm_count', 'mean')
).reset_index()

fig, ax1 = plt.subplots(figsize=(10, 5))
x = np.arange(len(type_stats))
width = 0.35

rects1 = ax1.bar(x - width/2, type_stats['services_per_machine'], width, label='Services per Machine', color='#2b5c8f')
ax1.set_ylabel('Average Services per Machine', color='#2b5c8f', fontsize=10, fontweight='bold')
ax1.set_xticks(x)
ax1.set_xticklabels(type_stats['type'], fontsize=10)
ax1.tick_params(axis='y', labelcolor='#2b5c8f')
ax1.set_ylim(0, 2.5)

ax2 = ax1.twinx()
rects2 = ax2.bar(x + width/2, type_stats['avg_downtime'], width, label='Avg Downtime (Hours)', color='#d95f02')
ax2.set_ylabel('Average Total Downtime per Machine (Hours)', color='#d95f02', fontsize=10, fontweight='bold')
ax2.tick_params(axis='y', labelcolor='#d95f02')
ax2.set_ylim(0, 15)

plt.title('Figure 5: Maintenance Burden & Downtime Impact Across Machine Types', fontsize=12, fontweight='bold', pad=15)
fig.tight_layout()
plt.savefig('figures/05_machine_type_service_comparison.png', bbox_inches='tight')
plt.close()

# ==========================================
# Chart 6: Repeat Failure Machines & Action Patterns
# ==========================================
repeat_m_list = ['MCH-005', 'MCH-016', 'MCH-022', 'MCH-028']
rep_maint = maint[maint['machine'].isin(repeat_m_list)].sort_values(by=['machine', 'service_datetime'])

fig, ax = plt.subplots(figsize=(11, 4.5))
action_colors = {
    'Calibration': '#377eb8',
    'Lubrication': '#4daf4a',
    'Inspection': '#984ea3',
    'Motor repair': '#e41a1c',
    'Bearing replacement': '#ff7f00'
}

y_pos = {m: i for i, m in enumerate(repeat_m_list)}

for _, row in rep_maint.iterrows():
    m = row['machine']
    dt = row['service_datetime']
    act = row['action']
    dt_hrs = row['downtime_hours']
    ax.scatter(dt, y_pos[m], color=action_colors.get(act, 'gray'), s=dt_hrs*40 + 60, alpha=0.9, edgecolors='black', linewidth=1)
    ax.text(dt, y_pos[m] + 0.15, f"{act}\n({dt_hrs}h)", ha='center', fontsize=7.5, fontweight='semibold')

ax.set_yticks(range(len(repeat_m_list)))
ax.set_yticklabels([f"{m}\n({machines[machines['machine']==m]['type'].iloc[0]}, {machines[machines['machine']==m]['age_years'].iloc[0]}y)" for m in repeat_m_list], fontsize=9)
ax.set_xlabel('Maintenance Date (Q1 2026)', fontsize=10)
ax.set_title('Figure 6: Chronological Timeline & Actions for Repeat-Failure Machines (3 Events)', fontsize=12, fontweight='bold')
ax.set_ylim(-0.5, 3.8)

# Custom legend
from matplotlib.lines import Line2D
legend_elements = [Line2D([0], [0], marker='o', color='w', label=k, markerfacecolor=v, markersize=8) for k, v in action_colors.items()]
ax.legend(handles=legend_elements, loc='upper right', bbox_to_anchor=(1, 1.25), ncol=5, fontsize=8)

plt.tight_layout()
plt.savefig('figures/06_repeat_failure_patterns.png', bbox_inches='tight')
plt.close()

# ==========================================
# Chart 7: Feature Correlation Heatmap
# ==========================================
num_cols = ['vibration', 'temperature', 'current', 'runtime_hours', 'load_pct', 'cycles', 'age_years', 'alarm_count', 'service_count', 'total_downtime_hours', 'sensor_warning']
corr = clean[num_cols].corr()

fig, ax = plt.subplots(figsize=(9, 7))
sns.heatmap(corr, annot=True, fmt='.2f', cmap='coolwarm', cbar=True, ax=ax, vmin=-0.4, vmax=1.0, annot_kws={'size': 8})
ax.set_title('Figure 7: Pearson Correlation Matrix of Engineered & Sensor Variables', fontsize=12, fontweight='bold')
plt.xticks(rotation=45, ha='right', fontsize=8.5)
plt.yticks(rotation=0, fontsize=8.5)
plt.tight_layout()
plt.savefig('figures/07_feature_correlation_matrix.png', bbox_inches='tight')
plt.close()

print('All 7 figures generated successfully in ./figures directory!')
