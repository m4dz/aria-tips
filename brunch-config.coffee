exports.config =
    # See http://brunch.io/#documentation for docs.
    paths:
        public: 'dist'
        watched: ['src', 'test', 'vendor']

    files:
        javascripts:
            joinTo:
                'lib/aria-tips.js': /^src/
                'scripts/test.js': /^[test,vendor]/

        stylesheets:
            joinTo:
                'lib/aria-tips.css': /^src/
                'styles/test.css': /^[test,vendor]/

    modules:
        wrapper: false
        definition: false

    overrides:
        production:
            plugins: off: ['browser-sync-brunch']
