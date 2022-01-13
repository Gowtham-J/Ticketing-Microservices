import express, { Request, Response } from "express";
import { body } from "express-validator";
import { requireAuth, validateRequest } from "@gjtickets/common";
import { Ticket } from "../models/ticket";
import { TicketCreatedPublisher } from "../events/publishers/ticket-created-publisher";
import { natsWrapper } from "../nats-wrapper";

const router = express.Router();

router.post(
  "/api/tickets",
  requireAuth,
  [
    body("title").not().isEmpty().withMessage("Title is required"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price must be greater than zero"),
    body("address").not().isEmpty().withMessage("Address is required"),
    body("duration").not().isEmpty().withMessage("Duration is required"),
    body("city").not().isEmpty().withMessage("City is required"),
    body("state").not().isEmpty().withMessage("State is required"),
    body("country").not().isEmpty().withMessage("Country is required"),
    body("image").not().isEmpty().withMessage("Image is required"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const {
      title,
      price,
      address,
      duration,
      description,
      city,
      state,
      country,
      image,
    } = req.body;

    const ticket = Ticket.build({
      title,
      price,
      description,
      address,
      duration,
      city,
      state,
      country,
      image,
      userId: req.currentUser!.id,
    });
    await ticket.save();
    await new TicketCreatedPublisher(natsWrapper.client).publish({
      id: ticket.id,
      title: ticket.title,
      price: ticket.price,
      // address: ticket,
      // duration: ticket.duration,
      // city: ticket.city,
      userId: ticket.userId,
      version: ticket.version,
    });

    res.status(201).send(ticket);
  }
);

export { router as createTicketRouter };
