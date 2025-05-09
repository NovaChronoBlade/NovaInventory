import axios from "axios";
import { config } from "dotenv";
config();

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

/**
 * Envía una alerta de stock a través de Telegram.
 * @param productoNombre - Nombre del producto que está sin stock.
 */
export async function enviarAlertaStock(productoNombre: string) {
  if (!BOT_TOKEN || !CHAT_ID) {
    console.error("Faltan las credenciales de Telegram");
    return;
  }

  const mensaje = `⚠️ *Alerta de Stock*: El producto *${productoNombre}* está sin stock.`;
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    await axios.post(url, {
      chat_id: CHAT_ID,
      text: mensaje,
      parse_mode: "html",
    });
  } catch (error) {
    console.error("Error al enviar mensaje a Telegram:", error);
  }
}
