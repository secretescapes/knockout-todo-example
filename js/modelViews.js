function TasksViewModel() {
	var self = this;
    this.tasks = ko.observableArray([{
    	name: 'Make to-do app',
    	assignee: 'Mario',
    	done: ko.observable(true)
    }]);
    this.newTaskName = ko.observable();
    this.newTaskAssignee = ko.observable('Mario');
    this.tasksCount = ko.computed(function() {
    	return this.tasks().length
    }, this);
    this.doneCount = ko.computed(function() {
    	doneCount = 0;
    	for (var i = 0; i < this.tasks().length; i++) {
    		if(this.tasks()[i].done()) doneCount++;
    	}
    	return doneCount;
    }, this);
    this.filterTerm = ko.observable();
    this.filteredTasks = ko.computed(function(){
    	if (!this.filterTerm()) {
    		return this.tasks();
    	} else {
    		return ko.utils.arrayFilter(this.tasks(), function(task) {
                return task.name.indexOf(self.filterTerm())>-1;
            });
    	}
    }, this);

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

