const TelegramBot = require("node-telegram-bot-api");

const token = '8576035098:AAHeIupZSQsZLD0aUUBsBvTZAxlsCqdf8aM';
const webAppUrl = "https://telegram-mini-app-nu-jet.vercel.app";

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(
    chatId,
    `Добрый день 👋

Вы зашли в бота, где можно посмотреть помещения
от Евгения Иванова 🏢

Нажмите кнопку ниже, чтобы открыть каталог ⬇️`,
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: "📂 Открыть каталог",
              web_app: {
                url: "https://telegram-mini-app-nu-jet.vercel.app/index.html"
              }
            }
          ]
        ],
        resize_keyboard: true,
        one_time_keyboard: false
      }
    }
  );
});

