export interface IMessage {
    role: "system" | "user" | "assistant";
    content: string;
}

export interface IDataCompletion {
    model: string,
    messages?: Array<IMessage>;
    temperature: number;
}

export interface IResultOpenAI {
    status: boolean;
    content?: string;
    error?: {
        message: string;
        type: string;
        param: any;
        code: string;
    };
}