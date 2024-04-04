import dotenv from 'dotenv';

import logger from './config/logger.js';
import app from './index.js';

const { Telegraf } = require('telegraf');

const TOKEN = "7080791089:AAEbHa8gHXwysVfnV0SrHAToltKA6mbZQ6U"

const bot = new Telegraf(TOKEN);



dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});


const web_link = "https://dreamy-haupia-0f980c.netlify.app/";

bot.start((ctx) => 
    ctx.reply('Welcome 1234', {
        reply_markup: {
            keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
   },
 })
);

bot.launch()

