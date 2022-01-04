import nats, { Message, Stan } from "node-nats-streaming";
import { Listener } from "./base-listner";
import { TicketCreatedEvent } from "./ticket-created-event";
import { Subjects } from "./subjects";
export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
  queueGroupName = "payments-service";

  onMessage(data: TicketCreatedEvent["data"], msg: Message) {
    console.log("event data", data);
    // console.log(data.price);
    msg.ack();
  }
}
