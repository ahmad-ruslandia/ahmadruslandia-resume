import { p as patchBrowser, b as bootstrapLazy } from "./core-9d0b34d5.js";

patchBrowser().then((options) => {
  return bootstrapLazy(
    [
      ["ar-logotype", [[1, "ar-logotype"]]],
      [
        "ar-resume_2",
        [
          [1, "ar-resume", { showDownloadLink: [4, "show-download-link"] }],
          [1, "svg-icon", { name: [1], small: [4] }],
        ],
      ],
    ],
    options
  );
});
