//
//   This will be uncompleted because its so dumb and simple that pm wouldn't allow it
//

(async function(Scratch) {
const variables = {};

class Python {
  getInfo() {
    return {
      id: 'thepythonpm',
      name: 'Python',
      blocks: [
        {
          opcode: 'print',
          blockType: Scratch.BlockType.COMMAND,
          text: 'print [TEXT]',
          disableMonitor: true,
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hello, World!'
            },
          }
        },
        {
          opcode: 'input',
          blockType: Scratch.BlockType.COMMAND,
          text: '[VAR] = input [TEXT]',
          disableMonitor: true,
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'How many hearts will you need?'
            },
            VAR: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'health'
            },
          }
        },
        {
          opcode: 'getinput',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get last input [VAR]',
          disableMonitor: true,
          arguments: {
            VAR: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'health'
            },
          }
        },
      ],
      menus: {
        FORMAT_MENU: {
          acceptReporters: true,
          items: ['uppercase', 'lowercase']
        }
      }
    };
  }
  print(args) {
    alert(args.TEXT)
  }
  input(args) {
    variables[args.VAR] = prompt(args.TEXT, "")
  }
  getinput(args) {
    if (!args.VAR) {
      return "null"
    }else{
    return variables[args.VAR];
    }
  }
}
Scratch.extensions.register(new Python());
})(Scratch);
