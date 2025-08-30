# Teste de Performance com K6 - Dog CEO API

Este projeto realiza um teste de carga simples na API pública [Dog CEO](https://dog.ceo/dog-api/) usando a ferramenta K6.

## Sobre o Projeto

O objetivo é validar a estabilidade e o desempenho do endpoint que retorna imagens aleatórias de cães, garantindo que a resposta esteja correta e dentro de parâmetros aceitáveis de performance.

## Configuração do Teste

- Endpoint testado: `https://dog.ceo/api/breeds/image/random`
- Usuários virtuais simultâneos (VUs): 10
- Duração do teste: 10 segundos
- Validamos:
  - Status HTTP 200
  - Presença do campo `message` no JSON de resposta
  - Campo `status` igual a `"success"`
- Definimos thresholds para garantir:
  - 95% das requisições com tempo menor que 500ms
  - Taxa de falhas menor que 1%

## Como Executar

1. Instale o K6 (caso não tenha):
`
winget install k6 --source winget  
`

2. Execute o teste:
`
k6 run k6-dogapi.js
` 


3. Observe o relatório no terminal com métricas de performance, taxas de sucesso e validade dos dados.

## Principais Métricas do Relatório

- `http_req_duration`: tempo médio de resposta, com percentis 90 e 95 destacados.
- `http_req_failed`: percentual de requisições que falharam (ideal próximo de 0%).
- `checks_total`, `checks_succeeded`: total e sucesso das validações no script.
- `iterations`: quantas iterações a cada VU foram feitas durante o teste.
- Dados trafegados (bytes recebidos e enviados).

## Referências

- [Documentação Oficial do K6](https://k6.io/docs/)
- [Dog CEO API](https://dog.ceo/dog-api/)

---
