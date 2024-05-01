/**
 * Interface segregation prrinciple( Principio de segregação de Interface)
 * Os Clientes não devem ser foçados a depender de interfaces ou membros abstratos que que não utilizam.
 * 
 * Customers should not forced to depend on interfaces or abstract members that they do not use.
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
