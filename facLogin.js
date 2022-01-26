$(function () {
    var $faclogin = $("#faclogin");
    if ($faclogin.length) {
        $faclogin.validate({
            rules: {
                email:{
                    required:true,
                    email:true
                },
                password:{
                    required:true
                },
            },
            messages:{
                email:{
                    required:"Please enter your email",
                    required:"Please enter valid Email"
                },
                password:{
                    required:"Please enter your password"
                },

            },
        })
    }
})
        