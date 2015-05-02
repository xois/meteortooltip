Router.configure({
  layoutTemplate: 'layout',
  yieldRegions: {
    header: { to: 'header' },
  },
});

Router.map(function() {
  this.route('/', {
    name: 'home',
  });

});


