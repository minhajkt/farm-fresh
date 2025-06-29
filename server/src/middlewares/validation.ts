import { NextFunction, Request, Response } from 'express';
import {body, validationResult} from 'express-validator'

export const registerValidation = [
  body("name")
    .isLength({ min: 3 })
    .withMessage("Name should be of minimum 3 charecters")
    .isAlpha("en-US", { ignore: " " })
    .withMessage("Name should not contain numbers")
    .trim(),

  body("role")
  .isIn(["Buyer", "Farmer"])
  .withMessage("Invalid role"),

  body("farmName")
    .optional()
    .isLength({ min: 3 })
    .withMessage("Farm name should be of minimum 3 charecters")
    .isAlpha("en-US", { ignore: " " })
    .withMessage("Farm name should not contain numbers")
    .trim(),

  body("location")
    .notEmpty()
    .isIn(["Calicut", "Kochi", "Trivandrum"])
    .withMessage("Location is required"),

  body("phone")
  .matches(/^\+91\d{10}$/)
  .withMessage("Phone number must be a valid Indian number"),

  body("typeOfProduce")
    .optional()
    .isIn(["Fruits", "Vegetables", "Rice", "Others"])
    .withMessage("Please add type of Produce")
    .trim(),
];

export const validate = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
         res.status(400).json({
           success: false,
           message: "Validation error",
           errors: errors.array(),
         });         
    return;
        }
    next()  
}
