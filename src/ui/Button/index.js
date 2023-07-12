import React, { Component } from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";
export default class Button extends Component {
  render() {
    let { size, color, children } = this.props;
    return (
      <button
        type="button"
        className={`${styles.btn} ${styles[`btn-${size}`]} ${
          styles[`btn-${color}`]
        }`}
      >
        {children}
      </button>
    );
  }
}
Button.propTypes={
size:PropTypes.string,
color:PropTypes.string,
children:PropTypes.node
}