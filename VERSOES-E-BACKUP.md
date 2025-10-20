# 📋 CONTROLE DE VERSÕES - FOCCO SITE

## 🔄 VERSÕES DISPONÍVEIS

### **VERSÃO ATUAL (main) - V2.0** ✨ NOVA
**Branch:** `main`
**Última atualização:** 20 de outubro de 2025
**Status:** ✅ Ativa e em produção

**Deploy:** https://focco-method-spark-33274.pages.dev

#### O que tem nesta versão:
- ✅ WhatsApp atualizado: (83) 99378-7450
- ✅ Email: focconavida@gmail.com
- ✅ Todas as redes sociais (Instagram, Facebook, YouTube, LinkedIn)
- ✅ Seção "Quem Sou" com história completa da Valéria Dias
- ✅ Foto profissional da Valéria
- ✅ Credenciais completas (MTI, PUC, livro, 1000+ pessoas)
- ✅ Pilares científicos: Mindfulness, Neurociência, Comportamento
- ✅ Diagrama de benefícios do FOCCO
- ✅ Widget de avaliações do Google
- ✅ 5 serviços do portfólio:
  1. Sessões Individuais de FOCCO
  2. Reprogramação Neural
  3. Consultoria em Desenvolvimento Comportamental
  4. Treinamentos de Longo Prazo
  5. Palestras e Treinamentos Corporativos
- ✅ Header fixo com espaçamento correto

**Commits principais:**
```
0be0de7 - Corrige header fixo cobrindo conteúdo das seções
2339ecb - Finalização completa do site - Serviços atualizados do portfólio
e7904e9 - Adiciona widget de avaliações do Google no site
6caa879 - Atualização completa do site com informações reais da Valéria Dias
```

---

### **VERSÃO ANTERIOR (backup) - V1.0** 📦 BACKUP
**Branch:** `backup-versao-anterior`
**Última atualização:** 20 de outubro de 2025 (antes das alterações)
**Status:** 🔒 Preservada como backup

#### O que tem nesta versão:
- WhatsApp antigo: (83) 99387-450
- Sem informações da Valéria Dias
- Sem foto profissional
- Sem credenciais
- Pilares genéricos (Foco, Consciência, Transformação)
- Sem widget de avaliações
- 3 serviços genéricos:
  - Mentoria Individual
  - Workshop em Grupo
  - Programa Corporativo
- Logo ajustada (tamanho e cores)

**Commit de referência:**
```
8ddaae9 - Ajusta paddings do header para todos os breakpoints
```

---

## 🔧 COMO REVERTER PARA A VERSÃO ANTERIOR

### **Opção 1: Reverter PERMANENTEMENTE (substitui a versão atual)**

```bash
# 1. Ir para o diretório do projeto
cd /root/projetos/site-focco/focco-method-spark-33274

# 2. Fazer backup da branch main atual (segurança extra)
git branch backup-main-v2 main

# 3. Reverter para a versão anterior
git checkout main
git reset --hard 8ddaae9

# 4. Forçar push (ATENÇÃO: isso sobrescreve o histórico!)
git push origin main --force

# 5. O Cloudflare vai atualizar automaticamente em ~1-2 minutos
```

⚠️ **ATENÇÃO:** Esta opção APAGA o histórico das alterações recentes!

---

### **Opção 2: Criar deploy da VERSÃO ANTERIOR (mantém as duas versões)**

```bash
# 1. Ir para o diretório do projeto
cd /root/projetos/site-focco/focco-method-spark-33274

# 2. Ir para a branch de backup
git checkout backup-versao-anterior

# 3. Fazer push dessa branch
git push origin backup-versao-anterior

# 4. No Cloudflare Pages:
#    - Vá em Settings > Builds & deployments
#    - Mude "Production branch" de "main" para "backup-versao-anterior"
#    - O site vai voltar para a versão antiga
```

✅ **RECOMENDADO:** Esta opção mantém todo o histórico preservado!

---

### **Opção 3: Testar a VERSÃO ANTERIOR localmente (sem deploy)**

```bash
# 1. Ir para o diretório do projeto
cd /root/projetos/site-focco/focco-method-spark-33274

# 2. Ir para a branch de backup
git checkout backup-versao-anterior

# 3. Rodar o site localmente
npm run dev

# 4. Abrir no navegador: http://localhost:5173

# 5. Voltar para a versão atual
git checkout main
```

---

## 🔄 COMO VOLTAR PARA A VERSÃO NOVA (V2.0)

Se você reverteu e quer voltar para a nova:

```bash
# 1. Ir para o diretório do projeto
cd /root/projetos/site-focco/focco-method-spark-33274

# 2. Voltar para a main
git checkout main

# 3. Se precisar recuperar do backup (caso tenha apagado)
git reset --hard origin/main

# 4. Fazer push
git push origin main

# 5. No Cloudflare Pages:
#    - Vá em Settings > Builds & deployments
#    - Mude "Production branch" de volta para "main"
```

---

## 📊 COMPARAÇÃO ENTRE VERSÕES

| Recurso | V1.0 (Anterior) | V2.0 (Atual) |
|---------|----------------|--------------|
| WhatsApp | ❌ (83) 99387-450 | ✅ (83) 99378-7450 |
| Email | ❌ genérico | ✅ focconavida@gmail.com |
| Redes Sociais | ❌ Apenas Instagram | ✅ Todas (4 redes) |
| História Valéria | ❌ Não tem | ✅ Completa |
| Foto Valéria | ❌ Não tem | ✅ Profissional |
| Credenciais | ❌ Genéricas | ✅ Todas (8 items) |
| Pilares FOCCO | ❌ Genéricos | ✅ Científicos |
| Serviços | ❌ 3 genéricos | ✅ 5 do portfólio |
| Avaliações Google | ❌ Depoimentos fake | ✅ Widget real |
| Diagrama Benefícios | ❌ Não tem | ✅ Imagem real |

---

## 🎯 RECOMENDAÇÃO

**Se o cliente APROVAR as alterações:**
- ✅ Manter a versão V2.0 (atual)
- ✅ Pode deletar a branch `backup-versao-anterior` depois de 30 dias

**Se o cliente NÃO APROVAR:**
- ✅ Usar a Opção 2 (reverter no Cloudflare)
- ✅ Manter a branch `main` com V2.0 como backup
- ✅ Depois de confirmação, pode apagar a V2.0

---

## 📝 HISTÓRICO DE MUDANÇAS

### 20/10/2025 - V2.0
- Implementação completa do site com informações da Valéria Dias
- Widget de avaliações do Google
- Serviços atualizados do portfólio
- Correção do header fixo

### 20/10/2025 - V1.0 (backup)
- Versão antes das alterações
- Logo ajustada
- Site genérico sem informações da Valéria

---

## 🆘 SUPORTE

Se precisar de ajuda para reverter ou tiver dúvidas:
1. Este arquivo documenta todos os passos
2. Todas as branches estão preservadas no GitHub
3. Nada foi apagado - tudo está em backup!

**Links importantes:**
- Repositório: https://github.com/Saad-neto/focco-method-spark-33274
- Branch V2.0 (atual): https://github.com/Saad-neto/focco-method-spark-33274/tree/main
- Branch V1.0 (backup): https://github.com/Saad-neto/focco-method-spark-33274/tree/backup-versao-anterior

---

**Data de criação deste documento:** 20 de outubro de 2025
**Última atualização:** 20 de outubro de 2025
