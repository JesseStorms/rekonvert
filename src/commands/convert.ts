import type { Arguments, CommandBuilder } from "yargs";
import {convertToMacOS} from "../utils/convert/macos";
import {convertToWindows} from "../utils/convert/windows";
type Options = {
    file: string;
    windows: boolean|undefined; // makes it to windows
    macos: boolean|undefined; // makes it to macos
    output: string|undefined; // makes it to macos
};

export const command: string = "convert <file>";
export const describe: string = `converts your rekordbox.xml to be windows or macos compatible`;

export const builder: CommandBuilder<Options, Options> = (yargs) => {
    return yargs
        .positional("file", {
            type: "string",
            describe: "path to the rekordbox.xml file",
            default: "rekordbox.xml",
        })
        .option("w", {
            alias: "windows",
            type: "boolean",
            describe: "converts to windows compatible",
            conflicts: "macos",
        })
        .option("m", {
            alias: "macos",
            type: "boolean",
            describe: "converts to macos compatible",
            conflicts: "windows",
        })
        .option("o", {
            default: "rekonverted.xml",
            alias: "output",
            type: "string",
            describe: "output file name",
        })
}

export const handler = async (argv: Arguments<Options>) => {
    const {windows } = argv;
    let { macos, output, file } = argv;
    if (!windows && !macos) {
        console.log("no option selected, defaulting to macos");
        macos = true;
    }
    if (!file){
        console.log("no file selected, defaulting to rekordbox.xml");
        file = "rekordbox.xml";
    }
    if (!output) {
        console.log("no output selected, defaulting to rekonverted.xml");
        output="rekonverted.xml";
    }
    if (windows) {
        await convertToWindows(file, output);
    } else {
        await convertToMacOS(file, output);
    }
    process.exit(0);
}