// Método que retorna as notas do arquivo json
const fecthNotes = () => {
    // UTILIZE O fs PARA LER OS DADOS DO ARQUIVO JSON QUE VOCÊ IRÁ SALVAR AS NOTAS
};

// Método que salva as notas no arquivo json
const saveNotes = (notes) => {
    // UTILIZA O fs PARA SALVAR OS DADOS NO ARQUIVO JSON
};

const addNote = (title, body) => {
    // MÉTODO PARA ADICIONAR NOTAS
    // VALIDAR SE JÁ EXISTE NOTA COM O MESMO TITULO, SE SIM,
    // ENVIAR MENSAGEM AVISANDO QUE JÁ EXISTE, SE NÃO
    // RETORNAR NOTA CRIADA
    // OBS: Deve validar caso não exista notas
};

const removeNote = (title) => {
    // REMOVER NOTA DE ACORDO COM O TITULO ENVIADO
};

const getAllNotes = () => {
    // BUSCAR TODAS AS NOTAS
    // DICA: Método fetchNotes pode ajudar kkkk
};

const getNote = (title) => {
    // BUSCAR NOTA PELO TÍTULO, SE NÃO EXISTIR, INFORMAR QUE NÃO EXISTE KKK
    // SE A NOTA EXISTE, DEVE RETORNÁ-LA
};

const updateNote = (title, body) => {
    // BUSCAR NOTAS PELO TÍTULO E ATUALIZAR O CONTEUDO
    // DEVE RETORNAR A NOTA ATUALIZADA
};