import { createLogger } from "./modules/logger";
import { Server } from "./modules/server";

export const logger = createLogger();
export const main = async (): Promise<boolean> => {
  logger.warn(`This is an development version`);
  logger.info("Config read");
  new Server();
  return true;
};

main();
