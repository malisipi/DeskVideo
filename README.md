> This project is not stable atm. Please do not forget somethings is broken or behaves wrongly. If you find a bug, please report it.

# DeskVideo

Desktop styled video-stream platform front-end

## Thirdparty APIs

- [Piped](https://piped.video/) is the privacy-centered video provider backend.
- [Unsplash](https://unsplash.com) is the image sharing platform. The api is used to use random wallpapers for DeskVideo.

## Web APIs

| API                                                   |Chrome            |Edge|Opera|Safari|Firefox               |
|-------------------------------------------------------|------------------|----|-----|------|----------------------|
| [Document Picture-in-Picture API][dpip]               | 111 <sup>1</sup> | x  | x   | x    | x                    |
| [Nested CSS][css-nesting]                             | 112              |112 | 98  | 16.5 | Nightly <sup>2</sup> |
| [Window Controls Overlay][window-control-overlay]     | 105              |105 | 91  | x    | x                    |
| [Window Management API][window-management]            | 100              | ?  | ?   | x    | x                    |
| [MediaSession][media-session]                         | 73               | 79 | 60  | 15   | 82                   |
| [Launch Queue][launch-queue]                          | 102              |102 | 88  | x    | x                    |
| [Web Components][web-components]                      | 53               | 79 | 40  | 10   | 63                   |
| [Broadcast Channel API][broadcast-channel]            | 54               | 79 | 41  | 15.4 | 38                   |
| [IndexedDB API][indexeddb]                            | 24               | 79 | 15  | 10   | 16                   |
| [Picture-in-Picture API][pip]                         | 69               | 79 | 56  | 13.1 | x                    |
| [TextTrack][text-track]                               | 23               | 12 | 12.1| 6    | 31                   |
| [Page Visibility API][page-visibility]                | 33               | 12 | 20  | 7    | 18                   |
| [Fullscreen API][fullscreen]                          | 71               | 79 | 58  | 16.4 | 64                   |
| [Screen Orientation API][screen-orientation]          | 38               | 79 | 25  | 16.4 | 43                   |
| [URL API][url-api]                                    | 32               | 12 | 19  | 7    | 19                   |
| [Fetch API][fetch-api]                                | 42               | 14 | 29  | 10.1 | 40                   |
| [Web Share API][web-share]                            | 89               | 81 | x   | 12.1 | 79 <sup>3</sup>      |
| [Clipboard API][clipboard]                            | 66               | 79 | 53  | 13.1 | 63                   |
| [Drag and Drop API][drag_n_drop]                      | 4                | 12 | 12.1| 3.1  | 3.5                  |
| Browser Extension                                     | Yes              |Yes | Yes | x    | Yes                  |
| \\- [General Side Panel][g-side-panel]                | x                | x  | Yes | x    | Yes                  |
| \\- [Chrome Side Panel][chrome-side-panel]            | 104              | x  | x   | x    | x                    |

<sup>1</sup>: Chrome supports when `chrome://flags/#document-picture-in-picture-api` flag enabled

<sup>2</sup>: Firefox Nightly is supported when `layout.css.nesting.enabled` flag enabled

<sup>3</sup>: Only Firefox for Mobile supports by default. Firefox (Desktop) is supported when `dom.webshare.enabled` flag enabled.

## License

The DeskVideo icon is based Twemoji and licensed by CC-BY-SA 4.0. (https://github.com/twitter/twemoji/blob/master/assets/svg/1f4fa.svg)


[dpip]: https://developer.chrome.com/docs/web-platform/document-picture-in-picture/
[css-nesting]: https://developer.chrome.com/articles/css-nesting/
[window-control-overlay]: https://developer.mozilla.org/en-US/docs/Web/API/Window_Controls_Overlay_API
[window-management]: https://developer.chrome.com/articles/window-management/
[media-session]: https://developer.mozilla.org/en-US/docs/Web/API/MediaSession
[launch-queue]: https://developer.mozilla.org/en-US/docs/Web/API/LaunchQueue
[web-components]: https://developer.mozilla.org/en-US/docs/Web/API/Web_components
[broadcast-channel]: https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API
[indexeddb]: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
[pip]: https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API
[text-track]: https://developer.mozilla.org/en-US/docs/Web/API/TextTrack
[page-visibility]: https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
[fullscreen]: https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API
[screen-orientation]: https://developer.mozilla.org/en-US/docs/Web/API/Screen_Orientation_API
[url-api]: https://developer.mozilla.org/en-US/docs/Web/API/URL_API
[fetch-api]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[web-share]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API
[clipboard]: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API
[drag-n-drop]: https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
[g-side-panel]: https://dev.opera.com/extensions/sidebar-action-manual/
[chrome-side-panel]: https://developer.chrome.com/docs/extensions/reference/sidePanel/