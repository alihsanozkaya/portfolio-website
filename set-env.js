const fs = require('fs');
const path = require('path');

const dir = './src/environments';
const filePath = `${dir}/environment.ts`;

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

const content = `
export const environment = {
  production: true,
  telegramToken: '${process.env.TELEGRAM_TOKEN}',
  chatId: '${process.env.TELEGRAM_CHAT_ID}'
};
`;

fs.writeFileSync(filePath, content);
console.log('Environment file generated successfully!');