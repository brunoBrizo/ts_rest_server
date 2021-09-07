import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
  res.json({
    msg: "Wget users",
  });
};

export const getUser = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    msg: "Wget users",
    id,
  });
};

export const insertUser = (req: Request, res: Response) => {
  const { body } = req;
  res.json({
    msg: "insertUser",
  });
};

export const updateUser = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    msg: "updateUser",
    id,
  });
};

export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    msg: "deleteUser",
    id,
  });
};
