import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Highlighter = ({ children }) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={atelierDuneLight}
      customStyle={{
        backgroundColor: '#F5F5F5',
        padding: '15px 20px',
        fontSize: '16px',
        borderRadius: '20px'
      }}
      showLineNumbers
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default Highlighter;
