/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Event } from 'effector';
import { Box, PolymorphicComponentProps } from 'react-polymorphic-box';
import './index.css';

export type OwnProps<E> = Readonly<{
  as?: 'input' | 'textarea';
  name: string;
  labelText: string;
  placeholder?: string;
  rows?: number;
  className?: string;
  onChange: E;
}>;

export type Props<T, U extends React.ElementType> = PolymorphicComponentProps<
  U,
  OwnProps<T>
>;

export const FormControl = <
  T extends Event<any>,
  U extends React.ElementType = 'input'
>({
  as: componentName,
  name,
  labelText,
  placeholder,
  rows,
  className = '',
  onChange,
}: Props<T, U>): JSX.Element => (
  <div className="form-group">
    <label htmlFor={name}>
      <div>{labelText}</div>
      {componentName === 'textarea' ? (
        <Box
          name={name}
          as="textarea"
          rows={rows}
          className={`form-control ${className}`}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : (
        <Box
          name={name}
          as="input"
          className={`form-control ${className}`}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </label>
  </div>
);
