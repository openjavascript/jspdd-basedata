'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseData = function BaseData(srcData, newData, descData) {
    _classCallCheck(this, BaseData);

    this.api;
    this.userName = '';
    this.userId = '';
    this.alldata = 1;

    this.testkey = 'BaseData.testkey ' + Date.now();
};

exports.default = BaseData;