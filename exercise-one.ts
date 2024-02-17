
async function fetchBalances(addresses: `0x${string}`[]): Promise<bigint[]> {

    const body = JSON.stringify(addresses.map((address, index) => ({
      jsonrpc: '2.0',
      method: 'eth_getBalance',
      params: [address, 'latest'],
      id: index + 1
    })));

    console.log(`Send request at URL: https://mainnet.infura.io/v3/f1b70935143f4b22b3c165d6bdfd3021 with parameters: ${body}`);

    const response = await fetch('https://mainnet.infura.io/v3/f1b70935143f4b22b3c165d6bdfd3021', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body
    });

    const results = await response.json();

    return results.map((result: { result: bigint }) => BigInt(result.result));
  }

async function main() {

const addresses: `0x${string}`[] = [
        '0x7B3a66775279C25Db7ae2839CfA8742c89d1e4A8',
        '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B',
    ];

    const balances = await fetchBalances(addresses);

    balances.forEach((balance, index) => {
        console.log(`This ethereum address ${addresses[index]} have ${balance} wei.`);
    });
}

main();