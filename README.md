# Vibe Condom - Cursor IDE Config Generator

A professional configuration generator for Cursor IDE that helps developers set up their development environment with best practices, architecture patterns, and workflow configurations.

## Overview

Vibe Condom is a web-based tool that generates configuration files for Cursor IDE based on your selected preferences. It helps protect your codebase by enforcing architectural decisions, design patterns, and development practices through automated configuration.

## Features

- **Architecture Selection**: Choose from various architectural patterns including:

  - Monolith
  - Microservices
  - Serverless
  - Clean Architecture
  - Hexagonal Architecture
  - Event-Driven Architecture
  - And more...

- **Design Patterns**: Implement proven design patterns:

  - SOLID Principles
  - Factory Pattern
  - Singleton Pattern
  - Observer Pattern
  - Strategy Pattern
  - And many others...

- **Development Practices**: Enforce best practices:

  - Test-Driven Development (TDD)
  - Behavior-Driven Development (BDD)
  - Clean Code
  - Code Review
  - CI/CD
  - And more...

- **Git Flow**: Configure your preferred Git workflow:
  - GitFlow
  - Trunk-Based Development
  - Feature Branch Workflow
  - GitHub Flow
  - GitLab Flow
  - And others...

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/vibe-condom.git
   ```

2. Open `index.html` in your web browser.

3. Select your preferred configurations from each category.

4. Click "Generate Configuration" to create your configuration file.

5. Copy the generated configuration and save it as `cursor.json` in your project's root directory.

## Usage

1. Select one or more options from each category (Architecture, Design Patterns, Development Practices, Git Flow).

2. Click the "Generate Configuration" button to view your configuration.

3. Review the generated configuration in the modal window.

4. Use the "Copy to Clipboard" button to copy the configuration.

5. Create a `cursor.json` file in your project's root directory and paste the configuration.

## Deployment

The project is automatically deployed to GitHub Pages using GitHub Actions. The deployment workflow:

1. Triggers on push to the main branch
2. Can be manually triggered from the Actions tab
3. Deploys the site to GitHub Pages
4. Provides a URL for the deployed site

To enable GitHub Pages for your repository:

1. Go to your repository settings
2. Navigate to the "Pages" section
3. Select "GitHub Actions" as the source
4. The site will be available at `https://yourusername.github.io/vibe-condom`

## Configuration Structure

The generated configuration file follows this structure:

```json
{
	"architecture": {
		"type": "selected-architecture",
		"settings": {
			"scalability": true,
			"maintainability": true,
			"security": true
		}
	},
	"patterns": {
		"enabled": ["pattern1", "pattern2"],
		"settings": {
			"strictMode": true,
			"documentation": true
		}
	},
	"practices": {
		"enabled": ["practice1", "practice2"],
		"settings": {
			"enforceStandards": true,
			"codeReview": true,
			"testing": true
		}
	},
	"gitflow": {
		"type": "selected-gitflow",
		"settings": {
			"branchNaming": true,
			"mergeStrategy": "squash",
			"protectedBranches": ["main", "develop"]
		}
	}
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Cursor IDE for providing the configuration system
- The open-source community for inspiration and best practices
