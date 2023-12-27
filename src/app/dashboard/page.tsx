'use client';
import React from 'react';
import styled from 'styled-components';
// import { Content, Text } from '../components/common';

import { requiredUser } from '../utils/auth';

const Dashboard = () => {
  requiredUser();

  return <>Dashboard</>;
};
export default Dashboard;
