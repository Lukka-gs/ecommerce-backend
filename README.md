# ecommerce-backend

Backend em Node.js + Express + MySQL para um e-commerce simples.

## Configuração

1. Crie o arquivo `.env` com as seguintes variáveis (exemplo para XAMPP com usuário `root` sem senha):

    ```env
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=
    DB_NAME=ecommerce
    PORT=3000
    ```

2. Crie o banco de dados e as tabelas com o seguinte script SQL:

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

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Inicie o servidor:

    ```bash
    node index.js
    ```

A API ficará disponível em `http://localhost:3000`.

---

## Rotas da API

### **/produtos**

- `GET /produtos` — Lista produtos
- `POST /produtos` — Cria um produto
- `PUT /produtos/:id` — Atualiza um produto
- `DELETE /produtos/:id` — Remove um produto

### **/carrinho**

- `GET /carrinho` — Lista itens do carrinho
- `POST /carrinho` — Adiciona produto ao carrinho
- `DELETE /carrinho/:id` — Remove item do carrinho

---

## Testes com Postman

Você pode usar o [Postman](https://www.postman.com/) para testar os endpoints da API.

Exemplo de corpo para criar um produto (POST `/produtos`):

```json
{
  "nome": "Produto Teste",
  "preco": 49.99,
  "descricao": "Descrição do produto",
  "estoque": 10
}
