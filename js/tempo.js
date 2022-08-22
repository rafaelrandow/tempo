$(window).load(function () {
   var onde = getCidades();
   for(i = 0; i < onde.length; i++){
      // console.log($("cidade previsao tempo").html());
      var c = $("<div></div>");
      c.load("http://servicos.cptec.inpe.br/XML/cidade/"+onde[i]+"/previsao.xml", function(){converte()});
      c.appendTo(".saida");
   }   
});

function getCidades() {
   var arr = [];
   var params = window.location.href.slice(window.location.href.indexOf('=')+ 1).split('&');
   if (params[0] && !isNaN(params[0]) ){
      arr = params;
   }else{
      arr.push(244, 4704, 4765, 4772); // Saudoso Grande ABC Paulista
   }
   return arr;
}

function converte() {

   var condicoes = {
      "ec": "Encoberto com Chuvas Isoladas",
      "ci": "Chuvas Isoladas",
      "c": "Chuva",
      "in": "Instável",
      "pp": "Poss. de Pancadas de Chuva",
      "cm": "Chuva pela Manhã",
      "cn": "Chuva a Noite",
      "pt": "Pancadas de Chuva a Tarde",
      "pm": "Pancadas de Chuva pela Manhã",
      "np": "Nublado e Pancadas de Chuva",
      "pc": "Pancadas de Chuva",
      "pn": "Parcialmente Nublado",
      "cv": "Chuvisco",
      "ch": "Chuvoso",
      "t": "Tempestade",
      "ps": "Predomínio de Sol",
      "e": "Encoberto",
      "n": "Nublado",
      "cl": "Céu Claro",
      "nv": "Nevoeiro",
      "g": "Geada",
      "ne": "Neve",
      "nd": "Não Definido",
      "pnt": "Pancadas de Chuva a Noite",
      "psc": "Possibilidade de Chuva",
      "pcm": "Possibilidade de Chuva pela Manhã",
      "pct": "Possibilidade de Chuva a Tarde",
      "pcn": "Possibilidade de Chuva a Noite",
      "npt": "Nublado com Pancadas a Tarde",
      "npn": "Nublado com Pancadas a Noite",
      "ncn": "Nublado com Poss. de Chuva a Noite",
      "nct": "Nublado com Poss. de Chuva a Tarde",
      "ncm": "Nubl. c/ Poss. de Chuva pela Manhã",
      "npm": "Nublado com Pancadas pela Manhã",
      "npp": "Nublado com Possibilidade de Chuva",
      "vn": "Variação de Nebulosidade",
      "ct": "Chuva a Tarde",
      "ppn": "Poss. de Panc. de Chuva a Noite",
      "ppt": "Poss. de Panc. de Chuva a Tarde",
      "ppm": "Poss. de Panc. de Chuva pela Manhã"
   };

   var dia = $("previsao dia");
   dia.each(function () {
      var a = $(this).text();
      var b = a.split("-");
      //$(this).text( b[2]+"."+b[1]+"."+b[0] ) ;   
      $(this).text(b[2]);
   });

   var previsaoTempo = $("previsao tempo");
   previsaoTempo.each(function (index) {
      // console.log(index + ": " + $(this).text());

      for (var i in condicoes) {
         // console.log("key " + key + " has value " + myArray[key]);
         if ($(this).text() == i) {
            $(this).before("<img src='./img/"+i+".png' width='24px' height='24px'/>");
            $(this).text(condicoes[i])
         }
      }
   });

   var previsao = $("cidade");
   previsao.addClass("navbar bg-dark");

   $(".saida").fadeIn();
}