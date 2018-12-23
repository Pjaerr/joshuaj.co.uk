
module.exports = function (grunt)
{
    grunt.initConfig(
        {
            sass:
            {
                dev:
                {
                    files:
                    {
                        //Destination -> //Source File
                        'styles/main.css': 'styles/main.scss',
                    }
                }
            },

            watch:
            {
                sass:
                {
                    files: '**/*.scss',
                    tasks: ['css'],
                    options:
                    {
                        livereload: true
                    }
                },

                all:
                {
                    files: ['**/*.html'],
                    options:
                    {
                        livereload: true
                    }
                }

            }
        });

    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('css', ['sass']);

    grunt.registerTask('default', ['watch']);
};