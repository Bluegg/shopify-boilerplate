module.exports = {
  layout:{
    expand: true,
    cwd: 'theme/layout',
    src: '*.liquid',
    dest: '.build/layout',
  },
  templates: {
    expand: true,
    cwd: 'theme/templates',
    src: '**/**.liquid',
    dest: '.build/templates',
  },
  settings: {
    expand: true,
    cwd: 'theme/settings',
    src: 'settings_schema.json',
    dest: '.build/config',
  },
  snippets: {
    expand: true,
    cwd: 'theme/snippets',
    src: '*.liquid',
    dest: '.build/snippets',
  },
  locales: {
    expand: true,
    cwd: 'theme/locales',
    src: '*.json',
    dest: '.build/locales',
  }
}
