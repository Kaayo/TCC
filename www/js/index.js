//JavaScript - Código do App

// Variáveis Globais
var db;
var shortName = 'WebSqlDB';
var version = '1.0';
var displayName = 'WebSqlDB';
var maxSize = 65535;



// Esta função é chamada quando ocorre algum erro na Transição!
function errorHandler(transaction, error) {
   alert('Error: ' + error.message + ' code: ' + error.code);




// Esta função é chamada quando uma Transição ocorreu com Sucesso!
function successCallBack() {
   alert("DEBUGGING: Sucesso!");

}



function nullHandler(){};



//Função chamada quando Aplicação foi inicializada!
function onBodyLoad(){



// Este Alerta é usada para garantir que o App carregou com sucesso!
// você pode comentar isto depois de ter o aplicativo de trabalho.
alert("DEBUGGING: we are in the onBodyLoad() function");

 if (!window.openDatabase) {
   // nem todos os dispositivos móveis suportar bancos de dados, se isso não acontecer, o seguinte alerta será exibido.
   // Indicando que o Smartphone não tem suporte para executar a aplicação.
   alert('Banco de Dados Não é suportado!');
   return;
 }



// Este Código tentará abrir a Base de Dados local no Dispositivo
// Se Não Existir o Banco de Dados, Ele será criado e retornará o mesmo
// object stored in variable db
 // db = openDatabase(shortName, version, displayName, maxSize);



// Este código tentará criar uma Tabela no Banco de Dados
created/openned
 db.transaction(function(tx){

  // Você pode descomentar a linha abaixo caso queira que a Tabela seja deletada cada vez que Aplicação é executada
  // tx.executeSql( 'DROP TABLE User',nullHandler,nullHandler);

  // Este código cria a Tabela 'usuarios' caso ela não exista, e adiciona a ela três atributos respectivamente.
   tx.executeSql('CREATE TABLE IF NOT EXISTS usuarios (cod_usuario INTEGER NOT NULL PRIMARY KEY, 
    nome_usuario TEXT NOT NULL, sobrenome_usuario TEXT NOT NULL)', [],nullHandler,errorHandler);} ,errorHandler,successCallBack);



 //Lista os Dados na Tela utilizando JQuery
update the #lbusuarios element
function ListDBValues() {

 if (!window.openDatabase) {
  alert('Databases are not supported in this browser.');
  return;
 }
}


// Esta linha limpa qualquer Conteúdo em '#lbUsers' element para que as próximas linhas sejam atualizadas
// Conteúdo e não apenas manter as linhas repetindo
 $('#lbusuarios').html('');




// Nesta seção será selecionado todo o conteúdo da Tabela 'usuarios' e o mesmo será adicionado linha por linha na página... 
// appending the UserId  FirstName  LastName to the  #lbUsers element
 db.transaction(function(transaction) {
   transaction.executeSql('SELECT * FROM usuarios;', [],
     function(transaction, result) {
      if (result != null && result.rows != null) {
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
          $('#lbusuarios').append('<br>' + row.UserId + '. ' +
row.FirstName+ ' ' + row.LastName);
        }
      }
     },errorHandler);
 },errorHandler,nullHandler);

 return;

}



// Nesta seção inserimos valores na Base de Dados usando valores de Textos presentes na Tela do Usuário...
function AddValueToDB() {

 if (!window.openDatabase) {
   alert('Base de Dados não é Suportada!');
   return;
 }

// Nesta seção Inserimos Valores na Tabela 'usuarios'
 db.transaction(function(transaction) {
   transaction.executeSql('INSERT INTO usuarios(nome_usuario, sobrenome_usuario)
VALUES (?,?)',[$('#txnome_usuario').val(), $('#txsobrenome_usuario').val()],
     nullHandler,errorHandler);
   });

 // this calls the function that will show what is in the User table in the database
 ListDBValues();

 return false;

}