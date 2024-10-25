import { useContext } from 'react';
import { AccountBalancesContext } from '../../../../providers/AccountBalancesProvider';
import { BigNumber, utils } from 'ethers';
interface StakingBalanceTest { }

export const StakingBalanceTest: React.FC<StakingBalanceTest> = () => {
    const accountBalancesContext = useContext(AccountBalancesContext);
    const weiBalance = BigNumber.from("0x010f9084104aada8").toString();
    if (!accountBalancesContext) {
      return <div>Loading balances...</div>;
    }
  
    const { balances, setUpdateData } = accountBalancesContext.data;
    console.log(balances)
    console.log(utils.formatEther(weiBalance), "0x010f9084104aada8")
    return (
        <div>
          <h2>User Balances</h2>
         
        </div>
      );
    };