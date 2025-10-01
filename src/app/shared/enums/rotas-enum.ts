export enum SegmentoRotas {
  HOME = "",
  SOBRE = "sobre",
  HABILIDADES = "habilidades",
  CERTIFICACOES = "certificacoes",
  ARTIGOS = "artigos",
  CARREIRA = "carreira",
  PROJETOS = "projetos",
  CONTATO = "contato"
}

export enum Rotas {
  HOME = `/${SegmentoRotas.HOME}`,
  SOBRE = `/${SegmentoRotas.SOBRE}`,
  HABILIDADES = `/${SegmentoRotas.HABILIDADES}`,
  CERTIFICACOES = `/${SegmentoRotas.CERTIFICACOES}`,
  ARTIGOS = `/${SegmentoRotas.ARTIGOS}`,
  CARREIRA = `/${SegmentoRotas.CARREIRA}`,
  PROJETOS = `/${SegmentoRotas.PROJETOS}`,
  CONTATO = `/${SegmentoRotas.CONTATO}`
}
