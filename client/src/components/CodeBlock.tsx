import React from 'react';

interface CodeBlockProps {
  children: React.ReactNode;
  language?: string;
  isError?: boolean;
  isSuccess?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  children, 
  language = 'javascript',
  isError = false,
  isSuccess = false
}) => {
  let bgClass = 'bg-neutral-800 text-white';
  
  if (isError) {
    bgClass = 'bg-red-100 text-red-800';
  } else if (isSuccess) {
    bgClass = 'bg-green-100 text-green-800';
  }
  
  return (
    <div className={`code-block ${bgClass} p-4 rounded-lg font-mono text-sm overflow-x-auto max-w-full`}>
      <div className="break-all whitespace-pre-wrap">{children}</div>
    </div>
  );
};

export default CodeBlock;
