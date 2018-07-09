<template>
    <div class="todo-list">
        <div class="p-3 mb-2 border bg-light">
            <div>Comleted Tasks: {{ todos.filter(todo => {return todo.done === true}).length }}</div>
            <div>Pending Tasks: {{ todos.filter(todo => {return todo.done === false}).length }}</div>
        </div>

        <todo v-for="todo in todos"
              v-bind:todo="todo"
              v-on:delete-todo="deleteTodo"
              v-on:complete-todo="completeTodo"
        ></todo>
    </div>
</template>

<script>
import Todo from './Todo.vue';

export default {
    props: ['todos'],
    components: {
        Todo,
    },
    methods: {
        deleteTodo(todo) {
          const todoIndex = this.todos.indexOf(todo);
          this.todos.splice(todoIndex, 1);
        },
        completeTodo(todo) {
          const todoIndex = this.todos.indexOf(todo);
          this.todos[todoIndex].done = true;
        },
    },
};
</script>