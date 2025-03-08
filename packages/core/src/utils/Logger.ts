export enum LogLevel {
  INFO = "[INFO]",
  ERROR = "[ERROR]",
}

interface ILogger {
  info: (title: string, message: any) => void;
  error: (title: string, error: Error) => void;
}

const loggerStyle = {
  [LogLevel.INFO]: "color: #0066FF",
  [LogLevel.ERROR]: "color: #FF6600",
};

class Logger implements ILogger {
  // 注意 static 的使用
  private static instance: Logger;

  // 构造函数私有，使用单例模式
  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  info(title: string, message: any) {
    console.group(`%c${LogLevel.INFO} ${title}`, loggerStyle[LogLevel.INFO]);
    console.dir(message);
    console.groupEnd();
  }

  error(title: string, error: Error) {
    console.group(`%c${LogLevel.ERROR} ${title}`, loggerStyle[LogLevel.ERROR]);
    console.dir(error);
    console.groupEnd();
  }
}

export default Logger.getInstance();
