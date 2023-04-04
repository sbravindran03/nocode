import React from 'react';
import grapesjs from 'grapesjs';
import { GrapesJSEditor } from 'react-grapesjs';


function Toolbar({ editor }) {
  const addText = () => {
    editor.DomComponents.addComponent({
      tagName: 'div',
      content: 'Insert your text here',
    });
  };

  const addImage = () => {
    editor.DomComponents.addComponent({
      tagName: 'img',
      attributes: { src: 'https://via.placeholder.com/150' },
    });
  };

  const addButton = () => {
    editor.DomComponents.addComponent({
      tagName: 'button',
      content: 'Click me!',
    });
  };

  return (
    <div>
      <button onClick={addText}>Text</button>
      <button onClick={addImage}>Image</button>
      <button onClick={addButton}>Button</button>
    </div>
  );
}



export default Toolbar;
