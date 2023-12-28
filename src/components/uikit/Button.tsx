import Link from 'next/link';
import styled from 'styled-components';

import theme from '../../constants/theme';

type ButtonProps = {
  id: string;
  children: React.ReactNode;
  name?: string;
  value?: string;
  tabIndex?: number;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  varianttype?: 'link' | 'button';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  style?: React.CSSProperties;
  size?: 'small' | 'normal';
  title?: string;
};

const PrimaryButton = styled.button<{ size?: 'small' | 'normal' }>`
  ${theme.button.primary};
  padding: ${(props) => (props.size === 'small' ? '10px 30px' : '14px 32px')};
  font-size: ${(props) => (props.size === 'small' ? '12px' : '14px')};
`;

const PrimaryButtonLink = styled(Link)<{ size?: 'small' | 'normal' }>`
  ${theme.button.primary};
  padding: ${(props) => (props.size === 'small' ? '10px 30px' : '14px 32px')};
  font-size: ${(props) => (props.size === 'small' ? '12px' : '14px')};
  text-decoration: none;
`;

const SecondaryButton = styled.button<{ size?: 'small' | 'normal' }>`
  ${theme.button.secondary};
  padding: ${(props) => (props.size === 'small' ? '8px 30px' : '12px 32px')};
  font-size: ${(props) => (props.size === 'small' ? '12px' : '14px')};
`;

const SecondaryButtonLink = styled(Link)<{ size?: 'small' | 'normal' }>`
  ${theme.button.secondary};
  padding: ${(props) => (props.size === 'small' ? '8px 30px' : '12px 32px')};
  font-size: ${(props) => (props.size === 'small' ? '12px' : '14px')};
  text-decoration: none;
`;

export const Button = ({ ...props }: ButtonProps) => {
  switch (props.variant) {
    case 'primary':
      switch (props.varianttype) {
        case 'button':
          return (
            <PrimaryButton
              {...props}
              type={props.type || 'button'}
              aria-label={props.children?.toString()}
            >
              {props.children}
            </PrimaryButton>
          );
        case 'link':
          return (
            <PrimaryButtonLink
              {...props}
              role='button'
              aria-label={props.children?.toString()}
              href={props.to || '/'}
            >
              {props.children}
            </PrimaryButtonLink>
          );
        default:
          return (
            <PrimaryButton
              {...props}
              type={props.type || 'button'}
              aria-label={props.children?.toString()}
            >
              {props.children}
            </PrimaryButton>
          );
      }
    case 'secondary':
      switch (props.varianttype) {
        case 'button':
          return (
            <SecondaryButton
              {...props}
              type={props.type || 'button'}
              aria-label={props.children?.toString()}
            >
              {props.children}
            </SecondaryButton>
          );
        case 'link':
          return (
            <SecondaryButtonLink
              {...props}
              role='button'
              aria-label={props.children?.toString()}
              href={props.to || '/'}
            >
              {props.children}
            </SecondaryButtonLink>
          );
        default:
          return (
            <SecondaryButton
              {...props}
              type={props.type || 'button'}
              aria-label={props.children?.toString()}
            >
              {props.children}
            </SecondaryButton>
          );
      }
    default:
      return (
        <PrimaryButton
          {...props}
          type={props.type || 'button'}
          aria-label={props.children?.toString()}
        >
          {props.children}
        </PrimaryButton>
      );
  }
};
