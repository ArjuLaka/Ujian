import React from 'react';
import { all, create } from 'mathjs';

const config = {
  number: 'number'
};
const math = create(all, config);

function MtkpComp() {
  const regExp = /\(([^)]+)\)/;
  const [expression, setExpression] = React.useState('');
  const [result1, setResult1] = React.useState([]);
  const [result2, setResult2] = React.useState([]);
  const [[y, tetha], setResult3] = React.useState([])
  
  const handleExpressionChange = (e) => {
    setExpression(e.target.value);
  };
  
  const calculateDerivative = () => {
    try {
      const derivative = math.derivative(expression, 'x').toString();
      setResult1([expression, derivative])
      const pembagi = derivative.split("*")[0].trim();
      setResult2([derivative + "= 0", `(${derivative})/${pembagi} = 0/${pembagi}`])
      if(derivative.includes("cos")) {
        setResult2(prev => [...prev, derivative.slice(pembagi.length + 3) + "= cos 90"])
        setResult3([regExp.exec(derivative)[1], 0])
      } else if(derivative.includes("sin")) {
        setResult2(prev => [...prev, derivative.slice(pembagi.length + 3) + "= sin 0"])
        setResult3([regExp.exec(derivative)[1], 0])
        }
    } catch (error) {
      setResult1('Invalid expression');
    }
  };
  return (
    <React.Fragment>
      <div>
        <h1>Kalkulator Turunan</h1>
        <input
          type="text"
          id="expression"
          value={expression}
          onChange={handleExpressionChange}
          required
        />
        <button onClick={calculateDerivative}>Hitung</button>
        <div>
          <div>{result1}</div>
          <div>{result2}</div>
          <div>{y}</div>
          <div>{tetha}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MtkpComp;