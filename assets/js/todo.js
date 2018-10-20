//check off todos by clicking
$("ul").on("click", "li", function(){
	//the second argument for .on specifies that the event should trigger when an li inside a ul is clicked
	//turns text gray if its black and black if its gray
	$(this).toggleClass("completed")
})

//click on X to remove a todo
$("ul").on("click", "span", function(event){
	//fades out the parent element along with the span
	$(this).parent().fadeOut(1000, function(){
		$(this).remove()
	})
	event.stopPropagation()
})

//Adding a new To Do
$("input").keypress(function(event){
	if(event.which === 13){
		var toDoText = ($(this).val())
		$(this).val("")
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + toDoText + "</li")
	}
})

$(".fa-plus").click(function(){
	$("input").fadeToggle()
})
