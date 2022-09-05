import { NextPage } from "next";

export type NextPageWhithLayout = NextPage & {
    layout?: string;
}