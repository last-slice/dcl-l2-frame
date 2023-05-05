import { createComponents, createContract } from "./blockchain/index"


let abi721:any[] = [{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address[]","name":"allowedSeaDrop","type":"address[]"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AlreadyInitialized","type":"error"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[{"internalType":"uint256","name":"newMaxSupply","type":"uint256"}],"name":"CannotExceedMaxSupplyOfUint64","type":"error"},{"inputs":[{"internalType":"uint256","name":"basisPoints","type":"uint256"}],"name":"InvalidRoyaltyBasisPoints","type":"error"},{"inputs":[],"name":"MintERC2309QuantityExceedsLimit","type":"error"},{"inputs":[{"internalType":"uint256","name":"total","type":"uint256"},{"internalType":"uint256","name":"maxSupply","type":"uint256"}],"name":"MintQuantityExceedsMaxSupply","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"NewOwnerIsZeroAddress","type":"error"},{"inputs":[],"name":"NotNextOwner","type":"error"},{"inputs":[],"name":"OnlyAllowedSeaDrop","type":"error"},{"inputs":[],"name":"OnlyOwner","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"}],"name":"OperatorNotAllowed","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"OwnershipNotInitializedForExtraData","type":"error"},{"inputs":[],"name":"ProvenanceHashCannotBeSetAfterMintStarted","type":"error"},{"inputs":[],"name":"RoyaltyAddressCannotBeZeroAddress","type":"error"},{"inputs":[],"name":"SignersMismatch","type":"error"},{"inputs":[],"name":"TokenGatedMismatch","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"allowedSeaDrop","type":"address[]"}],"name":"AllowedSeaDropUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"baseURI","type":"string"}],"name":"BaseURIUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toTokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"ConsecutiveTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"newContractURI","type":"string"}],"name":"ContractURIUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newMaxSupply","type":"uint256"}],"name":"MaxSupplyUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newPotentialAdministrator","type":"address"}],"name":"PotentialOwnerUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"previousHash","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"newHash","type":"bytes32"}],"name":"ProvenanceHashUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"bps","type":"uint256"}],"name":"RoyaltyInfoUpdated","type":"event"},{"anonymous":false,"inputs":[],"name":"SeaDropTokenDeployed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"startTokenId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"endTokenId","type":"uint256"}],"name":"TokenURIUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"OPERATOR_FILTER_REGISTRY","outputs":[{"internalType":"contract IOperatorFilterRegistry","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cancelOwnershipTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"startTokenId","type":"uint256"},{"internalType":"uint256","name":"endTokenId","type":"uint256"}],"name":"emitBatchTokenURIUpdated","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"minter","type":"address"}],"name":"getMintStats","outputs":[{"internalType":"uint256","name":"minterNumMinted","type":"uint256"},{"internalType":"uint256","name":"currentTotalSupply","type":"uint256"},{"internalType":"uint256","name":"maxSupply","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"minter","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"}],"name":"mintSeaDrop","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"maxSupply","type":"uint256"},{"internalType":"string","name":"baseURI","type":"string"},{"internalType":"string","name":"contractURI","type":"string"},{"internalType":"address","name":"seaDropImpl","type":"address"},{"components":[{"internalType":"uint80","name":"mintPrice","type":"uint80"},{"internalType":"uint48","name":"startTime","type":"uint48"},{"internalType":"uint48","name":"endTime","type":"uint48"},{"internalType":"uint16","name":"maxTotalMintableByWallet","type":"uint16"},{"internalType":"uint16","name":"feeBps","type":"uint16"},{"internalType":"bool","name":"restrictFeeRecipients","type":"bool"}],"internalType":"struct PublicDrop","name":"publicDrop","type":"tuple"},{"internalType":"string","name":"dropURI","type":"string"},{"components":[{"internalType":"bytes32","name":"merkleRoot","type":"bytes32"},{"internalType":"string[]","name":"publicKeyURIs","type":"string[]"},{"internalType":"string","name":"allowListURI","type":"string"}],"internalType":"struct AllowListData","name":"allowListData","type":"tuple"},{"internalType":"address","name":"creatorPayoutAddress","type":"address"},{"internalType":"bytes32","name":"provenanceHash","type":"bytes32"},{"internalType":"address[]","name":"allowedFeeRecipients","type":"address[]"},{"internalType":"address[]","name":"disallowedFeeRecipients","type":"address[]"},{"internalType":"address[]","name":"allowedPayers","type":"address[]"},{"internalType":"address[]","name":"disallowedPayers","type":"address[]"},{"internalType":"address[]","name":"tokenGatedAllowedNftTokens","type":"address[]"},{"components":[{"internalType":"uint80","name":"mintPrice","type":"uint80"},{"internalType":"uint16","name":"maxTotalMintableByWallet","type":"uint16"},{"internalType":"uint48","name":"startTime","type":"uint48"},{"internalType":"uint48","name":"endTime","type":"uint48"},{"internalType":"uint8","name":"dropStageIndex","type":"uint8"},{"internalType":"uint32","name":"maxTokenSupplyForStage","type":"uint32"},{"internalType":"uint16","name":"feeBps","type":"uint16"},{"internalType":"bool","name":"restrictFeeRecipients","type":"bool"}],"internalType":"struct TokenGatedDropStage[]","name":"tokenGatedDropStages","type":"tuple[]"},{"internalType":"address[]","name":"disallowedTokenGatedAllowedNftTokens","type":"address[]"},{"internalType":"address[]","name":"signers","type":"address[]"},{"components":[{"internalType":"uint80","name":"minMintPrice","type":"uint80"},{"internalType":"uint24","name":"maxMaxTotalMintableByWallet","type":"uint24"},{"internalType":"uint40","name":"minStartTime","type":"uint40"},{"internalType":"uint40","name":"maxEndTime","type":"uint40"},{"internalType":"uint40","name":"maxMaxTokenSupplyForStage","type":"uint40"},{"internalType":"uint16","name":"minFeeBps","type":"uint16"},{"internalType":"uint16","name":"maxFeeBps","type":"uint16"}],"internalType":"struct SignedMintValidationParams[]","name":"signedMintValidationParams","type":"tuple[]"},{"internalType":"address[]","name":"disallowedSigners","type":"address[]"}],"internalType":"struct ERC721SeaDropStructsErrorsAndEvents.MultiConfigureStruct","name":"config","type":"tuple"}],"name":"multiConfigure","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"provenanceHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"royaltyAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"royaltyBasisPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"_salePrice","type":"uint256"}],"name":"royaltyInfo","outputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"royaltyAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newContractURI","type":"string"}],"name":"setContractURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMaxSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"newProvenanceHash","type":"bytes32"}],"name":"setProvenanceHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"royaltyAddress","type":"address"},{"internalType":"uint96","name":"royaltyBps","type":"uint96"}],"internalType":"struct ISeaDropTokenContractMetadata.RoyaltyInfo","name":"newInfo","type":"tuple"}],"name":"setRoyaltyInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newPotentialOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"seaDropImpl","type":"address"},{"components":[{"internalType":"bytes32","name":"merkleRoot","type":"bytes32"},{"internalType":"string[]","name":"publicKeyURIs","type":"string[]"},{"internalType":"string","name":"allowListURI","type":"string"}],"internalType":"struct AllowListData","name":"allowListData","type":"tuple"}],"name":"updateAllowList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"seaDropImpl","type":"address"},{"internalType":"address","name":"feeRecipient","type":"address"},{"internalType":"bool","name":"allowed","type":"bool"}],"name":"updateAllowedFeeRecipient","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"allowedSeaDrop","type":"address[]"}],"name":"updateAllowedSeaDrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"seaDropImpl","type":"address"},{"internalType":"address","name":"payoutAddress","type":"address"}],"name":"updateCreatorPayoutAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"seaDropImpl","type":"address"},{"internalType":"string","name":"dropURI","type":"string"}],"name":"updateDropURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"seaDropImpl","type":"address"},{"internalType":"address","name":"payer","type":"address"},{"internalType":"bool","name":"allowed","type":"bool"}],"name":"updatePayer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"seaDropImpl","type":"address"},{"components":[{"internalType":"uint80","name":"mintPrice","type":"uint80"},{"internalType":"uint48","name":"startTime","type":"uint48"},{"internalType":"uint48","name":"endTime","type":"uint48"},{"internalType":"uint16","name":"maxTotalMintableByWallet","type":"uint16"},{"internalType":"uint16","name":"feeBps","type":"uint16"},{"internalType":"bool","name":"restrictFeeRecipients","type":"bool"}],"internalType":"struct PublicDrop","name":"publicDrop","type":"tuple"}],"name":"updatePublicDrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"seaDropImpl","type":"address"},{"internalType":"address","name":"signer","type":"address"},{"components":[{"internalType":"uint80","name":"minMintPrice","type":"uint80"},{"internalType":"uint24","name":"maxMaxTotalMintableByWallet","type":"uint24"},{"internalType":"uint40","name":"minStartTime","type":"uint40"},{"internalType":"uint40","name":"maxEndTime","type":"uint40"},{"internalType":"uint40","name":"maxMaxTokenSupplyForStage","type":"uint40"},{"internalType":"uint16","name":"minFeeBps","type":"uint16"},{"internalType":"uint16","name":"maxFeeBps","type":"uint16"}],"internalType":"struct SignedMintValidationParams","name":"signedMintValidationParams","type":"tuple"}],"name":"updateSignedMintValidationParams","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"seaDropImpl","type":"address"},{"internalType":"address","name":"allowedNftToken","type":"address"},{"components":[{"internalType":"uint80","name":"mintPrice","type":"uint80"},{"internalType":"uint16","name":"maxTotalMintableByWallet","type":"uint16"},{"internalType":"uint48","name":"startTime","type":"uint48"},{"internalType":"uint48","name":"endTime","type":"uint48"},{"internalType":"uint8","name":"dropStageIndex","type":"uint8"},{"internalType":"uint32","name":"maxTokenSupplyForStage","type":"uint32"},{"internalType":"uint16","name":"feeBps","type":"uint16"},{"internalType":"bool","name":"restrictFeeRecipients","type":"bool"}],"internalType":"struct TokenGatedDropStage","name":"dropStage","type":"tuple"}],"name":"updateTokenGatedDrop","outputs":[],"stateMutability":"nonpayable","type":"function"}]

