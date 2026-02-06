const TelegramBot = require("node-telegram-bot-api");

const token = '8576035098:AAHeIupZSQsZLD0aUUBsBvTZAxlsCqdf8aM';


const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // 1. УБИРАЕМ НИЖНЮЮ КНОПКУ
  bot.sendMessage(chatId, " ", {
    reply_markup: {
      remove_keyboard: true
    }
  });

  // 2. ОТПРАВЛЯЕМ СООБЩЕНИЕ С INLINE-КНОПКОЙ
  bot.sendMessage(
    chatId,
    `Добрый день 👋

Вы зашли в бота, где можно посмотреть помещения
от Евгения Иванова 🏢

Нажмите кнопку ниже, чтобы открыть каталог ⬇️`,
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "📂 Открыть каталог",
              web_app: {
                url: "https://telegram-mini-app-nu-jet.vercel.app/index.html"
              }
            }
          ]
        ]
      }
    }
  );
});



