import React, { Component } from "react";
import styles from "./Alert.module.css";
class Alert extends Component {
  render() {
    return (
      <div className={`${styles.alert} ${styles[this.props.variant]}`}>
        {this.props.children}
      </div>
    );
  }
}
export default Alert;
