import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

// components
import useBottomMenuModal from '../../hooks/useBottomMenuModal';
import TextInput from '../../components/Form/TextInput';
import Button from '../../components/Button';
import FormGroup from '../../components/Form/FormGroup';
import Label from '../../components/Form/Label';
import Select from '../../components/Form/Select';

// utils
import { visibleChains } from '../../utils/blockchain';

const App = () => {
  const [t] = useTranslation();
  const [destinationAddress, setDestinationAddress] = React.useState<string>('');
  const [value, setValue] = React.useState<string>('');
  const [data, setData] = React.useState<string>('');

  const chainOptions = visibleChains.map((chain) => ({
    id: `${chain.id}`,
    title: chain.name,
    value: chain.id,
  }));

  const [chainId, setChainId] = React.useState<number>(+chainOptions[0]?.value);
  const { show } = useBottomMenuModal();

  const send = () => {
    if (!destinationAddress) return;
    show({
      type: 'send',
      payload: {
        title: 'Basic Transaction',
        description: `This will execute basic transaction to ${destinationAddress} address with value ${value} and ${data ? 'attached' : 'no'} call data on ${chainId} chain`,
        transactions: [{
          chainId,
          to: destinationAddress,
          value: value || undefined,
          data: data || undefined,
        }]
      },
    });
  }

  return (
    <Wrapper>
      <FormWrapper>
        <FormGroup>
          <Label>{t`chain`}</Label>
          <Select
            options={chainOptions}
            onChange={(option) => setChainId(+option?.value)}
            defaultSelectedId={chainOptions[0]?.id}
          />
        </FormGroup>
        <FormGroup>
          <Label>{t`destinationAddress`}</Label>
          <TextInput onValueChange={setDestinationAddress} />
        </FormGroup>
        <FormGroup>
          <Label>{t`transactionValue`}</Label>
          <TextInput onValueChange={setValue} />
        </FormGroup>
        <FormGroup>
          <Label>{t`transactionCallData`}</Label>
          <StyledTextarea onChange={(e) => setData(e?.target?.value ?? '')} />
        </FormGroup>
        <Button disabled={!destinationAddress} onClick={send} $fullWidth>{t`send`}</Button>
      </FormWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 0 25px;
  min-height: calc(100vh - 240px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  width: 100%;
`;

const StyledTextarea = styled.textarea`
  background: ${({ theme }) => theme.color.background.input};
  color: ${({ theme }) => theme.color.text.input};
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  width: 100%;
  height: 100px;
  resize: none;
  margin-bottom: 15px;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;

export default App;
