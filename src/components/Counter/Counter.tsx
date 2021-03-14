import React, { useState } from 'react';

function Counter(): JSX.Element {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const onClickAdd = () => {
    setCounterValue(counterValue + inputValue);
  };

  const onClickSubtract = () => {
    setCounterValue(counterValue - inputValue);
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(parseInt(value));
  };

  return (
    <div>
      <h3 data-testid="header">My Counter</h3>
      <h2
        data-testid="counter"
        style={{
          color:
            counterValue <= -100
              ? 'red'
              : counterValue >= 100
              ? 'green'
              : 'black',
        }}
      >
        {counterValue}
      </h2>
      <button data-testid="subtract-button" onClick={onClickSubtract}>
        -
      </button>
      <input
        type="number"
        data-testid="input"
        value={inputValue}
        onChange={onChangeInput}
      />
      <button data-testid="add-button" onClick={onClickAdd}>
        +
      </button>
    </div>
  );
}

export default Counter;
