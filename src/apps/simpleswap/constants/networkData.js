export const networkData = [
  {'shortName':'cfg','chainId':2031},{'shortName':'eth','chainId':1},
  {'shortName':'BTC','chainId':2203},{'shortName':'avax','chainId':43114},{'shortName':'matic','chainId':137},{'shortName':'bnb','chainId':56},{'shortName':'celo','chainId':42220},{'shortName':'manta','chainId':169},{'shortName':'mode','chainId':34443},{'shortName':'near','chainId':397},{'shortName':'OAS','chainId':248},{'shortName':'xdc','chainId':50},{'shortName':'zil','chainId':32769},{'shortName':'base','chainId':8453},{'shortName':'cro','chainId':25},{'shortName':'linea','chainId':59144},{'shortName':'fra','chainId':2152},{'shortName':'gmmt','chainId':8989},{'shortName':'flr','chainId':14},{'shortName':'kcc','chainId':2425},{'shortName':'lukso','chainId':42},{'shortName':'okt','chainId':66},{'shortName':'vic','chainId':88},{'shortName':'xpr','chainId':110},{'shortName':'fsn','chainId':32659},{'shortName':'heco','chainId':128},{'shortName':'exp','chainId':2},{'shortName':'Brise','chainId':32520},{'shortName':'aca','chainId':787},{'shortName':'cfx','chainId':1030},{'shortName':'ckb','chainId':71393},{'shortName':'core','chainId':1116},{'shortName':'etc','chainId':61},{'shortName':'astr','chainId':592},{'shortName':'sys','chainId':57},{'shortName':'kava','chainId':2222},{'shortName':'eos','chainId':17777},{'shortName':'iris','chainId':6688},{'shortName':'sei','chainId':1329},{'shortName':'ftn','chainId':5165},{'shortName':'REI','chainId':47805},{'shortName':'glq','chainId':614},{'shortName':'wemix','chainId':1111},{'shortName':'gt','chainId':86},{'shortName':'blast','chainId':238},{'shortName':'maro','chainId':8848},{'shortName':'MXC','chainId':5167004},{'shortName':'alph','chainId':8738},{'shortName':'tara','chainId':841},{'shortName':'TT','chainId':108},{'shortName':'wan','chainId':888},{'shortName':'space','chainId':8227},{'shortName':'canto','chainId':7700},{'shortName':'mapo','chainId':22776},{'shortName':'neon','chainId':259},{'shortName':'sdn','chainId':336},{'shortName':'tenet','chainId':1559},{'shortName':'vsc','chainId':8889},{'shortName':'cmp','chainId':512512},{'shortName':'kar','chainId':686},{'shortName':'DFI','chainId':1130},{'shortName':'sgb','chainId':19},{'shortName':'tao','chainId':558},{'shortName':'xai','chainId':660279},{'shortName':'evmos','chainId':9001},{'shortName':'vlx','chainId':106},{'shortName':'hmnd','chainId':5234},{'shortName':'ewt','chainId':246},{'shortName':'beam','chainId':4337},{'shortName':'EVC','chainId':1010}]
export const getNetworkByChainId = (chainId) => networkData.find(el=> el.chainId == chainId)
export const getChainIdByNetwork = (network) => networkData.find(el=> el.shortName.toLowerCase() === network.toLowerCase())