import styled from 'styled-components';

import type { Theme } from '../../constants/theme';
import theme from '../../constants/theme';

export const Stack = styled.div<{
  axis: 'x' | 'y';
  spacing?: keyof Theme['spacing'];
  align?: React.CSSProperties['alignItems'];
  justify?: React.CSSProperties['justifyContent'];
}>`
  display: flex;
  flex-direction: ${(props) => (props.axis === 'x' ? 'row' : 'column')};
  justify-content: ${(props) => props.justify || 'flex-start'};
  gap: ${(props) => theme.spacing[props.spacing || 'normal']};
  align-items: ${(props) => props.align || 'stretch'};
`;

export { Button } from './Button';
export { default as Content } from './Content';
export { default as Text } from './Text';
