/**
 * OCP - Open Close Principle
 * Princípio do Aberto/Fechado (Open/Closed Principle):
 * Este princípio estabelece que as entidades de software, como classes, módulos e funções, devem ser abertas para extensão,
 * mas fechadas para modificação. Isso significa que o comportamento de uma entidade deve ser estendido sem alterar seu
 * código-fonte original.
 */
import { ShoppingCart } from './classes/shopping-cart';
import { Order } from './classes/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import {
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from './classes/discount';

//const fiftyPrecentDiscount = new FiftyPercentDiscount();
const noDiscount = new NoDiscount();
//const tenPrecentDiscount = new TenPercentDiscount();
const messaging = new Messaging();
const persistency = new Persistency();
const shoppingCart = new ShoppingCart(noDiscount);

shoppingCart.addItem(new Product('Book', 32.868));
shoppingCart.addItem(new Product('Pencil', 0.751));
shoppingCart.addItem(new Product('Umbrella', 20.853));
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log('DISCOUNT 50%: ' + shoppingCart.totalWithDiscount());
const order = new Order(shoppingCart, messaging, persistency);

console.log('Order 1: ' + order.status);
order.checkout();
console.log('Order 1: ' + order.status);
