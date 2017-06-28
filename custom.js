// click function using jquery
// $("#bbcNews").click(function(){
// 	alert("hello");
// })
function myFunction(){
	$.ajax({
		type:'GET',
		url:'https://newsapi.org/v1/articles?source=techcrunch&apiKey=c6b54cdc1b504558a8e63ae5c0d13967',
		success:function(res){
			console.log(res);
		},
		error:function(err){
			console.log(err);
		}
	});
}