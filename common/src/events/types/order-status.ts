export enum OrderStatus {
  // when the oder has been created, but the
  // ticket it is trying to order has not been reserved
  Created = "created",

  //   The ticket the order id trying to reserve has already
  //    been reserved, or when the user has cancelled the order
  //   The order expires before payment
  Cancelled = "cancelled",

  //   The order has successfully reserved thr ticket
  AwaitingPayment = "awaitingPayment",

  //   THe order has reserved the ticket and the user has
  // Provided payment successfully
  Complete = "complete",
}
