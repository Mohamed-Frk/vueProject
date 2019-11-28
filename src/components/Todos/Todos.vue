<template>
<b-container>
  <section class="todoapp">
    <header class="header">
      <h1>Todos</h1>
      
      <input type="text" class="new-todo" placeholder="Ajouter une tâche" v-model="newTodo" @keyup.enter="addTodo">
    </header>

    <div class="main">
        
        <input type="checkbox"  v-model="allDone" class="toggle-all">
    
      <ul class="todo-list">
        <li class="todo" v-for="(todo, index) in filteredTodos" v-bind:key="index" :class="{completed: todo.completed, editing: todo === editing}">

          <div class="view">

            <input type="checkbox" v-model="todo.completed" class="toggle">      
            <label @dblclick="editTodo(todo)">{{  todo.name }}</label>
            <button class="destroy" @click.prevent="deleteTodo(todo)"></button>

          </div>

          <input type="text" class="edit" v-model="todo.name" @keyup.enter="doneEdit" @blur="doneEdit" @keyup.esc="cancelEdit" >

        </li>
      </ul>
    </div>

    <footer class="footer" v-show="hasTodos">

        <span class="todo-count"><strong>{{  remaining }}</strong> tâches à faire</span>

        <ul class="filters">

            <li><a href="#" :class="{selected: filter === 'all'}" @click.prevent="filter = 'all'">Toutes</a></li>
            <li><a href="#" :class="{selected: filter === 'todo'}" @click.prevent="filter = 'todo'">A faire</a></li>
            <li><a href="#" :class="{selected: filter === 'done'}" @click.prevent="filter = 'done'">Faites</a></li>
            
        </ul>

        <button class="clear-completed" v-show="completed" @click.prevent="deleteCompleted">Suprimer les tâches finies</button>

    </footer>

  </section>
</b-container>
</template>

<script>

import Vue from 'vue'

export default {

    data () { 
        return {

            todos: [], 
            newTodo: '', 
            filter: 'all',
            editing:null,
            oldTodo: ''         
        }
    },

    methods: {

        addTodo () { // allows you to add a new task to the list

            this.todos.push({

                completed: false,
                name: this.newTodo
            });
            this.newTodo='' // allows you to clear the field 

        },

        deleteTodo (todo) { // allows you to delete a task from the list
            this.todos = this.todos.filter(i => i !== todo)
        },

        deleteCompleted() { // allows you to delete one or more finished tasks from the list
            this.todos = this.todos.filter(todo => !todo.completed)
        },

        editTodo(todo) { // allows you to specify the field to be edited
            this.editing = todo
            this.oldTodo = todo.name
        },

        doneEdit () { // allows you to stop editing the field
            this.editing = null
        },

        cancelEdit () { // cancels the editing of the field 
            this.editing.name = this.oldTodo
            this.doneEdit()
        }
    },

    computed: {

        allDone: { // allows you to manage the selection input of all tasks 

            get () {

                 return this.remaining === 0

            },

            set (value) {

                this.todos.forEach(todo => {

                    todo.completed = value
                })
            } 

        }, 
        //  applies a filter on the todos table and returns the tasks to be done
        remaining () { return this.todos.filter(todo => !todo.completed).length },

        // applies a filter on the todos table and returns the completed tasks
        completed () { return this.todos.filter(todo => todo.completed).length },

        filteredTodos () { // allows to differentiate all tasks 

            if(this.filter === 'todo') {

                return this.todos.filter(todo => !todo.completed)

            }else if (this.filter === 'done') {

                return this.todos.filter(todo => todo.completed)
            }

            return this.todos

        },
        hasTodos () {
            return this.todos.length > 0 
        },

    }
};
</script>

<style src="./Todos.css"></style>
