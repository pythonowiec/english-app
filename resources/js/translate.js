$( document ).ready(function() {
    $.getJSON("data.json", function(json) {
        //console.log(json['languages'][0]);
        var data = json['languages'];
        var lang_body = "";
        Array.from(data).forEach(function(item, i) {
            Object.keys(item).forEach(function(key){
                if(i==0){
                    lang_body += "<tr>";
                    console.log(i);
                }
    
                if((i%3==0) && (i!=0)){
                    lang_body += "</tr>";
                    lang_body += "<tr>";
                    console.log(i);
                }
    
                lang_body += `<td class="lang"><button class="btn btn-light" id=${i}>${key}</button></td>`;
                console.log("key:" + key + " value:" + item[key] + " i: " + i);
            });
        });
        $('#lang_body').html(lang_body);

        Array.from(data).forEach(function(item, i) {
            Object.keys(item).forEach(function(key){
                var btn = document.getElementById(i);
                btn.addEventListener("click", () =>{
                    var lang = btn.textContent;
                    var code = item[key];
                    // document.getElementById("hiddeninputsource").value = item[key];
                    url = `http://localhost:8000/translate?sl=${code}&tl=pl`;
                    window.open(url, '_self');

                    
                });
            });

            
        });
        

    });

    

    // $(".lang-btn").click(function(){
    //     console.log("click");
    // })

    // var button = document.getElementsByClassName("lang-btn");
    // // Array.from(button).forEach(btn => {
    // //     console.log(btn);
    // // });
    // Array.from(button).forEach(function(btn) {
    //    
    // });

    

    // var elements = document.getElementsByClassName("lang-btn")


    
    // let arry = Array.from(elements);

    // console.log(arry)
    

});