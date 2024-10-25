import PropTypes from 'prop-types';
import {
  EtherspotBatches,
  EtherspotBatch,
  EtherspotTransaction,
  useEtherspotTransactions,
  useWalletAddress
} from "@etherspot/transaction-kit";
import React from "react";


interface StakingTestProps {
  className?: string;
}

export const StakingTest: React.FC<StakingTestProps> = ({ className }) => {
  const [address, setAddress] = React.useState(
    "0x271Ae6E03257264F0F7cb03506b12A027Ec53B31"
  );
  const [amount, setAmount] = React.useState("0.001");
  const { estimate, send } = useEtherspotTransactions();
  const etherspotAddresses = useWalletAddress();

  React.useEffect(() => {
    console.log(etherspotAddresses);
  }, [etherspotAddresses]);

  

  return (
    <div className="App">
      <h1>Etherspot Demo</h1>
      <h2>Let's send some Sepolia ETH.</h2>
      <code>{JSON.stringify(etherspotAddresses)}</code>

      <EtherspotBatches>
        <EtherspotBatch chainId={11155111}>
          <EtherspotTransaction to={address} value={amount}>
            <input
              type="text"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
            <input
              type="text"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
            <hr />
            <button onClick={() => estimate()}>Estimate</button>
            <button onClick={() => send()}>Send</button>
          </EtherspotTransaction>
        </EtherspotBatch>
      </EtherspotBatches>
    </div>
  );

};

StakingTest.propTypes = {
  className: PropTypes.string,
};