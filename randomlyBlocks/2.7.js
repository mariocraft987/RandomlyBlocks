/*
Under @MIT LICENSE
Version 2.7
Created by Mariocraft987 (scratch.mit.edu/users/mariocraft987)
*/

(function (Scratch) {
  "use strict";
  class RandomlyBlocks {
    getInfo() {
      return {
        id: 'randomlyblockscool',
        name: 'Randomly Blocks',
        color1: '#07f290',
        color2: '#1ee894',
        blocks: [
          {
            opcode: 'alertname',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Alert [STR]',
            disableMonitor: true,
            arguments: {
              STR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Hello, world!"
              },
            }
          },
          {
            opcode: 'changeTitle',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Change website title to [STR]',
            disableMonitor: true,
            arguments: {
              STR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Randomly blocks"
              },
            }
          },
          {
            opcode: 'changeUrl',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Have [bot] Redirect user to [STR] in [NEWTAB]',
            disableMonitor: true,
            arguments: {
              STR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              },
              bot: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Penguinmod"
              },
              NEWTAB: {
                type: Scratch.ArgumentType.STRING,
                menu: 'newTab',
                defaultValue: 'same'
              },
            }
          },
          {
            opcode: 'consoleAdd',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Add [STR] to console log',
            disableMonitor: true,
            arguments: {
              STR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Penguin"
              },
            }
          },
          {
            opcode: 'consoleError',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Add [STR] to console error',
            disableMonitor: true,
            arguments: {
              STR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "banana"
              },
            }
          },
          "---",
          {
            opcode: 'amExist',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'Do Dinosoars still exist?',
            disableMonitor: true,
            hideFromPalette: true,
          },
          {
            opcode: 'randomBoolean',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'Random output',
            disableMonitor: true,
          },
          {
            opcode: 'YesNoAlert',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '"Ok" button pressed on alert [STR]?',
            disableMonitor: true,
            arguments: {
              STR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Popup"
              },
            }
          },
          {
            opcode: 'isBlank',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'Is not words or numbers [STR]',
            disableMonitor: true,
            arguments: {
              STR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "   "
              },
            }
          },
          {
            opcode: 'inputAlert',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Input of [STR] with default of [default]',
            disableMonitor: true,
            arguments: {
              STR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "What's your username?"
              },
              default: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "mariocraft987"
              },
            }
          },
          {
            opcode: 'getDate',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Get Date',
            disableMonitor: true,
          },
          {
            opcode: 'getMilisecs',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Get Miliseconds',
            disableMonitor: true,
          },
          {
            opcode: 'getTime1970',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Get Miliseconds since 1970',
            disableMonitor: true,
          },
          {
            opcode: 'currentHolliday',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Current holliday',
            disableMonitor: true, 
          },
          {
            opcode: 'newImg',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Get image URL of file selected',
            disableMonitor: true, 
            hideFromPalette: true,
          },
          "---",
          // This button is under devolopment
          {
            func: "earlyAcess",
            blockType: Scratch.BlockType.BUTTON,
            text: "Early acess"
          },

            
        ],
            menus: {
        newTab: [
          {text: 'same tab', value: 'same'},
          {text: 'new tab', value: 'new'},
        ]
      }
      };
    }

    earlyAcess(args) {
      alert("Under devolopment!")
    }
    
    alertname(args) {
      alert(args.STR)
    }    
    // Old Block Test
    YNalert(args) {
      return("hello!")
    }

    changeTitle(args) {
      document.title = args.STR
    }

    /* 
      Wrong use with the redirect block can lead to major adult websites, so it is intended to ask for
      permission for the directed URL.
    */
    changeUrl(args) {
      let link = args.STR
      let bot = args.bot
      if (confirm(bot+" wants to redirect you to "+link) == true) {
        if (args.NEWTAB == "new") {
          window.open(args.STR, '_blank');
        }else{
          location.href = args.STR;
        }
      }
    }

    consoleAdd(args) {
      console.log(args.STR)
    }

    consoleError(args) {
      window.console.error(args.STR)
    }
    
    amExist(args) {
      return "Imposter Reporter as a Boolean!!"
    }
    
    randomBoolean(args) {
      if ((Math.floor(Math.random() * 2)) == 1) {
      return true
      }else{
      return false
      }
    }
    
    getDate(args) {
      let date = Date()
      return date
    }

    getMilisecs(args) {
      let date = new Date()
      return date.getMilliseconds();
    }

    getTime1970(args) {
      let date = new Date()
      return date.getTime();
    }

    YesNoAlert(args) {
      let jtext = args.STR
      var pressLog
      if (confirm(jtext) == true) {
        pressLog = true
      } else {
        pressLog = false
      }
      return pressLog
    }

    isBlank(args) {
      return args.STR.trim() == "";
    }
    
    inputAlert(args) {
        let question = args.STR
        let normal = args.default
        let answer = prompt(question, normal);
      if (answer != null) {
        return answer
      }
    }
    
    currentHolliday(args) {
        let date = new Date();
        let month = date.getMonth()
        let day = date.getDate()
            if (month == 0) {
                if (day == 1) {return "new_year"}
                if (day == 15) {return "martin_luther_king"}
            }else
            if (month == 1) {
                if (day == 2) {return "groundhogs_day"}
                if (day == 19) {return "presidents_day"}
            }else
            if (month == 2) {
                if (day == 31) {return "easter"}
            }else
            if (month == 3) {
                if (day == 15) {return "tax_day"}
            }else
            if (month == 4) {
                if (day == 12) {return "mothers_day"}
            }else
            if (month == 5) {
                if (day == 16) {return "fathers_day"}
            }else
            if (month == 6) {
                if (day == 4) {return "independence_day"}
                if (day == 28) {return "parents_day"}
            }else
            if (month == 7) {
                /* Nothing much */
            }else
            if (month == 8) {
                if (day == 2) {return "labor_day"}
            }else
            if (month == 9) {
                if (day == 31) {return "halloween"}
            }else
            if (month == 10) {
                if (day == 28) {return "thanksgiving"}
            }else
            if (month == 11) {
                if (day == 25) {return "christmas"}
                if (day == 31) {return "new_year_eve"}
            }
            return "none"
        }
        throwError(args) {
          throw new Error(args.STR)
        }
        newImg(args) {
    // Start of script
var input = document.createElement('input');
input.type = 'file';

input.onchange = e => { 

   // getting a hold of the file reference
   var file = e.target.files[0]; 

   // setting up the reader
   var reader = new FileReader();
   reader.readAsDataURL(file); // this is reading as data url

   // here we tell the reader what to do when it's done reading...
   reader.onload = readerEvent => {
      var content = readerEvent.target.result; // this is the content!
      let selectedImg = content
   }
  // End of script
  return selectedImg
}
input.click();
        }           
  }
  
  Scratch.extensions.register(new RandomlyBlocks())
})(Scratch);
