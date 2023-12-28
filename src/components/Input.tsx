import { forwardRef } from 'react';
import type { RefObject } from 'react';
import { useId } from 'react-aria';
import styled from 'styled-components';
import theme from '../constants/theme';
import { Stack, Text } from './uikit';

type Props = {
  id?: string;
  label: string;
  name: string;
  isRequired?: boolean;
  type?: string;
  autoComplete?: string;
  defaultValue?: string;
  placeholder?: string;
  autoFocus?: boolean;
  width?: string;
  ref?: RefObject<HTMLInputElement>;
  tabIndex?: number;
  // actionData: ActionData['errors'][string];
  hideLabel?: boolean;
  hideBorder?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number | readonly string[] | undefined;
  disabled?: boolean;
};

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      name,
      type,
      width = '100%',
      // actionData,
      isRequired,
      hideLabel,
      ...props
    },
    ref
  ) => {
    const id = useId();
    const labelId = `${id}-${label}`;

    return (
      <Container axis='y' spacing='normal' align='left'>
        {!hideLabel && (
          <Stack axis='y' spacing='xsmall'>
            <Label htmlFor={name}>{label}</Label>
          </Stack>
        )}
        <InputField
          id={id}
          ref={ref}
          {...props}
          name={name}
          type={type}
          onFocus={(e) => (e.target.style.borderColor = theme.colors.primary)}
          onBlur={(e) => (e.target.style.borderColor = theme.colors.border)}
          width={width}
          aria-label={label}
          // aria-describedby={
          //   actionData?.errors[name]
          //     ? `${id}-error-${actionData?.errors[name]}`
          //     : 'success'
          // }
          // aria-invalid={actionData?.errors[name] ? true : undefined}
          aria-labelledby={labelId}
          required={isRequired}
          hideBorder={props.hideBorder || false}
        />

        {/* {actionData?.errors[name] && (
          <Text variant='error' id={`${id}-error`}>
            {actionData.errors[name]}
          </Text>
        )} */}
      </Container>
    );
  }
);

Input.displayName = 'Input';
export default Input;

const Container = styled(Stack)`
  width: 100%;
`;

const InputField = styled.input<{ width: string; hideBorder: boolean }>`
  border: ${(props) =>
    props.hideBorder ? 'none' : `1px solid ${theme.colors.border}`};
  border-radius: 46px;
  padding: 12px 28px;
  min-width: 300px;
  width: ${(props) => props.width};
  ${theme.typography.body};
  outline: 0;
  transition: all 0.18s linear 0s;

  &:focus,
  &:active,
  &:hover {
    border: 1px solid ${theme.colors.primary};
    transition: all 0.18s linear 0s;
  }
`;

const Label = styled.label`
  ${theme.typography.body};
  color: ${theme.colors.secondary};
`;
