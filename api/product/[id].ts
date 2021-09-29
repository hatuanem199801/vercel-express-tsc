import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  console.log(req.query);
  const { id } = req.query;
  res.json({ message: "Product api has working", data: [{ id: id }] });
};
