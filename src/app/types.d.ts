
declare module "mock-stdin";

declare type NodeLikeCallback<T> =
  (error: Error | null, data: T) => void;
