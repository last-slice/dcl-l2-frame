import { getUserAccount } from "@decentraland/EthereumController";
import { getProvider, Provider } from "@decentraland/web3-provider";
import * as dclTx from "decentraland-transactions";
import * as eth from "eth-connect";
import { Providers } from "./index";

export function createNFTComponent({
  provider,
  requestManager,
  metaProvider,
  metaRequestManager,
  fromAddress,
}: Providers, address:string, abi:any) {
  async function getContract() {
    let contract: any = await new eth.ContractFactory(metaRequestManager, abi).at(address)
    return {
      contract
    };
  }

  async function tokenURI(tokenId:string) {
    const {  contract } = await getContract();
    log('721 contract', contract)
    const res = await contract.tokenURI(tokenId);
    return res;
  }

  async function uri(tokenId:string) {
    const {  contract } = await getContract();
    const res = await contract.uri(tokenId);
    return res;
  }

//   async function balance() {
//     const { manaConfig, contract } = await getContract();
//     const res = await contract.balanceOf(fromAddress);

//     return res;
//   }

//   async function isApproved(spenderAddress: string) {
//     const { manaConfig, contract } = await getContract();
//     const res = await contract.allowance(fromAddress, spenderAddress);

//     return +res;
//   }

//   async function approve(spenderAddress: string, amount: number = 0) {
//     const { manaConfig, contract } = await getContract();

//     const functionHex = contract.approve.toPayload(
//       spenderAddress,
//       amount === 0 ? "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff" : amount
//     );

//     log(functionHex);

//     const txHash = await dclTx.sendMetaTransaction(
//       requestManager as any,
//       metaRequestManager as any,
//       functionHex.data,
//       manaConfig,
//       { serverURL: "https://transactions-api.decentraland.org/v1" }
//     );
//     log(txHash);
//     return txHash;
//   }
  return { tokenURI, uri, getContract};
}
