(function(Scratch) {
class Python {
  getInfo() {
    return {
      id: 'thepythonpm',
      name: 'Python',
      blocks: [
        {
          opcode: 'undefined',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Undefined',
          disableMonitor: true,
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
  undefined(args) {
    return "NaN"
  }
}
Scratch.extensions.register(new Python());
})(Scratch);
