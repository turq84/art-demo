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
      <Container axis='y' spacing='normal'>
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
    props.hideBorder ? 'none' : `1px solid ${props.theme.colors.border}`};
  border-radius: 46px;
  padding: 12px 28px;
  min-width: 300px;
  width: ${(props) => props.width};
  ${(props) => props.theme.typography.body};
  outline: 0;
  transition: all 0.15s linear 0s;

  &:focus,
  &:active,
  &:hover {
    box-shadow: ${(props) => props.theme.colors['magenta-10']} 0px 0px 0px 4px;
    border: 1px solid ${(props) => props.theme.colors['magenta-50']};
    transition: all 0.15s linear 0s;
  }
`;

const Label = styled.label`
  ${(props) => props.theme.typography.body};
  color: ${(props) => props.theme.colors.secondary};
`;
