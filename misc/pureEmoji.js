/*
   Just some joke blocks 😅
   Happy Aprils Fools!
   MIT Licensed
*/

(function (Scratch) {
  "use strict";
  class PureEmoji {
    getInfo() {
      return {
        id: 'purecomedylaffs',
        name: 'Pure Emoji (Joke Extension)',
        color1: '#ff4f4f',
        blocks: [
          {
            opcode: 'cool',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '(⌐■_■)',
            disableMonitor: true,
          },
          {
            opcode: 'notcool',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '( •_•)>⌐■-■',
            disableMonitor: true,
          },
           "---",
          {
            opcode: 'heppy',
            blockType: Scratch.BlockType.REPORTER,
            text: '( ͡° ͜ʖ ͡°)',
            disableMonitor: true,
          },
          {
            opcode: 'decode',
            blockType: Scratch.BlockType.REPORTER,
            text: 'decode [STR] to emoji',
            disableMonitor: true,
            arguments: {
              STR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ":)"
              },
            }
          },
          {
            opcode: 'encode',
            blockType: Scratch.BlockType.REPORTER,
            text: 'encode [STR] to texmoji',
            disableMonitor: true,
            arguments: {
              STR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "🙂"
              },
            }
          },           
          {
            opcode: "square",
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SQUARE,
            text: "useless square",
            disableMonitor: true,
          },
           "---",
          {
            func: "dumb",
            blockType: Scratch.BlockType.BUTTON,
            text: "Useless button fr"
          },
            
        ],
      };
    }
    cool(args) {
      return true;
    }    
    notcool(args) {
      return false;
    }    
    heppy(args) {
       throw new Error("Could not understand string: '( ͡° ͜ʖ ͡°)'");
    }
    decode(args) {
       let e = args.STR
       return e.replaceAll(":)", "🙂")
       .replaceAll(":D", "😀")
       .replaceAll("B)", "😎")
       .replaceAll(":P", "😜")
       .replaceAll(":l", "😐")
       .replaceAll(":O", "😮")
       .replaceAll(":/", "🫤")
       .replaceAll("-_-", "😑")
       .replaceAll("ToT", "😭")
       .replaceAll("lol", "😂")
       .replaceAll("rofl", "🤣")
    }
    encode(args) {
       let e = args.STR
       return e.replaceAll("🙂", ":)")
       .replaceAll("😀", ":D")
       .replaceAll("😎", "B)")
       .replaceAll("😜", ":P")
       .replaceAll("😐", ":l")
       .replaceAll("😮", ":O")
       .replaceAll("🫤", ":/")
       .replaceAll("😑", "-_-")
       .replaceAll("😭", "ToT")
       .replaceAll("😂", "lol")
       .replaceAll("🤣", "rofl")
    }
   square() {
      throw new Error("'Scratch.BlockShape.>>SQUARE<<' is not defined");
   }

  }
  Scratch.extensions.register(new PureEmoji())
})(Scratch);
