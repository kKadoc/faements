/*
 * Rendu des compétences à partir de rules/skills.json.
 * Le contenu est généré en JS ; le CSS (skills.css) s'applique tel quel.
 * NB : le chargement du JSON nécessite un contexte http (GitHub Pages, Live
 * Server, `python -m http.server`…). En ouverture directe file:// le
 * navigateur bloque la requête.
 */
$(function () {

	/* --- Accordéon : délégation, donc fonctionne sur le contenu injecté --- */
	$(document)
		.on('click', '.voie > h3', function () {
			$(this).closest('.voie').toggleClass('collapsed');
		})
		.on('click', '.voie > .comp > h4', function () {
			$(this).closest('.voie').removeClass('collapsed');
		})
		.on('click', '#nav a', function (e) {
			var $target = $($(this).attr('href'));      // titre visé (h3 de voie ou h4 de compétence)
			var $voie = $target.closest('.voie');
			if ($voie.length) {
				e.preventDefault();
				$('.voie').addClass('collapsed');        // tout fermer
				$voie.removeClass('collapsed');          // n'ouvrir que la voie concernée
				// scroll vers le titre visé APRÈS le changement de mise en page
				$('html, body').stop().animate({ scrollTop: $target.offset().top - 20 }, 300);
			}
		});

	/* --- Chargement des données puis rendu --- */
	$.getJSON('rules/skills.json')
		.done(function (data) {
			$('#voies').html(data.voies.map(renderVoie).join(''));
			$('.voie').addClass('collapsed');

			/* (Re)construction du sommaire une fois les titres présents */
			if ($.fn.toc) {
				$('#nav').empty().toc({
					selectors: 'h3,h4',
					container: '#all',
					smoothScrolling: true,
					prefix: 'nav',
					highlightOnScroll: true,
					highlightOffset: 400,
					anchorName: function (i, heading, prefix) { return prefix + i; },
					headerText: function (i, heading, $heading) { return $heading.text(); }
				});
			}
		})
		.fail(function () {
			$('#voies').html('<div class="content">Impossible de charger les compétences. ' +
				'Ouvrez la page via un serveur http (GitHub Pages / Live Server), pas en file://.</div>');
		});

	/* --- Gabarits --- */
	function renderVoie(v) {
		var cls = 'voie ' + v.stat + (v.a_ranger ? ' a_ranger' : '');
		return '<div class="' + cls + '"><h3>' + v.nom + '</h3>' +
			v.competences.map(renderComp).join('') + '</div>';
	}

	function renderComp(c) {
		var gauche = '';
		if (c.profil) gauche += '<span class="profil">' + c.profil + '</span>';
		if (c.passive) gauche += '<span class="passive">Action passive</span>';
		if (c.innee) gauche += '<span class="innee">Action innée</span>';
		if (c.apprentissage) gauche += '<span class="apprentissage">Apprentissage : <span>' + c.apprentissage + '</span></span>';

		var effets = c.effets.map(function (e) {
			return e.niv ? '<b>Niv. ' + e.niv + ' :</b> ' + e.texte : e.texte;
		}).join('<br />');

		return '<div class="comp">' +
			'<h4 class="nom">' + c.nom + '</h4>' +
			'<table class="spec"><tr>' +
			'<td class="left">' + gauche + '</td>' +
			'<td class="right">' +
			'<p>Exécution : <span>' + c.exec + '</span></p>' +
			'<p>Souffle : <span class="jauge">' + c.souffle + '</span></p>' +
			'<p>Concentration : <span class="jauge">' + c.conc + '</span></p>' +
			'</td>' +
			'</tr></table>' +
			'<div class="effets">' + effets + '</div>' +
			'</div>';
	}
});
