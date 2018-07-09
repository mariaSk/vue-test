<template>
    <div class="create-todo w-25">
        <button type="button" class="btn btn-success" v-on:click="openForm" v-show="!isCreating">
            <vu-icon icon="plus" />
        </button>
        <div v-show="isCreating">
            <div class="mt-3 p-2 border border-secondary">
                <div class="content">
                    <div class="ui form">
                        <div class="field">
                            <label>Title</label>
                            <input v-model="titleText" type="text" ref="title" defaultValue="" />
                        </div>
                        <div class="field">
                            <label>Project</label>
                            <input v-model="projectText" type="text" ref="project" defaultValue="" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn-group w-100">
                <button class="w-50 btn btn-success" v-on:click="sendForm">
                    Create
                </button>
                <button class="w-50 btn btn-success" v-on:click="closeForm">
                    Cancel
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          titleText: '',
          projectText: '',
          isCreating: false,
        };
      },
      methods: {
        openForm() {
          this.isCreating = true;
        },
        closeForm() {
          this.isCreating = false;
        },
        sendForm() {
          if (this.titleText.length > 0 && this.projectText.length > 0) {
            const title = this.titleText;
            const project = this.projectText;
            this.$emit('create-todo', {
              title,
              project,
              done: false,
            });
            this.newTodoText = '';
          }
          this.isCreating = false;
        },
      },
    };
</script>

<style lang="scss" scoped>
    .create-todo {
        .btn {
            border-radius: 0;
        }
    }
</style>