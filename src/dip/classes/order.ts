import { v4 as uuidV4 } from 'uuid';
import { OrderStatus, OrderId } from './interfaces/order-types';
import { CustomerOrderProtocol } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { MessagingProtocol } from './interfaces/messagin-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';

export class Order {
  private _orderId: OrderId = uuidV4();
  private _orderStatus: OrderStatus = 'open';

  constructor(
    //Dependencies
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrderProtocol,
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
      `Your order for the amount of $${this.cart.totalWithDiscount()}, has been received.`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
    this._orderStatus = 'closed';
    console.log(
      'The Customer is: ',
      this.customer.getName(),
      this.customer.getIDN(),
    );
  }
}
