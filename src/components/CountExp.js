import React from 'react';
import './CountExp.css';

function CountExp({ experiments }) {
  let completedCount = 0;
  for (let i = 0; i < experiments.length; i++) {
    if (experiments[i].status === 'Завершён') {
      completedCount = completedCount + 1;
    }
  }
  return (
    <div className="count-exp-section">
      <div className="count-card">
        <div className="count-label">Завершённых экспериментов</div>
        <div className="count-number">{completedCount}</div>
      </div>
    </div>
  );
}

export default CountExp;