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
