// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyDevvMUXBJfyifRpUno17H5gzZwpmWx23Y',
    authDomain: 'ng6-fbcrudapp.firebaseapp.com',
    databaseURL: 'https://ng6-fbcrudapp.firebaseio.com',
    projectId: 'ng6-fbcrudapp',
    storageBucket: 'ng6-fbcrudapp.appspot.com',
    messagingSenderId: '298968434612'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
