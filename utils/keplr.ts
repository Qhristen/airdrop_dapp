
import { getInjectiveAddress } from '@injectivelabs/sdk-ts'
import { ChainId } from '@injectivelabs/ts-types'

const getKeplr = () => {
  if (!window.keplr) {
    throw new Error('Keplr extension not installed')
  }
  
  return window.keplr
}

export const keplr = async () => {
  const keplr = getKeplr()
  const chainId = ChainId.Mainnet
  await keplr.enable(chainId)
  const injectiveAddresses = await keplr.getOfflineSigner(chainId).getAccounts()

  return injectiveAddresses
}