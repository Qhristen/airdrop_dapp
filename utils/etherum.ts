
import { getInjectiveAddress } from '@injectivelabs/sdk-ts'

const getEthereum = () => {
  if (!window.ethereum) {
    throw new Error('Metamask extension not installed')
  }
  
  return window.ethereum
}

export const ethereum = async () =>{
    const ethereum = getEthereum()
    const addresses = await ethereum.request({
      method: 'eth_requestAccounts',
    }) /** these are evm addresses */
    
    const injectiveAddresses = addresses.map(getInjectiveAddress)
    console.log(injectiveAddresses, 'et')
    return injectiveAddresses

}