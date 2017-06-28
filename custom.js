// click function using jquery
// $("#bbcNews").click(function(){
// 	alert("hello");
// })
function myFunc(src_name){
	$("#welcome").css("display" , "none");
	$.ajax({
		type:'GET',
		url:'https://newsapi.org/v1/articles?source='+src_name+'&apiKey=c6b54cdc1b504558a8e63ae5c0d13967',
		success:function(res){
			console.log(res);
			var newHTML = [];
			for(var i = 0; i<res.articles.length; i++)
			{
			newHTML.push("<h3 style='text-align: center;'>"+res.articles[i].title+"</h3><h4 style='text-align: center;'><span style='color: blue;'>Provided by </span> :"+res.articles[i].author+" </h4><img style ='margin-left:30%' src="+res.articles[i].urlToImage+" width='400px'><p style='text-align:center;'>"+res.articles[i].description+"</p>");
		}
		$("#data").html(newHTML.join(""));
		},
		error:function(err){
			console.log(err);
		}
	});
}