import { Message } from "wechaty"

// message keyword
const keywords = ['过年好', '新年', '春节']

// 祝福语词组
const luckMessage = [
  '愿你有小茶碗也有红酒杯，生活里有热汤也有甜酒，所遇皆欢喜，所得皆如愿。',
  '愿你的新年里，有好运连连，有幸福不断，有笑声不断，有快乐不断，有爱情不断，有健康不断，有财富不断，有美丽不断，有幸福不断，有笑声不断，有快乐不断，有爱情不断，有健康不断，有财富不断，有美丽不断，有幸福不断，有笑声不断，有快乐不断，有爱情不断，有健康不断，有财富不断，有美丽不断，有幸福不断，有笑声不断，有快乐不断，有爱情不断，有健康不断，有财富不断，有美丽不断，有幸福不断，有笑声不断，有快乐不断，有爱情不断，有健康不断，有财富不断，有美丽不断，有幸福不断，有笑声不断，有快乐不断，有爱情不断，有健康不断，有财富不断，有美丽不断，有幸福不断，有笑声不断，有快乐不断，有爱情不断，有健康不断，有财富不断，有美丽不断，有幸福不断，有笑声不断，有快乐不断，有爱情不断，有健康不断，有财富不断，有美丽不断，有幸福不断，有笑声不断，有快乐不断，有爱情不断，有健康不断，有财富不断，有美丽不断，有幸福不断~',
  '谢谢你的祝福，祝你新年快乐！',
  '新年快乐！',
  '感谢你的祝福，祝你新年快乐！',
  '过年好！祝你在新的一年里，身体健康，万事如意！',
  '新年快乐！祝你在新的一年里，身体健康，万事如意！',
]

export class newYearBot {

  onMessage(message: Message)
  {  
    const rawText = message.text()
    // if(message.self()) return
    // if(message.type() !== message.Type.Text) return
    // if(message.room()) return
    // if(message.mentionSelf()) return
    if(keywords.some(keyword => rawText.includes(keyword))) {
      const luckMessageIndex = Math.floor(Math.random() * luckMessage.length)
      const luckMessageText = luckMessage[luckMessageIndex]
      message.say(luckMessageText)
    }
  }
}

