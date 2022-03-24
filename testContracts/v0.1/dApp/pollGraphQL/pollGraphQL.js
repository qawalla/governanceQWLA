{
swaps(first: 10, orderBy: timestamp, orderDirection: desc, where:
 { pool: "0x108fdc5bc0289104d933ab6974ef197629d81a2d" }
) {
  pool {
    token0 {
      decimals
      symbol
      volume
    }
    token1 {
      decimals
      symbol
      volume
    }
  }
  id
  sender
  recipient
  amount0
  amount1
  timestamp
  amountUSD
 }


}