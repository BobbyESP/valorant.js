const { checkParams } = require("../../managers/parameters");
const e = require("../../errors/exceptions");
require("colors");
require("../../../typings/index.js");

class ValorantDebugger {
  constructor();

  /**
   * @param data {Debugger}
   * @param type {Debugger}
   * @param isEnabled {Debugger}
   */
  debug(data, type, isEnabled) {
    const h = { data:  data, type: type };
    checkParams(h, "debug")

    if(type === "client") console.log(`[Valorant] ${data}`.magenta);

    if(type === "request" && isEnabled === true) console.log(`[Valorant - Debug] ${data}`.magenta)

  };

  error(data) {
    checkParams(data, "error");
  }
}
module.exports = ValorantDebugger;
