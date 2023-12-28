import styled from 'styled-components';

import { MAX_CONTENT_WIDTH } from '../../constants';
import Stack from './Stack';
import theme from '../../constants/theme';

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
