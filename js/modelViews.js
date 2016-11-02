function TasksViewModel() {
    this.tasks = ko.observableArray([{name: 'Make to-do app', assignee: 'Mario'}]);
    this.newTaskName = ko.observable();
    this.newTaskAssignee = ko.observable('Mario');

    this.addNewTask = function() {
    	this.tasks.push({name: this.newTaskName(), assignee: this.newTaskAssignee()});
    	this.newTaskName('');
    	this.newTaskAssignee('Mario');
    }
}

