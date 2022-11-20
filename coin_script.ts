import { AptosAccount, AptosClient, TxnBuilderTypes, BCS, MaybeHexString, HexString, FaucetClient } from "aptos";

//节点URL  REST API地址
export const NODE_URL = "https://fullnode.devnet.aptoslabs.com";
//水龙头URL
export const FAUCET_URL = "https://faucet.devnet.aptoslabs.com";

// 创建aptos客户端
const client = new AptosClient(NODE_URL);

//查询APT代币余额
async function getBalanceOfAPT(contractAddress: HexString, accountFrom: AptosAccount): Promise<string | number | any> {
    try {
        const resource = await client.getAccountResource(accountFrom.address(), `${contractAddress}::coin::CoinStore<0x1::aptos_coin::AptosCoin>`);
        console.log("resource=", {resource});
        return parseInt((resource.data as any)["coin"]["value"]);
    } catch (e) {
        console.log("err=", {e});
        return 0;
    }
}

//查询任意的一个发行代币余额
async function getBalanceOfSpringUsdt(contractAddress: HexString, accountFrom: AptosAccount): Promise<string | number | any> {
    try {
        const resource = await client.getAccountResource(accountFrom.address(), `${contractAddress}::coin::CoinStore<0x764c516b5e8fe2e09281686a2d6e3de5d314f65dc2bbdec78431f18414d5ac15::usdc::USDC>`);
        console.log("resource=", {resource});
        return parseInt((resource.data as any)["coin"]["value"]);
    } catch (e) {
        console.log("err=", {e});
        return 0;
    }
}

async function main() {
    let frameWorkAddr = new HexString("0x01");
    const myUsdt = new AptosAccount(
        new HexString("a4dfe9559e69ef1ea2423c408cbe51f9ac3f3b43ac800732efa524b9aa786f27").toUint8Array(),
    );
    let aBalance = await getBalanceOfAPT(frameWorkAddr, myUsdt);
    console.log("Apt balance=", {aBalance});

    let bBalance = await getBalanceOfSpringUsdt(frameWorkAddr, myUsdt);
    console.log("b balance=", {bBalance});
}

main().then(_r => {})
