# diarioenzzoel
Modelo básico de diário para testes
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
		<link rel="stylesheet" href="styles.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css" />
		<title>LISTA DE TAREFAS</title>
	</head>
	<body>
		<div id="container">
			<h1 class="todo-header">Lista de Tarefas</h1>
			<input id="addToDo" type="text" placeholder="Adicione tarefa aqui..." />
			<ul>
				<li>
					<span><i class="fa fa-trash"></i></span> Estudar JavaScript
				</li>
				<li>
					<span><i class="fa fa-trash"></i></span> Estudar jQuery
				</li>
				<li>
					<span><i class="fa fa-trash"></i></span> Submeter atividade
				</li>
			</ul>
		</div>
    <script src="script.js"></script>
	</body>
</html>
