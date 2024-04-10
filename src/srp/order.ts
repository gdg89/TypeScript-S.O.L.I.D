import { v4 as uuidV4 } from 'uuid';
import { OrderStatus, OrderId } from './interfaces/order-types';
import { ShoppingCart } from './shopping-cart';

export class Order {
  private _orderId: OrderId = uuidV4();
  private _orderStatus: OrderStatus = 'open';

  constructor(private readonly cart: ShoppingCart) {}

  get status(): OrderStatus {
    return this._orderStatus;
  }

  get id(): OrderId {
    return this._orderId;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      this.sendMessage('Cart is Empty');
      return;
    }

    this.sendMessage(
      `Your order for the amount of $${this.cart.total()}, has been received.`,
    );
    this.saveOrder();
    this.cart.clear();
  }

  saveOrder(): void {
    this.sendMessage('Your order has been saved');
    console.log(`Order status: ${this._orderStatus}`);
  }

  sendMessage(message: string): void {
    console.log(message);
  }
}
