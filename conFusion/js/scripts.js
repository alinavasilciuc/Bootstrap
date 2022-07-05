         $(document).ready(function(){
            $("#carouselButton").click(function(){
                if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');                    
                }
            });

            $("#ReserveTableButton").click(function(){
                $('#reserveTableModal').modal('show')
            })
            $("#close_button_modal").click(function(){
                $('#reserveTableModal').modal('hide')
            })
            $("#cancel_button_modal").click(function(){
                $('#reserveTableModal').modal('hide')
            })


            $("#loginHyperlink").click(function(){
                $('#loginModal').modal('show')
            })
            $("#closeButtonModalLogin ").click(function(){
                $('#loginModal').modal('hide')
            })
            $(document).ready(function(){
                $("#cancelButtonModalLogin").click(function(){
                    $('#loginModal').modal('hide')
                })
        });

    });

