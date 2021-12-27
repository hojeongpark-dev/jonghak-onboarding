import { Maybe } from "../../graphql-types";

export type NullablePromise<T> = Promise<T | null | undefined>;

export type Nullable<T> = Maybe<T> | undefined;

export type Undefinable<T> = T | undefined;
