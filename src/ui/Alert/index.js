import React, { Component } from "react";
import styles from "./Alert.module.css";
import PropTypes from "prop-types";
class Alert extends Component {
  render() {
    let { variant, children } = this.props;
    return (
      <div className={`${styles.alert} ${styles[variant]}`}>{children}</div>
    );
  }
}
export default Alert;
Alert.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
};
