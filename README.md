# 📊 Análise de Notas - Portal de Desempenho
Um aplicativo web moderno e interativo desenvolvido em **React** para análise e visualização de notas de alunos por turma. O portal oferece estatísticas em tempo real, busca avançada e uma interface responsiva com animações fluidas.

<img width="1905" height="1016" alt="image" src="https://github.com/user-attachments/assets/9d2f9365-8471-4140-9845-4e74c896ce95" />



## 🎯 Objetivo

O projeto foi desenvolvido para facilitar o acompanhamento do desempenho acadêmico de alunos, permitindo que educadores visualizem dados de notas de forma clara, organizada e intuitiva. É possível filtrar por turma, buscar alunos específicos e acompanhar estatísticas gerais.

---

## ✨ Funcionalidades Principais

- **📋 Visualização de Notas**: Exibe as notas de todos os alunos organizadas por turma
- **🏆 Cálculo Automático de Médias**: Calcula automaticamente a média de cada aluno
- **📈 Estatísticas por Turma**: Mostra total de alunos, porcentagem de aprovados e média geral
- **🔍 Busca e Filtragem**: Busca rápida de alunos pelo nome em tempo real
- **🎨 Seletor de Turmas**: Interface intuitiva para alternar entre turmas
- **✅ Indicador de Aprovação**: Marca visualmente alunos aprovados (média ≥ 7.0)
- **🎭 Animações Suaves**: Transições elegantes ao carregar e filtrar dados
- **📱 Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **🎨 Interface Moderna**: Design colorido e visualmente atraente com Tailwind CSS

---

## 📦 Tecnologias Utilizadas

### Frontend
- **React 19**: Framework JavaScript para construção de interfaces
- **TypeScript**: Tipagem estática para maior segurança do código
- **Vite 6**: Build tool rápido e moderno
- **Tailwind CSS 4**: Framework de utilidades CSS para estilização
- **Lucide React**: Ícones de alta qualidade
- **Motion (Framer Motion)**: Animações fluidas e responsivas

### Ferramentas
- **Node.js**: Runtime JavaScript
- **NPM**: Gerenciador de pacotes
- **Express**: Backend simples (opcional, para futuras integrações)

### Armazenamento
- **localStorage**: Persistência de dados no navegador

---

## 📂 Estrutura do Projeto

```
analise-notas/
├── src/
│   ├── components/              # Componentes React reutilizáveis
│   │   ├── ClassSelector.tsx    # Selector dropdown de turmas
│   │   ├── SearchInput.tsx      # Campo de busca de alunos
│   │   ├── StatsCard.tsx        # Card com estatísticas da turma
│   │   └── StudentCard.tsx      # Card individual do aluno
│   │
│   ├── hooks/                   # Hooks customizados
│   │   └── useStudents.ts       # Hook para gerenciar estado dos alunos
│   │
│   ├── services/                # Serviços e lógica de dados
│   │   └── studentService.ts    # Funções para buscar/salvar dados
│   │
│   ├── types/                   # Definições de tipos TypeScript
│   │   └── index.ts             # Interfaces de dados
│   │
│   ├── App.tsx                  # Componente raiz da aplicação
│   ├── main.tsx                 # Ponto de entrada
│   └── index.css                # Estilos globais
│
├── index.html                   # Arquivo HTML principal
├── vite.config.ts               # Configuração do Vite
├── tsconfig.json                # Configuração do TypeScript
├── tailwind.config.js           # Configuração do Tailwind CSS
├── package.json                 # Dependências do projeto
└── README.md                    # Este arquivo
```

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js 16 ou superior instalado
- NPM ou Yarn como gerenciador de pacotes

### Instalação

1. **Clone ou acesse o repositório:**
   ```bash
   cd analise-notas
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:3000
   ```

### Scripts Disponíveis

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Fazer build para produção
npm run build

# Visualizar build de produção
npm run preview

# Limpar arquivos compilados
npm run clean

