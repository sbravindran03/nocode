import React from 'react';
import grapesjs from 'grapesjs';
import { GrapesJSEditor } from 'react-grapesjs';

    function Canvas() {
      const editor = grapesjs.init({
        container: '#canvas',
        components: '',
        style: '',
        height: '100%',
        width: 'auto',
        storageManager: {
          type: 'local',
          autosave: true,
          autoload: true,
          stepsBeforeSave: 1,
        },
      });
      return (
        <div>
          <h2>Landing Page</h2>
          <div id="canvas"></div>
          <GrapesJSEditor editor={editor} />
        </div>
      );
    }
    


export default Canvas;
