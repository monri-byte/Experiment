import React, { useState } from 'react';
import AddExperiment from './components/AddExperiment';
import Filter from './components/Filter';
import CountExp from './components/CountExp';
import './App.css';

function App() {
  const [experiments, setExperiments] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('Все');
  
  const addExperiment = (newExperiment) => {
    const updatedExperiments = [newExperiment];
    for (let i = 0; i < experiments.length; i++) {
      updatedExperiments.push(experiments[i]);
    }
    setExperiments(updatedExperiments);
  };
  
  const deleteExperiment = (id) => {
    const updatedExperiments = [];
    for (let i = 0; i < experiments.length; i++) {
      if (experiments[i].id !== id) {
        updatedExperiments.push(experiments[i]);
      }
    }
    setExperiments(updatedExperiments);
  };
  
  const getFilteredExperiments = () => {
    if (selectedStatus === 'Все') {
      return experiments;
    }
    const filtered = [];
    for (let i = 0; i < experiments.length; i++) {
      if (experiments[i].status === selectedStatus) {
        filtered.push(experiments[i]);
      }
    }
    return filtered;
  };
  
  const getStatusClass = (status) => {
    if (status === 'План') return 'status-plan';
    if (status === 'В процессе') return 'status-progress';
    if (status === 'Завершён') return 'status-completed';
    return '';
  };
  
  const filteredExperiments = getFilteredExperiments();
  
  return (
    <div className="App">
      <h1>Учёт экспериментов</h1>
      <CountExp experiments={experiments} />
      <AddExperiment onAddExperiment={addExperiment} />
      <Filter 
        selectedStatus={selectedStatus} 
        onStatusChange={setSelectedStatus}
      />
      
      <div className="experiments-section">
        <h2>Список экспериментов</h2>
        {filteredExperiments.length === 0 ? (
          <p className="empty-message">Нет добавленных экспериментов</p>
        ) : (
          <div className="experiments-grid">
            {filteredExperiments.map((experiment) => (
              <div key={experiment.id} className="experiment-card">
                <button 
                  className="delete-btn"
                  onClick={() => deleteExperiment(experiment.id)}
                >
                  Удалить
                </button>
                <div className="experiment-name">{experiment.name}</div>
                <div className={`experiment-status ${getStatusClass(experiment.status)}`}>
                  {experiment.status}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;