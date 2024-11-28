import { useContext, useEffect } from 'react';
import { AccountBalancesContext } from '../../../../providers/AccountBalancesProvider';
import { BigNumber, utils } from 'ethers';
import React from 'react';
import { visibleChains } from '../../../../utils/blockchain';

import { useWalletAddress } from '@etherspot/transaction-kit';
import { wallet } from '@etherspot/prime-sdk/dist/sdk/contracts/src';

interface StakingBalanceTest {}

export const StakingBalanceTest: React.FC<StakingBalanceTest> = () => {
  const chainOptions = visibleChains.map((chain) => ({
    id: `${chain.id}`,
    title: chain.name,
    value: chain.id,
  }));

  const [chainId, setChainId] = React.useState<number>(1);
  console.log(chainOptions, 'chainOptions');
  const [ethBalance, setEthBalance] = React.useState(0);
  const walletAddress = useWalletAddress();

  const accountBalancesContext = useContext(AccountBalancesContext);
  if (!accountBalancesContext) {
    return <div>Loading balances...</div>;
  }

  const { balances, setUpdateData } = accountBalancesContext.data;
  console.log(balances, 'balances');
  console.log(accountBalancesContext.data, 'accountBalancesContext');

  useEffect(() => {
   if(!walletAddress){
    setEthBalance(0);
    return;
   }
   const ethArrayBalance = balances[chainId][walletAddress][0]['balance'];
   console.log(ethArrayBalance, 'ethArrayBalance')
   console.log(utils.formatEther(ethArrayBalance), 'ttttt')
   setEthBalance(+utils.formatEther(ethArrayBalance))
  }, [walletAddress, balances, chainId]);

  return (
    <div>
      <h2>User Balances</h2>
      {chainId}
      <br />
      {ethBalance}
    </div>
  );
};
