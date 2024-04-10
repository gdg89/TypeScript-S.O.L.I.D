type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }
  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      this.sendMessage('Cart is Empty');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(
      `Your order for the amount of $${this.total()}, has been received.`,
    );
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(message: string): void {
    console.log(message);
  }

  saveOrder(): void {
    this.sendMessage('Your order has been saved');
    console.log(`Order status: ${this._orderStatus}`);
  }

  clear(): void {
    this._items.splice(0, this._items.length);
  }
}

const shoppingCart = new ShoppingCartLegacy();
shoppingCart.addItem({ name: 'Book', price: 32.868 });
shoppingCart.addItem({ name: 'Pencil', price: 0.751 });
shoppingCart.addItem({ name: 'Umbrella', price: 20.853 });
console.log(shoppingCart.items[1].price.toFixed(2));
console.log(shoppingCart.total());
shoppingCart.checkout();
shoppingCart.checkout();
