function Formatter(param) {
  param.name = param.name.toLowerCase();
  param.cpf = param.cpf.split(".").join("").split("-").join("");
  param.inicio = param.inicio.replace("-", "/").replace("-", "/");
  param.termino = param.termino.replace("-", "/").replace("-", "/");
}
