'use client';
import React from 'react';
import styled from 'styled-components';

import { requireUser } from '../../utils/auth';

const Dashboard = () => {
  React.useEffect(() => {
    requireUser();
  }, []);

  return <>Dashboard</>;
};
export default Dashboard;
