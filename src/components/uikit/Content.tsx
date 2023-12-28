import styled from 'styled-components';

import { MAX_CONTENT_WIDTH } from '../../constants';
import theme from '../../constants/theme';
import type { Theme } from '../../constants/theme';

const Stack = styled.div<{
  axis?: 'x' | 'y';
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

const Content = styled(Stack)`
  width: 100%;
  max-width: ${MAX_CONTENT_WIDTH};
  margin-left: auto;
  margin-right: auto;

  ${theme.media.laptopL} {
    width: 90%;
  }
`;

export default Content;
