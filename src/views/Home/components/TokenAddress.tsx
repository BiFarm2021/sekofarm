import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon, Skeleton, LinkExternal } from '@becoswap-libs/uikit'
import max from 'lodash/max'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'contexts/Localization'
import BigNumber from 'bignumber.js'
import { getFarmApr } from 'utils/apr'
import { useFarms, usePriceCakeBusd, useGetApiPrices } from 'state/hooks'
import { getAddress } from 'utils/addressHelpers'

const StyledFarmStakingCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }
  transition: opacity 200ms;
  &:hover {
    opacity: 0.65;
  }
`
const StyledLinkExternal = styled(LinkExternal)`
  font-weight: 400;
`

const CardMidContent = styled(Heading).attrs({ size: 'xl' })`
  line-height: 44px;
`
const TokenAddress = () => {
  const { t } = useTranslation()
  const { data: farmsLP } = useFarms()
  const prices = useGetApiPrices()
  const cakePrice = usePriceCakeBusd()

 
  return (
    <StyledFarmStakingCard>
      
      
      
      
      
      
        
        <CardBody>
          <Heading color="contrast" size="lg">
            BiYield Token Contract
          </Heading>
            <StyledLinkExternal href="https://bscscan.com/token/">
                <Flex justifyContent="space-between">
                  <Heading color="contrast" size="lg">
                    SOON
                  </Heading>
                </Flex>
             </StyledLinkExternal>
        </CardBody>
      
    </StyledFarmStakingCard>
  )
}

export default TokenAddress
