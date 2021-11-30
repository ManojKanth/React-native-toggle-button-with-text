# Toggle-button--with-text-component


A react native component that show toggle button with text


<p align="center">
  <img src="https://github.com/ManojKanth/React-native-toggle-button-with-text/blob/master/images/FullSizeRender.gif" width="350" title="active image">
</p>
## Features

- Pure JS.
- Compatible with both iOS and Android.
- Highly customizable.


<p align="center">
  <img src="https://github.com/ManojKanth/React-native-toggle-button-with-text/blob/master/images/active.png" width="350" title="active image">
  <img src="https://github.com/ManojKanth/React-native-toggle-button-with-text/blob/master/images/inactive.png" width="350" alt="inactive image">
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
<ToggleButtonWithText 
        onActive={() => console.log('online')} 
        onDisable={() => console.log('offline')} />
```



| Prop | Type | Optional | Default | Description |
| ------ | ------ | ------ | ------ | ------ |
| activeText | String | YES | online | Active state text
| inActiveText | String | YES | offline | inActive state text
| ActiveImage | String | YES | Active image | this is the image for active state
| inActiveImage | String | YES | inActive image | InActive image | this is the image for inactive state
| activeImageStyle | String | YES | defualt | style of active image style
| inActiveImageStyle | String | YES | defualt | style of inactive image style
| backgroundActive | String | YES | 'transparent' | background color of active state
| backgroundInactive | String | YES | 'transparent' | background color of inactive state
| containerWidth | number | YES | 100 | button width
| containerheight | number | YES | 30 | button height
| borderRadius | number | YES | 15 | button border radius
| textStyle | object | YES | defualt | style of text
| disabled | boolean | YES | false | enable button interaction
| onActive | function | YES | ' ' | this is a function trigger when button in active state
| onInActive | function | YES | ' ' | this is a function trigger when button in inActive state



## Development

Any suggestion is welcome.

