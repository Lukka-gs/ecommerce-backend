# ecommerce-backend

Backend em Node.js usando Express e MySQL para um e-commerce simples.

## Instalação

```bash
npm install
```

Crie um banco de dados MySQL e ajuste as variáveis de ambiente `DB_HOST`, `DB_USER`, `DB_PASSWORD` e `DB_NAME` conforme sua configuração.

### Tabelas

```sql
CREATE TABLE produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  preco DECIMAL(10,2) NOT NULL,
  descricao TEXT,
  estoque INT DEFAULT 0
);

CREATE TABLE carrinho (
  id INT AUTO_INCREMENT PRIMARY KEY,
  produto_id INT NOT NULL,
  quantidade INT DEFAULT 1,
  FOREIGN KEY (produto_id) REFERENCES produtos(id)
);
```

## Execução

```bash
node index.js
```

A API ficará disponível em `http://localhost:3000`.

## Rotas

- **/produtos**
  - `GET`    - Lista produtos.
  - `POST`   - Cria um produto.
  - `PUT/:id`- Atualiza um produto.
  - `DELETE/:id` - Remove um produto.
- **/carrinho**
  - `GET`    - Lista itens do carrinho.
  - `POST`   - Adiciona produto ao carrinho.
  - `DELETE/:id` - Remove item do carrinho.
