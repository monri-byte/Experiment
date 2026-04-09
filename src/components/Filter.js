import React from 'react';
import './Filter.css';

function Filter({ selectedStatus, onStatusChange }) {
  const statuses = ['Все', 'План', 'В процессе', 'Завершён'];
  
  return (
    <div className="filter-section">
      <label className="filter-label">Фильтр по статусу:</label>
      <select 
        className="filter-select"
        value={selectedStatus}
        onChange={(e) => onStatusChange(e.target.value)}
      >
        {statuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;