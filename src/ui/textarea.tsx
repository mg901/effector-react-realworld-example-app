import React from 'react';

export type TextareaProps = Readonly<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>;

export const Textarea: React.FC<TextareaProps> = (props) => (
  <textarea className="form-control" {...props} />
);
