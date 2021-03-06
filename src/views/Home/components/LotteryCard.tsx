import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button, useModal } from '@becoswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTranslation } from 'contexts/Localization'
import { useMultiClaimLottery } from 'hooks/useBuyLottery'
import { useTotalClaim} from 'hooks/useTickets'
import { useApproval } from 'hooks/useApproval'
import { useLotteryAllowance } from 'hooks/useAllowance'
import useGetLotteryHasDrawn from 'hooks/useGetLotteryHasDrawn'
import useTokenBalance from 'hooks/useTokenBalance'
import { getCakeAddress } from 'utils/addressHelpers'
import BuyTicketModal from 'views/Lottery/components/TicketCard/BuyTicketModal'

import PurchaseWarningModal from 'views/Lottery/components/TicketCard/PurchaseWarningModal'
import UnlockButton from 'components/UnlockButton'
import CakeWinnings from './CakeWinnings'
import LotteryJackpot from './LotteryJackpot'

const StyledLotteryCard = styled(Card)`
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

const Actions = styled.div`
  display: flex;
  margin-top: 24px;
  button {
    flex: 1 0 50%;
  }
`

const LotteryCard = () => {
  const { account } = useWeb3React()
  const lotteryHasDrawn = useGetLotteryHasDrawn()

  const [requestClaim, setRequestedClaim] = useState(false)
  const { t } = useTranslation()
  const { claimAmount, setLastUpdated } = useTotalClaim()
  const { onMultiClaim } = useMultiClaimLottery()
  const allowance = useLotteryAllowance()
  const [onPresentApprove] = useModal(<PurchaseWarningModal />)
  const { handleApprove, requestedApproval } = useApproval(onPresentApprove)
  const cakeBalance = useTokenBalance(getCakeAddress())
  const handleClaim = useCallback(async () => {
    try {
      setRequestedClaim(true)
      const txHash = await onMultiClaim()
      // user rejected tx or didn't go thru
      if (txHash) {
        setRequestedClaim(false)
        setLastUpdated()
      }
    } catch (e) {
      console.error(e)
    }
  }, [onMultiClaim, setRequestedClaim, setLastUpdated])

  const renderLotteryTicketButtonBuyOrApprove = () => {
    if (!allowance.toNumber()) {
      return (
        <Button width="100%" disabled={requestedApproval} onClick={handleApprove}>
          {t('Approve BIRDA')}
        </Button>
      )
    }
    if (lotteryHasDrawn) {
      return <Button disabled> {t('On sale soon')}</Button>
    }
    return (
      <Button id="dashboard-buy-tickets" variant="secondary" onClick={onPresentBuy}>
        {t('Buy Tickets')}
      </Button>
    )
  }

  const [onPresentBuy] = useModal(<BuyTicketModal max={cakeBalance} />)

  return (
    <StyledLotteryCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          {t('Farming & Stacking')}
        </Heading>
        <CardImage src="/images/pools/birda-birda.png" alt="birda logo" width={64} height={64} />
        <Block>
          <Label>{t('Starts Block ')}:</Label>
          <Heading size="xl" mb="24px">
          {t('#9555555')}
        </Heading>
        </Block>
        <Block>
          <Label>{t('Estimated Target Date:')}:</Label>
          <Label>{t('')}:</Label>
          <Label>{t('Wed Jul 28 2021 22:29:17 GMT+0700')}:</Label>
          <Label>{t('')}:</Label>
          <Label>{t('Countdown Link:')}:</Label><a href="https://bscscan.com/block/countdown/9555555">Click Here</a>
        </Block>
        
      </CardBody>
    </StyledLotteryCard>
  )
}

export default LotteryCard
