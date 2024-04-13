/**
 * SRP - Princípio da Responsabilidade Única (Single Responsibility Principle):
 * Este princípio afirma que uma classe deve ter apenas uma razão para mudar. Em outras palavras, uma classe deve ter apenas
 * uma responsabilidade e deve fazer apenas uma coisa. Isso ajuda a manter o código mais coeso e facilita a manutenção.
 *
 */
import { ShoppingCart } from './entities/shopping-cart';
import { Order } from './entities/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';

const messaging = new Messaging();
const persistency = new Persistency();
const shoppingCart = new ShoppingCart();

shoppingCart.addItem(new Product('Book', 32.868));
shoppingCart.addItem(new Product('Pencil', 0.751));
shoppingCart.addItem(new Product('Umbrella', 20.853));
console.log(shoppingCart.items);
console.log(shoppingCart.total());

const order = new Order(shoppingCart, messaging, persistency);

console.log('Order 1: ' + order.status);
order.checkout();
console.log('Order 1: ' + order.status);
