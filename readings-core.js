(() => {
'use strict';

const activities=window.EnglishActivities;
if(!activities)return;

const escapeHtml=value=>String(value??'').replace(/[&<>"']/g,char=>({
  '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
}[char]));

const themeNames={startups:'Startups',history:'Historia',philosophy:'Filosofía'};

function chapterHtml(chapter){
  const sections=chapter.sections.map(section=>`<h3 class="source-heading">${escapeHtml(section.title)}</h3>${section.paragraphs.map(paragraph=>`<p class="source-paragraph">${escapeHtml(paragraph)}</p>`).join('')}`).join('');
  const learnings=chapter.learnings.map(item=>`<li><strong>${escapeHtml(item.label)}:</strong> ${escapeHtml(item.text)}</li>`).join('');
  const questions=chapter.questions.map(item=>`<li>${escapeHtml(item)}</li>`).join('');
  const terms=chapter.terms.map(([term,meaning])=>`<tr><td lang="en"><strong>${escapeHtml(term)}</strong></td><td>${escapeHtml(meaning)}</td></tr>`).join('');
  return `<article class="source-page thematic-reader"><p class="source-kicker">${escapeHtml(themeNames[chapter.theme])} · ${escapeHtml(chapter.code)}</p><p class="source-paragraph">Objetivo: ${escapeHtml(chapter.objective)}</p>${sections}<h3 class="source-heading">Aprendizajes clave</h3><ul class="thematic-list">${learnings}</ul><h3 class="source-heading">Preguntas para pensar</h3><ol class="thematic-list">${questions}</ol><h3 class="source-heading">Conceptos en inglés</h3><div class="table-wrap"><table class="source-table"><thead><tr><th scope="col">English</th><th scope="col">Idea</th></tr></thead><tbody>${terms}</tbody></table></div></article>`;
}

function makeChapter(chapter){
  return {
    id:chapter.id,
    title:`${chapter.code} · ${chapter.title}`,
    page:0,
    endPage:0,
    category:'reading',
    level:chapter.level||'B2',
    allowedLevels:[chapter.level||'B2','C1','C2'],
    depth:1,
    theme:chapter.theme,
    themeOrder:chapter.order,
    summary:chapter.summary,
    thematicChapter:true,
    html:chapterHtml(chapter)
  };
}

const startupChapters=[
  {
    id:'theme-startup-01-lean',theme:'startups',order:1,code:'S01',title:'Lean Startup: aprender antes de escalar',
    summary:'Hipótesis, producto mínimo viable y aprendizaje validado.',
    objective:'convertir una idea empresarial en una secuencia de hipótesis que puedan ponerse a prueba con evidencia real.',
    sections:[
      {title:'Una startup no es una empresa pequeña',paragraphs:[
        'Una startup opera bajo incertidumbre extrema. Todavía no sabe con suficiente precisión quién es su cliente, qué problema merece resolverse, cuánto pagará el mercado ni qué canal permitirá crecer. Por eso su primera tarea no es optimizar una máquina conocida, sino descubrir qué máquina vale la pena construir.',
        'El enfoque Lean Startup propone reemplazar los planes rígidos por ciclos breves de construir, medir y aprender. La velocidad importa, pero solo cuando cada iteración reduce una incertidumbre relevante.'
      ]},
      {title:'El MVP como instrumento de aprendizaje',paragraphs:[
        'Un producto mínimo viable no es simplemente una versión deficiente o incompleta. Es el experimento más pequeño capaz de probar una hipótesis crítica. Puede ser una entrevista estructurada, una página de preventa, un servicio manual o un prototipo funcional.',
        'La pregunta correcta no es cuántas funciones contiene, sino qué decisión permitirá tomar. Si el experimento no cambia una decisión posible, genera actividad pero no aprendizaje validado.'
      ]},
      {title:'Métricas y pivotes',paragraphs:[
        'Las métricas de vanidad celebran cifras acumuladas sin explicar el comportamiento de una cohorte. Las métricas accionables conectan una intervención con un resultado: activación, repetición, retención, recomendación o ingreso.',
        'Cuando la evidencia contradice la hipótesis central, el equipo puede perseverar, ajustar o pivotar. Pivotar no significa abandonar impulsivamente; significa conservar lo aprendido y cambiar una parte fundamental del modelo.'
      ]}
    ],
    learnings:[
      {label:'Hipótesis',text:'formula de manera explícita qué debe ser verdad para que el negocio funcione.'},
      {label:'MVP',text:'diseña el experimento mínimo que produzca información útil.'},
      {label:'Métrica',text:'mide comportamientos y cohortes, no solo acumulados atractivos.'},
      {label:'Pivote',text:'cambia con criterio cuando la evidencia invalida el supuesto central.'}
    ],
    questions:['¿Cuál es la hipótesis más riesgosa de tu idea?','¿Qué experimento podrías ejecutar en siete días?','¿Qué resultado te haría cambiar de dirección?'],
    terms:[['validated learning','aprendizaje demostrado mediante evidencia'],['minimum viable product','producto mínimo viable'],['pivot','cambio estructurado de hipótesis'],['cohort','grupo comparable de usuarios']]
  },
  {
    id:'theme-startup-02-zero-one',theme:'startups',order:2,code:'S02',title:'De cero a uno: crear algo diferente',
    summary:'Diferenciación, secretos del mercado y ventajas difíciles de copiar.',
    objective:'distinguir entre copiar una solución conocida y crear una propuesta que abra una categoría o una ventaja nueva.',
    sections:[
      {title:'Progreso horizontal y progreso vertical',paragraphs:[
        'Repetir una fórmula que ya funciona lleva de uno a muchos: expande una solución conocida. Crear una capacidad que antes no existía lleva de cero a uno. Ambos movimientos pueden ser valiosos, pero exigen preguntas estratégicas diferentes.',
        'La innovación no siempre es una invención científica. También puede consistir en una nueva combinación de tecnología, distribución, modelo de negocio y experiencia que transforme el costo o la accesibilidad de una solución.'
      ]},
      {title:'La pregunta del secreto',paragraphs:[
        'Una oportunidad interesante suele apoyarse en una verdad importante que todavía no es ampliamente aceptada. El secreto no debe ser una ocurrencia extravagante: necesita una explicación verificable de por qué el mercado subestima un cambio, un grupo de usuarios o una capacidad técnica.',
        'La disciplina consiste en expresar esa convicción con precisión y buscar evidencia que también pueda refutarla.'
      ]},
      {title:'Diferenciación y poder de mercado',paragraphs:[
        'Competir únicamente por precio deja poco espacio para aprender, invertir y mejorar. Una startup busca una ventaja distintiva: tecnología propia, marca, datos, economías de escala, efectos de red o una distribución excepcional.',
        'La diferenciación saludable no consiste en encerrar al cliente, sino en ofrecer un valor tan claro que la comparación directa resulte insuficiente.'
      ]}
    ],
    learnings:[
      {label:'Categoría',text:'define con claridad el espacio mental en el que quieres ser elegido.'},
      {label:'Secreto',text:'formula una convicción contraria que pueda investigarse.'},
      {label:'Ventaja',text:'construye algo que mejore con el tiempo y resulte difícil de replicar.'},
      {label:'Distribución',text:'incluye desde el inicio cómo llegará el producto a sus usuarios.'}
    ],
    questions:['¿Qué verdad relevante crees que el mercado aún subestima?','¿Tu producto es diez veces mejor en alguna dimensión concreta?','¿Qué parte de tu ventaja se fortalece con cada cliente?'],
    terms:[['zero to one','creación de una capacidad nueva'],['competitive advantage','ventaja competitiva'],['network effect','valor que crece con la red'],['distribution','sistema para llegar al mercado']]
  },
  {
    id:'theme-startup-03-blitzscaling',theme:'startups',order:3,code:'S03',title:'Blitzscaling: velocidad bajo incertidumbre',
    summary:'Cuándo priorizar velocidad, qué riesgos aceptar y cómo cambia la organización.',
    objective:'evaluar cuándo el crecimiento acelerado puede crear una ventaja y cuándo solo amplifica un problema no resuelto.',
    sections:[
      {title:'Velocidad frente a eficiencia',paragraphs:[
        'Blitzscaling describe una estrategia excepcional: priorizar velocidad sobre eficiencia cuando el mercado premia de forma desproporcionada al líder y existe una ventana temporal limitada. No es una receta universal ni una excusa para administrar mal.',
        'El costo de crecer antes de tiempo es alto. Si no existe retención, margen potencial o una ventaja que aumente con escala, la velocidad multiplica pérdidas, deuda técnica y confusión.'
      ]},
      {title:'Las condiciones para acelerar',paragraphs:[
        'El escalamiento rápido resulta más defendible cuando hay un mercado grande, una distribución replicable, abundancia de capital o flujo de caja, efectos de red y una organización capaz de aprender mientras incorpora personas.',
        'También debe existir un competidor real o una dinámica que haga costoso esperar. Sin urgencia estratégica, un crecimiento más disciplinado suele preservar opciones.'
      ]},
      {title:'La empresa cambia de forma',paragraphs:[
        'Lo que funciona con diez personas falla con cien. Los fundadores deben reemplazar comunicación implícita por procesos, responsables, indicadores y capas de coordinación. Cada etapa exige abandonar prácticas que antes parecían virtudes.',
        'Escalar no significa burocratizar todo. Significa decidir qué debe estandarizarse y dónde todavía conviene experimentar.'
      ]}
    ],
    learnings:[
      {label:'Ventana',text:'acelera solo si esperar destruye una oportunidad concreta.'},
      {label:'Retención',text:'no escales una adquisición que conduce a abandono.'},
      {label:'Organización',text:'rediseña comunicación y responsabilidad en cada etapa.'},
      {label:'Freno',text:'define por adelantado las señales que obligarán a desacelerar.'}
    ],
    questions:['¿Qué ventaja obtienes por llegar primero a escala?','¿Qué problema actual empeoraría diez veces al crecer?','¿Qué indicador funcionará como freno de emergencia?'],
    terms:[['blitzscaling','escalamiento extremadamente rápido'],['first-scaler advantage','ventaja del primero en alcanzar escala'],['organizational debt','problemas acumulados de coordinación'],['runway','tiempo financiero disponible']]
  },
  {
    id:'theme-startup-04-growth',theme:'startups',order:4,code:'S04',title:'Growth hacking: experimentos y bucles',
    summary:'Embudo, retención, experimentación y crecimiento compuesto.',
    objective:'diseñar un sistema de crecimiento que conecte adquisición, valor para el usuario, retención y recomendación.',
    sections:[
      {title:'Growth no es una colección de trucos',paragraphs:[
        'El growth hacking serio combina producto, datos, marketing y experimentación. Su objetivo no es producir picos de tráfico, sino descubrir mecanismos repetibles que conecten el valor del producto con más usuarios adecuados.',
        'Un experimento de crecimiento parte de una hipótesis, una audiencia, un cambio controlado y una métrica principal. Sin esos elementos, el equipo confunde movimiento con progreso.'
      ]},
      {title:'Del embudo al bucle',paragraphs:[
        'El embudo AARRR permite observar adquisición, activación, retención, recomendación e ingresos. Sin embargo, los mejores sistemas incorporan bucles: una acción de un usuario facilita la llegada o el éxito del siguiente.',
        'Los bucles pueden ser virales, de contenido, de colaboración, de inventario o de reputación. Su calidad depende de cuánto valor crean antes de pedir una invitación o una difusión.'
      ]},
      {title:'Ética del crecimiento',paragraphs:[
        'Optimizar una métrica sin límites puede producir patrones oscuros, adicción, spam o pérdida de confianza. El crecimiento sostenible incorpora restricciones éticas y mide efectos adversos.',
        'Una táctica que obliga, confunde o explota al usuario quizá mejore una conversión de corto plazo, pero deteriora la marca y el producto.'
      ]}
    ],
    learnings:[
      {label:'Activación',text:'define el momento en que el usuario experimenta valor por primera vez.'},
      {label:'Retención',text:'mide si el producto merece volver a usarse.'},
      {label:'Bucle',text:'convierte el uso en una entrada para nuevo crecimiento.'},
      {label:'Ética',text:'protege autonomía, privacidad y confianza.'}
    ],
    questions:['¿Cuál es el momento de valor de tu producto?','¿Qué comportamiento predice mejor la retención?','¿Tu mecanismo de recomendación crea valor antes de pedir difusión?'],
    terms:[['activation','primer momento real de valor'],['retention','continuidad de uso'],['growth loop','ciclo que se alimenta a sí mismo'],['dark pattern','diseño que manipula decisiones']]
  },
  {
    id:'theme-startup-05-hard-things',theme:'startups',order:5,code:'S05',title:'The Hard Thing: dirigir cuando no hay respuesta',
    summary:'Decisiones difíciles, crisis, despidos y responsabilidad del liderazgo.',
    objective:'comprender el trabajo del liderazgo cuando los datos son incompletos y todas las opciones tienen costos importantes.',
    sections:[
      {title:'Las decisiones sin fórmula',paragraphs:[
        'Los manuales explican situaciones que ya fueron ordenadas. En una crisis real, el CEO decide con información incompleta, tiempo limitado y consecuencias humanas. La dificultad no reside solo en elegir, sino en sostener la responsabilidad después de elegir.',
        'Una buena decisión puede producir un mal resultado y una mala decisión puede recibir suerte. Por eso conviene evaluar la calidad del proceso, los supuestos y la honestidad con la que se comunicó el riesgo.'
      ]},
      {title:'Comunicar malas noticias',paragraphs:[
        'Ocultar una crisis para proteger la moral suele empeorarla. Los equipos necesitan entender qué ocurrió, qué se sabe, qué no se sabe y qué cambiará. La transparencia no exige revelar cada detalle confidencial; exige no manipular la realidad.',
        'En un despido, la organización debe explicar la decisión con claridad, asumir responsabilidad y tratar a las personas afectadas con respeto, tiempo y apoyo concreto.'
      ]},
      {title:'CEO de paz y CEO de guerra',paragraphs:[
        'Una organización estable puede optimizar, delegar y explorar. Una organización amenazada necesita prioridades más estrechas, ciclos rápidos y decisiones centralizadas temporalmente. El error consiste en mantener para siempre el modo de guerra.',
        'El liderazgo maduro adapta su sistema a la situación sin convertir la urgencia en una cultura permanente de miedo.'
      ]}
    ],
    learnings:[
      {label:'Realidad',text:'nombra el problema antes de diseñar la narrativa.'},
      {label:'Responsabilidad',text:'no transfieras a otros el costo moral de una decisión propia.'},
      {label:'Comunicación',text:'explica hechos, incertidumbres y próximos pasos.'},
      {label:'Recuperación',text:'sal del modo de crisis cuando deja de ser necesario.'}
    ],
    questions:['¿Qué verdad difícil está evitando tu equipo?','¿Cómo separarías una buena decisión de un resultado afortunado?','¿Qué debe escuchar primero una persona afectada por una decisión dura?'],
    terms:[['wartime CEO','liderazgo concentrado durante una amenaza'],['layoff','reducción de personal'],['decision quality','calidad del proceso de decisión'],['radical candor','franqueza acompañada de respeto']]
  },
  {
    id:'theme-startup-06-marketing',theme:'startups',order:6,code:'S06',title:'This Is Marketing: servir a una audiencia',
    summary:'Audiencia mínima viable, posicionamiento, confianza y cambio.',
    objective:'entender el marketing como el diseño de un cambio valioso para un grupo específico, no como presión indiscriminada.',
    sections:[
      {title:'¿A quién quieres servir?',paragraphs:[
        'Un producto para todo el mundo suele hablar con poca precisión. La audiencia mínima viable obliga a elegir un grupo suficientemente pequeño para comprenderlo y suficientemente conectado para que el valor se difunda.',
        'Elegir no significa despreciar a quienes quedan fuera. Significa asumir que toda promesa relevante está hecha desde una perspectiva y para una situación concreta.'
      ]},
      {title:'Posicionamiento como contraste',paragraphs:[
        'El posicionamiento responde para quién es, qué problema resuelve y frente a qué alternativa debe compararse. La marca ocupa un lugar cuando repite de forma coherente una promesa y la demuestra con experiencia.',
        'El mensaje más ruidoso no siempre es el más recordado. La claridad, la consistencia y el lenguaje del usuario suelen crear una asociación más fuerte.'
      ]},
      {title:'Permiso y confianza',paragraphs:[
        'El marketing sostenible obtiene permiso para continuar la conversación. Cada interacción debe justificar la siguiente. La confianza crece cuando la empresa cumple su promesa, admite límites y evita urgencias artificiales.',
        'La atención puede comprarse por un momento; la reputación solo se acumula mediante conducta repetida.'
      ]}
    ],
    learnings:[
      {label:'Audiencia',text:'elige a quién servir antes de diseñar el mensaje.'},
      {label:'Cambio',text:'define qué será distinto para esa persona.'},
      {label:'Posicionamiento',text:'crea un contraste claro frente a la alternativa.'},
      {label:'Confianza',text:'haz que cada contacto confirme la promesa.'}
    ],
    questions:['¿Quién es tu audiencia mínima viable?','¿Qué cambio concreto prometes?','¿Qué conducta de tu empresa demuestra esa promesa?'],
    terms:[['smallest viable audience','audiencia mínima viable'],['positioning','lugar distintivo en la mente'],['permission marketing','comunicación basada en consentimiento'],['brand promise','expectativa estable que crea una marca']]
  },
  {
    id:'theme-startup-07-pmf',theme:'startups',order:7,code:'S07',title:'Product-market fit: señales y conversaciones',
    summary:'Entrevistas, retención, disposición a pagar y señales de ajuste.',
    objective:'reconocer señales confiables de que un producto resuelve un problema importante para un mercado concreto.',
    sections:[
      {title:'Hablar del pasado, no de opiniones futuras',paragraphs:[
        'Los usuarios suelen querer ayudar y pueden afirmar que comprarían una idea atractiva. Las entrevistas útiles investigan conductas recientes: cuándo apareció el problema, qué intentaron, cuánto costó y por qué la solución actual resulta insuficiente.',
        'La evidencia más fuerte combina relato, compromiso y comportamiento: tiempo invertido, datos compartidos, una prueba aceptada o una compra.'
      ]},
      {title:'Retención y dolor de ausencia',paragraphs:[
        'El ajuste producto-mercado aparece cuando un grupo vuelve porque el producto se ha integrado en una tarea importante. La curva de retención, la frecuencia de uso y la expansión dentro de una cuenta ofrecen señales más robustas que el registro inicial.',
        'También conviene preguntar qué haría el usuario si el producto desapareciera. La decepción intensa de un segmento específico puede revelar un núcleo de valor.'
      ]},
      {title:'El precio también enseña',paragraphs:[
        'Cobrar obliga a comparar valor, urgencia y alternativas. Un precio demasiado bajo puede ocultar que el problema no es prioritario; uno mal estructurado puede impedir adopción aunque el producto sea valioso.',
        'El objetivo inicial no es maximizar ingreso, sino descubrir quién percibe suficiente valor, por qué y bajo qué unidad de compra.'
      ]}
    ],
    learnings:[
      {label:'Entrevista',text:'pregunta por hechos recientes y alternativas reales.'},
      {label:'Retención',text:'observa quién vuelve, cuándo y para qué tarea.'},
      {label:'Segmento',text:'busca intensidad en un grupo antes que aceptación débil en muchos.'},
      {label:'Precio',text:'úsalo como instrumento de aprendizaje sobre valor.'}
    ],
    questions:['¿Qué comportamiento demuestra que el problema es urgente?','¿En qué cohorte se estabiliza la retención?','¿Qué alternativa paga hoy el cliente, directa o indirectamente?'],
    terms:[['product-market fit','ajuste entre producto y mercado'],['willingness to pay','disposición a pagar'],['retention curve','curva de permanencia por cohorte'],['customer interview','conversación estructurada con usuarios']]
  },
  {
    id:'theme-startup-08-moats',theme:'startups',order:8,code:'S08',title:'Flywheels, plataformas y defensibilidad',
    summary:'Bucles de refuerzo, efectos de red, economías de escala y ventajas acumulativas.',
    objective:'diseñar un sistema donde cada cliente o transacción pueda mejorar el producto y fortalecer la ventaja competitiva.',
    sections:[
      {title:'Del embudo al volante',paragraphs:[
        'Un flywheel conecta actividades que se refuerzan: mejor experiencia atrae más demanda; más demanda mejora la economía; mejores costos permiten invertir de nuevo en experiencia. La potencia no proviene de una flecha aislada, sino de la coherencia del circuito.',
        'El modelo debe especificar mecanismos medibles. Dibujar un círculo con palabras positivas no demuestra causalidad.'
      ]},
      {title:'Efectos de red y plataformas',paragraphs:[
        'En un efecto de red, el valor para un usuario cambia cuando aumenta la participación de otros. Puede ser directo, como una red de comunicación, o indirecto, como un mercado con compradores y vendedores.',
        'Las plataformas deben resolver el problema inicial de liquidez y equilibrar calidad, confianza y gobernanza. Crecer ambos lados sin transacciones satisfactorias solo aumenta ruido.'
      ]},
      {title:'Ventajas que se acumulan',paragraphs:[
        'Los datos, la marca, los costos de cambio y las economías de escala pueden crear defensibilidad, pero ninguna es automática. Los datos solo ayudan si mejoran una decisión; la marca solo protege si representa una experiencia consistente.',
        'La mejor ventaja suele ser un sistema de varias piezas que los competidores no pueden copiar de forma independiente.'
      ]}
    ],
    learnings:[
      {label:'Flywheel',text:'identifica el bucle causal que reinvierte valor.'},
      {label:'Liquidez',text:'mide la probabilidad de que una plataforma complete una interacción útil.'},
      {label:'Defensibilidad',text:'construye ventajas que se profundizan con el uso.'},
      {label:'Sistema',text:'combina producto, datos, distribución y confianza.'}
    ],
    questions:['¿Qué entrada hace girar tu flywheel?','¿Tu red mejora para cada usuario cuando crece?','¿Qué parte de tu sistema sería más difícil de copiar en tres años?'],
    terms:[['flywheel','bucle de actividades que se refuerzan'],['marketplace liquidity','probabilidad de lograr una coincidencia útil'],['switching cost','costo de cambiar de solución'],['defensibility','capacidad de sostener una ventaja']]
  }
];

const philosophyChapters=[
  {
    id:'theme-philosophy-01-map',theme:'philosophy',order:1,code:'F01',title:'Filosofar: preguntas, problemas y disciplinas',
    summary:'Qué hace filosófica a una pregunta y cómo se organiza el campo.',
    objective:'reconocer la filosofía como una práctica argumentativa que problematiza conceptos, supuestos y formas de vida.',
    sections:[
      {title:'La filosofía comienza cuando lo obvio deja de serlo',paragraphs:[
        'Filosofar no consiste en acumular frases célebres. Consiste en detener una certeza, identificar sus supuestos y preguntar qué razones la sostienen. Una pregunta se vuelve filosófica cuando no puede resolverse únicamente con un dato y exige examinar conceptos como verdad, justicia, libertad o identidad.',
        'La filosofía trabaja con argumentos. Una intuición puede iniciar el recorrido, pero debe formularse de manera que otros puedan comprenderla, discutirla y señalar sus consecuencias.'
      ]},
      {title:'Las principales disciplinas',paragraphs:[
        'La metafísica pregunta qué existe y qué significa ser. La epistemología estudia el conocimiento y sus límites. La ética examina cómo vivir y actuar. La filosofía política analiza poder, autoridad y justicia. La estética interroga la experiencia del arte y la belleza.',
        'La lógica estudia la validez de los razonamientos. También existen filosofía de la ciencia, del lenguaje, de la historia, de la mente, de la tecnología y muchas otras áreas. Las fronteras son útiles, pero los grandes problemas suelen atravesarlas.'
      ]},
      {title:'Historia y situación',paragraphs:[
        'Toda filosofía surge en una situación histórica. Las preguntas de una polis antigua, una sociedad industrial o una cultura digital no son idénticas. Sin embargo, los textos pueden volver a interpelarnos cuando reconstruimos su problema en lugar de repetir su conclusión.',
        'Pensar aquí y ahora significa leer la tradición desde nuestros conflictos sin fingir que los autores dijeron exactamente lo que nosotros queremos decir.'
      ]}
    ],
    learnings:[
      {label:'Problema',text:'distingue una pregunta conceptual de una consulta meramente factual.'},
      {label:'Argumento',text:'explicita premisas, inferencias y conclusión.'},
      {label:'Disciplina',text:'ubica la pregunta sin encerrarla en una sola categoría.'},
      {label:'Situación',text:'relaciona ideas con su contexto histórico y con el presente.'}
    ],
    questions:['¿Qué certeza cotidiana merecería convertirse en problema?','¿Puede una pregunta ser importante aunque no tenga respuesta final?','¿Qué cambia cuando una idea se lee fuera de su contexto?'],
    terms:[['metaphysics','estudio del ser y la realidad'],['epistemology','estudio del conocimiento'],['ethics','reflexión sobre la vida y la acción'],['argument','conjunto de razones para una conclusión']]
  },
  {
    id:'theme-philosophy-02-dialogues',theme:'philosophy',order:2,code:'F02',title:'Sócrates y los diálogos platónicos',
    summary:'Ironía, mayéutica, aporía y filosofía como conversación.',
    objective:'leer el diálogo platónico como una forma de pensamiento que examina definiciones y transforma al interlocutor.',
    sections:[
      {title:'Sócrates como problema',paragraphs:[
        'Sócrates no dejó obras escritas. Lo conocemos por testimonios diferentes, especialmente los diálogos de Platón. Por eso el Sócrates histórico y el personaje filosófico no pueden identificarse sin cautela.',
        'El personaje pregunta a quienes creen saber. Su ironía no es simple burla: crea una distancia entre la seguridad inicial y la dificultad real del concepto.'
      ]},
      {title:'Mayéutica y aporía',paragraphs:[
        'La conversación socrática solicita una definición, prueba sus consecuencias y descubre contradicciones. La mayéutica compara el diálogo con ayudar a dar a luz una comprensión que el interlocutor debe asumir como propia.',
        'Muchos diálogos terminan en aporía: un callejón sin salida. Ese final no es un fracaso literario. Muestra que reconocer la ignorancia puede ser un progreso más honesto que conservar una definición falsa.'
      ]},
      {title:'El diálogo como forma filosófica',paragraphs:[
        'Platón no presenta tratados impersonales. Sitúa voces, escenas, conflictos y silencios. El lector debe evaluar quién habla, cómo responde y qué queda sin resolver.',
        'Dialogar filosóficamente exige interpretar la posición del otro con precisión antes de refutarla. La conversación se convierte así en una disciplina ética de la atención.'
      ]}
    ],
    learnings:[
      {label:'Ironía',text:'suspende una certeza para permitir el examen.'},
      {label:'Mayéutica',text:'conduce mediante preguntas, no mediante imposición.'},
      {label:'Aporía',text:'reconoce un límite productivo del razonamiento.'},
      {label:'Diálogo',text:'convierte la filosofía en una práctica entre voces.'}
    ],
    questions:['¿Qué diferencia hay entre preguntar para comprender y preguntar para vencer?','¿Puede una conversación sin respuesta ser exitosa?','¿Qué definición cotidiana resistiría un examen socrático?'],
    terms:[['elenchus','examen o refutación socrática'],['aporia','estado de dificultad sin salida evidente'],['maieutics','arte de ayudar a formular una comprensión'],['dialogue','pensamiento desarrollado entre interlocutores']]
  },
  {
    id:'theme-philosophy-03-plato-soul',theme:'philosophy',order:3,code:'F03',title:'Platón: el alma, el conocimiento y la ciudad',
    summary:'El alma en Fedón, Fedro y República; educación, deseo y justicia.',
    objective:'comparar las imágenes platónicas del alma y relacionarlas con conocimiento, virtud y organización política.',
    sections:[
      {title:'El alma no aparece de una sola manera',paragraphs:[
        'En el Fedón, la discusión sobre la muerte conduce a argumentos sobre la inmortalidad del alma y su relación con las Formas. El filósofo busca separar el examen racional de las distracciones del cuerpo, aunque el diálogo conserva tensiones y objeciones.',
        'En el Fedro, el alma aparece mediante la imagen de un carro alado: auriga y caballos expresan fuerzas diferentes. La metáfora muestra que gobernarse no consiste en eliminar todo deseo, sino en ordenar energías en conflicto.'
      ]},
      {title:'El alma tripartita de la República',paragraphs:[
        'La República distingue una parte racional, una parte irascible vinculada al ánimo y una parte apetitiva. La justicia personal surge cuando cada dimensión cumple su función bajo una orientación racional.',
        'Platón establece una analogía entre alma y ciudad. La pregunta política no se separa de la educación: una comunidad será distinta según los deseos, hábitos y relatos con los que forme a sus ciudadanos.'
      ]},
      {title:'Conocimiento y conversión',paragraphs:[
        'La alegoría de la caverna describe el aprendizaje como un giro de la mirada, no como el depósito de información en una mente vacía. Salir de la caverna es doloroso porque obliga a abandonar una realidad familiar.',
        'La filosofía platónica une epistemología, ética y política. Conocer lo verdadero transforma qué se desea y cómo se vive con otros.'
      ]}
    ],
    learnings:[
      {label:'Pluralidad',text:'distingue los contextos y metáforas platónicas del alma.'},
      {label:'Orden',text:'entiende la virtud como relación entre fuerzas internas.'},
      {label:'Educación',text:'piensa el aprendizaje como conversión de la mirada.'},
      {label:'Política',text:'conecta la formación del carácter con la forma de la ciudad.'}
    ],
    questions:['¿Es posible gobernar los deseos sin empobrecer la vida?','¿Qué cavernas contemporáneas organizan nuestra percepción?','¿La analogía entre alma y ciudad ilumina o simplifica la política?'],
    terms:[['soul','alma o principio vital y racional'],['Forms','realidades inteligibles en Platón'],['tripartite soul','alma compuesta por tres dimensiones'],['allegory of the cave','imagen de educación y liberación']]
  },
  {
    id:'theme-philosophy-04-aristotle',theme:'philosophy',order:4,code:'F04',title:'Aristóteles: causas, virtud y vida común',
    summary:'Sustancia, cuatro causas, hábito, término medio y animal político.',
    objective:'comprender cómo Aristóteles estudia los seres concretos y vincula carácter, felicidad y comunidad política.',
    sections:[
      {title:'Conocer es explicar por causas',paragraphs:[
        'Aristóteles investiga los seres del mundo sensible. Explicar algo exige atender a su materia, su forma, aquello que produce el cambio y el fin hacia el que se organiza. Las cuatro causas no son cuatro eventos separados, sino cuatro dimensiones de una explicación.',
        'La sustancia combina materia y forma. Este enfoque permite pensar cambio y permanencia sin abandonar el mundo concreto.'
      ]},
      {title:'Virtud como hábito',paragraphs:[
        'La ética aristotélica pregunta por la eudaimonía: una vida lograda o floreciente. La virtud no se reduce a conocer una regla; se forma mediante hábitos, decisiones y práctica sostenida.',
        'El término medio no es mediocridad ni promedio matemático. Es la respuesta adecuada a la situación, determinada por razón práctica. El coraje, por ejemplo, evita tanto la cobardía como la temeridad.'
      ]},
      {title:'El animal político',paragraphs:[
        'La vida buena requiere comunidad, lenguaje, instituciones y amistad. Por eso Aristóteles llama al ser humano animal político. La polis no es solo un mecanismo de seguridad: crea condiciones para desarrollar capacidades humanas.',
        'Esta visión también refleja límites históricos de la polis griega, que excluía a mujeres, esclavos y extranjeros de la ciudadanía plena. Leer críticamente exige conservar la pregunta y discutir sus exclusiones.'
      ]}
    ],
    learnings:[
      {label:'Causa',text:'explica materia, forma, origen del cambio y finalidad.'},
      {label:'Hábito',text:'entiende la virtud como práctica incorporada.'},
      {label:'Prudencia',text:'juzga la respuesta adecuada en una situación concreta.'},
      {label:'Comunidad',text:'relaciona florecimiento personal e instituciones.'}
    ],
    questions:['¿Toda explicación necesita hablar de fines?','¿Qué hábito forma una virtud que valoras?','¿Puede existir una vida buena en una comunidad injusta?'],
    terms:[['four causes','cuatro dimensiones de la explicación'],['virtue','excelencia estable del carácter'],['practical wisdom','sabiduría para decidir en situaciones concretas'],['eudaimonia','vida lograda o florecimiento']]
  },
  {
    id:'theme-philosophy-05-stoicism',theme:'philosophy',order:5,code:'F05',title:'Estoicismo y Meditaciones de Marco Aurelio',
    summary:'Control, juicio, deber, mortalidad y escritura como ejercicio.',
    objective:'leer las Meditaciones como una práctica de examen personal dentro de la ética estoica, no como una colección de consignas.',
    sections:[
      {title:'Lo que depende de nosotros',paragraphs:[
        'El estoicismo distingue entre nuestras acciones y juicios, que pueden orientarse, y los resultados externos, que nunca controlamos por completo. La distinción no promueve pasividad: concentra la responsabilidad en la calidad de la respuesta.',
        'Las emociones no son tratadas como fallas mecánicas. Los estoicos examinan los juicios que participan en ellas y buscan responder sin quedar gobernados por una primera impresión.'
      ]},
      {title:'Meditaciones como cuaderno de trabajo',paragraphs:[
        'Marco Aurelio escribió para sí mismo. Sus notas repiten ideas porque funcionan como ejercicios: recordar la mortalidad, reducir el ego, cumplir el deber y mirar los conflictos desde una escala más amplia.',
        'Leer el texto como autoayuda moderna borra su contexto imperial y sus compromisos estoicos. También conviene preguntar por la distancia entre los ideales del emperador y las estructuras de poder que dirigía.'
      ]},
      {title:'Aceptar no es resignarse',paragraphs:[
        'Aceptar que un hecho ocurrió evita gastar energía negándolo. Después comienza la pregunta práctica: qué acción justa es posible ahora. El estoicismo une serenidad y deber social.',
        'La disciplina estoica puede volverse evasión si se usa para tolerar cualquier injusticia. Su mejor lectura exige distinguir la aceptación de un hecho de la aprobación moral de ese hecho.'
      ]}
    ],
    learnings:[
      {label:'Control',text:'separa acción propia, influencia parcial y resultado externo.'},
      {label:'Juicio',text:'examina la interpretación antes de reaccionar.'},
      {label:'Ejercicio',text:'usa escritura y repetición para formar atención.'},
      {label:'Deber',text:'conecta serenidad personal y responsabilidad común.'}
    ],
    questions:['¿Qué parte de un problema depende realmente de ti?','¿Cuándo la aceptación se convierte en resignación?','¿Qué recordatorio repetirías en un diario filosófico?'],
    terms:[['dichotomy of control','distinción entre acción propia y resultado'],['impression','primera representación de un acontecimiento'],['assent','aceptación de un juicio'],['memento mori','recordatorio de la mortalidad']]
  },
  {
    id:'theme-philosophy-06-medieval',theme:'philosophy',order:6,code:'F06',title:'Filosofía medieval: fe, razón y universales',
    summary:'Agustín, Tomás de Aquino y el problema entre revelación y argumentación.',
    objective:'examinar la filosofía medieval como un periodo plural que reorganizó la herencia antigua ante nuevas tradiciones religiosas.',
    sections:[
      {title:'Un periodo de traducciones y disputas',paragraphs:[
        'La filosofía medieval no fue una pausa oscura. Pensadores cristianos, judíos y musulmanes tradujeron, conservaron y discutieron obras antiguas. Centros como Bagdad, Córdoba y París formaron redes intelectuales decisivas.',
        'La relación entre fe y razón adoptó formas diversas: iluminación, demostración, interpretación alegórica, límites del lenguaje y separación de ámbitos.'
      ]},
      {title:'Agustín y la interioridad',paragraphs:[
        'Agustín explora memoria, voluntad, tiempo y mal. Su giro hacia la interioridad no es aislamiento psicológico; busca comprender cómo el sujeto se relaciona consigo mismo, con la verdad y con Dios.',
        'Su análisis del tiempo muestra una dificultad: pasado y futuro no están presentes como cosas, pero la memoria y la expectativa estructuran la experiencia.'
      ]},
      {title:'Tomás y la síntesis aristotélica',paragraphs:[
        'Tomás de Aquino integra categorías aristotélicas en una teología cristiana. Distingue verdades accesibles a la razón y verdades conocidas por revelación, sin considerar que ambas deban contradecirse.',
        'Las discusiones sobre universales preguntan qué estatuto poseen conceptos como humanidad o justicia: si existen independientemente, en las cosas o en la mente y el lenguaje.'
      ]}
    ],
    learnings:[
      {label:'Pluralidad',text:'reconoce tradiciones cristianas, judías y musulmanas.'},
      {label:'Interioridad',text:'relaciona memoria, voluntad y experiencia del tiempo.'},
      {label:'Síntesis',text:'observa cómo una tradición transforma conceptos heredados.'},
      {label:'Universal',text:'distingue realidad, concepto y palabra.'}
    ],
    questions:['¿La fe y la razón responden al mismo tipo de pregunta?','¿Dónde existe un concepto universal?','¿Cómo cambia una idea cuando otra tradición la adopta?'],
    terms:[['faith and reason','relación entre revelación y argumentación'],['universals','conceptos generales y su estatuto'],['scholasticism','método medieval de disputa y sistematización'],['interiority','examen de la experiencia interna']]
  },
  {
    id:'theme-philosophy-07-modern',theme:'philosophy',order:7,code:'F07',title:'Descartes, Hume y Kant: ¿qué podemos conocer?',
    summary:'Duda, experiencia, causalidad y condiciones del conocimiento.',
    objective:'comparar racionalismo, empirismo y filosofía crítica a partir del problema de la certeza.',
    sections:[
      {title:'Descartes y la duda metódica',paragraphs:[
        'Descartes utiliza la duda como método para buscar una certeza que resista el error de los sentidos, el sueño y la hipótesis de un engaño radical. El cogito no es una observación externa: al dudar, el pensamiento confirma su propia actividad.',
        'Desde esa certeza intenta reconstruir conocimiento, mundo y ciencia. El proyecto inaugura una centralidad moderna del sujeto.'
      ]},
      {title:'Hume y los límites de la experiencia',paragraphs:[
        'Hume distingue impresiones e ideas y pregunta de qué experiencia procede cada concepto. Su análisis de la causalidad sostiene que observamos sucesiones regulares, no una conexión necesaria visible.',
        'La expectativa causal nace del hábito. Esto no destruye la vida cotidiana ni la ciencia, pero limita las pretensiones de una razón que quisiera demostrar más de lo que la experiencia permite.'
      ]},
      {title:'El giro crítico de Kant',paragraphs:[
        'Kant pregunta por las condiciones que hacen posible la experiencia. El sujeto no recibe pasivamente un mundo ya ordenado: espacio, tiempo y categorías participan en la forma de conocer.',
        'La filosofía crítica establece límites. Conocemos fenómenos bajo nuestras condiciones de experiencia, no las cosas en sí mismas como si pudiéramos salir de toda perspectiva.'
      ]}
    ],
    learnings:[
      {label:'Duda',text:'úsala como instrumento metodológico, no como pose permanente.'},
      {label:'Experiencia',text:'rastrea el origen y el límite de los conceptos.'},
      {label:'Causalidad',text:'distingue regularidad observada y necesidad supuesta.'},
      {label:'Crítica',text:'investiga las condiciones y fronteras del conocer.'}
    ],
    questions:['¿Puede la duda producir una certeza?','¿Qué justifica esperar que el futuro se parezca al pasado?','¿Conocer implica siempre organizar lo conocido?'],
    terms:[['methodic doubt','duda usada como método'],['cogito','certeza de la actividad de pensar'],['causality','relación entre causa y efecto'],['conditions of possibility','condiciones que hacen posible una experiencia']]
  },
  {
    id:'theme-philosophy-08-history',theme:'philosophy',order:8,code:'F08',title:'Hegel y Marx: historia, dialéctica y conflicto',
    summary:'Negación, reconocimiento, trabajo, ideología y transformación histórica.',
    objective:'comprender la dialéctica como movimiento histórico y comparar el idealismo hegeliano con la crítica materialista de Marx.',
    sections:[
      {title:'La dialéctica no es una fórmula de tres pasos',paragraphs:[
        'La dialéctica hegeliana analiza cómo una forma de conciencia o institución produce tensiones internas que la obligan a transformarse. No se reduce mecánicamente a tesis, antítesis y síntesis.',
        'La negación determinada conserva elementos de aquello que supera. La historia es inteligible porque las formas humanas cambian mediante conflictos que revelan sus límites.'
      ]},
      {title:'Reconocimiento y trabajo',paragraphs:[
        'La conocida relación entre señor y siervo muestra que la identidad depende del reconocimiento de otra conciencia. El dominio fracasa en producir reconocimiento pleno porque convierte al otro en dependiente.',
        'El trabajo transforma el mundo y también a quien trabaja. Esta intuición tendrá una influencia decisiva en Marx.'
      ]},
      {title:'Marx y la crítica materialista',paragraphs:[
        'Marx desplaza la atención hacia relaciones sociales de producción, propiedad, trabajo y clase. Las ideas no flotan fuera de la sociedad; se forman en prácticas e instituciones históricas.',
        'La ideología no es simplemente una mentira consciente. Puede ser una forma de representación que vuelve natural una relación histórica. La crítica busca mostrar su origen y sus contradicciones.'
      ]}
    ],
    learnings:[
      {label:'Dialéctica',text:'analiza contradicciones que impulsan transformaciones.'},
      {label:'Reconocimiento',text:'entiende la identidad como relación con otros.'},
      {label:'Trabajo',text:'observa cómo transforma objeto y sujeto.'},
      {label:'Ideología',text:'desnaturaliza representaciones históricas del poder.'}
    ],
    questions:['¿Toda contradicción produce progreso?','¿Puede existir identidad sin reconocimiento?','¿Qué relación social actual suele presentarse como natural?'],
    terms:[['dialectic','movimiento mediante contradicciones determinadas'],['recognition','constitución recíproca de la identidad'],['alienation','separación respecto del trabajo o de sí'],['ideology','representación que organiza relaciones históricas']]
  },
  {
    id:'theme-philosophy-09-existence',theme:'philosophy',order:9,code:'F09',title:'Nietzsche y el existencialismo',
    summary:'Genealogía, valores, libertad, angustia y responsabilidad.',
    objective:'examinar la crítica de los valores heredados y la experiencia moderna de una libertad sin garantías absolutas.',
    sections:[
      {title:'Nietzsche y la genealogía',paragraphs:[
        'Nietzsche no pregunta solo si un valor es verdadero, sino qué forma de vida lo produce y qué efectos tiene. La genealogía reconstruye luchas, inversiones y necesidades ocultas detrás de conceptos que parecen eternos.',
        'La muerte de Dios nombra una crisis cultural: los valores tradicionales pierden su fundamento vinculante, pero las sociedades continúan usando sus categorías. El desafío es crear valores sin ocultar su origen humano.'
      ]},
      {title:'La existencia precede a la esencia',paragraphs:[
        'En el existencialismo de Sartre, el ser humano no nace con un guion moral cerrado. Se define mediante elecciones situadas. La libertad no significa poder hacerlo todo, sino no poder evitar responder dentro de condiciones que no elegimos.',
        'La angustia aparece al reconocer que ninguna regla puede decidir por completo en nuestro lugar. Elegir también propone una imagen de lo humano.'
      ]},
      {title:'Ambigüedad y relación con otros',paragraphs:[
        'Beauvoir insiste en que la libertad es encarnada, social y desigual. La ética debe atender a condiciones concretas que amplían o reducen la posibilidad de actuar.',
        'La existencia no es un individuo aislado. La mirada del otro, el conflicto, el cuidado y la acción colectiva forman parte del problema de llegar a ser.'
      ]}
    ],
    learnings:[
      {label:'Genealogía',text:'investiga el origen conflictivo de los valores.'},
      {label:'Nihilismo',text:'reconoce la crisis de fundamentos sin celebrarla ingenuamente.'},
      {label:'Libertad',text:'piensa la elección dentro de una situación concreta.'},
      {label:'Responsabilidad',text:'asume consecuencias propias y efectos sobre otros.'}
    ],
    questions:['¿Qué valor actual necesita una genealogía?','¿La falta de un fundamento absoluto libera o angustia?','¿Cómo cambia la libertad cuando las condiciones son desiguales?'],
    terms:[['genealogy','investigación histórica de los valores'],['nihilism','crisis o negación de sentido y valores'],['bad faith','evasión de la propia libertad'],['situated freedom','libertad ejercida bajo condiciones concretas']]
  },
  {
    id:'theme-philosophy-10-latin-america',theme:'philosophy',order:10,code:'F10',title:'Filosofía, poder y América Latina aquí y ahora',
    summary:'Pensar desde la periferia, memoria, dependencia, identidad y democracia.',
    objective:'relacionar tradición filosófica, historia latinoamericana y problemas contemporáneos sin convertir el presente en una simple ilustración.',
    sections:[
      {title:'Pensar desde una situación',paragraphs:[
        'La filosofía latinoamericana pregunta si pensar desde la periferia modifica los problemas universales. Colonialidad, dependencia, mestizaje, pueblos originarios, desigualdad y violencia estatal no son temas secundarios: configuran quién puede hablar y ser reconocido.',
        'Pensar situado no significa rechazar toda tradición europea. Significa apropiarse críticamente de ella, mostrar sus silencios y ponerla en conversación con experiencias locales.'
      ]},
      {title:'Historia, relato y poder',paragraphs:[
        'Las sociedades construyen relatos sobre su origen y su destino. Esos relatos organizan monumentos, escuelas, medios y decisiones públicas. La filosofía de la historia pregunta quién aparece como sujeto, qué violencias se justifican y qué futuros se consideran posibles.',
        'La memoria no es una reproducción neutral del pasado. Es una práctica política y ética que disputa responsabilidades, víctimas y continuidades.'
      ]},
      {title:'Filosofía aquí y ahora',paragraphs:[
        'Un enfoque temático y público de la filosofía puede partir de una escena contemporánea y reconstruir los conceptos que la atraviesan: libertad, soberanía, técnica, democracia, identidad o justicia. El objetivo no es imitar la voz de un autor, sino recuperar la energía crítica de relacionar ideas e historia.',
        'La pregunta final no es qué pensador tiene la última palabra, sino qué herramientas ofrece cada tradición para comprender y transformar una situación compartida.'
      ]}
    ],
    learnings:[
      {label:'Situación',text:'reconoce desde dónde y para quién se formula un problema.'},
      {label:'Dependencia',text:'analiza relaciones económicas, culturales y políticas asimétricas.'},
      {label:'Memoria',text:'discute responsabilidades y sentidos del pasado.'},
      {label:'Crítica',text:'usa conceptos para abrir alternativas en el presente.'}
    ],
    questions:['¿Qué cambia cuando un problema universal se piensa desde América Latina?','¿Quién queda fuera del relato nacional?','¿Qué concepto filosófico ayuda a leer una crisis actual?'],
    terms:[['situated thought','pensamiento consciente de su lugar histórico'],['coloniality','persistencia de jerarquías coloniales'],['collective memory','construcción pública del pasado'],['philosophy of liberation','tradición crítica latinoamericana']]
  }
];

const added=[...startupChapters,...philosophyChapters].map(makeChapter);
activities.entries.push(...added);

const startupCases=new Map([
  ['extra-m-founder-users',20],['extra-s-marketing-one-idea',21],['extra-s-netflix-dvd',22],
  ['extra-s-product-obvious',23],['extra-s-duolingo-habit',24],['extra-m-positioning',25],
  ['extra-m-airbnb-marketplace',26],['extra-m-spotify-convenience',27],['extra-m-canva-design',28],
  ['extra-l-platform-ecosystem',29],['extra-l-amazon-flywheel',30],['extra-l-nvidia-ai',31],
  ['extra-l-mercadolibre',32]
]);
const philosophyCases=new Map([
  ['extra-s-stoic-control',20],['extra-m-socrates-questions',21],['extra-l-existentialism',22]
]);

activities.entries.forEach(entry=>{
  if(entry.id.startsWith('extra-history-')){
    entry.theme='history';
    entry.themeOrder=Number(entry.id.match(/-s(\d+)/)?.[1]||99);
    entry.summary=entry.summary||'Capítulo cronológico de historia universal y del Perú.';
  }else if(startupCases.has(entry.id)){
    entry.theme='startups';
    entry.themeOrder=startupCases.get(entry.id);
    entry.summary=entry.summary||'Caso de producto, mercado, crecimiento y estrategia.';
  }else if(philosophyCases.has(entry.id)){
    entry.theme='philosophy';
    entry.themeOrder=philosophyCases.get(entry.id);
    entry.summary=entry.summary||'Lectura complementaria para pensar conceptos filosóficos.';
  }
});

activities.themes={
  startups:{
    key:'startups',eyebrow:'CONSTRUIR, MEDIR, APRENDER',title:'Startups',
    description:'Estrategia, producto, crecimiento y liderazgo para convertir incertidumbre en aprendizaje. Incluye ocho lecciones centrales y casos de empresas reales.',
    accent:'green',chapterLabel:'lecciones y casos'
  },
  history:{
    key:'history',eyebrow:'PROCESOS, CONFLICTOS Y CAMBIOS',title:'Historia',
    description:'Una ruta cronológica de historia universal y del Perú, organizada a partir de los temas trabajados en Historia CCC y adaptada como lectura crítica.',
    accent:'gold',chapterLabel:'capítulos cronológicos'
  },
  philosophy:{
    key:'philosophy',eyebrow:'PREGUNTAR, ARGUMENTAR, TRANSFORMAR',title:'Filosofía',
    description:'Problemas, autores y disciplinas desde Platón y Aristóteles hasta Marco Aurelio, Kant, Hegel, Marx, Nietzsche y el pensamiento latinoamericano.',
    accent:'violet',chapterLabel:'capítulos y lecturas'
  }
};
})();

