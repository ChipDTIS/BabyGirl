
var Schema = mongooes.Schema;

var toDoSchema = new Schema({
    itemId: Number,
    item: String,
    completed: Boolean
},
{
    collection:"TodoList"
}
);

var ToDo = mongooes.model('ToDo', toDoSchema);

export default Todo