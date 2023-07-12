import React, { Component } from "react";
import styles from "./TodoAdd.module.css";
import Button from "../../ui/Button";
import PropTypes from "prop-types";
export default class TodoAdd extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    let val = e.target.value;
    this.setState({ text: val });
  }

  render() {
    let { addTodo, isShow } = this.props;
    return (
      <form className={styles["add-form"]}>
        <div className={styles["form-content"]}>
          <input
            className={styles["add-input"]}
            disabled={isShow.show}
            onChange={this.handleChange}
            type="text"
            placeholder="Add todo"
          />
          <Button size="md" color="success">
            <span onClick={() => addTodo(this.state.text)}>+</span>
          </Button>
        </div>
      </form>
    );
  }
}
TodoAdd.propTypes = {
  addTodo: PropTypes.func,
  isShow: PropTypes.object,
};
