# MUGISHA Pascal - Business Card

A personal npm business card package that displays contact information and social media links in the terminal.

## Installation

```bash
npm install -g mugishapascal
```

Or use directly with npx:

```bash
npx mugishapascal
```

## Features

### Default Display

Run `npx mugishapascal` to display a beautifully formatted business card with:

- ASCII art name header
- Role (Software engineer)
- Contact information (email, phone)
- Social media links (GitHub, LinkedIn)
- Green bordered box with rounded corners

### Command-Line Options

| Option           | Description                                                                    |
| ---------------- | ------------------------------------------------------------------------------ |
| `--email`        | Display email address only                                                     |
| `--phone`        | Display phone number only                                                      |
| `--github`       | Display GitHub profile URL                                                     |
| `--linkedin`     | Display LinkedIn profile URL                                                   |
| `--all`          | Display all contact info in JSON format                                        |
| `--social`       | Display social media links in JSON format                                      |
| `--card`         | Display compact card format (single line)                                      |
| `--ascii`        | Display ASCII art name in magenta                                              |
| `--random-color` | Display card with random color theme (red, green, yellow, blue, magenta, cyan) |
| `--version`      | Display version information                                                    |
| `--help`         | Show help message with all options                                             |

## Usage Examples

```bash
# Display full business card
npx mugishapascal

# Get specific information
npx mugishapascal --email
npx mugishapascal --phone
npx mugishapascal --github
npx mugishapascal --linkedin

# Get structured data
npx mugishapascal --all
npx mugishapascal --social

# Display variants
npx mugishapascal --card
npx mugishapascal --ascii
npx mugishapascal --random-color

# Get help
npx mugishapascal --help
```

## Technologies Used

- **chalk** - Terminal string styling
- **boxen** - Create boxes in the terminal
- **figlet** - ASCII art text generation
- **TypeScript** - Type-safe development

## License

MIT
