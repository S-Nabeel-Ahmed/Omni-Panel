import React from 'react'
// import worldcoinindex from '../../images/worldcoinindex.png'
// import coingecko from '../../images/coingecko.png'
// import coinsbit from '../../images/coinsbit.png'
// import pancakeswap from '../../images/pancakeswap.png'
// import binance from '../../images/binance.png'
// import coinmarket from '../../images/coinmarket.png'
import { Button } from '../Button/index'

// const coinimages = [worldcoinindex, coingecko, coinsbit, pancakeswap, binance, coinmarket]

const Coins: React.FC = () => {
  return (
    <div>
      <h4 className="text-center h2" style={{ color: '#122e55' }}>
        BUY $ORT TOKENS
      </h4>

      <div className="container">
        <div className="row my-4 mx-0 px-3 px-sm-0">
          {/* {coinimages.map((coinimage, index) => (
            <div key={`coin-${index + 1}`} className="col-4 mt-4">
              <img src={coinimage} alt="" className="w-100" />
            </div>
          ))} */}

          <div className="col-lg-12 d-flex flex-column align-items-center justify-content-center">
            <Button
              onClick={() =>
                window.open(
                  'https://psidex.passive-income.io/swap#/swap?outputCurrency=0x1d64327C74d6519afeF54E58730aD6fc797f05Ba',
                )
              }
              className="mb-3"
            >
              Buy with PSIDEX
            </Button>
            <Button
              onClick={() =>
                window.open(
                  'https://pancakeswap.finance/swap#/swap?outputCurrency=0x1d64327c74d6519afef54e58730ad6fc797f05ba',
                )
              }
            >
              Buy with Pancakeswap
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coins
