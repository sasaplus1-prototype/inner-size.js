/*!
 * @license inner-size.js Copyright(c) 2016 sasa+1
 * https://github.com/sasaplus1-prototype/inner-size.js
 * Released under the MIT license.
 */
'use strict';

function getHeight() {
  return window.innerHeight || document.documentElement.clientHeight;
}

function getWidth() {
  return window.innerWidth || document.documentElement.clientWidth;
}

module.exports = {
  getHeight: getHeight,
  getWidth: getWidth
};
