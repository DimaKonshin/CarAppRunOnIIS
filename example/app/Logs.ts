export class Log {
    text: string;
    type: string;
    date: Date;

    constructor(text: string, type: string, date: Date) {
        this.text = text;
        this.type = type;
        this.date = date;
    }
}

export class Logs {
    private static list: Array<Log> = new Array<Log>();

    static Add(log: Log): void {
        this.list.push(log);
    }

    static GetListOfLogs(): Array<Log> {
        return Logs.list;
    }
}
