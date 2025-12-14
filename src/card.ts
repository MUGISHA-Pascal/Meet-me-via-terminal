#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import figlet from "figlet";

const email = chalk.bold.blue("mugishapascal@gmail.com");
const number = chalk.bold.blue("+250786493844");
const github = chalk.bold.yellow("https://github.com/MUGISHA-Pascal");
const linkedin = chalk.bold.yellow(
  "https://www.linkedin.com/in/mugisha-pascal"
);
const role = chalk.bold.yellow("Software engineer");
const name = chalk.bold("MUGISHA Pascal");

// Create ASCII art header using figlet
const asciiName = figlet.textSync("MUGISHA", {
  horizontalLayout: "default",
  verticalLayout: "default",
});

const output = `${chalk.cyan(asciiName)}
${chalk.bold.green("role")}         : ${role} 
${chalk.bold.green("phone number")} : ${number} 
${chalk.bold.green("email")}        : ${email} 
${chalk.bold.green("linkedin")}     : ${linkedin} 
${chalk.bold.green("github")}       : ${github} 
`;
const frameOutput = boxen(output, {
  padding: 1,
  borderStyle: "round",
  margin: 1,
  borderColor: "green",
});
console.log(frameOutput);
