<template>
  <div id="app">
    <todo-list v-bind:todos="todos"></todo-list>
    <create-todo v-on:create-todo="addTodo"></create-todo>
  </div>
</template>

<script>
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';

export default {
  name: 'app',
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
}
</script>
