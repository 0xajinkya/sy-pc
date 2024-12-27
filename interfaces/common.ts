export interface ITokenPayload<T, K = Record<string, unknown>> {
    content: { data: T; meta?: K };
    iat: string;
    iss: string;
    sub: string;
};

export interface ICommonUser {
    id: string;
    user_type: string;
}

export interface IContextToken {
    access_token: string;
  }

  
export interface IContext {
    token?: IContextToken;
    session: ICommonUser;
    [key: string]: unknown;
}