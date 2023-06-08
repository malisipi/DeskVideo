# THIS WEBSITE IS NOT STABLE. MOST FEATURES IS NOT IMPLEMENTED YET.

> Status: Bleeding Edge (Before Alpha)

# DeskTube

Desktop styled video-stream platform front-end

## Web APIs

| API                                                                                                                          |Chrome|Edge|Opera|Safari|Firefox |
|------------------------------------------------------------------------------------------------------------------------------|------|----|-----|------|--------|
| [Document Picture-in-Picture API](https://developer.chrome.com/docs/web-platform/document-picture-in-picture/)               |111<sup>1</sup>|x|x|x   | x      |
| [Nested CSS](https://developer.chrome.com/articles/css-nesting/)                                                           |112|112|98|16.5|Nightly<sup>2</sup>|
| [Window Controls Overlay](https://developer.mozilla.org/en-US/docs/Web/API/Window_Controls_Overlay_API)                      | 105  |105 | 91  | x    | x      |
| [Launch Queue](https://developer.mozilla.org/en-US/docs/Web/API/LaunchQueue)                                                 | 102  |102 | 88  | x    | x      |
| [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)                                            | 53   | 79 | 40  | 10   | 63     |
| [Broadcast Channel API](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API)                              | 54   | 79 | 41  | 15.4 | 38     |
| [Picture-in-Picture API](https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API)                            | 69   | 79 | 56  | 13.1 | x      |
| [IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)                                              | 24   | 79 | 15  | 10   | 16     |
| [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)                                            | 71   | 79 | 58  | 16.4 | 64     |
| [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API)                                  | 33   | 12 | 20  | 7    | 18     |
| [Screen Orientation API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Orientation_API)                            | 38   | 79 | 25  | 16.4 | 43     |
| [URL API](https://developer.mozilla.org/en-US/docs/Web/API/URL_API)                                                          | 32   | 12 | 19  | 7    | 19     |
| [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)                                                      | 42   | 14 | 29  | 10.1 | 40     |
| [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API)                                              |89 |81| x  | 12.1| 79<sup>3</sup>|
| [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)                                              | 66   | 79 | 53  | 13.1 | 63     |
| Browser Extension                                                                                                            | Yes  |Yes | Yes | x    | Yes    |
| \\- [General Side Panel](https://dev.opera.com/extensions/sidebar-action-manual/)                                            | x    | x  | Yes | x    | Yes    |
| \\- [Chrome Side Panel](https://developer.chrome.com/docs/extensions/reference/sidePanel/)                                   | 104  | x  | x   | x    | x      |

<sup>1</sup>: Chrome supports when `chrome://flags/#document-picture-in-picture-api` flag enabled

<sup>2</sup>: Firefox Nightly is supported when `layout.css.nesting.enabled` flag enabled

<sup>3</sup>: Only Firefox for Mobile supports by default. Firefox (Desktop) is supported when `dom.webshare.enabled` flag enabled.

## License

The DeskTube icon is based Twemoji and licensed by CC-BY-SA 4.0. (https://github.com/twitter/twemoji/blob/master/assets/svg/1f4fa.svg)
