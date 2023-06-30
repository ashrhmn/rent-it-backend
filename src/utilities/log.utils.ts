import { appConfig } from "@/config";
import { tryOr } from "@/utilities/error.utils";
import { appendFile } from "fs/promises";

const appendToLogFile = async (
  level: "ERROR" | "DEBUG" | "WARN",
  message?: any,
  ...optionalParams: any[]
) => {
  if (!appConfig.env.LOG_FILE) return;
  const logMessage = `${level}: ${tryOr(message, () =>
    JSON.stringify(message, null, 2),
  )} ${tryOr(optionalParams, () => JSON.stringify(optionalParams, null, 2))}\n`;
  await appendFile("app.log", logMessage);
};

export const delog = (message?: any, ...optionalParams: any[]) => {
  if (!appConfig.env.DEBUG_LOG) return;
  console.log(message, ...optionalParams);
  appendToLogFile("DEBUG", message, ...optionalParams);
};

export const wlog = (message?: any, ...optionalParams: any[]) => {
  if (!appConfig.env.WARN_LOG) return;
  console.warn(message, ...optionalParams);
  appendToLogFile("WARN", message, ...optionalParams);
};

export const elog = (message?: any, ...optionalParams: any[]) => {
  if (!appConfig.env.ERROR_LOG) return;
  console.error(message, ...optionalParams);
  appendToLogFile("ERROR", message, ...optionalParams);
};

export const logErrorAndReturn =
  <T>(returnVal: T, message?: any, ...optionalParams: any[]) =>
  (error: any) => {
    elog(message, ...optionalParams, error);
    return returnVal;
  };
