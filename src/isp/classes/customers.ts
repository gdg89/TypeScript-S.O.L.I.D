import {
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
} from './interfaces/customer-protocol';

export class IndividualCustomers implements IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
  cnpj: string;

  constructor(firstName: string, lastName: string, cpf: string, cnpj: string) {
    this.firstName = firstName;
    this.lastName = firstName;
    this.cpf = firstName;
    this.cnpj = cnpj;
  }
}

export class EntrepriseCustomer implements EnterpriseCustomerProtocol {
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
}
