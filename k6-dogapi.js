import http from 'k6/http';
import { check, sleep, fail } from 'k6';

export const options = {
  vus: 10,            // 10 usuários virtuais simultâneos
  duration: '10s',    // por 10 segundos
  thresholds: {
    http_req_duration: ['p(95)<500'],   // 95% das requisições devem ser menores que 500ms
    http_req_failed: ['rate<0.01'],     // menos que 1% de falhas de requisição aceitável
  },
};

export default function () {
  const res = http.get('https://dog.ceo/api/breeds/image/random');

  const result = check(res, {
    'status é 200': r => r.status === 200,
    'possui campo message': r => JSON.parse(r.body).message !== undefined,
    'possui campo status': r => JSON.parse(r.body).status === 'success',
  });

  if (!result) {
    fail('Checagem da API falhou');
  }

  // Só para visualizar o retorno
  //console.log(res.body);

  sleep(1);
}
