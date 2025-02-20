# Blinko Plugin Template

A template for building Blinko plugins quickly and efficiently.

## 🚀 Quick Start

1. Clone this repository
```bash
git clone https://github.com/blinko-space/blinko-plugin-template.git
cd blinko-plugin-template
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Visit `http://localhost:3000` for connection instructions

## 📖 Official Documentation

> ⭐ **Important: Please visit [Blinko Plugin Development Documentation](https://blinko.mintlify.app/plugins/get-started) for complete development guides and best practices!**

## 🛠️ Development Commands

- `npm run dev` - Start development server
- `npm run release:publish` - Build and publish plugin

## 📁 Directory Structure

```
├── src/              # Source code directory
├── dist/            # Development build output
├── release/         # Production build output
├── plugin.json      # Plugin configuration
└── vite.config.ts   # Vite configuration
```

## 🔧 Configuration

Configure your plugin in `plugin.json`:

```json
{
  "name": "your-plugin-name",
  "displayName": "Your Plugin Display Name",
  "description": "Your plugin description",
  "version": "1.0.0",
  "author": "Your Name",
  "minAppVersion": "0.0.1"
}
```

## 📝 License

MIT