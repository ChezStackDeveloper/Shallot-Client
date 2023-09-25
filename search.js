function search_it() {
    var tag = document.getElementById("tags").value
    var what_search = document.getElementById("search").value
    var pop_list = document.querySelectorAll(".pop")
    var two_list = document.querySelectorAll(".two")
    if(what_search === "" && tag == "all"){
        for(var i=0;i<game_list.length;i++){
            document.getElementById(game_list[i].id).style.display = "flex"
        }
        for(var i=0;i<good_games.length;i++){
            document.getElementById(good_games[i].id).style.display = "flex"
        }
    }else{
        var active_list = document.querySelectorAll(".active")
        for(var i=0;i<active_list.length;i++){
            document.getElementById(active_list[i].id).classList.remove("active")
        }
        for(var i=0;i<game_list.length;i++){
            document.getElementById(game_list[i].id).style.display = "none"
        }
        for(var i=0;i<good_games.length;i++){
            document.getElementById(good_games[i].id).style.display = "none"
        }
        for(var i=0;i<game_list.length;i++){
            item = game_list[i].id.toLowerCase()
            item2 = document.getElementById(game_list[i].id)
            if(item.includes(what_search.toLowerCase())){
                if(tag == "pop" && item2.classList.contains("pop")){
                    document.getElementById(game_list[i].id).classList.add("active")
                }
                else if(tag == "two" && item2.classList.contains("two")){
                    document.getElementById(game_list[i].id).classList.add("active")
                }
                else if(tag == "stream" && item2.classList.contains("stream")){
                    document.getElementById(game_list[i].id).classList.add("active")
                }
                else if(tag == "bad" && item2.classList.contains("bad")){
                    document.getElementById(game_list[i].id).classList.add("active")
                }
                else if(tag == "all"){
                    document.getElementById(game_list[i].id).classList.add("active")
                }
                }
            }
    }}
var game_list = document.querySelectorAll(".link");
var good_games = document.querySelectorAll(".glink");
search_enter = document.getElementById("search");
search_enter.addEventListener("keyup",(event) => {
    if(event.key === "Enter"){
        search_it();
    }
})