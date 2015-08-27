document.write("Hello");

$(function() {
				$('#btnSubmit').on('click',function() {
					var user = $('#user').val();
					var pass = $('#pass').val();

					if(user == "pi" && pass == "ras") {
						window.location.href = "/storage/" + user + "/";
					}
				});
			});