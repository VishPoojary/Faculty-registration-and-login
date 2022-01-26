$(function () {
    var $facreg = $("#facregistration");
    if ($facreg.length) {
        $facreg.validate({
            rules: {
                fname:{
                    required:true
                },
                institute:{
                    required:true
                },
                branch:{
                    required:true
                },
                department:{
                    required:true
                },
                email:{
                    required:true,
                    email:true
                },
                password:{
                    required:true
                },
                contact:{
                    required:true
                },  
                
            },
            messages: {
                fname:{
                    required: "Please enter your Name"
                },
                institute:{
                    required: "Please enter your Institute"
                },
                branch:{
                    required: "Please enter your Branch"
                },
                department:{
                    required: "Please enter your Department"
                },
                email:{
                    required: "Please enter your Email"                 
                },
                password:{
                    required: "Please enter your Password"
                },
                contact:{
                    required: "Please enter your Contact"
                },     
            },
        })
    }
})