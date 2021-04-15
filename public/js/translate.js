$( document ).ready(function() {

    function renderLangButtons(langBody, buttonType, liverwireEvent, collapseButton){
        $.getJSON("data.json", function(json) {
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
                    lang_body += `<td class="lang"><button class="btn btn-light lang-btn" id="${buttonType}_${i}">${key}</button></td>`;
                    console.log("key:" + key + " value:" + item[key] + " i: " + i);
                });
            });
            $(`#${langBody}`).html(lang_body);
    
            Array.from(data).forEach(function(item, i) {
                Object.keys(item).forEach(function(key){
                    var btn = document.getElementById(`${buttonType}_${i}`);
                    btn.addEventListener("click", () =>{
                        var lang = btn.textContent;
                        var code = item[key];
                        
                        Livewire.emit(`${liverwireEvent}`, item[key]);
                        $(`#${collapseButton}`).html(key);
                        $(`#${collapseButton}`).click();
    
                        console.log(btn);                   
                    });
                });
            });
        });
    }

    renderLangButtons('lang_body', 'btn_sl', 'selectCode1', 'collapseOneBtn');
    renderLangButtons('lang_body2', 'btn_tl', 'selectCode2', 'collapseTwoBtn');
});