# Verificar tipos TypeScript
npm run lint
```

---

## 📊 Dados da Aplicação

### Turmas Disponíveis
- 3º Ano A
- 3º Ano B
- 3º Ano C

### Estrutura de Dados

Cada aluno possui:
- **Nome**: Identificação do aluno
- **Notas**: Array com 4 notas (provas/atividades)
- **Turma**: Identificação da turma

**Exemplo:**
```json
{
  "name": "João Silva",
  "grades": [8.5, 7.2, 9.0, 8.3],
  "class": "3º Ano B"
}
```

### Critério de Aprovação
- **Nota Mínima**: 7.0
- Os alunos com média ≥ 7.0 são considerados aprovados

---

## 💾 Armazenamento de Dados

Atualmente, o projeto utiliza **localStorage** do navegador para persistir dados. Isso significa:
- Os dados são salvos localmente no computador/dispositivo
- Os dados persistem após recarregar a página
- Cada navegador/dispositivo tem seus próprios dados

### Como Integrar com Banco de Dados Real

Para conectar a um banco de dados real (Firebase, Supabase, MongoDB, etc.), edite o arquivo `src/services/studentService.ts`:

```typescript
// Exemplo com Firebase
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';

export const getStudentData = async (): Promise<ClassData[]> => {
  const querySnapshot = await getDocs(collection(db, 'students'));
  return querySnapshot.docs.map(doc => doc.data() as ClassData);
};
```

---

## 🛠️ Componentes Principais

### `App.tsx`
Componente raiz que gerencia:
- Termo de busca
- Turma selecionada
- Cálculo de médias e estatísticas
- Renderização dos componentes filhos

### `useStudents.ts`
Hook customizado que:
- Carrega dados dos alunos
- Gerencia estados de carregamento e erro
- Permite atualizar dados

### `StudentCard.tsx`
Card de cada aluno exibindo:
- Avatar com iniciais
- Nome do aluno
- 4 notas
- Média geral
- Status de aprovação

### `StatsCard.tsx`
Card de estatísticas mostrando:
- Total de alunos
- Porcentagem de aprovados
- Média geral da turma

### `ClassSelector.tsx`
Dropdown para seleção de turma com opções dinâmicas

### `SearchInput.tsx`
Campo de busca em tempo real para filtrar alunos por nome

---

## 🎨 Design e Paleta de Cores

- **Primária**: Indigo (#1e3a8a)
- **Secundária**: Pink (#ec4899)
- **Destaque**: Teal (#14b8a6)
- **Fundo**: Amber (#fffbeb)
- **Texto**: Slate (#1e293b)

A interface possui um design moderno com:
- Bordas arredondadas generosas
- Sombras projetadas estilo retrô
- Animações suaves e responsivas
- Ícones claros e intuitivos

---

## 🐛 Tratamento de Erros

O projeto inclui tratamento de:
- Falhas ao carregar dados
- Alunos não encontrados na busca
- Estados de carregamento

---

## 📱 Responsividade

A aplicação é totalmente responsiva com breakpoints:
- **Mobile**: < 768px (stack vertical)
- **Tablet**: 768px - 1024px (adaptativo)
- **Desktop**: > 1024px (layout completo)

---

## 🔮 Melhorias Futuras

- [ ] Adicionar funcionalidade de editar notas
- [ ] Exportar dados em PDF/Excel
- [ ] Gráficos e visualizações avançadas
- [ ] Sistema de login para professores
- [ ] Histórico de alterações
- [ ] Relatórios customizáveis
- [ ] Integração com API de banco de dados real
- [ ] Notificações para alunos com risco

---

## 👨‍💻 Autor

Desenvolvido por **Marco Pinheiro** em 2026.

---

## 📄 Licença

Este projeto está sob a licença Apache 2.0. Veja o arquivo LICENSE para mais detalhes.

---

## 📞 Suporte

Para reportar erros ou sugestões de melhorias, entre em contato ou abra uma issue no repositório.

---

**Última atualização**: Maio de 2026
