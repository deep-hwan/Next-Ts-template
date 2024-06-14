export function usePlatformOs() {
  if (typeof window !== "undefined" && "userAgent" in navigator) {
    const UA = navigator.userAgent.toLowerCase();

    if (UA.indexOf("android") > -1) {
      return "android";
    } else if (
      UA.indexOf("iphone") > -1 ||
      UA.indexOf("ipad") > -1 ||
      UA.indexOf("ipod") > -1
    ) {
      //IOS
      return "ios";
    } else {
      return "PC";
    }
  }
  return "Unknown";
}
