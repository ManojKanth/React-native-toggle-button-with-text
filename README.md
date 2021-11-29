# Toggle-button--with-text-component


A react native component that show toggle button with text

## Features

- Pure JS.
- Compatible with both iOS and Android.
- Auto position. (Won't be covered or clipped by the edge of screen.)
- Highly customizable.

<p align="center">
  <img src="https://github.com/ManojKanth/image-with-text-component/blob/main/images/image1.png?raw=true" width="350" title="hover text">
  <img src="https://github.com/ManojKanth/image-with-text-component/blob/main/images/image2.png?raw=true" width="350" alt="accessibility text">
</p>


> first image states - button is in active state
> second image states - button is in inActive state


## Tech


- use disabled boolean to disable the button
- onActive function will be trigger in first render
- you can use your own images for active or inactive states


## Installation


```sh
npm i react-native-toggle-with-text
```
## Example

Import this module:
```sh
import ToggleButtonWithText from 'react-native-toggle-with-text';
```

Use as a component:
```sh
<ToggleButtonWithText onActive={() => console.log('online')} onDisable={() => console.log('offline')} />
```



| Prop | Type | Optional | Default | Description |
| ------ | ------ | ------ | ------ | ------ |
| activeText | String | YES | online | Active state text
| inActiveText | String | YES | offline | inActive state text
| ActiveImage | String | YES | Active image | this is the image for active state
| inActiveImage | String | YES | '' | InActive image | this is the image for inactive state
| activeImageStyle | String | YES | '' | style of active image style
| inActiveImageStyle | String | YES | '' | style of inactive image style
| backgroundActive | String | YES | 'transparent' | background color of active state
| backgroundInactive | String | YES | 'transparent' | background color of inactive state
| containerWidth | number | YES | 100 | button width
| containerheight | number | YES | 30 | button height
| borderRadius | number | YES | 15 | button border radius
| textStyle | object | YES | '' | style of text
| disabled | boolean | YES | false | enable button interaction
| onActive | function | YES | '' | this is a function trigger when button in active state
| onInActive | function | YES | '' | this is a function trigger when button in inActive state



## Development

Any suggestion is welcome.

