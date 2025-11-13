import express, { Application, Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import cors from "cors";
import cookieParser from "cookie-parser";
import config from "./config";
import routes from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import { IGenericResponse } from "./interfaces/common";

// Initialize Express app
const app: Application = express();

// CORS Configuration - Fix for CORS errors
const allowedOrigins = [
  "https://edvice-frontend.vercel.app",
  "http://localhost:5173",
];

// Middleware
app.use(
  cors({
    // origin: config.frontend_url || "http://localhost:5173",
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or Postman)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// API Routes
app.use("/api/v1", routes);

// Root Route
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(httpStatus.OK).json({
      success: true,
      data: { message: "Welcome Edvice Backend" },
      meta: {},
    } as IGenericResponse<{ message: string }>);
  } catch (error) {
    next(error);
  }
});

// Global Error Handler
app.use(globalErrorHandler);

export default app;
