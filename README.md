# rekonvert

Tool to convert rekordbox xml files between macOS and Windows. At the moment it only fixes the Tidal links.

## Usage

Download the latest release binary, put it in the same folder as your rekordbox.xml file and run it like shown in the quickstart.

### Quickstart

`$ ./rekonvert -h` to get the help output, it should be self explanatory.

`$ ./rekonvert convert -m rekordbox.xml -o rekordbox_fixed.xml` to convert the file to MacOS.

`$ ./rekonvert convert -w rekordbox.xml -o rekordbox_fixed.xml` to convert the file to Windows.

### Compiling it yourself

Clone the repo, run `pnpm install` and run `pnpm run package:clean` in the root directory. It'll build the binary for all platforms. Then just follow the quickstart.

### TODO:

- [ ] Add support for literally everything else but Tidal
- [ ] Testing scripts