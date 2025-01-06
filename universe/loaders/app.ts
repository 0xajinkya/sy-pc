import type express from "express";
import { FrameworkLoader } from "./framework";

export const AppLoader = async ({
    app
}: {
    app?: express.Application
}) => {
    if (app) {
        app = FrameworkLoader({ app });
    }
}