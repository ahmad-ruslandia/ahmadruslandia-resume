import { a as patchEsm, b as bootstrapLazy } from "./core-9d0b34d5.js";
var defineCustomElements = function (win, options) {
  return patchEsm().then(function () {
    bootstrapLazy(
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
};
export { defineCustomElements };
