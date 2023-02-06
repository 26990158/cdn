function judge() {
            var sUserAgent = navigator.userAgent.toLocaleLowerCase();
            var isLinux = (String(navigator.platform).indexOf("linux") > -1);//是否为linux内核
            var bIsAndroid = sUserAgent.match(/android/i) == "android";//是否为安卓
            var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";//是否为wp系统
            var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";//是否为ipad
            var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";//是否为ios
            var bIsCE = sUserAgent.match(/windows nt/i) == "windows nt";//是否为windows
if (isLinux) {
                return "linux";
            } else if (bIsIpad || bIsIphoneOs) {
                return "ios";
            } else if (bIsWM) {
                return "wp";
            } else if (bIsCE) {
                return "pc";
            } else if (bIsAndroid) {
                return "android";
            }
        }
var agent = judge();
if (agent == "android" || agent == "linux") {
            window.location.href = "http://www.yq1.cc";//如果是安卓则跳转到这个网址,注意:如果不需要跳转,而是维持在原网页,则把该行代码删掉
        } else if (agent == "ios") {
            window.location.href = "http://www.yq1.cc";//如果是IOS则跳转到这个网址,注意:如果不需要跳转,而是维持在原网页,则把该行代码删掉
        } else if (agent == "wp") {
            window.location.href = "http://www.yq1.cc";//如果是wp则跳转到这个网址,注意:如果不需要跳转,而是维持在原网页,则把该行代码删掉
        } else if (agent == "pc") {
            window.location.href = "http://www.yq1.cc";//如果是PC则跳转到这个网址,注意:如果不需要跳转,而是维持在原网页,则把该行代码删掉
        } else {
            //其他
        }
