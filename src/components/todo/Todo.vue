<template>
    <div class="todo mb-3 w-25">
        <div class="p-2 border border-bottom-0" :class="getBorderColor" v-show="!isEditing">
            <div class="header">
                {{ todo.title }}
            </div>
            <div class="meta">
                {{ todo.project }}
            </div>
            <div class="tools clearfix">
                <span class='float-right ml-2' v-on:click="deleteTodo(todo)">
                    <vu-icon icon="trash-alt"  size="sm"/>
                </span>
                <span class='float-right ml-2' v-on:click="showForm">
                    <vu-icon icon='edit' size="sm"></vu-icon>
                </span>
                <span class='float-right ml-2' v-on:click="completeTodo(todo)" v-show="!todo.done">
                    <vu-icon icon='check' size="sm"></vu-icon>
                </span>
            </div>
        </div>

        <div v-show="isEditing">
            <div class="p-2 border border-bottom-0 border-secondary">
                <div class="ui form">
                    <div class="field">
                        <label>Title</label>
                        <input type="text" v-model="todo.title"/>
                    </div>
                    <div class="field">
                        <label>Project</label>
                        <input type="text" v-model="todo.project"/>
                    </div>
                </div>
            </div>
            <button class="btn btn-block btn-outline-secondary" v-on:click="hideForm">
                Close
            </button>
        </div>


        <div class="p-2 text-center border border-success text-success" v-show="todo.done && !isEditing">
            Completed
        </div>
        <div class="p-2 text-center border border-danger text-danger" v-show="!todo.done && !isEditing">
            Complete
        </div>
    </div>
</template>

<script>
  export default {
    props: ['todo'],
    data() {
      return {
        isEditing: false,
      }
    },
    computed: {
      getBorderColor() {
        switch (this.todo.done) {
          case true:
            return'border-success';
          case false:
            return 'border-danger';
        }
      }
    },
    methods: {
      showForm() {
        this.isEditing = true;
      },
      hideForm() {
        this.isEditing = false;
      },
      deleteTodo(todo) {
        this.$emit('delete-todo', todo);
      },
      completeTodo(todo) {
        this.$emit('complete-todo', todo);
      },
    },
  };
</script>

<style lang="scss" scoped>
    @import "../../shared/styles/mixins";

    .todo {
        .tools {
            span {
                color: $blueGrey-700;
                cursor: pointer;

                &:hover {
                    color: $blueGrey-400;
                    transition: $colorTransit;
                }
            }
        }

        .btn {
            border-radius: 0;
        }
    }
</style>