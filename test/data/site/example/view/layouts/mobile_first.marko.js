// Compiled using marko@4.4.28 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out) {
  var data = input;

  out.w("<div>");

  include_tag({
      _target: input.arViews.core
    }, out);

  out.w("</div>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "marko/src/taglibs/core/include-tag"
    ]
  };
