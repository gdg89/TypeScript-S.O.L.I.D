import { v4 as uuidV4 } from 'uuid';
import { OrderStatus, OrderId } from './interfaces/order-types';
import { ShoppingCart } from './shopping-cart';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';

export class Order {
  private _orderId: OrderId = uuidV4();
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
  ) {}

  get status(): OrderStatus {
    return this._orderStatus;
  }

  get id(): OrderId {
    return this._orderId;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      this.messaging.sendMessage('Cart is Empty');
      return;
    }

    this.messaging.sendMessage(
      `Your order for the amount of $${this.cart.total()}, has been received.`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
    this._orderStatus = 'closed';
  }
}
