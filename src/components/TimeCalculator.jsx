import React, { useState } from 'react';
import { addTime, subtractTime } from '../components/computation';
import { FaArrowLeftLong } from 'react-icons/fa6';

function TimeCalculator() {
  // Состояние для хранения времени 1, времени 2 и результата
  const [time1, setTime1] = useState('');
  const [time2, setTime2] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');

  // Функция для обновления строки ввода
  const updateInput = () => {
    // Объединяем временные значения с операцией, если она есть
    let input = operation ? `${time1} ${operation} ${time2}` : time1;
    // Если есть результат, добавляем его к строке ввода
    if (result) {
      input += ` = ${result}`;
    }
    return input;
  };

  // Функция для обработки ввода времени
  const handleTimeInput = (value) => {
    // Если операция еще не выбрана, вводим в time1
    if (!operation) {
      setTime1(time1 + value);
    } else {
      // Если операция уже выбрана, вводим в time2
      setTime2(time2 + value);
    }
  };

  // Функция для обработки выбора операции (сложение или вычитание)
  const handleOperation = (value) => {
    setOperation(value);
  };

  // Функция для вычисления результата
  const calculateResult = () => {
    let finalResult;
    if (operation === '+') {
      finalResult = addTime(time1, time2);
    } else if (operation === '-') {
      finalResult = subtractTime(time1, time2);
    }
    setResult(finalResult);
  };
  // Функция для очистки последнего значения
  const clearLast = () => {
    if (!result && operation && time2.length > 0) {
      const str = time2.slice(0, -1);
      setTime2(str);
    }
    if (!result && !operation && time1.length > 0) {
      const str = time1.slice(0, -1);
      setTime1(str);
    }
    if (!result && operation && !time2.length && time1.length > 0) {
      setOperation('');
    }
  };

  // Функция для очистки всех значений
  const clearAll = () => {
    setTime1('');
    setTime2('');
    setOperation('');
    setResult('');
  };

  return (
    <div className="timeCalculator">
      <p>Julia time calculator</p>
      <input type="text" value={updateInput()} readOnly />
      <div className="timeButtons">
        <button className="numberBtn" onClick={() => handleTimeInput('1')}>
          1
        </button>
        <button className="numberBtn" onClick={() => handleTimeInput('2')}>
          2
        </button>
        <button className="numberBtn" onClick={() => handleTimeInput('3')}>
          3
        </button>
        <button className="numberBtn" onClick={() => handleTimeInput('4')}>
          4
        </button>
        <button className="numberBtn" onClick={() => handleTimeInput('5')}>
          5
        </button>
        <button className="numberBtn" onClick={() => handleTimeInput('6')}>
          6
        </button>
        <button className="numberBtn" onClick={() => handleTimeInput('7')}>
          7
        </button>
        <button className="numberBtn" onClick={() => handleTimeInput('8')}>
          8
        </button>
        <button className="numberBtn" onClick={() => handleTimeInput('9')}>
          9
        </button>
        <button className="numberBtn" onClick={() => handleTimeInput('0')}>
          0
        </button>
        <button className="numberBtn" onClick={() => handleTimeInput('.')}>
          .
        </button>
      </div>
      <div className="footerBtn">
        <button onClick={() => handleOperation('+')}>+</button>
        <button onClick={() => handleOperation('-')}>-</button>
        <button onClick={calculateResult}>=</button>
        <div className="footerBtnClear">
          <button id="clearBtn" onClick={clearAll}>
            Clear
          </button>
          <button onClick={clearLast}>
            <FaArrowLeftLong className="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TimeCalculator;
