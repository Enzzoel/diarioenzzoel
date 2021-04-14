// Seu código aqui!
$(document).ready(function(){

    //Adicionando botão para confirmar a adição da tarefa
    $("body").append("<div></div>");
    var div2 = $("div").get(1);

    //Adicionando um CSS para dar beleza ao item
    $(div2).css({
        "padding-top": "10px"
    })

    //Adicionando o botão de adicionar o item
    $(div2).addClass("addList");
    $(div2).append("<button>Adicione Itens a Lista</button>");
    $("button").addClass("botao");

    //Mais CSS para embelezar a obra
    $("button").css({ 
        "font-size": "18px", 
        "box-sizing": "border-box",
        "color":"#000000",
        "background": "#bfe2f9",
        "border": "2px solid #0000ff",
        "width": "100%",
        "padding": "10px 10px 10px 20px"
    });

    //Adicionando ela na lista
    $(".botao").click(function(){

        //Recebe informação
        var info = $("#addToDo").val();

        //Cria item na lista
        $("ul").append("<li></li>");
        var newli = $("li").last();
        $(newli).prepend("<span><i></i></span>");
        $(newli).append(info);
        var newI = $("i").last();
        $(newI).addClass("fa fa-trash");
        
    });

    //Removendo itens da lista
    $(document).on('click', 'li', function () {
        $(this).remove();
    });
});
