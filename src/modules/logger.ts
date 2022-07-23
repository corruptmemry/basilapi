import * as winston from "winston";

const myFormat = winston.format.printf(
  ({ timestamp, level, message, meta }) => {
    return `[${timestamp}] [${level}] ${message}`;
  }
);

export const createLogger = () => {
  const Winston = winston.createLogger({
    transports: [
      new winston.transports.Console({
        level: "debug",
      }),
    ],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.splat(),
      winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      myFormat
    ),
  });
  winston.addColors({
    error: "red",
    warn: "yellow",
    info: "green",
    debug: "gray",
    silly: "magenta",
    verbose: "blue",
  });
  return Winston;
};
