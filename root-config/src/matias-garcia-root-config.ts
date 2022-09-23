import { registerApplication, start } from "single-spa";

/*registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});*/

 registerApplication({
   name: "@matias-garcia/body-angular",
   app: () => System.import("@matias-garcia/body-angular"),
   activeWhen: ["/"]
 });

  registerApplication({
   name: "@matias-garcia/form-angular",
   app: () => System.import("@matias-garcia/form-angular"),
   activeWhen: ["/"]
 });

 registerApplication({
  name: "@matias-garcia/navbar-web-component",
  app: () => System.import("@matias-garcia/navbar-web-component"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
