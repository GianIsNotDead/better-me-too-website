import React from 'react';
/**
 * @description Process markdown text and generate corresponding component
 * @param {String} mdStringRaw markdown string to process
 * @param {Object} classes class name for each html tag {h, img, p, a}
*/

class ReadMD {
  constructor(mdStringRaw, db, classes) {
    this.mdString = mdStringRaw;
    this.db = db;
    this.classes = classes;
    this.components = [];
  }
  parse() {
    let pos = 0;
    while(pos < this.mdString.length) {
      let strLength = null;
      // header
      if (this.mdString[pos] === "#") {
        strLength = this._makeHeader(this.mdString.substr(pos));
      }
      // image
      else if ((this.mdString[pos].concat(this.mdString[pos + 1])) === '![') {
        strLength = this._makeImg(this.mdString.substr(pos));
      }
      // link
      else if (this.mdString[pos] === '[' && (this.mdString[pos - 1])) {8
        strLength = this._makeLink(this.mdString.substr(pos));
      }
      else {
        strLength = this._makeParagraph(this.mdString.substr(pos));
      }
      pos = pos + strLength;
    }
    return this.components;
  }
  _makeHeader(mdString) {
    let header = { type: 1, text: '' };
    let strPos = 0;
    let done = false;
    while (done === false) {
      if (
        (strPos > 3 && mdString[strPos] === '#')
        || mdString[strPos].concat(mdString[strPos + 1]).match(/\n/g) !== null
        || mdString[strPos].concat(mdString[strPos + 1]) === '!['
        || mdString[strPos] === '['
      ) {
        done = true;
      }
      else if ((strPos > 0 && strPos < 4) && mdString[strPos] === '#') {
        header.type = header.type + 1;
        strPos = strPos + 1;
      }
      else {
        header.text = header.text + mdString[strPos];
        strPos = strPos + 1;
      }
    }
    if (header.type === 1) {
      this.components.push(<h1 className={this.classes.h1}>{header}</h1>);
    }
    if (header.type === 2) {
      this.components.push(<h2 className={this.classes.h2}>{header}</h2>);
    }
    if (header.type === 3) {
      this.components.push(<h3 className={this.classes.h3}>{header}</h3>);
    }
    return strPos;
  }
  _makeImg(mdString) {
    let image = { alt: '', src: '' };
    let currentAttr = 'alt';
    let strPos = 0;
    let done = false;
    while (done === false) {
      if (mdString[strPos] === ')') {
        done = true;
      }
      else if (mdString[strPos] === ']') {
        currentAttr = 'src';
      }
      else if (mdString[strPos].match(/\!|\[|\(/g) === null) {
        image[currentAttr] = image[currentAttr] + mdString[strPos];
      }
      strPos = strPos + 1;
    }
    this.components.push(<img alt={image.alt} src={this.db[image.src]} className={this.classes.img} />);
    return strPos;
  }
  _makeLink(mdString) {
    let link = { text: '', href: '' };
    let currentAttr = 'text';
    let strPos = 0;
    let done = false;
    while (done === false) {
      if (mdString[strPos] === ')') {
        done = true;
      }
      else if (mdString[strPos] === ']') {
        currentAttr = 'href';
      }
      else if (mdString[strPos].match(/\[|\(/g) === null) {
        link[currentAttr] = link[currentAttr] + mdString[strPos];
      }
      strPos = strPos + 1;
    }
    this.components.push(<a href={link.href} className={this.classes.a}>{link.text}</a>);
    return strPos;
  }
  _makeParagraph(mdString) {
    let paragraph = '';
    let strPos = 0;
    let done = false;
    while (done === false) {
      if (
        mdString[strPos] === '#'
        || mdString[strPos].concat(mdString[strPos + 1]) === '!['
        || mdString[strPos] === '['
      ) {
        done = true;
      }
      else {
        paragraph = paragraph + mdString[strPos];
        strPos = strPos + 1;
      }
    }
    // this.components.push(<p className={this.classes.p}>{paragraph}</p>);
    this.components.push(<p className={this.classes.p}>{paragraph}</p>);
    return strPos;
  }
}

export default ReadMD;
