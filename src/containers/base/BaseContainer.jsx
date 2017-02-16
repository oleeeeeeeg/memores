import React, { Component, PropTypes } from 'react';
import En from './../../localization/En'

export default class BaseContainer extends Component {

    getText(key) {
        return En[key];
    }
}