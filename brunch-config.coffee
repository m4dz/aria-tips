exports.config =
    # See http://brunch.io/#documentation for docs.
    files:
        javascripts:
            joinTo:
                'lib/aria-tips.js': /^app/

        stylesheets:
            joinTo:
                'lib/aria-tips.css': /^app/
                'styles/test.css': /^test/

        templates:
            joinTo: 'lib/aria-tips.js'
