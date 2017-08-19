# Input methods

## Introduction

The purpose of this repository is to document various input methods / IMEs, how to install them, and the UI Events they trigger in the browser.

## Specifications

* [Input Events Level 2](https://w3c.github.io/input-events/index.html)
* [UI Events](https://w3c.github.io/uievents/)
* [Static Range](https://w3c.github.io/staticrange/)

## Browser support and known limitations

### `beforeinput`

Firefox | Chrome | Safari
------- | ------ | ------
Does not fire `beforeinput` — [issue here](https://bugzilla.mozilla.org/show_bug.cgi?id=1219192) | Added support in [Chrome 60](https://www.chromestatus.com/feature/5656380006465536) | Added support in [Safari 10.1](https://developer.apple.com/library/content/releasenotes/General/WhatsNewInSafari/Articles/Safari_10_1.html)

## Other resources

* [IME Test](https://github.com/Microsoft/vscode/wiki/IME-Test) from the VSCode Github repository.
* [Keyboard Event Viewer](https://w3c.github.io/uievents/tools/key-event-viewer.html)
