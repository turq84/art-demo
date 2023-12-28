import React from 'react';
import type { CSSProperties } from 'react';
import styled from 'styled-components';

import type { Theme } from '../../constants/theme';

export type LayoutProps = {
  spacing?: keyof Theme['spacing'];
  axis?: 'x' | 'y'; // Default is y-axis
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  reverse?: boolean;
  children: React.ReactNode;
};

const StackContainer = styled.div<LayoutProps>`
  display: flex;
  flex-direction: ${(props) => (props.axis === 'x' ? 'row' : 'column')};
  gap: ${(props) => props.spacing};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
`;

const Stack: React.FC<LayoutProps> = ({
  spacing = 'normal',
  axis = 'y',
  align = 'stretch',
  justify = 'flex-start',
  children,
}) => {
  return (
    <StackContainer
      spacing={spacing}
      axis={axis}
      align={align}
      justify={justify}
    >
      {children}
    </StackContainer>
  );
};

export default Stack;
