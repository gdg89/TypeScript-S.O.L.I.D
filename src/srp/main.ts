import { ShoppingCart } from './shopping-cart';
import { Order } from './order';

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'Book', price: 32.868 });
shoppingCart.addItem({ name: 'Pencil', price: 0.751 });
shoppingCart.addItem({ name: 'Umbrella', price: 20.853 });
console.log(shoppingCart.items[1].price.toFixed(2));
console.log(shoppingCart.total());
shoppingCart.checkout();
shoppingCart.checkout();

const order = new Order();
console.log(order);
