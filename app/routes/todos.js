import Ember from 'ember';
 
export default Ember.Route.extend({
    model: function() {
        return this.store.find('todo');
    },
    actions: {
        // Additional lines truncated for brevity...
        acceptChanges: function(todo) {
            if (Ember.isEmpty(todo.get('title'))) {
                this.send('deleteTodo', todo);
            } else {
                todo.save();
            }
        },
        deleteTodo: function(todo) {
            todo.deleteRecord();
        }
    }
});