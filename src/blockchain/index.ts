import * as dclTx from "decentraland-transactions";
import * as eth from "eth-connect";
import { getProvider, Provider } from "@decentraland/web3-provider";
import { getUserAccount } from "@decentraland/EthereumController";
import { createMANAComponent } from "./mana";
import { createStoreComponent } from "./store";
import { createNFTComponent } from "./l2";


export async function createContract(contractAddress:string, abi:any[]){
  try {
    // Setup steps explained in the section above
    const provider = await getProvider()
    const requestManager = new eth.RequestManager(provider)
    const factory = new eth.ContractFactory(requestManager, abi)
    const contract = (await factory.at(contractAddress)) as any
    return contract
  } catch (error) {
    //log(error.toString())
  }
}

export async function createComponents(contract:string, abi:any) {
  const provider = await getProvider();
  const requestManager: any = new eth.RequestManager(provider);
  const metaProvider: any = new eth.WebSocketProvider("wss://rpc-mainnet.matic.quiknode.pro");
  const fromAddress = await getUserAccount();
  const metaRequestManager: any = new eth.RequestManager(metaProvider);
  const providers = {
    provider,
    requestManager,
    metaProvider,
    metaRequestManager,
    fromAddress
  };

  log('abi is', abi)

  const l2Nft = await createNFTComponent(providers, contract, abi)

  // const mana = await createMANAComponent(providers);
  // const store = await createStoreComponent(providers);
  return l2Nft;
}

export type Providers = {
  provider: Provider;
  requestManager: eth.RequestManager;
  metaProvider: Provider;
  metaRequestManager: eth.RequestManager;
  fromAddress: string;
};