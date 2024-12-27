import { Snowflake } from "@theinternetfolks/snowflake";

const getId = (): string => Snowflake.generate();

export const helper = {
    getId
}