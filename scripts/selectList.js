liItems = document.querySelectorAll('.marcador')

for(item of liItems){
    item.addEventListener('click', ativarMarcador)
}
console.log(event.target)

function ativarMarcador(){
    for(item of liItems){
        $(item).removeClass('marcador-ativo')
    }
    let x = 0
    while (x<=parseInt(event.target.id)) {
        $(liItems[x]).addClass('marcador-ativo')
        x++
    }
    console.log(event.target.id);
    if(event.target.id == 0){$('iframe').attr('src', 'https://www.youtube.com/embed/0Gi-cSZetDY'); $('.download').attr('href', 'origem do download')}
    if(event.target.id == 1){$('iframe').attr('src', 'https://www.youtube.com/embed/37wV1l9iUvA'); $('.download').attr('href', 'origem do download')}
    if(event.target.id == 2){$('iframe').attr('src', 'https://www.youtube.com/embed/WPTQ8fZ0aQk'); $('.download').attr('href', 'origem do download')}
    if(event.target.id == 3){$('iframe').attr('src', 'https://www.youtube.com/embed/Gojqw9BQ5qY'); $('.download').attr('href', 'origem do download')}
    if(event.target.id == 4){$('iframe').attr('src', 'https://www.youtube.com/embed/Q8eajxcS6dQ'); $('.download').attr('href', 'origem do download')}
}