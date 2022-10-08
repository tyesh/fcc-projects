import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bgImage from '../resources/bg/calculatorbg.jpg';

const Calculator = () => {
  const [history, setHistory] = useState(['0']);

  useEffect(() => {
    console.log(history);
  }, [history]);

  const inputHandler = (input) => {
    if (typeof input === 'number') {
      setHistory((current) => {
        let aux = [...current];
        const length = aux.length;
        if (aux[length - 1].length < 13) {
          switch (aux[length - 1]) {
            case '0':
              aux[aux.length - 1] = input.toString();
              break;
            case '+':
            case '-':
            case '*':
            case '/':
              aux.push(input);
              break;
            default:
              aux[length - 1] = aux[length - 1] + input.toString();
              break;
          }
          return aux;
        } else {
          return ['MAX_CHARACTER_LIMIT'];
        }
      });
    } else {
      setHistory((current) => {
        let aux = [...current];
        const length = aux.length;
        if (Number.isInteger(parseInt(aux[length - 1]))) {
          if (length >= 3) {
            const operatorA = parseFloat(aux[length - 3]);
            const operatorB = parseFloat(aux[length - 1]);
            switch (aux[length - 2]) {
              case '+':
                aux = [(operatorA + operatorB).toString()];
                break;
              case '-':
                aux = [(operatorA - operatorB).toString()];
                break;
              case '*':
                aux = [(operatorA * operatorB).toString()];
                break;
              case '/':
                aux = [(operatorA / operatorB).toString()];
                break;
              default:
                break;
            }
          }
          return [...aux, input];
        } else {
          aux[length - 1] = input;
          return aux;
        }
      });
    }
  };

  const clearHandler = () => {
    setHistory(['0']);
  };

  return (
    <main
      style={{
        background: `url(${bgImage}) 50%/cover no-repeat`,
        minHeight: '100vh',
      }}
      id='calculator'
    >
      <Container>
        <Row
          className='justify-content-center align-items-center g-0'
          style={{
            minHeight: '100vh',
          }}
        >
          <Col className='text-center' xs={12}>
            <h1>FCC Calculator</h1>
            <p>
              A simple online calculator for FCC projects, based o the Windows
              calculator design.
            </p>
          </Col>
          <Col xs={12} md={6} className='cal-layout'>
            <div className='calculator'>
              <div className='current-operation'>{history.join(' ')}=</div>
              <div className='result-operation' id='display'>
                {Number.isInteger(parseInt(history[history.length - 1]))
                  ? history[history.length - 1]
                  : history[history.length - 2]}
              </div>
              <div className='keys-containter'>
                <div className='key-ac' id='clear' onClick={clearHandler}>
                  AC
                </div>
                <div
                  className='key-operation'
                  id='divide'
                  onClick={() => inputHandler('/')}
                >
                  /
                </div>
                <div
                  className='key-operation'
                  id='multiply'
                  onClick={() => inputHandler('*')}
                >
                  *
                </div>

                <div
                  className='key-number'
                  id='seven'
                  onClick={() => inputHandler(7)}
                >
                  7
                </div>
                <div
                  className='key-number'
                  id='eight'
                  onClick={() => inputHandler(8)}
                >
                  8
                </div>
                <div
                  className='key-number'
                  id='nine'
                  onClick={() => inputHandler(9)}
                >
                  9
                </div>
                <div
                  className='key-operation'
                  id='subtract'
                  onClick={() => inputHandler('-')}
                >
                  -
                </div>
                <div
                  className='key-number'
                  id='four'
                  onClick={() => inputHandler(4)}
                >
                  4
                </div>
                <div
                  className='key-number'
                  id='five'
                  onClick={() => inputHandler(5)}
                >
                  5
                </div>
                <div
                  className='key-number'
                  id='six'
                  onClick={() => inputHandler(6)}
                >
                  6
                </div>
                <div
                  className='key-operation'
                  id='add'
                  onClick={() => inputHandler('+')}
                >
                  +
                </div>
                <div
                  className='key-number'
                  id='one'
                  onClick={() => inputHandler(1)}
                >
                  1
                </div>
                <div
                  className='key-number'
                  id='two'
                  onClick={() => inputHandler(2)}
                >
                  2
                </div>
                <div
                  className='key-number'
                  id='three'
                  onClick={() => inputHandler(3)}
                >
                  3
                </div>
                <div
                  className='key-equal'
                  id='equals'
                  onClick={() => inputHandler(9)}
                >
                  =
                </div>
                <div
                  className='key-0'
                  id='zero'
                  onClick={() => inputHandler(0)}
                >
                  0
                </div>
                <div className='key-operation' id='decimal'>
                  ,
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Calculator;
