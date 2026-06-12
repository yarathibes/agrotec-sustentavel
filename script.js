document.getElementById('btn-calcular').addEventListener('click', function() {
    // Captura o valor digitado pelo usuário
    const hectares = parseFloat(document.getElementById('hectares').value);
    const resultadoDiv = document.getElementById('resultado');

    // Validação simples para garantir que o número é válido
    if (isNaN(hectares) || hectares <= 0) {
        alert('Por favor, insira um número válido de hectares.');
        resultadoDiv.classList.add('hidden');
        return;
    }

    // Lógica fictícia do simulador baseado nos dados do projeto sustentável
    const aguaPoupada = hectares * 12000; // 12.000 litros por hectare
    const reducaoDesperdicio = 35; // 35% de redução média padrão do projeto

    // Atualiza os elementos HTML com os resultados calculados
    document.getElementById('res-agua').textContent = aguaPoupada.toLocaleString('pt-BR');
    document.getElementById('res-desperdicio').textContent = reducaoDesperdicio;

    // Define uma "nota" ecológica baseada no tamanho do impacto
    let nota = 'A';
    if (hectares > 10) {
        nota = 'A++ 🎉';
    } else if (hectares > 5) {
        nota = 'A+ ✨';
    }
    document.getElementById('res-nota').textContent = nota;

    // Mostra a caixinha de resultado removendo a classe 'hidden'
    resultadoDiv.classList.remove('hidden');
});
