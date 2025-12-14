#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import figlet from "figlet";

const emailValue = "mugishapascal@gmail.com";
const numberValue = "+250786493844";
const githubValue = "https://github.com/MUGISHA-Pascal";
const linkedinValue = "https://www.linkedin.com/in/mugisha-pascal";

const email = chalk.bold.blue(emailValue);
const number = chalk.bold.blue(numberValue);
const github = chalk.bold.yellow(githubValue);
const linkedin = chalk.bold.yellow(linkedinValue);
const role = chalk.bold.yellow("Software engineer");
const name = chalk.bold("MUGISHA Pascal");

// Handle command-line arguments
const args = process.argv.slice(2);
if (args.length > 0) {
  const arg = args[0].toLowerCase();
  switch (arg) {
    case "--email":
      console.log(emailValue);
      process.exit(0);
    case "--phone":
      console.log(numberValue);
      process.exit(0);
    case "--github":
      console.log(githubValue);
      process.exit(0);
    case "--linkedin":
      console.log(linkedinValue);
      process.exit(0);
    case "--help":
      console.log(`
${chalk.bold.cyan("MUGISHA Pascal - Business Card")}
${chalk.gray("Usage: npx mugishapascal [option]")}

${chalk.bold.magenta("Options:")}
  --email         Display email address
  --phone         Display phone number
  --github        Display GitHub profile
  --linkedin      Display LinkedIn profile
  --all           Display all contact info (JSON format)
  --social        Display social media links (JSON format)
  --card          Display compact card format
  --ascii         Display ASCII art name (magenta)
  --random-color  Display card with random color theme
  --version       Display version information
  --help          Show this help message
      `);
      process.exit(0);
    case "--all":
      const allInfo = {
        name: "MUGISHA Pascal",
        role: "Software engineer",
        email: emailValue,
        phone: numberValue,
        github: githubValue,
        linkedin: linkedinValue,
      };
      console.log(JSON.stringify(allInfo, null, 2));
      process.exit(0);
    case "--version":
      console.log("2.0.6");
      process.exit(0);
    case "--social":
      const socialLinks = {
        github: githubValue,
        linkedin: linkedinValue,
      };
      console.log(JSON.stringify(socialLinks, null, 2));
      process.exit(0);
    case "--card":
      const compactCard = `${chalk.bold.cyan(
        "MUGISHA Pascal"
      )} | ${chalk.yellow("Software engineer")}
${chalk.blue(emailValue)} | ${chalk.blue(numberValue)}
${chalk.yellow(githubValue)}
${chalk.yellow(linkedinValue)}`;
      console.log(compactCard);
      process.exit(0);
    case "--ascii":
      const asciiArt = figlet.textSync("MUGISHA", {
        horizontalLayout: "default",
        verticalLayout: "default",
      });
      console.log(chalk.magenta(asciiArt));
      process.exit(0);
    case "--random-color":
      const colorOptions = [
        "red",
        "green",
        "yellow",
        "blue",
        "magenta",
        "cyan",
      ];
      const selectedColor =
        colorOptions[Math.floor(Math.random() * colorOptions.length)];
      const randomColoredAscii = figlet.textSync("MUGISHA", {
        horizontalLayout: "default",
        verticalLayout: "default",
      });
      let coloredText = randomColoredAscii;
      if (selectedColor === "red") coloredText = chalk.red(randomColoredAscii);
      else if (selectedColor === "green")
        coloredText = chalk.green(randomColoredAscii);
      else if (selectedColor === "yellow")
        coloredText = chalk.yellow(randomColoredAscii);
      else if (selectedColor === "blue")
        coloredText = chalk.blue(randomColoredAscii);
      else if (selectedColor === "magenta")
        coloredText = chalk.magenta(randomColoredAscii);
      else if (selectedColor === "cyan")
        coloredText = chalk.cyan(randomColoredAscii);

      const coloredOutput = `${coloredText}
${chalk.bold.green("role")}         : ${role} 
${chalk.bold.green("phone number")} : ${number} 
${chalk.bold.green("email")}        : ${email} 
${chalk.bold.green("linkedin")}     : ${linkedin} 
${chalk.bold.green("github")}       : ${github} 
`;
      const coloredFrame = boxen(coloredOutput, {
        padding: 1,
        borderStyle: "round",
        margin: 1,
        borderColor: selectedColor as any,
      });
      console.log(coloredFrame);
      process.exit(0);
  }
}

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

// Quick reference guide
const quickRef = `
${chalk.bold.magenta("Quick Reference:")}
${chalk.gray("npx mugishapascal --email")}    Display email address
${chalk.gray("npx mugishapascal --phone")}    Display phone number
${chalk.gray("npx mugishapascal --github")}   Display GitHub profile
${chalk.gray("npx mugishapascal --linkedin")} Display LinkedIn profile
`;
console.log(quickRef);
