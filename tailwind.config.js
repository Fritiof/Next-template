const brandColors = {};

module.exports = {
    theme: {
        extend: {},
        inset: {
            '0': 0,
            auto: 'auto',
            '1/2': '50%',
        },
        flex: {
            '1': '1 1 0%',
            auto: '1 1 auto',
            initial: '0 1 auto',
            inherit: 'inherit',
            none: 'none',
            '2': '2 2 0%',
            '3': '3 3 0%',
        },
        backgroundColor: theme => ({
            ...theme('colors'),
            ...brandColors,
        }),
        textColor: theme => ({
            ...theme('colors'),
            ...brandColors,
        }),
        borderColor: theme => ({
            ...theme('colors'),
            ...brandColors,
        }),
    },
    variants: {},
    plugins: [],
};
