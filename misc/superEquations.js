/*
  Created by mariocraft987 <scratch.mit.edu/users/mariocraft987>
  Licensed under the @MIT License
  Version 0.1
*/

(async function(Scratch) {
  "use strict";
  class extraLogic {
    getInfo() {
     return {
      id: 'thesuperequationsidk',
      name: 'Extra Logic',
      color1: '#5f4bfa',
      blocks: [
          /*
          {
            opcode: 'normalEquation',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Sum of [one] [EQUATION] [two]',
            disableMonitor: true,
            arguments: {
              one: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "1"
              },
              two: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "2"
              },
              EQUATION: {
                type: Scratch.ArgumentType.STRING,
                menu: 'equationFields',
                defaultValue: 'plus'
              },
            }
          }, 
          */
          {
          opcode: 'backwardBoolean',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[STR] reversed',
          disableMonitor: true,
          arguments: {
            STR: {
                type: Scratch.ArgumentType.BOOLEAN,
                defaultValue: "true"
            },
          }
        },
        {
          opcode: 'includes',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[word] includes [STR]?',
          disableMonitor: true,
          arguments: {
            word: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "dog cat penguin"
            },
            STR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "penguin"
            },
          }
        },
        "---",
        {
          opcode: 'replace',
          blockType: Scratch.BlockType.REPORTER,
          text: 'replace [target] in [word] with [replacement]',
          disableMonitor: true,
          arguments: {
            word: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Everyone is nice!"
            },
            target: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "nice"
            },
            replacement: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "super cool"
            },
          }
        },
        {
          opcode: 'replaceAll',
          blockType: Scratch.BlockType.REPORTER,
          text: 'replace all [target] in [word] with [replacement]',
          disableMonitor: true,
          arguments: {
            word: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Everyone is nice!"
            },
            target: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "nice"
            },
            replacement: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "super cool"
            },
          }
        },
        {
          opcode: 'trim',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Trim [STR]',
          disableMonitor: true,
          arguments: {
            STR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: " Hello "
            },
          }
        },

      ],
            menus: {
        equationFields: [
          {text: '+', value: 'plus'},
          {text: '-', value: 'minus'},
          {text: '×', value: 'times'},
          {text: '÷', value: 'divide'},
          {text: '%', value: 'remainder'},
        ]
      }
    };
  }

  normalEquation(args) {
    let first = args.one
    let second = args.two
    if (args.EQUATION == "plus") {return (first + second)}
    if (args.EQUATION == "minus") {return (first - second)}
    if (args.EQUATION == "times") {return (first * second)}
    if (args.EQUATION == "divide") {return (first / second)}
    if (args.EQUATION == "remainder") {return (first % second)}
  }

  booleanEquation(args) {
    let first = args.one
    let second = args.two
    if (args.EQUATION == "and") {return (first && second)}
    if (args.EQUATION == "or") {return (first || second)}
  }

    booleanSecondEquation(args) {
    let first = args.one
    let second = args.two
    if (args.EQUATION == "equal1") {return (first == second)}
    if (args.EQUATION == "equal2") {return (first === second)}
    if (args.EQUATION == "equal0") {return (first != second)}
    if (args.EQUATION == "less") {return (first < second)}
    if (args.EQUATION == "more") {return (first > second)}
  }

  backwardBoolean(args) {
      return (args.STR == false);
  }
  getTitle(args) {
      return document.title;
  }
  getUrl(args) {
      return document.URL;
  }
  includes(args) {
      return args.word.includes(args.STR);
  }
  replace(args) {
      return args.word.replace(args.target, args.replacement)
  }
  replaceAll(args) {
      return args.word.replaceAll(args.target, args.replacement)
  }
  trim(args) {
      return args.STR.trim()
  }

}

Scratch.extensions.register(new extraLogic());
})(Scratch);
