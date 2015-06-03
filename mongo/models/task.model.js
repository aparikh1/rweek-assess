var mongoose = require('mongoose')
var _ = require('lodash')
var Task;
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  // setup schema here
  parent: { type: Schema.Types.ObjectId, ref: 'Task'},
  name: { type: String, required: true },
  complete: { type: Boolean, required: true, default: false },
  due: Date
  
});

//virtuals

TaskSchema.virtual('timeRemaining').get(function() {
	
	if (!this.due) {
		return Infinity;
	}

	return this.due - new Date();
})

TaskSchema.virtual('overdue').get(function() {
	var d = new Date();

	if (this.complete) {
		return false
	} else if (this.due - d < 0) {
		return true;
	} else {
		return false;
	}
	
})

//methods

TaskSchema.methods.addChild = function(params) {
	var self = this
	var task = new Task({
		name: params.name,
		parent: self._id
	})

	return task.save();
}

TaskSchema.methods.getChildren = function() {
	var self = this
	return this.findOne({ parent: self._id })
}

TaskSchema.methods.getSiblings = function() {

}

Task = mongoose.model('Task', TaskSchema);


module.exports = Task;