// components
import RandomAvatar from '../RandomAvatar/RandomAvatar';
import TokensPercentage from '../TokensPercentage/TokensPercentage';
import Body from '../Typography/Body';
import BodySmall from '../Typography/BodySmall';

type TokenInfoHorizontalProps = {
  logo?: string;
  tokenName?: string;
  tokenValue?: number;
  percentage?: number;
  onClick?: () => void;
};

const TokenInfoHorizontal = ({
  logo,
  tokenName,
  tokenValue,
  percentage,
  onClick,
}: TokenInfoHorizontalProps) => {
  return (
    <div
      className="flex flex-col py-5 px-[22px] gap-1 w-[122px] h-auto items-center cursor-pointer tablet:w-[120px] mobile:w-[100px] mobile:px-3.5"
      onClick={onClick}
    >
      {logo ? (
        <img
          src={logo}
          alt="token-logo"
          className="w-[70px] h-[70px] object-fill rounded-full mb-3.5"
        />
      ) : (
        <div className="w-[70px] h-[70px] object-fill rounded-full mb-3.5 overflow-hidden">
          <RandomAvatar name={tokenName || ''} />
        </div>
      )}
      {tokenName && <Body className="text-center">{tokenName}</Body>}
      {tokenValue && (
        <BodySmall className="text-center">${tokenValue.toFixed(4)}</BodySmall>
      )}
      <TokensPercentage percentage={percentage} />
    </div>
  );
};

export default TokenInfoHorizontal;
