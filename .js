class HelloWorld {
  getInfo() {
    return {
      id: 'helloworld',
      name: 'It works!',
      blocks: [
        {
          opcode: 'typeofthis',
          blockType: Scratch.BlockType.REPORTER,
          text: 'What is [STR]'
        }
      ]
    };
  }

  typeofthis(args.STR) {
    return "Hello, World!"
  }

Scratch.extensions.register(new HelloWorld());
