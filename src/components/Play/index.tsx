'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@mantine/core'
import { ethers } from 'ethers'
import { Container } from '@mantine/core'
import { CONTRACT_ADDRESS, PRIVATE_KEY } from '../../../contract'
import ABI from '../../../contract/abi.json'
import { PlayContainer } from './style'

declare var window: any

const Play = () => {
  const rpc = 'https://data-seed-prebsc-1-s3.binance.org:8545'
  const provider = new ethers.providers.JsonRpcProvider(rpc)

  const [walletAddress, setWalletAddress] = useState<string>()

  const requestAccount = async () => {
    if (window.ethereum) {
      console.log('detected')
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        setWalletAddress(accounts[0])
        console.log('account : ', accounts)
      } catch (err) {
        console.log(err)
      }
    } else {
      console.log('Meta mask not detected')
    }

    // return await ethers.utils.formatUnits(balance, 18)
  }

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()

      const provider = new ethers.providers.Web3Provider(window.ethereum)

      await provider.send('eth_requestAccounts', [])

      // The MetaMask plugin also allows signing transactions to
      // send ether and pay to change state within the blockchain.
      // For this, you need the account signer...

      const signer = provider.getSigner()

      console.log('Signer : ', signer)

      console.log('Provider : ', provider)
    }
  }

  const connectSmartContract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const wallet = new ethers.Wallet(PRIVATE_KEY, provider)
    const lastMoonContract = new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet)

    const currentPrice = await lastMoonContract.currentPrice()
    // const bid = await lastMoonContract.bid()
    const assetExpiry = await lastMoonContract.assetExpiry()
    console.log('Asset Expiry : ', assetExpiry)

    // const bid = await lastMoonContract.bid()

    // console.log('Bid : ', bid)

    // const restart = await lastMoonContract.restart()

    // console.log('Restart : ', restart)

    // console.log('Bid : ', bid)
    const lastMoonAsset = await lastMoonContract.assetExpiry()
    // const claimReward = await lastMoonContract

    console.log('Contract : ', lastMoonContract)
    console.log(
      'Last Moon Current price : ',
      ethers.utils.formatEther(currentPrice)
    )

    const bid = await lastMoonContract.bid({
      value: ethers.utils.parseEther('0.0001'),
    })

    console.log('Bid : ', bid)

    console.log('Asset : ', ethers.utils.formatEther(lastMoonAsset))
  }

  const handleClick = async () => {
    // alert('clicked')
    // console.log('balance : ', await requestAccount())
  }

  return (
    <PlayContainer>
      <Container size="xl" p="xl">
        <Button onClick={requestAccount}>Request Account</Button>
        <h3>Wallet Address: {walletAddress} </h3>
        <Button onClick={connectWallet}>Connect Wallet</Button>

        <Button onClick={connectSmartContract}>Connect Smart Contract</Button>
      </Container>
    </PlayContainer>
  )
}

export default Play
