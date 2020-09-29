// import DB from './imageDB';

/**
 * @description Process markdown text and generate corresponding component
 * @param {String} mdStringRaw markdown string to process
 * @param {Object} classes class name for each html tag {h, img, p, a}
*/

class ReadMD {
  constructor(mdStringRaw, classes) {
    this.mdString = mdStringRaw;
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
    console.log('this.components: ', this.components);
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
        console.log('mdString: ', mdString[strPos].concat(mdString[strPos + 1]));
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
    this.components.push(header);
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
    this.components.push(image);
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
    this.components.push(link);
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
    this.components.push(paragraph);
    return strPos;
  }
}

let sampleText = "##This is Header \nNo one really should, but if you're relatively new to electronics, software, and neuroscience, and want to learn more by building, then this might be a thing for you. You’ll have a chance to explore SPI communication interface, noise filtering, and intricacies of Operational Amplifier (OpAmp) and Analog to Digital Converter (ADC). ![some image](../someImage.com) If you're just looking for an affordable EEG to run experiments, there are better ones out there, such as [OpenBCI](https://openbci.com)";

new ReadMD(sampleText).parse();

// export default ReadMD;
