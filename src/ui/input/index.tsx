import React, { forwardRef } from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, id, ...props }, ref) => (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input ref={ref} type="text" id={id} {...props} />
    </div>
  ),
);
