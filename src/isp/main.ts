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
import { EntrepriseCustomer, IndividualCustomers } from './classes/customers';

const fiftyPrecentDiscount = new FiftyPercentDiscount();
//const noDiscount = new NoDiscount();
//const tenPrecentDiscount = new TenPercentDiscount();
const messaging = new Messaging();
const persistency = new Persistency();
const shoppingCart = new ShoppingCart(fiftyPrecentDiscount);
const individualCustomer = new IndividualCustomers(
  'Nare',
  'Saalo',
  '654.156.894-36',
);

const enterpricesCustomer = new EntrepriseCustomer(
  'Riden Suplements',
  '12.1321.5516/611',
);

shoppingCart.addItem(new Product('Book', 32.868));
shoppingCart.addItem(new Product('Pencil', 0.751));
shoppingCart.addItem(new Product('Umbrella', 20.853));
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log('DISCOUNT: ' + shoppingCart.totalWithDiscount());
const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  individualCustomer,
);

const enterpriseOrder = new Order(
  shoppingCart,
  messaging,
  persistency,
  enterpricesCustomer,
);

console.log('Order 1: ' + order.status);
order.checkout();
console.log('Order 1: ' + order.status);
console.log('###### ENTERPRICES #####');
console.log('Enterprises Order 1: ' + enterpriseOrder.status);
enterpriseOrder.checkout();
console.log('Enterprises Order 1: ' + enterpriseOrder.status);
