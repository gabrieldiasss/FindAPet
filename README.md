# Regras da aplicação

### Org

[] Deve ser possível se cadastrar como uma ORG
[] Deve ser possível cadastrar um pet
[] Deve ser possível visualizar TODAS as informações da organização (Incluindo nome, descrição, fotos, endereço, local, voluntários, apoiadores, bichos disponíveis para adoção, meta de doação)
[] Deve ser possível filtrar os animais por caracteristicas na tela da organização
[] Deve ser possível visualizar detalhes de um pet para adoção
[] Deve ser possível realizar login como uma ORG

### Usuário

[x] Deve ser possível cadastrar um usuário (Nome, Email, tipo de usuário, Senha)
[] Deve ser possível editar um usuário (Nome, Bio, telefone, Tipo de residencia, Endereço)
[] Deve ser possível visualizar o perfil do usuário
[] Deve ser possível listar todos os pets disponíveis para adoção em uma cidade
[] Deve ser possível filtrar pets por suas características

### Regras de negócio

# Org

[] Só ORG pode cadastrar um pet
[] Um pet deve estar ligado a uma ORG
[] Para uma ORG acessar a aplicação como admin, ela precisa estar logada

# Usuário

[] Para saber mais informações de um pet ou uma ORG é necessário o usuário está logado

[X] Email e username precisam ser unicos

[] Para listar os pets, obrigatoriamente precisamos informar a cidade
[] Todos os filtros, além da cidade, são opcionais
