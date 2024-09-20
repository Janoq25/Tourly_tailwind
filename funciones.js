window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    var opcionesMenu = document.getElementById('opciones-menu');
    var langs =document.getElementById('langs');
    if (window.scrollY > 0) {
      header.classList.add('shadow-md'); 
      header.classList.add('bg-white');
      opcionesMenu.classList.add('md:text-black'); 
      langs.classList.add('md:text-black'); 
    }else{
        header.classList.remove('shadow-md');
        header.classList.remove('bg-white');
        opcionesMenu.classList.remove('md:text-black');
        langs.classList.remove('md:text-black');  
    } 
  });

document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var togle = document.getElementById('menu-toggle');
    var main =  document.querySelector('main');
    var body = document.querySelector('body');
    var header = document.querySelector('header');
    menu.classList.toggle('hidden');
    menu.classList.toggle('bg-white');
    menu.classList.toggle('text-black');
    togle.classList.toggle('border');
    togle.classList.toggle('rounded-md');
    main.classList.toggle('blur-sm');
});

tailwind.config = {
    darkMode: 'class',
}

var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
  
 
  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      themeToggleLightIcon.classList.remove('hidden');
  } else {
      themeToggleDarkIcon.classList.remove('hidden');
  }
  
  var themeToggleBtn = document.getElementById('theme-toggle');
  
  themeToggleBtn.addEventListener('click', function() {
  
      
      themeToggleDarkIcon.classList.toggle('hidden');
      themeToggleLightIcon.classList.toggle('hidden');
  
  
      if (localStorage.getItem('color-theme')) {
          if (localStorage.getItem('color-theme') === 'light') {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          } else {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          }
  
    
      } else {
          if (document.documentElement.classList.contains('dark')) {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          } else {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          }
      }
      
  });

  let langs = document.querySelector(".langs"),
    link = document.querySelectorAll("a"),
    inicio = document.querySelector(".inicio");
    lugares = document.querySelector(".lugares");
    puntuacion = document.querySelector(".puntuacion");
    testimonios = document.querySelector(".testimonios");
    noticias = document.querySelector(".noticias");
    apariencia = document.querySelector(".Apariencia");
    sloganprincipal = document.querySelector(".sloganprincipal");
    slogansec = document.querySelector(".slogansec");
    rt1 = document.querySelector(".rt1");
    rp1 = document.querySelector(".rp1");
    rt2 = document.querySelector(".rt2");
    rp2 = document.querySelector(".rp2");
    rt3 = document.querySelector(".rt3");
    rp3 = document.querySelector(".rp3");
    lt = document.querySelector(".lt");
    pt = document.querySelector(".pt");
    n = document.querySelector(".n");
    nt1 = document.querySelector(".nt1");
    np1 = document.querySelector(".np1");
    nt2 = document.querySelector(".nt2");
    np2 = document.querySelector(".np2");
    nt3 = document.querySelector(".nt3");
    np3 = document.querySelector(".np3");
    tt = document.querySelector(".tt");
    tp1 = document.querySelector(".tp1");
    tp2 = document.querySelector(".tp2");
    tp3 = document.querySelector(".tp3");
    ft = document.querySelector(".ft");
    fsoluciones = document.querySelector(".fsoluciones");
    fmercado = document.querySelector(".fmercado");
    fanalisis = document.querySelector(".fanalisis");
    fcomercio = document.querySelector(".fcomercio");
    finsignias = document.querySelector(".finsignias");
    detalles = document.querySelector(".detalles");



    link.forEach(el => {
        el.addEventListener("click", () => {
            langs.querySelector(".active").classList.remove("active");
            el.classList.add("active");
    
            let attr = el.getAttribute("language")
    
            
                inicio.textContent = data[attr].inicio1;
                lugares.textContent = data[attr].lugares1;
                puntuacion.textContent = data[attr].puntuacion1;
                testimonios.textContent = data[attr].testimonios1;
                noticias.textContent = data[attr].noticias1;
                apariencia.textContent = data[attr].apariencia1;
                sloganprincipal.textContent = data[attr].sloganprincipal1;
                slogansec.textContent = data[attr].slogansec1;
                rt1.textContent = data[attr].rt11;
                rp1.textContent = data[attr].rp11;
                rt2.textContent = data[attr].rt21;
                rp2.textContent = data[attr].rp21;
                rt3.textContent = data[attr].rt31;
                rp3.textContent = data[attr].rp31;
                lt.textContent = data[attr].lt1;
                pt.textContent = data[attr].pt1;
                n.textContent = data[attr].n1;
                nt1.textContent = data[attr].nt11;
                np1.textContent = data[attr].np11;
                nt2.textContent = data[attr].nt21;
                np2.textContent = data[attr].np21;
                nt3.textContent = data[attr].nt31;
                np3.textContent = data[attr].np31;
                tt.textContent = data[attr].tt1;
                tp1.textContent = data[attr].tp11;
                tp2.textContent = data[attr].tp21;
                tp3.textContent = data[attr].tp31;
                ft.textContent = data[attr].ft1;
                fsoluciones.textContent = data[attr].fsoluciones1;
                fmercado.textContent = data[attr].fmercado1;
                fanalisis.textContent = data[attr].fanalisis1;
                fcomercio.textContent = data[attr].fcomercio1;
                finsignias.textContent = data[attr].finsignias1;
                detalles.textContent = data[attr].detalles1;
            
        });
    });

    let data = {
        ingles: {
            inicio1: "Home",
            lugares1: "Places",
            puntuacion1: "Rating",
            testimonios1: "Testimonials",
            noticias1: "News",
            apariencia1: "Appearance",
            sloganprincipal1: "Discover New Cultures",
            slogansec1: "Plan Your Vacations!",
            rt11: "Years of Experience",
            rp11: "We have over 7 years in the national tourism sector",
            rt21: "Affordable Prices",
            rp21: "We offer the most competitive costs in the sector",
            rt31: "All Around the World",
            rp31: "We cover the most beautiful places in the country",
            lt1: "Experience wild nature in all its splendor",
            pt1: "Each experience has a hidden richness - Find it!",
            n1: "Stay Informed about the World",
            nt11: "The Most Beautiful Christmas Trees",
            np11: "No city can pride itself on experiencing an authentic Christmas without displaying a spectacular tree in its most emblematic points. Its discovery is reason enough...",
            nt21: "Roscon Evenings, Glamorous Nights",
            np21: "Right above the popular Schweppes sign on Gran Vía, with breathtaking views of Madrid and a direct view of the Puerta del Sol clock, the hotel...",
            nt31: "Spanish Cities in the 'Top 10'",
            np31: "That Spain is one of the most touristy countries in the world (it never leaves the top ten) we knew. But we're not just talking about sun and beach vacations, but also...",
            detalles1: "Details",
            tt1: "What They Say About Us",
            tp11: "Tourly exceeded our expectations. I chose a destination I didn't know, and it turned out to be an amazing place. The staff was very knowledgeable and helped us make the most of our time. I highly recommend this company to anyone looking for a unique travel experience.",
            tp21: "Tourly was the best decision we made for our trip. I chose a destination I had always wanted to visit, and Tourly made everything very easy. The trip was perfect, and the staff was very attentive and helpful. I can't say enough about how well we were treated.",
            tp31: "I had an amazing experience with Tourly. I chose a destination at random, and it turned out to be a wonderful place. The staff was very friendly and helpful, and the trip was very well organized. I highly recommend this company to anyone looking for memorable vacations.",
            ft1: "Making the world a better place by building elegant hierarchies.",
            fsoluciones1: "Solutions",
            fmercado1: "Market",
            fanalisis1: "Analysis",
            fcomercio1: "Commerce",
            finsignias1: "Badges"
        },
        español: {
            inicio1: "Inicio",
            lugares1: "Lugares",
            puntuacion1: "Puntuacion",
            testimonios1: "Testimonios",
            noticias1:"Noticias",
            apariencia1: "Apariencia",
            sloganprincipal1: "Conoce nuevas culturas",
            slogansec1: "¡Planea tus vacaciones!",
            rt11: "Años de experiencia",
            rp11: "Tenemos más de 7 años en el sector turístico nacional",
            rt21: "Precios accesibles",
            rp21: "Contamos con los costos más competitivos en del sector",
            rt31: "A todo el Mundo",
            rp31:"Cubrimos los lugares más hermosos del país",
            lt1: "Experimenta la naturaleza salvaje en todo su esplendor",
            pt1: "Cada experiencia tiene una riqueza escondida ¡Encuéntrala!",
            n1: "Entérate de lo que sucede en el mundo",
            nt11: "Los arboles de navidad mas bonitos",
            np11: "No hay ciudad que se precie de vivir una auténtica Navidad si no luce un espectacular árbol en sus puntos más emblemáticos. No en vano, su descubrimiento es motivo suficiente...",
            nt21: "Tardes de roscón, noches de glamour",
            np21: "Justo encima del popular letrero de Schweppes de la Gran Vía, con panorámicas despampanantes a Madrid y visión directa al reloj de la Puerta del Sol, el hotel...",
            nt31: "Ciudades españolas, en el 'top 10'",
            np31: "Que España es uno de los países más turísticos del mundo (no sale nunca del top ten) lo sabíamos. Pero no solo hablamos de las vacaciones de sol y playa, sino que...",
            detalles1: "Detalles",
            tt1: "Lo que dicen de  nosotros",
            tp11:"Tourly superó nuestras expectativas. Elegí un destino que no conocía, y resultó ser un lugar increíble. El personal fue muy conocedor y nos ayudó a aprovechar al máximo nuestro tiempo. Recomiendo encarecidamente esta empresa a cualquiera que busque una experiencia de viaje única.",
            tp21: "Tourly fue la mejor decisión que tomamos para nuestro viaje. Elegí un destino que siempre había querido visitar, y Tourly hizo que todo fuera muy fácil. El viaje fue perfecto, y el personal fue muy atento y servicial. No puedo decir lo suficiente sobre lo bien que nos trataron.",
            tp31: "Tuve una experiencia increíble con Tourly. Elegí un destino al azar, y resultó ser un lugar maravilloso. El personal fue muy amable y servicial, y el viaje fue muy bien organizado. Recomiendo encarecidamente esta empresa a cualquiera que busque unas vacaciones memorables.",
            ft1: "Hacer del mundo un lugar mejor mediante la construcción de jerarquías elegantes.",
            fsoluciones1: "Soluciones",
            fmercado1: "Mercado",
            fanalisis1: "Analisis",
            fcomercio1: "Comercio",
            finsignias1: "Insignias"
        },
        portugues: {
            inicio1: "Início",
            lugares1: "Lugares",
            puntuacion1: "Pontuação",
            testimonios1: "Depoimentos",
            noticias1: "Notícias",
            apariencia1: "Aparência",
            sloganprincipal1: "Descubra Novas Culturas",
            slogansec1: "Planeje Suas Férias!",
            rt11: "Anos de Experiência",
            rp11: "Temos mais de 7 anos no setor de turismo nacional",
            rt21: "Preços Acessíveis",
            rp21: "Oferecemos os custos mais competitivos no setor",
            rt31: "Ao Redor do Mundo",
            rp31: "Abrangemos os lugares mais bonitos do país",
            lt1: "Experimente a natureza selvagem em todo o seu esplendor",
            pt1: "Cada experiência tem uma riqueza escondida - Encontre-a!",
            n1: "Fique Informado sobre o Mundo",
            nt11: "As Árvores de Natal Mais Bonitas",
            np11: "Nenhuma cidade pode se orgulhar de vivenciar um Natal autêntico sem exibir uma árvore espetacular em seus pontos mais emblemáticos. Sua descoberta é motivo suficiente...",
            nt21: "Tardes de Rosca, Noites Glamorosas",
            np21: "Logo acima da famosa placa de Schweppes na Gran Vía, com vistas deslumbrantes de Madrid e uma visão direta do relógio da Puerta del Sol, o hotel...",
            nt31: "Cidades Espanholas no 'Top 10'",
            np31: "Que a Espanha é um dos países mais turísticos do mundo (nunca sai do top ten) nós sabíamos. Mas não estamos falando apenas de férias de sol e praia, mas também...",
            detalles1: "Detalhes",
            tt1: "O Que Dizem Sobre Nós",
            tp11: "Tourly superou nossas expectativas. Escolhi um destino que não conhecia, e acabou sendo um lugar incrível. A equipe era muito experiente e nos ajudou a aproveitar ao máximo nosso tempo. Recomendo muito esta empresa para quem procura uma experiência de viagem única.",
            tp21: "Tourly foi a melhor decisão que tomamos para a nossa viagem. Escolhi um destino que sempre quis visitar, e o Tourly tornou tudo muito fácil. A viagem foi perfeita, e a equipe foi muito atenciosa e prestativa. Não posso dizer o suficiente sobre o quão bem fomos tratados.",
            tp31: "Tive uma experiência incrível com o Tourly. Escolhi um destino ao acaso, e acabou sendo um lugar maravilhoso. A equipe foi muito amigável e prestativa, e a viagem foi muito bem organizada. Recomendo muito esta empresa para quem procura férias memoráveis.",
            ft1: "Tornando o mundo um lugar melhor construindo hierarquias elegantes.",
            fsoluciones1: "Soluções",
            fmercado1: "Mercado",
            fanalisis1: "Análise",
            fcomercio1: "Comércio",
            finsignias1: "Insígnias"
        }
    }