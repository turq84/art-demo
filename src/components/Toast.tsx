import React from 'react';
import * as Toast from '@radix-ui/react-toast';
import { GiPartyPopper } from 'react-icons/gi';

import { Text, Stack } from './uikit';
import theme from '../constants/theme';

type Props = {
  message: string;
  showIcon?: boolean;
};
const ToastComponent = ({ message, showIcon }: Props) => {
  const [open, setOpen] = React.useState(true);
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <Toast.Provider swipeDirection='right'>
      <Toast.Root className='ToastRoot' open={open} onOpenChange={setOpen}>
        <Toast.Title className='ToastTitle'>
          <Stack axis='x' spacing='small' align='center'>
            <Text variant='body' color='primary'>
              {message}
            </Text>
            {showIcon && (
              <GiPartyPopper size={24} color={theme.colors.tietary} />
            )}
          </Stack>
        </Toast.Title>
      </Toast.Root>
      <Toast.Viewport className='ToastViewport' />
    </Toast.Provider>
  );
};

export default ToastComponent;
