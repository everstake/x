import React from 'react';

type IconProps = {
    width?: number | string;
    height?: number | string;
    fill?: string;
    stroke?: string;
    className?: string;
    rotate?: boolean;
    onAnimationEnd?: () => void;
};


export const ArrowRight: React.FC<IconProps> = ({
    width = 28,
    height = 18,
    stroke = '#F5BE37',
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 28 18" fill="none">
            <path d="M27.1765 9H0" stroke={stroke} strokeWidth="2" />
            <path d="M19.7656 1C20.5892 4.08772 23.3891 8.57895 28.0009 8.57895" stroke={stroke} strokeWidth="2" />
            <path d="M19.7656 17C20.5892 13.9123 23.3891 9.42105 28.0009 9.42105" stroke={stroke} strokeWidth="2" />
        </svg>
    );
};

export const EverstakeSmallLogo: React.FC<IconProps> = ({
    width = 35,
    height = 35,
    fill = '#FFFFFF'
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.2994 13.8497L27.5142 2.12424C27.2105 1.59897 26.7736 1.16298 26.2473 0.860237C25.7211 0.557494 25.1242 0.398712 24.5169 0.399909H10.9603C10.2086 0.401921 9.47063 0.600732 8.81991 0.976512C8.16918 1.35229 7.62849 1.8919 7.25175 2.54153L0.466526 14.267C0.163458 14.7912 0.00390625 15.3859 0.00390625 15.9913C0.00390625 16.5967 0.163458 17.1914 0.466526 17.7156L7.25175 29.4583C7.62878 30.1084 8.17002 30.6484 8.82141 31.0242C9.47279 31.4 10.2115 31.5985 10.9638 31.5999H24.5169C25.1219 31.5987 25.7159 31.4388 26.2395 31.1361C26.7631 30.8335 27.1979 30.3988 27.5004 29.8756L34.2856 18.1501C34.6666 17.498 34.8686 16.7569 34.871 16.0018C34.8734 15.2467 34.6762 14.5043 34.2994 13.8497ZM2.39332 16.0396L3.1599 14.7256L9.21998 4.22447L13.0183 10.8045C13.1956 11.0813 13.4728 11.2791 13.7924 11.3568C14.112 11.4345 14.4493 11.3861 14.7341 11.2217C15.0189 11.0573 15.2292 10.7895 15.3212 10.4741C15.4133 10.1587 15.38 9.81999 15.2283 9.5285L12.1689 4.22447C11.9152 3.84901 11.5769 3.53826 11.1811 3.31724C10.7852 3.09621 10.343 2.97108 9.88987 2.95192H23.5708L17.1378 14.0807C17.0242 14.2766 16.861 14.4393 16.6647 14.5525C16.4683 14.6656 16.2457 14.7253 16.019 14.7256H4.7034C4.2367 14.7226 3.77743 14.8424 3.37187 15.0731C2.96631 15.3038 2.62879 15.6371 2.39332 16.0396ZM23.5708 29.0514H11.4334L15.2317 22.4644C15.3247 22.3192 15.3873 22.1567 15.4157 21.9866C15.444 21.8166 15.4376 21.6426 15.3968 21.4751C15.3559 21.3076 15.2816 21.1501 15.1781 21.0121C15.0747 20.8741 14.9443 20.7585 14.7949 20.6722C14.6454 20.5859 14.4801 20.5308 14.3087 20.5101C14.1373 20.4894 13.9636 20.5036 13.7979 20.5519C13.6322 20.6001 13.478 20.6814 13.3446 20.7908C13.2112 20.9002 13.1014 21.0355 13.0218 21.1884L9.22343 27.7753L8.46722 29.0927C8.67607 28.728 8.79529 28.3191 8.8151 27.8994C8.83491 27.4797 8.75474 27.0614 8.58117 26.6787L3.15299 17.2742H16.019C16.2456 17.2748 16.4681 17.3347 16.6644 17.4478C16.8607 17.561 17.0239 17.7234 17.1378 17.9191L22.8526 27.8029C23.1048 28.1731 23.4406 28.4789 23.8328 28.6958C24.2251 28.9126 24.6629 29.0344 25.1109 29.0514H23.5708ZM31.8512 17.2776L25.7842 27.7753L19.3374 16.6465C19.2247 16.4502 19.1654 16.2279 19.1654 16.0016C19.1654 15.7754 19.2247 15.553 19.3374 15.3567L25.7842 4.22447L26.5404 2.91053C26.2874 3.35322 26.1667 3.859 26.1924 4.36808C26.2181 4.87715 26.3892 5.36823 26.6854 5.78326C26.903 6.08674 31.865 14.7222 31.865 14.7222H24.2303C23.8915 14.7222 23.5665 14.8566 23.3269 15.0959C23.0873 15.3352 22.9527 15.6598 22.9527 15.9982C22.9527 16.3366 23.0873 16.6612 23.3269 16.9005C23.5665 17.1398 23.8915 17.2742 24.2303 17.2742H30.3422H30.3077C30.7744 17.2772 31.2337 17.1574 31.6392 16.9267C32.0448 16.6961 32.3823 16.3627 32.6178 15.9602L31.8477 17.2811L31.8512 17.2776Z" fill={fill}></path>
        </svg>
    );
};

