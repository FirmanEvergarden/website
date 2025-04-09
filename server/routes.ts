import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Empty API routes for this application as it's a static website
  // The frontend will be served by the catch-all route in the server/index.ts file

  const httpServer = createServer(app);
  return httpServer;
}
