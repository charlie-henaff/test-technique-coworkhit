<template>
    <v-row class="align-center pb-2">
        <v-col>
            {{ task.label }}
        </v-col>
        <v-col class="d-flex justify-end align-center me-2">
            <v-btn v-if="task.status === 'todo'" @click="completeTask" prepend-icon="mdi-check-circle-outline" color="success" variant="tonal">
                TERMINÉE
            </v-btn>
            <v-btn v-else @click="todoTask" prepend-icon="mdi-alert-circle-outline" variant="tonal" color="error">
                À FAIRE
            </v-btn>
            <v-btn @click="deleteTask" icon="mdi-trash-can-outline" density="comfortable" class="ms-4" variant="tonal" color="error"></v-btn>
        </v-col>
    </v-row>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import Task from '../interfaces/Task';

export default defineComponent({
    props: {
        task: {
            type: Object as () => Task,
            required: true,
        },
    },
    methods: {
        completeTask(): void {
            // update task status 
            this.task.status = 'done';
        },
        todoTask(): void {
            // update task status 
            this.task.status = 'todo';
        },
        deleteTask(): void {
            // emit delete task event
            this.$emit('taskDeleted', this.task); 
        }
    },
});
</script>