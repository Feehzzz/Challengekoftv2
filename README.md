# Challengekoftv2
"It's a simple challenge send by koft to me, to improve my javascript techniques"
"# Challengekoft" "API desenvolvida em nodejs para cadastro de usuarios utilizando mongodb"

-----------------------------
Primeiramente configurar o path/url do banco de dados (mongodb), configurar servidor de email para envio de token em casos de reset de senha e definir um secret unico para seu projeto, tudo no arquivo .env
------------------------------

# Rotas e instruções
Rota Metodo POST /register enviar json com email, password no body para efetuar cadastro.

Rota Metodo POST /authenticate enviar json com email e password no body para authenticar e receber token jwt.

Rota Metodo POST /forgot_password enviar json com email no body para receber token de reset.

Rota Metodo POST /reset_password enviar json com email, token e nova senha que sera salva no db.

Rota GET /list_users necessario enviar um header com chave Authorization, key: Bearer ${token jwt}.
