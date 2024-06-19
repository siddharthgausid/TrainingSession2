import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = (value) => {
    setCount(count + value);
  };

  const handleDecrement = (value) => {
    setCount(count - value);
  };

  return (
    <div className="Counter">
      <header className="Counter-header">
        <h1>Count is: {count}</h1>
        <div>
          <button onClick={() => handleIncrement(1)}>+1</button>
          <button onClick={() => handleIncrement(5)}>+5</button>
          <button onClick={() => handleIncrement(10)}>+10</button>
          <button onClick={() => handleIncrement(15)}>+15</button>
          <button onClick={() => handleIncrement(20)}>+20</button>
        </div>
        <div>
          <button onClick={() => handleDecrement(1)}>-1</button>
          <button onClick={() => handleDecrement(5)}>-5</button>
          <button onClick={() => handleDecrement(10)}>-10</button>
          <button onClick={() => handleDecrement(15)}>-15</button>
          <button onClick={() => handleDecrement(20)}>-20</button>
        </div>
      </header>
    </div>
  );
}

export default Counter;
