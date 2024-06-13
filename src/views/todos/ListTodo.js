import React from "react";
import './todo.scss';
class ListTodo extends React.Component {
    state = {
        ListTodos: [
            { id: "todo1", title: "doing homework" },
            { id: "todo2", title: "making video" },
            { id: "todo3", title: "fixing bugs" },
        ]
    }
    render() {
        let { ListTodos } = this.state;
        return (
            <>
                <div className="list-todo-container">
                    <div className="add-todo">
                        <input type="text" />
                        <button type="button"> add</button>
                    </div>
                    <div className="list-todo-content">{
                        ListTodos.map((item, index) => {
                            return (
                                <div className="todo-child">{item.id}-{item.title} <button onClick={""}>Edit</button><button onClick={""}>Delete</button></div>
                            )
                        })
                    }
                    </div>
                </div>
            </>
        )

    }
}
export default ListTodo;