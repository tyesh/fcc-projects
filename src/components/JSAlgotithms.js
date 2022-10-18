import React from 'react';
import { marked } from 'marked';
import { Col, Container, Row } from 'react-bootstrap';
import BreadCrumbComponent from './BreadCrumbComponent';
import prismjs from 'prismjs';

const palindrome = `
\`\`\`
// Solution for Palindrome Checker
function palindrome(str) {
    const cleanStr = str.replace(/_|\\W*/g, "").toLowerCase();
    return cleanStr.split("").join("") === cleanStr.split("").reverse().join("");
}
\`\`\`
`;

const roman = `
\`\`\`
// Solution for Roman Numeral Converter
function convertToRoman(num) {
    const roman = {
      1     : 'I',
      5     : 'V',
      10    : 'X',
      50    : 'L',
      100   : 'C',
      500   : 'D',
      1000  : 'M',
    }
    let res = "";
    const str  = num.toString().split("");
    const l = str.length;
    let zero = '';
    for(let i = 0; i < str.length - 1; i++) {
      zero += '0';
    }
    const s = Number('1' + zero);
    const f = Number('5' + zero);
    let [n] = str;
    n = Number(n);
    if(n < 4) {
      for(let i = 0; i < n; i++) {
        res += roman[s];
      }
    }
    if(n === 4) {
      res = roman[s] + roman[f];
    }
    if(n === 5) {
      res = roman[f];
    }
    if(5 < n && n < 9) {
      res = roman[f];
      for(let i = 5; i < n; i++) {
        res += roman[s];
      }
    }
    if(n === 9) {
      res = roman[s] + roman[Number(s + '0')];
    }
    const diff = num - n * s;
    if(diff > 0) {
      res += convertToRoman(diff);
    }
  
    return res;
}
\`\`\`
`;

const caesar = `
\`\`\`
// Solution for Caesars Cipher
function rot13(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
    const size = alphabet.length;
    const res = str.split("").map(letter => {
      let index = alphabet.indexOf(letter);
      if(index >= 0) {
          index = index + 13 >= size ? index + 13 - size : index + 13;
          return alphabet[index];
      }
      return letter
    }).join("");
    return res;
}
\`\`\`
`;

const telehone = `
\`\`\`
// Solution for Telephone Number Validator
function telephoneCheck(str) {
    const regex = (/^\\d+-\\d+-\\d+|^\\(\\d+\\)\\d+-\\d+|^\\(\\d+\\)\\s\\d+-\\d+|\\d{3,}\\s\\d+\\s\\d+|^\\d{10,10}$|^1\\s?(\\(\\d+\\))?\\s?\\d+-\\d+|^1\\s\\d+\\s?\\d+-\\d+/).test(str);
    return regex;
}
\`\`\`
`;

const cash = `
\`\`\`
// Solution for Cash Register
function checkCashRegister(price, cash, cid) {
    const cidAux = [...cid];
    const currencies = {
      100   : cid[8],
      20    : cid[7],
      10    : cid[6],
      5     : cid[5],
      1     : cid[4],
      0.25  : cid[3],
      0.1   : cid[2],
      0.05  : cid[1],
      0.01  : cid[0]    
    };
    cid = cid.reverse();
    let changeVal = cash - price;
    let change = [];
    Object.keys(currencies).sort((a, b) => b - a).forEach((c, index) => {
      const [name, value] = currencies[c];
      if(c <= changeVal) {
        let aux = changeVal >= value ? value : changeVal;
        if(aux > 0) {
          if(aux % c === 0) {
            cid[index] = [name, aux];
            changeVal = changeVal - value < 0 ? 0 : Number((changeVal - value).toFixed(2));
          } else {
            aux = c * Math.trunc(aux / c);
            cid[index] = [name, cid[index][1] - aux];
            changeVal = changeVal - aux < 0 ? 0 : Number((changeVal - aux).toFixed(2));
          }
          change = [...change, [name, aux]];
        }
      }
    });
    if(changeVal === 0) {
      if(cid.every(currency => currency[1]  === 0)) {
        return {status: "CLOSED", change: cidAux};
      }
      return {status: "OPEN", change}
    }
    return {status: "INSUFFICIENT_FUNDS", change: []};
}  
\`\`\`
`;

