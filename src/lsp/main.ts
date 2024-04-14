/**
 * LSP - Liskov Substitution Principle
 * Ele diz que você deve ser capaz de
 * substituir qualquer instância de uma
 * classe base por uma de suas classes
 * derivadas sem alterar o comportamento
 * esperado do programa.
 *
 * Exemplo: Se o meu programa espera um Animal, algodo tipo
 * Cachorro(que herda de Animal) deve servir como qualquer outro
 * Animal.
 *
 */
import { ShoppingCart } from './classes/shopping-cart';
import { Order } from './classes/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { FiftyPercentDiscount } from './classes/discount';

const fiftyPrecentDiscount = new FiftyPercentDiscount();
//const noDiscount = new NoDiscount();
//const tenPrecentDiscount = new TenPercentDiscount();
const messaging = new Messaging();
const persistency = new Persistency();
const shoppingCart = new ShoppingCart(fiftyPrecentDiscount);

shoppingCart.addItem(new Product('Book', 32.868));
shoppingCart.addItem(new Product('Pencil', 0.751));
shoppingCart.addItem(new Product('Umbrella', 20.853));
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log('DISCOUNT: ' + shoppingCart.totalWithDiscount());
const order = new Order(shoppingCart, messaging, persistency);

console.log('Order 1: ' + order.status);
order.checkout();
console.log('Order 1: ' + order.status);
