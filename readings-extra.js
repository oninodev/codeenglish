(() => {
'use strict';
const app=window.EnglishActivities;
if(!app)return;
const esc=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const courses={
 economy:{title:'Economy',eyebrow:'INCENTIVES, MARKETS, AND INSTITUTIONS',description:'A practical path through microeconomics, macroeconomics, inequality, trade, and development.'},
 cinema:{title:'Cinema',eyebrow:'IMAGE, MOVEMENT, AND MEMORY',description:'Film history and visual language, from the first screenings and silent cinema to global digital storytelling.'},
 literature:{title:'Literature',eyebrow:'FORM, HISTORY, AND IMAGINATION',description:'Authors, movements, genres, and literary devices from Classical Antiquity to the avant-garde and contemporary writing.'}
};
const data={
 economy:[
  ['E01','Scarcity, Choice, and Opportunity Cost','Why every economic decision involves alternatives.',[
   ['Economics begins with choice','Resources such as time, labor, land, and capital are limited, while human wants are not. Economics studies how people and institutions choose among competing uses of those resources. Scarcity does not mean absolute poverty; it means that choosing one option makes another unavailable.'],
   ['The cost of the next-best alternative','Opportunity cost is the value of the best alternative that is given up. It helps compare choices that do not have an obvious price, such as studying for another year, caring for a family member, or protecting an ecosystem.'],
   ['Thinking at the margin','Many decisions are not all-or-nothing. Marginal analysis asks whether one additional unit of an activity creates more benefit than cost. This way of thinking explains choices about production, consumption, and public policy.']
  ],[['scarcity','the condition of having limited resources'],['opportunity cost','the value of the next-best alternative'],['trade-off','a balance between competing benefits'],['marginal analysis','comparison of one additional benefit and cost']]],
  ['E02','Supply, Demand, and Prices','How decentralized choices coordinate markets.',[
   ['Demand and supply','Demand describes how much buyers are willing and able to purchase at different prices. Supply describes how much sellers are willing and able to offer. A change in price moves along a curve; a change in income, technology, preferences, or costs can shift the entire curve.'],
   ['Prices as signals','A market price coordinates dispersed information. Higher prices can signal scarcity and encourage conservation or new production. Yet prices do not measure every social value, and markets can exclude people who lack purchasing power.'],
   ['Elasticity and adjustment','Elasticity measures how strongly quantity responds to a change in price or income. It matters for taxes, business strategy, and public policy because the same price change can produce very different behavior across goods and groups.']
  ],[['demand','the quantity buyers will purchase at different prices'],['supply','the quantity sellers will offer'],['equilibrium','a balance between quantity supplied and demanded'],['elasticity','responsiveness to a change in price or income']]],
  ['E03','Firms, Competition, and Market Power','Costs, productivity, innovation, and imperfect competition.',[
   ['How firms create value','Firms combine labor, capital, knowledge, and organization to produce goods and services. Productivity rises when the same inputs generate more output, often through better technology, skills, management, or infrastructure.'],
   ['Competition and concentration','Competition can lower prices and encourage innovation, but many markets contain barriers to entry, network effects, patents, or large fixed costs. These conditions may create market power: the ability to influence price or terms.'],
   ['Externalities and public goods','A market transaction can affect people who did not choose it. Pollution is a negative externality; knowledge can create positive spillovers. Public goods are difficult to exclude people from using, so collective financing may be necessary.']
  ],[['productivity','output produced from a given set of inputs'],['market power','the ability to influence prices or conditions'],['externality','an effect on someone outside a transaction'],['public good','a good that is broadly shared and hard to exclude']]],
  ['E04','Growth, Inflation, and Unemployment','The central measures and tensions of macroeconomics.',[
   ['Measuring an economy','Gross domestic product estimates the value of final goods and services produced within a country. GDP is useful for tracking activity, but it does not directly measure unpaid work, distribution, environmental damage, security, or well-being.'],
   ['Inflation and purchasing power','Inflation is a sustained rise in the general price level. It can result from strong demand, supply shocks, expectations, exchange-rate changes, or monetary dynamics. Moderate inflation and sudden hyperinflation are very different economic experiences.'],
   ['Employment and the business cycle','Unemployment rises when people seeking work cannot find it. Recessions reduce production and employment; recoveries expand them. Fiscal and monetary policy attempt to stabilize these cycles, but each tool has limits and distributional effects.']
  ],[['GDP','the value of final production within an economy'],['inflation','a sustained increase in the general price level'],['unemployment','the condition of seeking work without finding it'],['business cycle','alternating periods of expansion and contraction']]],
  ['E05','Money, Banks, and Economic Policy','How credit, interest rates, budgets, and central banks shape activity.',[
   ['Money and credit','Money functions as a medium of exchange, a unit of account, and a store of value. Banks connect savers and borrowers, create credit, and assess risk. Credit can support investment, but excessive leverage can make households and financial systems fragile.'],
   ['Monetary policy','Central banks influence financial conditions through interest rates, liquidity, and communication. Lower rates can stimulate borrowing and demand; higher rates can restrain inflation. The effects arrive with delays and differ across sectors.'],
   ['Fiscal policy','Governments tax, spend, and borrow. Public budgets finance services and redistribute resources, while deficits can support demand during a downturn. Long-term sustainability depends on growth, interest costs, institutions, and what borrowed funds are used to build.']
  ],[['money','a medium of exchange and unit of account'],['credit','resources provided now in exchange for future repayment'],['monetary policy','central-bank action affecting money and interest rates'],['fiscal policy','government decisions about taxation and spending']]],
  ['E06','Trade, Inequality, and Development','Global exchange, distribution, institutions, and human capability.',[
   ['Trade and specialization','Trade allows places to specialize according to comparative advantage and exchange with others. It can lower prices and expand choice, but gains are uneven and adjustment can be painful for workers, regions, and industries.'],
   ['Inequality and mobility','Income and wealth depend on wages, ownership, education, inheritance, institutions, discrimination, and bargaining power. Inequality is not only a statistical outcome; it shapes opportunity, political influence, health, and social trust.'],
   ['Development beyond growth','Development includes longer lives, education, security, political voice, and the ability to pursue valued goals. Infrastructure, capable institutions, productive firms, public health, gender equality, and environmental resilience all contribute to durable progress.']
  ],[['comparative advantage','the ability to produce at a lower opportunity cost'],['inequality','an uneven distribution of income, wealth, or opportunity'],['economic mobility','movement between economic positions'],['human development','the expansion of people’s capabilities and choices']]]
 ],
 cinema:[
  ['C01','Before Cinema: Photography, Motion, and Projection','The inventions and spectacles that made moving images possible.',[
   ['From still images to movement','Nineteenth-century photography changed how reality could be recorded. Optical toys such as the zoetrope created the illusion of movement, while chronophotography divided motion into a sequence of images.'],
   ['The first public screenings','In the 1890s, inventors combined cameras, flexible film, intermittent movement, and projection. The Lumière brothers presented short actuality films to paying audiences, while other systems emphasized individual viewing.'],
   ['Cinema as attraction','Early films often displayed movement, novelty, and spectacle rather than telling long stories. A train, a dance, a street, or a trick effect could be enough. Cinema began as both a technology and a social event.']
  ],[['projection','the display of an image on a surface'],['frame','one individual image in a film strip'],['actuality film','a short record of real people or events'],['spectacle','a display designed to attract attention']]],
  ['C02','Silent Cinema and the Birth of Film Language','Editing, close-ups, stars, comedy, and visual storytelling.',[
   ['Learning to tell stories','Filmmakers discovered that shots could be arranged to create space, time, suspense, and emotional emphasis. Parallel editing connected simultaneous actions, while close-ups directed attention to faces and objects.'],
   ['Studios and stars','Production became industrial. Studios organized crews, sets, distribution, and publicity, while performers such as Charlie Chaplin, Buster Keaton, and Mary Pickford became internationally recognizable stars.'],
   ['Silence was never silent','Films were accompanied by pianists, orchestras, lecturers, or sound effects. Intertitles supplied dialogue and explanation, but gesture, framing, rhythm, and mise-en-scène carried much of the meaning.']
  ],[['editing','the selection and arrangement of shots'],['close-up','a shot that presents a subject at close range'],['intertitle','written text inserted between silent-film images'],['mise-en-scène','everything arranged before the camera']]],
  ['C03','Montage, Expressionism, and the Avant-Garde','European movements that expanded cinema’s visual possibilities.',[
   ['Soviet montage','Filmmakers such as Sergei Eisenstein argued that meaning emerges from the collision of shots. Montage could create intellectual and emotional effects that no single image contained by itself.'],
   ['German Expressionism','Distorted sets, sharp shadows, stylized acting, and unstable spaces externalized fear and psychology. Films such as The Cabinet of Dr. Caligari influenced horror, film noir, and production design.'],
   ['Surrealism and experimentation','Avant-garde artists rejected conventional realism and narrative. They used dreams, association, repetition, abstraction, and shock to challenge ordinary perception.']
  ],[['montage','editing that creates meaning through juxtaposition'],['Expressionism','a style that distorts form to express inner states'],['avant-garde','experimental art that challenges convention'],['juxtaposition','the placement of contrasting elements together']]],
  ['C04','Sound, Color, and the Classical Studio System','How industrial cinema organized genres, style, and audiences.',[
   ['The transition to synchronized sound','Sound transformed acting, camera movement, exhibition, and international distribution. Dialogue became central, but music, silence, ambience, and effects also created space and emotion.'],
   ['Classical Hollywood','Major studios controlled production, distribution, and theaters. A clear narrative style guided attention through continuity editing, motivated characters, recognizable genres, and resolutions.'],
   ['Genre and authorship','Musicals, westerns, melodramas, comedies, and film noir developed shared conventions. Directors and craftspeople could create distinctive work inside an industrial system.']
  ],[['synchronized sound','audio coordinated with the moving image'],['continuity editing','editing designed to make space and time easy to follow'],['genre','a category organized by recurring conventions'],['studio system','industrial control of film production and distribution']]],
  ['C05','Postwar Realism and the New Waves','Location shooting, social reality, and a new idea of the director.',[
   ['Italian Neorealism','After World War II, filmmakers used locations, nonprofessional actors, and ordinary situations to examine poverty, labor, children, and moral uncertainty. The style made postwar streets part of the drama.'],
   ['The French New Wave','Critics who became directors challenged polished studio conventions. Lightweight cameras, jump cuts, direct sound, improvisation, and self-conscious references made filmmaking feel immediate and personal.'],
   ['New cinemas around the world','Movements in Japan, India, Brazil, Czechoslovakia, Senegal, and elsewhere created distinct modernisms. Cinema became a way to debate colonialism, tradition, modernization, and national identity.']
  ],[['Neorealism','a postwar movement focused on ordinary life and locations'],['jump cut','an edit that creates a visible break in continuity'],['auteur','a director understood as a film’s guiding creative voice'],['new wave','a movement that renews cinematic form and subject matter']]],
  ['C06','New Hollywood, Blockbusters, and Independent Film','Youth culture, spectacle, franchises, and alternative production.',[
   ['A changing American industry','During the late 1960s and 1970s, younger filmmakers addressed political distrust, sexuality, violence, and alienation with influences from European and Japanese cinema.'],
   ['The blockbuster model','Jaws and Star Wars helped establish wide releases, intensive marketing, merchandising, sequels, and effects-driven spectacle. The model generated global audiences but also concentrated resources around fewer large projects.'],
   ['Independent voices','Independent production created space for lower budgets, regional stories, formal experimentation, and filmmakers excluded by the mainstream. Festivals became important sites of discovery and distribution.']
  ],[['blockbuster','a heavily marketed film designed for a very large audience'],['franchise','a series of related films and commercial properties'],['independent film','production outside the major studio system'],['festival circuit','a network of events that exhibits and promotes films']]],
  ['C07','World Cinema and the Digital Turn','Global circulation, new technologies, and changing forms of access.',[
   ['Multiple centers of cinema','Popular industries in India, Nigeria, Hong Kong, South Korea, Mexico, Iran, and other regions developed their own stars, genres, and production cultures. “World cinema” is not one style but a field of unequal global circulation.'],
   ['Digital production','Digital cameras lowered some production costs and expanded low-light shooting, long takes, and immediate review. Computer-generated imagery transformed spectacle and also became part of ordinary invisible editing.'],
   ['Streaming and platforms','Streaming changed distribution, viewing habits, and financing. Audiences gained access to more work, while recommendation systems and platform ownership created new forms of concentration and discoverability problems.']
  ],[['digital cinema','film production and exhibition using digital technologies'],['CGI','computer-generated imagery'],['streaming','on-demand delivery of audiovisual media'],['discoverability','the likelihood that audiences can find a work']]],
  ['C08','How to Read a Film','Framing, sound, editing, performance, and interpretation.',[
   ['Form guides attention','Shot size, camera angle, movement, lighting, color, production design, and performance shape what viewers notice and feel. Analysis begins by describing specific choices before assigning meaning.'],
   ['Time and space through editing','Cuts can create continuity, collision, ellipsis, rhythm, or ambiguity. A film constructs space by selecting viewpoints and constructs time by deciding what to show, repeat, compress, or omit.'],
   ['Interpretation and context','A film can be studied as a narrative, an artwork, an industrial product, a historical document, or a political intervention. Strong interpretation connects formal evidence with genre, production, reception, and social context.']
  ],[['framing','the selection and organization of the image'],['diegetic sound','sound understood as belonging to the story world'],['ellipsis','the omission of part of an event or time span'],['film analysis','interpretation grounded in formal and contextual evidence']]]
 ],
 literature:[
  ['L01','Classical Literature: Epic, Tragedy, and Rhetoric','Greek and Roman forms that shaped later literary traditions.',[
   ['Epic and collective memory','Works associated with Homer and Virgil organize war, travel, foundation, and identity through elevated narrative. Epic heroes embody values, but their choices also reveal the costs of glory and power.'],
   ['Tragedy and conflict','Aeschylus, Sophocles, and Euripides stage conflicts between law, family, state, fate, and responsibility. Tragedy does not merely punish error; it places legitimate values in painful collision.'],
   ['Poetics and rhetoric','Aristotle examined plot, recognition, reversal, and catharsis. Rhetorical traditions studied how language persuades through character, emotion, arrangement, and reasoning.']
  ],[['epic','a long narrative poem about foundational actions'],['tragedy','drama centered on irreversible conflict and suffering'],['catharsis','the emotional effect associated with tragedy'],['rhetoric','the art and analysis of persuasive language']]],
  ['L02','Medieval Literature: Faith, Court, and Journey','Allegory, romance, oral tradition, and layered communities.',[
   ['A multilingual literary world','Medieval literature circulated in Latin and vernacular languages through manuscripts, performance, and memory. Religious writing coexisted with heroic poetry, satire, courtly romance, and popular tales.'],
   ['Allegory and pilgrimage','Dante’s Divine Comedy turns a journey through the afterlife into theology, politics, autobiography, and poetic experiment. Allegory allows a narrative to operate on literal, moral, and spiritual levels.'],
   ['Courtly and popular forms','Arthurian romance explores chivalry, desire, and loyalty, while works such as The Canterbury Tales assemble contrasting social voices. The period is more diverse than a single “age of faith.”']
  ],[['vernacular','the language commonly spoken by a community'],['allegory','a narrative with a sustained second level of meaning'],['romance','a narrative of adventure, marvel, and often courtly love'],['frame narrative','a story structure that contains other stories']]],
  ['L03','Renaissance Humanism and the Early Modern Stage','The revival of classical learning and the reinvention of the self.',[
   ['Humanism and print','Humanists studied classical languages, history, rhetoric, and moral philosophy. Printing accelerated circulation, comparison, and debate while changing the scale of authorship and readership.'],
   ['The essay and the self','Montaigne used the essay to test judgment through personal experience rather than present a closed system. The form makes uncertainty, contradiction, and self-observation part of thought.'],
   ['Shakespeare and the stage','Shakespeare’s drama moves between public power and private desire through metaphor, soliloquy, disguise, and theatrical self-awareness. His plays transform inherited plots into investigations of language and action.']
  ],[['humanism','the study of classical culture and human agency'],['essay','a flexible prose form that tests an idea'],['soliloquy','speech revealing a character’s thought while alone'],['blank verse','unrhymed verse with a regular meter']]],
  ['L04','Baroque Literature: Excess, Paradox, and Disillusion','Complex style and unstable reality in the seventeenth century.',[
   ['A world of appearances','Baroque writing responds to religious conflict, imperial power, scientific change, and social instability. It favors contrast, movement, theatricality, and the tension between appearance and truth.'],
   ['Concept and difficulty','Góngora’s dense imagery and Quevedo’s compressed wit represent different ways of making language intellectually demanding. Metaphor and paradox force readers to reconstruct relationships.'],
   ['Theater and the world','Calderón’s Life Is a Dream asks whether freedom is possible when life resembles a performance or dream. Baroque drama repeatedly turns identity into a role under pressure.']
  ],[['Baroque','a style marked by contrast, complexity, and theatricality'],['conceit','an extended and intellectually surprising comparison'],['paradox','a statement whose contradiction reveals a problem'],['disillusion','the loss of confidence in appearances or ideals']]],
  ['L05','Neoclassicism and the Enlightenment','Reason, satire, public debate, and disciplined form.',[
   ['Order and classical models','Neoclassical writers valued clarity, proportion, decorum, and the imitation of ancient models. Rules were understood as ways to make art intelligible and socially useful.'],
   ['Satire and criticism','Swift, Pope, and Voltaire used irony and exaggeration to expose vanity, dogma, inequality, and abuses of reason. Satire depends on a gap between what is said and what readers are expected to judge.'],
   ['The public sphere','Periodicals, salons, coffeehouses, and expanding print markets created new reading publics. Literature participated in debates over education, tolerance, science, government, and rights.']
  ],[['Neoclassicism','a movement emphasizing classical order and decorum'],['satire','criticism through humor, irony, or exaggeration'],['irony','a contrast between expression and intended meaning'],['public sphere','spaces where private people debate public matters']]],
  ['L06','Romanticism: Imagination, Nature, and Revolution','The creative self and the search for freedom beyond rational order.',[
   ['A reaction and an expansion','Romanticism challenged rigid rules and narrow ideas of reason. It emphasized imagination, emotion, nature, childhood, the sublime, folklore, and the singular voice.'],
   ['Poetry and perception','Wordsworth found significance in ordinary language and recollected experience, while Coleridge explored imagination and the supernatural. Byron, Shelley, and Keats created different models of rebellion, beauty, and mortality.'],
   ['Many Romanticisms','European and Latin American writers connected romantic form with nationalism, independence, exile, and popular tradition. The movement could resist authority while also inventing idealized national pasts.']
  ],[['Romanticism','a movement centered on imagination, feeling, and freedom'],['sublime','awe mixed with fear before overwhelming scale or power'],['lyric','a poem organized around a speaking voice or perception'],['folklore','traditional stories, songs, and beliefs of a community']]],
  ['L07','Realism and Naturalism','Society, class, institutions, and the details of ordinary life.',[
   ['The social world as structure','Realist novels connect individual choices with money, marriage, work, law, family, and class. Balzac, Dickens, Flaubert, Tolstoy, and Galdós build broad social worlds through precise detail.'],
   ['Narration and perspective','Free indirect discourse allows third-person narration to approach a character’s language without direct quotation. The technique creates intimacy while preserving distance and irony.'],
   ['Naturalism and determination','Zola and other naturalists emphasized environment, heredity, labor, and material conditions. Their work often treats society as a system that limits freedom, though characters never become simple data.']
  ],[['Realism','representation focused on plausible social life'],['Naturalism','a form of realism emphasizing material determination'],['free indirect discourse','third-person narration colored by a character’s voice'],['social novel','a novel centered on institutions and social conditions']]],
  ['L08','Modernism and Symbolism','Fragmentation, interiority, and new forms for modern experience.',[
   ['A crisis of inherited form','Urbanization, mass media, war, psychoanalysis, and technological change made older narrative conventions feel insufficient. Modernists experimented with time, voice, typography, myth, and point of view.'],
   ['Consciousness and language','Woolf and Joyce represent thought as movement rather than orderly report. Proust connects memory with sensation, while Kafka turns institutions into strange and unreadable powers.'],
   ['Symbolist suggestion','Baudelaire, Mallarmé, and other Symbolists sought correspondences among sound, image, and idea. A symbol does not translate into one fixed message; it organizes a field of suggestion.']
  ],[['Modernism','experimental literature responding to modernity'],['stream of consciousness','representation of the flow of thought'],['fragmentation','the deliberate breaking of continuity or unity'],['symbol','an image or object that generates layered meaning']]],
  ['L09','The Historical Avant-Garde','Manifestos, rupture, collage, and experiments with art and life.',[
   ['The desire to begin again','Futurism, Dada, Surrealism, Constructivism, and other movements attacked established taste and institutions. Their manifestos turned artistic programs into public provocations.'],
   ['Collage and chance','Avant-garde works reused newspapers, advertising, found objects, dreams, automatic writing, and performance. They questioned the boundary between literary language and everyday material.'],
   ['Politics and contradiction','Some movements linked formal revolution to political emancipation; others embraced nationalism or authoritarianism. Their history shows that aesthetic innovation does not guarantee ethical clarity.']
  ],[['manifesto','a public declaration of artistic principles'],['collage','a work assembled from different existing materials'],['Dada','an anti-art movement shaped by war and absurdity'],['Surrealism','a movement exploring dream, desire, and the unconscious']]],
  ['L10','Postwar, Postcolonial, and Latin American Literatures','Memory, empire, dictatorship, migration, and narrative invention.',[
   ['Writing after catastrophe','Postwar literature confronts genocide, displacement, nuclear fear, and the difficulty of testimony. Beckett, Celan, Levi, and many others ask what language can still do after mass violence.'],
   ['Postcolonial voices','Writers such as Achebe, Césaire, Walcott, and Rushdie reshape imperial languages and narrative forms. They examine cultural translation, borders, race, memory, and the unfinished structures of colonial power.'],
   ['Latin American innovation','Borges transformed the short story through labyrinths and invented books. García Márquez, Rulfo, Lispector, Cortázar, Vargas Llosa, and others created distinct approaches to history, myth, voice, and political reality.']
  ],[['testimony','a narrative that bears witness to lived events'],['postcolonial','concerned with the cultural and political effects of empire'],['magical realism','narration that treats extraordinary events as part of ordinary reality'],['intertextuality','the presence of other texts within a work']]],
  ['L11','Contemporary Literature and Literary Devices','Hybrid forms, global voices, and the tools used to make meaning.',[
   ['Contemporary plurality','Contemporary writing moves across print, performance, digital media, memoir, autofiction, speculative fiction, graphic narrative, and spoken word. No single movement defines the present.'],
   ['Figures of language','Metaphor transfers meaning through comparison; metonymy substitutes association; personification gives human qualities to nonhuman things; hyperbole exaggerates; and irony creates distance between statement and meaning.'],
   ['Reading form closely','Narrator, focalization, syntax, rhythm, imagery, motif, genre, and structure shape interpretation. Close reading does not isolate a text from history; it shows precisely how language and context interact.']
  ],[['metaphor','an implicit comparison that transfers meaning'],['metonymy','substitution based on association'],['focalization','the perspective through which information is perceived'],['motif','a recurring element that develops meaning']]]
 ]
};

function html(course,chapter){
 const [code,title,summary,sections,terms]=chapter;
 return `<article class="source-page reading-article"><p class="source-kicker">${esc(courses[course].title)} · ${esc(code)}</p><p class="source-paragraph reading-summary"><strong>${esc(summary)}</strong></p>${sections.map(([heading,text])=>`<h2 class="source-heading">${esc(heading)}</h2><p class="source-paragraph">${esc(text)}</p>`).join('')}<h2 class="source-heading">Key terms</h2><div class="table-wrap"><table class="source-table"><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody>${terms.map(([term,meaning])=>`<tr><td><strong>${esc(term)}</strong></td><td>${esc(meaning)}</td></tr>`).join('')}</tbody></table></div></article>`;
}

Object.entries(data).forEach(([course,chapters])=>chapters.forEach((chapter,index)=>app.entries.push({
 id:`reading-${course}-${String(index+1).padStart(2,'0')}`,title:`${chapter[0]} · ${chapter[1]}`,summary:chapter[2],category:'reading',level:'B2',allowedLevels:['B1','B2','C1','C2'],page:0,endPage:0,depth:1,theme:course,themeOrder:index+1,readingCourse:true,html:html(course,chapter)
})));
app.themes={...(app.themes||{}),...Object.fromEntries(Object.entries(courses).map(([key,value])=>[key,{key,...value,chapterLabel:'readings'}]))};
})();
