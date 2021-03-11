# Home Hero

## Video Variant

The video hero variant supports three different sources: Youtube, Vimeo, and local video files. To use each, a `source` variable should be used with the following values: `youtube`, `vimeo`, `local`. Conditional logic will then render the proper markup for all three cases. In the case of local video, an HTML `video` tag is created and its `data-src` attribute should be populated with the output of a file field. For the Youtube and Vimeo embeds, a `.home-hero-media-embed` div is output which is then used as the mount point for Youtube and Vimeo embeds loaded via their respective JavaScript API's.