import { WechatyBuilder } from "wechaty";
import { Message } from "wechaty"
import QRCode from "qrcode";

const keywords = ['年', '春节']

const luckMessage = [
  '愿你有小茶碗也有红酒杯，生活里有热汤也有甜酒，所遇皆欢喜，所得皆如愿。',
  '愿你的新年里，好运连连，幸福不断，笑声不断，快乐不断，爱情不断，健康不断，财富不断，美丽不断~',
  '谢谢你的祝福，祝你新年快乐！',
  '新年快乐！',
  '感谢你的祝福，祝你新年快乐！',
  '过年好！祝你在新的一年里，身体健康，万事如意！',
  '新年快乐！祝你在新的一年里，身体健康，万事如意！',
]

export class newYearBot {

  static onMessage(message: Message)
  {  
    const rawText = message.text()
    if(message.self()) return
    if(message.room()) return
    if(keywords.some(keyword => rawText.includes(keyword))) {
      const luckMessageIndex = Math.floor(Math.random() * luckMessage.length)
      const luckMessageText = luckMessage[luckMessageIndex]
      message.say(luckMessageText)
    }
  }
}




const bot =  WechatyBuilder.build({
  name: "wechat-assistant", // generate xxxx.memory-card.json and save login data for the next login
  puppetOptions: {
    uos: true, // 开启uos协议
  },
  puppet: "wechaty-puppet-wechat",
});
// get a Wechaty instance
async function main() {
  bot
    .on("scan", async (qrcode, status) => {
      const url = `https://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`;
      console.log(`Scan QR Code to login: ${status}\n${url}`);
      console.log(
        await QRCode.toString(qrcode, { type: "terminal", small: true })
      );
    })
    .on("login", async (user) => {
      console.log(`User ${user} logged in`);
      // newYearMessage.setBotName(user.name());
    })
    .on("message", async (message) => {
      if (message.text().startsWith("/ping")) {
        await message.say("pong");
        return;
      }
      try {
        console.log(`Message: ${message}`);
        newYearBot.onMessage(message);
      } catch (e) {
        console.error(e);
      }
    });
  try {
    await bot.start();
  } catch (e) {
    console.error(
      `⚠️ Bot start failed, can you log in through wechat on the web?: ${e}`
    );
  }
}
main();
