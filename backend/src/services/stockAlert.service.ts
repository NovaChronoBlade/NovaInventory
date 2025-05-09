import { enviarAlertaStock } from "./telegram.service";

/**
 * Servicio para manejar alertas de stock.
 */
export class StockAlertService {
  /**
   * Envía una alerta de stock para un producto específico.
   * @param productoNombre - Nombre del producto que está sin stock.
   */
  async sendStockAlert(productoNombre: string): Promise<void> {
    try {
      await enviarAlertaStock(productoNombre);
    } catch (error) {
      console.error("Error al enviar la alerta de stock:", error);
    }
  }
}
