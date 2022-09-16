window.BENCHMARK_DATA = {
  "lastUpdate": 1663345765480,
  "repoUrl": "https://github.com/unicode-org/icu",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "6df8bb7307ae9f9ebc961f0887c106f64ea05aa9",
          "message": "ICU-22036 Adds ICU4J performance tests to post-merge continuous integration\nworkflow. Also fixes a tiny oversight in the ICU4J performance framework.",
          "timestamp": "2022-06-27T08:47:48-07:00",
          "tree_id": "f40e02e24289a5397ac51ef5272fedc20596f358",
          "url": "https://github.com/unicode-org/icu/commit/6df8bb7307ae9f9ebc961f0887c106f64ea05aa9"
        },
        "date": 1656346489114,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 2.914427231082097,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.5060087011200292,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.8323716336555393,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 1.5020495988879627,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 2.839806573525998,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 4.009214406648371,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 2.8445564772300043,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.4881195419988817,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.40378562555405023,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 7.694406915726817,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 2.8038775404897414,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 1.4376905919157594,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 2.7645161053388603,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 2.754332438456954,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 2.6910739799402643,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.9580939061571148,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 4.635470845897114,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.4016137582246968,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 1.4100678648903453,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 1.4118810146046297,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 1.4124925561839998,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 2.716840007335399,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 1.7920925547601008,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 1.4719175023525035,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.4903102096425522,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 1.4984333379261463,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 2.8200940188438404,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 2.826102133894544,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 2.843072644192281,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 4.940584187301998,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 1.4843754726369665,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 2.8193030609366185,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "allenwtsu@google.com",
            "name": "allenwtsu",
            "username": "allensu05"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "929cf40ecbf464bb133113995185c7353f2e106d",
          "message": "ICU-22059 Add one Thai word into the Thai dictionary\n\nSee #2112",
          "timestamp": "2022-06-27T09:27:56-07:00",
          "tree_id": "06e8f81c97ab94be546a5187c8e251db670d5e2f",
          "url": "https://github.com/unicode-org/icu/commit/929cf40ecbf464bb133113995185c7353f2e106d"
        },
        "date": 1656348894879,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 2.886905624982513,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.5070896510758334,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.8374028921395087,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 1.5102617525494437,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 2.872219192849777,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.8185230576876066,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 2.8266230401085184,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.5100016277651531,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.40548272695023074,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 7.801351884460061,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 2.8448783717321104,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 1.4188463109734977,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 2.7830223927940816,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 2.7363072017107566,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 2.672514046439756,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 1.0051927523329234,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 4.960850110450331,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.4992909394842735,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 1.5053964919437397,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 1.467738288840338,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 1.4579467355928641,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 2.6842369901690906,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 1.8158262127315357,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 1.4509671894696532,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.4529270714166547,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 1.450306539148194,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 2.7540754717732394,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 2.8309547994948643,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 2.774558760747447,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 4.7333425517307575,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 1.4793064574258388,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 2.8400338038347672,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "d7c424b00f89ad2cb6734b106964ed72a3390415",
          "message": "ICU-22073 Do not throw away CompactDecimalFormat's affixes",
          "timestamp": "2022-06-27T12:53:22-07:00",
          "tree_id": "ec0d98e1ce9116d2d5820db9421d646147cb6f92",
          "url": "https://github.com/unicode-org/icu/commit/d7c424b00f89ad2cb6734b106964ed72a3390415"
        },
        "date": 1656361197925,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.020385848985674,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.8456144528557956,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.6852099975757258,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.3848262007293,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.0168230021352733,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.940701186048914,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.016226662416731,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.8709143509506754,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.33525370986651243,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 6.377168987260781,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.0113535289975535,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.380937540890999,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.0131875630451552,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.0133713007792444,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.0132637000582325,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.8263165699345905,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 5.698385767437136,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.880795939879669,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.396684730471262,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.4047690139587465,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.3957545617928977,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.0131623179836478,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.4173058992260836,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.3958474469888027,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.7529322132378298,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.3865913888617727,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.0118568867638054,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.015004164610069,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.01236008239528,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 6.341232564921232,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.3757143303011907,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.011483932144306,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsivonen@hsivonen.fi",
            "name": "Henri Sivonen",
            "username": "hsivonen"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango",
            "username": "echeran"
          },
          "distinct": true,
          "id": "3cefbd55c7aafbb29bc67aa9a27df9bf13293a5a",
          "message": "ICU-22028 Export collation and normalization data for ICU4X",
          "timestamp": "2022-06-28T08:37:32-07:00",
          "tree_id": "dc6bb456103fdf93ff19ad327327005cd0d65e6f",
          "url": "https://github.com/unicode-org/icu/commit/3cefbd55c7aafbb29bc67aa9a27df9bf13293a5a"
        },
        "date": 1656432273734,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 2.5113681484860773,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.7191416682847038,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.6793857884979575,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 1.5760474304972696,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 2.6860102655572127,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 2.9336021061785735,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 2.7083356599967883,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.5656718899430813,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.40199138686179464,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 5.2790645581273585,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 2.6058438949595457,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 1.643370693188928,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 2.7816012821213305,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 2.6664135088440672,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 2.727449421932952,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.950886194811231,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 4.646476872637503,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.5425957780165855,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 1.5765614730027853,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 1.5742433616096738,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 1.6488207808484858,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 2.6275288348155397,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 1.743712056378995,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 1.5725213547229164,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.5705982004893124,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 1.6809494659896924,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 2.673255554311249,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 2.780387474075034,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 2.688900267479554,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 5.08287443787475,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 1.575763865052329,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 2.6847348773558757,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "58060eafdc69ac7a060e8b80d942246adc471f0f",
          "message": "ICU-22036 Adds ICU4J date formatting performance test, which is last of the\nICU4J performance tests.",
          "timestamp": "2022-06-29T12:02:29-07:00",
          "tree_id": "c282c6da7f45a320f8d00b465f596b5b55770b50",
          "url": "https://github.com/unicode-org/icu/commit/58060eafdc69ac7a060e8b80d942246adc471f0f"
        },
        "date": 1656531058566,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 2.557096822630657,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.7165838221512404,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.6790779812601786,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 1.5797216088958321,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 2.5722010231819947,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 2.936658236471496,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 2.677318660133735,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.5695165297417237,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.4019711811499967,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 5.275600269327648,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 2.620356111174193,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 1.576481427574868,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 2.7161290388689556,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 2.5964586476619904,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 2.546053563451514,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.952697801160061,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 4.457427877484766,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.600119325112281,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 1.6499096571117464,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 1.6750828593245097,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 1.5990413092320261,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 2.671910210926426,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 1.7437171421690034,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 1.58361023919701,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.6571112084086899,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 1.6059692783680544,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 2.62096544313383,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 2.7056844437886025,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 2.7326327496569105,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 4.980401312170778,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 1.5798133518831186,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 2.7033090981811485,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "robertbastian@users.noreply.github.com",
            "name": "Robert Bastian",
            "username": "robertbastian"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "783b4f7b6a7f0996563c802bcec296e2a81d882f",
          "message": "ICU-22061 rename",
          "timestamp": "2022-06-29T13:16:26-07:00",
          "tree_id": "acffa8df9f2a19ac3aa86209887641a5cf2fcb49",
          "url": "https://github.com/unicode-org/icu/commit/783b4f7b6a7f0996563c802bcec296e2a81d882f"
        },
        "date": 1656535279489,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 2.5466021927688858,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.7108536951236835,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.6790779812601786,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 1.5724345609182115,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 2.6151061004426444,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 2.9522003513751645,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 2.614883225874037,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.5569174325040886,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.4018305903070499,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 5.3074741400025225,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 2.618259584214864,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 1.6522570477743497,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 2.5752386971846715,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 2.605875253955914,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 2.6488944173883673,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.9493160109641487,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 4.440482565523165,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.5382932022683056,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 1.581670996115991,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 1.5806592472810848,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 1.5919414197796027,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 2.7762049426855397,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 1.7382506629057517,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 1.5921160384299724,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.6609557258045766,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 1.5934856319730364,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 2.696854008649219,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 2.79046521066884,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 2.701677510529694,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 4.700153245286995,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 1.5833561438827966,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 2.716275840720669,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "58060eafdc69ac7a060e8b80d942246adc471f0f",
          "message": "ICU-22036 Adds ICU4J date formatting performance test, which is last of the\nICU4J performance tests.",
          "timestamp": "2022-06-29T12:02:29-07:00",
          "tree_id": "c282c6da7f45a320f8d00b465f596b5b55770b50",
          "url": "https://github.com/unicode-org/icu/commit/58060eafdc69ac7a060e8b80d942246adc471f0f"
        },
        "date": 1656542642713,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 2.5865889866712237,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.491558153146108,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.6793857884979575,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 1.5027902554835249,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 2.7039369269162887,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.3591634093091134,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 2.652191094179318,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.5128522415001142,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.4020359205163043,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 5.381061743756383,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 2.708370281358924,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 1.5009883721290125,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 2.8025938966243045,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 2.731246317238603,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 2.790888571316092,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.9543064812335845,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 4.584199439996896,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.5105106028998474,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 1.5024533164869915,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 1.4904876511604335,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 1.502535588916863,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 2.583737446390565,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 1.8030843438782682,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 1.503858391078289,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.5816854546292225,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 1.5027652251624912,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 2.628693420034403,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 2.587012859803293,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 2.6478383763943643,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 4.6284097857622655,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 1.5004631130053798,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 2.4800997585841253,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cyndy_ishida@apple.com",
            "name": "Cyndy Ishida",
            "username": "cyndyishida"
          },
          "committer": {
            "email": "cyndy_ishida@apple.com",
            "name": "Cyndy Ishida",
            "username": "cyndyishida"
          },
          "distinct": true,
          "id": "e2ae4f5324e863a92bf79892ef1a2e0d6b183af7",
          "message": "ICU-22054 Remove declarations for unimplemented APIs\n\nThis patch also includes marking `=delete` on specific `normal` member functions, as opposed to compiler generated functions,\nbased on the description of such functions' surrounding comments.",
          "timestamp": "2022-07-01T08:57:10-07:00",
          "tree_id": "fda6935be0dbf84c2fec7832622127bc05ca0b48",
          "url": "https://github.com/unicode-org/icu/commit/e2ae4f5324e863a92bf79892ef1a2e0d6b183af7"
        },
        "date": 1656692515914,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.0381672093070935,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.842476273029451,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.6853629961320276,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.398150361018323,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.016479118293647,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.7997860874673224,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.0143758142040404,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.8753734959121142,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.33562468369714776,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 6.3835577821253136,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.014078068667276,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.3875952345155675,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.014264116263308,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.0143758142040404,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.0138770008017413,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.8267832919077376,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 6.353693085569385,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.8692917273879721,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.3694662812851575,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.3871904077371155,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.36575403619991,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.0124673797811106,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.456307024034196,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.3963577046802906,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 2.9284574248740403,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.38301298958317,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.01236008239528,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.010952787238061,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.0185372920274616,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 6.339798757224832,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.3021398114679625,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.011452486631115,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "daschuer@mixxx.org",
            "name": "Daniel Schürmann",
            "username": "daschuer"
          },
          "committer": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "rp9-next",
            "username": "rp9-next"
          },
          "distinct": true,
          "id": "9f358ccb2472866a849aa4f393ef4528448c3e9d",
          "message": "ICU-22010 Add early check for AX_CHECK_COMPILE_FLAG\n\nThis helps to avoid missleading error message:\n\n```\n./source/configure: line 7981: syntax error near unexpected token 'newline'\n./source/configure: line 7981: 'AX_CHECK_COMPILE_FLAG('\n```",
          "timestamp": "2022-07-12T13:30:01+05:30",
          "tree_id": "cb81138f619f83e5a8667ed95e034c4d81ae9b8b",
          "url": "https://github.com/unicode-org/icu/commit/9f358ccb2472866a849aa4f393ef4528448c3e9d"
        },
        "date": 1657614296514,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.0263638711361063,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.810942369877974,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.684079271502572,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.07674071667404,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.014978749660427,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.5258959963757652,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.0153721412717878,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.7839144969695906,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.3352872452981286,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 6.375902871224394,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.012393535811967,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.077156147903621,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.0136055660340095,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.0127284633545828,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.0144685236088353,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.825118401593594,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 5.703649788259346,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.7838958634921331,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.0769559659864756,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.077456489631572,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.077034366324052,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.012158253272387,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.333404359249625,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.077156147903621,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.7967467907577352,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.077664318412047,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.012054957869813,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.06470385721861,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.0118647657823545,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 6.342344433484166,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.077456489631572,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.0118568867638054,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "721d41153ec4f80cd8556ac57dc023d169ef9dd2",
          "message": "ICU-22071 Fixed DateTimePatternGenerator to respect the locale's \"rg\" subtag (when it has one) when determining the hour cycle.",
          "timestamp": "2022-07-12T10:55:03-07:00",
          "tree_id": "c8298bfaaccafa158a689ec1bfd5c56a0cc8f44d",
          "url": "https://github.com/unicode-org/icu/commit/721d41153ec4f80cd8556ac57dc023d169ef9dd2"
        },
        "date": 1657649994987,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 2.581733418800758,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.4916714589515119,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.6797525790673018,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 1.4991229459969864,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 2.596149750655774,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.3611371169077136,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 2.6203807348710106,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.5551048846829627,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.40202195881155095,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 5.372585925941012,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 2.5555868934137083,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 1.4862495459794312,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 2.591623609589878,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 2.842653478598144,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 2.720755693040305,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.9500873778609703,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 4.4939531162653,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.5130144242988743,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 1.5005078555182594,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 1.4998114583174067,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 1.5038309352130468,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 2.6186964140532365,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 1.8236037962874223,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 1.4973795222708561,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.5615086608888589,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 1.4915749193492247,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 2.862139284369926,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 2.637344287785814,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 2.711430322588759,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 4.932243421876515,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 1.5018966446702726,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 2.599988906713998,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "4f6f087f2eaa4011237ee0c4e4cf2b1e47ea70fc",
          "message": "ICU-22085 Fix old typo on calculating path size in loadTestData() and add a few small changes to support running ICU unit tests in Xcode.",
          "timestamp": "2022-07-14T08:53:16-07:00",
          "tree_id": "35a3d64dc578f2aac68d1255b7f91072d95f1e29",
          "url": "https://github.com/unicode-org/icu/commit/4f6f087f2eaa4011237ee0c4e4cf2b1e47ea70fc"
        },
        "date": 1657815488787,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 2.6553081550787483,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 2.213137207951547,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.6805618289660933,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 1.657769990958833,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 2.625483044537061,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 4.742282866839388,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 2.624145270699055,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.7068818108324193,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.40201137023029565,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 5.3888416835086215,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 2.645190168360587,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 1.6435194241870172,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 2.668665960948574,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 2.6377142209813353,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 2.721829134966542,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.9535193540149834,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 4.96722175827474,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.5896525301997302,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 1.5799571264453824,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 1.5780333091542074,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 1.6466807579087308,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 2.7157773566615817,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 1.7442303135250117,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 1.573005975961091,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.6325122455568435,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 1.577975115394374,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 2.640959521539395,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 2.7471095371890426,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 2.7341567683893717,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 4.6860022783359945,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 1.5773123160755178,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 2.674267891346442,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "william.marlow@ibm.com",
            "name": "William Marlow",
            "username": "lux01"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "9a7b0e08d0bb8ed11775c76f935eabc155fdc795",
          "message": "ICU-22086 Add ibm-clang_r/ibm-clang++_r to runConfigureICU",
          "timestamp": "2022-07-14T17:38:59Z",
          "tree_id": "0fedd85fc633e091452763491c5688581ca32177",
          "url": "https://github.com/unicode-org/icu/commit/9a7b0e08d0bb8ed11775c76f935eabc155fdc795"
        },
        "date": 1657821825353,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 4.146852158589238,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 2.317012826037247,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.866906554483704,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.7175519153850924,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 4.268747079365905,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 4.557029110472314,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 4.222214965052399,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 2.1243049196019044,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.3875095647274525,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 8.542317245288052,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 4.087213734621837,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.7768479429343422,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.7390997925163654,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 4.1473820682333615,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 4.247501567014391,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.962399419279458,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 7.726217243535811,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 2.1458406886285477,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.7576632061486004,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.738958098389976,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.777815065047672,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 4.2699262976040995,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.821323311663848,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.6428240287176514,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 3.1804690712168098,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.749040109684162,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 4.23197367303008,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 4.21091777231988,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 4.228834999789279,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 7.240024274166547,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.7289925232631935,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 4.282242103306997,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "6394a48d067134a99faca4c7329accee0c580301",
          "message": "ICU-21957 integrate CLDR release-42-m2 (mid milestone) to ICU main for 72",
          "timestamp": "2022-07-14T10:56:39-07:00",
          "tree_id": "313c19455be6773aa335e6e10e0b9518d142b996",
          "url": "https://github.com/unicode-org/icu/commit/6394a48d067134a99faca4c7329accee0c580301"
        },
        "date": 1657822898636,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.2603777537676124,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 2.209271604964246,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.8734320814579797,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.6113667533582743,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.2640629266614853,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 4.206809900804879,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.4173851843762035,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 2.0876314667455733,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.3617904777337523,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 6.880670451612146,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.2538157537514807,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.57255956610771,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.2731715594357533,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.2622602074745326,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.3439581463970183,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.9092988264918562,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 6.924051731466788,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 2.0236282067222016,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.5866310481417742,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.5979243543062567,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.5745845803984397,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.2500058444980957,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.616821339532585,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.6076509843169693,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.9090984939435207,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.505919049339389,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.2779387667863022,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.271041436649558,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.2266705126337536,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 6.859537723707655,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.600249117765431,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.267670560438451,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "a8594a401f3241b19f9b8b61bf786fde917b4c72",
          "message": "ICU-22056 Add a new unum_hasAttribute() method.",
          "timestamp": "2022-07-15T16:03:56-07:00",
          "tree_id": "1db5acef8d7251a4829b61c61c686f5822486667",
          "url": "https://github.com/unicode-org/icu/commit/a8594a401f3241b19f9b8b61bf786fde917b4c72"
        },
        "date": 1657927734511,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 2.543003618462409,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.3540834209843369,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.6420112100203241,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 1.3274901988897547,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 2.543263861783329,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.3599931558631497,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 2.4599540842654983,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.2942728649880058,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.35258626578934316,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 6.736397570964882,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 2.4580827886574257,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 1.342149566962059,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 2.3463165156403067,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 2.1601629452204114,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 2.2018550894418474,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.7849060198342633,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 3.755063134036126,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.1404958217065815,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 1.1432494814245913,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 1.1331139338805536,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 1.1407362346492778,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 2.176395427621082,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 1.4207335967890387,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 1.1281691522949227,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.226736014049493,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 1.3217427875421763,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 2.5139564991804146,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 2.4893446956297787,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 2.4940803280363926,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 4.325203966352938,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 1.2962256692352234,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 2.4797431427012735,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsivonen@hsivonen.fi",
            "name": "Henri Sivonen",
            "username": "hsivonen"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "9c72bf975890a1edacce046a2e55e88023a86389",
          "message": "ICU-22087 Export a non-recursive canonical decomposition supplement for ICU4X",
          "timestamp": "2022-07-18T10:05:10-07:00",
          "tree_id": "cf9c0091bce7abf7054b71884fd644acc42cae16",
          "url": "https://github.com/unicode-org/icu/commit/9c72bf975890a1edacce046a2e55e88023a86389"
        },
        "date": 1658165581634,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 2.5496036957098824,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.4909974984790215,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.67880783359092,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 1.5028465375448816,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 2.8498961506457,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.357403818374422,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 2.6126548322298593,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.5138505132993378,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.4018994123255998,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 5.3965256028209465,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 2.6976834415111504,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 1.4986492225056631,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 2.7713866462535535,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 2.5779147825516784,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 2.855420541826559,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.954641471188698,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 4.575080042945141,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.5141467259272883,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 1.486444773912215,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 1.4919406502816883,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 1.5022384019048862,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 2.663804556072234,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 1.8234086109550731,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 1.502770926047685,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.5640528777175586,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 1.502304786478206,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 2.7020570820525416,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 2.6082928793908784,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 2.507571183327886,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 4.851802970334858,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 1.5032536438094386,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 2.6160837715112844,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "9d230f923c51bb72af9420e8cf53a019894a8e52",
          "message": "ICU-21939 Fix bogus \"conflicting fields\" error in DateIntervalFormat.",
          "timestamp": "2022-07-18T15:16:40-07:00",
          "tree_id": "c0319f3181cebd91a769eaebd21495a02b16a9cb",
          "url": "https://github.com/unicode-org/icu/commit/9d230f923c51bb72af9420e8cf53a019894a8e52"
        },
        "date": 1658184203323,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 2.7098107873285056,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.6542451234834048,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.6794058664752398,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 1.6647701331590288,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 2.8034253398866773,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 2.936021547687263,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 2.6841019392536167,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.5451427823357355,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.40198922452468916,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 5.405887115762264,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 2.603954377781867,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 1.5849511639007245,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 2.662504073827826,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 2.6001310630975683,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 2.6039640371447583,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.951693604092732,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 4.445259823894019,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.5677725088194694,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 1.5883825641309055,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 1.6328515093861748,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 1.5755107261842336,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 2.8583514921462276,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 1.7438018196518976,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 1.6006427196249502,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.6694967408054209,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 1.5756743780410327,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 2.5382961758126523,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 2.712407653236301,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 2.588462924302452,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 4.62125187799335,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 1.658368588263895,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 2.637032021076912,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "86166e0a2dd1119e086d04b8973dc486b4af8dcc",
          "message": "ICU-22075 Adds a random waiting period (0 - 179 secs) to each test that runs as\npart of a high concurrency performance test setup. This will disperse commits\nof performance test results into the data branch over a wider time frame and\ndrastically reduces the chance of data uploads failing after ten unsuccesful\ncommit attempts.\n\nTest runs showed a huge drop in failed commits/retry, from a high of 113\nwithout wait down to only 4 with the extra wait.\n\nICU-22075 Add comment explaining the rationale of the random\nsleep period prior to test execution.",
          "timestamp": "2022-07-22T08:14:58-07:00",
          "tree_id": "e00a8df1e80c75ce21faf8a38134eaaa9b3b31d3",
          "url": "https://github.com/unicode-org/icu/commit/86166e0a2dd1119e086d04b8973dc486b4af8dcc"
        },
        "date": 1658504397894,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 2.5352490681859114,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.491324908128659,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.6799452965859667,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 1.5156004230045064,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 2.735868749972071,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.3605966440920603,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 2.725232735094208,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.5715356213565312,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.4018992360228664,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 5.411641975912617,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 2.7845889242251585,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 1.489906391570637,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 2.5810411711783643,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 2.6989044903628248,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 2.638845013608087,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.9542593853487186,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 4.477601851962288,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.5132633242283766,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 1.4898131917567772,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 1.500322656509105,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 1.5646713651721653,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 2.751981453337676,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 1.8547489799830617,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 1.487954732535053,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 2.136136431728493,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 1.5094500427292372,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 2.681135628328345,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 2.7392137785412753,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 2.5454436817060646,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 4.785963391972753,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 1.5167605290276185,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 2.7336762869616997,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsivonen@hsivonen.fi",
            "name": "Henri Sivonen",
            "username": "hsivonen"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "c258f3d6f81a2514b76d72c5deae8cbc295aecd6",
          "message": "ICU-22095 Export ICU4X normalization data with tries only without Unicode sets",
          "timestamp": "2022-07-25T15:54:29-07:00",
          "tree_id": "1e4ac369923311e8ac0922960bbb1cc63650003f",
          "url": "https://github.com/unicode-org/icu/commit/c258f3d6f81a2514b76d72c5deae8cbc295aecd6"
        },
        "date": 1658791453949,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.4526482546895467,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 2.321014191508329,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.9080990523626782,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.6802015473659604,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.4715781584706273,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 6.580957650634249,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.627050546750553,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 2.2540752634977697,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.4040375920652433,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 7.292476293726738,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.383593008172816,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.7214901248814716,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.405002181190727,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.401010138801862,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.4143226180571093,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.9393770150304024,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 7.173034484697465,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 2.103750836598391,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.68491822168748,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.693423142014629,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.705535500626943,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.6113918266073037,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.862259737233368,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.6534680527708097,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 2.0844885748828714,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.875270891840652,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.634567615006251,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.440000483806737,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.553235339443969,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 7.2893515467746575,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.6692419178618243,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.4105943435546084,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "58a51495dd1c94d29cda93ffc29a904d77e50d31",
          "message": "ICU-22088 Various fixes to make dealing with NUMBERING_SYSTEM formatters easier.",
          "timestamp": "2022-07-28T16:18:01-07:00",
          "tree_id": "69c47d1745ae982673f69de39b18f9c44cdc75b7",
          "url": "https://github.com/unicode-org/icu/commit/58a51495dd1c94d29cda93ffc29a904d77e50d31"
        },
        "date": 1659051772144,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 2.5991761394559245,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.4970344843133503,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.6790698845073544,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 1.48371212271052,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 2.717947194968148,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.3532138452743054,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 2.567454858082667,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.5162401785159165,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.40205997964291357,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 5.29605749751443,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 2.6813991150804637,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 1.4886585962699073,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 2.7379312567660383,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 2.730356195492559,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 2.692727481617647,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.9528883407202929,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 4.520049549014954,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.5616520894519828,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 1.4903773795685025,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 1.4865687418184959,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 1.5032409122974444,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 2.5051175864941455,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 1.8281737737239887,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 1.4847401598781997,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.562314623099814,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 1.4928178982300344,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 2.7304218872296544,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 2.681952566855601,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 2.7480205257490384,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 4.917383193969727,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 1.4830461036043567,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 2.726028424545904,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "dcd19ae9bc0914f8be439a2de1a5fbc17e7b5447",
          "message": "ICU-21957 integrate CLDR release-42-alpha0 (first with Survey Tool data) to ICU main for 72 (#2142)",
          "timestamp": "2022-07-29T15:32:45-07:00",
          "tree_id": "6e9b3f20e3d80a16de21313da72a5cb5b6ac2361",
          "url": "https://github.com/unicode-org/icu/commit/dcd19ae9bc0914f8be439a2de1a5fbc17e7b5447"
        },
        "date": 1659135527221,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 2.592218823240144,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.397646493810216,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.6660343680148624,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 1.3752040181970846,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 2.5824897054008593,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.416261316822462,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 2.558090346789026,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.3619070692355544,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.3686454862034493,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 7.113205543233039,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 2.5527095159707276,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 1.3665583989557404,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 2.587294210929766,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 2.6063256897929254,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 2.598422517105417,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.9713245649761303,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 4.562152326223689,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.388183252457878,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 1.3575584065883197,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 1.3790694677923858,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 1.3827139446836034,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 2.5852899626261414,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 1.6889819905706462,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 1.383222604749734,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.3717741499783893,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 1.3639437847739873,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 2.578187853961839,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 2.5611740120314006,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 2.5947460562306857,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 4.541550665745433,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 1.3730163286982675,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 2.563961910829622,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "rp9-next",
            "username": "rp9-next"
          },
          "committer": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "rp9-next",
            "username": "rp9-next"
          },
          "distinct": true,
          "id": "4cf4116dadd2f34c20d9df42b1272cac7dcb30c4",
          "message": "ICU-22074 Increase the valgrind CI timeout",
          "timestamp": "2022-08-01T12:51:55+05:30",
          "tree_id": "5219374afb583705529f150783e07b0ac009b0c1",
          "url": "https://github.com/unicode-org/icu/commit/4cf4116dadd2f34c20d9df42b1272cac7dcb30c4"
        },
        "date": 1659340343820,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 2.7655465697080075,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.4562323673717397,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.7718684374455953,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 1.4460504440786357,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 2.7134746459317647,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.6546810149695736,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 2.750683138870175,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.4398335892128509,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.38878631855848406,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 7.453386664526009,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 2.7549062082822195,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 1.4404055872137755,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 2.6935881618688033,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 2.686844296163474,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 2.7182548968035656,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.969574040754168,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 4.689489515208902,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.4383941619491574,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 1.456219310471682,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 1.4306642926259543,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 1.4432687140582938,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 2.7186172377164204,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 1.8037368596729846,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 1.452279170790426,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.4248583611070578,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 1.42431333094837,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 2.7424256868248182,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 2.708998970966598,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 2.734536198348878,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 4.743766611267203,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 1.4433600539429905,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 2.7098934893280457,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "0266970e977b9e2488dfbf788cc280be3a0338ca",
          "message": "ICU-21957 integrate CLDR release-42-alpha1 to ICU main for 72",
          "timestamp": "2022-08-05T09:39:58-07:00",
          "tree_id": "ae5c1572c4ed62ac177b5a843ecc6451b53749b2",
          "url": "https://github.com/unicode-org/icu/commit/0266970e977b9e2488dfbf788cc280be3a0338ca"
        },
        "date": 1659719473256,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.015651965461988,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.8454348910846476,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.684043221624273,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.2912854699052287,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.0107743956440705,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.8619521601884106,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.0110910384312164,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.8931073889715722,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.33515911574450324,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 6.373335675495427,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.0105528470693756,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.2935865869888064,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.010921549042295,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.0108922540399945,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.01212615858382,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.8254485479981528,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 6.353317230806758,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.8522101046521153,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.2685534523056643,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.263713937255453,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.3120924331450166,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.0104503035839367,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.446240717821782,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.309448379566262,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.7521174087430667,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.2816371393353343,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.0103192442715323,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.0112267011031517,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.0159397653861326,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 6.337028439433177,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.2996888325137057,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.0105528470693756,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "d99abb6d65fd48db3bbf6aad523e7aaa793781ec",
          "message": "ICU-21957 integrate CLDR release-42-alpha1b to ICU main for 72",
          "timestamp": "2022-08-09T16:05:20-07:00",
          "tree_id": "114745d9b1092b441127d501c28853c12f8182a3",
          "url": "https://github.com/unicode-org/icu/commit/d99abb6d65fd48db3bbf6aad523e7aaa793781ec"
        },
        "date": 1660087808248,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.0159533498279147,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.811205856199187,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.684876947968562,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.0775715791332017,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.012599449932284,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.528561883818087,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.01236008239528,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.7842909995190168,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.3352655177901413,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 6.3782452859095375,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.0129011322324977,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.0774496901325548,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.012832022765865,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.0119399661475295,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.0125307395635885,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.825679173383931,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 5.69945052803496,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.7846046556938955,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.0780031326223667,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.0777952075540633,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.077664318412047,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.0122655401066876,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.3585129473699964,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.0775715791332017,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.7951410894758293,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.077447716305236,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.0124273109692017,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.0129011322324977,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.0124673797811106,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 6.349729631104034,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.0773638635184115,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.014769729496486,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "0eecb25011de051c57f68c75d767ad3586de7859",
          "message": "ICU-22101 Error prone reports \"StringSplitter\" error in PluralRules.java\n\nString.split(String) and Pattern.split(CharSequence) have surprising behaviour.\n\"a::b:\".split(\":\") produces [\"a\", \"b\"], when one would expect [\"a\", \"\", \"b\", \"\"]\n\nThe recommended fix is to use the Guava Splitter, or setting an explicit limit:\nString.split(String,int limit) and Pattern.split(CharSequence,int limit)",
          "timestamp": "2022-08-11T08:27:19-07:00",
          "tree_id": "724c7700b37e1fcbaf574d25414c4370ec250537",
          "url": "https://github.com/unicode-org/icu/commit/0eecb25011de051c57f68c75d767ad3586de7859"
        },
        "date": 1660233434843,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.7547301591557116,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 2.1642059980089043,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 2.019596116267658,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.470743370149543,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.5748202467656505,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 4.0024631806767985,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.5807856116056733,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 2.12127258605313,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.39661924174874597,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 7.566222887305394,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.5738857789196605,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.483862392527795,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.6140376932799194,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.634459270154129,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.616282410217314,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.9915247342005155,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 7.604857785018845,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 2.1346670023992913,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.48782707384507,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.488691640512656,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.4661096295671823,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.5702180485171575,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.6647952414586786,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.4621667081206455,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 2.1471369705638517,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.493085098497489,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.617034540168336,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.618896711580106,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.616674963831363,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 7.616067745374183,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.494697641268943,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.6198148110711825,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango",
            "username": "echeran"
          },
          "distinct": true,
          "id": "3ef03a408714cf0be1f6be62e3fad57757403da3",
          "message": "ICU-21947 Replace FixedDecimal with DecimalQuantity in PluralRule sample parsing\n\nSee #2007",
          "timestamp": "2022-08-11T15:10:37-07:00",
          "tree_id": "2216414cc87171c10282454fcf0a35d917a80fbd",
          "url": "https://github.com/unicode-org/icu/commit/3ef03a408714cf0be1f6be62e3fad57757403da3"
        },
        "date": 1660257440856,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.0145205112725924,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.842630613153807,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.6845463245603383,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.306080679412008,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.0127284633545828,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.796746866441554,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.0103192442715323,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.8901831064920975,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.33514517151197903,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 6.376588449698562,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.010448572275467,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.3158254770418267,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.0117734563070995,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.0122811389108324,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.011551549815316,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.8252075928170128,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 6.3883939827322225,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.8843355073218355,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.3948577675668425,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.389701019614009,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.301669443146197,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.0109255784330413,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.415192166655457,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.300875398747637,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.7521886819321848,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.3180774011932206,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.0120588765076293,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.020450293697889,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.010921549042295,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 6.364509506804582,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.303728512278833,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.010850015392417,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "8492a8291670aa0af0f3fa6c088ddaf4ff373833",
          "message": "ICU-22105 Fixed the unit-conversion logic to work correctly with negative temperature values.",
          "timestamp": "2022-08-16T10:18:24-07:00",
          "tree_id": "ade7eb2c651708551e62d475d3987927dec81353",
          "url": "https://github.com/unicode-org/icu/commit/8492a8291670aa0af0f3fa6c088ddaf4ff373833"
        },
        "date": 1660672220399,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.478931005015964,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 2.7283976021894523,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.9366523514618506,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.378813670587098,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.42191859048334,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.8402966575448017,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.4469553277954055,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 2.0489164837677087,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.38462682361317874,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 7.296377310263468,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.384961195375789,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.3488650880680906,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.3396185596425556,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.357294518527679,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.3496407397555252,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.9125139172997166,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 6.418622032423341,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.9880724465226924,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.2719478049473456,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.2438517809147367,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.3585720763419222,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.4204694142407335,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.572242037009606,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.2289189985087616,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 2.1072419101735416,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.3362796944164494,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.4632942473262642,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.57275610571509,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.5113324050468413,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 7.313793354734243,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.412460633962189,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.4714553986341268,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsivonen@hsivonen.fi",
            "name": "Henri Sivonen",
            "username": "hsivonen"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango",
            "username": "echeran"
          },
          "distinct": true,
          "id": "59615c93f694227eaacf242d22a549c316557cdf",
          "message": "ICU-22115 Merge passthrough and canonical combining class data into the NFD trie for ICU4X",
          "timestamp": "2022-08-16T15:53:56-07:00",
          "tree_id": "4f51bc73e1477d7f636740f5506076ee6756f1af",
          "url": "https://github.com/unicode-org/icu/commit/59615c93f694227eaacf242d22a549c316557cdf"
        },
        "date": 1660692254073,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 2.83652823635839,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.8103371887123756,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.6841294356258283,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.0767332951302433,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.011717979308474,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.5274159625938766,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.011757670619979,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.7835481003003986,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.3352445566741535,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 6.404545862722048,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.01177978515625,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.0775715791332017,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.017777636315092,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.0228501943680226,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.015066842702082,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.8252009381947337,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 6.370993748231651,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.7839282819408542,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.0771388049717596,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.0771072070778005,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.0769559659864756,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.0528481153983567,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.3555842442672406,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.076541584582851,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.7945176612440403,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.07674071667404,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.020295769197948,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.019189909317785,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.0384228504908317,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 6.372525264669703,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.076599374489553,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.0109356603460897,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "26733782601ec384b8070019a8121795f01000cd",
          "message": "ICU-22118 tzdata2022b updates in icu code\n\nSee #2157",
          "timestamp": "2022-08-18T19:12:31-04:00",
          "tree_id": "5db269c3b030282c375195f2c01fbe94b8459a95",
          "url": "https://github.com/unicode-org/icu/commit/26733782601ec384b8070019a8121795f01000cd"
        },
        "date": 1660866094155,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.0187296077705175,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.810085509627366,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.6845859689424554,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.076599374489553,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.0163843707730242,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.519661150387921,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.0164197618208135,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.7834786169076149,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.33512534803939864,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 6.377168987260781,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.0175287675623617,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.07653300105925,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.016956060265431,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.01063662827617,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.010751378721809,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.8255720483243899,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 5.691445200276565,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.7833558070894913,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.0765072715078907,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.076620277168848,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.0762404947898943,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.011416927931094,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.293708218570509,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.076448201922226,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.796335359154038,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.076714859958506,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.011059669193915,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.0105259761772682,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.010620396656914,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 6.366789065106013,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.076411380611297,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.0123317500308184,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andy.heninger@gmail.com",
            "name": "Andy Heninger",
            "username": "aheninger"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "b95c6b1f3eb12eb84c2dabe438fe36be55a0772c",
          "message": "ICU-21946 RBBI Break Cache Optimizations\n\nAdjust RuleBasedBreakIterator::BreakCache::populateNear() to retain the cache\nthe cache contents in additional cases where are still useful, resulting in\nimproved performance.\n\nThis change is related to PR #2039, which addressed the same problem. This one\nretains the cache contents in more situations.",
          "timestamp": "2022-08-20T16:16:30-07:00",
          "tree_id": "4d8c5b400952f14136ae2a89ba22db2a736a2745",
          "url": "https://github.com/unicode-org/icu/commit/b95c6b1f3eb12eb84c2dabe438fe36be55a0772c"
        },
        "date": 1661039090044,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.58686473012986,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.8617460610524879,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.998390516910853,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.470573911667178,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.5737999755055134,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.9975736076244264,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.565845970421969,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 2.1152679353356962,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.3967979080736541,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 7.52684273395965,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.5950702434700617,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.4650849181753887,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.572600890593083,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.5804977874230217,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.5726213119477666,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.9821692908383421,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 6.756999275901101,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 2.127067326686351,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.469156284374236,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.444247426495756,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.440286987410723,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.5460409664247927,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.801201702768622,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.3145889650517724,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 3.470530102578952,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.311812252763769,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.3416013404748237,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.331730479363598,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.3202010009591243,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 7.084538734325792,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.3161372615810345,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.405280039755737,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard.purdie@linuxfoundation.org",
            "name": "Richard Purdie",
            "username": "rpurdie"
          },
          "committer": {
            "email": "srl295@gmail.com",
            "name": "Steven R. Loomis",
            "username": "srl295"
          },
          "distinct": true,
          "id": "4ac7cd13938d44137bbf3949bcb7b63ff8bfaf23",
          "message": "ICU-22109 icu-config hardcodes build paths unnecessarily\n\nThe makefile hardcodes paths to the build directory into icu-config. It doesn’t\nneed to do this and it unnecessarily breaks build reproducibility. This patch\nmakes a simple change to avoid this.\n\nSigned-off-by: Richard Purdie <richard.purdie@linuxfoundation.org>",
          "timestamp": "2022-08-22T15:02:39-05:00",
          "tree_id": "2f9a426bc80fc925c0774e0e8263f93d45635d65",
          "url": "https://github.com/unicode-org/icu/commit/4ac7cd13938d44137bbf3949bcb7b63ff8bfaf23"
        },
        "date": 1661200355808,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 2.571271963190252,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.7215753621776708,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.6791518908464653,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 1.6956301538669116,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 2.6966700045881895,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 2.944844031394243,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 2.594106450912343,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.5424588307112703,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.40206023642016786,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 5.269722756659411,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 2.6091000086756315,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 1.59432773420796,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 2.806123150124058,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 2.717999509715448,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 2.642082363660011,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.9546170006944358,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 4.663501387513055,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.535899988935741,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 1.6530284600371363,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 1.5817956852915631,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 1.686674417435513,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 2.7296438018019957,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 1.7380768725975229,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 1.624673560708717,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.6526033473951152,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 1.5771741213753139,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 2.601219307744707,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 2.59618843263293,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 2.7528058142838026,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 4.956261620320559,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 1.580714118390493,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 2.7346899087195222,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "ca9bdb97801cb1d0383c36b66b43bf0587b7697a",
          "message": "ICU-21957 integrate CLDR release-42-alpha2 to ICU main for 72",
          "timestamp": "2022-08-22T13:07:59-07:00",
          "tree_id": "b48551e7f45f096b68a791d5158448659d5c0d62",
          "url": "https://github.com/unicode-org/icu/commit/ca9bdb97801cb1d0383c36b66b43bf0587b7697a"
        },
        "date": 1661200723386,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.0145324246088037,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.8109726149383079,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.6849720902018446,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.0773716065640193,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.0118647657823545,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.527120046141376,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.012508849735358,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.7842938823084677,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.33542362483372545,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 6.375893808499081,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.011416927931094,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.0770354766644332,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.0106091360183136,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.01158329139282,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.0169801174096915,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.8251829306309509,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 6.370409075936652,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.7834693575405125,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.0768070759672974,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.077014777445042,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.07674071667404,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.0141636072052553,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.2402709300477093,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.0768267044198003,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.7942333372839125,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.07662517450967,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.0112621517835985,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.0105137737989542,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.0110363841576855,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 6.341232564921232,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.07674071667404,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.012054957869813,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "allenwtsu@google.com",
            "name": "allenwtsu",
            "username": "allensu05"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "8c669a7c2e6da8a1fbff1c5054bfffccb115c769",
          "message": "ICU-22012 Add more Japanese words into the dictionary",
          "timestamp": "2022-08-23T10:18:45-07:00",
          "tree_id": "9f7136671717ceea712b975ae541f65937d4ab53",
          "url": "https://github.com/unicode-org/icu/commit/8c669a7c2e6da8a1fbff1c5054bfffccb115c769"
        },
        "date": 1661277013886,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.0161207383683695,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.8109909145441465,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.6848116216562647,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.077730650961866,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.01212615858382,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.5215841162362955,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.0124596197809685,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.784361515365905,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.33534878757346687,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 6.383570696132048,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.0124933117453483,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.0775715791332017,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.012534611853665,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.014156303151514,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.014048216765431,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.8260922608230865,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 5.6971174382325955,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.7843708769772235,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.077522836333844,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.0775794268527914,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.0773638635184115,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.0125218763619523,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.308003683227989,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.0775794268527914,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.795510684742647,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.0774096645441515,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.012158253272387,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.0197548120919073,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.012567007834881,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 6.382331132249602,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.0775715791332017,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.012293866413572,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "49d192fefe09fcc38547203487cf4e63d2dad61f",
          "message": "ICU-22112 word break updates for @,colon; colon tailorings for fi,sv\n\nSee #2159",
          "timestamp": "2022-08-23T12:45:55-07:00",
          "tree_id": "860bf4fdbcdb8953fab05089e4b3d0b92fbd27bc",
          "url": "https://github.com/unicode-org/icu/commit/49d192fefe09fcc38547203487cf4e63d2dad61f"
        },
        "date": 1661285780806,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.022842092662246,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 3.31100071255786,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.4874976292867066,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 1.5712953457903447,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 2.6588251108173413,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 4.7643798172284,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.013050885664648,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.7731214727508524,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.3354903144521076,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 6.377168987260781,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.012843548137374,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 1.7833392317104075,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.0130623527981317,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.013486533524242,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.014338438777248,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.7292369401363912,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 5.027933163154968,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.567092627798766,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 1.7795623340154,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 1.7786220401681712,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 1.679941772228927,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 2.6586015601868787,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 1.6662011036137505,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 1.570632995812751,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.566586343838854,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 1.5717943730696748,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 2.658269103893289,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 2.6586015601868787,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 2.6585026693207774,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 5.596589164757703,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 1.5711926951755517,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 2.658535010575683,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "37e295627156bc334e1f1e88807025fac984da0e",
          "message": "ICU-21957 ICU4J API status and change report",
          "timestamp": "2022-08-26T11:33:50-07:00",
          "tree_id": "22673db46dd386a73e7498417bba169e1e62c780",
          "url": "https://github.com/unicode-org/icu/commit/37e295627156bc334e1f1e88807025fac984da0e"
        },
        "date": 1661540669682,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.015198977360337,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.8110096586254185,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.686056833786467,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.077785474216056,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.01390318845303,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.5289125093212403,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.0118647657823545,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.7846234290031868,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.335418087765019,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 6.377188401894763,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.012432435624889,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.077664318412047,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.01276098628955,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.0132661950717137,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.0125645798187852,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.8269075380018349,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 5.714471950918277,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.784761269989612,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.0778146686605927,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.0781462802179096,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.077890729823632,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.013966452323876,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.3568898019461977,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.078098581252043,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.7960183157933471,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.0778721471925223,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.0127686867804884,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.0127571349033127,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.013391821390566,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 6.36715514597485,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.0781462802179096,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.0139029022493915,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "3e6219ba4d309acb7f48deca96100127ade8d084",
          "message": "ICU-21957 BRS72 organize import statements",
          "timestamp": "2022-08-30T19:34:01-04:00",
          "tree_id": "b0d2f65c1c26b0904a5b30ddac24f9151758e67f",
          "url": "https://github.com/unicode-org/icu/commit/3e6219ba4d309acb7f48deca96100127ade8d084"
        },
        "date": 1661904387087,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.024712193168473,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.8101286377480077,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.6837969956686927,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.07653300105925,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.011539538336532,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.5197428175170695,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.010620396656914,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.7833697454903685,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.33512559983292883,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 6.381620183422778,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.0105137737989542,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.076318658934049,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.010624455762931,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.01063662827617,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.0108269384861934,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.8253912183496106,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 5.704657127461329,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.783462392411445,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.07653300105925,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.076391673011808,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.07653300105925,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.016917091641483,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.3598792824172614,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.076599374489553,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.794402002797465,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.07674071667404,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.0113611369221083,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.016623237273006,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.011456464732328,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 6.338441769595676,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.0769484322888307,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.012031429787502,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "3d935f2d493bc613d9884a7878d04fb5515f5005",
          "message": "ICU-21957 BRS72 Updating currency numeric code data.",
          "timestamp": "2022-08-30T19:34:49-04:00",
          "tree_id": "f1ca2d572a984c9eac3146ef873f3cd4e95cdb74",
          "url": "https://github.com/unicode-org/icu/commit/3d935f2d493bc613d9884a7878d04fb5515f5005"
        },
        "date": 1661905379596,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.031639244890356,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.8100088310904814,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.683798150563007,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.076599374489553,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.010921549042295,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.5261700013363964,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.011539728954585,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.7834322832955873,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.33515911574450324,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 6.372054006564118,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.0107230403499288,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.0764126774210556,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.010620396656914,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.0127438631924717,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.010652847091435,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.8253767683699325,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 6.3564538816877025,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.7834948254870129,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.0761839715340638,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.076411380611297,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.076383122427021,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.0108148251763343,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.3565214833487236,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.076448201922226,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.7942648991105556,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.076299683057275,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.0127284633545828,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.0178306109921467,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.0105137737989542,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 6.361972760703915,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.07653300105925,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.0112501535433167,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "5334e2819d769c5992dae2c07a999b90e26db308",
          "message": "ICU-21958 ICU 70 API Promotions",
          "timestamp": "2022-08-31T15:38:22-07:00",
          "tree_id": "3e789d667b6ae477513c5444f8705583ac00b853",
          "url": "https://github.com/unicode-org/icu/commit/5334e2819d769c5992dae2c07a999b90e26db308"
        },
        "date": 1661987281815,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 2.6809313263948087,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.4235741603924073,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.7269803888078792,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 1.4049954750081217,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 2.66329902272182,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.5176654887586785,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 2.658891507572293,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.4012085344884075,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.3799043012653081,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 7.288343035179285,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 2.6714105831740897,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 1.4097920898810377,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 2.6720865288600053,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 2.7263171998218927,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 2.7212407789457687,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.9681273057062618,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 4.671467797984705,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.4130915224535976,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 1.411721121978566,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 1.4068814397211253,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 1.4096900628188624,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 2.6458427992057083,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 1.7491495438586413,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 1.4184210855500394,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.4080280623688082,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 1.401863011517354,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 2.648149217878069,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 2.6563139819231494,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 2.660067989302316,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 4.676371967564829,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 1.405878082634314,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 2.6561905951278355,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "8050af54847348504a879564c28008203510201d",
          "message": "ICU-21980 Unicode 15 update 2022aug30",
          "timestamp": "2022-08-31T16:15:42-07:00",
          "tree_id": "95cbedfa8185c379bfc37eb45bca48716bae6869",
          "url": "https://github.com/unicode-org/icu/commit/8050af54847348504a879564c28008203510201d"
        },
        "date": 1661989607943,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.0180660874465803,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.8105857789637403,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.685092103935628,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.07653300105925,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.011456464732328,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.5264678570654686,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.0115238538130575,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.7837565975591223,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.33527799446241674,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 6.3782452859095375,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.0159745530470894,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.07674071667404,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.01212615858382,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.010797454424381,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.0111552588446773,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.8263699829235805,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 5.704145561670406,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.7834739776024864,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.0769484322888307,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.076691577821757,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.077222478922786,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.0120588765076293,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.327951038981239,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.0765256840840443,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.7969285086976374,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.077222478922786,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.0112621517835985,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.0128607906827387,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.0122655401066876,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 6.345560819250407,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.077156147903621,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.012257736080921,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "9acba58c493123234b9c3ed4326d35d8f73cbcc1",
          "message": "ICU-22116 Updating minimum Java runtime support to Java 8",
          "timestamp": "2022-09-01T13:02:27-04:00",
          "tree_id": "3effaf2286da632e64849215f3216eb05a4448f1",
          "url": "https://github.com/unicode-org/icu/commit/9acba58c493123234b9c3ed4326d35d8f73cbcc1"
        },
        "date": 1662053597824,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.014469142957412,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.8104537835337822,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.6842979665410316,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.0770332553185877,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.0116546041354253,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.527721335491464,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.014264116263308,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.7839096510093848,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.33527321111644265,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 6.374627052740907,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.0113611369221083,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.0768267044198003,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.0124557386313136,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.0122655401066876,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.0119281731590353,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.8251987463569419,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 5.696128513700164,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.7834299540272467,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.076411380611297,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.07648631459357,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.0763252854444594,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.0115634587829767,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.302305236202458,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.07674071667404,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.7949510622934262,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.0772409794165294,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.012949192096988,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.011717979308474,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.0111552588446773,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 6.362671720993073,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.076714859958506,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.0115277106967806,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "4ab713b1c6fb604d3854e7781bee2051878d6814",
          "message": "ICU-22081 Added missing copyright notice to PersonName.java.",
          "timestamp": "2022-09-01T13:36:05-07:00",
          "tree_id": "30653b09944911ad017a064338ff8254052c36ae",
          "url": "https://github.com/unicode-org/icu/commit/4ab713b1c6fb604d3854e7781bee2051878d6814"
        },
        "date": 1662066337836,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.0139290957937113,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.8110407394768286,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.684976243189421,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.299409423868958,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.0284642606004657,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.797412126394214,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.013689499818807,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.845001801399423,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.33532078072974475,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 6.400127179660955,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.024737363722522,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.2971067658192057,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.0119281731590353,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.012825741238414,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.0235668926921857,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.8262330347521917,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 6.4069172026616545,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.8770679214101587,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.2752603951329795,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.380685135465034,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.2958530064700335,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.0149782838573858,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.4197074297096925,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.256089178337151,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 2.8288654264109705,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.395733815028617,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.0151791427755126,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.0136726077786227,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.0234029070153086,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 6.34097739986654,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.3554217383049227,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.0154697013513045,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "baa104b50b51218b35e4bd629aa45f3ea88a4a96",
          "message": "ICU-21957 Clean-up of TODO and logKnownIssue entries (BRS task):\n\nRemoved logKnownIssue(ICU-21322) in plurults.cpp, ICU-21322 is done and the\nentire if-statement was commented out.\n\nReplaced CLDR-13700 with CLDR-13701 in several TODOs. 13700 is a duplicate of\n13701.\n\nLikewise for CLDR-14502 --> CLDR-14582.\n\nPR#1999 from ICU 71 release missed some of the cases.",
          "timestamp": "2022-09-02T09:54:57-07:00",
          "tree_id": "91b7432c24997b436155399ab6c285c33f6ed5ee",
          "url": "https://github.com/unicode-org/icu/commit/baa104b50b51218b35e4bd629aa45f3ea88a4a96"
        },
        "date": 1662139409644,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.0242237897504047,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.843719663034157,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.6843023874632905,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.311207311064615,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.0111158765537143,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.7925088698965324,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.0116626046503012,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.8855467025203982,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.33521987512781914,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 6.454419126926142,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.0166434443645396,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.3097194043402234,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.0115872078817794,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.0112621517835985,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.0110524538596812,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.8253797535742508,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 6.345829381885263,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.8404995999857503,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.3369619887375497,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.305862898831507,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.343672509300681,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.017226924132576,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.4191324127330422,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.3013473819148897,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.8934111804866323,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.1863326418074798,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.010921549042295,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.0112936483260384,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.0119399661475295,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 6.3455152886153945,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.2921083047072965,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.013825338950133,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango",
            "username": "echeran"
          },
          "distinct": true,
          "id": "6e3a9230563b97cb925723a6d9e91888396f2035",
          "message": "ICU-22116 Update CI job for ICU4J to use Java 8 instead of Java 7\n\nSee #2173",
          "timestamp": "2022-09-06T09:09:22-07:00",
          "tree_id": "c82f414f17d7a8f69e9a123155d5900893e5f77e",
          "url": "https://github.com/unicode-org/icu/commit/6e3a9230563b97cb925723a6d9e91888396f2035"
        },
        "date": 1662482253995,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.0251675918012166,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.8096930704958667,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.683728448275862,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.076205077673263,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.0105137737989542,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.525220088289936,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.0156162729344196,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.7832193472337419,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.33513586118838773,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 6.371732049051624,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.0108269384861934,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.076456767777033,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.0105137737989542,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.01403343125506,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.0105137737989542,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.8257322630701711,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 5.710557995632412,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.7832956123682027,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.0760920946066594,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.0760920946066594,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.0762333253613945,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.0130334371238137,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.3533549462011525,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.076299683057275,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.7939590800011465,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.0762037187070455,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.0105137737989542,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.0132509698606196,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.0108540529570265,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 6.363616585258592,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.076391673011808,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.012557829549042,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "00003dcbf2065d79fa45f8d53ef779861f71adb5",
          "message": "ICU-21957 Update TODO ticket reference: CLDR-13044 (done) ---> ICU-21420 (open).",
          "timestamp": "2022-09-06T09:14:07-07:00",
          "tree_id": "4d26f8c373ecc777e50d8ad362170299340629a3",
          "url": "https://github.com/unicode-org/icu/commit/00003dcbf2065d79fa45f8d53ef779861f71adb5"
        },
        "date": 1662483080928,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.610697409467909,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.8339598953996508,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.9551718329665952,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.748572780859996,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.5267513596268376,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 4.464137194839476,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.5745343668610157,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 2.133457289407786,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.3835046299245138,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 7.51105920138023,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.5013583461934155,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.699447581123772,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.5306668638604726,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.5142239357877303,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.488489990044137,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.9713108479728746,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 6.573921453516378,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 2.203717948340413,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.715312761108186,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.7304658482182576,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.796026778742611,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.3942802802666083,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.8498380103452092,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.736839926714729,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 2.0386622892858806,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.7630608264491836,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.5864252538345216,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.5378262055239396,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.5450218752935787,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 7.434235430093007,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.7429621369800077,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.5152394810873506,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "030fa1a4791ee7c2f58505ebb61253c3032916ec",
          "message": "ICU-21148 Consistently use standard lowercase true/false everywhere.\n\nThis is the normal standard way in C, C++ as well as Java and there's no\nlonger any reason for ICU to be different. The various internal macros\nproviding custom boolean constants can all be deleted and code as well\nas documentation can be updated to use lowercase true/false everywhere.",
          "timestamp": "2022-09-07T20:56:33+02:00",
          "tree_id": "849f746cda1267d213f8ae31b557ea7d847f3acc",
          "url": "https://github.com/unicode-org/icu/commit/030fa1a4791ee7c2f58505ebb61253c3032916ec"
        },
        "date": 1662579001595,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.015900231682953,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.8115283643644646,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.6858844862679714,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.078402441592363,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.0129624941705817,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.527990681441076,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.0124673797811106,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.7846234290031868,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.33545163292831187,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 6.376540780466137,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.0131990027917013,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.0784956335339486,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.0129088130880723,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.0152946254443567,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.0123027192165104,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.8262344723100751,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 5.6964778405165974,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.7846056557632444,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.0778721471925223,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.077522836333844,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.078287804753473,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.0133637193067133,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.245855150348827,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.0784949596293494,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.7960286266737786,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.0779934191194007,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.0121660727817328,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.0118647657823545,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.013029615739964,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 6.341389077439722,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.0780799759729978,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.013137118776036,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cyndy_ishida@apple.com",
            "name": "Cyndy Ishida",
            "username": "cyndyishida"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "03b94e9cb3045072c73d50938ee0e14597d24ce0",
          "message": "ICU-22068 Cleanup inconsistent annotations between declarations and definitions\n\nThis cleans up inconsistent annotations between declared APIs in headers\nvs defined implementations in cpp's. This better ensures the API's\nreferenceable in headers represent what is exposed and defined in the\nultimate binary library's symbol table.",
          "timestamp": "2022-09-08T08:34:56-07:00",
          "tree_id": "a65dc75f11c10725ce59a87a1d3376169142f030",
          "url": "https://github.com/unicode-org/icu/commit/03b94e9cb3045072c73d50938ee0e14597d24ce0"
        },
        "date": 1662652972099,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.5497889609449222,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 2.4533285461099497,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.970363653213489,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.828914977565387,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.5505017416856117,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 4.545955681856318,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.5482896935726598,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 2.2001374299513445,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.39972770443937394,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 7.587994421531961,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.5941465437006173,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.7767642513736264,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.553334546986891,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.5486302953744095,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.5264835146520412,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.9683284476658428,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 7.470117755131388,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 2.1923156175101486,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.7967584211143404,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.792018094712278,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.798381443553056,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.533141292218848,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.850222317569658,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.797141817574985,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 3.3381820771438218,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.790037026831338,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.5574967473666304,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.530991671614426,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.545644578000453,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 7.431598188693779,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.8163850999211824,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.5367768856668587,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "rp9-next",
            "username": "rp9-next"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "bebcd6b8bb3239b2288fcf279ad1a1b5b3b68d1d",
          "message": "ICU-22114 Update pipeline workflows to use macOS-latest",
          "timestamp": "2022-09-08T09:02:31-07:00",
          "tree_id": "6d3af8477fed20b557199ee7fe82c616f56eb3b8",
          "url": "https://github.com/unicode-org/icu/commit/bebcd6b8bb3239b2288fcf279ad1a1b5b3b68d1d"
        },
        "date": 1662654791258,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 2.351771967497767,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.2453683765047852,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.4822780704225786,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 1.1988289991046965,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 2.2823887752281795,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.126296232003911,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 2.285140711043165,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.2299293586134568,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.3262442562817024,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 6.515039368269759,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 2.2636567977579802,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 1.2007796379675184,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 2.3210423164361944,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 2.289896767672401,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 2.274882970791248,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.8251682835819584,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 3.979802178757475,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.226935480762475,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 1.2176181806651094,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 1.210777737130192,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 1.2093610390491465,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 2.3145758399689975,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 1.5021434789261765,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 1.2010833595047137,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.2015720836347075,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 1.210776450440221,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 2.2679401239804466,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 2.3150632164682308,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 2.338736455915327,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 4.0435268812029435,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 1.3035924122160147,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 2.3389924426204844,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cyndy_ishida@apple.com",
            "name": "Cyndy Ishida",
            "username": "cyndyishida"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "48124d170635f4abcd7440c5beeb6ea9878de32b",
          "message": "ICU-22072 Update Darwin Specific Macros\n\n* Update `U_PF_IPHONE` to be 0 when building for macOS/macCatalyst.\n* add macro definition for `attribute((visibility(\"hidden\")))` for cases\n  where internal structs exist within exposed classes.",
          "timestamp": "2022-09-08T09:08:57-07:00",
          "tree_id": "0dafe5b7ad2082eb0fdf56246a27bbef07669cd9",
          "url": "https://github.com/unicode-org/icu/commit/48124d170635f4abcd7440c5beeb6ea9878de32b"
        },
        "date": 1662655502132,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.0153571886387622,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.8101991082154298,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.6848727532296028,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.076599374489553,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.0127284633545828,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.5275808926043113,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.0162196375348467,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.7842615195405187,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.33528431251373325,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 6.3752649619826505,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.017631277832756,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.0769484322888307,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.011527823773262,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.0115634587829767,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.0121660727817328,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.827061533843919,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 5.6956875285958395,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.7837450381240136,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.0775715791332017,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.0773695844093676,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.078258753631691,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.0132637000582325,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.326738848324536,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.0773716065640193,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.7951411000354232,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.0773638635184115,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.013765372585466,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.012949192096988,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.0128684755630744,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 6.376494834659729,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.0768278769166404,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.0113535289975535,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "1de1e36d6f6050d05b2db027f4c64ae6823eae2a",
          "message": "ICU-21957 integrate CLDR release-42-alpha3 to ICU main for 72",
          "timestamp": "2022-09-08T18:19:10-07:00",
          "tree_id": "43c37bedd13165396856bfd9fd7a067a73e93291",
          "url": "https://github.com/unicode-org/icu/commit/1de1e36d6f6050d05b2db027f4c64ae6823eae2a"
        },
        "date": 1662688192694,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.5179038109237766,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 2.3750073568726657,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.9787430212019839,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.783892800433367,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.551402408161326,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 4.429087919347427,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.5026771726583115,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 2.154368405674754,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.3905357346892139,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 7.402867677455904,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.499518631963974,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.720944413882144,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.484693139772391,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.499951548424384,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.5010200498055326,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.9548896965291119,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 7.365977446984424,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 2.1728704183546332,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.7039219629377604,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.76343389191604,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.750916005955715,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.509747896899344,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.8106436868137465,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.761551548956381,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 2.032196902546256,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.7707397263731823,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.5154878934831872,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.5274946943473826,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.4935532710479364,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 7.356613766586248,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.7472841948498106,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.4991893708905293,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "d3a753a0d4a3e6e9d4b5392ec7a0777d229c71f5",
          "message": "ICU-21957 BRS 72rc, update urename.h",
          "timestamp": "2022-09-08T18:19:30-07:00",
          "tree_id": "0c076a705771be959218146920f7658d04800557",
          "url": "https://github.com/unicode-org/icu/commit/d3a753a0d4a3e6e9d4b5392ec7a0777d229c71f5"
        },
        "date": 1662688675732,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.025700029971588,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.8098244378635662,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.6855217236208793,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.0778721471925223,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.0127686867804884,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.5257384696281946,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.013828676100101,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.7844449845047363,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.335351369376236,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 6.377816598949623,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.0133511723078596,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.0773638635184115,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.0134600612957017,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.0124596197809685,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.011753722250464,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.8269902535703056,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 5.716685969348327,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.7842248086343144,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.0774750269668107,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.076537804795991,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.0765256840840443,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.012607190421831,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.2419456006471417,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.076655909054558,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.7946028268420093,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.076619042515549,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.0112227014276765,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.012843548137374,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.010735190161071,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 6.337807862027959,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.0762404947898943,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.0123561934891616,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "5de6ee0c61b38feb4e35b842bc81d9d8030d2afa",
          "message": "ICU-21959 fix DateIntervalFormat general usage example",
          "timestamp": "2022-09-08T18:59:19-07:00",
          "tree_id": "0397c38bdb1077ee68baebac985ebe4ad514188a",
          "url": "https://github.com/unicode-org/icu/commit/5de6ee0c61b38feb4e35b842bc81d9d8030d2afa"
        },
        "date": 1662690985274,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 4.5760528112319525,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 2.516573313243198,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 2.0216090861787728,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.8084844802012423,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 4.441128140447915,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 4.6412943270167055,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 4.419226693470051,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 2.2402138017191358,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.4025896463822312,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 8.461384029271933,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 4.555839093370131,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.820487488868143,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 4.494263445178629,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 4.546797259387337,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 4.4375004544000465,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.9922804291586981,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 7.658089410636378,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 2.235121181986942,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.8318128126200737,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.7508732265107785,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.816942237666067,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 4.4382994031547085,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.8424139902722416,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.8266662408353063,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 3.406262854388283,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.8464530493927933,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 4.491239477373973,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 4.52463022967446,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 4.44215896655023,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 8.011004999291757,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.8002189185788584,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 4.493192738399405,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44496574+floratmin@users.noreply.github.com",
            "name": "floratmin",
            "username": "floratmin"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "1dfe456fe8a98de1f8ea966c45ef157f16160da6",
          "message": "ICU-21983 Fix fraction precision skeleton\n\nSee #2058",
          "timestamp": "2022-09-08T20:17:48-07:00",
          "tree_id": "3d308762dd0f304b04e153e238616d745d769ee9",
          "url": "https://github.com/unicode-org/icu/commit/1dfe456fe8a98de1f8ea966c45ef157f16160da6"
        },
        "date": 1662695396250,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.0409596907292276,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.8381149967590746,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.68444025239561,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.2774654350011274,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.0108148251763343,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.794752874204862,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.0115238538130575,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.8830660872508191,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.3352201744348963,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 6.3745703941353185,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.014107861433352,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.284438948616881,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.010624455762931,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.0119399661475295,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.011349161623024,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.8259799827490922,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 5.696698126551534,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.855945175930548,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.366458746425355,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.2885617680036003,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.283557347319367,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.010620396656914,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.417442919404756,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.279779282920322,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.893221877229235,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.339673204685467,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.0112621517835985,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.010836747751567,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.0158462298831186,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 6.363767698668161,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.2904989948823515,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.0110524538596812,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "baee21aa7ac4ad952dd93c3430326f35cc54941b",
          "message": "ICU-22125 Add note about future deprecation to MeasureUnit createMetricTon/getMetricTon/METRIC_TON",
          "timestamp": "2022-09-08T20:59:07-07:00",
          "tree_id": "0de5e44d6f2ee5329452d8a04fed8b26ad09528d",
          "url": "https://github.com/unicode-org/icu/commit/baee21aa7ac4ad952dd93c3430326f35cc54941b"
        },
        "date": 1662698231514,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.5377645311297545,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 2.770085346331937,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.9981130475915934,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.4655692225567916,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.5610561704777384,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.9750055554872854,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.564523930120919,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 2.124074709000619,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.390923201556959,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 7.509683692938549,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.544888501293214,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.4513624307462347,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.55919950960283,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.538061317890244,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.557390681935089,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.9830903366963277,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 7.385636628937743,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 2.1104683306734717,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.4401969488572037,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.4697415789277484,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.4703814109973914,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.570762777387971,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.741148828795313,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.474271029273603,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 2.1256394589893253,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.466482442211841,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.573436282726221,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.601996584321261,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.6098042691748407,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 7.62786544125476,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.484266563804036,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.583315316680232,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "b9fdd2a7cfcf77454762ce9479bdfc40fe14168e",
          "message": "ICU-22025 Rename the enum type for Hebrew calendar to Month",
          "timestamp": "2022-09-09T01:29:06-07:00",
          "tree_id": "7fa42099194411991193f0d32c484edf4a92baa6",
          "url": "https://github.com/unicode-org/icu/commit/b9fdd2a7cfcf77454762ce9479bdfc40fe14168e"
        },
        "date": 1662713862366,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 2.5824819028547137,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.3361733081220653,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.5252090233366973,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 1.288046952530495,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 2.414379217501754,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.16651964081354,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 2.5428803369341564,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.3730528100638433,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.3513911919586391,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 6.576735260785744,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 2.4477898746731586,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 1.199850549925434,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 2.545997010710094,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 2.4615399666092093,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 2.5454302609637502,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.8815115910921643,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 4.206939702228102,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.2430864715150605,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 1.2275396467997421,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 1.382311295299815,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 1.3525789068123086,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 2.619213291614636,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 1.7822966097236383,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 1.4107024036091467,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.4159994572122168,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 1.4011987455865549,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 2.6124940153915266,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 2.4468910274551123,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 2.4958604740930457,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 4.307657890511007,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 1.3280600062744583,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 2.5473683150773194,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "e4df3043677bf7fc10ec03c8cc37142fc46a7fda",
          "message": "ICU-21957 Update double-conversion to 256ac809561b756645e73ab7127c2aaaeabaa427\n\nSee #2179",
          "timestamp": "2022-09-09T15:47:12-07:00",
          "tree_id": "ca2a638aaa9226a53a37118d05ee384d7996789f",
          "url": "https://github.com/unicode-org/icu/commit/e4df3043677bf7fc10ec03c8cc37142fc46a7fda"
        },
        "date": 1662765906650,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 2.487640649664024,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.7093552369336151,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.678816060468296,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 1.58132849936723,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 2.5366202007703915,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 2.945418417104729,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 2.597308608595412,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.550387957196154,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.40180198411097867,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 5.276147360509783,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 2.5649718306313165,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 1.6260889861632952,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 2.6736328297980694,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 2.844763433655587,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 2.82180933777325,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.9510942153370413,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 4.497602278052038,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.6177786883252419,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 1.6406375882489141,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 1.6850590370621028,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 1.5774346253793088,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 2.707564491502555,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 1.7433684336114252,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 1.693494073275862,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.6324819440416345,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 1.5687782616230332,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 2.721840979210335,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 2.8203119248639266,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 2.54274566130266,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 4.59417315540428,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 1.6142957375647164,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 2.564687548355484,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "krlmlr@users.noreply.github.com",
            "name": "Kirill Müller",
            "username": "krlmlr"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "a48ae42864e8fcb702a5dfb6f6a076e4dde7e397",
          "message": "ICU-22117 Replace uprv_strncpy() by uprv_memcpy()\n\nThis fixes a warning on gcc 9.4.0, which is triggered because the third argument to strncpy() depends on the length of the second argument (but should actually indicate the buffer size). Replacing by memcpy() seems harmless because a null terminator is appended further below, and the buffer is sized to be \"large enough\" elsewhere.\n\nSee https://github.com/duckdb/duckdb/issues/4391 for details.\n\nFixing the warning is important for us, because the checks in the duckdb repository treat all warnings as errors.",
          "timestamp": "2022-09-09T17:07:53-07:00",
          "tree_id": "5204a95a33d0eb3b78a5a30a3fee3cee294a0da7",
          "url": "https://github.com/unicode-org/icu/commit/a48ae42864e8fcb702a5dfb6f6a076e4dde7e397"
        },
        "date": 1662770971337,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.0211084420822036,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.8108044412987983,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.684466497456235,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.077456489631572,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.0116626046503012,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.5281294193051154,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.012158253272387,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.784271565523828,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.33544907916130645,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 6.377607269976167,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.020402894958576,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.077664318412047,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.019391049478344,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.0127686867804884,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.015581685116813,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.8257992954983331,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 5.710905177053692,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.7841067640100827,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.077040832070621,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.0772486608510965,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.077156147903621,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.0137616183917983,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.35606032093447,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.077658275907811,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.7955002275485437,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.077890729823632,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.014066899886375,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.0136726077786227,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.0129624941705817,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 6.385957933019629,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.077156147903621,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.014368427187284,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "99dee47fb783b1839af5cc742797ba5cdf8924ac",
          "message": "ICU-21959 add the uemoji feature to ICU Data Build Tool chapter",
          "timestamp": "2022-09-12T08:57:06-07:00",
          "tree_id": "5d7f297d26373540044bd9d1355a8b92bf240108",
          "url": "https://github.com/unicode-org/icu/commit/99dee47fb783b1839af5cc742797ba5cdf8924ac"
        },
        "date": 1663000059499,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 2.4591231601349577,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.3171611867092825,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.5942951867422854,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 1.3195687092109325,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 2.4831357708020287,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.2546011649404227,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 2.4392673308899386,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.307374486668446,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.35161693944188366,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 6.7719765572986015,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 2.478767084226491,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 1.3045914501757567,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 2.4734956566511026,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 2.4507233786858245,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 2.4622771185387675,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.9204787982329885,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 4.314659677802655,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.329101613593705,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 1.3211780287161725,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 1.3131899787242383,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 1.3040275883041772,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 2.469954827330777,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 1.6267054820975397,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 1.3060811077451706,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.3212939346674284,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 1.3046025898487128,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 2.4500650317702015,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 2.4621600898377127,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 2.4815826391783786,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 4.287895274767912,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 1.3102887407016075,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 2.4957972803836794,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "cfd99f3f3f309fc224a43377395085bea58b58cb",
          "message": "ICU-22143 Increase COMPACT_MAX_DIGITS from 15 to 20, needed for new ja data",
          "timestamp": "2022-09-12T17:17:19-07:00",
          "tree_id": "587d6e1872cc987a2bd6e5d4d8f00882be138e94",
          "url": "https://github.com/unicode-org/icu/commit/cfd99f3f3f309fc224a43377395085bea58b58cb"
        },
        "date": 1663030208253,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 2.543918280728446,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.373366092256361,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.635221302828389,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 1.3345855672872244,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 2.5797465734504024,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.446487275019102,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 2.557889721550364,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.3652622193925255,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.36663411277715724,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 7.016483637465057,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 2.542121128410144,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 1.3371846299264474,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 2.554968407055255,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 2.5506346600923275,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 2.5483906954411033,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.9230309271129993,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 4.4284030818189315,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.3700014996047898,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 1.3588542256111362,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 1.3561728652637017,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 1.353170081636908,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 2.5585129247155995,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 1.6921320657264636,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 1.3691402839787299,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.319839836476809,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 1.386639685020206,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 2.5019533690186155,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 2.5415606016221055,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 2.507022658127216,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 4.488765193114511,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 1.3284364122501684,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 2.521058686104366,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "06259cc6c33d220108d68818a9cdaec8942f9552",
          "message": "ICU-21957 integrate CLDR release-42-beta1 to ICU main for 72",
          "timestamp": "2022-09-13T11:18:37-07:00",
          "tree_id": "cb8a27062497043f6cc5be9122738e0d43981cad",
          "url": "https://github.com/unicode-org/icu/commit/06259cc6c33d220108d68818a9cdaec8942f9552"
        },
        "date": 1663095018956,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.437080082904191,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 2.1029829854463973,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.9055474121038416,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.693156548352794,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.4008093904926953,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 4.326113312673687,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.393924597537879,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 2.107448951717544,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.37900296600906985,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 7.179015323655366,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.4148916252089356,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.685549088744741,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.403124934692655,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.3963742515738575,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.408164035720604,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.931912937148388,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 7.160137676091739,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 2.1018933076528734,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.6891018401791698,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.6885575777746635,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.718625838937353,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.421947823717876,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.8348589525277257,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.6262107702087794,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.9671803119068745,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.6951714247409533,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.5158745755737124,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.562542359146629,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.3954126126602087,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 7.223385175297576,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.6105398155120483,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.4131456931533437,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "06259cc6c33d220108d68818a9cdaec8942f9552",
          "message": "ICU-21957 integrate CLDR release-42-beta1 to ICU main for 72",
          "timestamp": "2022-09-13T11:18:37-07:00",
          "tree_id": "cb8a27062497043f6cc5be9122738e0d43981cad",
          "url": "https://github.com/unicode-org/icu/commit/06259cc6c33d220108d68818a9cdaec8942f9552"
        },
        "date": 1663170440481,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.020019336684631,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.8393888704426296,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.6843023874632905,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.3632086352163837,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.013158504199605,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.9387308354558894,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.0129624941705817,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.8770150315065832,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.33526777911240807,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 6.376531397879931,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.0125839597673014,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.385555450477021,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.011860826662075,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.01212615858382,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.012269440963305,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.8248462290625963,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 6.376238864359711,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.871306343240512,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.3684302678199147,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.322337744855705,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.342548808707246,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.0116626046503012,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.4189861297671174,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.383491074243534,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.8945864093243747,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.377515015988987,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.012567007834881,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.0133637193067133,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.0135649059458833,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 6.33774638883231,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.3580510179833505,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.011956208780012,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "db5903479332caf213e3d6813dfa75ed7e91720c",
          "message": "ICU-22124 Adding a tech preview implementation of MessageFormat v2\n\nSee #2170",
          "timestamp": "2022-09-15T10:32:13-07:00",
          "tree_id": "5bf067f7e5996c2571bf2c901465dd8757b4af77",
          "url": "https://github.com/unicode-org/icu/commit/db5903479332caf213e3d6813dfa75ed7e91720c"
        },
        "date": 1663264925445,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.86450318627597,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 2.452595078218129,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 2.0126902775384696,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.8140839054462568,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.6045410712801575,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 4.616267178020076,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.613296842290839,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 2.243755212192094,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.4023104116626547,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 7.658158648770924,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.618853836439322,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.82691073874939,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.6171774751681203,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.617779902685071,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.619208617779056,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.9916784016402105,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 7.627103880369921,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 2.243952796840457,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.825912268617715,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.8160755074830495,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.820430216043053,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.616399589513968,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.9055230301202237,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.83051797408817,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 2.104885587858695,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.8151962346930475,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.6261173416867285,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.620735735699604,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.6029947593935154,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 7.62404271626666,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.8406712322456475,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.6203050701887163,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "b7340487995b6db9e70567690d2d14870739e97f",
          "message": "ICU-21957 fix NumberFormatterSettings::unitDisplayCase status, remove FormattedNumber:getGender",
          "timestamp": "2022-09-16T08:34:28-07:00",
          "tree_id": "9b37f45d9b4d6104f4c533de4df87c275083a6b9",
          "url": "https://github.com/unicode-org/icu/commit/b7340487995b6db9e70567690d2d14870739e97f"
        },
        "date": 1663344287520,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 2.749533631782824,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 1.4482736292547396,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.7305403285804668,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 1.5583868851908522,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 2.7525757000819095,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 3.667757766319226,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 2.747304573995103,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 1.4315677466519225,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.3909118533731909,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 7.442654556212292,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 2.7044001234162476,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 1.4417464463764298,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 2.728217769863796,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 2.7357936767887767,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 2.6899765782264424,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.9930673509264004,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 4.766929163242352,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 1.4212839680378997,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 1.4028442287881016,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 1.4392788437864859,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 1.437149652592753,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 2.6604649723660723,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 1.8111827413632213,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 1.446317999593335,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 1.4448433005163361,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 1.4391268689863466,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 2.7233315177287207,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 2.686982313469258,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 2.7167200965099845,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 4.72470823454505,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 1.4148460036270138,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 2.7554010653358163,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "9dc1c020a19a5b950af3e6304b97e7396b92aaaf",
          "message": "ICU-20512 Add extra matchers to handle empty currency symbols",
          "timestamp": "2022-09-16T09:00:50-07:00",
          "tree_id": "24a6fbc2a421138fe4900be8283523091a3cfbc7",
          "url": "https://github.com/unicode-org/icu/commit/9dc1c020a19a5b950af3e6304b97e7396b92aaaf"
        },
        "date": 1663345759606,
        "tool": "ndjson",
        "benches": [
          {
            "name": "testJDKIsDefined",
            "value": 3.5182420038744096,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetterOrDigit",
            "value": 2.4499053525661525,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUpperCase",
            "value": 1.9662841143084058,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDigit",
            "value": 2.764091438586062,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetter",
            "value": 3.5234585793265896,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierPart",
            "value": 4.438158121309451,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsTitleCase",
            "value": 3.529020531136563,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsWhiteSpace",
            "value": 2.180853278189334,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsISOControl",
            "value": 0.3914956429631252,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetNumericValue",
            "value": 7.473630726553574,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierStart",
            "value": 3.5200954896131105,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsSpaceChar",
            "value": 2.7659453043042794,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKDigit",
            "value": 3.5123537422056264,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKGetType",
            "value": 3.526578675278881,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsWhiteSpace",
            "value": 3.5261848037546373,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsISOControl",
            "value": 0.9651248687252755,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUpperCase",
            "value": 6.657007730427375,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testDigit",
            "value": 2.1722096024468662,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLowerCase",
            "value": 2.71246747352623,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetType",
            "value": 2.7642774259191514,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsUnicodeIdentifierStart",
            "value": 2.7526268197288966,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsUnicodeIdentifierPart",
            "value": 3.5160853131418466,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsIdentifierIgnorable",
            "value": 2.8237927539225534,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsLetter",
            "value": 2.7210370428649004,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testGetNumericValue",
            "value": 2.0466526936238707,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsTitleCase",
            "value": 2.6752315083768003,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsDigit",
            "value": 3.5903652134509056,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsSpaceChar",
            "value": 3.512611926240411,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLetterOrDigit",
            "value": 3.5861111497730938,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsLowerCase",
            "value": 7.459835794917947,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testIsDefined",
            "value": 2.7515121820710444,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "testJDKIsIdentifierIgnorable",
            "value": 3.5162314158271646,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      }
    ]
  }
}