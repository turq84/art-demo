import styled from 'styled-components';
import { MAX_CONTENT_WIDTH } from '../../constants';
import Stack from './Stack';

const Content = styled(Stack)`
  width: 100%;
  max-width: ${MAX_CONTENT_WIDTH};
  margin-left: auto;
  margin-right: auto;

  ${(props) => props.theme.media.laptopL} {
    width: 90%;
  }
`;

export default Content;
