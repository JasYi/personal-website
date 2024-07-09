// utils/deviceDetect.js

import UAParser from "ua-parser-js";

export const isMobile = (userAgent) => {
  const parser = new UAParser(userAgent);
  const deviceType = parser.getDevice().type;
  return deviceType === "mobile";
};
