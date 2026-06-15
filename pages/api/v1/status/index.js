function status(request, response) {
  response.status(200).json({ chave: "Conexão funcionando normalmente! OK" });
}

export default status;
("");
