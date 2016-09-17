// ==UserScript==
// @name         PokeRadar.io fixed
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.pokeradar.io/
// @grant        GM_addStyle
// @grant        GM_log
// @grant        unsafeWindow
// @require      https://code.jquery.com/jquery-3.1.0.min.js
// ==/UserScript==

(function() {
  'use strict';

  var poke_everywhere = [
    "Rattata",
    "Pidgey",
    "Weedle",
    "Caterpie",
    "Drowzee",
    "Eevee",
    "Zubat",
    "Venonat",
    "Oddish",
    "Magikarp",
  ];
  var poke_common = [
    "Meowth",
    "Spearow",
    "Bellsprout",
    "Paras",
    "Krabby",
    "Clefairy",
    "Nidoran♂",
    "Nidoran♀",
    "Ekans",
    "Cubone",
    "Goldeen",
    "Poliwag",
    "Shellder",
    ];
  var poke_uncommon = [
    "Jigglypuff",
    "Growlithe",
    "Gastly",
    "Geodude",
    "Exeggcute",
    "Slowpoke",
    "Psyduck",
    "Jinx",
    "Onix",
    ];
  var poke_rare = [
    "Ponyta",
    "Vulpix",
    "Koffing",
    "Sandshrew",
    "Staryu",
    "Tentacool",
    "Horsea",
    "Magmar",
    "Tangela",
    ];
  var poke_veryrare = [
    "Abra",
    "Machop",
    "Grimer",
    "Rhyhorn",
    "Voltorb",
    "Lickitung",
    "Scyther",
    "Pinsir",
    ];
  var poke_epic = [
    "Dratini",
    "Magnemite",
    "Electabuzz",
    "Hitmonchan",
    "Hitmonlee",
    "Chansey",
    ];
  var poke_mythical = [
    "Lapras",
    "Snorlax",
    "Porygon",
    ];
  var poke_special = [
    "Bulbasaur",
    "Charmander",
    "Squirtle",
    "Pikachu",
    "Omanyte",
    "Kabuto",
    "Aerodactyl",
    ];
  // construct our append
  var myDiv = document.createElement('div');
  myDiv.className = "form-inline";
  /* jshint multistr: true */
  myDiv.innerHTML = '<div class="checkbox pull-left"><label><input type="checkbox"> Common</label></div> \
                    <div class="checkbox pull-left"><label><input type="checkbox"> Uncommon</label></div> \
                    <div class="checkbox pull-left"><label><input type="checkbox"> Rare</label></div>';
  document.getElementById("pokemon-search").parentNode.parentNode.appendChild(myDiv);

  // remove sidebar, max width map
  GM_addStyle(
	".sidebar { display: none !important; }" +
    ".map { width: 100% !important; }" +
    ".navbar-brand { display: none !important; }" +
    ".navbar { width: 100% !important;"
  );
  // fix form-inline css
  GM_addStyle(
    ".form-inline { margin: 14px 0 0 14px }" +
    ".checkbox { margin-left: 10px }"
  );

  //$("#pokemon-search").css("display", "none");

})();

(function(open) {

    GM_log("On function open");
    XMLHttpRequest.prototype.open = function() {

        this.addEventListener("readystatechange", function() {
            //GM_log("AJAX Intercepted!");
            $(
              "img[title='Pidgey']," +
              "img[title='Weedle']," +
              "img[title='Zubat']," +
              "img[title='Ekans']," +
              "img[title='Caterpie']," +
              "img[title='Spearow']," +
              "img[title='Paras']," +
              "img[title='Goldeen']," +
              "img[title='Venonat']," +
              "img[title='Psyduck']," +
              "img[title='Rattata']"
             ).parent().css("display", "none");
        }, false);
        open.apply(this, arguments);
    };

})(XMLHttpRequest.prototype.open);