const JSAlgotithms = () => {
  marked.setOptions({
    breaks: true,
    highlight: (code) =>
      prismjs.highlight(code, prismjs.languages.javascript, 'javascript'),
  });

  return (
    <main>
      <Container>
        <Row>
          <Col xs={12} id='title'>
            <BreadCrumbComponent
              pageTitle={'JavaScript Algorithms and Data Structures'}
              activeColor={'#000'}
            />
            <h1>JavaScript Algorithms and Data Structures</h1>
            <h2>Algorithms</h2>
            <ul>
              <li>
                <a href='#palindrome'>Palindrome Checker</a>
              </li>
              <li>
                <a href='#roman'>Roman Numeral Converter</a>
              </li>
              <li>
                <a href='#caesar'>Caesars Cipher</a>
              </li>
              <li>
                <a href='#telephone'>Telephone Number Validator</a>
              </li>
              <li>
                <a href='#cash'>Cash Register</a>
              </li>
            </ul>
            <h2 id='palindrome'>Palindrome Checker</h2>
            <p>
              Return true if the given string is a palindrome. Otherwise, return
              false.
            </p>
            <p>
              <b>Note: You'll need to remove all non-alphanumeric characters</b>{' '}
              (punctuation, spaces and symbols) and turn everything into the
              same case (lower or upper case) in order to check for palindromes.
            </p>
            <p>
              A <i>palindrome</i> is a word or sentence that's spelled the same
              way both forward and backward, ignoring punctuation, case, and
              spacing.
            </p>
            <p>
              We'll pass strings with varying formats, such as racecar, RaceCar,
              and race CAR among others.
            </p>
            <p>
              We'll also pass strings with special symbols, such as 2A3*3a2, 2A3
              3a2, and 2_A3*3#A2.
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: marked(palindrome),
              }}
              className='markdown-pre'
            />
            <a href='#title'>Back to top</a>
            <h2 id='roman'>Roman Numeral Converter</h2>
            <p>Convert the given number into a roman numeral.</p>
            <p>All roman numerals answers should be provided in upper-case.</p>
            <div
              dangerouslySetInnerHTML={{
                __html: marked(roman),
              }}
              className='markdown-pre'
            />
            <a href='#title'>Back to top</a>
            <h2 ud='caesar'>Caesars Cipher</h2>
            <p>
              One of the simplest and most widely known ciphers is a Caesar
              cipher, also known as a shift cipher. In a shift cipher the
              meanings of the letters are shifted by some set amount.
            </p>
            <p>
              A common modern use is the ROT13 cipher, where the values of the
              letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
            </p>
            <p>
              Write a function which takes a ROT13 encoded string as input and
              returns a decoded string.
            </p>
            <p>
              All letters will be uppercase. Do not transform any non-alphabetic
              character (i.e. spaces, punctuation), but do pass them on.
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: marked(caesar),
              }}
              className='markdown-pre'
            />
            <a href='#title'>Back to top</a>
            <h2 id='telephone'>Telephone Number Validator</h2>
            <p>
              Return true if the passed string looks like a valid US phone
              number.
            </p>
            <p>
              The user may fill out the form field any way they choose as long
              as it has the format of a valid US number. The following are
              examples of valid formats for US numbers (refer to the tests below
              for other variants):
            </p>
            <ul>
              <li>555-555-5555</li>
              <li>(555)555-5555</li>
              <li>(555) 555-5555</li>
              <li>555 555 5555</li>
              <li>5555555555</li>
              <li>1 555 555 5555</li>
            </ul>
            <p>
              For this challenge you will be presented with a string such as
              800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or
              reject the US phone number based on any combination of the formats
              provided above. The area code is required. If the country code is
              provided, you must confirm that the country code is 1. Return true
              if the string is a valid US phone number; otherwise return false.
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: marked(telehone),
              }}
              className='markdown-pre'
            />
            <a href='#title'>Back to top</a>
            <h2 id='cash'>Cash Register</h2>
            <p>
              Design a cash register drawer function checkCashRegister() that
              accepts purchase price as the first argument (price), payment as
              the second argument (cash), and cash-in-drawer (cid) as the third
              argument.
            </p>
            <p>cid is a 2D array listing available currency.</p>
            <p>
              The checkCashRegister() function should always return an object
              with a status key and a change key.
            </p>
            <p>
              Return {'{status: "INSUFFICIENT_FUNDS", change: []}'} if
              cash-in-drawer is less than the change due, or if you cannot
              return the exact change.
            </p>
            <p>
              Return {'{status: "CLOSED", change: [...]}'} with cash-in-drawer
              as the value for the key change if it is equal to the change due.
            </p>
            <p>
              Otherwise, return {'{status: "OPEN", change: [...]}'}, with the
              change due in coins and bills, sorted in highest to lowest order,
              as the value of the change key.
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: marked(cash),
              }}
              className='markdown-pre'
            />
            <a href='#title'>Back to top</a>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default JSAlgotithms;
