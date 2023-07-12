import React, { Component } from "react";
import styles from "./TodoContent.module.css";
import TodoAdd from "../TodoAdd";
import TodoList from "../TodoList";
import Alert from "../../ui/Alert";
export default class TodoContent extends Component {
  constructor() {
    super();
    this.state = {
      listItem: [
        { id: 1, title: "Todo 1" },
        { id: 2, title: "Todo 2" },
        { id: 3, title: "Todo 3" },
      ],
      isShow: {
        show: false,
        msg: "",
        color: null,
      },
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }
  addTodo(todoText) {
    let newTodoItem = {
      id: Date.now(),
      title: todoText,
    };
    let newList = [newTodoItem, ...this.state.listItem];

    if (!newTodoItem.title.trim()) {
      this.setState({
        isShow: {
          show: true,
          msg: "Zehmet olmasa xananı doldurun",
          color: "warning",
        },
      });
      setTimeout(() => {
        this.setState({
          isShow: { show: false },
        });
      }, 2000);
      return;
    }
    this.setState({ listItem: newList });

    this.setState({
      isShow: { show: true, msg: "Ugurla elave olundu", color: "success" },
    });

    setTimeout(() => {
      this.setState({
        isShow: { show: false },
      });
    }, 2000);
  }
  deleteTodo(id) {
    let newList = this.state.listItem.filter((item) => item.id !== id);
    this.setState({ listItem: newList });
    this.setState({
      isShow: {
        show: true,
        msg: "Ugurla Silindi",
        color: "success",
      },
    });
    setTimeout(() => {
      this.setState({
        isShow: { show: false },
      });
    }, 2000);
  }
  editTodo(title, id) {
    let updateTodo = {
      id: Date.now(),
      title,
    };
    let copyList = [...this.state.listItem];
    let currentItem = copyList.findIndex((item) => item.id === id);
   if(!title.trim()){
    return
   }
    copyList[currentItem] = updateTodo;
    this.setState({ listItem: copyList });

    this.setState({
      isShow: { show: true, msg: "Ugurla dəyişdirildi", color: "success" },
    });

    setTimeout(() => {
      this.setState({
        isShow: { show: false },
      });
    }, 2000);
  }
  render() {
    return (
      <div className={styles["todo-content"]}>
        <div className={styles.title}>Todo list</div>
        <TodoAdd isShow={this.state.isShow} addTodo={this.addTodo} />
        <TodoList
          editTodo={this.editTodo}
          deleteTodo={this.deleteTodo}
          listItem={this.state.listItem}
        />
        {this.state.isShow && (
          <Alert variant={this.state.isShow.color}>
            {this.state.isShow.msg}
          </Alert>
        )}
      </div>
    );
  }
}
