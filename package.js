Package.describe({
    'summary': 'Slide effect for s-alert - simple and fancy notifications / alerts for Meteor.',
    'version': '1.0.1',
    'git': 'https://github.com/juliancwirko/meteor-s-alert-slide.git',
    'name': 'juliancwirko:s-alert-slide'
});

Package.onUse(function (api) {
    api.use('juliancwirko:s-alert@2.0.0', ['client']);
    api.imply('juliancwirko:s-alert@2.0.0', ['client']);
    api.addFiles([
        's-alert-slide.css'
    ], 'client');
});
