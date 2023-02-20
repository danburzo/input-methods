# UI Events Viewer / Input methods

**Note:** This project is in maintenance mode and will not be receiving further updates.

Please refer to the updated resources:

-   The catalog of input methods is being maintained at [**danburzo.ro/input-methods/**](https://danburzo.ro/input-methods/).
-   UI Events Viewer has been rewritten in vanilla JavaScript here: [**danburzo.ro/ui-events-viewer/**](https://danburzo.ro/ui-events-viewer/). Source code is inlined in the HTML.

---

## Introduction

The purpose of this repository is to document various input methods / IMEs, how to install them, and the UI Events they trigger in the browser.

**UI Events Viewer**, available here:

https://danburzo.github.io/input-methods/index.html

Can be used to inspect the various keyboard / input / composition events that get triggered on a contenteditable element, using either the native DOM APIs or the React.js-polyfilled ones. It takes a cue from the excellent [Keyboard Event Viewer](https://w3c.github.io/uievents/tools/key-event-viewer.html).

## Input methods

The [danburzo.ro/input-methods/](https://danburzo.ro/input-methods/) project organizes input methods by operating system.

## Specifications

-   [Input Events Level 2](https://w3c.github.io/input-events/index.html)
-   [UI Events](https://w3c.github.io/uievents/)
-   [Static Range](https://w3c.github.io/staticrange/)

## Browser support and known limitations

### `beforeinput`

| Firefox                                                                                          | Chrome                                                                              | Safari                                                                                                                                      |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Does not fire `beforeinput` — [issue here](https://bugzilla.mozilla.org/show_bug.cgi?id=1219192) | Added support in [Chrome 60](https://www.chromestatus.com/feature/5656380006465536) | Added support in [Safari 10.1](https://developer.apple.com/library/content/releasenotes/General/WhatsNewInSafari/Articles/Safari_10_1.html) |

## Differences between native DOM and React

-   React will send `beforeinput` as a `SyntheticInputEvent` of type `compositionend` when finishing a composition in Firefox; Chrome gets an event of type `textInput`.
-   `input` events are `SyntheticEvent`s instead of `SyntheticInputEvent`s for some reason
-   `SyntheticKeyboardEvent`s don't have the `code` property.

## Other resources

-   [IME Test](https://github.com/Microsoft/vscode/wiki/IME-Test) from the VSCode Github repository.
-   [Keyboard Event Viewer](https://w3c.github.io/uievents/tools/key-event-viewer.html)

## Contributing

See [`Contributing.md`](./Contributing.md) for ways to contribute — much appreciated!
