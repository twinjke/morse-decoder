const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let newArr = []
    for (let i = 0; i < expr.length; i = i + 10) {
        let char = expr.substr(i, 10)
        let morzeChar = ''
        for (let i = 0; i < char.length; i = i+2) {
            if (char.slice(i, i+2) === '10') {
                morzeChar = morzeChar + '.'
            } else if (char.slice(i, i+2) === '11') {
                morzeChar = morzeChar + '-'
            } else if (char.slice(i, i+2) === '**') {
                newArr.push(' ')
                break
            }
        }
        newArr.push(MORSE_TABLE[morzeChar])
    }
    return newArr.join('')
}

module.exports = {
    decode
}