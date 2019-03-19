var todos = []

var input = prompt("What would you like to do?")

while (input != "quit") {
    if (input === "list"){
        listTodos()
    }   else if (input ==="new") {
        addTodo();
    }   else if (input === "delete"){
        deleteTodo();
    }
    //ask again 
    var input = prompt("What would you like to do?");   

    }
    console.log ("Ok. I guess you arte done");

    function listTodos(){
        todos.forEach (function (todo, i) { 
        console.log(i + ": " + todo); 
        });
        console.log ("**********")}

    
    function addTodo() {
        //ask for new todo
        var newTodo = prompt ("Enter new todo");
        //add to todos array
        todos.push(newTodo);
        console.log ("Added Todo");}

    function deleteTodo() {
        var index = prompt ("Enter index of todo to delete");
        //delete the todo
        //using splice ()
        todos.splice(index, 1);
        console.log ("Deleted Todo");
    }
