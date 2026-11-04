test("GET to /api/vi/status should return to 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200); //Teste do retorno do status

  const responseBody = await response.json();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  expect(responseBody.dependencies.database.version).toEqual("16.15"); // Teste da versão

  expect(responseBody.dependencies.database.max_connections).toEqual(100); // Teste do máximo de conecções

  expect(responseBody.dependencies.database.opened_connections).toEqual(1); // Teste do conecções abertas até o momento
});
