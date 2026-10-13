// ==========================================================================
// MechaCare Machine Maintenance Insight - Interactive Dashboard Logic
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Ensure FLEET_DATA exists
  if (typeof FLEET_DATA === 'undefined') {
    console.error('FLEET_DATA not loaded!');
    return;
  }

  const { machines } = FLEET_DATA;

  // DOM Elements
  const tableBody = document.getElementById('table-body');
  const searchInput = document.getElementById('asset-search');
  const typeFilter = document.getElementById('type-filter');
  const priorityFilter = document.getElementById('priority-filter');
  const showingCount = document.getElementById('showing-count');
  const tableHeaders = document.querySelectorAll('#fleet-data-table th[data-sort]');
  
  // Modal Elements
  const modal = document.getElementById('machine-modal');
  const modalClose = document.getElementById('modal-close');
  const modalMachineId = document.getElementById('modal-machine-id');
  const modalTypeBadge = document.getElementById('modal-type-badge');
  const modalPriority = document.getElementById('modal-priority');
  const modalDowntime = document.getElementById('modal-downtime');
  const modalVib = document.getElementById('modal-vib');
  const modalTemp = document.getElementById('modal-temp');
  const modalAlarms = document.getElementById('modal-alarms');
  const modalServices = document.getElementById('modal-services');
  const modalRec = document.getElementById('modal-recommendation');

  // State
  let currentMachines = [...machines];
  let sortColumn = 'total_downtime';
  let sortDirection = 'desc';

  // 1. Initial Render
  renderTable();

  // 2. Tab Switching Logic
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetTabId = btn.getAttribute('data-tab');
      const targetContent = document.getElementById(targetTabId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  // 3. Search & Filter Handlers
  searchInput.addEventListener('input', applyFilters);
  typeFilter.addEventListener('change', applyFilters);
  priorityFilter.addEventListener('change', applyFilters);

  function applyFilters() {
    const query = searchInput.value.trim().toLowerCase();
    const selectedType = typeFilter.value;
    const selectedPriority = priorityFilter.value;

    currentMachines = machines.filter(m => {
      const matchesSearch = m.id.toLowerCase().includes(query) || m.type.toLowerCase().includes(query);
      const matchesType = (selectedType === 'ALL') || (m.type === selectedType);
      const matchesPriority = (selectedPriority === 'ALL') || (m.priority === selectedPriority);
      return matchesSearch && matchesType && matchesPriority;
    });

    sortCurrentData();
    renderTable();
  }

  // 4. Sorting Handler
  tableHeaders.forEach(th => {
    th.addEventListener('click', () => {
      const col = th.getAttribute('data-sort');
      if (sortColumn === col) {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        sortColumn = col;
        sortDirection = 'desc';
      }
      sortCurrentData();
      renderTable();
    });
  });

  function sortCurrentData() {
    currentMachines.sort((a, b) => {
      let valA = a[sortColumn];
      let valB = b[sortColumn];

      if (typeof valA === 'string') {
        valA = valA.toLowerCase();
        valB = valB.toLowerCase();
      }

      if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  // 5. Render Table Rows
  function renderTable() {
    tableBody.innerHTML = '';

    if (currentMachines.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="10" style="text-align:center; padding: 2rem; color: var(--text-dim);">No equipment found matching criteria.</td></tr>`;
      showingCount.textContent = `Showing 0 of ${machines.length} machines`;
      return;
    }

    currentMachines.forEach(m => {
      const tr = document.createElement('tr');
      const priorityClass = m.priority.toLowerCase();

      tr.innerHTML = `
        <td class="machine-id-cell">${m.id}</td>
        <td>${m.type}</td>
        <td>${m.age_years} yrs</td>
        <td class="val-mono"><strong>${m.total_downtime.toFixed(2)}h</strong></td>
        <td>${m.service_count}</td>
        <td>${m.alarm_count}</td>
        <td class="val-mono ${m.max_vibration > 4.40 ? 'stat-highlight' : ''}">${m.max_vibration.toFixed(2)} mm/s</td>
        <td class="val-mono ${m.max_temp > 78.0 ? 'stat-highlight' : ''}">${m.max_temp.toFixed(1)} °C</td>
        <td><span class="badge-priority ${priorityClass}">${m.priority}</span></td>
        <td><button class="action-btn-sm" data-id="${m.id}">Inspect</button></td>
      `;

      // Click row to inspect
      tr.addEventListener('click', (e) => {
        openModal(m.id);
      });

      tableBody.appendChild(tr);
    });

    showingCount.textContent = `Showing ${currentMachines.length} of ${machines.length} machines`;
  }

  // 6. Modal Drawer Logic
  function openModal(machineId) {
    const machine = machines.find(m => m.id === machineId);
    if (!machine) return;

    modalMachineId.textContent = machine.id;
    modalTypeBadge.textContent = `${machine.type} • Age ${machine.age_years}y`;
    
    modalPriority.textContent = machine.priority;
    modalPriority.className = `highlight-${machine.priority.toLowerCase() === 'high' ? 'red' : 'cyan'}`;

    modalDowntime.textContent = `${machine.total_downtime.toFixed(2)} hrs (${machine.service_count} events)`;
    modalVib.textContent = `${machine.max_vibration.toFixed(2)} mm/s (Avg: ${machine.avg_vibration.toFixed(2)})`;
    modalTemp.textContent = `${machine.max_temp.toFixed(1)} °C (Avg: ${machine.avg_temp.toFixed(1)})`;
    modalAlarms.textContent = `${machine.alarm_count} alarms (${machine.sensor_warnings} warning hrs)`;

    // Services list
    modalServices.innerHTML = '';
    if (machine.services && machine.services.length > 0) {
      machine.services.forEach(s => {
        const entry = document.createElement('div');
        entry.className = 'modal-service-entry';
        entry.innerHTML = `
          <span><strong>${s.date}</strong> &bull; ${s.action}</span>
          <span class="val-mono" style="color: var(--accent-rose); font-weight: bold;">${s.downtime.toFixed(2)}h downtime</span>
        `;
        modalServices.appendChild(entry);
      });
    } else {
      modalServices.innerHTML = `<span style="font-size: 0.82rem; color: var(--text-dim);">No service interventions recorded in Q1 2026.</span>`;
    }

    // Dynamic engineering recommendations
    let recText = "Regular condition monitoring and periodic vibration check.";
    if (machine.id === 'MCH-004') {
      recText = "🚨 CRITICAL OVERHAUL: Plant-worst 21.5h downtime and 17.20 mm/s vibration. Overhaul main hydraulic pump, relief valve seats, and structural dampening pads.";
    } else if (machine.id === 'MCH-014') {
      recText = "🚨 THERMAL PRIORITY: High downtime (19.15h) and thermal runaway (85.6°C). Clean intercooler core, replace compressor discharge reed valves.";
    } else if (machine.id === 'MCH-015') {
      recText = "🚨 SPINDLE OVERHAUL: 16.69h downtime and 10.3 mm/s vibration. Conduct laser spindle alignment and rebuild spindle bearings.";
    } else if (machine.id === 'MCH-022') {
      recText = "⚠️ INFANT MORTALITY AUDIT: 3 services on 1-year asset. Re-level machine bed, inspect foundation bolting, file manufacturer warranty claim.";
    } else if (machine.id === 'MCH-016') {
      recText = "⚠️ LUBRICATION RETROFIT: Chronic repeat failures (Lube → Motor → Bearing). Install automated grease lubricator to stop dry-friction bearing seizure.";
    } else if (machine.priority === 'High') {
      recText = "HIGH PRIORITY: Equipment shows elevated downtime and cumulative warning hours. Conduct detailed non-destructive testing (NDT) within 7 days.";
    } else if (machine.priority === 'Medium') {
      recText = "MEDIUM PRIORITY: Moderate alarm frequency. Schedule preventative service at next planned shift changeover.";
    }

    modalRec.textContent = recText;

    if (modal.showModal) {
      modal.showModal();
    } else {
      modal.setAttribute('open', '');
    }
  }

  modalClose.addEventListener('click', () => {
    if (modal.close) {
      modal.close();
    } else {
      modal.removeAttribute('open');
    }
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.close();
    }
  });
});
