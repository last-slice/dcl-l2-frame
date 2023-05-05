## DCL Audius Player

This project allows you to integrate the Audius decentralized music platform into your Decentraland scene!

## Install

To use any of the helpers provided by this library:

1. Install it as an npm package. Run this command in your scene's project folder:

   ```
   npm install dcl-audius-player
   ```

2. Add this line at the start of your game.ts file, or any other TypeScript files that require it:

   ```typescript
   import { APPlayingNewTrack, APStoppedTrack, AudiusPlayer, AudiusPlaylistType, AudiusUIType } from "dcl-audius-player";'
   ```

## Usage

### Basic Audius Player Integration

The DCL Audius Library requires a few arguments when being constructed:

- `playlistName`: String for the Audius Playlist to play
- `order`: Either AudiusPlaylistType.ORDER or AudiusPlaylistType.SHUFFLE
- `uiType`: Either AudiusUIType.CORNER or AudiusUIType.NONE
- `autoStart`: Boolean to auto start the playlist on scene load
- `loop`: Boolean to loop the playlist once it's finished
- `volume`: Set the volume of the audio stream

This example uses MyAmazingComponent to do `< insert use case >` to an entity over a period of 2 seconds:

```typescript
import { APPlayingNewTrack, APStoppedTrack, AudiusPlayer, AudiusPlaylistType, AudiusUIType } from "dcl-audius-player";'

AudiusPlayer.init(
  'angzaar', //playlist name
  AudiusPlaylistType.ORDER, //playlist type - order, shuffle
  AudiusUIType.NONE, //ui type - top, corner
  false, //auto start
  true, //loop
  .5) //volume
```

### Audius Player Events

There are a couple out of the box Event Listeners with the Audius Player

- **APPlayingNewTrack** - playing a new track
- **APStoppedTrack** - stopped playing a track
- **APFinishedPlaylist** - finished a playlist

Create event listeners below:

```typescript
AudiusPlayer.events.addListener(APPlayingNewTrack, null, (info)=>{
  log('new track info is', info)
})

AudiusPlayer.events.addListener(APStoppedTrack, null, (info)=>{
  log('stopped track', info)
})
```

### Audius Player Functions
Once your Audius Player is initialized, you can peform several functions within the player:

#### Toggle playing ####
SHIFT + F

#### Play Next Song ####
SHIFT + E

#### Change Playlist ####
```typescript
AudiusPlayer.changePlaylist('new name')
```


#### Get Current Playing Track ####
```typescript
AudiusPlayer.currentlyPlaying()
```

#### Get Current Playlist Tracks ####
```typescript
AudiusPlayer.getPlaylist()
```

#### Change Volume ####
```typescript
AudiusPlayer.updateVolume(.5)
```

#### Play ####
```typescript
AudiusPlayer.play()
```

#### Play Specific Track ####
```typescript
AudiusPlayer.playSong(2) //index of the track to play
```

#### Stop ####
```typescript
AudiusPlayer.stop()
```

...

## Copyright info

This scene is protected with a standard Apache 2 licence. See the terms and conditions in the [LICENSE](/LICENSE) file.
