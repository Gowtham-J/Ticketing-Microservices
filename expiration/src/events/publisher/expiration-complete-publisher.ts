import {
  Publisher,
  Subjects,
  ExpirationCompleteEvent,
} from "@gjtickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
