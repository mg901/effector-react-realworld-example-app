import { forwardRef } from 'react';

import type {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithoutRef,
  PolymorphicPropsWithRef,
} from 'react-polymorphic-types';

export const FormControlDefaultElement = 'input';

export type FormControlOwnProps = {
  size?: 'lg';
};

export type ControlProps<
  T extends React.ElementType = typeof FormControlDefaultElement,
> = PolymorphicPropsWithRef<FormControlOwnProps, T>;

export const FormControl: PolymorphicForwardRefExoticComponent<
  FormControlOwnProps,
  typeof FormControlDefaultElement
> = forwardRef(function FormControl<
  T extends React.ElementType = typeof FormControlDefaultElement,
>(
  { as, size, ...props }: PolymorphicPropsWithoutRef<FormControlOwnProps, T>,
  ref: React.ForwardedRef<Element>,
) {
  const Element: React.ElementType = as || FormControlDefaultElement;

  return (
    <Element
      ref={ref}
      {...props}
      className={`form-control ${size === 'lg' ? 'form-control-lg' : ''}`}
    />
  );
});
