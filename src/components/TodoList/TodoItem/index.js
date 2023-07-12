import React, { Component } from "react";
import styles from "./TodoItem.module.css";
import Button from "../../../ui/Button";
import { BsFillTrashFill } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import EditModal from "../../EditModal";
import PropTypes from "prop-types";
export default class TodoItem extends Component {
  constructor() {
    super();
    this.state = {
      isEdit: false,
    };
    this.onToggleShow = this.onToggleShow.bind(this);
  }
  onToggleShow() {
    this.setState({ isEdit: true });
  }
  render() {
    const { title, id } = this.props.todoItem;
    const { editTodo, deleteTodo } = this.props;
    return (
      <>
        <li className={styles["list-item"]}>
          {title}
          <div className={styles["todo-action"]}>
            <Button size="sm" color="danger">
              <span onClick={() => deleteTodo(id)}>
                <BsFillTrashFill />
              </span>
            </Button>
            <Button size="sm" color="success">
              <span onClick={this.onToggleShow}>
                <FiEdit2 />
              </span>
            </Button>
          </div>
        </li>
        {this.state.isEdit && (
          <EditModal id={id} editTodo={editTodo} title={title} />
        )}
      </>
    );
  }
}
TodoItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  editTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
};
