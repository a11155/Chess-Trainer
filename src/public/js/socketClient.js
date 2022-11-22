var _currentUserId;
var time = 20000000;
$(function(){
    $(document).on('submit', '#userNameForm', function(event){
        event.preventDefault();

        socket.emit('submitName', {
            name: $('#userNameInput').val(),
        });

        
        $('#userName').text('Hi '+$('#userNameInput').val());
        $('#userNameForm').hide();
        $('#userNameInput').val('');
    });
    socket.on('roomDetail', (roomData) => {
       // $('#onlinePlayers').html('');
       $('#onlinePlayers').empty();
        roomData.users.forEach(user => {
            
            if(_currentUserId != user.id){
            $('#onlinePlayers')
            .append($('<li class="player" id="'+user.id+'">')
            .html('<button type="button" data-room="'+user.room+'" class="btn btn-primary btn-sm joinGameRequest">'+user.name+'</button>'));
            }
        });
    });

    socket.on('existingUsers', (userData) => {
       // $('#onlinePlayers').html('');

       _currentUserId = userData.currentUserId;
        userData.users.forEach(user => {
            if(userData.currentUserId != user.id){
                
                $('#onlinePlayers')
                .append($('<li class="player" id="'+user.id+'">')
                .html('<button type="button" data-room="'+user.room+'" class="btn btn-primary btn-sm joinGameRequest">'+user.name+'</button>'));
            }
        });
    });

    socket.on('joinRequestRecieved', (userData) => {
        //console.log(userData);
        $('.notification')
        .html('<div class="alert alert-success">Recieved a game request from <strong>'+userData.name+'</strong>. <button data-room="'+userData.room+'" class="btn btn-primary btn-sm acceptGameRequest">Accept</button></div>')
    
        document.getElementById("notificat").style.display = "block";;
        setTimeout(() => {
            document.getElementById("notificat").style.display = "none";;
            
        }, time);
    });

    $(document).on('click', '.joinGameRequest', function(){
        socket.emit('sendJoinRequest', {
            room: $(this).data('room')
        });
        $('.notification').html('<div class="alert alert-success">Game request sent.</div>');
   
        document.getElementById("notificat").style.display = "block";;
        setTimeout(() => {
            document.getElementById("notificat").style.display = "none";;
            
        }, time);
   
    });

    $(document).on('click', '.acceptGameRequest', function(){

        socket.emit('acceptGameRequest', {
            room: $(this).data('room')
        });
        $('.notification')
        .html('<div class="alert alert-success">Please wait for game initialize from host.</div>');
       
        document.getElementById("notificat").style.display = "block";;
        setTimeout(() => {
            document.getElementById("notificat").style.display = "none";;
            
        }, time);
    
    });

    socket.on('gameRequestAccepted', (userData) => {
        //console.log(userData);
        $('.notification')
        .html('<div class="alert alert-success">Game request accepted from <strong>'+userData.name+'</strong>.</div>');
        $('.notification')
        .append($('<div class="notif_descr">Choose rotation. <button data-room="'+userData.room+'" data-color="black" type="button" class="btn btn-primary btn-sm setOrientation">Black</button> or <button data-room="'+userData.room+'" data-color="white" type="button" class="btn btn-primary btn-sm setOrientation">White</button></div>'))
        .append('');

        document.getElementById("notificat").style.display = "block";;
        $('#onlinePlayers li#'+userData.id).addClass('active');
        setTimeout(() => {
            document.getElementById("notificat").style.display = "none";;
            
        }, time);
    });

    socket.on('opponentDisconnect',function(){
        $('.notification')
        .html('<div class="alert alert-success">Opponent left the room</div>');
        board.reset();
        chess.reset();

        document.getElementById("notificat").style.display = "block";;

        setTimeout(() => {
            document.getElementById("notificat").style.display = "none";;
            
        }, time);
    })

    

    
    
}(jQuery));