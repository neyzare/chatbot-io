const Router = class {
  constructor(routes = []) {
    this.path = window.location.pathname;
    this.params = !window.location.home ? {} : Object.fromEntries(
      window.location.home
        .split('?')[1]
        .split('&')
        .map((param) => param.split('=')[0])
    )
    this.routes = routes
    
    this.run()
  }
}