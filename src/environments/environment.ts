// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  availableLangages : ['fr', 'es', 'en'],
  defaultLangage: 'fr',
  mail: 'Jocelyn.cordier@gmail.com',
  adress: '11 rue de Thorigny, 75003 Paris',
  phoneNumber: '+33 6 21 76 94 10',
  devices : {
    mobile : 1,
    // chrome : 2,
    desktop : 3
  },
  singlePageApp: false,
  minutesBeforeShowIntroAgain: 15,
  desktopScreenWidth: 768
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
