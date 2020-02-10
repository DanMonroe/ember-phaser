/* jshint node: true */
'use strict';

module.exports =  function contentForHead(config) {
  // if (config && Error && Error.stackTraceLimit) {
  //   var defaultLimit = 100;
  //   var configurationIsSet = typeof config.stackTraceLimit === "number";
  //   var limit =  configurationIsSet ? config.stackTraceLimit : defaultLimit;
  //   var isEnabled = true;
  //
  //   if (config.environment === "production") {
  //     isEnabled = configurationIsSet;
  //   }
  //
  //   if (isEnabled) {
  //     return '<script>Error.stackTraceLimit=' + limit + ';</script>';
  //   }
  // }

      return `<script>
  var global = global || window;
  var Buffer = Buffer || [];
  var process = process || {
  env: { DEBUG: undefined },
  version: []
  };
</script>`;

};
