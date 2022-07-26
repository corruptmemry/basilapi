import { createLogger } from "./modules/logger";
import { Server } from "./modules/server";

export const logger = createLogger();
export const main = async (): Promise<boolean> => {
  new Server();
  return true;
};

main();
