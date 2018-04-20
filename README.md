# Input methods

[![Greenkeeper badge](https://badges.greenkeeper.io/danburzo/input-methods.svg)](https://greenkeeper.io/)

## Introduction

The purpose of this repository is to document various input methods / IMEs, how to install them, and the UI Events they trigger in the browser. 

__UI Event Viewer__, available here:

https://danburzo.github.io/input-methods/index.html

Can be used to inspect the various keyboard / input / composition events that get triggered on a contenteditable element, using either the native DOM APIs or the React.js-polyfilled ones. It takes a cue from the excellent [Keyboard Event Viewer](https://w3c.github.io/uievents/tools/key-event-viewer.html).

## Input methods

The [`methods`](./methods/) folder organizes input methods by operating system.

## Specifications

* [Input Events Level 2](https://w3c.github.io/input-events/index.html)
* [UI Events](https://w3c.github.io/uievents/)
* [Static Range](https://w3c.github.io/staticrange/)

## Browser support and known limitations

### `beforeinput`

Firefox | Chrome | Safari
------- | ------ | ------
Does not fire `beforeinput` — [issue here](https://bugzilla.mozilla.org/show_bug.cgi?id=1219192) | Added support in [Chrome 60](https://www.chromestatus.com/feature/5656380006465536) | Added support in [Safari 10.1](https://developer.apple.com/library/content/releasenotes/General/WhatsNewInSafari/Articles/Safari_10_1.html)

## Differences between native DOM and React

* React will send `beforeinput` as a `SyntheticInputEvent` of type `compositionend` when finishing a composition in Firefox; Chrome gets an event of type `textInput`.
* `input` events are `SyntheticEvent`s instead of `SyntheticInputEvent`s for some reason
* `SyntheticKeyboardEvent`s don't have the `code` property.


## Other resources

* [IME Test](https://github.com/Microsoft/vscode/wiki/IME-Test) from the VSCode Github repository.
* [Keyboard Event Viewer](https://w3c.github.io/uievents/tools/key-event-viewer.html)

## Contributing

See [`Contributing.md`](./Contributing.md) for ways to contribute — much appreciated!
