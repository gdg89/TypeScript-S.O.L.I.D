/**
 * Modulos de alto nivel não devem depender de modulos de baixo nivel.
 * Ambos devem depender de abstrações.
 * Depensa de Abstrações não de implementações.
 * Abstrações não devem depende de  detalhes.Detalhes devem 
 * depender de abstrações.
 * 
 * High-level modules should not depend on low-level modules.
 * Both should depend on abstractions.
 * Abstractions sould not depend on implementations.
 * Details sould depend on abstractions, no abstraction on details.
 * 

 */
import { ShoppingCart } from './classes/shopping-cart';
import { Order } from './classes/order';
//import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { FiftyPercentDiscount } from './classes/discount';
import { EntrepriseCustomer, IndividualCustomers } from './classes/customers';
import { MessagingProtocol } from './classes/interfaces/messagin-protocol';

const fiftyPrecentDiscount = new FiftyPercentDiscount();
//const noDiscount = new NoDiscount();
//const tenPrecentDiscount = new TenPercentDiscount();
//const messaging = new Messaging();
const persistency = new Persistency();
const shoppingCart = new ShoppingCart(fiftyPrecentDiscount);
const individualCustomer = new IndividualCustomers(
  'Nare',
  'Saalo',
  '654.156.894-36',
);

class MessagingMock implements MessagingProtocol {
  sendMessage(): void {
    console.log(
      "A 'MOCK', in software development, refers to a simulated object that replicates the behavior of a real object in a controlled manner during testing",
    );
  }
}
const messagingMock = new MessagingMock();

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
  messagingMock,
  persistency,
  individualCustomer,
);

const enterpriseOrder = new Order(
  shoppingCart,
  messagingMock,
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
