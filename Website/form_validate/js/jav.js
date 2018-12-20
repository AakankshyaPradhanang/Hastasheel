$(document).ready(function(){
	debugger;
	// to gain value of all input select items
	$("#submit").click(function(){
		var valueinput={};
		var valueselect={};
		var errname;
		var errdips;
		$("input").each(function(){
			$this = $(this);
			var sibling_span = $this.siblings('span.errormsg').eq(0);
			var sibling_span1 = $this.siblings('span.errormsg').eq(1);
			if($this.val() != "") {
				if($this.attr('id') == "agree") {
					if($('#agree').prop('checked')==true){
						sibling_span.hide();
					}
					else{
						sibling_span.show();
					}
				}
				else {
					sibling_span.hide();
				}
				if($this.attr('name') == "gender") {
					if($("input[name='gender']:checked").val()==undefined) {
						sibling_span.show();
					}
					else {
						sibling_span.hide();

					}
				}

				if($this.attr("id")=="ucpass"){ //to check if passwords match
					if($("#upass").val()!=$("#ucpass").val()){
						sibling_span.show();
					}
					else{
						sibling_span.hide();
					}
				}
				/*
				else{
					sibling_span.hide();
				} */ //check password ends here

				//email validation starts here
				if($this.attr("name")=="email"){
					var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
					var emil=$this.val();
					if(pattern.test(emil)){
						sibling_span1.hide();
					}
					else{
						sibling_span1.show();
					}
				}
				else{
					sibling_span1.hide();
				}
			}
			
			else{
				sibling_span.show();
				sibling_span1.hide();

			}

		});  //input each function ends here

		// to gain value of all select items
		$(".select").each(function(){
			$this = $(this);
			var sibling_span = $this.siblings('span.errormsg').eq(0);
			// valueselect[$(this).attr("name")] = $(this).val();
			// var errname=($(this).attr("id"));
			// var errdips="err"+errname;
			console.log($("input[name='gender']:checked").val());
			if($this.val()!=0){
				// $("#"+errdips).hide();
				// $("#errdob").hide();
				sibling_span.hide();
			}
			else{
				if($this.parent().attr("id")=="input-dob"){
					// $("#errdob").show();
					sibling_span.show();
				}
				// $("#"+errdips).show();
				sibling_span.show();
			}
		}); //select each function ends here

	});


	// to make submit click on press enter key
	$(':input').keyup(function(e){
	    if(e.keyCode == 13)
	    {
	        $("#submit").click();
	    }
	});

});