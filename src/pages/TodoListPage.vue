<template>
    <div id="todo-list-page">
        <todo-list v-bind:todos="todos"></todo-list>
        <create-todo v-on:create-todo="addTodo"></create-todo>
    </div>
</template>

<script>
import CreateTodo from '../components/todo/CreateTodo';
import TodoList from '../components/todo/TodoList';

export default {
  name: 'TodoListPage',
  components: {
    CreateTodo,
    TodoList,
  },
  data () {
    return {
      todos: [{
        title: 'Todo A',
        project: 'Project A',
        done: true,
      }, {
        title: 'Todo B',
        project: 'Project B',
        done: false,
      }, {
        title: 'Todo C',
        project: 'Project C',
        done: false,
      }],
    }
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
    },
  },
};
</script>