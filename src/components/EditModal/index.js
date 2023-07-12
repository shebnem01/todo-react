import React, { Component } from "react";
import styles from "./Modal.module.css";
import Button from "../../ui/Button";
import { AiOutlineCheck } from "react-icons/ai";
import PropTypes from "prop-types";
export default class EditModal extends Component {
  constructor() {
    super();
    this.state = {
      updateTodo: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdateTodo = this.handleUpdateTodo.bind(this);
  }
  handleChange(e) {
    this.setState({ updateTodo: e.target.value });
  }
  handleUpdateTodo() {
    this.props.editTodo(this.state.updateTodo, this.props.id);
  }

  render() {
    let { title } = this.props;
    return (
      <div className={styles.modal}>
        <h2 className={styles["modal-title"]}>Edit todo</h2>
        <div className={styles["modal-content"]}>
          <input
            type="text"
            onChange={this.handleChange}
            defaultValue={title}
          />
          <Button size="sm" color="success">
            <span onClick={this.handleUpdateTodo}>
              <AiOutlineCheck />
            </span>
          </Button>
        </div>
      </div>
    );
  }
}
EditModal.propTypes = {
  title: PropTypes.string,
  editTodo: PropTypes.func,
  id: PropTypes.number,
};
