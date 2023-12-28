import React from 'react';
import styled from 'styled-components';
import { Typography, Color, Theme } from '../../constants/theme';

interface TextProps extends React.ComponentProps<'span'> {
  color?: Color;
  align?: string;
  href?: string;
  variant: Typography;
  as?: Tags;
  theme?: Theme;
}

type Tags = keyof JSX.IntrinsicElements;

const TextBase = styled.span<TextProps>`
  margin: 0;
  color: ${(p) => (p.color ? p.theme.colors[p.color] : 'inherit')};
  text-align: ${(p) => p.align || 'inherit'};
  ${(p) => p.theme.typography[p.variant]}
`;

const Text: React.ForwardRefRenderFunction<any, TextProps> = (
  { variant, as: asTag, children, ...rest },
  ref
) => {
  return (
    <TextBase {...rest} variant={variant} ref={ref}>
      {children}
    </TextBase>
  );
};

export default React.forwardRef(Text);
