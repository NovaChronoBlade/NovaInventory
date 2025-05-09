import { enviarAlertaStock } from "./telegram.service";

export class StockAlertService {
  async sendStockAlert(productoNombre: string): Promise<void> {
    try {
      await enviarAlertaStock(productoNombre);
    } catch (error) {
      console.error("Error al enviar la alerta de stock:", error);
    }
  }
}
