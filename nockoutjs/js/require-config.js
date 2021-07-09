var require = {
  baseUrl: '../js',
  shim: {
    'jquery': {
      exports: '$'
    },
    'knockout': {
      exports: 'ko'
    }
  },
  paths: {
    'jquery':   './lib/jquery-1.10.2.min',
    'knockout': './lib/knockout-3.0.0'
  },
  urlArgs: 'bust=' +  (new Date()).getTime()
};
