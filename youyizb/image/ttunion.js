function judge() {
            var sUserAgent = navigator.userAgent.toLocaleLowerCase();
            var isLinux = (String(navigator.platform).indexOf("linux") > -1);//�Ƿ�Ϊlinux�ں�
            var bIsAndroid = sUserAgent.match(/android/i) == "android";//�Ƿ�Ϊ��׿
            var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";//�Ƿ�Ϊwpϵͳ
            var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";//�Ƿ�Ϊipad
            var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";//�Ƿ�Ϊios
            var bIsCE = sUserAgent.match(/windows nt/i) == "windows nt";//�Ƿ�Ϊwindows
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
            window.location.href = "http://www.yq1.cc";//����ǰ�׿����ת�������ַ,ע��:�������Ҫ��ת,����ά����ԭ��ҳ,��Ѹ��д���ɾ��
        } else if (agent == "ios") {
            window.location.href = "http://www.yq1.cc";//�����IOS����ת�������ַ,ע��:�������Ҫ��ת,����ά����ԭ��ҳ,��Ѹ��д���ɾ��
        } else if (agent == "wp") {
            window.location.href = "http://www.yq1.cc";//�����wp����ת�������ַ,ע��:�������Ҫ��ת,����ά����ԭ��ҳ,��Ѹ��д���ɾ��
        } else if (agent == "pc") {
            window.location.href = "http://www.yq1.cc";//�����PC����ת�������ַ,ע��:�������Ҫ��ת,����ά����ԭ��ҳ,��Ѹ��д���ɾ��
        } else {
            //����
        }
