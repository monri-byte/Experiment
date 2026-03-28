import React, { useState } from 'react';
import './AddExperiment.css';

function AddExperiment({ onAddExperiment }) {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('План');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      const newExperiment = {
        id: Date.now(),
        name: name.trim(),
        status: status
      };
      onAddExperiment(newExperiment);
      setName('');
      setStatus('План');
    }
  };
  
  return (
    <div className="add-experiment">
      <h2>Добавить эксперимент</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Название эксперимента</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите название эксперимента"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="status">Статус</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="План">План</option>
            <option value="В процессе">В процессе</option>
            <option value="Завершён">Завершён</option>
          </select>
        </div>
        
        <button type="submit" className="submit-btn">
          Добавить эксперимент
        </button>
      </form>
    </div>
  );
}

export default AddExperiment;