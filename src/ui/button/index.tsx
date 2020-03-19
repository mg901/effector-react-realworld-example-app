/* eslint-disable react/button-has-type */
import React from 'react';
import { Event } from 'effector';
import './index.css';

type Callback = () => void;

type Props = Readonly<{
  form?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  // TODO: разобраться с типами для onClick. По возможности заменить any
  onClick: Callback | Event<any>;
}>;

export const Button: React.FC<Props> = ({
  form,
  type = 'button',
  className = '',
  disabled = false,
  children,
  onClick,
}) => (
  <button
    form={form}
    type={type}
    className={`btn ${className}`}
    onClick={onClick}
    disabled={disabled}>
    {children}
  </button>
);
