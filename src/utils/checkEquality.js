export function checkEquality(arr, objTargets, type) {
  let filteredMap = arr;

  if (type === "contrato") {
    if (objTargets.contract)
      filteredMap = arr.filter((key) =>
        key.nome
          ?.toLowerCase()
          ?.includes(objTargets.contract.toLowerCase().trim()),
      );

    if (objTargets.client)
      filteredMap = arr.filter((key) =>
        key.client
          ?.toLowerCase()
          ?.includes(objTargets.client.toLowerCase().trim()),
      );

    if (objTargets.id)
      filteredMap = arr.filter((key) => key.id.includes(objTargets.id.trim()));

    if (objTargets.inicio)
      filteredMap = arr.filter((key) => {
        const dateKey = new Date(key.assinaturas[0]?.createdAt);
        const dateInicio = new Date(
          objTargets.inicio.trim().split("/").reverse().join("-"),
        );

        return dateKey >= dateInicio;
      });

    if (objTargets.termino)
      filteredMap = arr.filter((key) => {
        const dateKey = new Date(key.assinaturas[0]?.createdAt);
        const dateTermino = new Date(
          objTargets.termino.trim().split("/").reverse().join("-"),
        );

        return dateKey <= dateTermino;
      });

    return filteredMap;
  }

  if (type === "contato") {
    if (objTargets.client)
      filteredMap = arr.filter((key) =>
        key.nome.toLowerCase().includes(objTargets.client.toLowerCase().trim()),
      );

    if (objTargets.cpf)
      filteredMap = arr.filter((key) =>
        key.cpf.includes(objTargets.cpf.trim()),
      );

    if (objTargets.id)
      filteredMap = arr.filter((key) => key.id.includes(objTargets.id.trim()));

    if (objTargets.inicio)
      filteredMap = arr.filter((key) => {
        const dateKey = new Date(
          key.inicioConstrucao.split("/").reverse().join("-"),
        );
        const dateInicio = new Date(
          objTargets.inicio.trim().split("/").reverse().join("-"),
        );

        return dateKey >= dateInicio;
      });

    if (objTargets.termino)
      filteredMap = arr.filter((key) => {
        const dateKey = new Date(
          key.previsaoTermino.split("/").reverse().join("-"),
        );
        const dateTermino = new Date(
          objTargets.termino.trim().split("/").reverse().join("-"),
        );

        return dateKey <= dateTermino;
      });
  }

  return filteredMap;
}
