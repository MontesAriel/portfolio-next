import React, { useState, useEffect } from 'react';

const TypingText = () => {

  const text = `D esarrollador full stack MERN`;
  const [typingText, setTypingText] = useState('');
  let index = 0;

  useEffect(() => {
    const timer = setInterval(() => {
      if (index < text.length) {
        setTypingText(prevText => prevText + text.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const renderText = () => {
    return typingText.split('').map((char, index) => {
       { console.log(index)}
      if (char === ' ') {
        return <span key={index}>&nbsp;</span>;
      } else if (char === 'M' || char === 'E' || char === 'R' || char === 'N'){
        return <span key={index} style={{ color: '#ff5357' }}>{char}</span>;
      } else {
        return char;
      }
    });
  };

  return <h3 className="subtitulo">{renderText()}</h3>;
};

export default TypingText;