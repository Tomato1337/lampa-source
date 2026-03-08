module.exports = {
    apps: [
        {
            name: 'lampa',
            script: 'node_modules/.bin/gulp',
            args: '',
            cwd: __dirname,
            interpreter: 'none',
            env: {
                NODE_ENV: 'production',
            },
            watch: false,
            autorestart: true,
            max_restarts: 5,
            log_date_format: 'YYYY-MM-DD HH:mm:ss',
        },
    ],
};
