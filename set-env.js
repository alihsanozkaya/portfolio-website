const fs = require("fs");
require("dotenv").config();

const dir = "./src/environments";
const filePath = `${dir}/environment.ts`;

const content = `
export const environment = {
  production: true,
  telegramToken: '${process.env.TELEGRAM_TOKEN}',
  chatId: '${process.env.TELEGRAM_CHAT_ID}'
};
`;

fs.writeFileSync(filePath, content);
