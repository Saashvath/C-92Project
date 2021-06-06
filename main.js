function next_page(){

    var  player_1 = document.getElementById("Player_1").value;
    var player_2 = document.getElementById("Player_2").value;
    console.log(player_1)
    console.log(player_2)

    localStorage.setItem("player_value1",player_1);
    localStorage.setItem("player_value2", player_2);
    window.location = "gamepage.html" 

}