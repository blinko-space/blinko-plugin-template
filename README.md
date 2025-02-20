# Blinko Plugin Template

A template for building Blinko plugins quickly and efficiently.

[Blinko Plugin Development Documentation](https://blinko.mintlify.app/plugins/get-started)

## 🚀 Quick Start

1. Clone this repository
```bash
git clone https://github.com/blinko-space/blinko-plugin-template.git
cd blinko-plugin-template
```

2. Install dependencies
```bash
bun install
```

3. Start development server
```bash
bun run dev
```

4. Visit `http://localhost:3000` for connection instructions

## 📖 Official Documentation

> ⭐ **Important: Please visit [Blinko Plugin Development Documentation](https://blinko.mintlify.app/plugins/get-started) for complete development guides and best practices!**

## 🛠️ Development Commands

- `bun run dev` - Start development server
- `bun run release:publish` - Build and publish plugin

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
  "name": "blinko-plugin-demo",
  "author": "blinko-offical",
  "url": "https://github.com/blinko-space/blinko-plugin-template",
  "version": "0.0.4",
  "minAppVersion": "0.0.0",
  "displayName": {
    "default": "Blinko plugin demo",
    "zh": "Blinko插件示例"
  },
  "description": {
    "default": "This is a blinko plugin demo, you can use it as a template to create your own plugin.",
    "zh": "这是一个blinko插件示例，你可以使用它作为模板来创建自己的插件。"
  },
  "readme": {
    "default": "README.md",
    "zh": "README_zh.md"
  }
}
```

## 📝 License

MIT