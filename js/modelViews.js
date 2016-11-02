function TasksViewModel() {
    this.tasks = ko.observableArray([{
    	name: 'Make to-do app',
    	assignee: 'Mario',
    	done: ko.observable(true)
    }]);
    this.newTaskName = ko.observable();
    this.newTaskAssignee = ko.observable('Mario');

    this.addNewTask = function() {
    	this.tasks.push({
    		name: this.newTaskName(),
    		assignee: this.newTaskAssignee(),
    		done: ko.observable(false)
    	});
    	this.newTaskName('');
    	this.newTaskAssignee('Mario');
    }
}

