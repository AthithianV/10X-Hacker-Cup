import winston from "winston";
import { format as dateFormat } from "date-fns-tz";

const customDateFormat = () => {
    return dateFormat(new Date(), 'yyyy-MM-dd HH:mm:ss', { timeZone: process.env.TIME_ZONE });
  };
  

const fileFormat = winston.format.combine(
    winston.format.timestamp({ format: customDateFormat }),
    winston.format.json(),
    winston.format.prettyPrint(),
);
  

export const appLogger = winston.createLogger({
    level: "info",
    transports: [
        new winston.transports.File({filename: "./logs/app.log"})
    ]
})

export const errorLogger = winston.createLogger({
    level: "error",
    transports: [
        new winston.transports.File({filename: "./logs/error.log"})
    ]
})

if (process.env.NODE_ENV !== 'production') {
    appLogger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
    errorLogger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}