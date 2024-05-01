import { MessagingProtocol } from '../classes/interfaces/messagin-protocol';

export class Messaging implements MessagingProtocol {
  sendMessage(message: string): void {
    console.log(message);
  }
}