let abi1155:any[] = [{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "uri",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

let offset:any ={
    [PictureFrameStyle.Baroque_Ornament]: -.003
}


/**
 * 
 * @param ui boolean flag if you want to add an on click to the frame
 * @param nftType 721 or 1155 token standard
 * @param address contract address
 * @param tokenId token id
 * @param transform TransformConstructorArgs for DCL position
 * @param color optional color for the frame bg
 * @param frame PictureFrameStyle: optional frame style
 * @returns 
 */
export async function l2NFTFrame(ui:boolean, nftType:number, address:string, tokenId:string, transform:TransformConstructorArgs, color?:Color3, frame?:PictureFrameStyle){
    let parent = new Entity()
    parent.addComponent(new Transform(transform))
    engine.addEntity(parent)

    let nft = new Entity()
    nft.addComponent(new Transform({position: new Vector3(0,0,0), scale: new Vector3(1,1,1)}))
    nft.addComponent(new NFTShape("ethereum://0xf23e1aa97de9ca4fb76d2fa3fafcf4414b2afed0/231",{
        color: color ? color : Color3.White(),
        style: frame ? frame : undefined,
      }))
    nft.setParent(parent)

    if(ui){
        nft.addComponent(new OnPointerDown(()=>{
            popup.visible = true
        },
            {
                hoverText: "View NFT Details"
            }))
    }

    let contract = await createComponents(address, nftType == 721 ? abi721 : abi1155)
    log(contract)
    let tokenURI:any

    if(nftType == 721){
        log('721 type')
        log('token id', address, tokenId)
        tokenURI = await contract.tokenURI(tokenId)
    }
    else{
        log('1155 type')
        tokenURI = await contract.uri(tokenId)
    }

    log('tokenuri is ', tokenURI)
    let metadata = await fetch(tokenURI)
    let json = await metadata.json()
    log(json)

    let nftTexture = new Texture(json.image)
    let l2nft = new Entity()
    l2nft.addComponent(new Transform({position: new Vector3(0,0, frame ? offset : -.02), rotation:Quaternion.Euler(0,0,180), scale: new Vector3(.5,.5,1)}))
    l2nft.addComponent(new PlaneShape())
    l2nft.addComponent(new Material())
    l2nft.getComponent(Material).albedoTexture = nftTexture
    l2nft.getComponent(Material).emissiveTexture = nftTexture
    l2nft.getComponent(Material).emissiveColor = Color3.White()
    l2nft.getComponent(Material).emissiveIntensity = 1
    l2nft.getComponent(Material).roughness = 0.6
    l2nft.setParent(parent)

    if(ui){
        image.source = nftTexture
        title.value = json.name
        //description.value = json.description
        l2nft.addComponent(new OnPointerDown(()=>{
            popup.visible = true
        },
        {
            hoverText: "View NFT Details"
        }))

        opensea.onClick = new OnPointerDown(()=>{
            openExternalURL( "https://opensea.io/assets/matic/" + address + "/" + tokenId)
        })
    }

    return nft
  }

let atlas = new Texture("images/atlas.png")
let canvas = new UICanvas()
let popup = new UIImage(canvas,atlas)
popup.sourceTop = 12
popup.sourceLeft = 7
popup.sourceHeight = 400
popup.sourceWidth = 480
popup.height = 350
popup.width = 500
popup.visible =false

let close = new UIImage(popup, atlas)
close.sourceTop = 381
close.sourceLeft = 583
close.sourceHeight = 64
close.sourceWidth = 64
close.height = 25
close.width = 25
close.hAlign = "right"
close.vAlign = "top"
close.positionX = -10
close.positionY = -10
close.onClick = new OnPointerDown(()=>{
    popup.visible = false
})

let image = new UIImage(popup, new Texture(""))
image.height = 200
image.width = 150
image.hAlign = "left"
image.positionX = 25
image.sourceTop = 0
image.sourceLeft = 0
image.sourceHeight = 200
image.sourceWidth = 150

let title = new UIText(popup)
title.fontSize = 12
title.vAlign = "top"
title.hTextAlign = "left"
title.hAlign = "left"
title.positionX = 25
title.color = Color4.Black()

// let ownerLabel = new UIText(popup)
// ownerLabel.fontSize = 12
// ownerLabel.vAlign = "top"
// ownerLabel.hTextAlign = "left"
// ownerLabel.hAlign = "left"
// ownerLabel.positionX = 25
// ownerLabel.color = Color4.Black()

let descriptionLabel = new UIText(popup)
descriptionLabel.fontSize = 8
descriptionLabel.value = "DESCRIPTION"
descriptionLabel.vAlign = "center"
descriptionLabel.hTextAlign = "left"
descriptionLabel.hAlign = "center"
descriptionLabel.color = Color4.Gray()
descriptionLabel.positionY = 15

// let description = new UIText(popup)
// description.fontSize = 10
// description.vAlign = "center"
// description.hTextAlign = "left"
// description.hAlign = "center"
// description.positionY = 5
// description.color = Color4.Gray()


let cancel = new UIImage(popup,atlas)
cancel.sourceLeft = 512
cancel.sourceTop = 612
cancel.sourceWidth = 174
cancel.sourceHeight = 46
cancel.height = 25
cancel.width = 95
cancel.vAlign = "center"
cancel.positionY = -87
cancel.onClick = new OnPointerDown(()=>{
    popup.visible = false
})

let opensea = new UIImage(popup,atlas)
opensea.sourceLeft = 512
opensea.sourceTop = 662
opensea.sourceWidth = 174
opensea.sourceHeight = 46
opensea.height = 25
opensea.width = 95
opensea.vAlign = "center"
opensea.positionY = -87
opensea.positionX = 100

let cancelL = new UIText(cancel)
cancelL.fontSize = 8
cancelL.value = "CANCEL"
cancelL.vAlign = "center"
cancelL.hTextAlign = "left"
cancelL.hAlign = "center"
cancelL.color = Color4.White()
cancelL.positionX = 30
cancelL.positionY = 20
cancelL.isPointerBlocker = false

let openseaL = new UIText(opensea)
openseaL.fontSize = 8
openseaL.value = "VIEW ON OPENSEA"
openseaL.vAlign = "center"
openseaL.hTextAlign = "left"
openseaL.hAlign = "center"
openseaL.color = Color4.White()
openseaL.isPointerBlocker = false
openseaL.positionX = 10
openseaL.positionY = 20