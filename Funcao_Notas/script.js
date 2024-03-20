function gerarAlunos(alunos) {
    var tabela = "<table><thead><tr><th>Nome</th><th>RA</th><th>notap1</th><th>notap2</th><th>Media</th></thead><tbody>";
    let somanotap1 = 0;
    let somanotap2 = 0;
    let media = 0;
    let aprovados = 0;
    let reprovados = 0;
  
  
    for (let i = 0; i < alunos.length; i++) {
      if (alunos[i].notap1 >= 6 ) {
        notap1 = "<td style='color: blue'>" + alunos[i].notap1 + "</td>";
      }else {
        notap1 = "<td style='color: red'>" + alunos[i].notap1 + "</td>";
      }
      
      if (alunos[i].notap2 >= 6 ) {
        notap2 = "<td style='color: blue'>" + alunos[i].notap2 + "</td>";
      }else {
        notap2 = "<td style='color: red'>" + alunos[i].notap2 + "</td>";
      }
  
      somanotap1 += alunos[i].notap1;
      somanotap2 += alunos[i].notap2;
      
      if ((alunos[i].notap1 + alunos[i].notap2) / 2 >= 6) {
        media = "<td style='color: blue'>" + (alunos[i].notap1 + alunos[i].notap2) / 2 + "</td>";
      }else{
        media = "<td style='color: red'>" + (alunos[i].notap1 + alunos[i].notap2) / 2 + "</td>";
      }
  
      if ((alunos[i].notap1 + alunos[i].notap2) / 2 >= 6) {
        aprovados++;
      } else {
        reprovados++;
      }
  
      tabela += "<tr><td>" + alunos[i].nome + "</td>" + "<td>" + alunos[i].ra + "</td>" + notap1 + notap2 + media + "</tr>";
    }
  
  
    tabela += "<tr><td></td><td></td><td>" + somanotap1 / alunos.length + "</td><td>" + somanotap2 / alunos.length +
      "</td></tr></tbody><caption>Tabela de notas com " + aprovados + " aprovados e " + reprovados + " reprovados </caption></table>";
    document.write(tabela);
  }