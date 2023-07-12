import React, { Component } from "react";
import styles from "./TodoList.module.css";
import TodoItem from "./TodoItem";
import Alert from "../../ui/Alert";
import PropTypes from "prop-types";
export default class TodoList extends Component {
  render() {
    let { listItem, deleteTodo, editTodo } = this.props;
    let listUI = listItem?.map((item) => (
      <TodoItem
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        key={item.id}
        todoItem={item}
      />
    ));

    return (
      <ul className={styles["todo-list"]}>
        {listUI.length ? listUI : <Alert variant="danger">Melumat yoxdur</Alert>}
      </ul>
    );
  }
}
TodoList.propTypes={
  listItem:PropTypes.array,
  deleteTodo:PropTypes.func,
  editTodo:PropTypes.func
}