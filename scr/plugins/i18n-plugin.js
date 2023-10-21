const {I18n} = require('i18n');

const i18n = new I18n({
    locales:['en', 'es'],
    directory: __dirname + '../../../locales'
});

module.exports = {
    i18n
}
