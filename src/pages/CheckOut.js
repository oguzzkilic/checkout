import React from 'react';
import Payment from '../containers/Payment';
import { Wrapper, Panel, Tab } from './style';

const CheckOut = () => (
  <Wrapper>
    <Tab>Kred/ATM Kartı ile öde</Tab>
    <Panel>
      <Payment />
    </Panel>
  </Wrapper>
);


export default CheckOut;
