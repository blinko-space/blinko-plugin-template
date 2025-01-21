
export default class MyCustomPlugin {
  name = 'my-custom-plugin'
  constructor(args: any) {
    Object.assign(this, args);
  }

  mount(context: any) {
    console.log('MyCustomPlugin mounting with context:', context);
    console.log(context.api);
  }

  init() {
    console.log('MyCustomPlugin initializing');
  }

  destroy() {
    console.log('MyCustomPlugin destroying');
  }
}