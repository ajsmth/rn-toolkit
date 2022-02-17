const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const fs = require("fs");
const path = require("path");
const util = require("util");
const chalk = require("chalk");
const build = require("./build");
const purge = require("./purge");

const copyfile = util.promisify(fs.copyFile);
const writefile = util.promisify(fs.writeFile);

function cli() {
  yargs(hideBin(process.argv))
    .command(
      "build",
      "Builds a `styles.json` file at the specified path",
      ({ argv }) => {
        let configPath = argv.config || process.cwd();
        const configFileInCwd = path.resolve(configPath, "tailwind.config.js");
        let customConfig = {};

        if (fs.existsSync(configFileInCwd)) {
          customConfig = require(configFileInCwd);
        }

        let outputPath = argv.out || process.cwd();
        const styles = build(customConfig);
        const filePath = path.resolve(outputPath, "styles.json");

        fs.writeFile(filePath, JSON.stringify(styles, null, "\t"), (err) => {
          if (err !== null) {
            console.log("ERR: ", err);
          }

          const relativeStyleJsonPath = path.relative(process.cwd(), filePath);
          console.log("✅ Done!");
          console.log(
            `🎉 The ${chalk.bold(
              `styles.json`
            )} file can be found here: ${relativeStyleJsonPath}`
          );
        });
      }
    )
    .option("config", {
      alias: "c",
      type: "string",
      description: "Path to a tailwind.config.js file",
    })
    .option("out", {
      alias: "o",
      type: "string",
      description: "Where to write the generated styles.json file",
    })
    .command("purge", "Purge unused styles from styles.json", ({ argv }) => {
      const configDir = argv.config || process.cwd();
      const configPath = path.resolve(configDir, "tailwind.config.js");

      const config = require(configPath);
      const styles = build(config);

      const projectFolder = process.cwd();

      config.purge = config.purge || {};

      const filesGlob = config.purge.files;
      const whitelist = config.purge.whitelist;

      const outDir = argv.out || process.cwd();
      const outPath = path.resolve(outDir, "styles.json");

      console.log(`scanning ${projectFolder} for styles`);
      purge(projectFolder, styles, filesGlob, whitelist).then(
        (purgedStyles) => {
          console.log(`Writing purged styles to file ${outPath}`);
          fs.writeFile(
            outPath,
            JSON.stringify(purgedStyles, null, "\t"),
            (err) => {
              if (err !== null) {
                console.log("ERR: ", err);
              }

              console.log("DONE!");
            }
          );
        }
      );
    })
    .option("out", {
      alias: "o",
      type: "string",
      description: "File path to write to",
    })
    .option("config", {
      alias: "c",
      type: "string",
      description: "Path to your tailwind.config.js file",
    })
    .command("init", "initialize a new tailwind setup", async ({ argv }) => {
      const outputDirName = argv.dir || "styles";

      console.log(`Initializing tailwind directory`);
      const inputDir = path.resolve(__dirname, "..", "template");
      const outDir = path.resolve(process.cwd(), outputDirName);

      const inputIndexFile = path.resolve(inputDir, "index.js");
      const inputConfigFile = path.resolve(inputDir, "tailwind.config.js");

      const outputIndexFile = path.resolve(outDir, "index.ts");
      const outputConfigFile = path.resolve(outDir, "tailwind.config.js");
      const outputStylesFile = path.resolve(outDir, "styles.json");

      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir);
      }

      await copyfile(inputConfigFile, outputConfigFile);
      await copyfile(inputIndexFile, outputIndexFile);

      const styles = build(inputConfigFile);
      await writefile(
        outputStylesFile,
        JSON.stringify(styles, null, "\t")
      ).catch((err) => {
        console.log({ err });
      });

      console.log(`✅ Done! - Initialized tailwind in ${outDir}`);
    })
    .option("dir", {
      alias: "d",
      type: "string",
      description:
        "Name of the directory to put template files into - defaults to styles",
    }).argv;
}

module.exports = cli;
