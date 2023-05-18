<template>
    <v-layout>
        <v-main>
            <v-container class="justify-center align-center">
                <v-row class="py-6">
                    <h1 class="text-h3">TODOs App</h1>
                </v-row>
                <v-row>
                    <v-text-field v-model="newTaskText" label="Nouvelle tâche" outlined
                        @keyup.enter="addTask"></v-text-field>
                </v-row>
                <v-row justify="end">
                    <v-btn append-icon="mdi-plus" color="primary" @click="addTask">AJOUTER</v-btn>
                </v-row>
                <v-row class="pt-4">
                    <v-card class="w-100">
                        <v-card-title>{{ tasks.filter((i) => i.status == 'todo').length }} à faire</v-card-title>
                        <v-card-text>
                            <template v-if="tasks.filter((i) => i.status == 'todo').length > 0">
                                <v-list>
                                    <v-list-item class="pa-0"
                                        v-for="(task, index) in tasks.filter((i) => i.status == 'todo').reverse()" :key="index">
                                        <TaskComponent :task="task" @taskDeleted="deleteTask"></TaskComponent>
                                    </v-list-item>
                                </v-list>
                            </template>
                            <template v-else>
                                Aucune tâche dans cette liste
                            </template>
                        </v-card-text>
                    </v-card>
                </v-row>
                <v-row class="pt-4">
                    <v-card class="w-100">
                        <v-card-title>{{ tasks.filter((i) => i.status == 'done').length }} terminées</v-card-title>
                        <v-card-text>
                            <template v-if="tasks.filter((i) => i.status == 'done').length > 0">
                                <v-list>
                                    <v-list-item class="pa-0"
                                        v-for="(task, index) in tasks.filter((i) => i.status == 'done').reverse()" :key="index">
                                        <TaskComponent :task="task" @taskDeleted="deleteTask"></TaskComponent>
                                    </v-list-item>
                                </v-list>
                            </template>
                            <template v-else>
                                Aucune tâche dans cette liste
                            </template>
                        </v-card-text>
                    </v-card>
                </v-row>
            </v-container>
        </v-main>
    </v-layout>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import Task from '../interfaces/Task';
import TaskComponent from './Task.vue';


export default defineComponent({
    components: {
        TaskComponent,
    },
    data() {
        return {
            tasks: [] as Task[],
            newTaskText: '',
        };
    },
    methods: {
        addTask() {
            if (this.newTaskText.trim() !== '') {
                // add task to pool 
                this.tasks.push({
                    id: this.tasks.length,
                    label: this.newTaskText,
                    status: 'todo',
                });
                // reset text input
                this.newTaskText = ''; 
            }
        },
        deleteTask(task: Task) {
            // remove task from pool
            this.tasks = this.tasks.filter(i => i.id != task.id);
        },
    },
});
</script>