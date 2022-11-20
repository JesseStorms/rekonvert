import { replaceInFile } from "replace-in-file";
import { copyFile } from "fs/promises";
import {resolve} from "path"

export async function convertToMacOS(source: string, target: string) {
    // copy the source to the target
    try{
        await copyFile(resolve(source), process.cwd()+`${process.platform == 'win32' ? '\\':"/"}`+target);
    }
    catch(e: any){
        process.stderr.write("Can't open file: " + e.message);
    }

    return await replaceInFile({
        files: target,
        from: /file:\/\/localhost\/tidal/g,
        to: 'file://localhosttidal',
        countMatches: true,
    }).then((results) => {
        process.stdout.write(`converted ${source} to MacOS, outputting to ${target}\n`);
        process.stdout.write(`Changed ${results[0].numMatches} matches`);
    }).catch((error) => {
        process.stderr.write("Error occurred: " + error);
    });
}
