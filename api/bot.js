export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).send("OK");
  }

  const TELEGRAM_TOKEN = process.env.BOT_TOKEN;
  const WEB_APP_URL = "https://telegram-mini-app-nu-jet.vercel.app";

  const body = req.body;
  const chatId = body?.message?.chat?.id;
  const text = body?.message?.text;

  if (!chatId) {
    return res.status(200).end();
  }

  if (text === "/start") {
    const message = `Добрый день 👋

Вы зашли в бота, где можно посмотреть помещения
от Евгения Иванова 🏢

Нажмите кнопку ниже, чтобы открыть каталог ⬇️`;

    await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "📂 Открыть каталог",
                web_app: {
                  url: WEB_APP_URL
                }
              }
            ]
          ]
        }
      })
    });
  }

  res.status(200).end();
}
