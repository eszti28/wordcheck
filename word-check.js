const words = [
  ["nyakkendő", "slips"],
  ["zokni", "sokk"],
  ["kabát", "frakk"],
  ["dress", "kjole"],
  ["nadrág", "bukse"],
  ["öv", "belte"],
  ["gomb", "knapp"],
  ["zseb", "lomme"],
  ["kesztyű", "hanske"],
  ["sál", "skjerf"],
  ["bakancs", "støvel"],
  ["alsónemű", "undertøy"],
  ["ül", "sitter"],
  ["este", "en kveld"],
  ["beszél", "snakker"],
  ["inni", "drikker"],
  ["enni", "spiser"],
  ["valami", "noe"],
  ["olvasni", "leser"],
  ["rizs", "ris"],
  ["látni", "ser"],
  ["vásárol", "kjøper"],
  ["talán", "kanskje"],
  ["szüksége van", "trenger"],
  ["kérlek", "vær så snill"],
  ["kedves", "hyggelig"],
  ["csak", "bare"],
  ["hétvége", "helg"],
  ["elnézést", "unnskyld"],
  ["szeret", "elsker"],
  ["éjjel", "natt"],
  ["túra", "tur"],
  ["fine", "bra"],
  ["viszlát", "ha det bra"],
  ["sajnálom", "beklager"],
  ["szívesen", "bare hyggelig"],
  ["tessék", "vær så god"],
  ["tészta", "pasta"],
  ["hal", "en fisk"],
  ["hús", "kjøtt"],
  ["leves", "en suppe"],
  ["csirke", "en kylling"],
  ["étel", "mat"],
  ["paradicsom", "en tomat"],
  ["gyümölcs", "frukt"],
  ["pohár", "et glass"],
  ["reggeli", "en frokost"],
  ["sajt", "ost"],
  ["bors", "en pepper"],
  ["só", "et salt"],
  ["cukor", "et sukker"],
  ["sör", "en øl"],
  ["tojás", "et egg"],
  ["készít", "lager"],
  ["főz", "lager mat"],
  ["engem", "meg"],
  ["téged", "deg"],
  ["őt(női)", "henne"],
  ["őt(férfi)", "ham"],
  ["minket", "oss"],
  ["titeket", "dere"],
  ["őket", "dem"],
  ["mutat", "viser"],
  ["nővér", "storesøster"],
  ["hard", "hard"],
  ["great", "flott"],
  ["teli", "hel"],
  ["borzalmas", "forferdelig"],
  ["gyakori", "vanlig"],
  ["lehetséges", "mulig"],
  ["könnyű", "lett"],
  ["tiszta", "ren"],
  ["eléggé", "ganske"],
  ["koszos", "skitten"],
  ["fontos", "viktig"],
  ["heavy", "tung"],
  ["much", "mye"],
  ["rossz", "dårlig"],
  ["biztonságos", "trygg"],
  ["hosszú", "lang"],
  ["hideg", "kald"],
  ["nice", "fin"],
  ["nagyon", "veldig"],
  ["difficult", "vanskelig"],
  ["nyitott", "åpen"],
  ["meleg", "varm"],
  ["rövid", "kort"],
  ["nagy", "stor"],
  ["új", "ny"],
];

const length = words.length;

function norWords() {
  let norWords = [];
  for (let i = 0; i < words.length; i++) {
    norWords.push(words[i][0]);
  }
  return norWords;
}

function hunWords() {
  let hunWords = [];
  for (let i = 0; i < words.length; i++) {
    hunWords.push(words[i][1]);
  }
  return hunWords;
}

function newWord() {
  let indexNum = Math.floor(Math.random() * hunWords().length);
  document.getElementById("norWord").innerHTML = hunWords()[indexNum];
  document.getElementById("norInputCheck").value = "";
  document.getElementById("norCorrectCheck").innerHTML = "result";
}

function magyarNewWord() {
  let indexNum = Math.floor(Math.random() * norWords().length);
  document.getElementById("magyarWord").innerHTML = norWords()[indexNum];
  document.getElementById("hunInputCheck").value = "";
  document.getElementById("magyarCorrectCheck").innerHTML = "result";
}

function answer() {
  let elem = document.getElementById("norInputCheck").value;
  let result = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (elem === words[i][j]) {
        result.push(words[i][1]);
        break;
      } else {
        document.getElementById("norCorrectCheck").innerHTML = "Not correct";
      }
    }
  }
  if (result[0] === document.getElementById("norWord").innerHTML) {
    document.getElementById("norCorrectCheck").innerHTML = "Correct";
  }
}

function magyarAnswer() {
  let elem = document.getElementById("hunInputCheck").value;
  let result = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (elem === words[i][j]) {
        result.push(words[i][0]);
        break;
      } else {
        document.getElementById("magyarCorrectCheck").innerHTML = "Not correct";
      }
    }
  }
  if (result[0] === document.getElementById("magyarWord").innerHTML) {
    document.getElementById("magyarCorrectCheck").innerHTML = "Correct";
  }
}
