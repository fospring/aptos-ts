# aptos ts sdk example
## use to get account resource info
run `./run.sh`

output:
```text
resource= {
  resource: {
    type: '0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>',
    data: {
      coin: [Object],
      deposit_events: [Object],
      frozen: false,
      withdraw_events: [Object]
    },
    __headers: {
      date: 'Sun, 20 Nov 2022 16:15:33 GMT',
      'content-type': 'application/json; charset=utf-8',
      'content-length': '401',
      connection: 'close',
      'set-cookie': [Array],
      'x-aptos-chain-id': '38',
      'x-aptos-ledger-version': '1997713',
      'x-aptos-ledger-oldest-version': '0',
      'x-aptos-ledger-timestampusec': '1668960932568020',
      'x-aptos-epoch': '34',
      'x-aptos-block-height': '920396',
      'x-aptos-oldest-block-height': '0'
    }
  }
}
Apt balance= { aBalance: 196613600 }
resource= {
  resource: {
    type: '0x1::coin::CoinStore<0x764c516b5e8fe2e09281686a2d6e3de5d314f65dc2bbdec78431f18414d5ac15::usdc::USDC>',
    data: {
      coin: [Object],
      deposit_events: [Object],
      frozen: false,
      withdraw_events: [Object]
    },
    __headers: {
      date: 'Sun, 20 Nov 2022 16:15:33 GMT',
      'content-type': 'application/json; charset=utf-8',
      'content-length': '455',
      connection: 'close',
      'set-cookie': [Array],
      'x-aptos-chain-id': '38',
      'x-aptos-ledger-version': '1997728',
      'x-aptos-ledger-oldest-version': '0',
      'x-aptos-ledger-timestampusec': '1668960933301632',
      'x-aptos-epoch': '34',
      'x-aptos-block-height': '920402',
      'x-aptos-oldest-block-height': '0'
    }
  }
}
b balance= { bBalance: 20000000000 }
```