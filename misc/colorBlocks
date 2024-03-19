(function (Scratch) {
  const variables = {};

    class ColorBlocks {
    getInfo() {
      return {
        id: 'thesecolorblocks',
        name: 'Colors Blocks',
        color1: '#b22eff',
        color2: '#952ad4',
        blocks: [
          {
            opcode: 'colorHex',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Color: [STR]',
            disableMonitor: true,
            arguments: {
              STR: {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: "#ff0000"
              },
            }
          },
          {
            opcode: 'randomHex',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Random Color',
            disableMonitor: true,
          },
            
        ],
      };
    }
    colorHex(args) {
      return args.STR
    }    
    randomHex(args) {
      return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    }

  }
  
  Scratch.extensions.register(new ColorBlocks())
})(Scratch);
