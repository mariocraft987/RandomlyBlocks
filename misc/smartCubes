/*
@Under MIT LICENSE (C)
@Version 0.5.0
@Created by Mariocraft987 <https://scratch.mit.edu/users/mariocraft987>
*/

(async function (Scratch) {
  const array = [];
  
  class SmartCubes {
    getInfo() {
      return {
        id: 'thesmartestcodingcubes45',
        name: 'Smart Cubes',
        blocks: [
          {
            opcode: "runProject",
            blockType: Scratch.BlockType.COMMAND,
            text: "Wave green Flag",
            disableMonitor: true,
          },
          {
            opcode: "comment",
            blockType: Scratch.BlockType.COMMAND,
            text: "//[micro]",
            disableMonitor: true,
            arguments: {
              micro: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Comment"
              }
            }
          },
          {
            opcode: "longComment",
            blockType: Scratch.BlockType.CONDITIONAL,
            text: "/*",
            disableMonitor: true,
          },
          { blockType: Scratch.BlockType.LABEL, text: "Array Blocks" },
          {
            opcode: "addArray",
            blockType: Scratch.BlockType.COMMAND,
            text: "Add [STR] to Array",
            disableMonitor: true,
            arguments: {
              STR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Apple"
              }
            }
          },
          {
            opcode: "removeFromArray",
            blockType: Scratch.BlockType.COMMAND,
            text: "Remove [STR] from Array",
            disableMonitor: true,
            arguments: {
              STR: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0"
              }
            }
          },
          {
            opcode: "removeArray",
            blockType: Scratch.BlockType.COMMAND,
            text: "Remove the last item from Array",
            disableMonitor: true,
          },
          {
            opcode: "clearArray",
            blockType: Scratch.BlockType.COMMAND,
            text: "Clear Array",
            disableMonitor: true,
          },
          {
            opcode: "array",
            blockType: Scratch.BlockType.REPORTER,
            text: "Return Array",
            disableMonitor: true,
          },
          { blockType: Scratch.BlockType.LABEL, text: "AI Blocks" },
          {
            opcode: 'AIbot',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Ask CubeAI [STR]',
            disableMonitor: true,
            arguments: {
              STR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Hello!"
              },
            }
          },
          {
            opcode: "AInow",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "Is CubeAI available?",
            disableMonitor: true,
          },
          {
            opcode: "AIdecide",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "True or false",
            disableMonitor: true,
          },
          {
            opcode: "AIcolor",
            blockType: Scratch.BlockType.REPORTER,
            text: "Random color hex",
            disableMonitor: true,
          },
          { blockType: Scratch.BlockType.LABEL, text: "Danger Zone" },
          {
            opcode: "localSet",
            blockType: Scratch.BlockType.COMMAND,
            text: "Localstorage: set [STR] to [value]",
            disableMonitor: true,
            arguments: {
              STR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "name"
              },
              value: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Ted"
              }
            }
          },
          {
            opcode: "localGet",
            blockType: Scratch.BlockType.REPORTER,
            text: "Localstorage: get [STR]",
            disableMonitor: true,
            arguments: {
              STR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "name"
              }
            }
          },
            
        ],
      };
    }
    
    runProject(args) {
      Scratch.vm.runtime.greenFlag();
    }
    comment(args) {
        // Comment 
        // args.micro
    }
    longComment(args) {
        /* Long Comment 
        args.micro */
    }
    clearArray(args) {
      while (array.length > 0) {
        array.pop();
      }
    }

    removeArray(args) {
      array.pop();
    }

    removeFromArray(args) {
        let value = args.STR
        array.splice(value, value);
    }
    
    addArray(args) {
      array.push(args.STR);
    }
    
    array(args) {
        return array
    }
    
    AInow(args) {
        return true
    }
    
    AIdecide(args) {
      let number = Math.floor(Math.random() * 2);
      if (number === 1) {
        return true
      }else{
        return false
      }
    }
    
    AIcolor(args) {
      return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);})
    }
    
    localSet(args) {
      let string = args.STR
      let value = args.value
      localStorage.setItem(string, value)
    }
    localGet(args) {
      let value = localStorage.getItem(args.STR);
      if (!value) {
        return ""
      }else{
        return value
      }
    }
        AIbot(args) {
      const response = args.STR
      const q = response.toLowerCase()

      if (q.includes("hello"||"hai"||"hi"||"helo")) {return "Hello! I am CubeAI, ask me something and i'll reply back😀"}
      else if (q.includes("suck"||"loser"||"mean"||"dumb")) {return "Why are you saying that?😔"}
      else if (q.includes("thx"||"thank"||"ty"||"appreciate")) {return "Your very much welcome😊"}
      else if (q.includes("dog say")) {return "woof bark bark!!🐶"}
      else if (q.includes("cat say")) {return "meow meow😺"}
      else if (q.includes("fuck"||"shit"||"bitch"||"crap")) {return "Please no swearing👮"}
      else if (q.includes("alexa"||"siri"||"copilot")) {return "I am aware of those other AIs"}
      else if (q.includes("lol"||"xd"||"rofl"||"lmao"||"hah")) {return "Loll😆"}
      else if (q.includes("rick astley"||"rickroll")) {return "Never gonna give you up!!🕺"}
      else if (q.includes("scratch")) {return "Scratch is a visual block based coding created by MIT😸"}
      else if (q.includes("turbowarp")) {return "Turbowarp is a scratch mod that converts to javascript to be speedy🤯"}
      else if (q.includes("penguinmod")) {return "PenguinMod is a mod of turbowarp with many more features.🐧"}
      else if (q.includes("snail ide"||"snail-ide")) {return "Snail-IDE is a mod of PenguinMod🐌"}
      else if (q.includes("nerd"||"four eye")) {return "I'm technicly a nerd🤓"}
      else if (q.includes("christmas"||"halloween"||"valentines")) {return "That's a hollidays"}

      else {return "Sorry, I have no response to ''"+response+"''."}
    }
    
  }
  Scratch.extensions.register(new SmartCubes())
})(Scratch);
