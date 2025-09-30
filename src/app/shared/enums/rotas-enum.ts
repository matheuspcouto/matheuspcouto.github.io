export enum SegmentoRotas {
  HOME = "",
  SOBRE = "sobre",
  HABILIDADES = "habilidades",
  CERTIFICACOES = "certificacoes",
  ARTIGOS = "artigos",
  CARREIRA = "carreira",
  CONTATO = "contato",
}

export enum Rotas {
  HOME = `/${SegmentoRotas.HOME}`,
  SOBRE = `/${SegmentoRotas.SOBRE}`,
  HABILIDADES = `/${SegmentoRotas.HABILIDADES}`,
  CERTIFICACOES = `/${SegmentoRotas.CERTIFICACOES}`,
  CARREIRA = `/${SegmentoRotas.CARREIRA}`,
  CONTATO = `/${SegmentoRotas.CONTATO}`,
}
