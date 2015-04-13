exports.config =
    # See http://brunch.io/#documentation for docs.
    paths:
        public: 'dist'
        watched: ['src', 'test']

    files:
        javascripts:
            joinTo:
                'lib/aria-tips.js': /^src/

        stylesheets:
            joinTo:
                'lib/aria-tips.css': /^src/
                'styles/test.css': /^test/

        templates:
            joinTo: 'lib/aria-tips.js'
