window.BENCHMARK_DATA = {
  "lastUpdate": 1646687661380,
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
          "id": "80ee559205dd165c2d647610376d6f9a06822ae4",
          "message": "ICU-21843 Add ICU4C performance tests to continuous integration\n\nSee #1987",
          "timestamp": "2022-03-07T12:53:44-08:00",
          "tree_id": "7da686bd1662079612215dc8b0f27437626720c3",
          "url": "https://github.com/unicode-org/icu/commit/80ee559205dd165c2d647610376d6f9a06822ae4"
        },
        "date": 1646687660048,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCtor",
            "value": 18.377,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor1",
            "value": 19.8382,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor2",
            "value": 22.3862,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCtor3",
            "value": 31.7634,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign",
            "value": 39.3586,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign1",
            "value": 38.7394,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestAssign2",
            "value": 21.5504,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestGetch",
            "value": 14.172,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestCatenate",
            "value": 137.1292,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan",
            "value": 23.9444,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan1",
            "value": 51.2889,
            "unit": "ns/iter",
            "biggerIsBetter": false
          },
          {
            "name": "TestScan2",
            "value": 42.8016,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      }
    ]
  }
}