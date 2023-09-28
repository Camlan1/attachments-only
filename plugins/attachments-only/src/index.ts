import { logger } from "@vendetta";
import vendetta from "@vendetta"
import Settings from "./Settings";

export default {
    onLoad: () => {
        logger.log("Hello world!");
        logger.log(window)
        logger.log(vendetta)
    },
    onUnload: () => {
        logger.log("Goodbye, world.");
    },
    settings: Settings,
}