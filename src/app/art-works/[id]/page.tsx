'use client';
import React from 'react';
import styled from 'styled-components';
import * as Toast from '@radix-ui/react-toast';
// import { Content, Text } from '../components/common';

import { requireUser } from '../../../utils/auth';

// TODO: USE THE RADIX TOAST COMPONENT FOR WHEN AN ITEM HAS BEEN ADDED OR REMOVED

/* <Toast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
<Toast.Title className="ToastTitle">Scheduled: Catch up</Toast.Title>
<Toast.Description asChild>
  <time className="ToastDescription" dateTime={eventDateRef.current.toISOString()}>
    {prettyDate(eventDateRef.current)}
  </time>
</Toast.Description>
<Toast.Action className="ToastAction" asChild altText="Goto schedule to undo">
  <button className="Button small green">Undo</button>
</Toast.Action>
</Toast.Root>
<Toast.Viewport className="ToastViewport" /> */

const ArtDetail = () => {
  React.useEffect(() => {
    requireUser();
  }, []);

  return <>Art Details</>;
};
export default ArtDetail;
