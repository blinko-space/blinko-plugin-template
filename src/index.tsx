/** @jsxImportSource preact */
/// <reference types="systemjs" />
/// <reference types="blinko" />
import { render } from 'preact/compat';
import { App } from "./app"
import type { BasePlugin, PluginType } from 'blinko';

System.register([], (exports) => ({
  execute: () => {
    exports('default', class Plugin implements BasePlugin {
      name = "my-note-plugin";
      description = "一个笔记插件";
      version = "1.0.5";
      author = "blinko-offical";
      type = 'frontend' as PluginType;

      async init() {
        console.log(123123)
        window.Blinko.addToolBarIcon({
          name: "test",
          icon: "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-file'><path d='M13 3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z'/><polyline points='14 3 14 9 19 9'/></svg>",
          placement: 'right',
          content: () => {
            const container = document.createElement('div');
            container.setAttribute('data-plugin', 'my-note-plugin');
            render(<App />, container);
            return container;
          }
        });
      }


      destroy() {
        console.log('destroy')
      }
    });
  }
}));