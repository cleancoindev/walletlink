import { Callback } from "./common";
import { JSONRPCRequest, JSONRPCResponse } from "./JSONRPC";
export interface Web3Provider {
    send(request: JSONRPCRequest): JSONRPCResponse;
    send(request: JSONRPCRequest[]): JSONRPCResponse[];
    send(request: JSONRPCRequest, callback: Callback<JSONRPCResponse>): void;
    send(request: JSONRPCRequest[], callback: Callback<JSONRPCResponse[]>): void;
    send<T = any>(method: string, params?: any[] | any): Promise<T>;
    sendAsync(request: JSONRPCRequest, callback: Callback<JSONRPCResponse>): void;
    sendAsync(request: JSONRPCRequest[], callback: Callback<JSONRPCResponse[]>): void;
    host: string;
    connected: boolean;
    supportsSubscriptions(): boolean;
    disconnect(): boolean;
}
export declare enum ProviderErrorCode {
    USER_DENIED_REQUEST_ACCOUNTS = 4001,
    USER_DENIED_CREATE_ACCOUNT = 4010,
    UNAUTHORIZED = 4100,
    UNSUPPORTED_METHOD = 4200,
    USER_DENIED_REQUEST_SIGNATURE = -32603
}
export declare class ProviderError extends Error {
    code?: number | undefined;
    data?: any;
    constructor(message: string, code?: number | undefined, data?: any);
}
