# Regras da aplicação

### Org

[] Deve ser possível se cadastrar como uma ORG
[] Deve ser possível cadastrar um pet
[] Deve ser possível visualizar TODAS as informações da organização (Incluindo nome, descrição, fotos, endereço, local, voluntários, apoiadores, bichos disponíveis para adoção, meta de doação)
[] Deve ser possível filtrar os animais por caracteristicas na tela da organização
[] Deve ser possível visualizar detalhes de um pet para adoção
[] Deve ser possível realizar login como uma ORG
[] Deve ser possível conversar atráves de um chat em tempo real para tirar dúvidas
[] Deve ser possível criar processo seletivo para ser um voluntariado

### Voluntário

[] Deve ser possível se candidatar para ser voluntario

### Usuário

[] Deve ser possível cadastrar um usuário (Nome, Email, tipo de usuário, Senha)
[] Deve ser possível editar um usuário (Nome, Bio, telefone, Tipo de residencia, Endreço)
[] Deve ser possível visualizar o perfil do usuário
[] Deve ser possível listar todos os pets disponíveis para adoção em uma cidade
[] Deve ser possível filtrar pets por suas características
[] Deve ser possível listar todas as adoções feitas pelo usuário
[] Deve ser possível o usuário agendar uma visita para conhecer os animais pessoalmente

[] Deve ser possível um usuário fazer doações a uma ORG
[] Deve ser possível avaliar uma ORG
[] Deve ser possível notificar por email para novas atualizações sobre novos pets disponíveis
[] Deve ser possível criar vagas para voluntários

### Regras de negócio

# Org

[] Só ORG pode cadastrar um pet
[] Um pet deve estar ligado a uma ORG
[] É necessário a ORG estabelecer um limite de doação de no máximo R$10K por mês
[] Para uma ORG acessar a aplicação como admin, ela precisa estar logada

# Voluntário

[] Apenas usuários voluntariados podem se candidatar as vagas

# Usuário

[] Para saber mais informações de um pet ou uma ORG é necessário o usuário está logado
[] Para fazer transferência é necessário está logado

[] O usuáro (que participou das doações) deve está ligado a ORG

[] Para listar os pets, obrigatoriamente precisamos informar a cidade
[] Usuário pode fazer transferência de no máximo R$1K por dia
[] O usuário que quer adotar, entrará em contato com a ORG através de um chat
[] Todos os filtros, além da cidade, são opcionais
