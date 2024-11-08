// Creator: iiSharp
// YouTube: https://www.youtube.com/@iisharp
// Version: 1.0.0

(function(Scratch) {
  'use strict';

  class BrowserControlExtension {
    getInfo() {
      return {
        id: 'browserControl',
        name: 'Browser Control',
        blocks: [
          {
            opcode: 'changeURL',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Go to [URL]',
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://example.com'
              }
            }
          },
          {
            opcode: 'openLink',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Open link [LINK]',
            arguments: {
              LINK: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://example.com'
              }
            }
          },
          {
            opcode: 'getWidth',
            blockType: Scratch.BlockType.REPORTER,
            text: 'browser window width',
          },
          {
            opcode: 'getHeight',
            blockType: Scratch.BlockType.REPORTER,
            text: 'browser window height',
          }
        ]
      };
    }

    changeURL({ URL }) {
      window.location.href = URL;
    }

    openLink({ LINK }) {
      if (LINK.startsWith('http://') || LINK.startsWith('https://')) {
        window.open(LINK, '_blank');
      } else {
        console.error('Invalid link: ', LINK);
      }
    }

    getWidth() {
      return window.innerWidth;
    }

    getHeight() {
      return window.innerHeight;
    }
  }

  Scratch.extensions.register(new BrowserControlExtension());

})(Scratch);