export const Chainsecurity: React.FC<IconProps> = ({
    width = 255,
    height = 52,
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 255 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M69.7041 20.1071C69.7232 19.5176 69.9618 18.9566 70.3731 18.5339C70.5841 18.3378 70.8254 18.177 71.0877 18.0578C71.3616 17.9494 71.651 17.885 71.9451 17.8672H80.2847C80.7239 17.8724 81.152 18.0061 81.5162 18.2518C81.8803 18.4975 82.1646 18.8444 82.3339 19.2497C82.4424 19.5236 82.5067 19.813 82.5246 20.1071V22.1139H80.3326V20.1071H71.993V31.1158H80.3326V29.1089H82.5257V31.1158C82.5204 31.555 82.3867 31.9831 82.1411 32.3472C81.8954 32.7114 81.5485 32.9957 81.1432 33.165C80.8693 33.2734 80.5799 33.3378 80.2858 33.3556H71.9462C71.507 33.3504 71.0789 33.2167 70.7147 32.971C70.3506 32.7254 70.0663 32.3785 69.897 31.9731C69.7885 31.6992 69.7242 31.4098 69.7063 31.1158V20.1071" fill="white"></path><path d="M99.2505 17.9141V33.3066H97.0586V26.7286H88.2418V33.3066H86.002V17.9141H88.2418V24.5378H97.0586V17.9141H99.2505Z" fill="white"></path><path d="M110.02 17.9141L115.977 33.3066H113.785L112.403 29.7801H105.444L104.062 33.3066H101.871L107.828 17.9141H110.02ZM106.303 27.5882H111.543L108.922 20.7738L106.303 27.5882Z" fill="white"></path><path d="M120.792 17.9141H118.6V33.3066H120.792V17.9141Z" fill="white"></path><path d="M126.986 33.3066H124.794V17.9141H126.986L136.231 29.876V17.9141H138.423V33.3066H136.231L126.986 21.3447V33.3066Z" fill="white"></path><path d="M144.619 26.7308C144.18 26.7256 143.752 26.5918 143.387 26.3462C143.023 26.1005 142.739 25.7536 142.57 25.3483C142.461 25.0744 142.397 24.785 142.379 24.4909V20.1071C142.398 19.5176 142.637 18.9566 143.048 18.5339C143.259 18.3378 143.5 18.177 143.763 18.0578C144.037 17.9494 144.326 17.885 144.62 17.8672H152.102C152.541 17.8724 152.97 18.0061 153.334 18.2518C153.698 18.4975 153.982 18.8444 154.151 19.2497C154.26 19.5236 154.324 19.813 154.342 20.1071V22.1139H152.15V20.1071H144.667V24.4909H152.149C152.588 24.4962 153.016 24.6299 153.381 24.8755C153.745 25.1212 154.029 25.4681 154.198 25.8734C154.307 26.1473 154.371 26.4367 154.389 26.7308V31.1146C154.384 31.5539 154.25 31.982 154.004 32.3461C153.759 32.7103 153.412 32.9945 153.006 33.1639C152.733 33.2723 152.443 33.3367 152.149 33.3545H144.476C144.037 33.3493 143.609 33.2156 143.245 32.9699C142.881 32.7242 142.596 32.3773 142.427 31.972C142.319 31.6981 142.254 31.4087 142.236 31.1146V29.1078H144.428V31.1146H152.101V26.7308H144.619Z" fill="white"></path><path d="M158.248 17.9141H169.495V20.106H160.441V24.5378H168.162V26.7297H160.441V31.1147H169.495V33.3066H158.248V17.9141Z" fill="white"></path><path d="M172.783 20.1071C172.802 19.5176 173.041 18.9566 173.452 18.5339C173.663 18.3378 173.905 18.177 174.167 18.0578C174.441 17.9494 174.73 17.885 175.024 17.8672H183.364C183.803 17.8724 184.231 18.0061 184.595 18.2518C184.959 18.4975 185.244 18.8444 185.413 19.2497C185.521 19.5236 185.586 19.813 185.604 20.1071V22.1139H183.412V20.1071H175.072V31.1158H183.412V29.1089H185.605V31.1158C185.6 31.555 185.466 31.9831 185.22 32.3472C184.974 32.7114 184.628 32.9957 184.222 33.165C183.948 33.2734 183.659 33.3378 183.365 33.3556H175.025C174.586 33.3504 174.158 33.2167 173.794 32.971C173.43 32.7254 173.145 32.3785 172.976 31.9731C172.868 31.6992 172.803 31.4098 172.785 31.1158V20.1071" fill="white"></path><path d="M189.083 17.9141H191.275V31.1147H200.092V17.9141H202.284V31.1147C202.279 31.5539 202.145 31.982 201.899 32.3462C201.654 32.7103 201.307 32.9946 200.901 33.1639C200.627 33.2724 200.338 33.3367 200.044 33.3546H191.227C190.788 33.3493 190.36 33.2156 189.996 32.97C189.632 32.7243 189.347 32.3774 189.178 31.9721C189.069 31.6981 189.005 31.4088 188.987 31.1147V17.9141" fill="white"></path><path d="M218.439 23.395C218.439 25.539 217.533 26.7788 215.675 27.0642L218.581 33.3077H216.151L213.291 27.1601H208.478V33.3077H206.286V17.9141H214.722C217.2 17.9141 218.439 19.1527 218.439 21.6791V23.395ZM208.431 24.9682H214.531C214.991 24.9953 215.446 24.8604 215.818 24.5868C216.106 24.2232 216.242 23.7622 216.199 23.3002V21.7739C216.226 21.3137 216.091 20.8584 215.818 20.4873C215.454 20.1991 214.993 20.0624 214.531 20.106H208.431V24.9682Z" fill="white"></path><path d="M224.3 17.9141H222.108V33.3066H224.3V17.9141Z" fill="white"></path><path d="M226.922 17.9141H239.265V20.106H234.213V33.3066H232.022V20.106H226.922V17.9141Z" fill="white"></path><path d="M242.934 17.9141L247.413 25.1097L251.893 17.9141H254.466L248.509 27.2069V33.3066H246.317V27.2069L240.36 17.9141H242.934Z" fill="white"></path><path d="M44.4436 38.4802L22.8008 1" stroke="#5B5B5B" strokeWidth="0.28" strokeMiterlimit="10"></path><path d="M1.1582 13.4844L44.4438 38.4842" stroke="#5B5B5B" strokeWidth="0.28" strokeMiterlimit="10"></path><path d="M44.4438 13.4844L1.1582 38.4842" stroke="#5B5B5B" strokeWidth="0.28" strokeMiterlimit="10"></path><path d="M22.8008 50.9996V1" stroke="#5B5B5B" strokeWidth="0.28" strokeMiterlimit="10"></path><path d="M44.4438 38.4844H1.1582" stroke="#5B5B5B" strokeWidth="0.28" strokeMiterlimit="10"></path><path d="M22.801 1L1.1582 38.4802" stroke="#5B5B5B" strokeWidth="0.28" strokeMiterlimit="10"></path><path d="M44.4438 13.4844H1.1582" stroke="#5B5B5B" strokeWidth="0.28" strokeMiterlimit="10"></path><path d="M22.8008 51.0036L44.4436 13.4844" stroke="#5B5B5B" strokeWidth="0.28" strokeMiterlimit="10"></path><path d="M1.1582 13.4844L22.801 51.0036" stroke="#5B5B5B" strokeWidth="0.28" strokeMiterlimit="10"></path><path d="M44.4438 38.4802V13.4804L22.801 1L1.1582 13.4804V38.4802L22.801 50.9996L44.4438 38.4802Z" stroke="#5B5B5B" strokeWidth="0.28" strokeMiterlimit="10"></path><path d="M1.1582 26H44.4438" stroke="#5B5B5B" strokeWidth="0.28" strokeMiterlimit="10"></path><path d="M11.7822 44.6422L33.7807 7.35938" stroke="#5B5B5B" strokeWidth="0.28" strokeMiterlimit="10"></path><path d="M33.2665 44.9608L12.2949 7.04688" stroke="#5B5B5B" strokeWidth="0.28" strokeMiterlimit="10"></path><path d="M33.4651 19.7636L29.9497 13.6416L15.7323 13.4844L11.8223 19.7636L33.4651 32.244L29.555 38.4875H15.4168L11.8223 32.244" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M33.6225 7.35503L22.6428 1L1 13.4804V38.4802L22.6428 50.9996L33.1487 44.9568" stroke="#5B5B5B" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    );
};

export const Ackee: React.FC<IconProps> = ({
    width = 256,
    height = 52,
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 256 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M145.238 3.375H144.045V36.4387H145.238V3.375Z" fill="white"/>
        <path d="M206.613 25.7812H204.551V35.3262H206.613V25.7812Z" fill="white"/>
        <path d="M206.613 22.1016H204.551V24.1643H206.613V22.1016Z" fill="white"/>
        <path d="M167.038 25.4375C164.227 25.4375 162.043 27.7024 162.043 30.5942C162.043 33.4456 164.369 35.7509 167.2 35.7509C168.797 35.7509 170.274 35.0229 171.264 33.7894L169.424 32.7985C168.838 33.4051 168.049 33.7287 167.2 33.7287C165.905 33.7287 164.753 32.9198 164.288 31.7267L164.247 31.6458H172.033V30.6347C172.033 27.7024 169.849 25.4375 167.038 25.4375ZM164.227 29.5831L164.247 29.5022C164.652 28.2686 165.744 27.5002 167.018 27.5002C168.292 27.5002 169.384 28.2889 169.788 29.5022L169.808 29.5831H164.227Z" fill="white"/>
        <path d="M156.745 29.6268C154.884 29.3436 154.541 28.919 154.541 28.3325C154.541 27.6045 155.167 27.1798 156.219 27.1798C157.21 27.1798 157.897 27.645 158.12 28.5347H160.263C160.021 26.5934 158.585 25.4609 156.199 25.4609C153.914 25.4609 152.336 26.6945 152.336 28.4336C152.336 30.1121 153.368 30.9614 155.895 31.4063C157.837 31.7703 158.221 32.1343 158.221 32.7815C158.221 33.5499 157.513 34.015 156.361 34.015C155.511 34.015 154.46 33.7724 154.116 32.4579H152.013C152.255 34.5408 153.792 35.7542 156.34 35.7542C158.787 35.7542 160.425 34.4599 160.425 32.5792C160.445 30.9008 159.353 30.011 156.745 29.6268Z" fill="white"/>
        <path d="M192.094 30.9614C192.094 32.5185 191.002 33.6106 189.424 33.6106C187.847 33.6106 186.755 32.5185 186.755 30.9614V25.8047H184.611V30.9614C184.611 32.3163 185.097 33.5701 186.027 34.4397C186.917 35.289 188.13 35.7744 189.424 35.7744C190.719 35.7744 191.932 35.3092 192.822 34.4397C193.732 33.5903 194.237 32.3365 194.237 30.9614V25.8047H192.094V30.9614Z" fill="white"/>
        <path d="M178.787 27.4988C179.737 27.4988 180.647 27.9235 181.234 28.6919L183.094 27.7819C182.144 26.3461 180.546 25.4766 178.807 25.4766C175.956 25.4766 173.65 27.7819 173.65 30.6333C173.65 33.4847 175.976 35.79 178.807 35.79C180.546 35.79 182.144 34.9407 183.094 33.4847L181.234 32.5746C180.647 33.3431 179.758 33.7678 178.787 33.7678C177.068 33.7678 175.693 32.3724 175.693 30.6535C175.673 28.8739 177.088 27.4988 178.787 27.4988Z" fill="white"/>
        <path d="M211.689 23.2969H209.546V25.8247V27.8671V30.941C209.546 32.2959 210.031 33.5497 210.961 34.4192C211.164 34.6214 211.346 34.7832 211.588 34.9046C212.397 35.4303 213.348 35.7135 214.359 35.7135H215.228V33.5699H214.359C212.781 33.5699 211.689 32.4779 211.689 30.9207V27.8671H215.228V25.8247H211.689V23.2969Z" fill="white"/>
        <path d="M198.989 25.801H196.846V35.3662H198.989V31.3015C198.989 29.3804 200.546 27.803 202.488 27.803V25.6797C201.153 25.6797 199.96 26.165 198.989 26.9335V25.801Z" fill="white"/>
        <path d="M223.479 25.864L221.699 33.3058H221.376C221.153 33.3058 220.951 33.0834 220.87 32.8407L219.091 25.8438H216.866L218.787 33.3867C219.091 34.5394 220.102 35.3281 221.214 35.409L220.324 39.1906H222.407L223.297 35.4494H223.317V35.3685L225.602 25.864H223.479Z" fill="white"/>
        <path d="M172.295 9.75C169.444 9.75 167.139 12.0756 167.139 14.9067C167.139 17.7379 169.464 20.0634 172.295 20.0634C175.147 20.0634 177.452 17.7379 177.452 14.9067C177.452 12.0756 175.127 9.75 172.295 9.75ZM172.295 17.9199C170.637 17.9199 169.282 16.565 169.282 14.9067C169.282 13.2485 170.637 11.8936 172.295 11.8936C173.954 11.8936 175.309 13.2485 175.309 14.9067C175.309 16.565 173.954 17.9199 172.295 17.9199Z" fill="white"/>
        <path d="M247.078 11.041C246.209 10.2119 244.995 9.72656 243.681 9.72656C242.71 9.72656 241.78 9.98945 240.991 10.495V10.131H238.848V14.5395V15.6113V19.6962H240.991V14.4991C240.991 12.9419 242.103 11.8701 243.681 11.8701C245.258 11.8701 246.37 12.9622 246.37 14.4991V19.6558H248.514V14.4991C248.514 13.1442 248.008 11.9106 247.078 11.041Z" fill="white"/>
        <path d="M214.44 9.74572C213.469 9.74572 212.539 10.0086 211.75 10.5142V6.32812H209.606V14.5384V15.6102V19.6952H211.75V14.5182C211.75 12.9611 212.862 11.8893 214.44 11.8893C216.017 11.8893 217.129 12.9813 217.129 14.5182V19.6749H219.273V14.5182C219.273 13.1633 218.767 11.9297 217.837 11.04C216.947 10.1906 215.734 9.74572 214.44 9.74572Z" fill="white"/>
        <path d="M157.169 9.74572C156.037 9.74572 155.006 10.1097 154.156 10.7164V6.32812H152.013V19.6749H154.156V19.0683C155.006 19.6749 156.057 20.0389 157.169 20.0389C160.021 20.0389 162.326 17.7134 162.326 14.8822C162.326 12.0511 160.021 9.74572 157.169 9.74572ZM157.169 17.9156C155.511 17.9156 154.156 16.5607 154.156 14.9024C154.156 13.2442 155.511 11.8893 157.169 11.8893C158.828 11.8893 160.183 13.2442 160.183 14.9024C160.183 16.5607 158.848 17.9156 157.169 17.9156Z" fill="white"/>
        <path d="M229.242 10.8016L229.141 10.7207C228.271 10.0736 227.22 9.75 226.148 9.75C223.297 9.75 220.991 12.0756 220.991 14.9067C220.991 17.7379 223.317 20.0634 226.148 20.0634C227.24 20.0634 228.271 19.7399 229.141 19.0928L229.242 19.0119V19.6792H231.284V10.1342H229.242V10.8016ZM226.148 18.021C224.429 18.021 223.034 16.6256 223.034 14.9067C223.034 13.1878 224.429 11.7925 226.148 11.7925C227.867 11.7925 229.242 13.1878 229.242 14.9067C229.242 16.6256 227.847 18.021 226.148 18.021Z" fill="white"/>
        <path d="M183.54 11.7722C184.49 11.7722 185.4 12.1969 185.987 12.9654L187.847 12.0554C186.897 10.6196 185.299 9.75 183.56 9.75C180.709 9.75 178.403 12.0554 178.403 14.9067C178.403 17.7581 180.729 20.0634 183.56 20.0634C185.299 20.0634 186.897 19.2141 187.847 17.7581L185.987 16.8481C185.4 17.6165 184.51 18.0412 183.54 18.0412C181.821 18.0412 180.426 16.6459 180.426 14.9269C180.426 13.1878 181.821 11.7722 183.54 11.7722Z" fill="white"/>
        <path d="M203.559 11.7722C204.51 11.7722 205.42 12.1969 206.006 12.9654L207.867 12.0554C206.916 10.6196 205.319 9.75 203.58 9.75C200.728 9.75 198.423 12.0554 198.423 14.9067C198.423 17.7581 200.748 20.0634 203.58 20.0634C205.319 20.0634 206.916 19.2141 207.867 17.7581L206.006 16.8481C205.42 17.6165 204.53 18.0412 203.559 18.0412C201.84 18.0412 200.465 16.6459 200.445 14.9269C200.445 13.1878 201.84 11.7722 203.559 11.7722Z" fill="white"/>
        <path d="M198.322 10.1502H195.673L192.619 13.8104H191.426V6.32812H189.384V19.6749H191.426V16.0147H192.619L195.673 19.6749H198.322L194.379 14.9227L198.322 10.1502Z" fill="white"/>
        <path d="M165.824 6.32812H163.762V19.6749H165.824V6.32812Z" fill="white"/>
        <path d="M236.259 10.1328H234.196V19.6778H236.259V10.1328Z" fill="white"/>
        <path d="M236.259 6.45312H234.196V8.51581H236.259V6.45312Z" fill="white"/>
        <path d="M138.363 22.2999C138.363 14.9996 132.822 9.29688 125.744 9.29688C118.666 9.29688 113.125 14.9996 113.125 22.2999C113.125 29.4789 118.949 35.3029 126.128 35.3029C130.173 35.3029 133.893 33.4829 136.361 30.308L131.75 27.7802C130.274 29.2969 128.272 30.1462 126.128 30.1462C122.892 30.1462 119.94 28.124 118.787 25.0704L118.706 24.8479H138.363V22.2999ZM118.646 19.7317L118.727 19.5092C119.778 16.4354 122.528 14.4334 125.744 14.4334C128.959 14.4334 131.709 16.4152 132.761 19.5092L132.842 19.7317H118.646Z" fill="white"/>
        <path d="M109.201 22.2999C109.201 14.9996 103.661 9.29688 96.5827 9.29688C89.5048 9.29688 83.9639 14.9996 83.9639 22.2999C83.9639 29.4789 89.7879 35.3029 96.9669 35.3029C101.011 35.3029 104.732 33.4829 107.199 30.308L102.589 27.7802C101.112 29.2969 99.1105 30.1462 96.9669 30.1462C93.7313 30.1462 90.7788 28.124 89.6262 25.0704L89.5453 24.8479H109.201V22.2999ZM89.4846 19.7317L89.5655 19.5092C90.617 16.4354 93.3673 14.4334 96.5827 14.4334C99.798 14.4334 102.548 16.4152 103.6 19.5092L103.681 19.7317H89.4846Z" fill="white"/>
        <path d="M45.4405 35.3029C38.2616 35.3029 32.4375 29.4789 32.4375 22.2999C32.4375 15.1209 38.2616 9.29688 45.4405 9.29688C49.8086 9.29688 53.8531 11.4607 56.2798 15.1007L51.6084 17.4263C50.1119 15.5254 47.8672 14.4334 45.4405 14.4334C41.1129 14.4334 37.574 17.9723 37.574 22.2999C37.574 26.6275 41.1129 30.1664 45.4405 30.1664C47.8672 30.1664 50.0917 29.0744 51.6084 27.1735L56.2798 29.4991C53.8733 33.1189 49.8086 35.3029 45.4405 35.3029Z" fill="white"/>
        <path d="M22.892 10.2473V11.9258L22.6291 11.7438C20.4047 10.126 17.7757 9.29688 15.0255 9.29688C7.84653 9.29688 2.02246 15.1209 2.02246 22.2999C2.02246 29.4789 7.84653 35.3029 15.0255 35.3029C17.7757 35.3029 20.4047 34.4536 22.6291 32.856L22.892 32.674V34.3525H28.0487V10.2473H22.892ZM15.0255 30.1462C10.6979 30.1462 7.15896 26.6073 7.15896 22.2797C7.15896 17.9521 10.6979 14.4132 15.0255 14.4132C19.3531 14.4132 22.892 17.9521 22.892 22.2797C22.892 26.6073 19.3531 30.1462 15.0255 30.1462Z" fill="white"/>
        <path d="M76.1377 34.356L68.4127 25.0739H65.3592V34.356H60.2227V0.625H65.3592V19.5128H68.4127L76.1175 10.2509H82.8111L72.801 22.3035L82.8313 34.356H76.1377Z" fill="white"/>
      </svg>
    );
};

export const Discord: React.FC<IconProps> = ({
    width = 24,
    height = 20,
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 20" fill="none">
        <path d="M20.3303 2.22781C18.7767 1.50093 17.1156 0.972672 15.3789 0.671875C15.1656 1.05749 14.9164 1.57614 14.7446 1.98873C12.8985 1.71109 11.0693 1.71109 9.25716 1.98873C9.08539 1.57614 8.83055 1.05749 8.61536 0.671875C6.87681 0.972672 5.21376 1.50287 3.66019 2.23166C0.526643 6.96686 -0.322811 11.5845 0.101917 16.1365C2.18025 17.6885 4.19441 18.6313 6.17457 19.2483C6.66349 18.5754 7.09953 17.8601 7.47518 17.1063C6.75975 16.8344 6.07453 16.499 5.42707 16.1095C5.59884 15.9822 5.76686 15.8492 5.92918 15.7123C9.87819 17.5594 14.1689 17.5594 18.0707 15.7123C18.235 15.8492 18.403 15.9822 18.5728 16.1095C17.9235 16.5009 17.2364 16.8363 16.521 17.1082C16.8966 17.8601 17.3308 18.5774 17.8216 19.2502C19.8036 18.6333 21.8197 17.6905 23.898 16.1365C24.3964 10.8595 23.0467 6.28434 20.3303 2.22781ZM8.01318 13.337C6.82772 13.337 5.85555 12.2303 5.85555 10.8826C5.85555 9.53497 6.80696 8.42636 8.01318 8.42636C9.21942 8.42636 10.1916 9.53303 10.1708 10.8826C10.1727 12.2303 9.21942 13.337 8.01318 13.337ZM15.9867 13.337C14.8013 13.337 13.8291 12.2303 13.8291 10.8826C13.8291 9.53497 14.7805 8.42636 15.9867 8.42636C17.193 8.42636 18.1651 9.53303 18.1444 10.8826C18.1444 12.2303 17.193 13.337 15.9867 13.337Z" fill="white"/>
        </svg>
    );
};

export const Ethereum: React.FC<IconProps> = ({
    width = 29,
    height = 28,
    fill = '#bbff9b',
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.8051 2.92192C14.7178 2.92334 14.6326 2.94882 14.559 2.9955C14.4855 3.04217 14.4265 3.10821 14.3887 3.18623L7.83235 13.4012C7.82154 13.417 7.81171 13.4334 7.80293 13.4504C7.80262 13.4507 7.80232 13.451 7.80201 13.4513C7.79519 13.465 7.78906 13.479 7.78362 13.4933C7.77233 13.5224 7.76401 13.5527 7.7588 13.5835C7.75354 13.6142 7.75138 13.6453 7.75237 13.6764C7.75237 13.6767 7.75237 13.6771 7.75237 13.6774C7.75284 13.6926 7.75407 13.7078 7.75605 13.7229C7.75663 13.726 7.75724 13.729 7.75789 13.732C7.76166 13.7552 7.76719 13.7781 7.77443 13.8004C7.7756 13.8047 7.77682 13.8089 7.77811 13.8132C7.77811 13.8135 7.77811 13.8138 7.77811 13.8141C7.78321 13.8286 7.78904 13.8429 7.79558 13.8569C7.79558 13.8572 7.79558 13.8575 7.79558 13.8578C7.80227 13.8715 7.80963 13.8849 7.81764 13.8979C7.81764 13.8982 7.81764 13.8985 7.81764 13.8988C7.82558 13.912 7.83417 13.9248 7.84338 13.9371C7.84785 13.9427 7.85245 13.9481 7.85717 13.9535C7.86249 13.9603 7.86801 13.967 7.87371 13.9736C7.88389 13.985 7.89463 13.996 7.90589 14.0064C7.9062 14.0067 7.9065 14.007 7.90681 14.0073C7.92976 14.0279 7.9547 14.0462 7.98127 14.062C7.98158 14.0623 7.98188 14.0626 7.98219 14.0629C7.98463 14.0641 7.98708 14.0653 7.98954 14.0665C7.98985 14.0668 7.99016 14.0671 7.99046 14.0674L14.5201 17.7668C14.6028 17.8315 14.705 17.8669 14.8103 17.8672C14.9156 17.8675 15.018 17.8328 15.1011 17.7686L21.6252 14.072C21.6286 14.0702 21.632 14.0684 21.6353 14.0665C21.6457 14.0605 21.6558 14.0541 21.6657 14.0474C21.6688 14.0453 21.6718 14.0432 21.6749 14.041C21.677 14.0392 21.6792 14.0374 21.6813 14.0355C21.6911 14.0289 21.7006 14.0219 21.7098 14.0146C21.7104 14.014 21.711 14.0134 21.7116 14.0128C21.7135 14.0112 21.7153 14.0097 21.7172 14.0082C21.7271 13.9992 21.7366 13.9898 21.7457 13.9799C21.7564 13.9686 21.7665 13.9567 21.776 13.9444C21.7852 13.9324 21.7938 13.9199 21.8017 13.907C21.802 13.9067 21.8023 13.9064 21.8026 13.9061C21.803 13.9052 21.8033 13.9043 21.8036 13.9034C21.8115 13.8913 21.8189 13.8788 21.8256 13.866C21.8256 13.8657 21.8256 13.8654 21.8256 13.8651C21.831 13.8544 21.8359 13.8434 21.8403 13.8323C21.8416 13.829 21.8428 13.8256 21.844 13.8223C21.8453 13.8186 21.8465 13.815 21.8477 13.8113C21.8511 13.8008 21.8542 13.7902 21.8569 13.7794C21.8572 13.7788 21.8575 13.7782 21.8578 13.7776C21.8581 13.7767 21.8584 13.7758 21.8587 13.7749C21.8622 13.7607 21.8649 13.7464 21.867 13.732C21.869 13.7203 21.8705 13.7084 21.8716 13.6965C21.8716 13.6953 21.8716 13.6941 21.8716 13.6929C21.8726 13.6786 21.8729 13.6643 21.8725 13.65C21.8722 13.6409 21.8716 13.6318 21.8707 13.6227C21.8701 13.6129 21.8691 13.6032 21.8679 13.5935C21.8679 13.5932 21.8679 13.5929 21.8679 13.5926C21.8676 13.5911 21.8673 13.5896 21.867 13.588C21.8648 13.5749 21.862 13.5618 21.8587 13.5489C21.8587 13.5482 21.8587 13.5476 21.8587 13.547C21.8558 13.5354 21.8524 13.5238 21.8486 13.5124C21.8474 13.509 21.8462 13.5057 21.8449 13.5024C21.8435 13.4987 21.8419 13.4951 21.8403 13.4914C21.8364 13.481 21.8321 13.4706 21.8275 13.4604C21.8272 13.4601 21.8269 13.4598 21.8266 13.4595C21.8262 13.4586 21.8259 13.4577 21.8256 13.4568C21.8189 13.4437 21.8115 13.4309 21.8036 13.4185C21.8027 13.417 21.8017 13.4155 21.8008 13.414C21.8002 13.4127 21.7996 13.4115 21.799 13.4103L21.7843 13.3884L15.2344 3.18349C15.1952 3.10404 15.134 3.03727 15.058 2.99096C14.982 2.94465 14.8943 2.9207 14.8051 2.92192ZM14.3418 4.99809V10.5531L9.43925 12.6356L14.3418 4.99809ZM15.2831 4.99809L20.1856 12.6356L15.2831 10.5531V4.99809ZM14.3418 11.5684V16.5893L9.27838 13.7211L14.3418 11.5684ZM15.2831 11.5684L20.3465 13.7211L15.2831 16.5893V11.5684ZM21.4055 15.5266C21.3223 15.5261 21.2405 15.5475 21.1683 15.5886L14.8124 19.1895L8.45654 15.5886C8.3881 15.5499 8.31098 15.5289 8.23223 15.5275C8.14436 15.5258 8.05777 15.5485 7.98225 15.5931C7.90673 15.6377 7.84531 15.7023 7.80493 15.7797C7.76456 15.8571 7.74685 15.9442 7.75381 16.031C7.76076 16.1179 7.79211 16.2011 7.8443 16.2712L14.4024 25.0954C14.4434 25.1673 14.5029 25.2271 14.5748 25.2687C14.6467 25.3104 14.7284 25.3324 14.8117 25.3325C14.895 25.3325 14.9768 25.3107 15.0488 25.2692C15.1208 25.2278 15.1804 25.1681 15.2215 25.0963L21.7806 16.2712C21.8324 16.202 21.8638 16.1199 21.8714 16.034C21.879 15.9481 21.8624 15.8619 21.8236 15.7848C21.7847 15.7077 21.7251 15.6427 21.6513 15.5971C21.5775 15.5516 21.4925 15.5272 21.4055 15.5266ZM9.92371 17.4952L14.3418 19.9988V23.4403L9.92371 17.4952ZM19.7012 17.4952L15.2831 23.4403V19.9988L19.7012 17.4952Z" fill={fill}></path></svg>
    );
};
