const FLEET_DATA = {
  "total_machines": 30,
  "total_downtime": 268.5,
  "total_alarms": 2510,
  "critical_alarms": 1236,
  "total_services": 51,
  "high_priority_machines": 13,
  "medium_priority_machines": 8,
  "low_priority_machines": 9,
  "avg_plant_vibration": 2.549,
  "avg_plant_temp": 58.22,
  "avg_plant_load": 65.03,
  "load_downtime_corr": -0.142,
  "machines": [
    {
      "id": "MCH-004",
      "type": "Hydraulic Press",
      "age_years": 11,
      "install_date": "2015-01-02",
      "alarm_count": 457,
      "service_count": 1,
      "total_downtime": 21.47,
      "avg_downtime": 21.47,
      "avg_vibration": 3.648,
      "max_vibration": 17.195,
      "pct_abnormal_vib": 21.1,
      "avg_temp": 66.76,
      "max_temp": 89.08,
      "pct_abnormal_temp": 0.9,
      "avg_current": 12.28,
      "max_current": 21.8,
      "avg_load": 64.7,
      "priority": "High",
      "age_band": "9-12 years",
      "sensor_warnings": 1580,
      "services": [
        {
          "date": "2026-02-20",
          "action": "Motor repair",
          "downtime": 21.47
        }
      ]
    },
    {
      "id": "MCH-014",
      "type": "Compressor",
      "age_years": 4,
      "install_date": "2022-01-01",
      "alarm_count": 34,
      "service_count": 2,
      "total_downtime": 19.15,
      "avg_downtime": 9.57,
      "avg_vibration": 2.542,
      "max_vibration": 9.119,
      "pct_abnormal_vib": 1.0,
      "avg_temp": 61.79,
      "max_temp": 85.61,
      "pct_abnormal_temp": 0.4,
      "avg_current": 10.3,
      "max_current": 18.42,
      "avg_load": 65.2,
      "priority": "High",
      "age_band": "1-4 years",
      "sensor_warnings": 220,
      "services": [
        {
          "date": "2026-01-17",
          "action": "Inspection",
          "downtime": 3.86
        },
        {
          "date": "2026-02-26",
          "action": "Bearing replacement",
          "downtime": 15.29
        }
      ]
    },
    {
      "id": "MCH-015",
      "type": "CNC Lathe",
      "age_years": 8,
      "install_date": "2018-01-01",
      "alarm_count": 34,
      "service_count": 2,
      "total_downtime": 16.69,
      "avg_downtime": 8.34,
      "avg_vibration": 2.339,
      "max_vibration": 10.308,
      "pct_abnormal_vib": 0.5,
      "avg_temp": 58.08,
      "max_temp": 85.14,
      "pct_abnormal_temp": 0.3,
      "avg_current": 8.28,
      "max_current": 17.7,
      "avg_load": 64.7,
      "priority": "High",
      "age_band": "5-8 years",
      "sensor_warnings": 18,
      "services": [
        {
          "date": "2026-01-29",
          "action": "Calibration",
          "downtime": 6.76
        },
        {
          "date": "2026-03-08",
          "action": "Motor repair",
          "downtime": 9.93
        }
      ]
    },
    {
      "id": "MCH-025",
      "type": "Conveyor",
      "age_years": 9,
      "install_date": "2017-01-01",
      "alarm_count": 90,
      "service_count": 2,
      "total_downtime": 16.47,
      "avg_downtime": 8.23,
      "avg_vibration": 1.887,
      "max_vibration": 7.768,
      "pct_abnormal_vib": 0.1,
      "avg_temp": 46.87,
      "max_temp": 66.11,
      "pct_abnormal_temp": 0.0,
      "avg_current": 5.79,
      "max_current": 10.11,
      "avg_load": 65.5,
      "priority": "High",
      "age_band": "9-12 years",
      "sensor_warnings": 3,
      "services": [
        {
          "date": "2026-01-15",
          "action": "Inspection",
          "downtime": 4.94
        },
        {
          "date": "2026-02-13",
          "action": "Lubrication",
          "downtime": 11.53
        }
      ]
    },
    {
      "id": "MCH-016",
      "type": "Conveyor",
      "age_years": 9,
      "install_date": "2017-01-01",
      "alarm_count": 83,
      "service_count": 3,
      "total_downtime": 13.82,
      "avg_downtime": 4.61,
      "avg_vibration": 1.854,
      "max_vibration": 6.137,
      "pct_abnormal_vib": 0.2,
      "avg_temp": 46.74,
      "max_temp": 74.59,
      "pct_abnormal_temp": 0.0,
      "avg_current": 5.76,
      "max_current": 9.79,
      "avg_load": 64.6,
      "priority": "High",
      "age_band": "9-12 years",
      "sensor_warnings": 4,
      "services": [
        {
          "date": "2026-01-06",
          "action": "Lubrication",
          "downtime": 10.98
        },
        {
          "date": "2026-02-03",
          "action": "Motor repair",
          "downtime": 2.25
        },
        {
          "date": "2026-03-26",
          "action": "Bearing replacement",
          "downtime": 0.59
        }
      ]
    },
    {
      "id": "MCH-020",
      "type": "Hydraulic Press",
      "age_years": 14,
      "install_date": "2012-01-02",
      "alarm_count": 61,
      "service_count": 1,
      "total_downtime": 13.21,
      "avg_downtime": 13.21,
      "avg_vibration": 3.088,
      "max_vibration": 10.785,
      "pct_abnormal_vib": 2.6,
      "avg_temp": 65.19,
      "max_temp": 90.96,
      "pct_abnormal_temp": 0.4,
      "avg_current": 12.31,
      "max_current": 23.24,
      "avg_load": 65.0,
      "priority": "High",
      "age_band": "13+ years",
      "sensor_warnings": 1447,
      "services": [
        {
          "date": "2026-03-05",
          "action": "Calibration",
          "downtime": 13.21
        }
      ]
    },
    {
      "id": "MCH-023",
      "type": "Compressor",
      "age_years": 5,
      "install_date": "2021-01-01",
      "alarm_count": 18,
      "service_count": 2,
      "total_downtime": 13.16,
      "avg_downtime": 6.58,
      "avg_vibration": 2.521,
      "max_vibration": 10.83,
      "pct_abnormal_vib": 0.6,
      "avg_temp": 61.68,
      "max_temp": 77.89,
      "pct_abnormal_temp": 0.0,
      "avg_current": 10.24,
      "max_current": 18.66,
      "avg_load": 65.1,
      "priority": "High",
      "age_band": "5-8 years",
      "sensor_warnings": 206,
      "services": [
        {
          "date": "2026-01-03",
          "action": "Calibration",
          "downtime": 10.72
        },
        {
          "date": "2026-02-14",
          "action": "Lubrication",
          "downtime": 2.44
        }
      ]
    },
    {
      "id": "MCH-028",
      "type": "CNC Lathe",
      "age_years": 9,
      "install_date": "2017-01-01",
      "alarm_count": 30,
      "service_count": 3,
      "total_downtime": 12.62,
      "avg_downtime": 4.21,
      "avg_vibration": 2.272,
      "max_vibration": 9.5,
      "pct_abnormal_vib": 0.4,
      "avg_temp": 57.68,
      "max_temp": 78.73,
      "pct_abnormal_temp": 0.1,
      "avg_current": 8.23,
      "max_current": 13.46,
      "avg_load": 64.8,
      "priority": "High",
      "age_band": "9-12 years",
      "sensor_warnings": 14,
      "services": [
        {
          "date": "2026-01-09",
          "action": "Bearing replacement",
          "downtime": 6.56
        },
        {
          "date": "2026-02-03",
          "action": "Lubrication",
          "downtime": 3.1
        },
        {
          "date": "2026-03-05",
          "action": "Motor repair",
          "downtime": 2.96
        }
      ]
    },
    {
      "id": "MCH-022",
      "type": "CNC Lathe",
      "age_years": 1,
      "install_date": "2025-01-01",
      "alarm_count": 27,
      "service_count": 3,
      "total_downtime": 12.54,
      "avg_downtime": 4.18,
      "avg_vibration": 2.235,
      "max_vibration": 11.335,
      "pct_abnormal_vib": 0.1,
      "avg_temp": 57.68,
      "max_temp": 72.95,
      "pct_abnormal_temp": 0.0,
      "avg_current": 8.27,
      "max_current": 12.65,
      "avg_load": 65.3,
      "priority": "High",
      "age_band": "1-4 years",
      "sensor_warnings": 6,
      "services": [
        {
          "date": "2026-01-03",
          "action": "Lubrication",
          "downtime": 2.83
        },
        {
          "date": "2026-01-25",
          "action": "Calibration",
          "downtime": 3.6
        },
        {
          "date": "2026-03-10",
          "action": "Calibration",
          "downtime": 6.11
        }
      ]
    },
    {
      "id": "MCH-013",
      "type": "Hydraulic Press",
      "age_years": 14,
      "install_date": "2012-01-02",
      "alarm_count": 91,
      "service_count": 1,
      "total_downtime": 11.67,
      "avg_downtime": 11.67,
      "avg_vibration": 3.162,
      "max_vibration": 12.318,
      "pct_abnormal_vib": 4.1,
      "avg_temp": 65.37,
      "max_temp": 89.15,
      "pct_abnormal_temp": 0.5,
      "avg_current": 12.25,
      "max_current": 23.44,
      "avg_load": 64.8,
      "priority": "High",
      "age_band": "13+ years",
      "sensor_warnings": 1446,
      "services": [
        {
          "date": "2026-02-12",
          "action": "Lubrication",
          "downtime": 11.67
        }
      ]
    },
    {
      "id": "MCH-021",
      "type": "Hydraulic Press",
      "age_years": 9,
      "install_date": "2017-01-01",
      "alarm_count": 278,
      "service_count": 1,
      "total_downtime": 10.6,
      "avg_downtime": 10.6,
      "avg_vibration": 3.355,
      "max_vibration": 14.96,
      "pct_abnormal_vib": 12.5,
      "avg_temp": 66.15,
      "max_temp": 95.96,
      "pct_abnormal_temp": 0.8,
      "avg_current": 12.28,
      "max_current": 23.22,
      "avg_load": 64.8,
      "priority": "High",
      "age_band": "9-12 years",
      "sensor_warnings": 1522,
      "services": [
        {
          "date": "2026-01-24",
          "action": "Lubrication",
          "downtime": 10.6
        }
      ]
    },
    {
      "id": "MCH-019",
      "type": "Hydraulic Press",
      "age_years": 1,
      "install_date": "2025-01-01",
      "alarm_count": 116,
      "service_count": 2,
      "total_downtime": 9.4,
      "avg_downtime": 4.7,
      "avg_vibration": 3.14,
      "max_vibration": 10.64,
      "pct_abnormal_vib": 5.2,
      "avg_temp": 65.32,
      "max_temp": 81.84,
      "pct_abnormal_temp": 0.2,
      "avg_current": 12.29,
      "max_current": 21.92,
      "avg_load": 65.4,
      "priority": "High",
      "age_band": "1-4 years",
      "sensor_warnings": 1486,
      "services": [
        {
          "date": "2026-01-18",
          "action": "Lubrication",
          "downtime": 6.11
        },
        {
          "date": "2026-03-17",
          "action": "Inspection",
          "downtime": 3.29
        }
      ]
    },
    {
      "id": "MCH-029",
      "type": "Hydraulic Press",
      "age_years": 1,
      "install_date": "2025-01-01",
      "alarm_count": 142,
      "service_count": 2,
      "total_downtime": 7.61,
      "avg_downtime": 3.81,
      "avg_vibration": 3.217,
      "max_vibration": 14.58,
      "pct_abnormal_vib": 6.1,
      "avg_temp": 65.53,
      "max_temp": 94.71,
      "pct_abnormal_temp": 0.5,
      "avg_current": 12.32,
      "max_current": 20.5,
      "avg_load": 65.5,
      "priority": "High",
      "age_band": "1-4 years",
      "sensor_warnings": 1507,
      "services": [
        {
          "date": "2026-01-16",
          "action": "Lubrication",
          "downtime": 2.61
        },
        {
          "date": "2026-03-31",
          "action": "Bearing replacement",
          "downtime": 5.0
        }
      ]
    },
    {
      "id": "MCH-030",
      "type": "Hydraulic Press",
      "age_years": 6,
      "install_date": "2020-01-02",
      "alarm_count": 57,
      "service_count": 2,
      "total_downtime": 9.27,
      "avg_downtime": 4.63,
      "avg_vibration": 3.024,
      "max_vibration": 8.584,
      "pct_abnormal_vib": 2.3,
      "avg_temp": 65.02,
      "max_temp": 82.88,
      "pct_abnormal_temp": 0.3,
      "avg_current": 12.26,
      "max_current": 20.43,
      "avg_load": 65.3,
      "priority": "Medium",
      "age_band": "5-8 years",
      "sensor_warnings": 1441,
      "services": [
        {
          "date": "2026-01-17",
          "action": "Inspection",
          "downtime": 5.29
        },
        {
          "date": "2026-03-08",
          "action": "Motor repair",
          "downtime": 3.98
        }
      ]
    },
    {
      "id": "MCH-011",
      "type": "Compressor",
      "age_years": 1,
      "install_date": "2025-01-01",
      "alarm_count": 94,
      "service_count": 2,
      "total_downtime": 8.15,
      "avg_downtime": 4.08,
      "avg_vibration": 2.796,
      "max_vibration": 9.788,
      "pct_abnormal_vib": 3.9,
      "avg_temp": 62.46,
      "max_temp": 88.47,
      "pct_abnormal_temp": 0.0,
      "avg_current": 10.26,
      "max_current": 16.98,
      "avg_load": 64.2,
      "priority": "Medium",
      "age_band": "1-4 years",
      "sensor_warnings": 242,
      "services": [
        {
          "date": "2026-01-20",
          "action": "Motor repair",
          "downtime": 4.47
        },
        {
          "date": "2026-03-15",
          "action": "Lubrication",
          "downtime": 3.68
        }
      ]
    },
    {
      "id": "MCH-008",
      "type": "Compressor",
      "age_years": 12,
      "install_date": "2014-01-01",
      "alarm_count": 117,
      "service_count": 1,
      "total_downtime": 6.39,
      "avg_downtime": 6.39,
      "avg_vibration": 3.128,
      "max_vibration": 11.424,
      "pct_abnormal_vib": 5.3,
      "avg_temp": 63.61,
      "max_temp": 88.17,
      "pct_abnormal_temp": 0.3,
      "avg_current": 10.33,
      "max_current": 21.58,
      "avg_load": 65.7,
      "priority": "Medium",
      "age_band": "9-12 years",
      "sensor_warnings": 319,
      "services": [
        {
          "date": "2026-03-14",
          "action": "Bearing replacement",
          "downtime": 6.39
        }
      ]
    },
    {
      "id": "MCH-007",
      "type": "Milling Machine",
      "age_years": 10,
      "install_date": "2016-01-02",
      "alarm_count": 67,
      "service_count": 1,
      "total_downtime": 5.04,
      "avg_downtime": 5.04,
      "avg_vibration": 2.568,
      "max_vibration": 10.235,
      "pct_abnormal_vib": 0.9,
      "avg_temp": 56.41,
      "max_temp": 84.85,
      "pct_abnormal_temp": 0.1,
      "avg_current": 7.78,
      "max_current": 13.11,
      "avg_load": 64.5,
      "priority": "Medium",
      "age_band": "9-12 years",
      "sensor_warnings": 24,
      "services": [
        {
          "date": "2026-02-28",
          "action": "Motor repair",
          "downtime": 5.04
        }
      ]
    },
    {
      "id": "MCH-027",
      "type": "Conveyor",
      "age_years": 8,
      "install_date": "2018-01-01",
      "alarm_count": 80,
      "service_count": 1,
      "total_downtime": 3.33,
      "avg_downtime": 3.33,
      "avg_vibration": 1.94,
      "max_vibration": 4.273,
      "pct_abnormal_vib": 0.0,
      "avg_temp": 47.09,
      "max_temp": 62.86,
      "pct_abnormal_temp": 0.0,
      "avg_current": 5.76,
      "max_current": 8.96,
      "avg_load": 65.7,
      "priority": "Medium",
      "age_band": "5-8 years",
      "sensor_warnings": 0,
      "services": [
        {
          "date": "2026-01-10",
          "action": "Lubrication",
          "downtime": 3.33
        }
      ]
    },
    {
      "id": "MCH-017",
      "type": "Conveyor",
      "age_years": 6,
      "install_date": "2020-01-02",
      "alarm_count": 88,
      "service_count": 1,
      "total_downtime": 2.66,
      "avg_downtime": 2.66,
      "avg_vibration": 2.181,
      "max_vibration": 8.629,
      "pct_abnormal_vib": 0.6,
      "avg_temp": 47.75,
      "max_temp": 70.92,
      "pct_abnormal_temp": 0.0,
      "avg_current": 5.75,
      "max_current": 9.31,
      "avg_load": 64.8,
      "priority": "Medium",
      "age_band": "5-8 years",
      "sensor_warnings": 12,
      "services": [
        {
          "date": "2026-03-10",
          "action": "Inspection",
          "downtime": 2.66
        }
      ]
    },
    {
      "id": "MCH-026",
      "type": "Conveyor",
      "age_years": 12,
      "install_date": "2014-01-01",
      "alarm_count": 94,
      "service_count": 1,
      "total_downtime": 1.35,
      "avg_downtime": 1.35,
      "avg_vibration": 2.183,
      "max_vibration": 9.065,
      "pct_abnormal_vib": 0.5,
      "avg_temp": 47.89,
      "max_temp": 76.57,
      "pct_abnormal_temp": 0.0,
      "avg_current": 5.8,
      "max_current": 11.15,
      "avg_load": 65.2,
      "priority": "Medium",
      "age_band": "9-12 years",
      "sensor_warnings": 10,
      "services": [
        {
          "date": "2026-03-14",
          "action": "Bearing replacement",
          "downtime": 1.35
        }
      ]
    },
    {
      "id": "MCH-024",
      "type": "Conveyor",
      "age_years": 10,
      "install_date": "2016-01-02",
      "alarm_count": 87,
      "service_count": 2,
      "total_downtime": 1.14,
      "avg_downtime": 0.57,
      "avg_vibration": 1.857,
      "max_vibration": 6.414,
      "pct_abnormal_vib": 0.1,
      "avg_temp": 46.69,
      "max_temp": 68.8,
      "pct_abnormal_temp": 0.0,
      "avg_current": 5.76,
      "max_current": 11.88,
      "avg_load": 65.2,
      "priority": "Medium",
      "age_band": "9-12 years",
      "sensor_warnings": 3,
      "services": [
        {
          "date": "2026-01-04",
          "action": "Motor repair",
          "downtime": 0.57
        },
        {
          "date": "2026-02-23",
          "action": "Inspection",
          "downtime": 0.57
        }
      ]
    },
    {
      "id": "MCH-012",
      "type": "Milling Machine",
      "age_years": 2,
      "install_date": "2024-01-02",
      "alarm_count": 51,
      "service_count": 1,
      "total_downtime": 11.88,
      "avg_downtime": 11.88,
      "avg_vibration": 2.556,
      "max_vibration": 8.455,
      "pct_abnormal_vib": 0.7,
      "avg_temp": 56.29,
      "max_temp": 87.86,
      "pct_abnormal_temp": 0.1,
      "avg_current": 7.76,
      "max_current": 15.11,
      "avg_load": 65.4,
      "priority": "Low",
      "age_band": "1-4 years",
      "sensor_warnings": 16,
      "services": [
        {
          "date": "2026-02-13",
          "action": "Inspection",
          "downtime": 11.88
        }
      ]
    },
    {
      "id": "MCH-005",
      "type": "CNC Lathe",
      "age_years": 5,
      "install_date": "2021-01-01",
      "alarm_count": 38,
      "service_count": 3,
      "total_downtime": 10.31,
      "avg_downtime": 3.44,
      "avg_vibration": 2.228,
      "max_vibration": 9.585,
      "pct_abnormal_vib": 0.7,
      "avg_temp": 57.56,
      "max_temp": 87.51,
      "pct_abnormal_temp": 0.3,
      "avg_current": 8.29,
      "max_current": 15.84,
      "avg_load": 64.5,
      "priority": "Low",
      "age_band": "5-8 years",
      "sensor_warnings": 21,
      "services": [
        {
          "date": "2026-01-14",
          "action": "Calibration",
          "downtime": 5.13
        },
        {
          "date": "2026-02-01",
          "action": "Lubrication",
          "downtime": 0.65
        },
        {
          "date": "2026-03-17",
          "action": "Inspection",
          "downtime": 4.53
        }
      ]
    },
    {
      "id": "MCH-003",
      "type": "CNC Lathe",
      "age_years": 5,
      "install_date": "2021-01-01",
      "alarm_count": 32,
      "service_count": 2,
      "total_downtime": 6.77,
      "avg_downtime": 3.38,
      "avg_vibration": 2.201,
      "max_vibration": 8.351,
      "pct_abnormal_vib": 0.3,
      "avg_temp": 57.74,
      "max_temp": 88.73,
      "pct_abnormal_temp": 0.1,
      "avg_current": 8.24,
      "max_current": 14.49,
      "avg_load": 64.7,
      "priority": "Low",
      "age_band": "5-8 years",
      "sensor_warnings": 9,
      "services": [
        {
          "date": "2026-01-15",
          "action": "Bearing replacement",
          "downtime": 3.18
        },
        {
          "date": "2026-02-23",
          "action": "Motor repair",
          "downtime": 3.59
        }
      ]
    },
    {
      "id": "MCH-006",
      "type": "CNC Lathe",
      "age_years": 11,
      "install_date": "2015-01-02",
      "alarm_count": 56,
      "service_count": 2,
      "total_downtime": 6.42,
      "avg_downtime": 3.21,
      "avg_vibration": 2.334,
      "max_vibration": 10.454,
      "pct_abnormal_vib": 0.9,
      "avg_temp": 58.01,
      "max_temp": 83.89,
      "pct_abnormal_temp": 0.3,
      "avg_current": 8.3,
      "max_current": 15.43,
      "avg_load": 65.5,
      "priority": "Low",
      "age_band": "9-12 years",
      "sensor_warnings": 30,
      "services": [
        {
          "date": "2026-01-14",
          "action": "Bearing replacement",
          "downtime": 3.19
        },
        {
          "date": "2026-03-09",
          "action": "Calibration",
          "downtime": 3.23
        }
      ]
    },
    {
      "id": "MCH-001",
      "type": "CNC Lathe",
      "age_years": 13,
      "install_date": "2013-01-01",
      "alarm_count": 62,
      "service_count": 1,
      "total_downtime": 5.78,
      "avg_downtime": 5.78,
      "avg_vibration": 2.477,
      "max_vibration": 10.428,
      "pct_abnormal_vib": 1.5,
      "avg_temp": 58.44,
      "max_temp": 83.73,
      "pct_abnormal_temp": 0.2,
      "avg_current": 8.28,
      "max_current": 16.1,
      "avg_load": 64.8,
      "priority": "Low",
      "age_band": "13+ years",
      "sensor_warnings": 43,
      "services": [
        {
          "date": "2026-01-12",
          "action": "Motor repair",
          "downtime": 5.78
        }
      ]
    },
    {
      "id": "MCH-010",
      "type": "CNC Lathe",
      "age_years": 1,
      "install_date": "2025-01-01",
      "alarm_count": 29,
      "service_count": 2,
      "total_downtime": 4.26,
      "avg_downtime": 2.13,
      "avg_vibration": 2.263,
      "max_vibration": 7.068,
      "pct_abnormal_vib": 0.2,
      "avg_temp": 57.85,
      "max_temp": 83.76,
      "pct_abnormal_temp": 0.0,
      "avg_current": 8.28,
      "max_current": 13.42,
      "avg_load": 64.8,
      "priority": "Low",
      "age_band": "1-4 years",
      "sensor_warnings": 6,
      "services": [
        {
          "date": "2026-01-04",
          "action": "Calibration",
          "downtime": 2.77
        },
        {
          "date": "2026-02-07",
          "action": "Bearing replacement",
          "downtime": 1.49
        }
      ]
    },
    {
      "id": "MCH-018",
      "type": "Compressor",
      "age_years": 2,
      "install_date": "2024-01-02",
      "alarm_count": 12,
      "service_count": 2,
      "total_downtime": 3.05,
      "avg_downtime": 1.52,
      "avg_vibration": 2.493,
      "max_vibration": 4.42,
      "pct_abnormal_vib": 0.0,
      "avg_temp": 61.75,
      "max_temp": 74.73,
      "pct_abnormal_temp": 0.0,
      "avg_current": 10.28,
      "max_current": 14.83,
      "avg_load": 65.2,
      "priority": "Low",
      "age_band": "1-4 years",
      "sensor_warnings": 242,
      "services": [
        {
          "date": "2026-01-09",
          "action": "Bearing replacement",
          "downtime": 1.01
        },
        {
          "date": "2026-02-20",
          "action": "Motor repair",
          "downtime": 2.04
        }
      ]
    },
    {
      "id": "MCH-009",
      "type": "CNC Lathe",
      "age_years": 11,
      "install_date": "2015-01-02",
      "alarm_count": 47,
      "service_count": 1,
      "total_downtime": 2.83,
      "avg_downtime": 2.83,
      "avg_vibration": 2.384,
      "max_vibration": 10.035,
      "pct_abnormal_vib": 0.8,
      "avg_temp": 58.3,
      "max_temp": 79.15,
      "pct_abnormal_temp": 0.0,
      "avg_current": 8.28,
      "max_current": 15.93,
      "avg_load": 64.8,
      "priority": "Low",
      "age_band": "9-12 years",
      "sensor_warnings": 23,
      "services": [
        {
          "date": "2026-01-14",
          "action": "Bearing replacement",
          "downtime": 2.83
        }
      ]
    },
    {
      "id": "MCH-002",
      "type": "CNC Lathe",
      "age_years": 3,
      "install_date": "2023-01-02",
      "alarm_count": 38,
      "service_count": 1,
      "total_downtime": 1.46,
      "avg_downtime": 1.46,
      "avg_vibration": 2.611,
      "max_vibration": 16.74,
      "pct_abnormal_vib": 0.6,
      "avg_temp": 59.03,
      "max_temp": 82.36,
      "pct_abnormal_temp": 0.1,
      "avg_current": 8.28,
      "max_current": 14.42,
      "avg_load": 65.3,
      "priority": "Low",
      "age_band": "1-4 years",
      "sensor_warnings": 21,
      "services": [
        {
          "date": "2026-02-14",
          "action": "Calibration",
          "downtime": 1.46
        }
      ]
    }
  ]
};
