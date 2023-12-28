import React from 'react';
import styled from 'styled-components';

import type { Typography, Color, Theme } from '../../constants/theme';
import theme from '../../constants/theme';

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
  color: ${(props) => (props.color ? theme.colors[props.color] : 'inherit')};
  text-align: ${(props) => props.align || 'inherit'};
  ${(props) => theme.typography[props.variant]}
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
