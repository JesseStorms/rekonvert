import type { Arguments, CommandBuilder } from "yargs";

type Options = {
};

export const command: string = "info";
export const describe: string = `shows information about the project`;

export const builder: CommandBuilder<Options, Options> = (yargs) => {
    return yargs
}

export const handler = async (argv: Arguments<Options>) => {
    process.stdout.write(`This CLI tool literally exists to just convert rekordbox.xml files with Tidal tracks to be compatible at the moment. It might do more in the future, but for now, that's it.\n`);
    process.stdout.write(`It should retain cuepoints, loops, and other metadata transferring from OS\n`);
    process.stdout.write(`If you have any issues, please open an issue on the github repo`);

    process.exit(0);
}