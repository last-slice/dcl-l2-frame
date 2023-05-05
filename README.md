
## DCL Audius Player

This project allows you to integrate the Audius decentralized music platform into your Decentraland scene!

## Install

To use any of the helpers provided by this library:

1. Install it as an npm package. Run this command in your scene's project folder:

   ```
   npm install dcl-l2-frame
   ```
   
   ```
   npm i @dcl/l2-scene-utils eth-connect decentraland-transactions -B
   ```

2. Add this line at the start of your game.ts file, or any other TypeScript files that require it:

   ```typescript
   import { l2NFTFrame } from "dcl-l2-frame";
   ```

## Usage

### Basic Audius Player Integration

The L2 frame requires the following parameters:
- `ui`: boolean to add an on click event to the NFT Frame
- `nft type`: 721 or 1155 token standard
- `contract`: nft contract address
- `tokenId`: nft token id
- `transform`:TransformConstructorArgs for positioning in DCL world
- `color`: `optional` Color4 parameter for the NFT Frame bg color
- `frame`: `optional` `PictureFrameStyle` to style the NFT Frame


   ```typescript
   let  nft = l2NFTFrame(true,721, "0x73b2798d287b41e69a1fc34179a1517153ac5a5b", "69", {position:  new  Vector3(8,2,8), scale:  new  Vector3(2,2,1)}, Color3.Blue(), PictureFrameStyle.Baroque_Ornament)
...

## Copyright info

This scene is protected with a standard Apache 2 licence. See the terms and conditions in the [LICENSE](/LICENSE) file.
