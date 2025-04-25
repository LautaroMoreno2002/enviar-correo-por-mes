const sendEmail = require("../mailer");
const titles = [
  "Tres meses con vos...",
  "Cuatro meses a tu lado...",
  "Cinco increíbles meses con Chiara...",
  "Medio año con el amor de mis días...",
  "Siete meses largos y bonitos...",
  "Ocho meses interesantes...",
  "Nueve meses desde que me encantaste...",
  "Diez meses con tus hermosas palabras...",
  "Once meses con la mejor novia...",
  "Un año desde que tomé una de las mejores desiciones...",
];
const exception = [
  "Yo siempre huyo y con vos elegir quedarme.",
  "La paciencia no es lo mío y a vos quise esperarte.",
  "Me cuesta confiar y a vos te cuento mis secretos.",
  "Prefiero el silencio pero con vos me gusta conversar.",
  "Prefiero la soledad y a a vos quise darte mi espacio.",
  "No importa la opinión de los demás pero tu voz tiene peso en mi vida.",
  "Me gusta vivir en el presente pero con vos me gusta planear el futuro.",
  "Vos sí me hacés querer responder rápido.",
  "Con vos no tengo miedo a sentir.",
  "¿Y yo soy la tuya?",
];
const datos = [
  `
  Cuando dos estrellas están lo suficientemente cerca, pueden girar una alrededor de la otra en un baile eterno: se llaman 'binarias'.
  Así como nosotros, orbitando el uno al otro, brillando juntos más fuerte que separados, creando una danza perfecta en el universo.
  `,
  `
  La distancia entre la Tierra y el Sol es de aproximadamente 93 millones de millas (150 millones de kilómetros).
  Esa distancia es lo que nos separa de la luz y el calor que necesitamos para vivir. Así como la distancia entre nosotros, que a veces parece inmensa, pero siempre encontramos la forma de acercarnos.
  `,
  `
  El planeta Venus, símbolo del amor, gira en dirección contraria a la mayoría de los planetas.
  Como el amor verdadero, no sigue las reglas del universo, se siente único y especial. Así como vos me hacés sentir.
  `,
  `
  Las mariposas en el estómago son reales: son causadas por la adrenalina y la dopamina, dos hormonas que se liberan cuando estamos enamorados.
  Así como cuando me mirás, me hacés sentir mariposas en el estómago.
  `,
  `
  Cada persona tiene una "huella de estrellas": Todos los átomos de nuestro cuerpo provienen de estrellas que explotaron hace miles de millones de años.
  Así como cada momento que compartimos deja una huella en mi corazón, recordándome que somos parte de algo más grande. Amarse es reconocer el polvo de estrellas en el otro.
  `,
  `
  Las constelaciones son como las relaciones: a veces se ven claras y brillantes, otras veces se ocultan tras las nubes.
  Pero siempre están ahí, esperando ser descubiertas. Así como nuestro amor, que a veces se siente lejano pero siempre está presente.
  `,
  `
  Los signos zodiacales están alineados con constelaciones por las que el Sol parece pasar durante el año. Compartir signos es solo una excusa para sentir que el universo nos unió.
  `,
  `
  Las parejas que duermen juntas sincronizan sus ciclos de sueño, frecuencia cardíaca y temperatura corporal. Dormir juntos es una forma de amor que va más allá de las palabras.
  Así como cuando me abrazás y siento que todo encaja, como si el universo nos hubiera diseñado para estar juntos.
  `,
  `
  El campo magnético de la Tierra nos protege de la radiación solar. Así como tu amor me protege de las tormentas de la vida, dándome fuerza y seguridad.
  `,
  `
  En la Vía Láctea hay más de 100.000 millones de estrellas, y aún así, elegí mirarte solo a vos. Una forma astronómica de decirte que sos única entre un cielo infinito.
  `,
];
const texts = [
  `Tres meses y siento que esto recién empieza.
No deja de sorprenderme cómo nos entendemos tan bien.
Tu presencia me calma, me impulsa, me hace bien.
Cada día a tu lado suma algo lindo a mi vida.
Gracias por hacer que todo lo cotidiano se vuelva especial.
Sos mi alegría silenciosa, mi abrazo preferido.
Si esto es el comienzo, no puedo esperar lo que viene.
Te elijo, hoy y cada día.
`,
  `
Cuatro meses aprendiendo a querernos más y mejor.
A veces sin palabras, a veces con todas.
Estás y eso basta para que cualquier día mejore.
Sos mi lugar seguro, y también mi aventura.
Gracias por tu paciencia, tus risas, tu forma de amar.
Con vos todo es más fácil, más sincero, más nuestro.
Me hacés bien, y eso ya es un montón.
Sigamos sumando momentos que valgan la pena.
`,
  `
Cinco meses y ya sos parte de mis pensamientos diarios.
Estás en mis ganas, en mis ideas, en mis planes.
A veces me detengo a pensar: “qué suerte la mía”.
Porque llegaste con todo eso que no sabía que necesitaba.
Tu forma de querer me inspira a querer mejor.
Gracias por quedarte, incluso en los días grises.
Gracias por hacerme sentir tan amado.
Esto es real, y es hermoso.
`,
  `
Medio año con vos.
Seis meses que parecen poco, pero se sienten grandes.
Porque lo nuestro creció con ganas, con ternura y verdad.
Sos mi refugio cuando todo pesa.
Sos la alegría cuando el mundo se apaga.
Te miro y sé que no me equivoqué.
Gracias por hacerme sentir tan en casa.
Y por enseñarme que el amor también se construye.
`,
  `
Siete meses y te sigo descubriendo con la misma emoción.
Cada gesto tuyo me enamora un poquito más.
A tu lado todo se vuelve más cálido, más claro.
Sos parte de lo mejor que me pasó.
Me gusta cómo me hacés sentir, sin esfuerzo.
Sos paz, pero también chispa.
Gracias por ser tan vos.
Y por dejarme ser yo con vos.
`,
  `
Ocho meses y todavía me hacés sonreír como al principio.
Pero ahora con más confianza, más profundidad, más amor.
Sos esa persona con la que quiero compartir todo.
Las buenas noticias, los silencios, los días largos.
Te pienso, te extraño, te elijo.
Gracias por construir algo tan lindo conmigo.
Gracias por la forma en que estás.
Siempre tan vos, siempre tan cerca.
`,
  `
Nueve meses.
Y todo en mí sabe que estoy donde quiero estar.
No hay dudas, no hay miedo, solo certeza.
Lo nuestro es de verdad, y eso vale todo.
Gracias por caminar este camino conmigo.
Por ser parte de mi día, de mi mente, de mi corazón.
Sos mi equipo, mi amor, mi persona.
Y lo nuestro, mi lugar favorito.
`,
  `
Diez meses.
Y no hay un solo día en que no te agradezca internamente.
Por cada momento compartido, por cada caricia, por cada mirada.
Sos compañía, sos ternura, sos esa vibra que me hace bien.
Me emociona ver cómo crecimos, cómo nos cuidamos.
Cómo somos más “nosotros” sin dejar de ser quienes somos.
Gracias por tanto amor del bueno.
Estamos haciendo algo hermoso.
`,
  `
Once meses con vos.
Y no dejo de maravillarme con lo que construimos.
No es casualidad, es elección.
Día a día, con paciencia, con amor real.
Me gusta lo que somos.
Me gusta cómo me hacés sentir.
Sos una de las certezas más lindas que tengo.
Gracias por quedarte.
`,
  `
Un año.
Doce meses que se sienten como un viaje maravilloso.
Hemos crecido, aprendido, reído y también superado cosas.
Y acá estamos, más juntos que nunca.
Sos mi lugar favorito, sin importar dónde estemos.
Gracias por este primer año tan lleno de amor y verdad.
Por todo lo que fuimos, somos y seremos.
Feliz aniversario, amor. Esto recién empieza.
`,
];
const songs = [
  {
    urlSong: "https://youtu.be/0FF-ibnhBik",
    urlDisplay: "https://img.youtube.com/vi/0FF-ibnhBik/0.jpg",
  },
  {
    urlSong: "https://www.youtube.com/watch?v=JPzmSq9A7qE",
    urlDisplay: "https://img.youtube.com/vi/JPzmSq9A7qE/0.jpg",
  },
  {
    urlSong: "https://www.youtube.com/watch?v=7aSsSf-e4zQ",
    urlDisplay: "https://img.youtube.com/vi/7aSsSf-e4zQ/0.jpg",
  },
  {
    urlSong: "https://www.youtube.com/watch?v=fgXDHQm5eq4",
    urlDisplay: "https://img.youtube.com/vi/fgXDHQm5eq4/0.jpg",
  },
  {
    urlSong: "https://www.youtube.com/watch?v=Hp__tcvnEnk",
    urlDisplay: "https://img.youtube.com/vi/Hp__tcvnEnk/0.jpg",
  },
  {
    urlSong: "https://www.youtube.com/watch?v=wAjHQXrIj9o",
    urlDisplay: "https://img.youtube.com/vi/wAjHQXrIj9o/0.jpg",
  },
  {
    urlSong: "https://www.youtube.com/watch?v=YmKVjlfxvyU",
    urlDisplay: "https://img.youtube.com/vi/YmKVjlfxvyU/0.jpg",
  },
  {
    urlSong: "https://www.youtube.com/watch?v=SvizVoNjv7A",
    urlDisplay: "https://img.youtube.com/vi/SvizVoNjv7A/0.jpg",
  },
  {
    urlSong: "https://www.youtube.com/watch?v=uTBfN9KMfPk",
    urlDisplay: "https://img.youtube.com/vi/uTBfN9KMfPk/0.jpg",
  },
  {
    urlSong: "https://www.youtube.com/watch?v=Iinqu7RGRO4",
    urlDisplay: "https://img.youtube.com/vi/Iinqu7RGRO4/0.jpg",
  },
];
const mailsBodies = [];
for (let i = 0; i < 10; i++) {
  mailsBodies.push(
    `
  <div style="border: 10px solid #8B0000; font-family: Arial, sans-serif; padding: 20px; background-color: #fff; color: #8B0000; border-radius: 10px; max-width: 600px; margin: auto;text-align: center;">
    <h1>${titles[i]}</h1>
    <p style="font-size: 1.2em;font-weight: 700">Hola amor. Gracias por compartir conmigo otro mes más. Te amo mucho, más que los meses anteriores y menos que los meses que siguen. Gracias por tu tiempo y tu amor. No puedo ser más feliz.</p>

    <h2>Te dejo un dato interesante jaja 😘</h2>
    <p style="font-size: 1.2em;font-weight: 700">${datos[i]}</p>

    <h2>Sí, obviamente sos la excepción a todo porque...</h2>
    <p style="font-size: 1.2em;font-weight: 700; color: #8B0000;">${exception[i]}</p>
    
    <p style="font-size: 1.2em;font-weight: 700">${texts[i]}</p>
    <h2>Te dejo algo de música para vos. Te la dedico ❤</h2>
    <a href="${songs[i].urlSong}" target="_blank">
      <img src="${songs[i].urlDisplay}" alt="Ver video"
        style="width:100%; max-width:400px; border: 4px solid #8B0000; border-radius: 8px;">
    </a>
    <p style="font-size: 1.2em;font-weight: 700">Con amor, tu novio Lautaro.</p>
  </div>
  `
  );
}
const fecha = new Date();

module.exports = async (req, res) => {
  const mes = fecha.getMonth() + 1;
  const año = fecha.getFullYear();

  if (fecha.getDate() === 26) {
    if (año === 2025 && mes >= 4 && mes <= 12) {
      await sendEmail(mes, mailsBodies[mes - 4]);
      return res.status(200).send("Correo enviado para el mes " + mes);
    } else if (año === 2026 && mes === 1) {
      await sendEmail(mes, mailsBodies[9]);
      return res.status(200).send("Correo enviado para enero 2026");
    }
  }

  res.status(200).send("Hoy no se envía ningún correo.");
};