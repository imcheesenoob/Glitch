const letterMap = {
  'q': 'q̴̧̭̥̙͉̓͌͐̾̈́̇͊̚͜͝ͅ',
  'w': 'w̷̡̻͍̼͖̜͕̣̼͒',
  'e': 'ë̶̫͈̱͖̣̿̂',
  'r': 'ŗ̴̧͕͓̐̓͐',
  't': 't̷̰͖̞͙̣̘̗̲͚̓͊͂̐̽͊̎',
  'y': 'ỵ̴̘̤͐̀͋̓̈́̑͂́̅',
  'u': 'ú̷͓̌̑̒͝͝i',
  'i': 'ĭ̸͚͔̦̫͓̏',
  'o': 'ó̴̢̜̮̞̼̗̱',
  'p': 'p̷̛̪̘̈́̂̀',
  'a': 'ą̸̳̳͇͇̾̉̓͐͊̃́̒͝͝',
  's': 's̴͓̱͊̎͆͋͛̒͘',
  'd': 'd̶̛̯̞̗̱̟̪̪͉͐̌̿̐̌̏̓̑',
  'f': 'f̸̨͉̙̺̦̬͎̾̓͗͌̓̕̕̚̚͝',
  'g': 'g̴̛͚͔̏̿́̀̔̎̒͠͝',
  'h': 'h̴͚͌',
  'j': 'j̷̛̜̩͓͖̖̮͈̮͍́͑̅̔͛̈',
  'k': 'ķ̸̛̬̮͛͂́̄̍͑́͘',
  'l': 'l̶̨͍̭̐͂̈́̔̌̄̚͜ͅ',
  'z': 'z̵̯̜̟͎͗͜ͅ',
  'x': 'x̴̡̡̛͉͕̳̂̉̊͒̑',
  'c': 'ć̴͓̞̘͇̇͋̊͋',
  'v': 'v̸͕̮̝͕̤͖̥̠̘̬͒̓̄͌',
  'b': 'b̶̼̞̘͉̙̗̽͐͝ͅ',
  'n': 'n̵̞̺̤̟̊̔̑̊̏͒͜',
  'm': 'm̷͇͛̓̊͝'
};

function transformText(text) {
  let transformedText = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (letterMap.hasOwnProperty(char.toLowerCase())) {
      transformedText += letterMap[char.toLowerCase()];
    } else {
      transformedText += char;
    }
  }
  return transformedText;
}

document.querySelectorAll('*:not(script)').forEach(node => {
  if (node.nodeType === Node.TEXT_NODE) {
    node.textContent = transformText(node.textContent);
  }
});
