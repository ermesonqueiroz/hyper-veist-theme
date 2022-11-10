'use strict';

const backgroundColor = '#000';
const foregroundColor = '#fafbfc';
const borderColor = '#888888';
const cursorColor = 'rgba(250, 251, 252, 0.8)';
const colors = {
  black: '#000',
  red: '#cd3131',
  green: '#0dbc79',
  yellow: '#e5e510',
  blue: '#2472c8',
  magenta: '#bc3fbc',
  cyan: '#11a8cd',
  white: '#e5e5e5',
  lightBlack: '#666666',
  lightRed: '#f14c4c',
  lightGreen: '#23d18b',
  lightYellow: '#f5f543',
  lightBlue: '#3b8eea',
  lightMagenta: '#d670d6',
  lightCyan: '#29b8db',
  lightWhite: '#e5e5e5'
};

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
			${config.css || ''}
			.tabs_list .tab_tab.tab_active .tab_text  {
				background: ${backgroundColor};
			}
			.tab_active:before {
				border-color: ${borderColor};
			}
		`
  });
};
