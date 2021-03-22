
# 钉钉群聊天机器人Webhook推送消息

## 安装

 npm install ddpush

## 参数

 secret SEC开头的字符串
 isSign 是否为加签方式推送消息（）
 accessToken 令牌

## 参考链接

https://developers.dingtalk.com/document/app/custom-robot-access?spm=ding_open_doc.document.0.0.7c5628e16k013G#topic-2026027

## 消息格式

例子：

{
     "msgtype": "text", //消息类型
     "text": {
         "content": "我就是我, 是不一样的烟火"
     },
     "at": {
         "atMobiles": [
             "150XXXXXXXX"// 需要@的群成员的手机号码
         ], 
         "isAtAll": false // 是否@所有群成员
     }
 }
