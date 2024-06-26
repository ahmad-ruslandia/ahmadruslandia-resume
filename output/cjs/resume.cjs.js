"use strict";

const core = require("./core-a99158e9.js");

core.patchBrowser().then((options) => {
  return core.bootstrapLazy(
    [
      ["ar-logotype.cjs", [[1, "ar-logotype"]]],
      [
        "ar-resume_2.cjs",
        [
          [1, "ar-resume", { showDownloadLink: [4, "show-download-link"] }],
          [1, "svg-icon", { name: [1], small: [4] }],
        ],
      ],
    ],
    options
  );
});
