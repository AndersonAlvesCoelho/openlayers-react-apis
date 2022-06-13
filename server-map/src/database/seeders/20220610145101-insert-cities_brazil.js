"use strict";
const { UUIDV4 } = require('sequelize/types');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      {
        schema: "public",
        tableName: "cities_brazil",
      },
      [
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.07231902777778 -10.911509527777778)",
          name: "Aracaju/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.504398333333334 -1.4564432777777778)",
          name: "Belém/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.95639038888889 -19.817543027777777)",
          name: "Belo Horizonte/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-60.67346572222222 2.819580083333333)",
          name: "Boa Vista/RR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.93040847222222 -15.780519472222222)",
          name: "Brasília/DF",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.64646911111111 -20.443519583333334)",
          name: "Campo Grande/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.09746166666667 -15.59650225)",
          name: "Cuiabá/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.27344511111111 -25.428548805555558)",
          name: "Curitiba/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.54944613888889 -27.597555138888886)",
          name: "Florianópolis/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.54332730555555 -3.717461166666667)",
          name: "Fortaleza/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.25442511111111 -16.679519666666668)",
          name: "Goiânia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-34.86330038888889 -7.115486611111111)",
          name: "João Pessoa/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.06641772222222 0.0385661388888889)",
          name: "Macapá/AP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.73530961111111 -9.666502944444446)",
          name: "Maceió/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-60.025466916666666 -3.1024484722222225)",
          name: "Manaus/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.20930480555556 -5.795477388888889)",
          name: "Natal/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.33340369444445 -10.167492388888888)",
          name: "Palmas/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.230480194444446 -30.03355025)",
          name: "Porto Alegre/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-63.90448763888889 -8.762467472222223)",
          name: "Porto Velho/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-34.88130188888889 -8.054492944444446)",
          name: "Recife/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-67.81050872222222 -9.975464833333334)",
          name: "Rio Branco/AC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.208392861111115 -22.90355647222222)",
          name: "Rio de Janeiro/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.51133727777778 -12.971519472222223)",
          name: "Salvador/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.303371416666664 -2.5304510555555555)",
          name: "São Luís/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.636421194444445 -23.54854963888889)",
          name: "São Paulo/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.80236052777777 -5.089468472222222)",
          name: "Teresina/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.33836363888889 -20.31955336111111)",
          name: "Vitória/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.438419999999994 -16.75752)",
          name: "Abadia de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.40341 -18.486530000000002)",
          name: "Abadia dos Dourados/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.707420000000006 -16.20452)",
          name: "Abadiânia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.4464 -19.160539999999997)",
          name: "Abaeté/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.8834 -1.7184400000000002)",
          name: "Abaetetuba/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.04633 -7.35949)",
          name: "Abaiara/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.66436 -13.25052)",
          name: "Abaíra/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.11534 -8.72149)",
          name: "Abaré/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.313449999999996 -23.30454)",
          name: "Abatiá/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.023469999999996 -27.61155)",
          name: "Abdon Batista/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.3934 -4.95446)",
          name: "Abel Figueiredo/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.32847 -26.565540000000002)",
          name: "Abelardo Luz/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.47838 -20.301550000000002)",
          name: "Abre Campo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-34.9033 -7.91249)",
          name: "Abreu e Lima/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.15141 -9.62149)",
          name: "Abreulândia/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.14539 -20.36355)",
          name: "Acaiaca/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.50539 -4.94746)",
          name: "Açailândia/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.01733 -11.662510000000001)",
          name: "Acajutiba/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.197399999999995 -1.96145)",
          name: "Acará/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.708330000000004 -4.2244600000000005)",
          name: "Acarapé/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.12034 -2.88645)",
          name: "Acaraú/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.63931 -6.43648)",
          name: "Acari/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.082350000000005 -8.215489999999999)",
          name: "Acauã/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.14851 -31.640539999999998)",
          name: "AceguáV",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.453340000000004 -6.095479999999999)",
          name: "Acopiara/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.366460000000004 -15.205499999999999)",
          name: "Acorizal/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-66.88350000000001 -9.82847)",
          name: "Acrelândia/AC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.377430000000004 -17.39652)",
          name: "Acreúna/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.90932 -5.57747)",
          name: "Açu/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.54638 -19.07354)",
          name: "Açucena/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.07345 -21.68553)",
          name: "Adamantina/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.16643 -16.415519999999997)",
          name: "Adelândia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.64444 -21.23553)",
          name: "Adolfo/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.991440000000004 -24.657549999999997)",
          name: "Adrianópolis/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.10033 -10.53351)",
          name: "Adustina/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.63932 -7.75149)",
          name: "Afogados da Ingazeira/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.50631 -5.49847)",
          name: "Afonso Bezerra/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.12437 -20.07455)",
          name: "Afonso Cláudio/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.324360000000006 -4.13346)",
          name: "Afonso Cunha/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.00535 -8.51549)",
          name: "Afrânio/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.38741 -0.15744)",
          name: "Afuá/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.94531 -8.45849)",
          name: "Agrestina/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.66936 -5.7994699999999995)",
          name: "Agricolândia/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.826460000000004 -27.41255)",
          name: "Agrolândia/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.71146 -27.26555)",
          name: "Agronômica/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.46741 -6.7914699999999995)",
          name: "Água Azul do Norte/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.38937 -17.99654)",
          name: "Água Boa/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.15943 -14.050500000000001)",
          name: "Água Boa/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.64132 -7.51249)",
          name: "Água Branca/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.93832999999999 -9.2625)",
          name: "Água Branca/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.63836 -5.89047)",
          name: "Água Branca/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.87845 -20.44852)",
          name: "Água Clara/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.10942 -20.056530000000002)",
          name: "Água Comprida/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.55647 -26.998540000000002)",
          name: "Água Doce/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.11235 -2.84145)",
          name: "Água Doce do Maranhão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.97936 -18.54754)",
          name: "Água Doce do Norte/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.76734 -11.867510000000001)",
          name: "Água Fria/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.78441 -14.986519999999999)",
          name: "Água Fria de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.76242 -18.07453)",
          name: "Água Limpa/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.297329999999995 -6.20948)",
          name: "Água Nova/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.53131 -8.7075)",
          name: "Água Preta/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.034479999999995 -28.17754)",
          name: "Água Santa/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.979420000000005 -22.059540000000002)",
          name: "Aguaí/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.3934 -20.94354)",
          name: "Aguanil/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.12332 -9.1115)",
          name: "Águas Belas/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.717420000000004 -21.93754)",
          name: "Águas da Prata/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.98748 -27.07054)",
          name: "Águas de Chapecó/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.63342 -22.47655)",
          name: "Águas de Lindóia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.23944 -22.88154)",
          name: "Águas de Santa Bárbara/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.87643 -22.599539999999998)",
          name: "Águas de São Pedro/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.93635999999999 -17.082539999999998)",
          name: "Águas Formosas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.859480000000005 -26.88054)",
          name: "Águas Frias/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.28241 -15.76252)",
          name: "Águas Lindas de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.824450000000006 -27.69455)",
          name: "Águas Mornas/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.46036 -15.74753)",
          name: "Águas Vermelhas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.24049 -29.64554)",
          name: "Agudo/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.98843 -22.46954)",
          name: "Agudos/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.33545 -25.993550000000003)",
          name: "Agudos do Sul/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.74036 -18.98355)",
          name: "Águia Branca/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.17133 -7.09248)",
          name: "Aguiar/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.466390000000004 -6.56347)",
          name: "Aguiarnópolis/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.06437 -19.496550000000003)",
          name: "Aimorés/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.88835 -14.129520000000001)",
          name: "Aiquara/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.124340000000004 -6.574479999999999)",
          name: "Aiuaba/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.6034 -21.97655)",
          name: "Aiuruoca/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.77149 -28.23954)",
          name: "Ajuricaba/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.6424 -22.17155)",
          name: "Alagoa/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.63531 -7.08949)",
          name: "Alagoa Grande/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.75831 -7.07149)",
          name: "Alagoa Nova/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.54531 -6.95049)",
          name: "Alagoinha/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.77632 -8.466489999999999)",
          name: "Alagoinha/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.93935 -7.00848)",
          name: "Alagoinha do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.419329999999995 -12.136519999999999)",
          name: "Alagoinhas/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.89943 -23.551550000000002)",
          name: "Alambari/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.61642 -22.20155)",
          name: "Albertina/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.415369999999996 -2.40945)",
          name: "Alcântara/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.54634 -3.5894600000000003)",
          name: "Alcântaras/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.056309999999996 -7.74449)",
          name: "Alcantil/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.706450000000004 -18.32452)",
          name: "Alcinópolis/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.196349999999995 -17.51954)",
          name: "Alcobaça/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.47137 -4.62847)",
          name: "Aldeias Altas/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.76449 -27.65553)",
          name: "Alecrim/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.53337 -20.76455)",
          name: "Alegre/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.79251 -29.783530000000003)",
          name: "Alegrete/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.85835 -7.24348)",
          name: "Alegrete do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.057489999999994 -27.82754)",
          name: "Alegria/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.704390000000004 -21.88855)",
          name: "Além Paraíba/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.738440000000004 -1.94244)",
          name: "Alenquer/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.01633 -6.413480000000001)",
          name: "Alexandria/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.50741 -16.08252)",
          name: "Alexânia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.94741 -21.429540000000003)",
          name: "Alfenas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.75037 -20.63555)",
          name: "Alfredo Chaves/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.41345 -21.95553)",
          name: "Alfredo Marcondes/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.77739 -21.14555)",
          name: "Alfredo Vasconcelos/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.33446 -27.70055)",
          name: "Alfredo Wagner/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.922309999999996 -6.816479999999999)",
          name: "Algodão de Jandaíra/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-34.9143 -7.43949)",
          name: "Alhandra/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.231300000000005 -7.60349)",
          name: "Aliança/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.936409999999995 -11.306500000000002)",
          name: "Aliança do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.63735 -14.70553)",
          name: "Almadina/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.1704 -11.5745)",
          name: "Almas/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.582420000000006 -1.52344)",
          name: "Almeirim/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.694359999999996 -16.18453)",
          name: "Almenara/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.76632 -6.152480000000001)",
          name: "Almino Afonso/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.310449999999996 -25.32555)",
          name: "Almirante Tamandaré/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.90948 -28.11354)",
          name: "Almirante Tamandaré do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.48042 -17.72852)",
          name: "Aloândia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.97037 -18.974539999999998)",
          name: "Alpercata/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.03548 -27.24954)",
          name: "Alpestre/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.38841 -20.86454)",
          name: "Alpinópolis/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.08645 -9.87648)",
          name: "Alta Floresta/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-61.99649 -11.92948)",
          name: "Alta Floresta d'Oeste/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.05943 -20.52453)",
          name: "Altair/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.20642 -3.20345)",
          name: "Altamira/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.47038 -4.16546)",
          name: "Altamira do Maranhão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.71347 -24.798540000000003)",
          name: "Altamira do Paraná/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.74134 -7.00248)",
          name: "Altaneira/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.14341 -21.24954)",
          name: "Alterosa/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.059309999999996 -8.490499999999999)",
          name: "Altinho/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.37442 -21.02654)",
          name: "Altinópolis/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-61.29247 2.9795800000000003)",
          name: "Alto Alegre/RR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.16444 -21.58153)",
          name: "Alto Alegre/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.99049 -28.77354)",
          name: "Alto Alegre/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.446369999999995 -4.21346)",
          name: "Alto Alegre do Maranhão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.90338 -3.6904600000000003)",
          name: "Alto Alegre do Pindaré/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-61.85149 -12.12848)",
          name: "Alto Alegre dos Parecis/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.215450000000004 -17.31551)",
          name: "Alto Araguaia/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.87947 -27.45854)",
          name: "Alto Bela Vista/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.38843 -11.6745)",
          name: "Alto Boa Vista/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.86838 -20.43455)",
          name: "Alto Caparaó/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.76231 -5.28847)",
          name: "Alto do Rodrigues/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.312479999999994 -29.39255)",
          name: "Alto Feliz/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.52845 -16.94451)",
          name: "Alto Garças/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.339420000000004 -14.19651)",
          name: "Alto Horizonte/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.96638 -20.42455)",
          name: "Alto Jequitibá/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.21036 -5.25147)",
          name: "Alto Longá/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.48346 -14.5145)",
          name: "Alto Paraguai/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-63.321490000000004 -9.71347)",
          name: "Alto Paraíso/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.5104 -14.13351)",
          name: "Alto Paraíso de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.31946000000001 -23.12953)",
          name: "Alto Paraná/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.930389999999996 -9.11149)",
          name: "Alto Parnaíba/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.441469999999995 -24.02853)",
          name: "Alto Piquiri/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.41139 -21.02655)",
          name: "Alto Rio Doce/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.01737 -19.05655)",
          name: "Alto Rio Novo/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.27233 -5.52147)",
          name: "Alto Santo/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.28245 -17.82652)",
          name: "Alto Taquari/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.90247 -23.87453)",
          name: "Altônia/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.461360000000006 -5.03947)",
          name: "Altos/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.26243 -23.53555)",
          name: "Alumínio/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-64.80449 -3.22145)",
          name: "Alvarães/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.72937 -19.417550000000002)",
          name: "Alvarenga/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.911429999999996 -20.32153)",
          name: "Álvares Florence/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.47245 -22.07953)",
          name: "Álvares Machado/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.71944 -22.08954)",
          name: "Álvaro de Carvalho/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.76344 -22.44454)",
          name: "Alvinlândia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.04938 -20.10755)",
          name: "Alvinópolis/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.12541 -12.4805)",
          name: "Alvorada/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.08448 -29.990550000000002)",
          name: "Alvorada/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.36538 -18.73654)",
          name: "Alvorada de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.77737 -8.424489999999999)",
          name: "Alvorada do Gurguéia/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.4924 -14.48152)",
          name: "Alvorada do Norte/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.23145 -22.78053)",
          name: "Alvorada do Sul/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-62.38949 -11.40848)",
          name: "Alvorada d'Oeste/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-61.37147 3.65158)",
          name: "Amajari/RR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.22648 -23.10452)",
          name: "Amambaí/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.79341 2.05258)",
          name: "Amapá/AP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.00238 -1.6754499999999999)",
          name: "Amapá do Maranhão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.78846 -23.096529999999998)",
          name: "Amaporã/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.45331 -8.38349)",
          name: "Amaraji/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.25349 -30.87555)",
          name: "Amaral Ferrador/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.297419999999995 -13.926509999999999)",
          name: "Amaralina/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.855360000000005 -6.24148)",
          name: "Amarante/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.74239 -5.56747)",
          name: "Amarante do Maranhão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.60534 -13.030520000000001)",
          name: "Amargosa/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-68.19850000000001 -3.36445)",
          name: "Amaturá/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.75934 -12.40952)",
          name: "Amélia Rodrigues/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.43635999999999 -11.455509999999999)",
          name: "América Dourada/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.33142 -22.73955)",
          name: "Americana/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.98342 -16.25552)",
          name: "Americano do Brasil/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.10243 -21.724539999999998)",
          name: "Américo Brasiliense/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.73243 -20.29953)",
          name: "Américo de Campos/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.18248 -27.36154)",
          name: "Ametista do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.831340000000004 -3.36146)",
          name: "Amontada/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.09443 -16.61952)",
          name: "Amorinópolis/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.064319999999995 -7.56849)",
          name: "Amparo/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.76442 -22.70155)",
          name: "Amparo/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.930319999999995 -10.1345)",
          name: "Amparo de São Francisco/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.80338 -20.50755)",
          name: "Amparo do Serra/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.47348 -25.91554)",
          name: "Ampére/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.304309999999994 -9.6845)",
          name: "Anadia/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.136359999999996 -14.61252)",
          name: "Anagé/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.13547 -24.64453)",
          name: "Anahy/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.94041 -0.98744)",
          name: "Anajás/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.62037 -3.26446)",
          name: "Anajatuba/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.66342 -22.126540000000002)",
          name: "Analândia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-61.404469999999996 -3.58045)",
          name: "Anamã/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.07340000000001 -6.36647)",
          name: "Ananás/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.3724 -1.36644)",
          name: "Ananindeua/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.95342 -16.32752)",
          name: "Anápolis/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.19842 -3.4724500000000003)",
          name: "Anapu/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.11636 -3.67246)",
          name: "Anapurus/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.807469999999995 -20.48452)",
          name: "Anastácio/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.71846 -22.18853)",
          name: "Anaurilândia/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.78237 -20.72255)",
          name: "Anchieta/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.331480000000006 -26.534540000000003)",
          name: "Anchieta/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.331360000000004 -12.80752)",
          name: "Andaraí/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.22945 -23.05154)",
          name: "Andirá/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.83334 -10.345500000000001)",
          name: "Andorinha/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.56942 -22.06855)",
          name: "Andradas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.37945 -20.89653)",
          name: "Andradina/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.57148 -28.63155)",
          name: "André da Rocha/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.3094 -21.740550000000002)",
          name: "Andrelândia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.41343 -23.49054)",
          name: "Angatuba/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.26537 -17.730539999999998)",
          name: "Angelândia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.77147 -22.15353)",
          name: "Angélica/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.28631 -8.8905)",
          name: "Angelim/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.98545 -27.56955)",
          name: "Angelina/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.694379999999995 -12.00751)",
          name: "Angical/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.73936 -6.086469999999999)",
          name: "Angical do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.8654 -6.3904700000000005)",
          name: "Angico/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.60131 -5.66648)",
          name: "Angicos/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.318400000000004 -23.00755)",
          name: "Angra dos Reis/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.246340000000004 -12.15151)",
          name: "Anguera/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.915459999999996 -23.19553)",
          name: "Ângulo/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.21942 -18.337529999999997)",
          name: "Anhanguera/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.127430000000004 -22.789540000000002)",
          name: "Anhembi/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.38745 -22.295530000000003)",
          name: "Anhumas/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.962430000000005 -16.46152)",
          name: "Anicuns/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.046369999999996 -9.189490000000001)",
          name: "Anísio de Abreu/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.13047 -27.68955)",
          name: "Anita Garibaldi/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.12946 -27.902549999999998)",
          name: "Anitápolis/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-61.64447 -3.77345)",
          name: "Anori/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.00548 -28.97055)",
          name: "Anta Gorda/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.333330000000004 -10.40051)",
          name: "Antas/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.71244 -25.429550000000003)",
          name: "Antonina/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.98934 -6.77548)",
          name: "Antonina do Norte/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.19837 -7.21948)",
          name: "Antônio Almeida/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.12034 -12.43552)",
          name: "Antônio Cardoso/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.74739 -21.31855)",
          name: "Antônio Carlos/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.76845 -27.51755)",
          name: "Antônio Carlos/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.87238 -19.65354)",
          name: "Antônio Dias/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.27435 -10.5735)",
          name: "Antônio Gonçalves/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.948479999999996 -22.19152)",
          name: "Antônio João/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.90632 -6.213480000000001)",
          name: "Antônio Martins/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.19746 -25.98655)",
          name: "Antônio Olinto/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.28347 -28.85855)",
          name: "Antônio Prado/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.10938 -21.01655)",
          name: "Antônio Prado de Minas",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.08733 -6.78448)",
          name: "Aparecida/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.23041 -22.84755)",
          name: "Aparecida/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.24542 -16.82252)",
          name: "Aparecida de Goiânia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.14544 -18.29952)",
          name: "Aparecida do Rio Doce/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.9724 -9.95249)",
          name: "Aparecida do Rio Negro/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.094440000000006 -20.087529999999997)",
          name: "Aparecida do Taboado/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.88044 -20.44953)",
          name: "Aparecida d'Oeste/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.10338 -21.62155)",
          name: "Aperibé/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.568380000000005 -21.154549999999997)",
          name: "Apiacá/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-57.449459999999995 -9.54448)",
          name: "Apiacás/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.84344 -24.50955)",
          name: "Apiaí/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.10338 -1.4614399999999999)",
          name: "Apicum-Açu/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.39045 -27.036550000000002)",
          name: "Apiúna/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.79932 -5.664470000000001)",
          name: "Apodi/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.08133 -11.66051)",
          name: "Aporá/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.92644 -18.965519999999998)",
          name: "Aporé/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.744350000000004 -13.85652)",
          name: "Apuarema/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.46146 -23.55154)",
          name: "Apucarana/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-59.89147 -7.19747)",
          name: "Apuí/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.43233 -3.94946)",
          name: "Apuiarés/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.01932 -10.28151)",
          name: "Aquidabã/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.78747 -20.471519999999998)",
          name: "Aquidauana/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.391329999999996 -3.9014599999999997)",
          name: "Aquiraz/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.14247 -27.160539999999997)",
          name: "Arabutã/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.3813 -6.853479999999999)",
          name: "Araçagi/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.24839 -19.19954)",
          name: "Araçaí/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.06142 -23.43955)",
          name: "Araçariguama/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.20333 -12.22052)",
          name: "Araças/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.77032 -4.56247)",
          name: "Aracati/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.462360000000004 -14.428519999999999)",
          name: "Aracatu/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.43344 -21.20953)",
          name: "Araçatuba/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.96734 -11.33351)",
          name: "Araci/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.37839 -21.34355)",
          name: "Aracitaba/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.81433 -4.3714699999999995)",
          name: "Aracoiaba/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.091300000000004 -7.79049)",
          name: "Araçoiaba/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.61443 -23.50555)",
          name: "Araçoiaba da Serra/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.27336 -19.82055)",
          name: "Aracruz/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.681419999999996 -16.358520000000002)",
          name: "Araçu/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.070370000000004 -16.850530000000003)",
          name: "Araçuaí/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.25144 -15.89851)",
          name: "Aragarças/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.451420000000006 -16.912519999999997)",
          name: "Aragoiânia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.5284 -7.16248)",
          name: "Aragominas/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.55641 -8.80448)",
          name: "Araguacema/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.826420000000006 -12.9315)",
          name: "Araguaçu/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.83144 -15.734509999999998)",
          name: "Araguaiana/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.2074 -7.19148)",
          name: "Araguaína/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.033449999999995 -16.85651)",
          name: "Araguainha/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.6444 -6.5814699999999995)",
          name: "Araguanã/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.66538 -2.95345)",
          name: "Araguanã/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.63243 -15.091510000000001)",
          name: "Araguapaz/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.187419999999996 -18.64953)",
          name: "Araguari/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.1244 -5.651470000000001)",
          name: "Araguatins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.903349999999996 -2.89045)",
          name: "Araioses/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.63548 -22.93452)",
          name: "Aral Moreira/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.49933 -12.08251)",
          name: "Aramari/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.498490000000004 -30.91555)",
          name: "Arambaré/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.90838 -4.73346)",
          name: "Arame/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.78642 -20.090539999999997)",
          name: "Aramina/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.05444 -23.13454)",
          name: "Arandu/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.2564 -21.91155)",
          name: "Arantina/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.4484 -22.67455)",
          name: "Arapeí/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.661319999999996 -9.7525)",
          name: "Arapiraca/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.064409999999995 -7.65848)",
          name: "Arapoema/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.52138 -20.667550000000002)",
          name: "Araponga/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.42445 -23.41954)",
          name: "Arapongas/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.187419999999996 -18.43753)",
          name: "Araporã/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.827450000000006 -24.15854)",
          name: "Arapoti/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.1564 -19.034540000000003)",
          name: "Arapuá/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.787459999999996 -24.31654)",
          name: "Arapuã/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-58.35347 -15.4715)",
          name: "Araputanga/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.72245 -26.37055)",
          name: "Araquari/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.75831 -6.82848)",
          name: "Arara/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.48646 -28.93555)",
          name: "Araranguá/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.176429999999996 -21.79454)",
          name: "Araraquara/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.38442 -22.35754)",
          name: "Araras/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.83335 -4.75347)",
          name: "Ararendá/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.78037 -3.45446)",
          name: "Arari/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.92548 -29.61455)",
          name: "Araricá/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.04634 -7.213480000000001)",
          name: "Araripe/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.49835 -7.57649)",
          name: "Araripina/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.34339 -22.87356)",
          name: "Araruama/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.49646 -23.93253)",
          name: "Araruna/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.74231 -6.558479999999999)",
          name: "Araruna/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.41435 -15.26353)",
          name: "Arataca/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.30048 -27.39454)",
          name: "Aratiba/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.04533 -4.41847)",
          name: "Aratuba/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.00234 -13.07952)",
          name: "Aratuípe/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.62033 -11.26251)",
          name: "Arauá/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.41045 -25.59355)",
          name: "Araucária/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.166399999999996 -19.94854)",
          name: "Araújos/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.94141 -19.593539999999997)",
          name: "Araxá/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.940419999999996 -21.36454)",
          name: "Arceburgo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.46544 -21.773529999999997)",
          name: "Arco-Íris/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.5394 -20.282539999999997)",
          name: "Arcos/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.05432 -8.41949)",
          name: "Arcoverde/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.14641 -21.359540000000003)",
          name: "Areado/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.106390000000005 -22.23155)",
          name: "Areal/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.911429999999996 -22.02954)",
          name: "Arealva/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.69231 -6.96349)",
          name: "Areia/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.13732 -4.95647)",
          name: "Areia Branca/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.31532 -10.75851)",
          name: "Areia Branca/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.94132 -7.123489999999999)",
          name: "Areia de Baraúnas/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.931309999999996 -7.04849)",
          name: "Areial/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.697399999999995 -22.58055)",
          name: "Areias/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.66543 -22.66854)",
          name: "Areiópolis/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.84646 -14.4505)",
          name: "Arenápolis/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.56044 -16.38651)",
          name: "Arenópolis/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.1603 -6.19448)",
          name: "Arês/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.83639 -21.61055)",
          name: "Argirita/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.557379999999995 -17.86754)",
          name: "Aricanduva/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.1064 -15.91752)",
          name: "Arinos/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-59.45947 -10.16748)",
          name: "Aripuanã/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-63.041489999999996 -9.91347)",
          name: "Ariquemes/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.78743 -21.18854)",
          name: "Ariranha/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.585460000000005 -24.38654)",
          name: "Ariranha do Ivaí/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.88238 -22.74756)",
          name: "Armação dos Búzios/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.01846 -28.26255)",
          name: "Armazém/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.161339999999996 -6.324479999999999)",
          name: "Arneiroz/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.79335 -6.119479999999999)",
          name: "Aroazes/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.708310000000004 -7.54549)",
          name: "Aroeiras/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.53236 -6.655480000000001)",
          name: "Arraial/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.02838 -22.966559999999998)",
          name: "Arraial do Cabo/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.938399999999994 -12.93151)",
          name: "Arraias/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.945479999999996 -29.40155)",
          name: "Arroio do Meio/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.4225 -31.443550000000002)",
          name: "Arroio do Padre/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.88947 -29.551550000000002)",
          name: "Arroio do Sal/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.09349 -29.33354)",
          name: "Arroio do Tigre/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.72948 -30.07755)",
          name: "Arroio dos Ratos/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.087500000000006 -32.238550000000004)",
          name: "Arroio Grande/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.339470000000006 -26.93354)",
          name: "Arroio Trinta/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.17342 -22.57355)",
          name: "Artur Nogueira/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.08343 -14.92051)",
          name: "Aruanã/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.32142 -23.39655)",
          name: "Arujá/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.456480000000006 -27.07454)",
          name: "Arvoredo/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.17548 -28.87254)",
          name: "Arvorezinha/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.37645 -26.95555)",
          name: "Ascurra/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.73344 -20.15953)",
          name: "Aspásia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.84145 -23.373540000000002)",
          name: "Assaí/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.87534 -6.87448)",
          name: "Assaré/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.41244 -22.66254)",
          name: "Assis/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-69.56752 -10.941460000000001)",
          name: "Assis Brasil/AC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.52147 -24.420530000000003)",
          name: "Assis Chateaubriand/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.731320000000004 -7.07449)",
          name: "Assunção/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.04935 -5.86447)",
          name: "Assunção do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.862390000000005 -21.31555)",
          name: "Astolfo Dutra/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.66646 -23.233530000000002)",
          name: "Astorga/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.05446 -23.151529999999998)",
          name: "Atalaia/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.02331 -9.5025)",
          name: "Atalaia/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-70.19251 -4.37245)",
          name: "Atalaia do Norte/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.781459999999996 -27.420550000000002)",
          name: "Atalanta/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.11036 -18.04454)",
          name: "Ataléia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.550419999999995 -23.11755)",
          name: "Atibaia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.19837 -20.91455)",
          name: "Atilio Vivacqua/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.8884 -5.46647)",
          name: "Augustinópolis/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.64539 -1.02244)",
          name: "Augusto Corrêa/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.26739 -18.109540000000003)",
          name: "Augusto de Lima/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.992490000000004 -28.51754)",
          name: "Augusto Pestana/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.31032 -5.8644799999999995)",
          name: "Augusto Severo/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.049479999999996 -27.69854)",
          name: "Áurea/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.32734000000001 -14.31753)",
          name: "Aurelino Leal/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.55544 -20.68653)",
          name: "Auriflama/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.465430000000005 -16.68252)",
          name: "Aurilândia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.63846 -27.31555)",
          name: "Aurora/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.96833 -6.94348)",
          name: "Aurora/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.56339 -2.13445)",
          name: "Aurora do Pará/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.40839 -12.71351)",
          name: "Aurora do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-59.13146 -3.58045)",
          name: "Autazes/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.33344 -22.14754)",
          name: "Avaí/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.95044 -21.46153)",
          name: "Avanhandava/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.92644 -23.099539999999998)",
          name: "Avaré/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.332440000000005 -3.60645)",
          name: "Aveiro/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.949369999999995 -10.1375)",
          name: "Avelino Lopes/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.75842 -16.46652)",
          name: "Avelinópolis/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.053369999999994 -2.83745)",
          name: "Axixá/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.7694 -5.617470000000001)",
          name: "Axixá do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.7574 -7.2054800000000006)",
          name: "Babaçulândia/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.78037 -4.22546)",
          name: "Bacabal/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.31637 -2.97145)",
          name: "Bacabeira/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.13438 -1.70345)",
          name: "Bacuri/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.73837 -2.7064500000000002)",
          name: "Bacurituba/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.445429999999995 -20.91853)",
          name: "Bady Bassitt/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.8904 -21.95955)",
          name: "Baependi/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.107510000000005 -31.33154)",
          name: "Bagé/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.16441 -1.90045)",
          name: "Bagre/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-34.936299999999996 -6.68848)",
          name: "Baía da Traição/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.0083 -6.369479999999999)",
          name: "Baía Formosa/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.535379999999996 -12.306510000000001)",
          name: "Baianópolis/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.67241 -2.7914499999999998)",
          name: "Baião/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.16835 -11.96051)",
          name: "Baixa Grande/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.214380000000006 -7.850479999999999)",
          name: "Baixa Grande do Ribeiro/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.717330000000004 -6.73048)",
          name: "Baixio/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.01637 -19.51955)",
          name: "Baixo Guandu/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.357440000000004 -21.90054)",
          name: "Balbinos/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.957390000000004 -19.28854)",
          name: "Baldim/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.54544 -16.19651)",
          name: "Baliza/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.41346 -28.984550000000002)",
          name: "Balneário Arroio do Silva/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.61245 -26.45655)",
          name: "Balneário Barra do Sul/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.63545 -26.99155)",
          name: "Balneário Camboriú/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.579460000000005 -29.157549999999997)",
          name: "Balneário Gaivota/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.233470000000004 -30.24755)",
          name: "Balneário Pinhal/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.636449999999996 -25.58455)",
          name: "Balsa Nova/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.584430000000005 -20.73553)",
          name: "Bálsamo/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.03639 -7.53348)",
          name: "Balsas/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.97741 -20.00654)",
          name: "Bambuí/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.92133 -5.31047)",
          name: "Banabuiú/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.32340000000001 -22.68455)",
          name: "Bananal/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.63331 -6.75048)",
          name: "Bananeiras/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.55936 -15.88553)",
          name: "Bandeira/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.38641 -21.72854)",
          name: "Bandeira do Sul/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.63848 -26.76954)",
          name: "Bandeirante/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.36845 -23.11054)",
          name: "Bandeirantes/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.36446 -19.91852)",
          name: "Bandeirantes/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.5844 -7.75648)",
          name: "Bandeirantes do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.39641 -7.3484799999999995)",
          name: "Bannach/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.61533 -10.57751)",
          name: "Banzaê/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.49648 -29.37755)",
          name: "Barão/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.56144 -23.62754)",
          name: "Barão de Antonina/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.48739 -19.94654)",
          name: "Barão de Cocais/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.38048 -27.62154)",
          name: "Barão de Cotegipe/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.02436 -6.75648)",
          name: "Barão de Grajaú/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.95846 -16.2795)",
          name: "Barão de Melgaço/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.23838 -21.24555)",
          name: "Barão de Monte Alto/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.73449 -30.38855)",
          name: "Barão do Triunfo/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.61732 -5.08047)",
          name: "Baraúna/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.25431 -6.643479999999999)",
          name: "Baraúna/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.77439 -21.22655)",
          name: "Barbacena/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.302339999999994 -7.30548)",
          name: "Barbalha/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.949439999999996 -21.26753)",
          name: "Barbosa/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.01246 -24.03054)",
          name: "Barbosa Ferraz/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.626400000000004 -1.50644)",
          name: "Barcarena/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.92631 -5.95148)",
          name: "Barcelona/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-62.924479999999996 -0.97544)",
          name: "Barcelos/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.74043 -22.07454)",
          name: "Bariri/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.14237 -11.089500000000001)",
          name: "Barra/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.558429999999994 -22.495540000000002)",
          name: "Barra Bonita/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.440479999999994 -26.654539999999997)",
          name: "Barra Bonita/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.327360000000006 -13.626520000000001)",
          name: "Barra da Estiva/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.114360000000005 -6.51748)",
          name: "Barra d'Alcântara/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.65831 -8.42049)",
          name: "Barra de Guabiraba/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.06131 -6.72048)",
          name: "Barra de Santa Rosa/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.00031 -7.52049)",
          name: "Barra de Santana/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.50731 -9.4055)",
          name: "Barra de Santo Antônio/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.89136 -18.75555)",
          name: "Barra de São Francisco/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.318310000000004 -7.75149)",
          name: "Barra de São Miguel/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.90831 -9.8405)",
          name: "Barra de São Miguel/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-57.18147 -15.0735)",
          name: "Barra do Bugres/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.025439999999996 -24.47355)",
          name: "Barra do Chapéu/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.579350000000005 -14.88153)",
          name: "Barra do Choça/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.24338 -5.50647)",
          name: "Barra do Corda/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.25744 -15.890509999999999)",
          name: "Barra do Garças/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.710480000000004 -27.19254)",
          name: "Barra do Guarita/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.181439999999995 -23.115540000000003)",
          name: "Barra do Jacaré/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.05936 -11.81051)",
          name: "Barra do Mendes/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.6834 -7.6894800000000005)",
          name: "Barra do Ouro/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.82640000000001 -22.47055)",
          name: "Barra do Piraí/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-57.555519999999994 -30.20753)",
          name: "Barra do Quaraí/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.30148 -30.29155)",
          name: "Barra do Ribeiro/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.41048 -27.40954)",
          name: "Barra do Rio Azul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.60235 -14.21153)",
          name: "Barra do Rocha/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.50544 -24.75655)",
          name: "Barra do Turvo/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.03932 -10.909510000000001)",
          name: "Barra dos Coqueiros/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.03948 -27.923540000000003)",
          name: "Barra Funda/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.04138 -20.28355)",
          name: "Barra Longa/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.1714 -22.54455)",
          name: "Barra Mansa/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.685449999999996 -26.632550000000002)",
          name: "Barra Velha/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.63348 -26.25454)",
          name: "Barracão/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.461470000000006 -27.67255)",
          name: "Barracão/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.29636 -4.24746)",
          name: "Barras/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.64333 -4.28747)",
          name: "Barreira/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.99038 -12.15351)",
          name: "Barreiras/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.47538 -9.92549)",
          name: "Barreiras do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-57.07045 -2.79345)",
          name: "Barreirinha/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.82636 -2.74745)",
          name: "Barreirinhas/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.186299999999996 -8.8185)",
          name: "Barreiros/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.568430000000006 -20.55754)",
          name: "Barretos/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.16442 -21.19454)",
          name: "Barrinha/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.78233 -7.17748)",
          name: "Barro/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.916419999999995 -14.97151)",
          name: "Barro Alto/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.91236 -11.76151)",
          name: "Barro Alto/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.51336 -5.81847)",
          name: "Barro Duro/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.078340000000004 -11.52951)",
          name: "Barrocas/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.725410000000004 -9.836490000000001)",
          name: "Barrolândia/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.13735 -3.01946)",
          name: "Barroquinha/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.583490000000005 -29.093539999999997)",
          name: "Barros Cassal/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.97639 -21.18755)",
          name: "Barroso/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.87642 -23.51155)",
          name: "Barueri/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.73444 -21.922530000000002)",
          name: "Bastos/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.42246 -21.71453)",
          name: "Bataguassu/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.12532 -9.6785)",
          name: "Batalha/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.07835 -4.02446)",
          name: "Batalha/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.58542 -20.89154)",
          name: "Batatais/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.27146 -22.295530000000003)",
          name: "Batayporã/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.885329999999996 -4.32947)",
          name: "Baturité/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.061429999999994 -22.315540000000002)",
          name: "Bauru/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-34.9323 -7.125489999999999)",
          name: "Bayeux/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.47943 -20.94954)",
          name: "Bebedouro/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.13133 -4.18046)",
          name: "Beberibe/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.16834 -3.0514599999999996)",
          name: "Bela Cruz/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.52148 -22.10952)",
          name: "Bela Vista/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.665479999999995 -25.88153)",
          name: "Bela Vista da Caroba/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.95342 -16.973519999999997)",
          name: "Bela Vista de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.09138 -19.83055)",
          name: "Bela Vista de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.31538 -3.73146)",
          name: "Bela Vista do Maranhão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.191449999999996 -22.99754)",
          name: "Bela Vista do Paraíso/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.86836 -7.98949)",
          name: "Bela Vista do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.46446 -26.27355)",
          name: "Bela Vista do Toldo/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.51036 -3.1554599999999997)",
          name: "Belágua/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.51931 -6.74748)",
          name: "Belém/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.49232 -9.5715)",
          name: "Belém/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.809309999999996 -8.6145)",
          name: "Belém de Maria/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.964330000000004 -8.75849)",
          name: "Belém de São Francisco/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.536319999999996 -6.1894800000000005)",
          name: "Belém do Brejo do Cruz/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.97235 -7.37648)",
          name: "Belém do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.39939 -22.76456)",
          name: "Belford Roxo/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.415389999999995 -21.94955)",
          name: "Belmiro Braga/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.576480000000004 -26.84154)",
          name: "Belmonte/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.88334 -15.863529999999999)",
          name: "Belmonte/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.26036 -15.03853)",
          name: "Belo Campo/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.42431 -8.336490000000001)",
          name: "Belo Jardim/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.280319999999996 -9.8285)",
          name: "Belo Monte/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.48438 -19.22054)",
          name: "Belo Oriente/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.02439 -20.408549999999998)",
          name: "Belo Vale/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.937439999999995 -2.63645)",
          name: "Belterra/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.36036 -5.45547)",
          name: "Beneditinos/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.55837 -7.22348)",
          name: "Benedito Leite/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.36445 -26.78355)",
          name: "Benedito Novo/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.245400000000004 -1.36144)",
          name: "Benevides/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-70.03151 -4.383450000000001)",
          name: "Benjamin Constant/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.59848 -27.51054)",
          name: "Benjamin Constant do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.812439999999995 -21.27153)",
          name: "Bento de Abreu/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.820310000000006 -5.69448)",
          name: "Bento Fernandes/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.51948 -29.17155)",
          name: "Bento Gonçalves/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.78337 -2.44945)",
          name: "Bequimão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.466370000000005 -16.95253)",
          name: "Berilo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.74536 -15.613529999999999)",
          name: "Berizal/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.55133 -6.45248)",
          name: "Bernardino Batista/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.47444 -23.01354)",
          name: "Bernardino de Campos/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.76437 -4.58446)",
          name: "Bernardo do Mearim/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.8884 -7.87448)",
          name: "Bernardo Sayão/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.13942 -23.85455)",
          name: "Bertioga/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.951370000000004 -7.64148)",
          name: "Bertolínia/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.574360000000006 -17.06354)",
          name: "Bertópolis/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-61.37347 -3.89845)",
          name: "Beruri/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.03433 -8.27649)",
          name: "Betânia/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.79635 -8.148489999999999)",
          name: "Betânia do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.198389999999996 -19.968539999999997)",
          name: "Betim/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.797309999999996 -8.23349)",
          name: "Bezerros/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.75739 -21.606550000000002)",
          name: "Bias Fortes/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.05939 -21.72555)",
          name: "Bicas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.65645 -27.49455)",
          name: "Biguaçu/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.47144 -21.40353)",
          name: "Bilac/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.5024 -18.783540000000002)",
          name: "Biquinhas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.34044 -21.289530000000003)",
          name: "Birigui/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.03942 -23.57355)",
          name: "Biritiba-Mirim/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.80034 -11.617510000000001)",
          name: "Biritinga/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.55347 -26.16154)",
          name: "Bituruna/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.066449999999996 -26.91955)",
          name: "Blumenau/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.78947 -24.242530000000002)",
          name: "Boa Esperança/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.29636 -18.540550000000003)",
          name: "Boa Esperança/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.56641 -21.090539999999997)",
          name: "Boa Esperança/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.21247 -25.63654)",
          name: "Boa Esperança do Iguaçu/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.39143 -21.99354)",
          name: "Boa Esperança do Sul/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.08635 -4.41146)",
          name: "Boa Hora/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.20835 -14.363529999999999)",
          name: "Boa Nova/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.216330000000006 -7.414490000000001)",
          name: "Boa Ventura/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.628460000000004 -24.86954)",
          name: "Boa Ventura de São Roque/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.73234 -5.128469999999999)",
          name: "Boa Viagem/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.24031 -7.25949)",
          name: "Boa Vista/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.40848 -25.43653)",
          name: "Boa Vista da Aparecida/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.314479999999996 -27.663539999999998)",
          name: "Boa Vista das Missões/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.11049 -27.66954)",
          name: "Boa Vista do Buricá/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.81549 -28.60754)",
          name: "Boa Vista do Cadeado/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.30338 -1.7884499999999999)",
          name: "Boa Vista do Gurupi/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.38749 -28.81954)",
          name: "Boa Vista do Incra/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-57.590450000000004 -2.97045)",
          name: "Boa Vista do Ramos/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.67648 -29.351550000000003)",
          name: "Boa Vista do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.60935 -12.66052)",
          name: "Boa Vista do Tupim/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.220310000000005 -9.641499999999999)",
          name: "Boca da Mata/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-67.39850000000001 -8.75246)",
          name: "Boca do Acre/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.51843 -22.13654)",
          name: "Bocaina/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.323350000000005 -6.94348)",
          name: "Bocaina/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.3954 -22.16855)",
          name: "Bocaina de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.94446 -27.74455)",
          name: "Bocaina do Sul/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.81538 -17.108530000000002)",
          name: "Bocaiúva/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.11544 -25.20655)",
          name: "Bocaiúva do Sul/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.413309999999996 -5.98848)",
          name: "Bodó/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.94134 -7.77849)",
          name: "Bodocó/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.71548 -20.53951)",
          name: "Bodoquena/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.25843 -23.10254)",
          name: "Bofete/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.67243 -23.28355)",
          name: "Boituva/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.680319999999995 -9.170499999999999)",
          name: "Bom Conselho/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.2524 -19.73654)",
          name: "Bom Despacho/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.41938 -22.152559999999998)",
          name: "Bom Jardim/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.99438 -3.56546)",
          name: "Bom Jardim/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.58731 -7.7964899999999995)",
          name: "Bom Jardim/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.625460000000004 -28.33755)",
          name: "Bom Jardim da Serra/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.172439999999995 -16.21051)",
          name: "Bom Jardim de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.191399999999994 -21.94755)",
          name: "Bom Jardim de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.58131 -5.9844800000000005)",
          name: "Bom Jesus/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.65033 -6.81748)",
          name: "Bom Jesus/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.39447 -26.734540000000003)",
          name: "Bom Jesus/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.35937 -9.074489999999999)",
          name: "Bom Jesus/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.417469999999994 -28.66855)",
          name: "Bom Jesus/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.418369999999996 -13.25551)",
          name: "Bom Jesus da Lapa/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.52341 -21.01754)",
          name: "Bom Jesus da Penha/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.50435 -14.37252)",
          name: "Bom Jesus da Serra/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.76539 -4.42046)",
          name: "Bom Jesus das Selvas/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.74243 -18.215519999999998)",
          name: "Bom Jesus de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.47439 -19.704539999999998)",
          name: "Bom Jesus do Amparo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.50643 -12.1785)",
          name: "Bom Jesus do Araguaia/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.316379999999995 -19.82955)",
          name: "Bom Jesus do Galho/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.68038 -21.13455)",
          name: "Bom Jesus do Itabapoana/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.67238 -21.11455)",
          name: "Bom Jesus do Norte/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.09848 -26.69054)",
          name: "Bom Jesus do Oeste/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.597480000000004 -26.19354)",
          name: "Bom Jesus do Sul/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.6094 -5.05146)",
          name: "Bom Jesus do Tocantins/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.166399999999996 -8.965489999999999)",
          name: "Bom Jesus do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.46542 -23.13555)",
          name: "Bom Jesus dos Perdões/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.03938 -4.22046)",
          name: "Bom Lugar/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.353480000000005 -29.48955)",
          name: "Bom Princípio/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.64535 -3.1914599999999997)",
          name: "Bom Princípio do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.86649 -27.54454)",
          name: "Bom Progresso/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.14541 -22.471549999999997)",
          name: "Bom Repouso/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.48946 -27.79755)",
          name: "Bom Retiro/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.943479999999994 -29.609550000000002)",
          name: "Bom Retiro do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.76446 -23.710539999999998)",
          name: "Bom Sucesso/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.92932 -6.44548)",
          name: "Bom Sucesso/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.7584 -21.03355)",
          name: "Bom Sucesso/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.14444 -24.31854)",
          name: "Bom Sucesso de Itararé/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.83447 -26.07654)",
          name: "Bom Sucesso do Sul/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.51745 -27.13855)",
          name: "Bombinhas/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-59.833470000000005 3.3595800000000002)",
          name: "Bonfim/RR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.23939 -20.32754)",
          name: "Bonfim/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.87436 -9.16649)",
          name: "Bonfim do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.963420000000006 -16.61852)",
          name: "Bonfinópolis/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.9904 -16.56753)",
          name: "Bonfinópolis de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.82836 -12.702509999999998)",
          name: "Boninal/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.30739 -1.36344)",
          name: "Bonito/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.48248 -21.12152)",
          name: "Bonito/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.729310000000005 -8.4705)",
          name: "Bonito/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.26736 -11.96651)",
          name: "Bonito/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.75439 -15.32352)",
          name: "Bonito de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.51533 -7.31349)",
          name: "Bonito de Santa Fé/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.81042 -13.63651)",
          name: "Bonópolis/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.13531 -7.48249)",
          name: "Boqueirão/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.429489999999994 -29.30454)",
          name: "Boqueirão do Leão/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.07435 -4.4874600000000004)",
          name: "Boqueirão do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.62133 -11.147509999999999)",
          name: "Boquim/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.731370000000005 -12.82351)",
          name: "Boquira/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.53444 -22.27054)",
          name: "Borá/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.77943 -22.19354)",
          name: "Boracéia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-59.594460000000005 -4.388450000000001)",
          name: "Borba/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.626310000000004 -6.80148)",
          name: "Borborema/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.07443000000001 -21.620540000000002)",
          name: "Borborema/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.16541 -22.274549999999998)",
          name: "Borda da Mata/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.971430000000005 -22.56954)",
          name: "Borebi/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.588460000000005 -23.94154)",
          name: "Borrazópolis/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.9005 -28.730529999999998)",
          name: "Bossoroca/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.39541 -21.63354)",
          name: "Botelhos/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.445429999999995 -22.88654)",
          name: "Botucatu/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.01138 -16.87253)",
          name: "Botumirim/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.52337 -13.382520000000001)",
          name: "Botuporã/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.075450000000004 -27.19955)",
          name: "Botuverá/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.77149 -28.36854)",
          name: "Bozano/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.16646 -28.27555)",
          name: "Braço do Norte/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.88646 -27.35855)",
          name: "Braço do Trombudo/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.73949 -27.61454)",
          name: "Braga/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.77339 -1.06344)",
          name: "Bragança/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.54242 -22.95255)",
          name: "Bragança Paulista/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.12247 -24.81653)",
          name: "Braganey/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.01531 -9.2465)",
          name: "Branquinha/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.24239 -20.92155)",
          name: "Brás Pires/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.66843 -3.26245)",
          name: "Brasil Novo/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.03745 -21.25653)",
          name: "Brasilândia/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.0094 -17.01053)",
          name: "Brasilândia de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.52547 -24.19753)",
          name: "Brasilândia do Sul/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.4814 -8.38848)",
          name: "Brasilândia do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-68.74851 -11.01047)",
          name: "Brasiléia/AC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.78235 -4.13146)",
          name: "Brasileira/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.42939 -16.20853)",
          name: "Brasília de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-57.97947 -12.15549)",
          name: "Brasnorte/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.60841 -22.474549999999997)",
          name: "Brasópolis/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.31644 -21.49953)",
          name: "Braúna/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.71638 -19.056540000000002)",
          name: "Braúnas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.38942 -16.431520000000003)",
          name: "Brazabrantes/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.569320000000005 -9.0305)",
          name: "Brejão/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.290369999999996 -20.14655)",
          name: "Brejetuba/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.3573 -6.19148)",
          name: "Brejinho/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.286319999999996 -7.349489999999999)",
          name: "Brejinho/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.56641 -11.0005)",
          name: "Brejinho de Nazaré/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.75036 -3.68446)",
          name: "Brejo/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.18544 -21.166529999999998)",
          name: "Brejo Alegre/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.37131 -8.14649)",
          name: "Brejo da Madre de Deus/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.58138 -4.33446)",
          name: "Brejo de Areia/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.49832 -6.34948)",
          name: "Brejo do Cruz/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.82636 -8.21449)",
          name: "Brejo do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.825320000000005 -6.377479999999999)",
          name: "Brejo dos Santos/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.46632 -10.429509999999999)",
          name: "Brejo Grande/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.413399999999996 -5.69947)",
          name: "Brejo Grande do Araguaia/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.98533 -7.49349)",
          name: "Brejo Santo/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.79635 -13.104519999999999)",
          name: "Brejões/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.96638 -12.483509999999999)",
          name: "Brejolândia/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.46141 -4.00946)",
          name: "Breu Branco/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.48041 -1.68244)",
          name: "Breves/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.161429999999996 -15.24151)",
          name: "Britânia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.59348 -29.551550000000002)",
          name: "Brochier/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.65942 -20.99154)",
          name: "Brodowski/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.127430000000004 -22.284540000000003)",
          name: "Brotas/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.62637 -11.999509999999999)",
          name: "Brotas de Macaúbas/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.200390000000006 -20.143539999999998)",
          name: "Brumadinho/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.66536 -14.204519999999999)",
          name: "Brumado/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.86847 -27.30655)",
          name: "Brunópolis/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.91845 -27.09855)",
          name: "Brusque/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.351420000000005 -22.44155)",
          name: "Bueno Brandão/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.180389999999996 -17.87353)",
          name: "Buenópolis/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.3273 -7.72649)",
          name: "Buenos Aires/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.30034 -14.959529999999999)",
          name: "Buerarema/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.26538 -19.407549999999997)",
          name: "Bugre/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.15632 -8.6235)",
          name: "Buíque/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-67.95251 -9.83146)",
          name: "Bujari/AC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.0454 -1.51544)",
          name: "Bujaru/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.59344 -23.798550000000002)",
          name: "Buri/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.147439999999996 -21.06653)",
          name: "Buritama/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.92536 -3.94246)",
          name: "Buriti/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.044419999999995 -18.14453)",
          name: "Buriti Alegre/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.83437 -5.83747)",
          name: "Buriti Bravo/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.43143 -16.181520000000003)",
          name: "Buriti de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.229400000000005 -5.31647)",
          name: "Buriti do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.86735 -3.1754599999999997)",
          name: "Buriti dos Lopes/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.09835 -5.31247)",
          name: "Buriti dos Montes/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.40139 -4.3464599999999995)",
          name: "Buriticupu/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.4084 -14.47952)",
          name: "Buritinópolis/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.631370000000004 -10.708499999999999)",
          name: "Buritirama/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.01839 -5.59347)",
          name: "Buritirana/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-63.82949 -10.21247)",
          name: "Buritis/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.4234 -15.61852)",
          name: "Buritis/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.708420000000004 -20.19154)",
          name: "Buritizal/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.962390000000006 -17.35153)",
          name: "Buritizeiro/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.96249 -30.12055)",
          name: "Butiá/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-61.20947 -3.3284499999999997)",
          name: "Caapiranga/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-34.9083 -7.51649)",
          name: "Caaporã/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.82247 -22.63452)",
          name: "Caarapó/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.40835 -14.97753)",
          name: "Caatiba/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.28731 -7.48949)",
          name: "Cabaceiras/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.19134 -12.53652)",
          name: "Cabaceiras do Paraguaçu/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.0914 -16.03052)",
          name: "Cabeceira Grande/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.9274 -15.80152)",
          name: "Cabeceiras/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.30936 -4.47646)",
          name: "Cabeceiras do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-34.8343 -6.98149)",
          name: "Cabedelo/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-60.54548 -13.492489999999998)",
          name: "Cabixi/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.0353 -8.28749)",
          name: "Cabo de Santo Agostinho/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.01938 -22.87956)",
          name: "Cabo Frio/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.39641 -21.47254)",
          name: "Cabo Verde/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.338440000000006 -22.45654)",
          name: "Cabrália Paulista/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.13342 -23.30855)",
          name: "Cabreúva/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.307339999999996 -8.51249)",
          name: "Cabrobó/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.01546 -26.77554)",
          name: "Caçador/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.70741 -23.101550000000003)",
          name: "Caçapava/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.4915 -30.51254)",
          name: "Caçapava do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-62.89649 -10.34047)",
          name: "Cacaulândia/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.825500000000005 -29.88454)",
          name: "Cacequi/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-57.679469999999995 -16.0715)",
          name: "Cáceres/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.956340000000004 -12.61852)",
          name: "Cachoeira/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.94244 -18.76352)",
          name: "Cachoeira Alta/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.454390000000004 -19.52554)",
          name: "Cachoeira da Prata/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.64743 -16.66852)",
          name: "Cachoeira de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.77941 -22.35555)",
          name: "Cachoeira de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.49836 -15.966529999999999)",
          name: "Cachoeira de Pajeú/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.9634 -1.01144)",
          name: "Cachoeira do Arari/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.52939 -1.6714499999999999)",
          name: "Cachoeira do Piriá/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.89449 -30.039540000000002)",
          name: "Cachoeira do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.67433 -6.92748)",
          name: "Cachoeira dos Índios/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.50143 -18.51553)",
          name: "Cachoeira Dourada/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.47543 -18.492530000000002)",
          name: "Cachoeira Dourada/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.05837 -2.92745)",
          name: "Cachoeira Grande/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.00941 -22.66555)",
          name: "Cachoeira Paulista/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.65339 -22.463559999999998)",
          name: "Cachoeiras de Macacu/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.922399999999996 -6.12247)",
          name: "Cachoeirinha/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.23331 -8.48649)",
          name: "Cachoeirinha/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.094480000000004 -29.95155)",
          name: "Cachoeirinha/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.11337 -20.849549999999997)",
          name: "Cachoeiro de Itapemirim/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.15732 -7.12949)",
          name: "Cacimba de Areia/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.79031 -6.64248)",
          name: "Cacimba de Dentro/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.058319999999995 -7.21149)",
          name: "Cacimbas/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.990320000000004 -9.400500000000001)",
          name: "Cacimbinhas/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.66047 -27.77054)",
          name: "Cacique Doble/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-61.448479999999996 -11.43848)",
          name: "Cacoal/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.64441 -21.52954)",
          name: "Caconde/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.13144 -18.55752)",
          name: "Caçu/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.222370000000005 -14.50352)",
          name: "Caculé/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.43535 -11.091510000000001)",
          name: "Caém/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.41939 -19.295540000000003)",
          name: "Caetanópolis/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.91036 -14.33852)",
          name: "Caetanos/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.67039 -19.88054)",
          name: "Caeté/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.62332 -8.7735)",
          name: "Caetés/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.475370000000005 -14.069519999999999)",
          name: "Caetité/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.468360000000004 -11.694510000000001)",
          name: "Cafarnaum/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.71645 -22.79353)",
          name: "Cafeara/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.32047 -24.61853)",
          name: "Cafelândia/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.610440000000004 -21.80354)",
          name: "Cafelândia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.51347 -23.90253)",
          name: "Cafezal do Sul/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.23645 -22.01253)",
          name: "Caiabu/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.92538 -20.696550000000002)",
          name: "Caiana/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.81044 -16.95752)",
          name: "Caiapônia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.6385 -28.28853)",
          name: "Caibaté/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.24848 -27.07254)",
          name: "Caibi/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.4113 -6.55448)",
          name: "Caiçara/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.43248 -27.27454)",
          name: "Caiçara/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.068310000000004 -5.078469999999999)",
          name: "Caiçara do Norte/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.998310000000004 -5.76048)",
          name: "Caiçara do Rio do Vento/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.09832 -6.45848)",
          name: "Caicó/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.74142 -23.36455)",
          name: "Caieiras/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.04434 -13.48752)",
          name: "Cairu/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.99845 -21.83253)",
          name: "Caiuá/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.87742 -23.356550000000002)",
          name: "Cajamar/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.67537 -2.88145)",
          name: "Cajapió/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.01138 -3.3214599999999996)",
          name: "Cajari/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.12344 -24.73655)",
          name: "Cajati/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.562329999999996 -6.890479999999999)",
          name: "Cajazeiras/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.39236 -6.76648)",
          name: "Cajazeiras do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.80632 -6.96148)",
          name: "Cajazeirinhas/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.80943 -20.88054)",
          name: "Cajobi/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.154309999999995 -9.397499999999999)",
          name: "Cajueiro/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.33635 -2.9284499999999998)",
          name: "Cajueiro da Praia/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.79738 -20.79155)",
          name: "Cajuri/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.30442 -21.27554)",
          name: "Cajuru/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.33431 -8.7425)",
          name: "Calçado/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.94940999999999 2.49758)",
          name: "Calçoene/AP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.38641 -21.92455)",
          name: "Caldas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.3263 -7.10349)",
          name: "Caldas Brandão/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.62642 -17.74453)",
          name: "Caldas Novas/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.00242 -16.71452)",
          name: "Caldazinha/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.303349999999995 -11.020510000000002)",
          name: "Caldeirão Grande/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.63735 -7.332479999999999)",
          name: "Caldeirão Grande do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.355450000000005 -23.65054)",
          name: "Califórnia/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.097460000000005 -26.600540000000002)",
          name: "Calmon/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.15033 -7.94149)",
          name: "Calumbi/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.49635 -15.41953)",
          name: "Camacan/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.32433 -12.69852)",
          name: "Camaçari/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.157399999999996 -20.62554)",
          name: "Camacho/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.82332 -7.8894899999999994)",
          name: "Camalaú/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.10434 -13.94552)",
          name: "Camamu/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.14541 -22.75555)",
          name: "Camanducaia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.04446 -19.53152)",
          name: "Camapuã/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.81249 -30.851550000000003)",
          name: "Camaquã/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-34.981300000000005 -8.022490000000001)",
          name: "Camaragibe/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.20248 -28.587539999999997)",
          name: "Camargo/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.07444 -23.04654)",
          name: "Cambará/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.145469999999996 -29.048550000000002)",
          name: "Cambará do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.27845 -23.27654)",
          name: "Cambé/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.57846000000001 -23.58354)",
          name: "Cambira/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.65445 -27.02555)",
          name: "Camboriú/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.91138 -21.57555)",
          name: "Cambuci/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.058409999999995 -22.612550000000002)",
          name: "Cambuí/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.29641 -21.85255)",
          name: "Cambuquira/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.496410000000004 -2.24445)",
          name: "Cametá/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.841350000000006 -2.90245)",
          name: "Camocim/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.76231 -8.35949)",
          name: "Camocim de São Félix/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.74837 -18.23954)",
          name: "Campanário/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.40141 -21.83655)",
          name: "Campanha/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.246410000000004 -21.71154)",
          name: "Campestre/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.568310000000004 -8.8465)",
          name: "Campestre/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.09347 -28.795550000000002)",
          name: "Campestre da Serra/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.694419999999994 -16.76252)",
          name: "Campestre de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.36439 -6.172470000000001)",
          name: "Campestre do Maranhão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.79947 -24.59253)",
          name: "Campina da Lagoa/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.8395 -27.989530000000002)",
          name: "Campina das Missões/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.477430000000005 -23.59254)",
          name: "Campina do Monte Alegre/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.82746 -25.07954)",
          name: "Campina do Simão/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.88131 -7.23149)",
          name: "Campina Grande/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.05544 -25.30655)",
          name: "Campina Grande do Sul/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.48643 -19.536530000000003)",
          name: "Campina Verde/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.57141 -13.79051)",
          name: "Campinaçu/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.89544 -14.5165)",
          name: "Campinápolis/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.06142 -22.90655)",
          name: "Campinas/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.88236 -7.66049)",
          name: "Campinas do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.62848 -27.71654)",
          name: "Campinas do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.15242 -14.31451)",
          name: "Campinorte/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.26645 -26.193550000000002)",
          name: "Campo Alegre/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.35131 -9.7825)",
          name: "Campo Alegre/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.78241 -17.63953)",
          name: "Campo Alegre de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.01137 -9.51649)",
          name: "Campo Alegre de Lourdes/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.83636 -8.37649)",
          name: "Campo Alegre do Fidalgo/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.811389999999996 -16.50453)",
          name: "Campo Azul/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.2774 -20.89754)",
          name: "Campo Belo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.76147 -27.899549999999998)",
          name: "Campo Belo do Sul/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.05348 -29.679550000000003)",
          name: "Campo Bom/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.99347 -25.03153)",
          name: "Campo Bonito/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.63731 -6.48848)",
          name: "Campo de Santana/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.493320000000004 -10.733509999999999)",
          name: "Campo do Brito/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.83041 -21.10754)",
          name: "Campo do Meio/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.68344999999999 -25.97855)",
          name: "Campo do Tenente/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.078480000000006 -26.39454)",
          name: "Campo Erê/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.57242 -19.76153)",
          name: "Campo Florido/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.32135 -10.5095)",
          name: "Campo Formoso/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.79232 -9.958499999999999)",
          name: "Campo Grande/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.03635 -7.132479999999999)",
          name: "Campo Grande do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.52845 -25.45955)",
          name: "Campo Largo/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.62936 -3.8124599999999997)",
          name: "Campo Largo do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.08842 -16.297520000000002)",
          name: "Campo Limpo de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.78442 -23.20655)",
          name: "Campo Limpo Paulista/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.45145 -25.36955)",
          name: "Campo Magro/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.16936 -4.828469999999999)",
          name: "Campo MaiorV",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.38346 -24.04653)",
          name: "Campo Mourão/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.80349 -27.67554)",
          name: "Campo Novo/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-63.62749 -10.57147)",
          name: "Campo Novo de Rondônia/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-57.89247 -13.67549)",
          name: "Campo Novo do Parecis/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.18331 -6.24348)",
          name: "Campo Redondo/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.16946 -15.5475)",
          name: "Campo Verde/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.171409999999995 -19.69654)",
          name: "Campos Altos/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.7724 -13.03751)",
          name: "Campos Belos/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.99949 -28.88654)",
          name: "Campos Borges/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-59.14848 -13.89949)",
          name: "Campos de Júlio/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.59141 -22.73955)",
          name: "Campos do Jordão/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.32437 -21.75456)",
          name: "Campos dos Goytacazes/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.75941 -21.23554)",
          name: "Campos Gerais/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.86839 -7.99448)",
          name: "Campos Lindos/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.22547 -27.402549999999998)",
          name: "Campos Novos/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.00344 -22.603540000000002)",
          name: "Campos Novos Paulista/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.37634 -7.074479999999999)",
          name: "Campos Sales/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.65842 -14.25851)",
          name: "Campos Verdes/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.2743 -7.40749)",
          name: "Camutanga/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.182399999999994 -21.021539999999998)",
          name: "Cana Verde/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.62038 -20.68655)",
          name: "Canaã/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.87841 -6.49747)",
          name: "Canaã dos Carajás/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.831430000000005 -11.054490000000001)",
          name: "CanaBrava do Norte/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.92744 -25.01555)",
          name: "Cananéia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.60532 -9.127500000000001)",
          name: "Canapi/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.20443 -18.72553)",
          name: "Canápolis/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.202380000000005 -13.07051)",
          name: "Canápolis/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.16643 -13.550500000000001)",
          name: "Canarana/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.76936 -11.68551)",
          name: "Canarana/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.055409999999995 -22.704549999999998)",
          name: "Canas/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.72137 -7.68848)",
          name: "CanavieiraV",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.94734 -15.67553)",
          name: "Canavieiras/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.11934 -11.80851)",
          name: "Candeal/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.2764 -20.76754)",
          name: "Candeias/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.551339999999996 -12.66852)",
          name: "Candeias/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-63.70149 -8.79147)",
          name: "Candeias do Jamari/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.78949 -29.66954)",
          name: "Candelária/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.86737 -14.411520000000001)",
          name: "Candiba/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.33346 -24.56754)",
          name: "Cândido de Abreu/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.75249 -27.95253)",
          name: "Cândido Godói/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.71738 -1.44744)",
          name: "Cândido Mendes/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.38745 -22.74654)",
          name: "Cândido Mota/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.63143 -21.32554)",
          name: "Cândido Rodrigues/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.23936 -15.50553)",
          name: "Cândido Sales/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.67351 -31.55854)",
          name: "Candiota/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.12647 -25.663539999999998)",
          name: "Candói/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.816469999999995 -29.36655)",
          name: "Canela/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.76845 -27.26555)",
          name: "Canelinha/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.1293 -6.3804799999999995)",
          name: "Canguaretama/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.6765 -31.39555)",
          name: "Canguçu/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.98532 -10.138499999999999)",
          name: "Canhoba/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.191309999999994 -8.8825)",
          name: "Canhotinho/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.312329999999996 -4.35947)",
          name: "Canindé/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.788329999999995 -9.6425)",
          name: "Canindé de São Francisco/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.78344 -23.00654)",
          name: "Canitar/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.18447999999999 -29.91855)",
          name: "Canoas/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.39046 -26.17755)",
          name: "Canoinhas/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.49834 -10.67151)",
          name: "Cansanção/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-60.59747 2.6095800000000002)",
          name: "Cantá/RR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.12647 -25.37454)",
          name: "Cantagalo/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.36838 -21.981559999999998)",
          name: "Cantagalo/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.62738 -18.52654)",
          name: "Cantagalo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.37737 -3.63346)",
          name: "Cantanhede/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.944359999999996 -8.11049)",
          name: "Canto do Buriti/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.164339999999996 -9.9645)",
          name: "Canudos/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.23448 -29.32355)",
          name: "Canudos do Vale/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-64.38349000000001 -6.53446)",
          name: "Canutama/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.18139 -1.19644)",
          name: "Capanema/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.80948 -25.672530000000002)",
          name: "Capanema/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.51247 -27.93755)",
          name: "Capão Alto/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.349430000000005 -24.00655)",
          name: "Capão Bonito/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.395469999999996 -28.12855)",
          name: "Capão Bonito do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.03047 -29.76155)",
          name: "Capão da Canoa/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.692499999999995 -28.92554)",
          name: "Capão do Cipó/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.484500000000004 -31.76355)",
          name: "Capão do Leão/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.907379999999996 -20.521549999999998)",
          name: "Caparaó/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.074310000000004 -9.4085)",
          name: "Capela/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.05332 -10.50351)",
          name: "Capela/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.325480000000006 -29.70055)",
          name: "Capela de Santana/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.73543 -23.471549999999997)",
          name: "Capela do Alto/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.83834 -11.66851)",
          name: "Capela do Alto Alegre/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.61839 -20.923550000000002)",
          name: "Capela Nova/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.51637 -17.69154)",
          name: "Capelinha/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.05442 -20.61654)",
          name: "Capetinga/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.1723 -6.9164900000000005)",
          name: "Capim/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.11739 -19.54954)",
          name: "Capim Branco/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.01335 -11.38151)",
          name: "Capim Grosso/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.57043 -18.68253)",
          name: "Capinópolis/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.61247 -27.34454)",
          name: "Capinzal/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.32737 -4.72847)",
          name: "Capinzal do Norte/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.90133 -4.47047)",
          name: "Capistrano/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.98948 -29.26955)",
          name: "Capitão/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.85837 -19.06754)",
          name: "Capitão Andrade/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.94435 -4.45746)",
          name: "Capitão de Campos/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.711380000000005 -16.32453)",
          name: "Capitão Enéas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.82036 -8.49049)",
          name: "Capitão Gervásio Oliveira/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.61448 -25.479529999999997)",
          name: "Capitão Leônidas Marques/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.065389999999994 -1.7454500000000002)",
          name: "Capitão Poço/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.05041 -20.615540000000003)",
          name: "Capitólio/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.50843 -22.99555)",
          name: "Capivari/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.95846 -28.44555)",
          name: "Capivari de Baixo/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.51548 -30.14555)",
          name: "Capivari do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-67.67651000000001 -10.57347)",
          name: "Capixaba/AC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.62732 -8.7355)",
          name: "Capoeiras/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.27138 -20.17255)",
          name: "Caputira/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.435469999999995 -29.790550000000003)",
          name: "Caraá/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-61.12847 1.8155700000000001)",
          name: "Caracaraí/RR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-57.02449 -22.01452)",
          name: "Caracol/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.33037 -9.279490000000001)",
          name: "Caracol/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.41341 -23.62055)",
          name: "Caraguatatuba/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.69537 -17.18954)",
          name: "Caraí/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.33536 -14.60052)",
          name: "Caraíbas/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.09745 -24.91854)",
          name: "Carambeí/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.73939 -20.87655)",
          name: "Caranaíba/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.80639 -20.954549999999998)",
          name: "Carandaí/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.029379999999996 -20.73355)",
          name: "Carangola/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.66138 -22.18756)",
          name: "Carapebus/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.836420000000004 -23.52355)",
          name: "Carapicuíba/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.13938 -19.790550000000003)",
          name: "Caratinga/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-66.8965 -4.88345)",
          name: "Carauari/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.55732 -5.79348)",
          name: "Caraúbas/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.49231 -7.72749)",
          name: "Caraúbas/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.84335 -3.4764600000000003)",
          name: "Caraúbas do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.26635 -17.732539999999997)",
          name: "Caravelas/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.78648 -28.284540000000003)",
          name: "Carazinho/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.01638 -17.52754)",
          name: "Carbonita/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.949329999999996 -11.94251)",
          name: "Cardeal da Silva/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.914429999999996 -20.08253)",
          name: "Cardoso/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.61638 -21.48855)",
          name: "Cardoso Moreira/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.69940999999999 -22.043550000000003)",
          name: "Careaçu/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-60.36947 -3.76845)",
          name: "Careiro/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-59.82647 -3.22145)",
          name: "Careiro da Várzea/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.420359999999995 -20.26455)",
          name: "Cariacica/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.193329999999996 -4.2324600000000006)",
          name: "Caridade/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.99035 -7.73349)",
          name: "Caridade do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.76538 -14.305520000000001)",
          name: "Carinhanha/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.701330000000006 -10.361509999999999)",
          name: "Carira/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.47334 -3.95146)",
          name: "Cariré/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.16141 -11.891499999999999)",
          name: "Cariri do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.28434 -7.04248)",
          name: "Caririaçu/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.49734 -6.5374799999999995)",
          name: "Cariús/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.83245 -9.95848)",
          name: "Carlinda/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.72144 -23.42554)",
          name: "Carlópolis/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.50448 -29.298550000000002)",
          name: "Carlos Barbosa/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.76636 -17.70354)",
          name: "Carlos Chagas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.91447 -27.718539999999997)",
          name: "Carlos Gomes/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.14238 -19.08954)",
          name: "Carmésia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.609390000000005 -21.93455)",
          name: "Carmo/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.2244 -21.46155)",
          name: "Carmo da Cachoeira/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.8714 -20.55854)",
          name: "Carmo da Mata/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.12941 -22.12255)",
          name: "Carmo de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.7714 -20.184540000000002)",
          name: "Carmo do Cajuru/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.31641 -19.00153)",
          name: "Carmo do Paranaíba/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.11941 -20.97254)",
          name: "Carmo do Rio Claro/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.708420000000004 -15.35451)",
          name: "Carmo do Rio Verde/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.3964 -7.03348)",
          name: "Carmolândia/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.98932 -10.64851)",
          name: "Carmópolis/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.6354 -20.54154)",
          name: "Carmópolis de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.79432 -7.80549)",
          name: "Carnaíba/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.595310000000005 -6.55648)",
          name: "Carnaúba dos Dantas/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.83332 -5.341469999999999)",
          name: "Carnaubais/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.943349999999995 -4.16746)",
          name: "Carnaubal/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.74433 -8.32249)",
          name: "Carnaubeira da Penha/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.68844 -19.69853)",
          name: "Carneirinho/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.37732 -9.4835)",
          name: "Carneiros/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-59.696459999999995 0.88357)",
          name: "Caroebe/RR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.469390000000004 -7.33348)",
          name: "Carolina/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.2553 -7.85149)",
          name: "Carpina/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.6434 -21.48855)",
          name: "Carrancas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.34433 -7.03948)",
          name: "Carrapateira/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.035399999999996 -5.32247)",
          name: "Carrasco Bonito/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.976310000000005 -8.28349)",
          name: "Caruaru/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.020379999999996 -1.19544)",
          name: "Carutapera/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.84141 -21.77855)",
          name: "Carvalhópolis/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.461400000000005 -22.00155)",
          name: "Carvalhos/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.086420000000004 -21.77454)",
          name: "Casa Branca/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.930389999999996 -20.793550000000003)",
          name: "Casa Grande/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.97135 -9.16249)",
          name: "Casa Nova/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.978480000000005 -28.56154)",
          name: "Casca/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.87742 -18.576529999999998)",
          name: "Cascalho Rico/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.23633 -4.13146)",
          name: "Cascavel/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.455470000000005 -24.95653)",
          name: "Cascavel/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.956410000000005 -9.278490000000001)",
          name: "Caseara/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.690479999999994 -28.26955)",
          name: "Caseiros/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.20438 -22.481559999999998)",
          name: "Casimiro de Abreu/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.72131 -7.74149)",
          name: "Casinhas/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.821310000000004 -6.78348)",
          name: "Casserengue/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.92241 -20.58354)",
          name: "Cássia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.17042 -21.283540000000002)",
          name: "Cássia dos Coqueiros/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.73444 -19.11352)",
          name: "Cassilândia/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.92239 -1.29744)",
          name: "Castanhal/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-58.60347 -11.133479999999999)",
          name: "Castanheira/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-61.950480000000006 -11.42748)",
          name: "Castanheiras/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.20143 -18.09152)",
          name: "Castelândia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.18537 -20.60455)",
          name: "Castelo/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.553349999999995 -5.32247)",
          name: "Castelo do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.48845 -20.87253)",
          name: "Castilho/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.01245 -24.79154)",
          name: "Castro/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.42834 -12.76652)",
          name: "Castro Alves/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.697379999999995 -21.38955)",
          name: "Cataguases/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.94242 -18.170530000000003)",
          name: "Catalão/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.97343 -21.13854)",
          name: "Catanduva/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.157469999999996 -25.20353)",
          name: "Catanduvas/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.66247 -27.07154)",
          name: "Catanduvas/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.87834 -6.13148)",
          name: "Catarina/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.40839 -20.07555)",
          name: "Catas Altas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.49839 -20.69055)",
          name: "Catas Altas da Noruega/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.717310000000005 -8.667499999999999)",
          name: "Catende/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.058429999999994 -21.04954)",
          name: "Catiguá/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.609320000000004 -7.12648)",
          name: "Catingueira/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.861380000000004 -12.31851)",
          name: "Catolândia/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.74732 -6.34448)",
          name: "Catolé do Rocha/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.37933 -12.35352)",
          name: "Catu/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.01249 -28.25054)",
          name: "Catuípe/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.51737 -17.312540000000002)",
          name: "Catuji/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.20134 -4.64847)",
          name: "Catunda/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.49442 -16.44752)",
          name: "Caturaí/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.29137 -13.32952)",
          name: "Caturama/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.02731 -7.42049)",
          name: "Caturité/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.963370000000005 -15.35853)",
          name: "Catuti/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.65633 -3.73346)",
          name: "Caucaia/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.458400000000005 -13.79851)",
          name: "Cavalcante/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.9334 -21.977549999999997)",
          name: "Caxambu/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.87948 -27.16154)",
          name: "Caxambu do Sul/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.35636 -4.85947)",
          name: "Caxias/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.17948 -29.16855)",
          name: "Caxias do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.89635 -3.41846)",
          name: "Caxingó/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.4263 -5.63448)",
          name: "Ceará-Mirim/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.26843 -20.90353)",
          name: "Cedral/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.53637 -2.00045)",
          name: "Cedral/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.062329999999996 -6.60748)",
          name: "Cedro/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.23934 -7.7224900000000005)",
          name: "Cedro/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.88432 -10.25251)",
          name: "Cedro de São João/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.711400000000005 -19.14854)",
          name: "Cedro do Abaeté/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.336470000000006 -27.63455)",
          name: "Celso Ramos/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.336400000000005 -8.95149)",
          name: "Centenário/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.99948 -27.76154)",
          name: "Centenário/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.59545 -22.82153)",
          name: "Centenário do Sul/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.11336 -11.13651)",
          name: "Central/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.306369999999994 -18.76254)",
          name: "Central de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.826370000000004 -2.1994499999999997)",
          name: "Central do Maranhão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.19943 -18.584529999999997)",
          name: "Centralina/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.00238 -2.36945)",
          name: "Centro do Guilherme/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.12838 -2.10745)",
          name: "Centro Novo do Maranhão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-60.812479999999994 -13.18948)",
          name: "Cerejeiras/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.598420000000004 -15.30851)",
          name: "Ceres/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.16644 -23.036540000000002)",
          name: "Cerqueira César/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.74443 -23.16555)",
          name: "Cerquilho/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.8135 -31.856550000000002)",
          name: "Cerrito/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.26144 -24.82455)",
          name: "Cerro Azul/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.93449 -29.654539999999997)",
          name: "Cerro Branco/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.34631 -6.04648)",
          name: "Cerro Corá/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.16748 -27.606540000000003)",
          name: "Cerro Grande/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.73949 -30.59055)",
          name: "Cerro Grande do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.7385 -28.14953)",
          name: "Cerro Largo/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.87647 -27.795550000000002)",
          name: "Cerro Negro/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.953430000000004 -23.227549999999997)",
          name: "Cesário Lange/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.84948 -25.14753)",
          name: "Céu Azul/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.77643 -16.97252)",
          name: "Cezarina/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.213300000000004 -8.00149)",
          name: "Chã de Alegria/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.46231 -8.238489999999999)",
          name: "Chã Grande/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.29631 -9.2555)",
          name: "Chã Preta/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.222390000000004 -21.67255)",
          name: "Chácara/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.68837 -20.04455)",
          name: "Chalé/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.06848 -28.05554)",
          name: "Chapada/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.7514 -11.6175)",
          name: "Chapada da Natividade/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.14041 -10.14449)",
          name: "Chapada de Areia/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.53537 -17.087529999999997)",
          name: "Chapada do Norte/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.75046 -15.4615)",
          name: "Chapada dos Guimarães/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.61839 -15.30652)",
          name: "Chapada Gaúcha/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.54945 -18.40852)",
          name: "Chapadão do Céu/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.55446 -27.591549999999998)",
          name: "Chapadão do Lageado/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.62345 -18.794520000000002)",
          name: "Chapadão do Sul/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.36036 -3.74246)",
          name: "Chapadinha/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.61848 -27.096539999999997)",
          name: "Chapecó/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.77843 -22.51054)",
          name: "Charqueada/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.62548 -29.95555)",
          name: "Charqueadas/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.01548 -27.95254)",
          name: "Charrua/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.244350000000004 -3.0344599999999997)",
          name: "Chaval/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.70944 -23.039540000000002)",
          name: "Chavantes/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.98841 -0.16044)",
          name: "Chaves/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.058389999999996 -22.00355)",
          name: "Chiador/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.941489999999995 -27.923540000000003)",
          name: "Chiapetta/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.523469999999996 -25.856540000000003)",
          name: "Chopinzinho/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.141329999999996 -4.84347)",
          name: "Choró/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.49733 -4.30047)",
          name: "Chorozinho/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.09434 -8.9805)",
          name: "Chorrochó/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.45752 -33.691539999999996)",
          name: "Chuí/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-60.90048 -12.552480000000001)",
          name: "Chupinguaia/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.97849 -30.75855)",
          name: "Chuvisca/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.60546 -23.663529999999998)",
          name: "Cianorte/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.38333 -10.60051)",
          name: "Cícero Dantas/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.94546 -23.38053)",
          name: "Cidade Gaúcha/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.92541 -16.07752)",
          name: "Cidade Ocidental/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.782399999999996 -5.17447)",
          name: "Cidelândia/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.23447 -30.16155)",
          name: "Cidreira/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.51733 -11.10051)",
          name: "Cipó/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.36639 -20.905549999999998)",
          name: "Cipotânea/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.87648 -28.34454)",
          name: "Ciríaco/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.26742 -20.39954)",
          name: "Claraval/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.209390000000006 -17.08053)",
          name: "Claro dos Poções/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.89145 -11.51549)",
          name: "Cláudia/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.7664 -20.44354)",
          name: "Cláudio/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.449439999999996 -21.56053)",
          name: "Clementina/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.471470000000004 -26.396539999999998)",
          name: "Clevelândia/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.55135 -14.64153)",
          name: "Coaraci/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-63.14148 -4.08545)",
          name: "Coari/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.55535 -3.47146)",
          name: "Cocal/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.97235 -4.55947)",
          name: "Cocal de Telha/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.326460000000004 -28.601550000000003)",
          name: "Cocal do Sul/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.449349999999995 -3.72946)",
          name: "Cocal dos Alves/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.996430000000004 -14.397509999999999)",
          name: "Cocalinho/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.77642 -15.79452)",
          name: "Cocalzinho de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.53438 -14.184520000000001)",
          name: "Cocos/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-62.05748 -3.83745)",
          name: "Codajás/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.88637 -4.45546)",
          name: "Codó/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.01336 -4.25746)",
          name: "Coelho Neto/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.80338 -20.85755)",
          name: "Coimbra/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.57932 -9.6325)",
          name: "Coité do Nóia/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.20736 -5.094469999999999)",
          name: "Coivaras/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.282399999999996 -0.93744)",
          name: "Colares/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.63136 -19.539550000000002)",
          name: "Colatina/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.455450000000006 -10.81349)",
          name: "Colíder/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.54143 -20.71354)",
          name: "Colina/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.24937 -6.02647)",
          name: "Colinas/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.87048 -29.38855)",
          name: "Colinas/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.078410000000005 -14.15151)",
          name: "Colinas do Sul/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.4754 -8.05948)",
          name: "Colinas do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.7654 -8.72948)",
          name: "Colméia/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-59.023469999999996 -9.411480000000001)",
          name: "Colniza/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.689429999999994 -20.17653)",
          name: "Colômbia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.224450000000004 -25.292550000000002)",
          name: "Colombo/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.79237 -8.18249)",
          name: "Colônia do Gurguéia/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.17836 -7.23148)",
          name: "Colônia do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.72531 -8.9095)",
          name: "Colônia Leopoldina/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.97346 -22.83853)",
          name: "Colorado/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.99449 -28.52454)",
          name: "Colorado/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-60.54248 -13.11749)",
          name: "Colorado do Oeste/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.84038 -18.234540000000003)",
          name: "Coluna/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.5394 -12.79251)",
          name: "Combinado/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.081430000000005 -19.69853)",
          name: "Comendador Gomes/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.20539 -22.02955)",
          name: "Comendador Levy Gasparian/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.793369999999996 -16.29653)",
          name: "Comercinho/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-59.78648 -13.66349)",
          name: "Comodoro/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.50933 -7.5624899999999995)",
          name: "Conceição/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.20441 -21.09454)",
          name: "Conceição da Aparecida/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.732350000000004 -18.59355)",
          name: "Conceição da Barra/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.4724 -21.129550000000002)",
          name: "Conceição da Barra de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.999340000000004 -12.50652)",
          name: "Conceição da Feira/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.388419999999996 -19.915529999999997)",
          name: "Conceição das Alagoas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.45541 -22.160549999999997)",
          name: "Conceição das Pedras/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.69437 -19.92855)",
          name: "Conceição de Ipanema/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.86838 -22.085559999999997)",
          name: "Conceição de Macabu/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.164339999999996 -12.809520000000001)",
          name: "Conceição do Almeida/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.70149 -27.71654)",
          name: "Coronel Bicaco/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.26541 -8.25848)",
          name: "Conceição do Araguaia/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.597350000000006 -7.87849)",
          name: "Conceição do Canindé/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.24437 -20.36855)",
          name: "Conceição do Castelo/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.283339999999995 -11.56451)",
          name: "Conceição do Coité/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.76534 -12.32752)",
          name: "Conceição do Jacuípe/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.89337 -3.83446)",
          name: "Conceição do Lago-Açu/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.42538 -19.03754)",
          name: "Conceição do Mato Dentro/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.8974 -19.75354)",
          name: "Conceição do Pará/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.0854 -21.88155)",
          name: "Conceição do Rio Verde/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.2984 -12.2195)",
          name: "Conceição do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.79841 -22.413549999999997)",
          name: "Conceição dos Ouros/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.17342 -22.33054)",
          name: "Conchal/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.01143 -23.01554)",
          name: "Conchas/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.02847 -27.234540000000003)",
          name: "Concórdia/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.9494 -1.9914500000000002)",
          name: "Concórdia do Pará/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.60132 -6.910480000000001)",
          name: "Condado/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.106300000000005 -7.5864899999999995)",
          name: "Condado/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.61133 -11.81451)",
          name: "Conde/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-34.9083 -7.26049)",
          name: "Conde/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.969370000000005 -14.895529999999999)",
          name: "Condeúba/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.48749 -28.20854)",
          name: "Condor/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.41838 -15.29452)",
          name: "Cônego Marinho/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.98339 -19.63354)",
          name: "Confins/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.569430000000004 -10.64449)",
          name: "Confresa/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.66032 -7.79749)",
          name: "Congo/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.03941 -22.15355)",
          name: "Congonhal/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.85839 -20.50055)",
          name: "Congonhas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.68139 -18.80754)",
          name: "Congonhas do Norte/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.554449999999996 -23.55154)",
          name: "Congonhinhas/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.54242 -19.93754)",
          name: "Conquista/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-59.572480000000006 -14.55849)",
          name: "Conquista D'oeste/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.78639 -20.660549999999997)",
          name: "Conselheiro Lafaiete/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.16945 -23.63054)",
          name: "Conselheiro Mairinck/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.472370000000005 -19.17255)",
          name: "Conselheiro Pena/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.921409999999995 -22.551550000000002)",
          name: "Consolação/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.99248 -27.73554)",
          name: "Constantina/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.05439 -19.93254)",
          name: "Contagem/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.53545 -25.676550000000002)",
          name: "Contenda/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.04136 -13.76352)",
          name: "Contendas do Sincorá/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.44141 -21.18954)",
          name: "Coqueiral/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.09348 -29.17855)",
          name: "Coqueiro Baixo/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.803309999999996 -9.638499999999999)",
          name: "Coqueiro Seco/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.78348 -28.11954)",
          name: "Coqueiros do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.36539 -16.68553)",
          name: "Coração de Jesus/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.75034 -12.233519999999999)",
          name: "Coração de Maria/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.307469999999995 -24.79953)",
          name: "Corbélia/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.361380000000004 -22.02956)",
          name: "Cordeiro/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.457420000000006 -22.482539999999997)",
          name: "Cordeirópolis/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.93537 -15.03953)",
          name: "Cordeiros/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.60748 -26.984540000000003)",
          name: "Cordilheira Alta/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.32139 -19.12554)",
          name: "Cordisburgo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.70141 -21.793550000000003)",
          name: "Cordislândia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.65734 -3.53346)",
          name: "Coreaú/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.946329999999996 -7.01448)",
          name: "Coremas/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.829460000000005 -19.83252)",
          name: "Corguinho/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.45438 -13.82952)",
          name: "Coribe/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.456390000000006 -18.38154)",
          name: "Corinto/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.64745 -23.181540000000002)",
          name: "Cornélio Procópio/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.28637 -18.62254)",
          name: "Coroaci/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.281439999999996 -21.35253)",
          name: "Coroados/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.12437 -4.130459999999999)",
          name: "Coroatá/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.200410000000005 -18.473529999999997)",
          name: "Coromandel/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.066489999999995 -28.38354)",
          name: "Coronel Barros/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.032469999999996 -26.22854)",
          name: "Coronel Domingos Soares/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.21531 -6.3834800000000005)",
          name: "Coronel Ezequiel/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.62938 -19.51954)",
          name: "Coronel Fabriciano/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.703480000000006 -26.90954)",
          name: "Coronel Freitas/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.444329999999994 -6.26048)",
          name: "Coronel João Pessoa/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.92633 -10.2845)",
          name: "Coronel João Sá/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.51336 -8.81649)",
          name: "Coronel José Dias/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.31444 -23.63154)",
          name: "Coronel Macedo/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.66947 -26.51254)",
          name: "Coronel Martins/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.18237 -16.61953)",
          name: "Coronel Murta/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.26639 -21.588549999999998)",
          name: "Coronel Pacheco/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.687479999999994 -29.27355)",
          name: "Coronel Pilar/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.52948 -23.27252)",
          name: "Coronel Sapucaia/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.568470000000005 -25.980539999999998)",
          name: "Coronel Vivida/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.223400000000005 -21.024549999999998)",
          name: "Coronel Xavier Chaves/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.904399999999995 -19.82454)",
          name: "Córrego Danta/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.02041 -22.63055)",
          name: "Córrego do Bom Jesus/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.548429999999996 -16.294520000000002)",
          name: "Córrego do Ouro/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.5554 -20.44954)",
          name: "Córrego Fundo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.39638 -19.83255)",
          name: "Córrego Novo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.36146 -27.585549999999998)",
          name: "Correia Pinto/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.16238 -10.4435)",
          name: "Corrente/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.330310000000004 -9.1295)",
          name: "Correntes/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.63738 -13.34351)",
          name: "Correntina/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.541309999999996 -8.4705)",
          name: "Cortês/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-57.65348 -19.00951)",
          name: "Corumbá/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.809419999999996 -15.92452)",
          name: "Corumbá de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.562419999999996 -18.14253)",
          name: "Corumbaíba/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.62642 -22.22054)",
          name: "Corumbataí/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.12046 -24.10154)",
          name: "Corumbataí do Sul/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-60.88748 -12.96248)",
          name: "Corumbiara/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.24345 -26.42555)",
          name: "Corupá/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.17631 -10.12651)",
          name: "Coruripe/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.196419999999996 -22.64655)",
          name: "Cosmópolis/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.77843 -20.47853)",
          name: "Cosmorama/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-64.2275 -12.44548)",
          name: "Costa Marques/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.12945 -18.544520000000002)",
          name: "Costa Rica/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.25838 -12.02851)",
          name: "Cotegipe/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.919419999999995 -23.60455)",
          name: "Cotia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.696479999999994 -28.99455)",
          name: "Cotiporã/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-58.41446 -9.85848)",
          name: "Cotriguaçu/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.24741 -8.28448)",
          name: "Couto de Magalhães/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.47138 -18.07154)",
          name: "Couto de Magalhães de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.296479999999995 -28.12754)",
          name: "Coxilha/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.76046 -18.50751)",
          name: "Coxim/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.606320000000004 -7.627490000000001)",
          name: "Coxixola/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.768319999999996 -9.618500000000001)",
          name: "Craíbas/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.67834 -5.17847)",
          name: "Crateús/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.40934 -7.2344800000000005)",
          name: "Crato/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.729420000000005 -21.340539999999997)",
          name: "Cravinhos/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.815349999999995 -13.35952)",
          name: "Cravolândia/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.37046 -28.67855)",
          name: "Criciúma/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.91236 -17.23754)",
          name: "Crisólita/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.15033 -11.51151)",
          name: "Crisópolis/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.10149 -27.50054)",
          name: "Crissiumal/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.5194 -20.876540000000002)",
          name: "Cristais/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.42042 -20.39754)",
          name: "Cristais Paulista/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.050489999999996 -31.00355)",
          name: "Cristal/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.24648 -27.454539999999998)",
          name: "Cristal do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.19341 -10.600489999999999)",
          name: "Cristalândia/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.185379999999995 -10.653500000000001)",
          name: "Cristalândia do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.86238 -16.800530000000002)",
          name: "Cristália/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.61441 -16.76952)",
          name: "Cristalina/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.80639 -20.83255)",
          name: "Cristiano Otoni/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.704420000000006 -17.19952)",
          name: "Cristianópolis/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.26441 -22.21255)",
          name: "Cristina/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.75533 -11.47651)",
          name: "Cristinápolis/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.22437 -8.81849)",
          name: "Cristino Castro/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.42138 -12.234509999999998)",
          name: "Cristópolis/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.96942 -14.54951)",
          name: "Crixás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.91941 -11.1005)",
          name: "Crixás do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.91135 -4.400460000000001)",
          name: "Croatá/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.38142 -17.288520000000002)",
          name: "Cromínia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.33739 -20.38454)",
          name: "Crucilândia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.17234 -2.91846)",
          name: "Cruz/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.60649 -28.63954)",
          name: "Cruz Alta/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.10234 -12.67052)",
          name: "Cruz das Almas/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.0863 -7.140490000000001)",
          name: "Cruz do Espírito Santo/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.347460000000005 -26.01754)",
          name: "Cruz Machado/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.79445 -22.67754)",
          name: "Cruzália/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.64948 -27.66854)",
          name: "Cruzaltense/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.96341 -22.57655)",
          name: "Cruzeiro/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.674409999999995 -18.94653)",
          name: "Cruzeiro da Fortaleza/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.12847 -25.61654)",
          name: "Cruzeiro do Iguaçu/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.07347 -23.78553)",
          name: "Cruzeiro do Oeste/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-72.67052000000001 -7.63145)",
          name: "Cruzeiro do Sul/AC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.16146 -22.96253)",
          name: "Cruzeiro do Sul/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.98548 -29.51355)",
          name: "Cruzeiro do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.79032 -6.41248)",
          name: "Cruzeta/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.8084 -21.83955)",
          name: "Cruzília/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.45946 -24.01354)",
          name: "Cruzmaltina/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.425419999999995 -23.89555)",
          name: "Cubatão/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.35131 -6.868480000000001)",
          name: "Cubati/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.157309999999995 -6.48548)",
          name: "Cuité/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.2523 -6.91549)",
          name: "Cuité de Mamanguape/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.52331 -6.893479999999999)",
          name: "Cuitegi/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-62.585480000000004 -9.36347)",
          name: "Cujubim/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.15142 -18.26353)",
          name: "Cumari/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.697309999999995 -8.00649)",
          name: "Cumaru/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.77342 -7.82548)",
          name: "Cumaru do Norte/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.183319999999995 -10.355509999999999)",
          name: "Cumbe/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.96041 -23.07455)",
          name: "Cunha/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.168479999999995 -26.89454)",
          name: "Cunha Porã/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.09348 -26.96954)",
          name: "Cunhataí/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.09937 -18.969549999999998)",
          name: "Cuparaque/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.95031 -8.6175)",
          name: "Cupira/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.908339999999995 -8.992489999999998)",
          name: "Curaçá/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.30638 -10.0365)",
          name: "Curimatá/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.54141 -6.091469999999999)",
          name: "Curionópolis/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.58446 -27.28355)",
          name: "Curitibanos/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.458450000000006 -24.033540000000002)",
          name: "Curiúva/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.41138 -9.00749)",
          name: "Currais/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.51531 -6.26148)",
          name: "Currais Novos/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.2693 -6.71748)",
          name: "Curral de Cima/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.844370000000005 -15.93853)",
          name: "Curral de Dentro/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.90135 -7.83249)",
          name: "Curral Novo do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.19833 -7.58149)",
          name: "Curral Velho/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.79541 -1.8144500000000001)",
          name: "Curralinho/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.77836 -5.583469999999999)",
          name: "Curralinhos/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.11744 -1.88844)",
          name: "Curuá/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.85539 -0.73444)",
          name: "Curuçá/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.86837 -1.82845)",
          name: "Cururupu/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-57.92247 -15.6005)",
          name: "Curvelândia/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.43139 -18.75654)",
          name: "Curvelo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.64332 -8.08849)",
          name: "Custódia/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.802409999999995 0.98557)",
          name: "Cutias/AP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.1774 -14.56452)",
          name: "Damianópolis/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.910309999999996 -6.63248)",
          name: "Damião/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.37042 -16.25352)",
          name: "Damolândia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.7604 -6.71347)",
          name: "Darcinópolis/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.90835 -14.43653)",
          name: "Dário Meira/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.65638 -18.44654)",
          name: "Datas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.84848 -28.38854)",
          name: "David Canabarro/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.42639 -5.55847)",
          name: "Davinópolis/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.56241 -18.15353)",
          name: "Davinópolis/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.280409999999996 -22.50955)",
          name: "Delfim Moreira/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.85441 -20.34454)",
          name: "Delfinópolis/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.99633 -9.3865)",
          name: "Delmiro Gouveia/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.77142 -19.977539999999998)",
          name: "Delta/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.676359999999995 -5.35847)",
          name: "Demerval Lobão/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-57.054469999999995 -14.740499999999999)",
          name: "Denise/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.16547 -22.276529999999998)",
          name: "Deodápolis/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.26833 -5.91748)",
          name: "Deputado Irapuan Pinheiro/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.86149 -27.26554)",
          name: "Derrubadas/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.61942 -21.904539999999997)",
          name: "Descalvado/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.50248 -26.82654)",
          name: "Descanso/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.96839 -21.460549999999998)",
          name: "Descoberto/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.09432 -7.29149)",
          name: "Desterro/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.333400000000005 -20.660549999999997)",
          name: "Desterro de Entre Rios/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.51839 -21.14755)",
          name: "Desterro do Melo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.0685 -28.21353)",
          name: "Dezesseis de Novembro/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.62342 -23.68655)",
          name: "Diadema/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.26433 -7.42849)",
          name: "Diamante/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.86046 -22.65653)",
          name: "Diamante do Norte/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.68047 -25.04354)",
          name: "Diamante do Sul/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.103480000000005 -24.94353)",
          name: "Diamante d'Oeste/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.60038 -18.24954)",
          name: "Diamantina/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.446459999999995 -14.4095)",
          name: "Diamantino/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.821400000000004 -11.6285)",
          name: "Dianópolis/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.297329999999995 -12.61352)",
          name: "Dias d'Ávila/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.2085 -29.70654)",
          name: "Dilermando de Aguiar/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.198389999999996 -20.48855)",
          name: "Diogo de Vasconcelos/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.77738 -19.84355)",
          name: "Dionísio/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.64048 -26.25554)",
          name: "Dionísio Cerqueira/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.25643 -16.23451)",
          name: "Diorama/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.60644 -20.46653)",
          name: "Dirce Reis/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.42836 -9.33849)",
          name: "Dirceu Arcoverde/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.14832 -10.68951)",
          name: "Divina Pastora/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.00439 -20.990550000000002)",
          name: "Divinésia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.14938 -20.61455)",
          name: "Divino/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.48037 -18.77854)",
          name: "Divino das Laranjeiras/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.68637 -20.62055)",
          name: "Divino de São Lourenço/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.73942 -21.66154)",
          name: "Divinolândia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.598380000000006 -18.80454)",
          name: "Divinolândia de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.8844 -20.13954)",
          name: "Divinópolis/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.39339 -13.29551)",
          name: "Divinópolis de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.21441 -9.80049)",
          name: "Divinópolis do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.34536 -15.72653)",
          name: "Divisa Alegre/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.19641 -21.51154)",
          name: "Divisa Nova/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.00036 -15.72653)",
          name: "Divisópolis/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.39443 -21.51754)",
          name: "Dobrada/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.38043 -22.36654)",
          name: "Dois Córregos/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.085480000000004 -29.58055)",
          name: "Dois Irmãos/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.53149 -27.65954)",
          name: "Dois Irmãos das Missões/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.29647 -20.68052)",
          name: "Dois Irmãos do Buriti/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.064409999999995 -9.25849)",
          name: "Dois Irmãos do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.83648 -28.984550000000002)",
          name: "Dois Lajeados/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.10132 -9.3935)",
          name: "Dois Riachos/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.057469999999995 -25.734540000000003)",
          name: "Dois Vizinhos/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.51344 -20.12353)",
          name: "Dolcinópolis/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.918459999999996 -15.8115)",
          name: "Dom Aquino/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.77136 -13.76052)",
          name: "Dom Basílio/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.2714 -16.65253)",
          name: "Dom Bosco/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.10638 -19.37455)",
          name: "Dom Cavati/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.50539 -4.28546)",
          name: "Dom Eliseu/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.64135 -6.95948)",
          name: "Dom Expedito Lopes/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.10849 -30.704549999999998)",
          name: "Dom Feliciano/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.974360000000004 -9.00249)",
          name: "Dom Inocêncio/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.25638 -18.96754)",
          name: "Dom Joaquim/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.19334 -12.905520000000001)",
          name: "Dom Macedo Costa/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.67351 -30.98354)",
          name: "Dom Pedrito/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.43637 -5.0334699999999994)",
          name: "Dom Pedro/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.85047 -29.36955)",
          name: "Dom Pedro de Alcântara/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.96838 -20.160549999999997)",
          name: "Dom Silvério/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.16141 -22.25455)",
          name: "Dom Viçoso/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.659369999999996 -20.36355)",
          name: "Domingos Martins/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.27035 -4.25446)",
          name: "Domingos Mourão/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.72646 -26.98555)",
          name: "Dona Emma/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.811389999999996 -21.31655)",
          name: "Dona Eusébia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.35749 -29.62254)",
          name: "Dona Francisca/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.632310000000004 -6.618480000000001)",
          name: "Dona Inês/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.02339 -21.109550000000002)",
          name: "Dores de Campos/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.929379999999995 -19.05854)",
          name: "Dores de Guanhães/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.6024 -19.46354)",
          name: "Dores do Indaiá/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.845380000000006 -20.68955)",
          name: "Dores do Rio Preto/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.189389999999996 -20.97655)",
          name: "Dores do Turvo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.90341 -20.28754)",
          name: "Doresópolis/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.77135 -8.44749)",
          name: "Dormentes/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.29247 -23.38153)",
          name: "Douradina/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.61347 -22.04052)",
          name: "Douradina/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.318430000000006 -22.100540000000002)",
          name: "Dourado/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.609410000000004 -18.431530000000002)",
          name: "Douradoquara/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.80647 -22.221519999999998)",
          name: "Dourados/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.21846 -23.556530000000002)",
          name: "Doutor Camargo/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.36149 -27.50653)",
          name: "Doutor Maurício Cardoso/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.48345 -26.71455)",
          name: "Doutor Pedrinho/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.99248 -29.08655)",
          name: "Doutor Ricardo/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.37533 -6.09448)",
          name: "Doutor Severiano/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.42044 -24.56854)",
          name: "Doutor Ulysses/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.31944 -16.720509999999997)",
          name: "Doverlândia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.533449999999995 -21.483530000000002)",
          name: "Dracena/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.40444 -22.41454)",
          name: "Duartina/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.52239 -22.051560000000002)",
          name: "Duas Barras/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.418299999999995 -6.68548)",
          name: "Duas Estradas/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.271409999999996 -11.3445)",
          name: "Dueré/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.973420000000004 -21.23654)",
          name: "Dumont/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.944359999999996 -4.15646)",
          name: "Duque Bacelar/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.31239 -22.78656)",
          name: "Duque de Caxias/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.79837 -20.20355)",
          name: "Durandé/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.201440000000005 -22.429540000000003)",
          name: "Echaporã/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.831360000000004 -18.373540000000002)",
          name: "Ecoporanga/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.66543 -17.42652)",
          name: "Edealina/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.93143 -17.33952)",
          name: "Edéia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-69.87450999999999 -6.66045)",
          name: "Eirunepé/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.28447 -23.78753)",
          name: "Eldorado/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.10843 -24.52055)",
          name: "Eldorado/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.61648 -30.08455)",
          name: "Eldorado do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.35541 -6.10447)",
          name: "Eldorado dos Carajás/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.14036 -6.20248)",
          name: "Elesbão Veloso/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.37442 -23.043550000000003)",
          name: "Elias Fausto/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.66437 -8.09749)",
          name: "Eliseu Martins/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.11243 -21.166539999999998)",
          name: "Elisiário/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.52234 -12.94652)",
          name: "Elísio Medrado/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.56541 -21.61055)",
          name: "Elói Mendes/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.71632 -7.108479999999999)",
          name: "Emas/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.83643 -20.98354)",
          name: "Embaúba/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.85242 -23.649549999999998)",
          name: "Embu/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.81142 -23.83255)",
          name: "Embu-Guaçu/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.48345 -21.83353)",
          name: "Emilianópolis/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.87048 -29.23655)",
          name: "Encantado/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.306329999999996 -6.111479999999999)",
          name: "Encanto/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.90936 -15.53153)",
          name: "Encruzilhada/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.52249 -30.54455)",
          name: "Encruzilhada do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.16448 -25.94254)",
          name: "Enéas Marques/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.26946 -23.797530000000002)",
          name: "Engenheiro Beltrão/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.046369999999996 -19.21954)",
          name: "Engenheiro Caldas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.21542 -22.48854)",
          name: "Engenheiro Coelho/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.95038 -17.28053)",
          name: "Engenheiro Navarro/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.678399999999996 -22.55055)",
          name: "Engenheiro Paulo de Frontin/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.91348 -27.70854)",
          name: "Engenho Velho/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.23138 -19.62555)",
          name: "Entre Folhas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.08433 -11.94251)",
          name: "Entre Rios/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.56147 -26.724539999999998)",
          name: "Entre Rios/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.06639 -20.67155)",
          name: "Entre Rios de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.23448 -24.70453)",
          name: "Entre Rios do Oeste/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.73348 -27.52854)",
          name: "Entre Rios do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.26849 -28.36054)",
          name: "Entre-Ijuís/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-70.02351 -7.43346)",
          name: "Envira/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-68.74151 -11.029470000000002)",
          name: "Epitaciolândia/AC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.71832 -6.94548)",
          name: "Equador/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.302479999999996 -27.85554)",
          name: "Erebango/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.27448 -27.63454)",
          name: "Erechim/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.34933 -6.03248)",
          name: "Ererê/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.14036 -13.41852)",
          name: "Érico Cardoso/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.64446 -28.98355)",
          name: "Ermo/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.57348 -28.49954)",
          name: "Ernestina/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.57148 -27.39154)",
          name: "Erval Grande/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.50448 -27.54954)",
          name: "Erval Seco/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.44247 -27.27654)",
          name: "Erval Velho/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.657379999999996 -20.84055)",
          name: "Ervália/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.2243 -8.35949)",
          name: "Escada/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.19047 -28.05455)",
          name: "Esmeralda/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.314389999999996 -19.76354)",
          name: "Esmeraldas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.907379999999996 -20.65055)",
          name: "Espera Feliz/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.86031 -7.02349)",
          name: "Esperança/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.992490000000004 -27.35554)",
          name: "Esperança do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.81147 -23.724529999999998)",
          name: "Esperança Nova/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.5114 -5.34347)",
          name: "Esperantina/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.23436 -3.90246)",
          name: "Esperantina/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.68837 -4.883469999999999)",
          name: "Esperantinópolis/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.836470000000006 -25.42454)",
          name: "Espigão Alto do Iguaçu/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-61.01348 -11.52548)",
          name: "Espigão d'Oeste/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.819370000000006 -14.92652)",
          name: "Espinosa/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.3093 -6.332479999999999)",
          name: "Espírito Santo/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.95141 -22.046550000000003)",
          name: "Espírito Santo do Dourado/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.74142 -22.19155)",
          name: "Espírito Santo do Pinhal/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.43044 -22.69254)",
          name: "Espírito Santo do Turvo/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.94533 -11.79651)",
          name: "Esplanada/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.85049 -28.72554)",
          name: "Espumoso/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.26048 -27.91154)",
          name: "Estação/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.43832999999999 -11.268510000000001)",
          name: "Estância/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.174479999999996 -29.64855)",
          name: "Estância Velha/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.17948 -29.86155)",
          name: "Esteio/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.01741 -22.463549999999998)",
          name: "Estiva/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.94542 -22.271539999999998)",
          name: "Estiva Gerbi/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.45139 -6.56147)",
          name: "Estreito/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.966480000000004 -29.50255)",
          name: "Estrela/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.461380000000005 -21.74255)",
          name: "Estrela Dalva/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.76032 -9.3905)",
          name: "Estrela de Alagoas/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.788399999999996 -19.52254)",
          name: "Estrela do Indaiá/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.07341 -13.86851)",
          name: "Estrela do Norte/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.66045 -22.48853)",
          name: "Estrela do Norte/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.693419999999996 -18.74653)",
          name: "Estrela do Sul/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.40144 -20.28853)",
          name: "Estrela d'Oeste/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.15949 -29.17754)",
          name: "Estrela Velha/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.01434 -10.5085)",
          name: "Euclides da Cunha/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.59046 -22.56153)",
          name: "Euclides da Cunha Paulista/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.14949 -28.52554)",
          name: "Eugênio de Castro/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.18738 -21.099549999999997)",
          name: "Eugenópolis/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.58035 -16.37854)",
          name: "Eunápolis/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.451330000000006 -3.89046)",
          name: "Eusébio/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.51039 -21.551550000000002)",
          name: "Ewbank da Câmara/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.31842 -22.85555)",
          name: "Extrema/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.3073 -5.70648)",
          name: "Extremoz/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.724340000000005 -7.51249)",
          name: "Exu/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.77531 -7.35549)",
          name: "Fagundes/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.698479999999996 -28.88155)",
          name: "Fagundes Varela/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.36143 -15.44651)",
          name: "Faina/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.82941 -21.40654)",
          name: "Fama/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.03038 -20.80855)",
          name: "Faria Lemos/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.56634 -6.9314800000000005)",
          name: "Farias Brito/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.74545 -2.1714499999999997)",
          name: "Faro/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.62346 -24.100530000000003)",
          name: "Farol/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.34848 -29.22555)",
          name: "Farroupilha/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.51044 -23.38854)",
          name: "Fartura/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.79136 -9.484499999999999)",
          name: "Fartura do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.217330000000004 -10.60051)",
          name: "Fátima/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.90741 -10.76149)",
          name: "Fátima/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.51447 -22.37452)",
          name: "Fátima do Sul/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.320460000000004 -24.00154)",
          name: "Faxinal/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.44549 -29.57554)",
          name: "Faxinal do Soturno/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.26047 -26.853540000000002)",
          name: "Faxinal dos Guedes/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.67348 -27.42454)",
          name: "Faxinalzinho/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.780429999999996 -16.183510000000002)",
          name: "Fazenda Nova/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.30845 -25.658549999999998)",
          name: "Fazenda Rio Grande/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.825480000000006 -29.58955)",
          name: "Fazenda Vilanova/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-70.35452 -8.16446)",
          name: "Feijó/AC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.28138 -14.207519999999999)",
          name: "Feira da Mata/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.96734 -12.267520000000001)",
          name: "Feira de Santana/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.67832 -9.900500000000001)",
          name: "Feira Grande/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.38931 -7.951490000000001)",
          name: "Feira Nova/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.31332 -10.26451)",
          name: "Feira Nova/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.686389999999996 -6.9604800000000004)",
          name: "Feira Nova do Maranhão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.24738 -18.07754)",
          name: "Felício dos Santos/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.689319999999995 -5.60347)",
          name: "Felipe Guerra/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.76136 -16.63954)",
          name: "Felisburgo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.89939 -18.75854)",
          name: "Felixlândia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.30648 -29.45155)",
          name: "Feliz/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.30632 -10.29251)",
          name: "Feliz Deserto/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.920449999999995 -12.38649)",
          name: "Feliz Natal/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.97946 -23.916539999999998)",
          name: "Fênix/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.54846 -25.413539999999998)",
          name: "Fernandes Pinheiro/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.082370000000004 -19.154539999999997)",
          name: "Fernandes Tourinho/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-32.41128 -3.84046)",
          name: "Fernando de Noronha/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.89338 -6.15247)",
          name: "Fernando Falcão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.53131 -5.6974800000000005)",
          name: "Fernando Pedroza/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.68543 -21.26454)",
          name: "Fernando Prestes/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.24644 -20.28453)",
          name: "Fernandópolis/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.52144 -22.359540000000003)",
          name: "Fernão/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.36942 -23.54155)",
          name: "Ferraz de Vasconcelos/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.18042 0.8575699999999999)",
          name: "Ferreira Gomes/AP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.2443 -7.4484900000000005)",
          name: "Ferreiros/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.023379999999996 -19.232539999999997)",
          name: "Ferros/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.279379999999996 -20.72655)",
          name: "Fervedouro/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.40345 -23.849539999999998)",
          name: "Figueira/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.174409999999995 -12.1315)",
          name: "Figueirópolis/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-58.74048 -15.445500000000001)",
          name: "Figueirópolis d'Oeste/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.13335 -10.74151)",
          name: "Filadélfia/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.4904 -7.33648)",
          name: "Filadélfia/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.92435 -14.985529999999999)",
          name: "Firmino Alves/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.305429999999994 -16.58252)",
          name: "Firminópolis/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.71531 -9.2735)",
          name: "Flexeiras/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.30748 -26.25754)",
          name: "Flor da Serra do Sul/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.347480000000004 -26.77854)",
          name: "Flor do Sertão/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.38445 -21.67653)",
          name: "Flora Rica/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.30446 -23.31753)",
          name: "Floraí/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.81832 -6.127479999999999)",
          name: "Florânia/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.14544 -20.67753)",
          name: "Floreal/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.97533 -7.86649)",
          name: "Flores/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.18248 -29.02955)",
          name: "Flores da Cunha/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.050399999999996 -14.44951)",
          name: "Flores de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.92736 -7.79148)",
          name: "Flores do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.08146 -23.599529999999998)",
          name: "Floresta/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.56833 -8.60149)",
          name: "Floresta/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.66035 -14.860529999999999)",
          name: "Floresta Azul/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.71341 -7.55448)",
          name: "Floresta do Araguaia/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.79435 -7.46948)",
          name: "Floresta do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.433389999999996 -19.88954)",
          name: "Florestal/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.38745 -22.86353)",
          name: "Florestópolis/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.02336 -6.76748)",
          name: "Floriano/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.08448 -27.86154)",
          name: "Floriano Peixoto/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.954460000000005 -23.087529999999997)",
          name: "Flórida/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.17445 -21.61553)",
          name: "Flórida Paulista/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.73845 -22.90354)",
          name: "Florínia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-66.09249 -2.51444)",
          name: "Fonte Boa/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.34648 -28.98354)",
          name: "Fontoura Xavier/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.4264 -20.46454)",
          name: "Formiga/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.4995 -30.00054)",
          name: "Formigueiro/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.334410000000005 -15.53752)",
          name: "Formosa/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.19139 -6.4354700000000005)",
          name: "Formosa da Serra Negra/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.313469999999995 -24.29353)",
          name: "Formosa do Oeste/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.19338 -11.0485)",
          name: "Formosa do Rio Preto/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.79448 -26.64754)",
          name: "Formosa do Sul/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.88241 -13.65451)",
          name: "Formoso/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.2324 -14.94752)",
          name: "Formoso/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.52941 -11.7975)",
          name: "Formoso do Araguaia/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.091480000000004 -29.382550000000002)",
          name: "Forquetinha/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.26134 -3.79846)",
          name: "Forquilha/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.472460000000005 -28.74755)",
          name: "Forquilhinha/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.71841 -20.849539999999998)",
          name: "Fortaleza de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.5194 -9.057490000000001)",
          name: "Fortaleza do Tabocão/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.177389999999995 -6.96448)",
          name: "Fortaleza dos Nogueiras/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.223490000000005 -28.79754)",
          name: "Fortaleza dos Valos/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.79732 -4.45247)",
          name: "Fortim/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.15837 -5.73347)",
          name: "Fortuna/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.44739 -19.56154)",
          name: "Fortuna de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.588480000000004 -25.548530000000003)",
          name: "Foz do Iguaçu/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.11947 -25.73754)",
          name: "Foz do Jordão/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.921459999999996 -27.02655)",
          name: "Fraiburgo/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.40142 -20.539540000000002)",
          name: "Franca/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.26236 -6.39648)",
          name: "Francinópolis/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.84847 -24.06653)",
          name: "Francisco Alves/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.69336 -6.623480000000001)",
          name: "Francisco Ayres/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.35237 -16.99353)",
          name: "Francisco Badaró/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.055479999999996 -26.08154)",
          name: "Francisco Beltrão/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.11933 -6.07848)",
          name: "Francisco Dantas/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.23439 -17.31553)",
          name: "Francisco Dumont/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.78835 -7.33148)",
          name: "Francisco Macedo/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.74542 -23.28255)",
          name: "Francisco Morato/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.48838 -16.476529999999997)",
          name: "Francisco Sá/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.13835 -6.99348)",
          name: "Francisco Santos/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.00937 -17.960539999999998)",
          name: "Franciscópolis/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.72742 -23.32255)",
          name: "Franco da Rocha/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.81635 -3.76046)",
          name: "Frecheirinha/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.39448 -27.359540000000003)",
          name: "Frederico Westphalen/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.42937 -18.06654)",
          name: "Frei Gaspar/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.92237 -18.545540000000003)",
          name: "Frei Inocêncio/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.76638 -18.16854)",
          name: "Frei Lagonegro/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.45631 -6.40348)",
          name: "Frei Martinho/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.91231 -7.9404900000000005)",
          name: "Frei Miguelinho/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.53433 -10.54951)",
          name: "Frei Paulo/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.80546 -27.17555)",
          name: "Frei Rogério/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.19943 -20.26853)",
          name: "Fronteira/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.92536 -16.89154)",
          name: "Fronteira dos Vales/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.616350000000004 -7.08848)",
          name: "Fronteiras/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.53337 -16.13153)",
          name: "Fruta de Leite/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.94143 -20.02553)",
          name: "Frutal/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.840320000000006 -6.15848)",
          name: "Frutuoso Gomes/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.40736 -19.93355)",
          name: "Fundão/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.05639 -19.36854)",
          name: "Funilândia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.55544 -21.53153)",
          name: "Gabriel Monteiro/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.791309999999996 -7.583489999999999)",
          name: "Gado Bravo/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.553439999999995 -22.29154)",
          name: "Gália/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.53837 -18.99954)",
          name: "Galiléia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.27531 -5.091469999999999)",
          name: "Galinhos/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.68647 -26.45554)",
          name: "Galvão/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.38731 -8.5845)",
          name: "Gameleira/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.67042 -16.46452)",
          name: "Gameleira de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.12437 -15.08252)",
          name: "Gameleiras/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.48734 -13.74452)",
          name: "Gandu/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.493320000000004 -8.8905)",
          name: "Garanhuns/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.08332 -9.9685)",
          name: "Gararu/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.656439999999996 -22.21154)",
          name: "Garça/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.534479999999995 -29.25655)",
          name: "Garibaldi/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.61345 -28.02356)",
          name: "Garopaba/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.05339 -1.93445)",
          name: "Garrafão do Norte/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.6395 -28.18453)",
          name: "Garruchos/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.855450000000005 -26.027549999999998)",
          name: "Garuva/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.959450000000004 -26.93155)",
          name: "Gaspar/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.187439999999995 -20.79953)",
          name: "Gastão Vidigal/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.08044 -13.2425)",
          name: "Gaúcha do Norte/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.094480000000004 -27.58454)",
          name: "Gaurama/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.78434 -11.47151)",
          name: "Gavião/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.49543 -21.83954)",
          name: "Gavião Peixoto/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.36135 -7.15848)",
          name: "Geminiano/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.76048 -29.905549999999998)",
          name: "General Câmara/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.31646 -26.42854)",
          name: "General Carneiro/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.75544 -15.711509999999999)",
          name: "General Carneiro/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.984320000000004 -10.68951)",
          name: "General Maynard/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.36144 -20.64853)",
          name: "General Salgado/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.45434 -4.053459999999999)",
          name: "General Sampaio/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.03648 -28.43054)",
          name: "Gentil/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.50636 -11.429509999999999)",
          name: "Gentio do Ouro/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.92944 -21.79954)",
          name: "Getulina/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.228480000000005 -27.890539999999998)",
          name: "Getúlio Vargas/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.34438 -9.83249)",
          name: "Gilbués/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.82932 -9.8845)",
          name: "Girau do Ponciano/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.35049 -28.02854)",
          name: "Giruá/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.697379999999995 -16.850530000000003)",
          name: "Glaucilândia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.21144 -21.384529999999998)",
          name: "Glicério/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.25733 -9.339500000000001)",
          name: "Glória/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.233470000000004 -22.41853)",
          name: "Glória de Dourados/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.293299999999995 -8.00249)",
          name: "Glória do Goitá/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-58.35647 -15.768500000000001)",
          name: "Glória d'Oeste/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.76748 -29.88155)",
          name: "Glorinha/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.78038 -1.40344)",
          name: "Godofredo Viana/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.924459999999996 -24.17754)",
          name: "Godoy Moreira/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.22337 -18.98255)",
          name: "Goiabeira/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.0033 -7.56149)",
          name: "Goiana/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.20239 -21.537550000000003)",
          name: "Goianá/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.02442 -16.51152)",
          name: "Goianápolis/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.08542 -18.13353)",
          name: "Goiandira/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.11742 -15.31751)",
          name: "Goianésia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.0974 -3.8434600000000003)",
          name: "Goianésia do Pará/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.210300000000004 -6.26748)",
          name: "Goianinha/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.42642 -16.49652)",
          name: "Goianira/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.93241 -8.776480000000001)",
          name: "Goianorte/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.14043 -15.934520000000001)",
          name: "Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.314389999999996 -7.7104800000000004)",
          name: "Goiatins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.357420000000005 -18.01352)",
          name: "Goiatuba/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.02847 -24.18553)",
          name: "Goioerê/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.99346 -25.19554)",
          name: "Goioxim/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.856410000000004 -22.65955)",
          name: "Gonçalves/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.299369999999996 -5.151470000000001)",
          name: "Gonçalves Dias/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.46535 -14.32253)",
          name: "Gongogi/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.47938 -18.82254)",
          name: "Gonzaga/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.74139 -18.454539999999998)",
          name: "Gouveia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.06643 -18.64253)",
          name: "Gouvelândia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.27137 -5.02247)",
          name: "Governador Archer/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.55945 -27.31555)",
          name: "Governador Celso Ramos/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.521319999999996 -5.4594700000000005)",
          name: "Governador Dix-Sept Rosado/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.36139 -5.74947)",
          name: "Governador Edison Lobão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.247370000000004 -5.3234699999999995)",
          name: "Governador Eugênio Barros/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-62.73749 -10.61047)",
          name: "Governador Jorge Teixeira/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.461360000000006 -19.25255)",
          name: "Governador Lindenberg/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.47135 -14.81053)",
          name: "Governador Lomanto Júnior/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.07437 -5.46947)",
          name: "Governador Luiz Rocha/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.04334 -12.60252)",
          name: "Governador Mangabeira/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.676379999999995 -3.42646)",
          name: "Governador Newton Bello/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.88538 -2.12645)",
          name: "Governador Nunes Freire/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.949369999999995 -18.85154)",
          name: "Governador Valadares/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.75334 -4.04646)",
          name: "Graça/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.33437 -5.41047)",
          name: "Graça Aranha/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.198319999999995 -10.22751)",
          name: "Gracho Cardoso/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.13938 -5.81947)",
          name: "Grajaú/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.87447 -29.379550000000002)",
          name: "Gramado/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.918479999999995 -27.44454)",
          name: "Gramado dos Loureiros/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.57949 -29.268539999999998)",
          name: "Gramado Xavier/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.50646 -24.146539999999998)",
          name: "Grandes Rios/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.61534 -7.71649)",
          name: "Granito/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.826350000000005 -3.12046)",
          name: "Granja/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.21833 -6.8884799999999995)",
          name: "Granjeiro/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.89038 -16.559530000000002)",
          name: "Grão Mogol/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.21546 -28.18555)",
          name: "Grão Pará/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.56531 -8.20149)",
          name: "Gravatá/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.99248 -29.94455)",
          name: "Gravataí/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.03546 -28.33155)",
          name: "Gravatal/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.38334 -3.9134599999999997)",
          name: "Groaíras/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.155319999999996 -4.98047)",
          name: "Grossos/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.72241 -18.49453)",
          name: "Grupiara/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.690479999999994 -28.54155)",
          name: "Guabiju/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.98145 -27.08655)",
          name: "Guabiruba/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.679379999999995 -20.77655)",
          name: "Guaçuí/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.569370000000006 -6.7874799999999995)",
          name: "Guadalupe/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.325480000000006 -30.11455)",
          name: "Guaíba/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.79944 -21.62254)",
          name: "Guaiçara/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.897439999999996 -21.910539999999997)",
          name: "Guaimbê/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.25648 -24.08053)",
          name: "Guaíra/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.31142 -20.31854)",
          name: "Guaíra/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.68646 -22.93453)",
          name: "Guairaçá/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.63733 -4.0404599999999995)",
          name: "Guaiúba/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-72.58452 -7.54645)",
          name: "Guajará/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-65.3395 -10.78347)",
          name: "Guajará-Mirim/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.94036 -14.54752)",
          name: "Guajeru/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.320310000000006 -5.10847)",
          name: "Guamaré/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.80546 -25.19154)",
          name: "Guamiranga/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.78137 -14.22352)",
          name: "Guanambi/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.93338 -18.77554)",
          name: "Guanhães/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.918409999999994 -20.76254)",
          name: "Guapé/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.22043 -20.795530000000003)",
          name: "Guapiaçu/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.53344 -24.18555)",
          name: "Guapiara/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.98239 -22.537560000000003)",
          name: "Guapimirim/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.04045 -23.51654)",
          name: "Guapirama/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.53242 -16.83152)",
          name: "Guapó/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.89048 -28.84655)",
          name: "Guaporé/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.77946 -23.343529999999998)",
          name: "Guaporema/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.82442 -20.42854)",
          name: "Guará/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.49031 -6.85548)",
          name: "Guarabira/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.20745 -21.02853)",
          name: "Guaraçaí/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.65045 -22.973529999999997)",
          name: "Guaraci/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.945429999999995 -20.49953)",
          name: "Guaraci/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.51848 -26.599539999999998)",
          name: "Guaraciaba/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.00839 -20.57155)",
          name: "Guaraciaba/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.74834 -4.16746)",
          name: "Guaraciaba do Norte/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.673379999999995 -17.01453)",
          name: "Guaraciama/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.5104 -8.83449)",
          name: "Guaraí/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.02442 -15.61451)",
          name: "Guaraíta/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.93333 -4.26346)",
          name: "Guaramiranga/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.00345 -26.47355)",
          name: "Guaramirim/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.803419999999996 -21.29954)",
          name: "Guaranésia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.04739 -21.35255)",
          name: "Guarani/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.55849 -28.14153)",
          name: "Guarani das Missões/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.4804 -13.93651)",
          name: "Guarani de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.33944 -20.07553)",
          name: "Guarani d'Oeste/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.87847 -25.10154)",
          name: "Guaraniaçu/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.59044 -21.89554)",
          name: "Guarantã/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.91044 -9.78848)",
          name: "Guarantã do Norte/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.51137 -20.658549999999998)",
          name: "Guarapari/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.45846 -25.39554)",
          name: "Guarapuava/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.329440000000005 -25.30755)",
          name: "Guaraqueçaba/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.03839 -21.73255)",
          name: "Guarará/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.64344 -21.26153)",
          name: "Guararapes/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.035419999999995 -23.41555)",
          name: "Guararema/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.78335 -16.58454)",
          name: "Guaratinga/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.19341 -22.81655)",
          name: "Guaratinguetá/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.57544 -25.88355)",
          name: "Guaratuba/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.09841 -17.77153)",
          name: "Guarda-Mor/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.18443 -23.373540000000002)",
          name: "Guareí/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.22843 -21.36054)",
          name: "Guariba/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.687369999999994 -9.398489999999999)",
          name: "Guaribas/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.702420000000004 -14.73251)",
          name: "Guarinos/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.25642 -23.993550000000003)",
          name: "Guarujá/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.52848 -26.38554)",
          name: "Guarujá do Sul/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.53342 -23.463549999999998)",
          name: "Guarulhos/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.787479999999995 -27.13254)",
          name: "Guatambú/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.038419999999995 -21.49754)",
          name: "Guatapará/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.71341 -21.30554)",
          name: "Guaxupé/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.11448 -21.45852)",
          name: "Guia Lopes da Laguna/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.79738 -21.152549999999998)",
          name: "Guidoval/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.60137 -2.13345)",
          name: "Guimarães/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.79341 -18.84453)",
          name: "Guimarânia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.75845 -16.34951)",
          name: "Guiratinga/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.71838 -21.00855)",
          name: "Guiricema/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.786429999999996 -19.21353)",
          name: "Gurinhatã/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.42431 -7.12449)",
          name: "Gurinhém/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.48931 -7.24749)",
          name: "Gurjão/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.64042 -1.4054399999999998)",
          name: "Gurupá/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.069410000000005 -11.7295)",
          name: "Gurupi/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.66244 -20.65053)",
          name: "Guzolândia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.42648 -29.548550000000002)",
          name: "Harmonia/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.829420000000006 -15.71951)",
          name: "Heitoraí/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.54241 -22.06755)",
          name: "Heliodora/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.28633 -10.68351)",
          name: "Heliópolis/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.38544 -22.00454)",
          name: "Herculândia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.39651 -32.02454)",
          name: "Herval/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.49547 -27.19454)",
          name: "Herval d'Oeste/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.65349 -29.407539999999997)",
          name: "Herveiras/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.43834 -4.40847)",
          name: "Hidrolândia/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.229420000000005 -16.962519999999998)",
          name: "Hidrolândia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.46542 -14.72451)",
          name: "Hidrolina/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.056419999999996 -22.63355)",
          name: "Holambra/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.38747 -26.14154)",
          name: "Honório Serpa/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.49633 -4.09946)",
          name: "Horizonte/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.30849 -27.626540000000002)",
          name: "Horizontina/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.220420000000004 -22.85855)",
          name: "Hortolândia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.55636 -5.98947)",
          name: "Hugo Napoleão/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.86951 -31.404539999999997)",
          name: "Hulha Negra/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.97449 -27.56354)",
          name: "Humaitá/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-63.02148 -7.50646)",
          name: "Humaitá/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.461360000000006 -2.59845)",
          name: "Humberto de Campos/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.02543 -21.890539999999998)",
          name: "Iacanga/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.6324 -14.09651)",
          name: "Iaciara/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.68944 -21.858530000000002)",
          name: "Iacri/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.21235 -12.767520000000001)",
          name: "Iaçu/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.21838 -19.43755)",
          name: "Iapu/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.16344 -22.87154)",
          name: "Iaras/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.846320000000006 -9.0465)",
          name: "Iati/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.188449999999996 -23.849539999999998)",
          name: "Ibaiti/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.13549 -29.41954)",
          name: "Ibarama/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.75333 -4.80447)",
          name: "Ibaretama/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.99743 -21.95554)",
          name: "Ibaté/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.93931 -8.9735)",
          name: "Ibateguara/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.51137 -20.234550000000002)",
          name: "Ibatiba/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.01247 -25.106530000000003)",
          name: "Ibema/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.963390000000004 -21.43055)",
          name: "Ibertioga/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.53941 -19.47854)",
          name: "Ibiá/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.85548 -28.05754)",
          name: "Ibiaçá/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.91439 -16.861530000000002)",
          name: "Ibiaí/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.23747 -27.181540000000002)",
          name: "Ibiam/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.88935 -3.92346)",
          name: "Ibiapina/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.40533 -7.50149)",
          name: "Ibiara/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.25737 -14.25952)",
          name: "Ibiassucê/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.588350000000005 -14.86553)",
          name: "Ibicaraí/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.36547 -27.09254)",
          name: "Ibicaré/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.28536 -13.411520000000001)",
          name: "Ibicoara/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.98735 -14.84253)",
          name: "Ibicuí/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.63933 -4.97447)",
          name: "Ibicuitinga/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.69032 -8.54149)",
          name: "Ibimirim/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.01136 -11.64151)",
          name: "Ibipeba/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.48637 -12.88251)",
          name: "Ibipitanga/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.048449999999995 -23.26954)",
          name: "Ibiporã/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.934349999999995 -12.65151)",
          name: "Ibiquera/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.24143 -21.08054)",
          name: "Ibirá/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.16438 -15.664530000000001)",
          name: "Ibiracatu/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.12242 -20.46254)",
          name: "Ibiraci/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.37036 -19.83255)",
          name: "Ibiraçu/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.63648 -28.37055)",
          name: "Ibiraiaras/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.17931 -8.5815)",
          name: "Ibirajuba/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.51845 -27.05755)",
          name: "Ibirama/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.374340000000004 -14.164530000000001)",
          name: "Ibirapitanga/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.10936 -17.68854)",
          name: "Ibirapuã/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.51148 -28.62454)",
          name: "Ibirapuitã/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.073440000000005 -22.81854)",
          name: "Ibirarema/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.64135 -14.06752)",
          name: "Ibirataia/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.05939 -20.02254)",
          name: "Ibirité/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.09049 -28.62854)",
          name: "Ibirubá/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.218360000000004 -12.65251)",
          name: "Ibitiara/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.82943 -21.75854)",
          name: "Ibitinga/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.66737 -20.54155)",
          name: "Ibitirama/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.97836 -11.547509999999999)",
          name: "Ibititá/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.44041 -22.06155)",
          name: "Ibitiúra de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.748400000000004 -21.15355)",
          name: "Ibituruna/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.22343 -23.65655)",
          name: "Ibiúna/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.22137 -12.18551)",
          name: "Ibotirama/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.35532 -4.71347)",
          name: "Icapuí/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.300459999999994 -28.713549999999998)",
          name: "Içara/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.90639 -16.21753)",
          name: "Icaraí de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.614470000000004 -23.39653)",
          name: "Icaraíma/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.06637 -2.77645)",
          name: "Icatu/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.195429999999995 -20.34253)",
          name: "Icém/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.192339999999994 -11.749509999999999)",
          name: "Ichu/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.86233 -6.40148)",
          name: "Icó/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.81137 -20.793550000000003)",
          name: "Iconha/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.553309999999996 -5.824479999999999)",
          name: "Ielmo Marinho/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.07645 -22.66153)",
          name: "Iepê/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.63432 -9.5375)",
          name: "Igaci/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.71437 -13.773520000000001)",
          name: "Igaporã/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.558429999999994 -22.50954)",
          name: "Igaraçu do Tietê/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.14933 -7.1814800000000005)",
          name: "Igaracy/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.74742 -20.03854)",
          name: "Igarapava/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.302389999999995 -20.07054)",
          name: "Igarapé/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.227380000000004 -3.66146)",
          name: "Igarapé do Meio/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.85337 -4.585459999999999)",
          name: "Igarapé Grande/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.61839 -1.12744)",
          name: "Igarapé-Açu/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.9604 -1.9754500000000002)",
          name: "Igarapé-Miri/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-34.9063 -7.83449)",
          name: "Igarassu/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.15642 -23.204549999999998)",
          name: "Igaratá/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.7094 -19.95554)",
          name: "Igaratinga/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.14234 -13.82652)",
          name: "Igrapiúna/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.66232 -10.12551)",
          name: "Igreja Nova/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.79047 -29.57455)",
          name: "Igrejinha/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.22938 -22.83956)",
          name: "Iguaba Grande/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.08935 -14.75653)",
          name: "Iguaí/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.555429999999994 -24.70855)",
          name: "Iguape/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.51532 -7.83549)",
          name: "Iguaraci/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.82846000000001 -23.19753)",
          name: "Iguaraçu/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.711400000000005 -20.17454)",
          name: "Iguatama/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.561479999999996 -23.68053)",
          name: "Iguatemi/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.29934 -6.35948)",
          name: "Iguatu/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.08447 -24.71753)",
          name: "Iguatu/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.925399999999996 -21.170550000000002)",
          name: "Ijaci/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.91549 -28.38854)",
          name: "Ijuí/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.54043 -24.74155)",
          name: "Ilha Comprida/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.54032 -10.43651)",
          name: "Ilha das Flores/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-34.8263 -7.74849)",
          name: "Ilha de Itamaracá/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.82135 -2.85845)",
          name: "Ilha Grande/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.34344 -20.43353)",
          name: "Ilha Solteira/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.35841 -23.77855)",
          name: "Ilhabela/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.04934 -14.78953)",
          name: "Ilhéus/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.827450000000006 -26.90055)",
          name: "Ilhota/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.83341 -20.93654)",
          name: "Ilicínea/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.12448 -28.92754)",
          name: "Ilópolis/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.50932 -7.390490000000001)",
          name: "Imaculada/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.82045 -28.341559999999998)",
          name: "Imaruí/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.76145 -24.44554)",
          name: "Imbaú/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.12847 -29.97555)",
          name: "Imbé/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.97137 -19.59755)",
          name: "Imbé de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.670449999999995 -28.240560000000002)",
          name: "Imbituba/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.60446 -25.230539999999998)",
          name: "Imbituva/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.424459999999996 -27.493550000000003)",
          name: "Imbuia/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.77748 -29.35555)",
          name: "Imigrante/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.47639 -5.52647)",
          name: "Imperatriz/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.079460000000005 -25.57154)",
          name: "Inácio Martins/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.98743 -18.48852)",
          name: "Inaciolândia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.19846 -22.74953)",
          name: "Inajá/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.82733 -8.903500000000001)",
          name: "Inajá/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.328410000000005 -22.31755)",
          name: "Inconfidentes/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.19737 -15.492529999999999)",
          name: "Indaiabira/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.23245 -26.89855)",
          name: "Indaial/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.21842 -23.09055)",
          name: "Indaiatuba/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.188489999999994 -27.83354)",
          name: "Independência/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.30934 -5.396470000000001)",
          name: "Independência/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.25245 -22.17453)",
          name: "Indiana/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.696459999999995 -23.476529999999997)",
          name: "Indianópolis/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.91742 -19.039530000000003)",
          name: "Indianópolis/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.29044 -19.980529999999998)",
          name: "Indiaporã/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.98743 -17.14252)",
          name: "Indiara/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.51233 -11.51951)",
          name: "Indiaroba/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-58.57348 -15.494499999999999)",
          name: "Indiavaí/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.61331 -7.26849)",
          name: "Ingá/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.9174 -21.40155)",
          name: "Ingaí/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.46032 -7.67649)",
          name: "Ingazeira/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.01749 -27.88354)",
          name: "Inhacorá/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.35333 -11.78451)",
          name: "Inhambupe/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.91739 -1.4304400000000002)",
          name: "Inhangapi/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.75433 -9.2195)",
          name: "Inhapi/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.12038 -19.54955)",
          name: "Inhapim/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.39039 -19.49154)",
          name: "Inhaúma/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.70835 -6.668480000000001)",
          name: "Inhuma/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.49642 -16.358520000000002)",
          name: "Inhumas/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.36139 -18.72954)",
          name: "Inimutaba/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.93045 -19.726519999999997)",
          name: "Inocência/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.962450000000004 -21.77053)",
          name: "Inúbia Paulista/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.242470000000004 -27.00454)",
          name: "Iomerê/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.41938 -19.41454)",
          name: "Ipaba/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.16042 -17.72253)",
          name: "Ipameri/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.713370000000005 -19.801550000000002)",
          name: "Ipanema/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.85532 -5.49847)",
          name: "Ipanguaçu/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.75935 -4.90047)",
          name: "Ipaporanga/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.53738 -19.468539999999997)",
          name: "Ipatinga/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.71933 -6.79048)",
          name: "Ipaumirim/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.62644 -23.05754)",
          name: "Ipaussu/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.279469999999996 -28.82055)",
          name: "Ipê/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.308339999999994 -12.30052)",
          name: "Ipecaetá/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.689429999999994 -23.350550000000002)",
          name: "Iperó/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.71943 -22.43654)",
          name: "Ipeúna/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.94343 -18.69253)",
          name: "Ipiaçu/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.73435 -14.13752)",
          name: "Ipiaú/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.38743 -20.657529999999998)",
          name: "Ipiguá/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.773469999999996 -27.404539999999997)",
          name: "Ipira/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.73734 -12.15851)",
          name: "Ipirá/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.584450000000004 -25.02454)",
          name: "Ipiranga/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.67142 -15.17051)",
          name: "Ipiranga de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.741350000000004 -6.82848)",
          name: "Ipiranga do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.42648 -27.93754)",
          name: "Ipiranga do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-71.69552 -7.05145)",
          name: "Ipixuna/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.49439 -2.5584499999999997)",
          name: "Ipixuna do Pará/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.064299999999996 -8.3995)",
          name: "Ipojuca/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.118430000000004 -16.442520000000002)",
          name: "Iporá/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.70447 -24.00353)",
          name: "Iporã/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.53548 -26.98854)",
          name: "Iporã do Oeste/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.59344 -24.58655)",
          name: "Iporanga/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.71134 -4.3224599999999995)",
          name: "Ipu/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.01242 -20.43854)",
          name: "Ipuã/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.455470000000005 -26.63154)",
          name: "Ipuaçu/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.14934 -7.65249)",
          name: "Ipubi/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.19932 -6.81448)",
          name: "Ipueira/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.71934 -4.54247)",
          name: "Ipueiras/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.46341 -11.2395)",
          name: "Ipueiras/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.19041 -22.099549999999997)",
          name: "Ipuiúna/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.13647 -27.07754)",
          name: "Ipumirim/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.61437 -11.82051)",
          name: "Ipupiara/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.306329999999996 -5.81248)",
          name: "Iracema/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-61.04147 2.18158)",
          name: "Iracema/RR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.355470000000004 -24.428530000000002)",
          name: "Iracema do Oeste/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.51942 -22.58154)",
          name: "Iracemápolis/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.27448 -26.82354)",
          name: "Iraceminha/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.25148 -27.19454)",
          name: "Iraí/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.46141 -18.98453)",
          name: "Iraí de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.08435 -13.25152)",
          name: "Irajuba/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.95136 -13.28652)",
          name: "Iramaia/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-60.18647 -3.28545)",
          name: "Iranduba/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.90247 -27.02554)",
          name: "Irani/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.40943 -21.27954)",
          name: "Irapuã/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.34545 -21.57153)",
          name: "Irapuru/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.61936 -12.249509999999999)",
          name: "Iraquara/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.76734 -12.050510000000001)",
          name: "Irará/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.65146 -25.46754)",
          name: "Irati/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.89248 -26.65654)",
          name: "Irati/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.783339999999995 -3.74646)",
          name: "Irauçuba/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.85636 -11.30451)",
          name: "Irecê/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.10646 -24.42454)",
          name: "Iretama/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.800459999999994 -26.23954)",
          name: "Irineópolis/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.439389999999996 -1.76945)",
          name: "Irituia/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.64137 -20.34555)",
          name: "Irupi/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.67635 -7.73849)",
          name: "Isaías Coelho/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.908429999999996 -16.31851)",
          name: "Israelândia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.32348 -27.29154)",
          name: "Itá/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.7655 -29.61054)",
          name: "Itaara/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.3333 -7.32949)",
          name: "Itabaiana/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.42532 -10.68551)",
          name: "Itabaiana/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.79033 -11.274510000000001)",
          name: "Itabaianinha/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.553349999999995 -16.57554)",
          name: "Itabela/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.13744 -23.862540000000003)",
          name: "Itaberá/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.30735 -12.52852)",
          name: "Itaberaba/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.81042 -16.020519999999998)",
          name: "Itaberaí/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.103320000000004 -10.1265)",
          name: "Itabi/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.227380000000004 -19.61954)",
          name: "Itabira/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.23337 -18.56654)",
          name: "Itabirinha de Mantena/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.80139 -20.25355)",
          name: "Itabirito/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.859390000000005 -22.74456)",
          name: "Itaboraí/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.28034 -14.786529999999999)",
          name: "Itabuna/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.7684 -8.392479999999999)",
          name: "Itacajá/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.30938 -17.06553)",
          name: "Itacambira/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.092380000000006 -15.10252)",
          name: "Itacarambi/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.99734 -14.27853)",
          name: "Itacaré/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-58.44446 -3.14345)",
          name: "Itacoatiara/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.704330000000006 -8.8345)",
          name: "Itacuruba/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.2515 -28.78753)",
          name: "Itacurubi/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.97335 -12.986519999999999)",
          name: "Itaeté/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.00635 -14.16352)",
          name: "Itagi/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.84335 -14.28453)",
          name: "Itagibá/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.61435 -16.087529999999997)",
          name: "Itagimirim/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.85637 -19.80255)",
          name: "Itaguaçu/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.39936 -11.0125)",
          name: "Itaguaçu da Bahia/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.7754 -22.85255)",
          name: "Itaguaí",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.966460000000005 -22.61853)",
          name: "Itaguajé/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.4884 -20.39254)",
          name: "Itaguara/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.604420000000005 -15.919519999999999)",
          name: "Itaguari/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.63442 -15.75852)",
          name: "Itaguaru/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.481390000000005 -5.76847)",
          name: "Itaguatins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.091440000000006 -23.41854)",
          name: "Itaí/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.42332 -8.948500000000001)",
          name: "Itaíba/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.822320000000005 -4.67447)",
          name: "Itaiçaba/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.47835 -7.4474800000000005)",
          name: "Itainópolis/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.90645 -26.33655)",
          name: "Itaiópolis/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.79138 -5.14547)",
          name: "Itaipava do Grajaú/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.66937 -17.40254)",
          name: "Itaipé/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.302479999999996 -25.137529999999998)",
          name: "Itaipulândia/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.52833 -3.96946)",
          name: "Itaitinga/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.98445 -4.27646)",
          name: "Itaituba/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.87132 -5.64448)",
          name: "Itajá/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.54444 -19.06752)",
          name: "Itajá/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.66245 -26.908549999999998)",
          name: "Itajaí/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.054429999999996 -21.31854)",
          name: "Itajobi/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.805429999999994 -21.98154)",
          name: "Itaju/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.72435 -15.14353)",
          name: "Itaju do Colônia/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.453410000000005 -22.426550000000002)",
          name: "Itajubá/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.37534 -14.678529999999999)",
          name: "Itajuípe/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.691379999999995 -21.42155)",
          name: "Italva/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.531349999999996 -17.039540000000002)",
          name: "Itamaraju/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.85938 -17.85754)",
          name: "Itamarandiba/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-68.25351 -6.4254500000000005)",
          name: "Itamarati/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.81839 -21.416549999999997)",
          name: "Itamarati de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.684349999999995 -13.77852)",
          name: "Itamari/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.68537 -18.03154)",
          name: "Itambacuri/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.40645 -23.018539999999998)",
          name: "Itambaracá/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.62436 -15.245529999999999)",
          name: "Itambé/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.99046 -23.66153)",
          name: "Itambé/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.1133 -7.41049)",
          name: "Itambé/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.321380000000005 -19.41454)",
          name: "Itambé do Mato Dentro/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.04842 -21.07854)",
          name: "Itamogi/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.870400000000004 -22.284550000000003)",
          name: "Itamonte/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.04233 -12.26352)",
          name: "Itanagra/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.78942 -24.18355)",
          name: "Itanhaém/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.935399999999994 -22.296550000000003)",
          name: "Itanhandu/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.330360000000006 -17.166539999999998)",
          name: "Itanhém/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.86537 -19.17254)",
          name: "Itanhomi/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.50336 -16.562530000000002)",
          name: "Itaobim/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.84344 -24.64055)",
          name: "Itaóca/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.08238 -21.679550000000003)",
          name: "Itaocara/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.54942 -14.951509999999999)",
          name: "Itapaci/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.58634 -3.68746)",
          name: "Itapagé/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.38143 -19.90953)",
          name: "Itapagipe/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.679339999999996 -12.88852)",
          name: "Itaparica/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.42135 -14.89853)",
          name: "Itapé/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.534349999999996 -15.95153)",
          name: "Itapebi/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.126400000000004 -20.47354)",
          name: "Itapecerica/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.84942 -23.71755)",
          name: "Itapecerica da Serra/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.35937 -3.39346)",
          name: "Itapecuru Mirim/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.816469999999995 -25.96554)",
          name: "Itapejara d'Oeste/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.611450000000005 -27.09055)",
          name: "Itapema/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.83437 -21.01155)",
          name: "Itapemirim/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.34845 -25.22055)",
          name: "Itaperuçu/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.88838 -21.20555)",
          name: "Itaperuna/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.19032 -7.378489999999999)",
          name: "Itapetim/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.24835 -15.24953)",
          name: "Itapetinga/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.05343 -23.59255)",
          name: "Itapetininga/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.87644 -23.982539999999997)",
          name: "Itapeva/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.22142 -22.768549999999998)",
          name: "Itapeva/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.934419999999996 -23.54955)",
          name: "Itapevi/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.23333 -11.31751)",
          name: "Itapicuru/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.57934 -3.49446)",
          name: "Itapipoca/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.82242 -22.43655)",
          name: "Itapira/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-58.02246 -2.74945)",
          name: "Itapiranga/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.71248 -27.16954)",
          name: "Itapiranga/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.61343 -15.82351)",
          name: "Itapirapuã/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.16844 -24.57455)",
          name: "Itapirapuã Paulista/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.1114 -8.38448)",
          name: "Itapiratins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-34.8923 -7.77649)",
          name: "Itapissuma/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.565349999999995 -14.42353)",
          name: "Itapitanga/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.922329999999995 -4.56447)",
          name: "Itapiúna/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.616440000000004 -26.11755)",
          name: "Itapoá/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.81343 -21.596539999999997)",
          name: "Itápolis/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.78947 -22.07952)",
          name: "Itaporã/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.6894 -8.57148)",
          name: "Itaporã do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.15033 -7.3044899999999995)",
          name: "Itaporanga/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.49044 -23.70854)",
          name: "Itaporanga/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.311319999999995 -10.99851)",
          name: "Itaporanga d'Ajuda/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.2473 -6.83048)",
          name: "Itapororoca/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-63.18049 -9.20547)",
          name: "Itapuã do Oeste/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.17248 -28.78054)",
          name: "Itapuca/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.71943 -22.23354)",
          name: "Itapuí/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.50945 -20.64653)",
          name: "Itapura/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.949419999999996 -15.562510000000001)",
          name: "Itapuranga/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.348420000000004 -23.48655)",
          name: "Itaquaquecetuba/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.94135 -13.451519999999999)",
          name: "Itaquara/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.553509999999996 -29.12553)",
          name: "Itaqui/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.185469999999995 -23.474529999999998)",
          name: "Itaquiraí/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.1023 -7.66849)",
          name: "Itaquitinga/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.875370000000004 -19.87455)",
          name: "Itarana/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.06635 -15.66053)",
          name: "Itarantim/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.341440000000006 -24.115540000000003)",
          name: "Itararé/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.91534 -2.92046)",
          name: "Itarema/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.17443 -24.289550000000002)",
          name: "Itariri/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.348440000000004 -18.76952)",
          name: "Itarumã/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.105470000000004 -29.48955)",
          name: "Itati/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.563399999999994 -22.496550000000003)",
          name: "Itatiaia/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.421389999999995 -20.19754)",
          name: "Itatiaiuçu/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.839420000000004 -23.00655)",
          name: "Itatiba/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.453480000000006 -27.387539999999998)",
          name: "Itatiba do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.698339999999995 -12.71252)",
          name: "Itatim/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.61643 -23.10254)",
          name: "Itatinga/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.62234 -4.52947)",
          name: "Itatira/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.62831 -7.375489999999999)",
          name: "Itatuba/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.993320000000004 -5.8404799999999994)",
          name: "Itaú/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.75241 -20.73954)",
          name: "Itaú de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.27645 -11.06249)",
          name: "Itaúba/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.671409999999995 0.59557)",
          name: "Itaubal/AP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.60842 -16.20152)",
          name: "Itauçu/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.02636 -7.603479999999999)",
          name: "Itaueira/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.57640000000001 -20.07554)",
          name: "Itaúna/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.88746 -22.73153)",
          name: "Itaúna do Sul/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.61039 -20.67855)",
          name: "Itaverava/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.76537 -16.61353)",
          name: "Itinga/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.52639 -4.4504600000000005)",
          name: "Itinga do Maranhão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.15045 -17.209509999999998)",
          name: "Itiquira/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.82343 -22.25354)",
          name: "Itirapina/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.21942 -20.64154)",
          name: "Itirapuã/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.150349999999996 -13.532520000000002)",
          name: "Itiruçu/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.85334 -10.691510000000001)",
          name: "Itiúba/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.97542 -21.73754)",
          name: "Itobi/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.070350000000005 -15.11753)",
          name: "Itororó/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.29942 -23.26455)",
          name: "Itu/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.29736 -13.81352)",
          name: "Ituaçu/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.14934 -13.732520000000001)",
          name: "Ituberá/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.17037 -19.39455)",
          name: "Itueta/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.465430000000005 -18.96953)",
          name: "Ituiutaba/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.21842 -18.420530000000003)",
          name: "Itumbiara/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.8714 -21.31755)",
          name: "Itumirim/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.05842 -23.15355)",
          name: "Itupeva/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.32741 -5.13546)",
          name: "Itupiranga/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.60146 -27.41455)",
          name: "Ituporanga/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.19643 -19.72853)",
          name: "Iturama/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.6584 -21.298550000000002)",
          name: "Itutinga/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.78142 -20.33954)",
          name: "Ituverava/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.554379999999995 -14.41452)",
          name: "Iuiú/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.53637 -20.34655)",
          name: "Iúna/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.85946 -25.01154)",
          name: "Ivaí/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.68546 -24.248540000000002)",
          name: "Ivaiporã/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.36947 -23.40953)",
          name: "Ivaté/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.22146 -23.61953)",
          name: "Ivatuba/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.81547 -22.30553)",
          name: "Ivinhema/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.79443 -16.602520000000002)",
          name: "Ivolândia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.58149 -29.52054)",
          name: "Ivorá/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.16148 -29.591549999999998)",
          name: "Ivoti/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.0153 -8.113489999999999)",
          name: "Jaboatão dos Guararapes/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.73447 -27.176540000000003)",
          name: "Jaborá/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.43338 -13.61951)",
          name: "Jaborandi/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.41343 -20.68854)",
          name: "Jaborandi/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.07645 -23.74354)",
          name: "Jaboti/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.27748 -27.63154)",
          name: "Jaboticaba/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.322430000000004 -21.25554)",
          name: "Jaboticabal/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.74539 -19.51454)",
          name: "Jaboticatubas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.205310000000004 -6.426480000000001)",
          name: "Jaçanã/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.43337 -14.85052)",
          name: "Jacaraci/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.293299999999995 -6.61248)",
          name: "Jacaraú/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.20532 -9.6365)",
          name: "Jacaré dos Homens/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-57.75446 -6.2244600000000005)",
          name: "Jacareacanga/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.96642 -23.30555)",
          name: "Jacareí/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.96944 -23.16154)",
          name: "Jacarezinho/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.57043 -20.88253)",
          name: "Jaci/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.96846 -15.96551)",
          name: "Jaciara/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.29335 -16.14453)",
          name: "Jacinto/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.76446 -28.99755)",
          name: "Jacinto Machado/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.51835 -11.18151)",
          name: "Jacobina/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.210350000000005 -7.935490000000001)",
          name: "Jacobina do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.74141 -21.01754)",
          name: "Jacuí/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.46031 -8.842500000000001)",
          name: "Jacuípe/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.05949 -29.034540000000003)",
          name: "Jacuizinho/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.1164 -4.45146)",
          name: "Jacundá/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.00243 -24.693550000000002)",
          name: "Jacupiranga/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.53548 -27.72954)",
          name: "Jacutinga/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.61242 -22.286550000000002)",
          name: "Jacutinga/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.53245 -23.11353)",
          name: "Jaguapitã/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.97135 -13.53152)",
          name: "Jaguaquara/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.75038 -19.649549999999998)",
          name: "Jaguaraçu/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.37651 -32.566539999999996)",
          name: "Jaguarão/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.196349999999995 -10.2605)",
          name: "Jaguarari/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.07636 -18.90655)",
          name: "Jaguaré/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.76733 -5.6134699999999995)",
          name: "Jaguaretama/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.6905 -29.49754)",
          name: "Jaguari/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.706450000000004 -24.25154)",
          name: "Jaguariaíva/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.62033 -5.65847)",
          name: "Jaguaribara/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.62233 -5.89148)",
          name: "Jaguaribe/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.89634 -13.11352)",
          name: "Jaguaripe/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.98642 -22.70655)",
          name: "Jaguariúna/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.78132 -4.83447)",
          name: "Jaguaruana/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.02646 -28.615560000000002)",
          name: "Jaguaruna/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.67438 -15.33852)",
          name: "Jaíba/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.13835 -7.35948)",
          name: "Jaicós/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.54644 -20.26953)",
          name: "Jales/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.68841 -23.25455)",
          name: "Jambeiro/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.80437 -18.46354)",
          name: "Jampruca/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.30938 -15.80353)",
          name: "Janaúba/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.14643 -17.04952)",
          name: "Jandaia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.64346 -23.603540000000002)",
          name: "Jandaia do Sul/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.78433 -11.56451)",
          name: "Jandaíra/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.12831 -5.35647)",
          name: "Jandaíra/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.90342 -23.52855)",
          name: "Jandira/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.40932 -6.01648)",
          name: "Janduís/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.48946 -15.2365)",
          name: "Jangada/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.782469999999996 -24.14253)",
          name: "Janiópolis/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.36238 -15.48852)",
          name: "Januária/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.60131 -6.15848)",
          name: "Januário Cicco/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.5034 -20.14154)",
          name: "Japaraíba/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.25831 -9.0885)",
          name: "Japaratinga/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.94032 -10.59351)",
          name: "Japaratuba/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.6534 -22.64355)",
          name: "Japeri/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.947309999999995 -6.46548)",
          name: "Japi/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.13945 -23.81354)",
          name: "Japira/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.80132 -10.34751)",
          name: "Japoatã/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.270379999999996 -15.995529999999999)",
          name: "Japonvar/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.40448 -23.89153)",
          name: "Japorã/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-66.59949999999999 -1.82644)",
          name: "Japurá/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.553459999999994 -23.47053)",
          name: "Japurá/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.79331 -8.727500000000001)",
          name: "Jaqueira/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.358470000000004 -28.88555)",
          name: "Jaquirana/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.33442 -15.75752)",
          name: "Jaraguá/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.06745 -26.48655)",
          name: "Jaraguá do Sul/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.39946 -20.14252)",
          name: "Jaraguari/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.00232 -9.6595)",
          name: "Jaramataia/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.298339999999996 -7.58249)",
          name: "Jardim/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.13848 -21.48052)",
          name: "Jardim/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.69246 -24.179540000000003)",
          name: "Jardim Alegre/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.96931 -5.65448)",
          name: "Jardim de Angicos/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.35232 -6.379479999999999)",
          name: "Jardim de Piranhas/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.63036 -6.099469999999999)",
          name: "Jardim do Mulato/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.774319999999996 -6.58448)",
          name: "Jardim do Seridó/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.06146 -22.54953)",
          name: "Jardim Olinda/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.86048 -26.72254)",
          name: "Jardinópolis/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.76442 -21.018539999999998)",
          name: "Jardinópolis/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.2245 -29.29154)",
          name: "Jari/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.72842 -23.101550000000003)",
          name: "Jarinu/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-62.46649 -10.43947)",
          name: "Jaru/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.71444 -17.881520000000002)",
          name: "Jataí/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.980450000000005 -23.25454)",
          name: "Jataizinho/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.49631 -7.99049)",
          name: "Jataúba/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.30347 -22.482529999999997)",
          name: "Jateí/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.01633 -7.68649)",
          name: "Jati/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.22337 -5.81747)",
          name: "Jatobá/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.26933 -9.1835)",
          name: "Jatobá/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.81835 -4.77147)",
          name: "Jatobá do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.558429999999994 -22.29654)",
          name: "Jaú/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.59441 -12.6545)",
          name: "Jaú do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.953430000000004 -16.178510000000003)",
          name: "Jaupaci/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-58.86648 -15.342500000000001)",
          name: "Jauru/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.98339 -20.53555)",
          name: "Jeceaba/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.25837 -17.08353)",
          name: "Jenipapo de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.63638 -5.3714699999999995)",
          name: "Jenipapo dos Vieiras/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.66638 -20.45655)",
          name: "Jequeri/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.02431 -10.0045)",
          name: "Jequiá da Praia/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.08435 -13.85852)",
          name: "Jequié/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.446389999999994 -17.236530000000002)",
          name: "Jequitaí/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.02839 -19.23654)",
          name: "Jequitibá/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.00336 -16.43453)",
          name: "Jequitinhonha/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.35033 -10.067499999999999)",
          name: "Jeremoabo/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.80932 -6.55448)",
          name: "Jericó/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.589420000000004 -20.31154)",
          name: "Jeriquara/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.39537 -20.789550000000002)",
          name: "Jerônimo Monteiro/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.51037 -7.08848)",
          name: "Jerumenha/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.29141 -21.99855)",
          name: "Jesuânia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.38847 -24.38553)",
          name: "Jesuítas/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.37442 -15.951519999999999)",
          name: "Jesúpolis/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.51334 -2.79445)",
          name: "Jijoca de Jericoacoara/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-61.94448 -10.882480000000001)",
          name: "Ji-Paraná/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.572340000000004 -13.25752)",
          name: "Jiquiriçá/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.88935 -14.01952)",
          name: "Jitaúna/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.50547 -27.17854)",
          name: "Joaçaba/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.03136 -16.654539999999997)",
          name: "Joaíma/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.679379999999995 -19.17254)",
          name: "Joanésia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.27642 -22.93055)",
          name: "Joanópolis/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.58831 -7.85649)",
          name: "João Alfredo/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.820310000000006 -5.53848)",
          name: "João Câmara/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.41436 -8.51149)",
          name: "João Costa/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.79632 -6.27448)",
          name: "João Dias/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.66436 -11.35051)",
          name: "João Dourado/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.40139 -5.44847)",
          name: "João Lisboa/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.17438 -19.81054)",
          name: "João Monlevade/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.386359999999996 -19.75855)",
          name: "João Neiva/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.1734 -17.74353)",
          name: "João Pinheiro/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.76845 -22.25053)",
          name: "João Ramalho/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.17239 -17.75853)",
          name: "Joaquim Felício/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.748310000000004 -9.1335)",
          name: "Joaquim Gomes/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.53331 -8.624500000000001)",
          name: "Joaquim Nabuco/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.198359999999994 -3.50846)",
          name: "Joaquim Pires/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.90544 -23.49954)",
          name: "Joaquim Távora/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.42836 -3.47846)",
          name: "Joca Marques/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.12249 -28.64754)",
          name: "Jóia/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.846450000000004 -26.30455)",
          name: "Joinville/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.178349999999995 -15.90053)",
          name: "Jordânia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-71.88452000000001 -9.43446)",
          name: "Jordão/AC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.628460000000004 -26.95855)",
          name: "José Boiteux/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.68844 -21.053530000000002)",
          name: "José Bonifácio/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.28133 -6.31748)",
          name: "José da Penha/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.57636 -4.75647)",
          name: "José de Freitas/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.60437 -16.907529999999998)",
          name: "José Gonçalves de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.49938 -18.21954)",
          name: "José Raydan/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.70037 -4.9674700000000005)",
          name: "Joselândia/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.51537 -16.547530000000002)",
          name: "Josenópolis/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.61443 -17.80552)",
          name: "Joviânia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-57.52046 -11.25548)",
          name: "Juara/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.583310000000004 -7.172490000000001)",
          name: "Juarez Távora/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.06541 -8.119480000000001)",
          name: "Juarina/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.34339 -19.95254)",
          name: "Juatuba/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.57831 -7.06849)",
          name: "Juazeirinho/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.50335 -9.4145)",
          name: "Juazeiro/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.31534 -7.213480000000001)",
          name: "Juazeiro do Norte/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.70335 -5.172470000000001)",
          name: "Juazeiro do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.52834 -6.52548)",
          name: "Jucás/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.48932 -8.7065)",
          name: "Jucati/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.159349999999996 -16.843539999999997)",
          name: "Jucuruçu/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.02032 -6.03448)",
          name: "Jucurutu/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-58.74147 -11.37848)",
          name: "Juína/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.350390000000004 -21.76455)",
          name: "Juiz de Fora/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.23838 -10.3235)",
          name: "Júlio Borges/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.682489999999994 -29.227539999999998)",
          name: "Júlio de Castilhos/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.78744 -22.00954)",
          name: "Júlio Mesquita/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.78443 -23.08755)",
          name: "Jumirim/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.092380000000006 -1.8444500000000001)",
          name: "Junco do Maranhão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.71332 -6.99748)",
          name: "Junco do Seridó/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.3273 -6.27248)",
          name: "Jundiá/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.574310000000004 -8.935500000000001)",
          name: "Jundiá/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.88442 -23.18655)",
          name: "Jundiaí/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.24845 -23.43754)",
          name: "Jundiaí do Sul/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.47632 -9.9255)",
          name: "Junqueiro/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.43445 -21.51553)",
          name: "Junqueirópolis/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.41531 -8.712499999999999)",
          name: "Jupi/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.72847 -26.39854)",
          name: "Jupiá/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.63543 -24.32155)",
          name: "Juquiá/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.068430000000006 -23.932550000000003)",
          name: "Juquitiba/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.58738 -16.84853)",
          name: "Juramento/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.84347 -24.420530000000003)",
          name: "Juranda/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.13631 -8.7185)",
          name: "Jurema/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.128370000000004 -9.23149)",
          name: "Jurema/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.2383 -7.373489999999999)",
          name: "Juripiranga/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.819320000000005 -7.53749)",
          name: "Juru/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-66.06949 -3.48145)",
          name: "Juruá/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.57741 -21.25354)",
          name: "Juruaia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-58.35946 -10.31848)",
          name: "Juruena/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.09245 -2.15245)",
          name: "Juruti/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.88446 -16.05151)",
          name: "Juscimeira/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.96936 -11.0475)",
          name: "Jussara/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.469460000000005 -23.62153)",
          name: "Jussara/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.868430000000004 -15.86551)",
          name: "Jussara/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.49535 -15.19153)",
          name: "Jussari/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.593360000000004 -13.517520000000001)",
          name: "Jussiape/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-66.7675 -2.74744)",
          name: "Jutaí/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.60347 -22.861530000000002)",
          name: "Juti/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.160379999999996 -14.26352)",
          name: "Juvenília/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.668459999999996 -23.81754)",
          name: "Kaloré/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-64.79849 -7.25946)",
          name: "Lábrea/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.55647 -27.26054)",
          name: "Lacerdópolis/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.73837 -17.63254)",
          name: "Ladainha/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-57.60248 -19.00551)",
          name: "Ladário/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.213350000000005 -13.65652)",
          name: "Lafaiete Coutinho/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.808409999999995 -18.178530000000002)",
          name: "Lagamar/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.65033 -10.91751)",
          name: "Lagarto/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.326460000000004 -27.81655)",
          name: "Lages/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.13238 -4.57046)",
          name: "Lago da Pedra/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.04938 -4.6094599999999994)",
          name: "Lago do Junco/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.980380000000004 -4.6094599999999994)",
          name: "Lago dos Rodrigues/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.82237000000001 -3.95746)",
          name: "Lago Verde/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.91632 -6.571479999999999)",
          name: "Lagoa/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.62536 -4.51646)",
          name: "Lagoa Alegre/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.01449 -29.48954)",
          name: "Lagoa Bonita do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.73832 -9.830499999999999)",
          name: "Lagoa da Canoa/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.62441 -10.79449)",
          name: "Lagoa da Confusão/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.544399999999996 -20.02354)",
          name: "Lagoa da Prata/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.598310000000005 -6.3914800000000005)",
          name: "Lagoa d'Anta/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.3793 -6.6734800000000005)",
          name: "Lagoa de Dentro/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.4383 -6.1494800000000005)",
          name: "Lagoa de Pedras/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.601350000000004 -4.392460000000001)",
          name: "Lagoa de São Francisco/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.87231 -6.00448)",
          name: "Lagoa de Velhos/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.52735 -8.47849)",
          name: "Lagoa do Barro do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.3203 -7.84549)",
          name: "Lagoa do Carro/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.290299999999995 -7.93649)",
          name: "Lagoa do Itaenga/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.52637 -6.04747)",
          name: "Lagoa do Mato/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.459320000000005 -9.127500000000001)",
          name: "Lagoa do Ouro/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.64336 -5.41547)",
          name: "Lagoa do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.58435 -6.51348)",
          name: "Lagoa do Sítio/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.551399999999994 -10.378490000000001)",
          name: "Lagoa do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.90031 -8.6585)",
          name: "Lagoa dos Gatos/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.582390000000004 -16.983530000000002)",
          name: "Lagoa dos Patos/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.85848 -28.57154)",
          name: "Lagoa dos Três Cantos/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.078390000000006 -20.91455)",
          name: "Lagoa Dourada/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.408409999999996 -18.779529999999998)",
          name: "Lagoa Formosa/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.27234 -8.997489999999999)",
          name: "Lagoa Grande/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.5144 -17.83553)",
          name: "Lagoa Grande/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.330380000000005 -4.81347)",
          name: "Lagoa Grande do Maranhão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.46931 -6.09648)",
          name: "Lagoa Nova/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.14237 -14.03552)",
          name: "Lagoa Real/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.49431 -6.134480000000001)",
          name: "Lagoa Salgada/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.89039 -19.62754)",
          name: "Lagoa Santa/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.39144 -19.18352)",
          name: "Lagoa Santa/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.85431 -7.17149)",
          name: "Lagoa Seca/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.526469999999996 -28.20955)",
          name: "Lagoa Vermelha/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.79649 -29.23554)",
          name: "Lagoão/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.19041 -23.091549999999998)",
          name: "Lagoinha/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.62336 -5.8314699999999995)",
          name: "Lagoinha do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.781459999999996 -28.48356)",
          name: "Laguna/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.15048 -22.54652)",
          name: "Laguna Carapã/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.42534 -13.18252)",
          name: "Laje/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.12338 -21.20655)",
          name: "Laje do Muriaé/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.96148 -29.46755)",
          name: "Lajeado/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.3584 -9.75149)",
          name: "Lajeado/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.18248 -27.68954)",
          name: "Lajeado do Bugre/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.56748 -26.85854)",
          name: "Lajeado Grande/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.03539 -6.18947)",
          name: "Lajeado Novo/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.34536 -17.61454)",
          name: "Lajedão/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.906349999999996 -12.35651)",
          name: "Lajedinho/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.320310000000006 -8.6645)",
          name: "Lajedo/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.22435 -13.47552)",
          name: "Lajedo do Tabocal/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.24531 -5.70048)",
          name: "Lajes/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.11731 -6.15048)",
          name: "Lajes Pintadas/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.62337 -20.15155)",
          name: "Lajinha/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.90034 -11.78351)",
          name: "Lamarão/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.350410000000004 -21.97655)",
          name: "Lambari/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-58.00447 -15.3235)",
          name: "Lambari d'Oeste/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.47439 -20.790550000000003)",
          name: "Lamim/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.930369999999996 -7.26648)",
          name: "Landri Sales/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.71645 -25.77055)",
          name: "Lapa/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.83236 -11.38351)",
          name: "Lapão/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.05737 -19.899549999999998)",
          name: "Laranja da Terra/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.46947 -24.887539999999998)",
          name: "Laranjal/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.477380000000004 -21.37455)",
          name: "Laranjal/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.51642 -0.8424400000000001)",
          name: "Laranjal do Jari/AP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.837430000000005 -23.05054)",
          name: "Laranjal Paulista/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.17032 -10.806510000000001)",
          name: "Laranjeiras/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.41647 -25.40854)",
          name: "Laranjeiras do Sul/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.578390000000006 -17.887529999999998)",
          name: "Lassance/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.18033 -6.51648)",
          name: "Lastro/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.73346 -27.21755)",
          name: "Laurentino/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.32733 -12.89452)",
          name: "Lauro de Freitas/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.39746 -28.39355)",
          name: "Lauro Muller/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.50639 -12.78951)",
          name: "Lavandeira/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.04044 -21.16853)",
          name: "Lavínia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.0004 -21.24555)",
          name: "Lavras/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.97233 -6.75348)",
          name: "Lavras da Mangabeira/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.8955 -30.81354)",
          name: "Lavras do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.9024 -22.57155)",
          name: "Lavrinhas/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.0254 -19.718539999999997)",
          name: "Leandro Ferreira/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.69546 -26.929550000000003)",
          name: "Lebon Régis/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.39042 -22.18654)",
          name: "Leme/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.693369999999994 -17.08353)",
          name: "Leme do Prado/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.39036 -12.56351)",
          name: "Lençóis/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.80043 -22.599539999999998)",
          name: "Lençóis Paulista/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.28745 -27.50755)",
          name: "Leoberto Leal/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.64338 -21.53255)",
          name: "Leopoldina/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.74442 -16.61952)",
          name: "Leopoldo de Bulhões/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.75145 -23.08054)",
          name: "Leópolis/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.07348 -27.600540000000002)",
          name: "Liberato Salzano/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.32040000000001 -22.02955)",
          name: "Liberdade/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.50837 -14.68252)",
          name: "Licínio de Almeida/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.653459999999995 -24.109540000000003)",
          name: "Lidianópolis/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.46737 -4.52046)",
          name: "Lima Campos/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.793389999999995 -21.84355)",
          name: "Lima Duarte/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.40242 -22.565540000000002)",
          name: "Limeira/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.58144 -19.55153)",
          name: "Limeira do Oeste/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.45031 -7.87549)",
          name: "Limoeiro/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.50332 -9.741499999999998)",
          name: "Limoeiro de Anadia/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.3814 -1.89545)",
          name: "Limoeiro do Ajuru/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.098330000000004 -5.146470000000001)",
          name: "Limoeiro do Norte/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.576480000000004 -25.26053)",
          name: "Lindoeste/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.65042 -22.52355)",
          name: "Lindóia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.06747 -27.05354)",
          name: "Lindóia do Sul/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.209480000000006 -29.59755)",
          name: "Lindolfo Collor/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.201480000000004 -29.468549999999997)",
          name: "Linha Nova/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.07236 -19.39155)",
          name: "Linhares/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.74344 -21.679540000000003)",
          name: "Lins/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.94632 -7.37449)",
          name: "Livramento/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.84136 -13.643519999999999)",
          name: "Livramento de Nossa Senhora/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.67339 -9.59449)",
          name: "Lizarda/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.13746 -22.92353)",
          name: "Loanda/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.951460000000004 -23.00853)",
          name: "Lobato/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.44331 -6.6144799999999995)",
          name: "Logradouro/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.16345 -23.31054)",
          name: "Londrina/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.30538 -15.90353)",
          name: "Lontra/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.54246 -27.166549999999997)",
          name: "Lontras/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.12541 -22.73155)",
          name: "Lorena/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.14138 -7.08448)",
          name: "Loreto/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.22444 -20.96753)",
          name: "Lourdes/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.951420000000006 -23.08655)",
          name: "Louveira/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.91146 -13.05049)",
          name: "Lucas do Rio Verde/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.01945 -21.72053)",
          name: "Lucélia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-34.8693 -6.9004900000000005)",
          name: "Lucena/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.52344 -22.431540000000002)",
          name: "Lucianópolis/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.669419999999995 -11.22249)",
          name: "Luciára/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.81632 -6.12048)",
          name: "Lucrécia/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.704420000000006 -21.55554)",
          name: "Luís Antônio/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.66735 -2.87945)",
          name: "Luís Correia/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.87338 -1.26844)",
          name: "Luís Domingues/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.805389999999996 -12.09251)",
          name: "Luís Eduardo Magalhães/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.38933 -6.41448)",
          name: "Luís Gomes/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.10338 -20.44055)",
          name: "Luisburgo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.58939 -16.11853)",
          name: "Luislândia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.93344999999999 -26.721549999999997)",
          name: "Luiz Alves/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.27646 -24.286540000000002)",
          name: "Luiziana/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.32744 -21.67653)",
          name: "Luiziânia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.9034 -21.51155)",
          name: "Luminárias/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.73846 -24.07954)",
          name: "Lunardelli/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.817440000000005 -22.41554)",
          name: "Lupércio/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.65745 -22.75553)",
          name: "Lupionópolis/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.39244 -22.340539999999997)",
          name: "Lutécia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.6864 -19.80154)",
          name: "Luz/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.46747 -27.13354)",
          name: "Luzerna/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.950410000000005 -16.25352)",
          name: "Luziânia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.37036 -3.45846)",
          name: "Luzilândia/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.8564 -6.18247)",
          name: "Luzinópolis/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.78738 -22.37156)",
          name: "Macaé/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.3543 -5.858479999999999)",
          name: "Macaíba/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.360350000000004 -12.13651)",
          name: "Macajuba/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.065509999999996 -29.14353)",
          name: "Maçambara/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.541329999999995 -10.66651)",
          name: "Macambira/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.45331 -7.55549)",
          name: "Macaparana/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.42335 -15.568529999999999)",
          name: "Macarani/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.71143 -22.50254)",
          name: "Macatuba/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.63431 -5.115469999999999)",
          name: "Macau/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.96444 -20.806530000000002)",
          name: "Macaubal/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.699369999999995 -13.01951)",
          name: "Macaúbas/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.19444 -20.14653)",
          name: "Macedônia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.71636 -17.07754)",
          name: "Machacalis/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.66847 -27.56754)",
          name: "Machadinho/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-61.981480000000005 -9.44447)",
          name: "Machadinho d'Oeste/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.92041 -21.67555)",
          name: "Machado/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.51531 -7.68649)",
          name: "Machados/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.37847 -26.856540000000003)",
          name: "Macieira/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.25338 -21.984560000000002)",
          name: "Macuco/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.058339999999994 -9.1685)",
          name: "Macururé/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.57734000000001 -4.857469999999999)",
          name: "Madalena/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.50436 -3.48346)",
          name: "Madeiro/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.621340000000004 -12.74152)",
          name: "Madre de Deus/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.330400000000004 -21.48355)",
          name: "Madre de Deus de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.427319999999995 -7.25949)",
          name: "Mãe d'Água/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.55339 -2.06045)",
          name: "Mãe do Rio/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.49236 -14.66352)",
          name: "Maetinga/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.80545 -26.11155)",
          name: "Mafra/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.59839 -0.79544)",
          name: "Magalhães Barata/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.20436 -3.39646)",
          name: "Magalhães de Almeida/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.226440000000004 -20.64453)",
          name: "Magda/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.04139 -22.65356)",
          name: "Magé/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.26635 -15.62153)",
          name: "Maiquinique/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.14935 -11.711509999999999)",
          name: "Mairi/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.18342 -23.546550000000003)",
          name: "Mairinque/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.58742 -23.31955)",
          name: "Mairiporã/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.49142 -17.29952)",
          name: "Mairipotaba/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.95145 -27.41855)",
          name: "Major Gercino/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.98532 -9.5325)",
          name: "Major Isidoro/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.32433 -6.40648)",
          name: "Major Sales/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.32846000000001 -26.36855)",
          name: "Major Vieira/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.07737 -17.84254)",
          name: "Malacacheta/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.77438 -14.33652)",
          name: "Malhada/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.87936 -14.38852)",
          name: "Malhada de Pedras/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.924319999999994 -10.34951)",
          name: "Malhada dos Bois/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.305319999999995 -10.65851)",
          name: "Malhador/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.82146 -25.87854)",
          name: "Mallet/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.52232 -6.90448)",
          name: "Malta/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.1263 -6.83948)",
          name: "Mamanguape/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.11339 -14.48852)",
          name: "Mambaí/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.53047 -24.31953)",
          name: "Mamborê/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.949369999999995 -15.05052)",
          name: "Mamonas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.935469999999995 -29.21155)",
          name: "Mampituba/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-60.62147 -3.3004499999999997)",
          name: "Manacapuru/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.15433 -7.7064900000000005)",
          name: "Manaíra/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-60.45947 -3.4284499999999998)",
          name: "Manaquiri/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.62832 -8.9645)",
          name: "Manari/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-72.89652000000001 -7.61445)",
          name: "Mâncio Lima/AC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.09546 -23.34753)",
          name: "Mandaguaçu/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.671459999999996 -23.548540000000003)",
          name: "Mandaguari/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.32645 -25.77955)",
          name: "Mandirituba/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.32244 -23.00354)",
          name: "Manduri/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.311479999999996 -26.14454)",
          name: "Manfrinópolis/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.932379999999995 -14.75652)",
          name: "Manga/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.041399999999996 -22.960549999999998)",
          name: "Mangaratiba/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.176469999999995 -25.94154)",
          name: "Mangueirinha/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.03438 -20.25855)",
          name: "Manhuaçu/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.958380000000005 -20.35855)",
          name: "Manhumirim/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-61.30047 -5.80946)",
          name: "Manicoré/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.872370000000004 -8.01349)",
          name: "Manoel Emídio/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.668459999999996 -24.51654)",
          name: "Manoel Ribas/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-69.26051 -8.83946)",
          name: "Manoel Urbano/AC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.48351 -29.58953)",
          name: "Manoel Viana/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.24335 -14.14552)",
          name: "Manoel Vitorino/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.034369999999996 -10.7165)",
          name: "Mansidão/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.98037 -18.78255)",
          name: "Mantena/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.12337 -18.86355)",
          name: "Mantenópolis/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.20747 -29.67555)",
          name: "Maquiné/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.01039 -21.86755)",
          name: "Mar de Espanha/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.38831 -9.448500000000001)",
          name: "Mar Vermelho/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.178419999999996 -14.017510000000001)",
          name: "Mara Rosa/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-65.58149 -1.85644)",
          name: "Maraã/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.1184 -5.36947)",
          name: "Marabá/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.96345 -22.108530000000002)",
          name: "Marabá Paulista/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.95938 -2.04345)",
          name: "Maracaçumé/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.667449999999995 -22.61154)",
          name: "Maracaí/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.45346 -28.84755)",
          name: "Maracajá/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.16847 -21.614520000000002)",
          name: "Maracaju/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.450390000000006 -0.76544)",
          name: "Maracanã/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.62633 -3.87746)",
          name: "Maracanaú/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.431349999999995 -13.44152)",
          name: "Maracás/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.22231 -9.0125)",
          name: "Maragogi/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.91934 -12.77852)",
          name: "Maragogipe/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.82931000000001 -8.803500000000001)",
          name: "Maraial/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.577380000000005 -4.59946)",
          name: "Marajá do Sena/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.68633 -3.89046)",
          name: "Maranguape/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.85138 -2.24145)",
          name: "Maranhãozinho/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.69439 -0.71444)",
          name: "Marapanim/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.12943 -21.25954)",
          name: "Marapoama/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.55448 -29.54955)",
          name: "Maratá/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.82437 -21.043550000000003)",
          name: "Marataízes/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.200480000000006 -28.44954)",
          name: "Marau/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.01534 -14.10353)",
          name: "Maraú/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.17348 -26.76154)",
          name: "Maravilha/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.35032 -9.2365)",
          name: "Maravilha/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.6764 -19.51654)",
          name: "Maravilhas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.0153 -6.77048)",
          name: "Marcação/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.59744 -11.13349)",
          name: "Marcelândia/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.90647 -27.46254)",
          name: "Marcelino Ramos/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.16733 -6.29448)",
          name: "Marcelino Vieira/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.531349999999996 -13.00352)",
          name: "Marcionílio Souza/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.14734 -3.12446)",
          name: "Marco/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.66135 -7.44348)",
          name: "Marcolândia/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.89437 -7.121479999999999)",
          name: "Marcos Parente/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.05748 -24.556530000000002)",
          name: "Marechal Cândido Rondon/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.89531 -9.7105)",
          name: "Marechal Deodoro/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.68337 -20.413549999999997)",
          name: "Marechal Floriano/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-72.79252 -8.941460000000001)",
          name: "Marechal Thaumaturgo/AC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.62548 -26.80254)",
          name: "Marema/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.319300000000005 -7.06049)",
          name: "Mari/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.37541 -22.30855)",
          name: "Maria da Fé/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.205470000000005 -23.61653)",
          name: "Maria Helena/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.79246 -23.48553)",
          name: "Marialva/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.41639 -20.37855)",
          name: "Mariana/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.58348 -30.353550000000002)",
          name: "Mariana Pimentel/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.14747 -27.35454)",
          name: "Mariano Moro/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.65441 -9.79649)",
          name: "Marianópolis do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.18145 -21.79953)",
          name: "Mariápolis/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.30531 -9.5775)",
          name: "Maribondo/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.819390000000006 -22.91956)",
          name: "Maricá/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.08437 -18.50854)",
          name: "Marilac/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.542359999999995 -19.413549999999997)",
          name: "Marilândia/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.30845 -23.745540000000002)",
          name: "Marilândia do Sul/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.040459999999996 -22.736530000000002)",
          name: "Marilena/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.946439999999996 -22.21454)",
          name: "Marília/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.14647 -24.00253)",
          name: "Mariluz/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.93946 -23.425530000000002)",
          name: "Maringá/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.823440000000005 -20.44153)",
          name: "Marinópolis/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.18839 -20.056540000000002)",
          name: "Mário Campos/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.55947 -26.35554)",
          name: "Mariópolis/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.830470000000005 -24.41853)",
          name: "Maripá/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.959390000000006 -21.69855)",
          name: "Maripá de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.342400000000005 -1.35544)",
          name: "Marituba/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.34733 -6.84248)",
          name: "Marizópolis/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.73238 -19.71255)",
          name: "Marliéria/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.02648 -26.14954)",
          name: "Marmeleiro/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.16541 -22.44955)",
          name: "Marmelópolis/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.09348 -29.32855)",
          name: "Marques de Souza/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.25447 -25.11354)",
          name: "Marquinho/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.2374 -19.332539999999998)",
          name: "Martinho Campos/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.69734 -3.2264600000000003)",
          name: "Martinópole/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.17145 -22.14653)",
          name: "Martinópolis/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.911319999999996 -6.08848)",
          name: "Martins/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.87738 -20.25755)",
          name: "Martins Soares/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.08232 -10.73851)",
          name: "Maruim/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.63946 -23.70654)",
          name: "Marumbi/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.64142 -17.98153)",
          name: "Marzagão/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.303349999999995 -15.56353)",
          name: "Mascote/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.343340000000005 -3.52346)",
          name: "Massapê/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.12635 -7.463480000000001)",
          name: "Massapê do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.78931 -7.20049)",
          name: "Massaranduba/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.00845 -26.61155)",
          name: "Massaranduba/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.4605 -29.56654)",
          name: "Mata/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.29933 -12.530520000000001)",
          name: "Mata de São João/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.73433 -9.118500000000001)",
          name: "Mata Grande/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.111360000000005 -3.62546)",
          name: "Mata Roma/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.74136 -15.68653)",
          name: "Mata Verde/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.36643 -21.603540000000002)",
          name: "Matão/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.0513 -6.60148)",
          name: "Mataraca/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.421389999999995 -10.5485)",
          name: "Mateiros/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.99648 -25.24153)",
          name: "Matelândia/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.060379999999995 -18.474539999999998)",
          name: "Materlândia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.42839 -19.98654)",
          name: "Mateus Leme/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.90837 -18.59254)",
          name: "Mathias Lobato/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.319390000000006 -21.86955)",
          name: "Matias Barbosa/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.92238 -14.85552)",
          name: "Matias Cardoso/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.55636 -3.71646)",
          name: "Matias Olímpio/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.84937 -13.90952)",
          name: "Matina/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.03438 -3.1014500000000003)",
          name: "Matinha/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.76731 -7.125489999999999)",
          name: "Matinhas/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.54344 -25.81855)",
          name: "Matinhos/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.34138 -20.284550000000003)",
          name: "Matipó/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.192479999999996 -28.27854)",
          name: "Mato Castelhano/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.72532 -6.53448)",
          name: "Mato Grosso/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.12948 -29.524549999999998)",
          name: "Mato Leitão/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.6165 -28.25653)",
          name: "Mato Queimado/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.14646 -24.70554)",
          name: "Mato Rico/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.86637 -15.39753)",
          name: "Mato Verde/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.19936 -5.51947)",
          name: "Matões/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.556369999999994 -3.63246)",
          name: "Matões do Norte/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.14846 -26.47354)",
          name: "Matos Costa/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.081390000000006 -19.55854)",
          name: "Matozinhos/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.746430000000004 -15.444510000000001)",
          name: "Matrinchã/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.53331 -9.1525)",
          name: "Matriz de Camaragibe/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.93344 -10.05748)",
          name: "Matupá/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.35132 -7.26749)",
          name: "Maturéia/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.9694 -19.22354)",
          name: "Matutina/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.461420000000004 -23.66855)",
          name: "Mauá/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.22945 -23.901539999999997)",
          name: "Mauá da Serra/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-57.71945 -3.38445)",
          name: "Maués/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.33943 -17.971519999999998)",
          name: "Maurilândia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.50639 -5.95347)",
          name: "Maurilândia do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.77433 -7.38949)",
          name: "Mauriti/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.2623 -5.51648)",
          name: "Maxaranguape/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.80347 -27.63254)",
          name: "Maximiliano de Almeida/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.28942 -0.11543)",
          name: "Mazagão/AP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.22641 -19.99654)",
          name: "Medeiros/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.221360000000004 -17.37454)",
          name: "Medeiros Neto/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.094480000000004 -25.295530000000003)",
          name: "Medianeira/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.88943 -3.4464500000000005)",
          name: "Medicilândia/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.477360000000004 -16.223529999999997)",
          name: "Medina/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.63646 -28.82955)",
          name: "Meleiro/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.712410000000006 -1.80444)",
          name: "Melgaço/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.7334 -22.527549999999998)",
          name: "Mendes/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.40537 -18.66154)",
          name: "Mendes Pimentel/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.581430000000005 -21.167530000000003)",
          name: "Mendonça/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.162479999999995 -24.45453)",
          name: "Mercedes/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.341390000000004 -21.19455)",
          name: "Mercês/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.17344 -20.359530000000003)",
          name: "Meridiano/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.45534 -3.5424599999999997)",
          name: "Meruoca/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.63844 -19.96653)",
          name: "Mesópolis/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.42939 -22.78256)",
          name: "Mesquita/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.60738 -19.22354)",
          name: "Mesquita/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.842310000000005 -9.3835)",
          name: "Messias/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.51432 -6.079479999999999)",
          name: "Messias Targino/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.89536 -4.166460000000001)",
          name: "Miguel Alves/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.59535 -11.429509999999999)",
          name: "Miguel Calmon/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.73936 -5.68147)",
          name: "Miguel Leão/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.469390000000004 -22.454549999999998)",
          name: "Miguel Pereira/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.03242 -20.179540000000003)",
          name: "Miguelópolis/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.946329999999996 -7.31349)",
          name: "Milagres/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.85935 -12.87052)",
          name: "Milagres/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.60936 -3.58146)",
          name: "Milagres do Maranhão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.194329999999994 -5.675470000000001)",
          name: "Milhã/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.422349999999994 -4.68447)",
          name: "Milton Brandão/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.16141 -15.05652)",
          name: "Mimoso de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.36637 -21.06455)",
          name: "Mimoso do Sul/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.22041 -13.53351)",
          name: "Minaçu/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.865320000000004 -9.3055)",
          name: "Minador do Negrão/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.04849 -30.12755)",
          name: "Minas do Leão/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.59037 -17.21953)",
          name: "Minas Novas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.6044 -21.682550000000003)",
          name: "Minduri/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.55144 -17.56952)",
          name: "Mineiros/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.45143 -22.40954)",
          name: "Mineiros do Tietê/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-61.51748 -11.196480000000001)",
          name: "Ministro Andreazza/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.13744 -19.979529999999997)",
          name: "Mira Estrela/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.16438 -16.26353)",
          name: "Mirabela/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.46043 -24.28155)",
          name: "Miracatu/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.197379999999995 -21.41255)",
          name: "Miracema/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.3924 -9.56749)",
          name: "Miracema do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.77646 -23.25853)",
          name: "Mirador/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.36337 -6.371479999999999)",
          name: "Mirador/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.34338 -20.89155)",
          name: "Miradouro/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.68649 -27.49454)",
          name: "Miraguaí/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.614380000000004 -21.19555)",
          name: "Miraí/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.97034 -3.56946)",
          name: "Miraíma/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.37848 -20.24151)",
          name: "Miranda/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.58437 -3.56946)",
          name: "Miranda do Norte/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.72833 -8.11949)",
          name: "Mirandiba/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.10244 -21.134529999999998)",
          name: "Mirandópolis/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.576350000000005 -10.954509999999999)",
          name: "Mirangaba/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.5904 -9.529490000000001)",
          name: "Miranorte/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.77336 -14.242519999999999)",
          name: "Mirante/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-62.675489999999996 -11.03048)",
          name: "Mirante da Serra/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.90645 -22.292530000000003)",
          name: "Mirante do Paranapanema/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.455450000000006 -22.96653)",
          name: "Miraselva/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.52143 -20.81953)",
          name: "Mirassol/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-58.096470000000004 -15.6755)",
          name: "Mirassol d'Oeste/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.46443 -20.617530000000002)",
          name: "Mirassolândia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.404379999999996 -14.74152)",
          name: "Miravânia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.07746 -27.196550000000002)",
          name: "Mirim Doce/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.784369999999996 -2.06545)",
          name: "Mirinzal/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.24848 -25.09253)",
          name: "Missal/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.14333 -7.25048)",
          name: "Missão Velha/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.50741 -2.5844500000000004)",
          name: "Mocajuba/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.00542 -21.468539999999997)",
          name: "Mococa/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.055479999999996 -26.77854)",
          name: "Modelo/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.05339 -20.33355)",
          name: "Moeda/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.4114 -19.843539999999997)",
          name: "Moema/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.479310000000005 -7.29949)",
          name: "Mogeiro/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.94242 -22.37255)",
          name: "Mogi Guaçu/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.73943 -16.54652)",
          name: "Moiporá/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.343320000000006 -10.57851)",
          name: "Moita Bonita/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.188419999999994 -23.52355)",
          name: "Moji das Cruzes/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.958420000000004 -22.432550000000003)",
          name: "Moji-Mirim/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.7694 -1.88445)",
          name: "Moju/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.62834 -5.74347)",
          name: "Mombaça/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.56643 -22.929550000000003)",
          name: "Mombuca/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.25138 -3.49246)",
          name: "Monção/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.09244 -20.850530000000003)",
          name: "Monções/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.40248 -27.103540000000002)",
          name: "Mondaí/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.62942 -24.08755)",
          name: "Mongaguá/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.11939 -18.32554)",
          name: "Monjolos/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.608360000000005 -5.56447)",
          name: "Monsenhor Gil/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.03035 -6.99648)",
          name: "Monsenhor Hipólito/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.54141 -21.75855)",
          name: "Monsenhor Paulo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.06334 -4.78947)",
          name: "Monsenhor Tabosa/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.95931 -7.088489999999999)",
          name: "Montadas/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.36638 -14.42352)",
          name: "Montalvânia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.36336 -18.12754)",
          name: "Montanha/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.2883 -6.48648)",
          name: "Montanhas/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.07048 -28.65254)",
          name: "Montauri/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.069430000000004 -2.00845)",
          name: "Monte Alegre/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.332300000000004 -6.06848)",
          name: "Monte Alegre/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.901399999999995 -13.25651)",
          name: "Monte Alegre de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.88142 -18.87153)",
          name: "Monte Alegre de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.56232 -10.027500000000002)",
          name: "Monte Alegre de Sergipe/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.304379999999995 -9.75449)",
          name: "Monte Alegre do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.681419999999996 -22.682550000000003)",
          name: "Monte Alegre do Sul/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.78347 -28.68355)",
          name: "Monte Alegre dos Campos/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.496430000000004 -21.26154)",
          name: "Monte Alto/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.71443 -20.773529999999997)",
          name: "Monte Aprazível/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.875370000000004 -15.155520000000001)",
          name: "Monte Azul/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.64143 -20.907539999999997)",
          name: "Monte Azul Paulista/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.36841 -21.32654)",
          name: "Monte Belo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.63248 -29.163549999999997)",
          name: "Monte Belo do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.980470000000004 -27.22355)",
          name: "Monte Carlo/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.49941 -18.72553)",
          name: "Monte Carmelo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.23146 -26.46255)",
          name: "Monte Castelo/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.56945 -21.29953)",
          name: "Monte Castelo/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.78331 -6.44148)",
          name: "Monte das Gameleiras/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.1094 -10.7635)",
          name: "Monte do Carmo/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.25536 -16.86654)",
          name: "Monte Formoso/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.586330000000004 -7.21548)",
          name: "Monte Horebe/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.316419999999994 -22.94755)",
          name: "Monte Mor/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-63.29049 -10.246469999999999)",
          name: "Monte Negro/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.33334 -10.4385)",
          name: "Monte Santo/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.98042 -21.19054)",
          name: "Monte Santo de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.99541 -10.00449)",
          name: "Monte Santo do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.573420000000006 -22.43355)",
          name: "Monte Sião/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.12032 -7.8894899999999994)",
          name: "Monteiro/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.840410000000006 -22.957549999999998)",
          name: "Monteiro Lobato/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.24832 -9.6035)",
          name: "Monteirópolis/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.46148 -29.68955)",
          name: "Montenegro/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.06739 -5.8314699999999995)",
          name: "Montes Altos/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.86238 -16.73553)",
          name: "Montes Claros/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.39743 -16.00851)",
          name: "Montes Claros de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.497370000000004 -15.17253)",
          name: "Montezuma/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.175439999999995 -17.44452)",
          name: "Montividiu/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.60741 -13.11351)",
          name: "Montividiu do Norte/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.37333 -5.107469999999999)",
          name: "Morada Nova/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.3574 -18.60454)",
          name: "Morada Nova de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.68134 -3.46746)",
          name: "Moraújo/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.551339999999996 -7.63149)",
          name: "Moreilândia/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.00747 -24.062530000000002)",
          name: "Moreira Sales/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.0923 -8.11949)",
          name: "Moreno/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.692479999999996 -28.69254)",
          name: "Mormaço/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.28137 -11.559510000000001)",
          name: "Morpará/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.83444 -25.477549999999997)",
          name: "Morretes/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.12534 -3.22946)",
          name: "Morrinhos/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.101420000000005 -17.732519999999997)",
          name: "Morrinhos/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.935469999999995 -29.365550000000002)",
          name: "Morrinhos do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.05842 -20.73154)",
          name: "Morro Agudo/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.05742 -15.32151)",
          name: "Morro Agudo de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.90137 -9.7255)",
          name: "Morro Cabeça no Tempo/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.210460000000005 -28.65155)",
          name: "Morro da Fumaça/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.603390000000005 -18.54754)",
          name: "Morro da Garça/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.156349999999996 -11.550510000000001)",
          name: "Morro do Chapéu/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.31236 -3.7434600000000002)",
          name: "Morro do Chapéu do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.37638 -19.21654)",
          name: "Morro do Pilar/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.72146 -28.801550000000002)",
          name: "Morro Grande/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.6335 -31.588549999999998)",
          name: "Morro Redondo/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.081480000000006 -29.53855)",
          name: "Morro Reuter/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.03937 -2.86445)",
          name: "Morros/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.36837 -15.023530000000001)",
          name: "Mortugaba/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.79242 -22.88055)",
          name: "Morungaba/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.215430000000005 -16.12752)",
          name: "Mossâmedes/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.34432 -5.188470000000001)",
          name: "Mossoró/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.921479999999995 -31.10755)",
          name: "Mostardas/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.15143 -21.50854)",
          name: "Motuca/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.57143000000001 -14.74551)",
          name: "Mozarlândia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.217400000000005 -1.52844)",
          name: "Muaná/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-60.90047 2.42958)",
          name: "Mucajaí/RR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.74734 -3.9094599999999997)",
          name: "Mucambo/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.37136 -13.00552)",
          name: "Mucugê/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.86848 -29.16555)",
          name: "Muçum/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.55135 -18.08654)",
          name: "Mucuri/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.51636 -18.093539999999997)",
          name: "Mucurici/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.182469999999995 -28.31455)",
          name: "Muitos Capões/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.76848 -28.32955)",
          name: "Muliterno/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.99633 -4.30647)",
          name: "Mulungu/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.46231 -7.02449)",
          name: "Mulungu/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.639359999999996 -11.96651)",
          name: "Mulungu do Morro/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.47235 -11.85951)",
          name: "Mundo Novo/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.27147 -23.93853)",
          name: "Mundo Novo/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.28142 -13.77651)",
          name: "Mundo Novo/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.36142 -22.61355)",
          name: "Munhoz/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.77446 -23.14853)",
          name: "Munhoz de Melo/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.11034 -13.00352)",
          name: "Muniz Ferreira/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.41337 -20.46455)",
          name: "Muniz Freire/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.549369999999996 -12.065510000000002)",
          name: "Muquém de São Francisco/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.34637 -20.95255)",
          name: "Muqui/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.36638 -21.13155)",
          name: "Muriaé/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.959320000000005 -10.42751)",
          name: "Muribeca/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.94331 -9.307500000000001)",
          name: "Murici/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.094350000000006 -3.31946)",
          name: "Murici dos Portelas/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.6114 -7.147480000000001)",
          name: "Muricilândia/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.99034 -12.626520000000001)",
          name: "Muritiba/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.27845 -20.99353)",
          name: "Murutinga do Sul/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.50534 -13.22952)",
          name: "Mutuípe/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.43837 -19.80055)",
          name: "Mutum/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.27542 -13.733509999999999)",
          name: "Mutunópolis/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.52641 -21.376540000000002)",
          name: "Muzambinho/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.24937 -18.45954)",
          name: "Nacip Raydan/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.23745 -22.62153)",
          name: "Nantes/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.35436 -17.83954)",
          name: "Nanuque/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.82148 -28.45954)",
          name: "Não-Me-Toque/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.32838 -19.230539999999998)",
          name: "Naque/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.52445 -22.407529999999998)",
          name: "Narandiba/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.4934 -16.50452)",
          name: "Natalândia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.51241 -22.12055)",
          name: "Natércia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.97338 -21.042550000000002)",
          name: "Natividade/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.723400000000005 -11.7105)",
          name: "Natividade/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.442409999999995 -23.37655)",
          name: "Natividade da Serra/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.550309999999996 -7.641489999999999)",
          name: "Natuba/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.65445 -26.899549999999998)",
          name: "Navegantes/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.191469999999995 -23.06553)",
          name: "Naviraí/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.01434 -13.03552)",
          name: "Nazaré/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.6644 -6.37247)",
          name: "Nazaré/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.228300000000004 -7.74249)",
          name: "Nazaré da Mata/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.67236 -6.97348)",
          name: "Nazaré do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.39542 -23.18155)",
          name: "Nazaré Paulista/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.6114 -21.216549999999998)",
          name: "Nazareno/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.32533 -6.91648)",
          name: "Nazarezinho/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.88243 -16.58252)",
          name: "Nazário/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.57932 -10.32051)",
          name: "Neópolis/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.2364 -21.23655)",
          name: "Nepomuceno/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.21942 -16.406519999999997)",
          name: "Nerópolis/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.63043 -20.846529999999998)",
          name: "Neves Paulista/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.71345 -2.18645)",
          name: "Nhamundá/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.03844 -20.69453)",
          name: "Nhandeara/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.46448 -28.536540000000002)",
          name: "Nicolau Vergueiro/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.10734 -13.59952)",
          name: "Nilo Peçanha/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.41439 -22.80856)",
          name: "Nilópolis/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.90537 -3.46646)",
          name: "Nina Rodrigues/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.75436 -15.32153)",
          name: "Ninheira/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.83048 -21.13552)",
          name: "Nioaque/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.778439999999996 -20.913529999999998)",
          name: "Nipoã/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.46041 -14.47451)",
          name: "Niquelândia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.209300000000006 -6.09148)",
          name: "Nísia Floresta/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.10439 -22.88356)",
          name: "Niterói/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.32846000000001 -14.7205)",
          name: "Nobres/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.77148 -27.362540000000003)",
          name: "Nonoai/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.42834 -10.82351)",
          name: "Nordestina/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-59.62346 3.88059)",
          name: "Normandia/RR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.803459999999994 -14.455499999999999)",
          name: "Nortelândia/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.48932 -10.44351)",
          name: "Nossa Senhora Aparecida/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.42032 -10.2185)",
          name: "Nossa Senhora da Glória/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.19332 -10.49251)",
          name: "Nossa Senhora das Dores/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.79446 -22.91453)",
          name: "Nossa Senhora das Graças/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.058319999999995 -10.0795)",
          name: "Nossa Senhora de Lourdes/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.173359999999995 -4.63147)",
          name: "Nossa Senhora de Nazaré/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.34646 -15.775500000000001)",
          name: "Nossa Senhora do Livramento/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.12632 -10.855509999999999)",
          name: "Nossa Senhora do Socorro/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.62136 -3.97946)",
          name: "Nossa Senhora dos Remédios/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.496430000000004 -21.01653)",
          name: "Nova Aliança/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.60246 -23.17753)",
          name: "Nova Aliança do Ivaí/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.16648 -28.67854)",
          name: "Nova Alvorada/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.38447 -21.46652)",
          name: "Nova Alvorada do Sul/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.89642 -15.02251)",
          name: "Nova América/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.718450000000004 -23.33154)",
          name: "Nova América da Colina/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.34346 -22.233530000000002)",
          name: "Nova Andradina/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.74548 -28.65955)",
          name: "Nova Araçá/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.25647 -24.529529999999998)",
          name: "Nova Aurora/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.25542 -18.059530000000002)",
          name: "Nova Aurora/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-57.86246 -9.814480000000001)",
          name: "Nova Bandeirantes/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.70548 -28.724549999999997)",
          name: "Nova Bassano/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.01736 -18.47554)",
          name: "Nova Belém/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.97948 -27.99454)",
          name: "Nova Boa Vista/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.96645 -14.9575)",
          name: "Nova Brasilândia/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-62.33149 -11.72548)",
          name: "Nova Brasilândia d'Oeste/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.02848 -29.21455)",
          name: "Nova Bréscia/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.90444 -24.12155)",
          name: "Nova Campina/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.14235 -14.79453)",
          name: "Nova Canaã/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.953450000000004 -10.558480000000001)",
          name: "Nova Canaã do Norte/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.949439999999996 -20.38653)",
          name: "Nova Canaã Paulista/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.10749 -27.60754)",
          name: "Nova Candelária/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.56947 -24.673540000000003)",
          name: "Nova Cantu/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.34344 -20.76353)",
          name: "Nova Castilho/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.25739 -7.116479999999999)",
          name: "Nova Colinas/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.327420000000004 -14.09951)",
          name: "Nova Crixás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.43429999999999 -6.47848)",
          name: "Nova Cruz/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.03838 -19.75054)",
          name: "Nova Era/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.90648 -26.90354)",
          name: "Nova Erechim/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.20546 -23.18453)",
          name: "Nova Esperança/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.966390000000004 -2.26945)",
          name: "Nova Esperança do Piriá/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.26348 -25.907539999999997)",
          name: "Nova Esperança do Sudoeste/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.8295 -29.410539999999997)",
          name: "Nova Esperança do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.561429999999994 -21.77854)",
          name: "Nova Europa/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.63134 -11.60651)",
          name: "Nova Fátima/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.564449999999994 -23.43254)",
          name: "Nova Fátima/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.20331 -6.4554800000000006)",
          name: "Nova Floresta/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.53139 -22.28256)",
          name: "Nova Friburgo/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.57142 -15.14351)",
          name: "Nova Glória/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.314429999999994 -20.53453)",
          name: "Nova Granada/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.41045 -10.31648)",
          name: "Nova Guarita/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.64445 -21.334529999999997)",
          name: "Nova Guataporanga/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.90248 -29.58355)",
          name: "Nova Hartz/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.62635 -13.81052)",
          name: "Nova Ibiá/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.45139 -22.75956)",
          name: "Nova Iguaçu/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.38942 -14.28951)",
          name: "Nova Iguaçu de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.49045 -21.10453)",
          name: "Nova Independência/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.04437 -6.7344800000000005)",
          name: "Nova Iorque/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.077400000000004 -4.921460000000001)",
          name: "Nova Ipixuna/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.812479999999994 -26.94054)",
          name: "Nova Itaberaba/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.06935 -13.02752)",
          name: "Nova Itarana/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-59.609480000000005 -14.47649)",
          name: "Nova Lacerda/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.54147 -25.30754)",
          name: "Nova Laranjeiras/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.847390000000004 -19.98654)",
          name: "Nova Lima/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.98546 -22.76653)",
          name: "Nova Londrina/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.26244 -20.856530000000003)",
          name: "Nova Luzitânia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-65.33149999999999 -10.41147)",
          name: "Nova Mamoré/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.969460000000005 -14.3645)",
          name: "Nova Marilândia/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-57.07446 -13.02649)",
          name: "Nova Maringá/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.50137 -18.43754)",
          name: "Nova Módica/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-57.53546 -9.98248)",
          name: "Nova Monte Verde/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.08446 -13.8385)",
          name: "Nova Mutum/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.792429999999996 -13.9965)",
          name: "Nova Nazaré/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.29642 -22.77855)",
          name: "Nova Odessa/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.089470000000006 -23.47253)",
          name: "Nova Olímpia/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-57.28847 -14.7975)",
          name: "Nova Olímpia/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.68134 -7.09248)",
          name: "Nova Olinda/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.4234 -7.63248)",
          name: "Nova Olinda/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.04233 -7.4804900000000005)",
          name: "Nova Olinda/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.69538 -2.8474500000000003)",
          name: "Nova Olinda do Maranhão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-59.094460000000005 -3.88845)",
          name: "Nova Olinda do Norte/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.30748 -29.02955)",
          name: "Nova Pádua/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.46949 -29.47254)",
          name: "Nova Palma/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.42131 -6.67848)",
          name: "Nova Palmeira/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.11448 -29.37655)",
          name: "Nova Petrópolis/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.68342 -19.13653)",
          name: "Nova Ponte/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.301379999999995 -15.80353)",
          name: "Nova Porteirinha/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.61048 -28.784550000000003)",
          name: "Nova Prata/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.347480000000004 -25.63353)",
          name: "Nova Prata do Iguaçu/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.697489999999995 -28.06454)",
          name: "Nova Ramada/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.071360000000006 -12.819519999999999)",
          name: "Nova Redenção/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.42041 -21.126540000000002)",
          name: "Nova Resende/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.8804 -13.74251)",
          name: "Nova Roma/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.40848 -28.990550000000002)",
          name: "Nova Roma do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.91441 -10.56749)",
          name: "Nova Rosalândia/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.56334 -4.70747)",
          name: "Nova Russas/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.724450000000004 -23.59754)",
          name: "Nova Santa Bárbara/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.351440000000004 -10.82049)",
          name: "Nova Santa Helena/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.27448 -29.85755)",
          name: "Nova Santa Rita/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.05236 -8.08749)",
          name: "Nova Santa Rita/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.95347 -24.46653)",
          name: "Nova Santa Rosa/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.9844 -19.876540000000002)",
          name: "Nova Serrana/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.48333 -11.233509999999999)",
          name: "Nova Soure/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.94546 -24.43854)",
          name: "Nova Tebas/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.38639 -1.20644)",
          name: "Nova Timboteua/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.93045 -27.286550000000002)",
          name: "Nova Trento/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.25545 -12.991489999999999)",
          name: "Nova Ubiratã/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-62.56149 -10.90448)",
          name: "Nova União/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.58039 -19.69054)",
          name: "Nova União/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.40136 -18.71155)",
          name: "Nova Venécia/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.323420000000006 -16.37152)",
          name: "Nova Veneza/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.49846 -28.63755)",
          name: "Nova Veneza/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.37235 -17.89254)",
          name: "Nova Viçosa/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.35344 -14.67351)",
          name: "Nova Xavantina/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.91943 -20.99254)",
          name: "Novais/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.6774 -9.963489999999998)",
          name: "Novo Acordo/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-60.944469999999995 -2.62145)",
          name: "Novo Airão/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.574400000000004 -12.93151)",
          name: "Novo Alegre/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-60.38047 -5.12146)",
          name: "Novo Aripuanã/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.10848 -27.90954)",
          name: "Novo Barreiro/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.71143 -16.03451)",
          name: "Novo Brasil/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.94849 -29.73554)",
          name: "Novo Cabrais/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.875370000000004 -17.468539999999997)",
          name: "Novo Cruzeiro/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.03941 -16.05952)",
          name: "Novo Gama/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.13148 -29.67855)",
          name: "Novo Hamburgo/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.16836 -12.80851)",
          name: "Novo Horizonte/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.83448 -26.44454)",
          name: "Novo Horizonte/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.221430000000005 -21.468539999999997)",
          name: "Novo Horizonte/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-57.35246 -11.41349)",
          name: "Novo Horizonte do Norte/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-62.00049 -11.710479999999999)",
          name: "Novo Horizonte do Oeste/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.86047 -22.66953)",
          name: "Novo Horizonte do Sul/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.50746 -23.76454)",
          name: "Novo Itacolomi/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.62839 -11.8245)",
          name: "Novo Jardim/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.64731 -8.9155)",
          name: "Novo Lino/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.50549 -27.57453)",
          name: "Novo Machado/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.198449999999994 -9.950479999999999)",
          name: "Novo Mundo/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.77435 -5.53447)",
          name: "Novo Oriente/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.215360000000004 -17.41554)",
          name: "Novo Oriente de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.93935999999999 -6.44948)",
          name: "Novo Oriente do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.50442 -13.24451)",
          name: "Novo Planalto/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.38244 -7.14747)",
          name: "Novo Progresso/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.79641 -4.33146)",
          name: "Novo Repartimento/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.96842 -12.2905)",
          name: "Novo Santo Antônio/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.93335 -5.28847)",
          name: "Novo Santo Antônio/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.01844 -14.90651)",
          name: "Novo São Joaquim/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.18248 -27.56354)",
          name: "Novo Tiradentes/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.40633 -10.317499999999999)",
          name: "Novo Triunfo/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.055479999999996 -27.74754)",
          name: "Novo Xingu/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.40837 -16.01753)",
          name: "Novorizonte/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.74942 -20.730539999999998)",
          name: "Nuporanga/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.51844 -1.91844)",
          name: "Óbidos/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.59733 -4.49147)",
          name: "Ocara/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.92344 -22.43954)",
          name: "Ocauçu/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.13136 -7.02548)",
          name: "Oeiras/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.85441 -2.00345)",
          name: "Oeiras do Pará/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.83542 3.84259)",
          name: "Oiapoque/AP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.9374 -21.86155)",
          name: "Olaria/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.34244 -22.94154)",
          name: "Óleo/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.75132 -7.22849)",
          name: "Olho d'Água/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.12038 -4.139460000000001)",
          name: "Olho d'Água das Cunhãs/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.29432 -9.5365)",
          name: "Olho d'Água das Flores/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.832330000000006 -9.5015)",
          name: "Olho d'Água do Casado/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.57536 -5.841469999999999)",
          name: "Olho d'Água do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.81732 -10.0585)",
          name: "Olho d'Água Grande/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.706320000000005 -5.95648)",
          name: "Olho-d'Água do Borges/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.57338 -17.39753)",
          name: "Olhos-d'Água/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.91543 -20.73753)",
          name: "Olímpia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.26441 -22.06855)",
          name: "Olímpio Noronha/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-34.8553 -8.00949)",
          name: "Olinda/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.99738 -2.99845)",
          name: "Olinda Nova do Maranhão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.333330000000004 -11.367510000000001)",
          name: "Olindina/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.24431 -6.99148)",
          name: "Olivedos/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.827400000000004 -20.69654)",
          name: "Oliveira/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.90741 -10.70849)",
          name: "Oliveira de Fátima/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.89637 -12.31751)",
          name: "Oliveira dos Brejinhos/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.456390000000006 -21.33955)",
          name: "Oliveira Fortes/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.19132 -9.5195)",
          name: "Olivença/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.807399999999994 -19.730539999999998)",
          name: "Onça de Pitangui/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.29943 -20.614530000000002)",
          name: "Onda Verde/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.80638 -20.43155)",
          name: "Oratórios/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.091440000000006 -22.15354)",
          name: "Oriente/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.35143 -20.18253)",
          name: "Orindiúva/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.866440000000004 -1.76644)",
          name: "Oriximiná/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.21038 -20.50655)",
          name: "Orizânia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.29642 -17.03152)",
          name: "Orizona/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.88742 -20.72054)",
          name: "Orlândia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.29146 -28.359550000000002)",
          name: "Orleans/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.60231 -7.74549)",
          name: "Orobó/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.60234 -8.62049)",
          name: "Orocó/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.91433 -6.24448)",
          name: "Orós/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.94945 -24.20854)",
          name: "Ortigueira/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.79242 -23.53355)",
          name: "Osasco/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.281439999999996 -22.31854)",
          name: "Oscar Bressane/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.270469999999996 -29.88755)",
          name: "Osório/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.89045 -21.797530000000002)",
          name: "Osvaldo Cruz/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.122460000000004 -27.48355)",
          name: "Otacílio Costa/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.11939 -1.5484399999999998)",
          name: "Ourém/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.61734 -12.017510000000001)",
          name: "Ouriçangas/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.08234 -7.883489999999999)",
          name: "Ouricuri/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.08442 -6.75547)",
          name: "Ourilândia do Norte/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.87144 -22.97954)",
          name: "Ourinhos/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.199459999999995 -23.40553)",
          name: "Ourizona/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.61847 -27.34154)",
          name: "Ouro/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.94632 -6.70148)",
          name: "Ouro Branco/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.35732 -9.167499999999999)",
          name: "Ouro Branco/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.692389999999996 -20.521549999999998)",
          name: "Ouro Branco/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.36942 -22.28355)",
          name: "Ouro Fino/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.50839 -20.28855)",
          name: "Ouro Preto/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-62.24848 -10.716479999999999)",
          name: "Ouro Preto do Oeste/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.152319999999996 -7.62049)",
          name: "Ouro Velho/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.31247 -26.69454)",
          name: "Ouro Verde/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.700450000000004 -21.489530000000002)",
          name: "Ouro Verde/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.193419999999996 -16.220519999999997)",
          name: "Ouro Verde de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.27037 -18.07154)",
          name: "Ouro Verde de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.90348 -24.80553)",
          name: "Ouro Verde do Oeste/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.37244 -20.00153)",
          name: "Ouroeste/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.08335 -10.97051)",
          name: "Ourolândia/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.83941 -18.23453)",
          name: "Ouvidor/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.26145 -21.562530000000002)",
          name: "Pacaembu/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.63841 -3.83846)",
          name: "Pacajá/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.461330000000004 -4.17346)",
          name: "Pacajus/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-61.14647 4.4305900000000005)",
          name: "Pacaraima/RR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.62033 -3.98446)",
          name: "Pacatuba/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.65132 -10.45351)",
          name: "Pacatuba/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.10837 -2.53245)",
          name: "Paço do Lumiar/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.92333 -4.22546)",
          name: "Pacoti/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.69734 -3.98846)",
          name: "Pacujá/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.28441 -15.16052)",
          name: "Padre Bernardo/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.51537 -16.364530000000002)",
          name: "Padre Carvalho/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.90435 -7.35548)",
          name: "Padre Marcos/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.52437 -17.07254)",
          name: "Padre Paraíso/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.25636 -7.77849)",
          name: "Paes Landim/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.065369999999994 -15.51753)",
          name: "Pai Pedro/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.49848 -27.25254)",
          name: "Paial/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.049459999999996 -23.45853)",
          name: "Paiçandu/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.76147 -27.71154)",
          name: "Paim Filho/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.532399999999996 -18.90854)",
          name: "Paineiras/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.10546 -27.929550000000003)",
          name: "Painel/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.6614 -20.37154)",
          name: "Pains/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.41639 -21.289550000000002)",
          name: "Paiva/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.82236 -7.85649)",
          name: "Pajeú do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.32932 -9.6725)",
          name: "Palestina/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.433429999999994 -20.39053)",
          name: "Palestina/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.53344 -16.733520000000002)",
          name: "Palestina de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.317400000000006 -5.74247)",
          name: "Palestina do Pará/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.959320000000005 -4.74547)",
          name: "Palhano/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.66845 -27.64555)",
          name: "Palhoça/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.31438 -21.37555)",
          name: "Palma/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.27848 -26.34854)",
          name: "Palma Sola/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.84633 -4.150460000000001)",
          name: "Palmácia/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.592310000000005 -8.6835)",
          name: "Palmares/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.51048 -30.25855)",
          name: "Palmares do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.801429999999996 -21.08354)",
          name: "Palmares Paulista/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.99147 -26.484540000000003)",
          name: "Palmas/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.162369999999996 -14.267520000000001)",
          name: "Palmas de Monte Alto/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.00645 -25.429550000000003)",
          name: "Palmeira/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.159459999999996 -27.58355)",
          name: "Palmeira/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.314479999999996 -27.89954)",
          name: "Palmeira das Missões/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.23637 -8.72749)",
          name: "Palmeira do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.76244 -20.416529999999998)",
          name: "Palmeira d'Oeste/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.62832 -9.4075)",
          name: "Palmeira dos Índios/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.063359999999996 -5.97847)",
          name: "Palmeirais/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.89537 -2.64545)",
          name: "Palmeirândia/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.9264 -7.86048)",
          name: "Palmeirante/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.55936 -12.52951)",
          name: "Palmeiras/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.926429999999996 -16.80552)",
          name: "Palmeiras de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.546389999999995 -6.6134699999999995)",
          name: "Palmeiras do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.32631000000001 -9.0045)",
          name: "Palmeirina/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.402409999999996 -13.04451)",
          name: "Palmeirópolis/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.42442 -17.32452)",
          name: "Palmelo/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.16543 -16.79652)",
          name: "Palminópolis/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.20346 -24.893539999999998)",
          name: "Palmital/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.21844 -22.789540000000002)",
          name: "Palmital/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.555479999999996 -27.35554)",
          name: "Palmitinho/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.16148 -27.06854)",
          name: "Palmitos/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.420359999999995 -16.73554)",
          name: "Palmópolis/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.84047 -24.28453)",
          name: "Palotina/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.35443 -18.17753)",
          name: "Panamá/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.50249 -28.29354)",
          name: "Panambi/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.85137 -19.22555)",
          name: "Pancas/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.00631 -8.6645)",
          name: "Panelas/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.86045 -21.356530000000003)",
          name: "Panorama/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.37449 -30.19155)",
          name: "Pântano Grande/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.43732 -9.7485)",
          name: "Pão de Açúcar/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.748400000000004 -19.44954)",
          name: "Papagaios/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.14446 -26.37055)",
          name: "Papanduva/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.704350000000005 -7.10448)",
          name: "Paquetá/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.6084 -19.86054)",
          name: "Pará de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.7094 -22.61155)",
          name: "Paracambi/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.87541 -17.22253)",
          name: "Paracatu/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.03133 -3.41046)",
          name: "Paracuru/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.353390000000005 -2.99545)",
          name: "Paragominas/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.73841 -21.54755)",
          name: "Paraguaçu/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.57645 -22.413539999999998)",
          name: "Paraguaçu Paulista/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.78648 -28.594549999999998)",
          name: "Paraí/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.293389999999995 -22.16255)",
          name: "Paraíba do Sul/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.98437 -6.43348)",
          name: "Paraibano/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.66241 -23.38655)",
          name: "Paraibuna/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.14833 -3.4394600000000004)",
          name: "Paraipaba/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.67248 -26.61454)",
          name: "Paraíso/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.77443 -21.01654)",
          name: "Paraíso/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.60246 -23.28153)",
          name: "Paraíso do Norte/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.14949 -29.66954)",
          name: "Paraíso do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.86741 -10.17649)",
          name: "Paraíso do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.780409999999996 -22.55455)",
          name: "Paraisópolis/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.69435 -6.21148)",
          name: "Parambu/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.23936 -13.44352)",
          name: "Paramirim/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.23933 -4.09746)",
          name: "Paramoti/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.31333 -6.48648)",
          name: "Paraná/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.8834 -12.615499999999999)",
          name: "Paranã/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.15146 -22.93053)",
          name: "Paranacity/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.50944 -25.52055)",
          name: "Paranaguá/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.19144 -19.67753)",
          name: "Paranaíba/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.65444 -18.91652)",
          name: "Paranaiguara/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.477450000000005 -9.66548)",
          name: "Paranaíta/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.723440000000004 -23.38954)",
          name: "Paranapanema/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.09846 -22.634529999999998)",
          name: "Paranapoema/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.58644 -20.103530000000003)",
          name: "Paranapuã/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.658319999999996 -8.9215)",
          name: "Paranatama/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.051449999999996 -14.4325)",
          name: "Paranatinga/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.46546 -23.073529999999998)",
          name: "Paranavaí/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.43148 -23.89352)",
          name: "Paranhos/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.40439 -19.27454)",
          name: "Paraopeba/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.79344 -21.783530000000003)",
          name: "Parapuã/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.65632 -7.32149)",
          name: "Parari/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.71341 -23.218549999999997)",
          name: "Parati/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.184369999999994 -12.691510000000001)",
          name: "Paratinga/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.10132 -5.77448)",
          name: "Paraú/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.902409999999996 -6.06847)",
          name: "Parauapebas/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.44943 -16.94852)",
          name: "Paraúna/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.83831 -5.22347)",
          name: "Parazinho/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.374430000000004 -23.08154)",
          name: "Pardinho/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.39848 -29.63855)",
          name: "Pareci Novo/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-61.603480000000005 -12.175479999999999)",
          name: "Parecis/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.65831 -6.68848)",
          name: "Parelhas/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.00633 -9.2545)",
          name: "Pariconha/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.73645 -2.62845)",
          name: "Parintins/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.86233 -10.68851)",
          name: "Paripiranga/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.55231 -9.465499999999999)",
          name: "Paripueira/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.88143 -24.71555)",
          name: "Pariquera-Açu/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.01544 -20.30453)",
          name: "Parisi/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.63938 -10.227500000000001)",
          name: "Parnaguá/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.77735 -2.90545)",
          name: "Parnaíba/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.2633 -5.91648)",
          name: "Parnamirim/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.578340000000004 -8.09149)",
          name: "Parnamirim/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.093360000000004 -5.68247)",
          name: "Parnarama/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.835480000000004 -29.629550000000002)",
          name: "Parobé/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.64331 -6.43648)",
          name: "Passa e Fica/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.967400000000005 -22.39055)",
          name: "Passa Quatro/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.961490000000005 -29.45354)",
          name: "Passa Sete/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.4964 -20.65155)",
          name: "Passa Tempo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.13638 -19.353540000000002)",
          name: "Passabém/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.3783 -6.2794799999999995)",
          name: "Passagem/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.04932 -7.13849)",
          name: "Passagem/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.784369999999996 -6.180470000000001)",
          name: "Passagem Franca/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.44036 -5.85847)",
          name: "Passagem Franca do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.2344 -22.20955)",
          name: "Passa-Vinte/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.58131 -7.99549)",
          name: "Passira/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.49331 -9.238499999999998)",
          name: "Passo de Camaragibe/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.724470000000004 -29.31655)",
          name: "Passo de Torres/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.27549 -29.74855)",
          name: "Passo do Sobrado/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.40748 -28.26354)",
          name: "Passo Fundo/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.61041 -20.71954)",
          name: "Passos/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.05947 -26.78054)",
          name: "Passos Maia/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.07737 -6.60248)",
          name: "Pastos Bons/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.08238 -16.076529999999998)",
          name: "Patis/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.225480000000005 -24.62653)",
          name: "Pato Bragado/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.67147 -26.22954)",
          name: "Pato Branco/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.280319999999996 -7.02448)",
          name: "Patos/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.518409999999996 -18.57953)",
          name: "Patos de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.244350000000004 -7.66849)",
          name: "Patos do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.993410000000004 -18.94453)",
          name: "Patrocínio/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.21538 -21.15355)",
          name: "Patrocínio do Muriaé/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.28242 -20.63954)",
          name: "Patrocínio Paulista/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.63732 -6.11048)",
          name: "Patu/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.41939 -22.429550000000003)",
          name: "Paty do Alferes/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.65135 -15.46453)",
          name: "Pau Brasil/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.04441 -7.83348)",
          name: "Pau d'Arco/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.37241 -7.54048)",
          name: "Pau d'Arco",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.40536 -5.27647)",
          name: "Pau D'arco do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.20933 -6.111479999999999)",
          name: "Pau dos Ferros/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.180299999999995 -7.8974899999999995)",
          name: "Paudalho/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-66.9765 -7.71446)",
          name: "Pauini/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.98039 -20.87455)",
          name: "Paula Cândido/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.93846 -26.20854)",
          name: "Paula Freitas/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.831450000000004 -21.31853)",
          name: "Paulicéia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.15442 -22.76155)",
          name: "Paulínia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.533359999999995 -2.71945)",
          name: "Paulino Neves/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.62432 -6.59448)",
          name: "Paulista/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-34.8733 -7.94149)",
          name: "Paulista/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.150349999999996 -8.14449)",
          name: "Paulistana/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.403439999999996 -22.57854)",
          name: "Paulistânia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.86838 -18.42754)",
          name: "Paulistas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.22233 -9.4085)",
          name: "Paulo Afonso/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.421479999999995 -27.70354)",
          name: "Paulo Bento/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.38343 -20.03153)",
          name: "Paulo de Faria/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.83646 -26.04054)",
          name: "Paulo Frontin/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.37031 -9.3665)",
          name: "Paulo Jacinto/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.68445 -27.96255)",
          name: "Paulo Lopes/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.239380000000004 -4.445460000000001)",
          name: "Paulo Ramos/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.99936 -17.42854)",
          name: "Pavão/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.73348 -29.55255)",
          name: "Paverama/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.22337 -7.96649)",
          name: "Pavussu/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.61334 -11.83451)",
          name: "Pé de Serra/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.34346 -23.913529999999998)",
          name: "Peabiru/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.557379999999995 -18.54954)",
          name: "Peçanha/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.77543 -22.35254)",
          name: "Pederneiras/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.94132 -8.497489999999999)",
          name: "Pedra/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.29736 -16.00553)",
          name: "Pedra Azul/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.443419999999996 -22.793550000000003)",
          name: "Pedra Bela/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.330380000000005 -20.521549999999998)",
          name: "Pedra Bonita/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.71734 -5.454470000000001)",
          name: "Pedra Branca/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.06833 -7.427490000000001)",
          name: "Pedra Branca/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.944419999999994 0.7775700000000001)",
          name: "Pedra Branca do Amaparí/AP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.714380000000006 -20.59755)",
          name: "Pedra do Anta/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.2094 -20.25854)",
          name: "Pedra do Indaiá/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.154379999999996 -20.83055)",
          name: "Pedra Dourada/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.879310000000004 -5.15047)",
          name: "Pedra Grande/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.48031 -6.75748)",
          name: "Pedra Lavrada/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.687329999999996 -10.617510000000001)",
          name: "Pedra Mole/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.10531 -5.58348)",
          name: "Pedra Preta/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.474450000000004 -16.62351)",
          name: "Pedra Preta/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.46641 -22.243550000000003)",
          name: "Pedralva/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.110440000000004 -20.248530000000002)",
          name: "Pedranópolis/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.65034 -12.15051)",
          name: "Pedrão/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.58451 -31.73354)",
          name: "Pedras Altas/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.1163 -7.40249)",
          name: "Pedras de Fogo/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.39138 -15.60752)",
          name: "Pedras de Maria da Cruz/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.18546 -28.43655)",
          name: "Pedras Grandes/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.47742 -20.25754)",
          name: "Pedregulho/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.90142 -22.74255)",
          name: "Pedreira/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.597370000000005 -4.57446)",
          name: "Pedreiras/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.67433 -11.19251)",
          name: "Pedrinhas/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.79445 -22.815540000000002)",
          name: "Pedrinhas Paulista/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.462410000000006 -19.22853)",
          name: "Pedrinópolis/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.175399999999996 -8.968490000000001)",
          name: "Pedro Afonso/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.89433 -10.0145)",
          name: "Pedro Alexandre/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.38831 -5.52247)",
          name: "Pedro Avelino/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.15136 -18.03054)",
          name: "Pedro Canário/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.23343 -24.27555)",
          name: "Pedro de Toledo/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.349380000000004 -2.97345)",
          name: "Pedro do Rosário/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.552459999999996 -18.10151)",
          name: "Pedro Gomes/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.45935 -4.42546)",
          name: "Pedro II/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.28536 -8.06849)",
          name: "Pedro Laurentino/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.043389999999995 -19.61854)",
          name: "Pedro Leopoldo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.8235 -31.86455)",
          name: "Pedro Osório/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.2973 -6.63348)",
          name: "Pedro Régis/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.74639 -21.70655)",
          name: "Pedro Teixeira/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.2213 -6.4394800000000005)",
          name: "Pedro Velho/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.53941 -12.025500000000001)",
          name: "Peixe/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.314389999999996 -1.19244)",
          name: "Peixe-Boi/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.98345 -10.22948)",
          name: "Peixoto de Azevedo/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.65649 -28.423540000000003)",
          name: "Pejuçara/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.343500000000006 -31.77255)",
          name: "Pelotas/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.07733 -7.82949)",
          name: "Penaforte/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.17438 -3.29446)",
          name: "Penalva/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.07844 -21.420530000000003)",
          name: "Penápolis/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.72231 -5.26047)",
          name: "Pendências/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.58632 -10.29051)",
          name: "Penedo/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.64645 -26.76955)",
          name: "Penha/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.27033 -3.79346)",
          name: "Pentecoste/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.12139 -21.83455)",
          name: "Pequeri/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.6594 -19.63354)",
          name: "Pequi/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.93441 -8.59548)",
          name: "Pequizeiro/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.0844 -19.95354)",
          name: "Perdigão/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.29341 -19.353530000000003)",
          name: "Perdizes/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.0914 -21.091549999999998)",
          name: "Perdões/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.10944 -20.63853)",
          name: "Pereira Barreto/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.97643 -23.07654)",
          name: "Pereiras/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.461330000000004 -6.0454799999999995)",
          name: "Pereiro/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.85437 -2.5784499999999997)",
          name: "Peri Mirim/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.23438 -19.15854)",
          name: "Periquito/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.904469999999996 -27.373540000000002)",
          name: "Peritiba/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.33337 -4.38346)",
          name: "Peritoró/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.41047 -23.89653)",
          name: "Perobal/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.68447 -23.80553)",
          name: "Pérola/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.74048 -25.82453)",
          name: "Pérola d'Oeste/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.06444 -17.529519999999998)",
          name: "Perolândia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.99843 -24.32055)",
          name: "Peruíbe/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.59837 -18.35754)",
          name: "Pescador/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.69632 -8.35849)",
          name: "Pesqueira/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.303329999999995 -9.0695)",
          name: "Petrolândia/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.69846 -27.53555)",
          name: "Petrolândia/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.50835 -9.3935)",
          name: "Petrolina/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.33842 -16.09552)",
          name: "Petrolina de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.17939 -22.50556)",
          name: "Petrópolis/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.43432 -10.40651)",
          name: "Piaçabuçu/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.59944 -21.59253)",
          name: "Piacatu/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.92933 -7.1984900000000005)",
          name: "Piancó/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.77336 -13.15252)",
          name: "Piatã/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.32339 -21.50955)",
          name: "Piau/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.13648 -29.44455)",
          name: "Picada Café/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.8724 -6.438470000000001)",
          name: "Piçarra/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.67245 -26.76455)",
          name: "Piçarras/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.46735 -7.0774799999999995)",
          name: "Picos/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.34931 -6.55548)",
          name: "Picuí/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.42843 -23.71255)",
          name: "Piedade/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.07638 -19.75955)",
          name: "Piedade de Caratinga/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.73438 -20.24555)",
          name: "Piedade de Ponte Nova/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.1964 -21.469549999999998)",
          name: "Piedade do Rio Grande/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.22739 -20.471549999999997)",
          name: "Piedade dos Gerais/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.429449999999996 -26.09855)",
          name: "Piên/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.50436 -10.0035)",
          name: "Pilão Arcado/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.2603 -7.26749)",
          name: "Pilar/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.95731 -9.5975)",
          name: "Pilar/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.57842 -14.76451)",
          name: "Pilar de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.71643 -23.81355)",
          name: "Pilar do Sul/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.04333 -6.26948)",
          name: "Pilões/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.623310000000004 -6.902480000000001)",
          name: "Pilões/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.53131 -6.84448)",
          name: "Pilõezinhos/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.799409999999995 -20.484540000000003)",
          name: "Pimenta/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-61.193479999999994 -11.67348)",
          name: "Pimenta Bueno/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.419349999999994 -6.24548)",
          name: "Pimenteiras/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-61.04748 -13.48349)",
          name: "Pimenteiras do Oeste/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.687369999999994 -14.493519999999998)",
          name: "Pindaí/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.462410000000006 -22.92455)",
          name: "Pindamonhangaba/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.34338 -3.60846)",
          name: "Pindaré-Mirim/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.29031 -9.4755)",
          name: "Pindoba/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.363350000000004 -10.7435)",
          name: "Pindobaçu/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.90743 -21.18654)",
          name: "Pindorama/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.57940000000001 -11.1395)",
          name: "Pindorama do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.306329999999996 -4.02846)",
          name: "Pindoretama/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.40838 -19.727549999999997)",
          name: "Pingo-d'Água/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.19345 -25.44555)",
          name: "Pinhais/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.21548 -27.51154)",
          name: "Pinhal/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.170469999999995 -27.87455)",
          name: "Pinhal da Serra/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.48348 -26.03054)",
          name: "Pinhal de São Bento/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.307489999999994 -29.346539999999997)",
          name: "Pinhal Grande/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.05645 -23.79354)",
          name: "Pinhalão/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.99248 -26.84854)",
          name: "Pinhalzinho/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.59142 -22.77955)",
          name: "Pinhalzinho/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.66046 -25.69654)",
          name: "Pinhão/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.723330000000004 -10.56751)",
          name: "Pinhão/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.0014 -22.51355)",
          name: "Pinheiral/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.61248 -27.210539999999998)",
          name: "Pinheirinho do Vale/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.083380000000005 -2.5214499999999997)",
          name: "Pinheiro/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.3815 -31.57854)",
          name: "Pinheiro Machado/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.23147 -27.05154)",
          name: "Pinheiro Preto/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.22536 -18.40654)",
          name: "Pinheiros/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.909349999999996 -11.81351)",
          name: "Pintadas/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.450480000000006 -29.09655)",
          name: "Pinto Bandeira/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.15639 -16.059530000000002)",
          name: "Pintópolis/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.579350000000005 -6.83848)",
          name: "Pio IX/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.170379999999994 -3.89446)",
          name: "Pio XII/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.72945 -21.86853)",
          name: "Piquerobi/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.41834 -5.80448)",
          name: "Piquet Carneiro/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.17641 -22.61455)",
          name: "Piquete/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.35842 -23.05455)",
          name: "Piracaia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.01842 -17.303520000000002)",
          name: "Piracanjuba/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.4834 -20.50854)",
          name: "Piracema/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.64943 -22.72554)",
          name: "Piracicaba/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.70935 -3.92846)",
          name: "Piracuruca/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.8984 -22.629550000000002)",
          name: "Piraí/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.37934 -13.76252)",
          name: "Piraí do Norte/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.94945 -24.52654)",
          name: "Piraí do Sul/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.38444 -23.19454)",
          name: "Piraju/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.70143 -19.907529999999998)",
          name: "Pirajuba/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.457440000000005 -21.99954)",
          name: "Pirajuí/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.856320000000004 -10.73851)",
          name: "Pirambu/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.30039 -20.68555)",
          name: "Piranga/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.658429999999996 -21.09154)",
          name: "Pirangi/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.49541 -22.52855)",
          name: "Piranguçu/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.53241 -22.40155)",
          name: "Piranguinho/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.82244 -16.42751)",
          name: "Piranhas/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.75733 -9.624500000000001)",
          name: "Piranhas/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.22337 -3.72746)",
          name: "Pirapemas/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.34638 -21.65655)",
          name: "Pirapetinga/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.19949999999999 -28.045530000000003)",
          name: "Pirapó/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.942389999999996 -17.34553)",
          name: "Pirapora/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.00242 -23.39755)",
          name: "Pirapora do Bom Jesus/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.50045 -22.27553)",
          name: "Pirapozinho/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.063449999999996 -25.44255)",
          name: "Piraquara/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.297399999999996 -6.77447)",
          name: "Piraquê/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.42642 -21.99654)",
          name: "Pirassununga/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.1045 -31.44854)",
          name: "Piratini/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.13544 -22.413539999999998)",
          name: "Piratininga/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.77247 -27.420540000000003)",
          name: "Piratuba/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.02639 -21.27655)",
          name: "Piraúba/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.95942 -15.85252)",
          name: "Pirenópolis/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.28042 -17.30152)",
          name: "Pires do Rio/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.64534 -4.24746)",
          name: "Pires Ferreira/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.72036 -14.94053)",
          name: "Piripá/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.77735 -4.27346)",
          name: "Piripiri/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.55535 -11.73051)",
          name: "Piritiba/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.49931 -6.78048)",
          name: "Pirpirituba/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.76146 -24.75754)",
          name: "Pitanga/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.58645 -23.23153)",
          name: "Pitangueiras/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.22242 -21.00954)",
          name: "Pitangueiras/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.8904 -19.68354)",
          name: "Pitangui/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-34.8093 -7.47149)",
          name: "Pitimbu/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.18241 -10.44349)",
          name: "Pium/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.72937 -20.835549999999998)",
          name: "Piúma/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.95841 -20.46554)",
          name: "Piumhi/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.22044 -3.8684600000000002)",
          name: "Placas/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-67.15051000000001 -10.276470000000002)",
          name: "Plácido de Castro/AC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.61441 -15.45352)",
          name: "Planaltina/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.91446 -23.00753)",
          name: "Planaltina do Paraná/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.36935 -13.25952)",
          name: "Planaltino/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.05948 -27.32954)",
          name: "Planalto/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.47135 -14.67053)",
          name: "Planalto/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.76648 -25.71653)",
          name: "Planalto/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.92944 -21.03453)",
          name: "Planalto/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.86648 -27.07054)",
          name: "Planalto Alegre/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.77445 -14.6585)",
          name: "Planalto da Serra/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.70243 -20.13853)",
          name: "Planura/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.204440000000005 -22.63854)",
          name: "Platina/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.345420000000004 -23.52855)",
          name: "Poá/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.70532 -8.186490000000001)",
          name: "Poção/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.94338 -4.74647)",
          name: "Poção de Pedras/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.06131 -7.07749)",
          name: "Pocinhos/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.663309999999996 -5.623480000000001)",
          name: "Poço Branco/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.49533 -6.40348)",
          name: "Poço Dantas/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.671479999999995 -29.45055)",
          name: "Poço das Antas/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.286319999999996 -9.313500000000001)",
          name: "Poço das Trincheiras/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.51233 -6.57548)",
          name: "Poço de José de Moura/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.965410000000006 -21.78155)",
          name: "Poço Fundo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.68532999999999 -9.806500000000002)",
          name: "Poço Redondo/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.18333 -10.708509999999999)",
          name: "Poço Verde/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.36535 -14.53053)",
          name: "Poções/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.62347 -16.2575)",
          name: "Poconé/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.56142 -21.78854)",
          name: "Poços de Caldas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.63737 -19.62055)",
          name: "Pocrane/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.32833 -12.431519999999999)",
          name: "Pojuca/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.82444 -20.78553)",
          name: "Poloni/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.802319999999995 -6.77048)",
          name: "Pombal/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.39631 -8.14149)",
          name: "Pombos/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.17745 -26.74155)",
          name: "Pomerode/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.172439999999995 -22.109540000000003)",
          name: "Pompéia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.935399999999994 -19.224539999999998)",
          name: "Pompéu/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.36743 -21.73654)",
          name: "Pongaí/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.8714 -1.39044)",
          name: "Ponta de Pedras/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.16245 -25.09554)",
          name: "Ponta Grossa/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.72648 -22.536520000000003)",
          name: "Ponta Porã/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.03742 -21.02354)",
          name: "Pontal/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.317440000000005 -15.93451)",
          name: "Pontal do Araguaia/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.51144 -25.67455)",
          name: "Pontal do Paraná/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.449419999999996 -17.526519999999998)",
          name: "Pontalina/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.52344 -20.44153)",
          name: "Pontalinda/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.677479999999996 -28.059540000000002)",
          name: "Pontão/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.38046 -27.484550000000002)",
          name: "Ponte Alta/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.47939 -12.0915)",
          name: "Ponte Alta do Bom Jesus/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.46446 -27.158549999999998)",
          name: "Ponte Alta do Norte/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.5364 -10.744499999999999)",
          name: "Ponte Alta do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.83344 -16.76451)",
          name: "Ponte Branca/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.90938 -20.416549999999997)",
          name: "Ponte Nova/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.48848 -27.654539999999997)",
          name: "Ponte Preta/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.01647 -26.87254)",
          name: "Ponte Serrada/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-59.335480000000004 -15.22649)",
          name: "Pontes e Lacerda/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.703430000000004 -20.167530000000003)",
          name: "Pontes Gestal/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.54136 -18.12454)",
          name: "Ponto Belo/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.06639 -16.63153)",
          name: "Ponto Chique/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.50437 -16.75353)",
          name: "Ponto dos Volantes/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.13435 -10.86251)",
          name: "Ponto Novo/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.53844 -19.95453)",
          name: "Populina/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.92635 -4.74547)",
          name: "Poranga/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.12543 -23.176540000000003)",
          name: "Porangaba/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.149409999999996 -13.441510000000001)",
          name: "Porangatu/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.04138 -20.963549999999998)",
          name: "Porciúncula/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.37945 -22.75653)",
          name: "Porecatu/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.98832 -6.02448)",
          name: "Portalegre/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.24248 -29.70255)",
          name: "Portão/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.164429999999996 -17.81552)",
          name: "Porteirão/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.11833 -7.53549)",
          name: "Porteiras/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.02837 -15.74353)",
          name: "Porteirinha/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.82141 -1.93645)",
          name: "Portel/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.679449999999996 -17.35451)",
          name: "Portelândia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.71036 -3.89346)",
          name: "Porto/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-67.53350999999999 -9.588460000000001)",
          name: "Porto Acre/AC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.63343 -10.878490000000001)",
          name: "Porto Alegre do Norte/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.18237 -6.96748)",
          name: "Porto Alegre do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.0494 -11.609499999999999)",
          name: "Porto Alegre do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.89045 -25.545550000000002)",
          name: "Porto Amazonas/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.40847 -25.54754)",
          name: "Porto Barreiro/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.55345 -27.158549999999998)",
          name: "Porto Belo/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.39831 -9.0455)",
          name: "Porto Calvo/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.27832 -9.917499999999999)",
          name: "Porto da Folha/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.23842 -1.74844)",
          name: "Porto de Moz/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.29531 -9.1585)",
          name: "Porto de Pedras/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.78231 -5.06847)",
          name: "Porto do Mangue/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-57.41446 -11.53549)",
          name: "Porto dos Gaúchos/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-58.460480000000004 -15.8535)",
          name: "Porto Esperidião/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-57.22847 -15.3245)",
          name: "Porto Estrela/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.52443 -23.21555)",
          name: "Porto Feliz/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.479420000000005 -21.85454)",
          name: "Porto Ferreira/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.08439 -20.673550000000002)",
          name: "Porto Firme/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.39939 -6.33847)",
          name: "Porto Franco/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.41342 0.7125699999999999)",
          name: "Porto Grande/AP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.0165 -27.856530000000003)",
          name: "Porto Lucena/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.66849 -27.57553)",
          name: "Porto Mauá/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-57.88349 -21.69951)",
          name: "Porto Murtinho/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.4174 -10.70849)",
          name: "Porto Nacional/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.2904 -22.420550000000002)",
          name: "Porto Real/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.840320000000006 -10.18651)",
          name: "Porto Real do Colégio/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.26746 -22.77253)",
          name: "Porto Rico/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.60537 -1.89345)",
          name: "Porto Rico do Maranhão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.065349999999995 -16.45054)",
          name: "Porto Seguro/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.07846000000001 -26.23854)",
          name: "Porto União/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.901489999999995 -27.736530000000002)",
          name: "Porto Vera Cruz/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.23246 -26.16154)",
          name: "Porto Vitória/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-72.74452 -8.26945)",
          name: "Porto Walter/AC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.1385 -27.90653)",
          name: "Porto Xavier/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.3694 -14.09351)",
          name: "Posse/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.78637 -17.80754)",
          name: "Poté/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.02734 -7.09148)",
          name: "Potengi/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.25141 -22.84355)",
          name: "Potim/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.87735 -15.59553)",
          name: "Potiraguá/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.377430000000004 -21.04353)",
          name: "Potirendaba/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.25133 -5.66847)",
          name: "Potiretama/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.936409999999995 -22.230549999999997)",
          name: "Pouso Alegre/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.973400000000005 -22.19455)",
          name: "Pouso Alto/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.20848 -29.17154)",
          name: "Pouso Novo/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.934459999999994 -27.25855)",
          name: "Pouso Redondo/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.38945 -15.83751)",
          name: "Poxoréo/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.087450000000004 -21.85153)",
          name: "Pracinha/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.79141 1.74258)",
          name: "Pracuúba/AP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.22135 -17.34154)",
          name: "Prado/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.442449999999994 -23.039530000000003)",
          name: "Prado Ferreira/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.066419999999994 -21.359540000000003)",
          name: "Pradópolis/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.08039 -21.05855)",
          name: "Prados/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.95047 -29.19755)",
          name: "Praia Grande/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.40342 -24.00655)",
          name: "Praia Grande/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.8114 -5.393470000000001)",
          name: "Praia Norte/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.48043 -1.80044)",
          name: "Prainha/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.74048 -26.02053)",
          name: "Pranchita/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.08032 -7.69149)",
          name: "Prata/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.92443 -19.30753)",
          name: "Prata/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.20736 -5.667470000000001)",
          name: "Prata do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.66643 -22.80854)",
          name: "Pratânia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.86141 -20.745540000000002)",
          name: "Pratápolis/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.37841 -19.75154)",
          name: "Pratinha/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.43844 -22.100540000000002)",
          name: "Presidente Alves/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.55345 -22.00653)",
          name: "Presidente Bernardes/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.18839 -20.76955)",
          name: "Presidente Bernardes/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.15246 -23.27853)",
          name: "Presidente Castelo Branco/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.807469999999995 -27.22354)",
          name: "Presidente Castelo Branco/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.98736 -11.29651)",
          name: "Presidente Dutra/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.49037 -5.29047)",
          name: "Presidente Dutra/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.11645 -21.76353)",
          name: "Presidente Epitácio/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-60.02547 -2.03444)",
          name: "Presidente Figueiredo/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.62346 -27.051550000000002)",
          name: "Presidente Getúlio/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.67836 -14.68952)",
          name: "Presidente Jânio Quadros/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.71331 -6.1064799999999995)",
          name: "Presidente Juscelino/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.065369999999994 -2.9284499999999998)",
          name: "Presidente Juscelino/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.058389999999996 -18.637539999999998)",
          name: "Presidente Juscelino/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.04737 -21.099549999999997)",
          name: "Presidente Kennedy/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.5064 -8.53948)",
          name: "Presidente Kennedy/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.56238 -18.61454)",
          name: "Presidente Kubitschek/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.17848 -29.51955)",
          name: "Presidente Lucena/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-61.90148 -11.17648)",
          name: "Presidente Médici/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.82038 -2.38745)",
          name: "Presidente Médici/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.39045 -27.277549999999998)",
          name: "Presidente Nereu/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.418409999999994 -18.41853)",
          name: "Presidente Olegário/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.38945 -22.12653)",
          name: "Presidente Prudente/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.364380000000004 -2.59145)",
          name: "Presidente Sarney/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.420339999999996 -13.44952)",
          name: "Presidente Tancredo Neves/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.02437 -3.40746)",
          name: "Presidente Vargas/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.84445 -21.87653)",
          name: "Presidente Venceslau/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.11639 -0.9434400000000001)",
          name: "Primavera/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.35431 -8.33149)",
          name: "Primavera/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-61.32148 -11.828479999999999)",
          name: "Primavera de Rondônia/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.346450000000004 -15.52851)",
          name: "Primavera do Leste/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.438359999999996 -2.51045)",
          name: "Primeira Cruz/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.02845 -22.85154)",
          name: "Primeiro de Maio/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.59848 -26.44254)",
          name: "Princesa/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.99333 -7.73749)",
          name: "Princesa Isabel/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.24442 -17.25152)",
          name: "Professor Jamil/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.312479999999994 -29.24454)",
          name: "Progresso/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.85844 -21.53754)",
          name: "Promissão/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.840320000000006 -10.211509999999999)",
          name: "Propriá/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.47348 -28.75755)",
          name: "Protásio Alves/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.15539 -19.482539999999997)",
          name: "Prudente de Morais/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.978460000000005 -25.21354)",
          name: "Prudentópolis/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.89441 -10.424489999999999)",
          name: "Pugmil/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.556309999999996 -5.4674700000000005)",
          name: "Pureza/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.15448 -29.00254)",
          name: "Putinga/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.961310000000005 -7.161490000000001)",
          name: "Puxinanã/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.055429999999994 -23.29955)",
          name: "Quadra/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.45152 -30.38853)",
          name: "Quaraí/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.557399999999994 -19.27454)",
          name: "Quartel Geral/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.07647 -24.279529999999998)",
          name: "Quarto Centenário/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.698449999999994 -22.248530000000002)",
          name: "Quatá/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.91444 -23.56754)",
          name: "Quatiguá/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.00639 -0.90144)",
          name: "Quatipuru/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.2584 -22.407549999999997)",
          name: "Quatis/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.07744 -25.36655)",
          name: "Quatro Barras/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.439479999999996 -27.82154)",
          name: "Quatro Irmãos/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.97748 -24.57553)",
          name: "Quatro Pontes/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.47132 -9.3195)",
          name: "Quebrangulo/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.90847 -25.45054)",
          name: "Quedas do Iguaçu/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.419349999999994 -8.57949)",
          name: "Queimada Nova/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.624340000000004 -10.97851)",
          name: "Queimadas/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.89831 -7.35849)",
          name: "Queimadas/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.5554 -22.716549999999998)",
          name: "Queimados/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.24044 -21.79953)",
          name: "Queiroz/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.7744 -22.537550000000003)",
          name: "Queluz/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.884389999999996 -20.740550000000002)",
          name: "Queluzito/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.37843 -12.4765)",
          name: "Querência/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.48447 -23.084529999999997)",
          name: "Querência do Norte/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.072500000000005 -29.353540000000002)",
          name: "Quevedos/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.21034 -10.75351)",
          name: "Quijingue/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.72148 -26.72654)",
          name: "Quilombo/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.13046 -23.85253)",
          name: "Quinta do Sol/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.30844 -22.07354)",
          name: "Quintana/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.095490000000005 -28.74254)",
          name: "Quinze de Novembro/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.01231 -8.8285)",
          name: "Quipapá/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.45243 -18.44852)",
          name: "Quirinópolis/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.47238 -22.107560000000003)",
          name: "Quissamã/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.49845 -25.87255)",
          name: "Quitandinha/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.701350000000005 -5.84347)",
          name: "Quiterianópolis/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.84832 -7.72049)",
          name: "Quixaba/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.14932 -7.03148)",
          name: "Quixabá/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.12835 -11.412510000000001)",
          name: "Quixabeira/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.01533 -4.97147)",
          name: "Quixadá/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.20233 -6.25448)",
          name: "Quixelô/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.29333 -5.19947)",
          name: "Quixeramobim/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.98932 -5.07447)",
          name: "Quixeré/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.226330000000004 -6.19548)",
          name: "Rafael Fernandes/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.71732 -6.07648)",
          name: "Rafael Godeiro/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.50134 -12.408520000000001)",
          name: "Rafael Jambeiro/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.52743 -23.01255)",
          name: "Rafard/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.02548 -25.120530000000002)",
          name: "Ramilândia/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.89345 -22.229529999999997)",
          name: "Rancharia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.91345 -23.07054)",
          name: "Rancho Alegre/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.95447 -24.30753)",
          name: "Rancho Alegre d'Oeste/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.02245 -27.673550000000002)",
          name: "Rancho Queimado/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.10337 -2.42345)",
          name: "Raposa/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.80439 -19.96754)",
          name: "Raposos/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.45338 -20.10255)",
          name: "Raul Soares/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.52748 -25.76753)",
          name: "Realeza/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.693459999999995 -25.62154)",
          name: "Rebouças/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.46938 -21.52555)",
          name: "Recreio/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.24739 -8.73749)",
          name: "Recursolândia/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.73133 -4.22646)",
          name: "Redenção/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.03141 -8.029480000000001)",
          name: "Redenção/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.53741 -23.26755)",
          name: "Redenção da Serra/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.586380000000005 -9.48749)",
          name: "Redenção do Gurguéia/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.63849 -27.66454)",
          name: "Redentora/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.983380000000004 -20.240550000000002)",
          name: "Reduto/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.688359999999996 -6.23848)",
          name: "Regeneração/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.30345 -22.221529999999998)",
          name: "Regente Feijó/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.22543 -21.88854)",
          name: "Reginópolis/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.84443 -24.48855)",
          name: "Registro/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.072480000000006 -29.11155)",
          name: "Relvado/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.081360000000004 -9.6225)",
          name: "Remanso/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.83431 -6.90348)",
          name: "Remígio/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.969480000000004 -26.15854)",
          name: "Renascença/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.58234 -4.142460000000001)",
          name: "Reriutaba/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.447399999999995 -22.469549999999998)",
          name: "Resende/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.2384 -20.92255)",
          name: "Resende Costa/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.85145 -24.65054)",
          name: "Reserva/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-58.46647 -15.080499999999999)",
          name: "Reserva do Cabaçal/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.02847 -25.83954)",
          name: "Reserva do Iguaçu/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.25537 -19.32655)",
          name: "Resplendor/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.76339 -21.06355)",
          name: "Ressaquinha/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.48342 -20.603540000000002)",
          name: "Restinga/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.37549 -29.81354)",
          name: "Restinga Seca/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.426339999999996 -11.49551)",
          name: "Retirolândia/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.64631 -6.550479999999999)",
          name: "Riachão/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.61739 -7.36248)",
          name: "Riachão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.910379999999996 -11.7465)",
          name: "Riachão das Neves/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.666309999999996 -7.24349)",
          name: "Riachão do Bacamarte/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.72533 -11.06951)",
          name: "Riachão do Dantas/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.38234 -11.81051)",
          name: "Riachão do Jacuípe/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.2913 -7.1424900000000004)",
          name: "Riachão do Poço/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.1374 -6.438470000000001)",
          name: "Riachinho/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.9924 -16.23052)",
          name: "Riachinho/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.94632 -5.93648)",
          name: "Riacho da Cruz/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.85631 -8.13449)",
          name: "Riacho das Almas/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.93937 -13.60952)",
          name: "Riacho de Santana/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.31633 -6.26348)",
          name: "Riacho de Santana/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.157309999999995 -7.693490000000001)",
          name: "Riacho de Santo Antônio/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.65132 -6.44348)",
          name: "Riacho dos Cavalos/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.04938 -16.00653)",
          name: "Riacho dos Machados/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.95338 -10.1255)",
          name: "Riacho Frio/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.82531 -5.81548)",
          name: "Riachuelo/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.18732 -10.72851)",
          name: "Riachuelo/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.58442 -15.315510000000002)",
          name: "Rialma/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.51042 -15.44751)",
          name: "Rianápolis/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.384389999999996 -5.930470000000001)",
          name: "Ribamar Fiquene/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.75946 -20.44352)",
          name: "Ribas do Rio Pardo/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.00944 -24.657549999999997)",
          name: "Ribeira/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.43333 -11.047509999999999)",
          name: "Ribeira do Amparo/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.71336 -7.69148)",
          name: "Ribeira do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.53633 -10.83451)",
          name: "Ribeira do Pombal/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.37831 -8.5145)",
          name: "Ribeirão/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.176429999999996 -22.06754)",
          name: "Ribeirão Bonito/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.76644 -24.221549999999997)",
          name: "Ribeirão Branco/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.82443000000001 -12.9425)",
          name: "Ribeirão Cascalheira/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.75844 -23.19454)",
          name: "Ribeirão Claro/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.59042 -20.457539999999998)",
          name: "Ribeirão Corrente/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.08739 -19.76754)",
          name: "Ribeirão das Neves/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.73936 -15.459529999999999)",
          name: "Ribeirão do Largo/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.35745 -23.40854)",
          name: "Ribeirão do Pinhal/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.934439999999995 -22.784540000000003)",
          name: "Ribeirão do Sul/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.60445 -21.837529999999997)",
          name: "Ribeirão dos Índios/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.36544 -24.099549999999997)",
          name: "Ribeirão Grande/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.41342 -23.71155)",
          name: "Ribeirão Pires/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.81042 -21.17854)",
          name: "Ribeirão Preto/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.0624 -21.19155)",
          name: "Ribeirão Vermelho/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.69244 -16.48551)",
          name: "Ribeirãozinho/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.242380000000004 -7.558479999999999)",
          name: "Ribeiro Gonçalves/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.41732 -10.53951)",
          name: "Ribeirópolis/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.42142 -20.08154)",
          name: "Rifaina/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.07143000000001 -21.587539999999997)",
          name: "Rincão/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.72244 -21.726529999999997)",
          name: "Rinópolis/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.78939 -20.08854)",
          name: "Rio Acima/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.796459999999996 -25.73354)",
          name: "Rio Azul/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.33336 -19.26555)",
          name: "Rio Bananal/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.41146 -23.76254)",
          name: "Rio Bom/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.62639 -22.70856)",
          name: "Rio Bonito/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.526469999999996 -25.49154)",
          name: "Rio Bonito do Iguaçu/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-58.11647 -15.241499999999998)",
          name: "Rio Branco/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.31346 -24.32454)",
          name: "Rio Branco do Ivaí/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.314449999999994 -25.19055)",
          name: "Rio Branco do Sul/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.54647 -21.80252)",
          name: "Rio Brilhante/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.651379999999996 -20.22655)",
          name: "Rio Casca/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.1364 -22.72355)",
          name: "Rio Claro/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.56142 -22.41154)",
          name: "Rio Claro/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-62.90049 -9.70547)",
          name: "Rio Crespo/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.8834 -11.400500000000001)",
          name: "Rio da Conceição/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.074470000000005 -26.89954)",
          name: "Rio das Antas/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.58639 -22.16855)",
          name: "Rio das Flores/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.94538 -22.527559999999998)",
          name: "Rio das Ostras/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.60643 -22.843539999999997)",
          name: "Rio das Pedras/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.81136 -13.57952)",
          name: "Rio de Contas/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.076370000000004 -14.411520000000001)",
          name: "Rio do Antônio/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.14146 -26.94955)",
          name: "Rio do Campo/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.3833 -5.27347)",
          name: "Rio do Fogo/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.79746 -27.193550000000002)",
          name: "Rio do Oeste/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.292359999999995 -13.12852)",
          name: "Rio do Pires/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.57036 -16.60854)",
          name: "Rio do Prado/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.64346 -27.21455)",
          name: "Rio do Sul/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.907379999999996 -20.24255)",
          name: "Rio Doce/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.4664 -9.29349)",
          name: "Rio dos Bois/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.27445 -26.73855)",
          name: "Rio dos Cedros/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.841480000000004 -27.30054)",
          name: "Rio dos Índios/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.47439 -20.85555)",
          name: "Rio Espera/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.1593 -8.6645)",
          name: "Rio Formoso/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.10546 -28.13155)",
          name: "Rio Fortuna/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.0995 -32.03555)",
          name: "Rio Grande/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.39842 -23.74455)",
          name: "Rio Grande da Serra/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.14236 -7.77548)",
          name: "Rio Grande do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.85331 -9.4785)",
          name: "Rio Largo/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.308389999999996 -20.26554)",
          name: "Rio Manso/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.04841 -7.3114799999999995)",
          name: "Rio Maria/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.51845 -26.25455)",
          name: "Rio Negrinho/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.98746 -19.44952)",
          name: "Rio Negro/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.798449999999995 -26.106550000000002)",
          name: "Rio Negro/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.12539 -21.45855)",
          name: "Rio Novo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.93637 -20.86355)",
          name: "Rio Novo do Sul/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.24741 -19.19454)",
          name: "Rio Paranaíba/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.37849 -29.990550000000002)",
          name: "Rio Pardo/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.540369999999996 -15.610529999999999)",
          name: "Rio Pardo de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.17438 -19.929550000000003)",
          name: "Rio Piracicaba/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.17939 -21.27555)",
          name: "Rio Pomba/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.8284 -22.08955)",
          name: "Rio Preto/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-59.70046 -2.69945)",
          name: "Rio Preto da Eva/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.77342 -17.77452)",
          name: "Rio Quente/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.93333 -11.48551)",
          name: "Rio Real/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.77946 -27.86155)",
          name: "Rio Rufino/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.9024 -9.34449)",
          name: "Rio Sono/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.081300000000006 -6.8034799999999995)",
          name: "Rio Tinto/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.92843 -17.79852)",
          name: "Rio Verde/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.844460000000005 -18.91851)",
          name: "Rio Verde de Mato Grosso/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.00938 -18.29454)",
          name: "Rio Vermelho/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.68143 -19.99053)",
          name: "Riolândia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.45347 -29.64155)",
          name: "Riozinho/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.322480000000006 -27.06754)",
          name: "Riqueza/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.318400000000004 -21.02255)",
          name: "Ritápolis/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.42944 -23.82854)",
          name: "Riversul/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.86848 -29.284550000000003)",
          name: "Roca Sales/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.89347 -19.95352)",
          name: "Rochedo/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.02039 -21.63055)",
          name: "Rochedo de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.36645 -26.923550000000002)",
          name: "Rodeio/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.16948 -27.471539999999997)",
          name: "Rodeio Bonito/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.86539 -21.20055)",
          name: "Rodeiro/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.75633 -8.8515)",
          name: "Rodelas/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.06033 -5.78848)",
          name: "Rodolfo Fernandes/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-72.64752 -7.74245)",
          name: "Rodrigues Alves/AC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.8185 -28.25853)",
          name: "Rolador/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.36945 -23.31054)",
          name: "Rolândia/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.57647 -29.65155)",
          name: "Rolante/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-61.77848 -11.733479999999998)",
          name: "Rolim de Moura/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.58641 -18.88353)",
          name: "Romaria/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.314479999999996 -26.676540000000003)",
          name: "Romelândia/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.27546 -24.603540000000002)",
          name: "Roncador/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.802479999999996 -27.76754)",
          name: "Ronda Alta/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.91048 -27.82854)",
          name: "Rondinha/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-61.471000000000004 -10.838000000000001)",
          name: "Rondolândia/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.76146 -23.41153)",
          name: "Rondon/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.067400000000006 -4.77646)",
          name: "Rondon do Pará/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.63646 -16.47151)",
          name: "Rondonópolis/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.0265 -28.13153)",
          name: "Roque Gonzales/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-60.41847 0.94557)",
          name: "Rorainópolis/RR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.059459999999994 -22.58053)",
          name: "Rosana/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.23537 -2.9344500000000004)",
          name: "Rosário/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.51238 -20.97955)",
          name: "Rosário da Limeira/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.03132 -10.69651)",
          name: "Rosário do Catete/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.27546 -24.27854)",
          name: "Rosário do Ivaí/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.91451 -30.25854)",
          name: "Rosário do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.42846 -14.836500000000001)",
          name: "Rosário Oeste/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.305409999999995 -22.89855)",
          name: "Roseira/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.97831 -9.8335)",
          name: "Roteiro/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.26337 -16.40853)",
          name: "Rubelita/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.72744 -21.30153)",
          name: "Rubiácea/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.803419999999996 -15.16451)",
          name: "Rubiataba/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.53836 -16.37553)",
          name: "Rubim/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.00244 -20.17953)",
          name: "Rubinéia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.91044 -4.0964599999999995)",
          name: "Rurópolis/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.97632 -4.94047)",
          name: "Russas/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.494350000000004 -12.28451)",
          name: "Ruy Barbosa/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.935309999999994 -5.881480000000001)",
          name: "Ruy Barbosa/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.80739 -19.88654)",
          name: "Sabará/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.55345 -23.31854)",
          name: "Sabáudia/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.57844 -21.460539999999998)",
          name: "Sabino/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.08438 -18.666539999999998)",
          name: "Sabinópolis/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.90734 -6.54248)",
          name: "Saboeiro/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.440419999999996 -19.865540000000003)",
          name: "Sacramento/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.13648 -27.707539999999998)",
          name: "Sagrada Família/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.956450000000004 -21.884529999999998)",
          name: "Sagres/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.70631 -8.32849)",
          name: "Sairé/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.095490000000005 -28.393539999999998)",
          name: "Saldanha Marinho/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.48543 -21.34154)",
          name: "Sales/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.83842 -20.77254)",
          name: "Sales Oliveira/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.846410000000006 -23.53255)",
          name: "Salesópolis/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.00046 -26.980549999999997)",
          name: "Salete/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.84532 -7.10349)",
          name: "Salgadinho/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.63331 -7.93649)",
          name: "Salgadinho/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.47533 -11.03251)",
          name: "Salgado/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.441309999999994 -7.357489999999999)",
          name: "Salgado de São Félix/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.36148 -26.170540000000003)",
          name: "Salgado Filho/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.12034 -8.06749)",
          name: "Salgueiro/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.290369999999996 -16.170530000000003)",
          name: "Salinas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.76434 -12.87152)",
          name: "Salinas da Margarida/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.356390000000005 -0.62944)",
          name: "Salinópolis/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.45734 -7.28548)",
          name: "Salitre/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.86144 -21.62453)",
          name: "Salmourão/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.68832 -8.9765)",
          name: "Saloá/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.05648 -26.609540000000003)",
          name: "Saltinho/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.67743 -22.84754)",
          name: "Saltinho/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.28742 -23.20155)",
          name: "Salto/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.94735 -16.00353)",
          name: "Salto da Divisa/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.57343 -23.649549999999998)",
          name: "Salto de Pirapora/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-58.12747 -15.1305)",
          name: "Salto do Céu/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.62644 -23.60154)",
          name: "Salto do Itararé/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.21349 -29.08854)",
          name: "Salto do Jacuí/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.30948 -25.784540000000003)",
          name: "Salto do Lontra/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.98644 -22.893539999999998)",
          name: "Salto Grande/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.40647 -26.90554)",
          name: "Salto Veloso/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.8355 -28.12653)",
          name: "Salvador das Missões/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.51148 -29.43855)",
          name: "Salvador do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.5174 -0.75344)",
          name: "Salvaterra/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.34638 -7.14048)",
          name: "Sambaíba/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.873400000000004 -5.34847)",
          name: "Sampaio/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.807469999999995 -27.95054)",
          name: "Sananduva/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.314429999999994 -16.19852)",
          name: "Sanclerlândia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.925419999999995 -12.5375)",
          name: "Sandolândia/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.76345 -22.45653)",
          name: "Sandovalina/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.12946 -28.63855)",
          name: "Sangão/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.56632 -8.36149)",
          name: "Sanharó/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.804429999999996 -21.24354)",
          name: "Santa Adélia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.72844 -20.032529999999998)",
          name: "Santa Albertina/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.42445 -23.26654)",
          name: "Santa Amélia/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.97534 -11.958509999999999)",
          name: "Santa Bárbara/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.415389999999995 -19.95954)",
          name: "Santa Bárbara/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.694419999999994 -16.57452)",
          name: "Santa Bárbara de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.14038 -19.97855)",
          name: "Santa Bárbara do Leste/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.70239 -21.95955)",
          name: "Santa Bárbara do Monte Verde/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.294399999999996 -1.2244400000000002)",
          name: "Santa Bárbara do Pará/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.24749 -28.35854)",
          name: "Santa Bárbara do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.55939 -21.246550000000003)",
          name: "Santa Bárbara do Tugúrio/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.41442 -22.75455)",
          name: "Santa Bárbara d'Oeste/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.88441 -23.39755)",
          name: "Santa Branca/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.12633 -9.7365)",
          name: "Santa Brígida/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.22645 -11.91349)",
          name: "Santa Carmem/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.879310000000004 -7.73949)",
          name: "Santa Cecília/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.427459999999996 -26.96155)",
          name: "Santa Cecília/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.78445 -23.51754)",
          name: "Santa Cecília do Pavão/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.92548 -28.16254)",
          name: "Santa Cecília do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.088480000000004 -29.469549999999998)",
          name: "Santa Clara do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.954440000000005 -20.08953)",
          name: "Santa Clara d'Oeste/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.02331 -6.22948)",
          name: "Santa Cruz/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.062329999999996 -6.53348)",
          name: "Santa Cruz/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.33634 -8.24049)",
          name: "Santa Cruz/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.02534 -16.27854)",
          name: "Santa Cruz Cabrália/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.15333 -7.82149)",
          name: "Santa Cruz da Baixa Verde/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.452420000000004 -22.140539999999998)",
          name: "Santa Cruz da Conceição/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.43042 -21.29154)",
          name: "Santa Cruz da Esperança/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.812349999999995 -14.96153)",
          name: "Santa Cruz da Vitória/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.24942 -21.82754)",
          name: "Santa Cruz das Palmeiras/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.482420000000005 -17.31652)",
          name: "Santa Cruz de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.223400000000005 -21.12055)",
          name: "Santa Cruz de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.29747 -22.95353)",
          name: "Santa Cruz de Monte Castelo/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.74637 -16.09853)",
          name: "Santa Cruz de Salinas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.163399999999996 -0.66444)",
          name: "Santa Cruz do Arari/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.205310000000004 -7.95749)",
          name: "Santa Cruz do Capibaribe/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.81438 -20.23655)",
          name: "Santa Cruz do Escalvado/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.76835 -7.18548)",
          name: "Santa Cruz do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.63344 -22.89954)",
          name: "Santa Cruz do Rio Pardo/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.42649 -29.718539999999997)",
          name: "Santa Cruz do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.39243 -10.15549)",
          name: "Santa Cruz do Xingu/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.95635 -5.80447)",
          name: "Santa Cruz dos Milagres/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.44838 -18.82754)",
          name: "Santa Efigênia de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.39143 -21.46354)",
          name: "Santa Ernestina/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.80546 -23.03853)",
          name: "Santa Fé/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.10643 -15.76951)",
          name: "Santa Fé de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.41439 -16.69053)",
          name: "Santa Fé de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.7214 -7.1574800000000005)",
          name: "Santa Fé do Araguaia/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.92644 -20.21153)",
          name: "Santa Fé do Sul/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.616350000000004 -8.16349)",
          name: "Santa Filomena/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.92239 -9.11249)",
          name: "Santa Filomena/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.56137 -5.50147)",
          name: "Santa Filomena do Maranhão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.53042 -22.457539999999998)",
          name: "Santa Gertrudes/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.33348 -24.86053)",
          name: "Santa Helena/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.638329999999996 -6.72048)",
          name: "Santa Helena/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.30038 -2.23145)",
          name: "Santa Helena/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.61948 -26.93854)",
          name: "Santa Helena/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.59743 -17.81452)",
          name: "Santa Helena de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.68635999999999 -16.98354)",
          name: "Santa Helena de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.81935 -13.29252)",
          name: "Santa Inês/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.90345 -22.63853)",
          name: "Santa Inês/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.55433 -7.6214900000000005)",
          name: "Santa Inês/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.38038 -3.6674599999999997)",
          name: "Santa Inês/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.42742 -15.29851)",
          name: "Santa Isabel/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.22142 -23.31655)",
          name: "Santa Isabel/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.19746 -23.00353)",
          name: "Santa Isabel do Ivaí/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.1614 -1.29944)",
          name: "Santa Isabel do Pará/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-65.01949 -0.41444)",
          name: "Santa Isabel do Rio Negro/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.48448 -25.82153)",
          name: "Santa Izabel do Oeste/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.52542 -19.309530000000002)",
          name: "Santa Juliana/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.53036 -20.101550000000003)",
          name: "Santa Leopoldina/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.56648 -25.407529999999998)",
          name: "Santa Lúcia/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.084430000000005 -21.68554)",
          name: "Santa Lúcia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.12937 -8.95449)",
          name: "Santa Luz/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.85139 -19.77054)",
          name: "Santa Luzia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.33435 -15.42953)",
          name: "Santa Luzia/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.91932 -6.87248)",
          name: "Santa Luzia/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.69038 -4.069459999999999)",
          name: "Santa Luzia/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.44833 -11.35151)",
          name: "Santa Luzia do Itanhy/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.82231 -9.6035)",
          name: "Santa Luzia do Norte/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.942389999999996 -1.51744)",
          name: "Santa Luzia do Pará/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.773379999999996 -2.62945)",
          name: "Santa Luzia do Paruá/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-61.77948 -11.90248)",
          name: "Santa Luzia d'Oeste/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.25138 -20.38455)",
          name: "Santa Margarida/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.0805 -30.340539999999997)",
          name: "Santa Margarida do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.8075 -29.684540000000002)",
          name: "Santa Maria/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.69531 -5.8404799999999994)",
          name: "Santa Maria/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.825340000000004 -8.80949)",
          name: "Santa Maria da Boa Vista/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.161429999999996 -22.56754)",
          name: "Santa Maria da Serra/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.19838 -13.39851)",
          name: "Santa Maria da Vitória/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.72241 -8.85548)",
          name: "Santa Maria das Barreiras/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.11338 -19.44954)",
          name: "Santa Maria de Itabira/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.74637 -20.04155)",
          name: "Santa Maria de Jetibá/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.90231 -7.84049)",
          name: "Santa Maria do Cambucá/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.99348 -29.49855)",
          name: "Santa Maria do Herval/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.86346 -24.93954)",
          name: "Santa Maria do Oeste/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.57639 -1.35244)",
          name: "Santa Maria do Pará/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.14935 -16.24953)",
          name: "Santa Maria do Salto/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.41437 -18.19054)",
          name: "Santa Maria do Suaçuí/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.7954 -8.79749)",
          name: "Santa Maria do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.00838 -21.95556)",
          name: "Santa Maria Madalena/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.51945 -23.151539999999997)",
          name: "Santa Mariana/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.75545 -21.35153)",
          name: "Santa Mercedes/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.10946 -23.108530000000002)",
          name: "Santa Mônica/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.15734 -4.33246)",
          name: "Santa Quitéria/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.54736 -3.51646)",
          name: "Santa Quitéria do Maranhão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-34.978300000000004 -7.11449)",
          name: "Santa Rita/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.326370000000004 -3.14446)",
          name: "Santa Rita/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.722480000000004 -29.95955)",
          name: "São Jerônimo/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.337410000000006 -22.02955)",
          name: "Santa Rita de Caldas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.51938 -11.0095)",
          name: "Santa Rita de Cássia/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.915389999999995 -21.56355)",
          name: "Santa Rita de Ibitipoca/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.095400000000005 -22.149549999999998)",
          name: "Santa Rita de Jacutinga/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.13238 -19.87555)",
          name: "Santa Rita de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.205450000000006 -17.32651)",
          name: "Santa Rita do Araguaia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.38037 -19.36055)",
          name: "Santa Rita do Itueto/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.12042 -15.13551)",
          name: "Santa Rita do Novo Destino/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.83146 -21.303530000000002)",
          name: "Santa Rita do Pardo/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.47842 -21.710539999999998)",
          name: "Santa Rita do Passa Quatro/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.703410000000005 -22.25255)",
          name: "Santa Rita do Sapucaí/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.91441 -10.8615)",
          name: "Santa Rita do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.26745 -13.8125)",
          name: "Santa Rita do Trivelato/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.83344 -20.14353)",
          name: "Santa Rita d'Oeste/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.48149 -27.87153)",
          name: "Santa Rosa/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.9664 -19.53054)",
          name: "Santa Rosa da Serra/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.49442 -16.08552)",
          name: "Santa Rosa de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.128460000000004 -28.039550000000002)",
          name: "Santa Rosa de Lima/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.19432 -10.64651)",
          name: "Santa Rosa de Lima/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.363420000000005 -21.47354)",
          name: "Santa Rosa de Viterbo/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.28836 -6.79948)",
          name: "Santa Rosa do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-70.49352 -9.43346)",
          name: "Santa Rosa do Purus/AC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.70046 -29.13655)",
          name: "Santa Rosa do Sul/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.1214 -11.4495)",
          name: "Santa Rosa do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.68844 -20.245530000000002)",
          name: "Santa Salete/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.60036 -19.93655)",
          name: "Santa Teresa/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.52334 -12.77252)",
          name: "Santa Teresinha/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.45232 -7.116479999999999)",
          name: "Santa Teresinha/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.73548 -29.16955)",
          name: "Santa Tereza/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.01541 -13.714509999999999)",
          name: "Santa Tereza de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.63348 -25.05253)",
          name: "Santa Tereza do Oeste/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.8084 -10.282490000000001)",
          name: "Santa Tereza do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.50342 -10.47049)",
          name: "Santa Terezinha/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.48032 -7.378489999999999)",
          name: "Santa Terezinha/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.00846 -26.77955)",
          name: "Santa Terezinha/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.70642 -14.43851)",
          name: "Santa Terezinha de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.40148 -25.44753)",
          name: "Santa Terezinha de Itaipu/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.20248 -26.61954)",
          name: "Santa Terezinha do Progresso/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.6734 -6.43447)",
          name: "Santa Terezinha do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.121430000000004 -18.83953)",
          name: "Santa Vitória/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.36851 -33.51955)",
          name: "Santa Vitória do Palmar/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.37534 -11.25651)",
          name: "Santaluz/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.051379999999995 -12.983509999999999)",
          name: "Santana/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.18242 -0.05843)",
          name: "Santana/AP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.115500000000004 -30.87254)",
          name: "Santana da Boa Vista/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.797439999999995 -20.25353)",
          name: "Santana da Ponte Pensa/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.50741 -21.24955)",
          name: "Santana da Vargem/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.557379999999995 -21.287550000000003)",
          name: "Santana de Cataguases/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.332330000000006 -7.55549)",
          name: "Santana de Mangueira/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.91842 -23.44455)",
          name: "Santana de Parnaíba/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.043389999999995 -19.00654)",
          name: "Santana de Pirapama/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.212340000000005 -3.46146)",
          name: "Santana do Acaraú/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.62542 -9.50549)",
          name: "Santana do Araguaia/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.73734 -7.18848)",
          name: "Santana do Cariri/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.16639 -21.95055)",
          name: "Santana do Deserto/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.1044 -21.601550000000003)",
          name: "Santana do Garambéu/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.24532 -9.3785)",
          name: "Santana do Ipanema/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.62944 -23.75554)",
          name: "Santana do Itararé/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.1314 -20.89854)",
          name: "Santana do Jacaré/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.53351 -30.89153)",
          name: "Santana do Livramento/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.92538 -20.10855)",
          name: "Santana do Manhuaçu/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.41236 -3.11646)",
          name: "Santana do Maranhão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.65631 -5.95848)",
          name: "Santana do Matos/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.22231 -9.1685)",
          name: "Santana do Mundaú/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.56938 -19.36454)",
          name: "Santana do Paraíso/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.519349999999996 -6.94848)",
          name: "Santana do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.71439 -19.16954)",
          name: "Santana do Riacho/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.60832 -10.29151)",
          name: "Santana do São Francisco/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.73332 -6.7714799999999995)",
          name: "Santana do Seridó/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.98633 -7.38449)",
          name: "Santana dos Garrotes/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.692389999999996 -20.78855)",
          name: "Santana dos Montes/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.86734 -12.017510000000001)",
          name: "Santanópolis/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.70844 -2.4434500000000003)",
          name: "Santarém/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.476330000000004 -6.49048)",
          name: "Santarém/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.39739 -0.9294399999999999)",
          name: "Santarém Novo/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.8675 -29.19254)",
          name: "Santiago/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.68548 -26.63954)",
          name: "Santiago do Sul/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-57.00246 -14.4985)",
          name: "Santo Afonso/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.712340000000005 -12.54752)",
          name: "Santo Amaro/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.77945 -27.68855)",
          name: "Santo Amaro da Imperatriz/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.05432 -10.78951)",
          name: "Santo Amaro das Brotas/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.25436 -2.50045)",
          name: "Santo Amaro do Maranhão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.65245 -21.977529999999998)",
          name: "Santo Anastácio/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.63332 -7.21849)",
          name: "Santo André/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.538419999999995 -23.66455)",
          name: "Santo André/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.26349 -28.29954)",
          name: "Santo Ângelo/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.479310000000005 -6.3114799999999995)",
          name: "Santo Antônio/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.15142 -21.087539999999997)",
          name: "Santo Antônio da Alegria/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.63443 -17.56152)",
          name: "Santo Antônio da Barra/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.520469999999996 -29.81855)",
          name: "Santo Antônio da Patrulha/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.07744 -23.295540000000003)",
          name: "Santo Antônio da Platina/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.228500000000004 -28.51153)",
          name: "Santo Antônio das Missões/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.31142 -16.48452)",
          name: "Santo Antônio de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.26134 -12.96952)",
          name: "Santo Antônio de Jesus/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.23435 -6.98148)",
          name: "Santo Antônio de Lisboa/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.18038 -21.539550000000002)",
          name: "Santo Antônio de Pádua/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.919419999999995 -22.606550000000002)",
          name: "Santo Antônio de Posse/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.919399999999996 -20.946550000000002)",
          name: "Santo Antônio do Amparo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.49644 -20.93753)",
          name: "Santo Antônio do Aracanguá/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.81639 -21.75855)",
          name: "Santo Antônio do Aventureiro/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.34246 -22.73553)",
          name: "Santo Antônio do Caiuá/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.25541 -15.94052)",
          name: "Santo Antônio do Descoberto/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.60938 -20.31455)",
          name: "Santo Antônio do Grama/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-67.9405 -3.10244)",
          name: "Santo Antônio do Içá/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.307379999999995 -18.46654)",
          name: "Santo Antônio do Itambé/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.17635 -16.534540000000003)",
          name: "Santo Antônio do Jacinto/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.68042 -22.11655)",
          name: "Santo Antônio do Jardim/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.60645 -14.806500000000002)",
          name: "Santo Antônio do Leste/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.07746 -15.8665)",
          name: "Santo Antônio do Leverger/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.294399999999996 -20.087539999999997)",
          name: "Santo Antônio do Monte/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.02548 -28.49754)",
          name: "Santo Antônio do Palma/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.64645 -23.49454)",
          name: "Santo Antônio do Paraíso/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.66341 -22.82755)",
          name: "Santo Antônio do Pinhal/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.69148 -28.396539999999998)",
          name: "Santo Antônio do Planalto/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.62437 -15.33953)",
          name: "Santo Antônio do Retiro/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.25438 -19.22854)",
          name: "Santo Antônio do Rio Abaixo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.72348 -26.07053)",
          name: "Santo Antônio do Sudoeste/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.129400000000004 -1.15244)",
          name: "Santo Antônio do Tauá/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.36037 -4.869470000000001)",
          name: "Santo Antônio dos Lopes/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.71036 -6.04747)",
          name: "Santo Antônio dos Milagres/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.77749 -27.85154)",
          name: "Santo Augusto/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.663489999999996 -27.82453)",
          name: "Santo Cristo/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.25134 -12.43052)",
          name: "Santo Estêvão/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.39245 -21.85153)",
          name: "Santo Expedito/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.645469999999996 -27.90854)",
          name: "Santo Expedito do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.22339 -18.29754)",
          name: "Santo Hipólito/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.79445 -22.69853)",
          name: "Santo Inácio/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.91136 -7.43048)",
          name: "Santo Inácio do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.50044 -21.63853)",
          name: "Santópolis do Aguapí/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.33442 -23.96155)",
          name: "Santos/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.55339 -21.457549999999998)",
          name: "Santos Dumont/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.86535 -4.04946)",
          name: "São Benedito/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.52836 -3.33446)",
          name: "São Benedito do Rio Preto/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.952310000000004 -8.8085)",
          name: "São Benedito do Sul/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.72932 -6.90148)",
          name: "São Bentinho/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.45132 -6.48648)",
          name: "São Bento/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.82137 -2.6964500000000005)",
          name: "São Bento/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.07640000000001 -21.58255)",
          name: "São Bento Abade/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.95931 -5.09347)",
          name: "São Bento do Norte/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.731410000000004 -22.68955)",
          name: "São Bento do Sapucaí/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.37945 -26.25055)",
          name: "São Bento do Sul/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.060399999999994 -5.91547)",
          name: "São Bento do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.08731 -6.34248)",
          name: "São Bento do Trairí/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.444309999999994 -8.52349)",
          name: "São Bento do Una/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.96448 -26.47554)",
          name: "São Bernardino/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.41836 -3.36146)",
          name: "São Bernardo/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.565419999999996 -23.69455)",
          name: "São Bernardo do Campo/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.929449999999996 -27.90155)",
          name: "São Bonifácio/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.00451 -28.66153)",
          name: "São Borja/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.90132 -10.1285)",
          name: "São Brás/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.949389999999994 -20.62555)",
          name: "São Brás do Suaçuí/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.00437 -8.962489999999999)",
          name: "São Braz do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.0204 -0.75044)",
          name: "São Caetano de Odivelas/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.55142 -23.62355)",
          name: "São Caetano do Sul/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.14331 -8.32649)",
          name: "São Caitano/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.00448 -27.07854)",
          name: "São Carlos/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.89143 -22.018539999999998)",
          name: "São Carlos/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.47646 -23.31553)",
          name: "São Carlos do Ivaí/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.206320000000005 -11.01551)",
          name: "São Cristóvão/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.44146 -27.26755)",
          name: "São Cristovão do Sul/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.97338 -12.36351)",
          name: "São Desidério/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.542339999999996 -11.50351)",
          name: "São Domingos/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.31839 -13.39851)",
          name: "São Domingos/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.532469999999996 -26.55854)",
          name: "São Domingos/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.56833 -10.79151)",
          name: "São Domingos/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.01137 -19.527549999999998)",
          name: "São Domingos das Dores/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.94233 -6.81448)",
          name: "São Domingos de Pombal",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.7334 -5.53847)",
          name: "São Domingos do Araguaia/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.64537 -6.81048)",
          name: "São Domingos do Azeitão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.77539 -1.6754399999999998)",
          name: "São Domingos do Capim/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.43331 -7.636489999999999)",
          name: "São Domingos do Cariri/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.38537 -5.57647)",
          name: "São Domingos do Maranhão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.62436 -19.14455)",
          name: "São Domingos do Norte/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.96838 -19.865550000000002)",
          name: "São Domingos do Prata/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.88848 -28.53155)",
          name: "São Domingos do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.08934 -12.847520000000001)",
          name: "São Felipe/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-61.50248 -11.90348)",
          name: "São Felipe d'Oeste/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.97234 -12.60552)",
          name: "São Félix/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.813379999999995 -7.08348)",
          name: "São Félix de Balsas/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.48637 -18.59154)",
          name: "São Félix de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.669419999999995 -11.6175)",
          name: "São Félix do Araguaia/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.19538 -13.40251)",
          name: "São Félix do Coribe/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.114360000000005 -5.93347)",
          name: "São Félix do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.65939 -10.16849)",
          name: "São Félix do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.99542 -6.6454699999999995)",
          name: "São Félix do Xingu/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.18432 -6.37648)",
          name: "São Fernando/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.74738 -21.64656)",
          name: "São Fidélis/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.86439 -15.949530000000001)",
          name: "São Francisco/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.09433 -6.61948)",
          name: "São Francisco/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.88832 -10.33351)",
          name: "São Francisco/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.69743999999999 -20.359530000000003)",
          name: "São Francisco/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.1315 -29.550530000000002)",
          name: "São Francisco de Assis/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.68635 -8.238489999999999)",
          name: "São Francisco de Assis do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.26142 -15.931519999999999)",
          name: "São Francisco de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.11937 -21.47056)",
          name: "São Francisco de Itabapoana/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.9854 -20.710539999999998)",
          name: "São Francisco de Paula/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.58447 -29.44855)",
          name: "São Francisco de Paula/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.77443 -19.86353)",
          name: "São Francisco de Sales/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.38639 -5.123469999999999)",
          name: "São Francisco do Brejão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.68034 -12.62852)",
          name: "São Francisco do Conde/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.26838 -20.789550000000002)",
          name: "São Francisco do Glória/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-63.56949 -12.06248)",
          name: "São Francisco do Guaporé/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.85736 -6.25148)",
          name: "São Francisco do Maranhão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.15233 -5.97548)",
          name: "São Francisco do Oeste/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.79539 -1.16944)",
          name: "São Francisco do Pará/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.54336 -7.25148)",
          name: "São Francisco do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.63845 -26.243550000000003)",
          name: "São Francisco do Sul/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.3205 -30.33654)",
          name: "São Gabriel/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.91236 -11.22951)",
          name: "São Gabriel/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-67.0895 -0.13043)",
          name: "São Gabriel da Cachoeira/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.536359999999995 -19.01755)",
          name: "São Gabriel da Palha/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.56646 -19.39552)",
          name: "São Gabriel do Oeste/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.83438 -20.923550000000002)",
          name: "São Geraldo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.28838 -18.83654)",
          name: "São Geraldo da Piedade/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.5554 -6.401470000000001)",
          name: "São Geraldo do Araguaia/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.36037 -18.90054)",
          name: "São Geraldo do Baixio/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.05439 -22.82756)",
          name: "São Gonçalo/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.833400000000005 -18.33853)",
          name: "São Gonçalo do Abaeté/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.96933 -3.60646)",
          name: "São Gonçalo do Amarante/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.3293 -5.79348)",
          name: "São Gonçalo do Amarante/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.30338 -10.0305)",
          name: "São Gonçalo do Gurguéia/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.8594 -19.98354)",
          name: "São Gonçalo do Pará/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.70336 -5.99347)",
          name: "São Gonçalo do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.362390000000005 -19.82654)",
          name: "São Gonçalo do Rio Abaixo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.39138 -18.00454)",
          name: "São Gonçalo do Rio Preto/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.59541 -21.89255)",
          name: "São Gonçalo do Sapucaí/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.96734 -12.43352)",
          name: "São Gonçalo dos Campos/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.0494 -19.31154)",
          name: "São Gotardo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.74145 -23.72854)",
          name: "São Jerônimo da Serra/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.72547 -25.82854)",
          name: "São João/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.36731 -8.8765)",
          name: "São João/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.80737 -2.9554500000000004)",
          name: "São João Batista/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.849450000000004 -27.27655)",
          name: "São João Batista/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.50641 -20.64154)",
          name: "São João Batista do Glória/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-59.91147 0.9505699999999999)",
          name: "São João da Baliza/RR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.05137 -21.64056)",
          name: "São João da Barra/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.79842 -21.96954)",
          name: "São João da Boa Vista/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.34335 -6.81748)",
          name: "São João da Canabrava/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.25835 -3.9564600000000003)",
          name: "São João da Fronteira/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.35239 -16.853530000000003)",
          name: "São João da Lagoa/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.92941 -21.93055)",
          name: "São João da Mata/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.41043 -16.81552)",
          name: "São João da Paraúna/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.92039 -0.85044)",
          name: "São João da Ponta/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.00838 -15.92953)",
          name: "São João da Ponte/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.89935 -5.51447)",
          name: "São João da Serra/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.82847 -27.82054)",
          name: "São João da Urtiga/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.89036 -6.942480000000001)",
          name: "São João da Varjota/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.52541 -14.70651)",
          name: "São João d'Aliança/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.37844 -20.38953)",
          name: "São João das Duas Pontes/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.09138 -14.88452)",
          name: "São João das Missões/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.35244 -20.51353)",
          name: "São João de Iracema/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.37239 -22.804560000000002)",
          name: "São João de Meriti/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.174389999999995 -0.76944)",
          name: "São João de Pirabas/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.2624 -21.13655)",
          name: "São João del Rei/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.791399999999996 -5.35847)",
          name: "São João do Araguaia/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.44636 -3.81946)",
          name: "São João do Arraial/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.33746 -22.85253)",
          name: "São João do Caiuá/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.53331 -7.39149)",
          name: "São João do Cariri/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.25638 -3.5544599999999997)",
          name: "São João do Carú/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.76845 -26.61855)",
          name: "São João do Itaperiú/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.81846 -23.980539999999998)",
          name: "São João do Ivaí/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.27433 -5.27147)",
          name: "São João do Jaguaribe/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.151379999999996 -20.39455)",
          name: "São João do Manhuaçu/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.16037 -18.721539999999997)",
          name: "São João do Manteninha/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.594480000000004 -27.09854)",
          name: "São João do Oeste/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.15838 -19.33955)",
          name: "São João do Oriente/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.51639 -16.542530000000003)",
          name: "São João do Pacuí/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.01437 -15.314530000000001)",
          name: "São João do Paraíso/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.058389999999996 -6.46147)",
          name: "São João do Paraíso/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.66645 -21.26853)",
          name: "São João do Pau d'Alho/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.24736 -8.35849)",
          name: "São João do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.44649 -29.61454)",
          name: "São João do Polêsine/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.449329999999996 -6.72948)",
          name: "São João do Rio do Peixe/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.20132 -6.7184800000000005)",
          name: "São João do Sabugi/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.81037 -5.11447)",
          name: "São João do Soter/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.810469999999995 -29.22355)",
          name: "São João do Sul/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.84832 -8.07949)",
          name: "São João do Tigre/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.29745 -25.68354)",
          name: "São João do Triunfo/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.70237 -6.49548)",
          name: "São João dos Patos/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.76338 -18.548540000000003)",
          name: "São João Evangelista/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.01139 -21.540550000000003)",
          name: "São João Nepomuceno/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.93246 -28.29455)",
          name: "São Joaquim/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.85542 -20.58154)",
          name: "São Joaquim da Barra/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.27439 -20.04954)",
          name: "São Joaquim de Bicas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.804309999999994 -8.43249)",
          name: "São Joaquim do Monte/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.703480000000006 -28.49955)",
          name: "São Jorge/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.293459999999996 -23.43353)",
          name: "São Jorge do Ivaí/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.92747 -23.74153)",
          name: "São Jorge do Patrocínio/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.91847 -25.70654)",
          name: "São Jorge d'Oeste/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.62845 -27.615550000000002)",
          name: "São José/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.311409999999995 -20.718539999999997)",
          name: "São José da Barra/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.64042 -20.593539999999997)",
          name: "São José da Bela Vista/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.65244 -23.916539999999998)",
          name: "São José da Boa Vista/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.1483 -8.8985)",
          name: "São José da Coroa Grande/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.16233 -6.94148)",
          name: "São José da Lagoa Tapada/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.05831 -9.0105)",
          name: "São José da Laje/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.95539 -19.701539999999998)",
          name: "São José da Lapa/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.14337 -18.32454)",
          name: "São José da Safira/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.38132 -9.5585)",
          name: "São José da Tapera/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.55739 -19.710539999999998)",
          name: "São José da Varginha/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.33935 -15.08453)",
          name: "São José da Vitória/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.12248 -27.78054)",
          name: "São José das Missões/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.064479999999996 -24.83853)",
          name: "São José das Palmeiras/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.30133 -7.24949)",
          name: "São José de Caiana/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.32632 -6.84748)",
          name: "São José de Espinharas/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.2383 -6.07548)",
          name: "São José de Mipibu/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.50233 -7.121479999999999)",
          name: "São José de Piranhas/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.09433 -7.73849)",
          name: "São José de Princesa/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.05437 -2.5624499999999997)",
          name: "São José de Ribamar/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.94338 -21.35855)",
          name: "São José de Ubá/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.52641 -22.32955)",
          name: "São José do Alegre/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.5784 -22.64555)",
          name: "São José do Barreiro/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.76033 -7.86149)",
          name: "São José do Belmonte/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.30932 -7.16349)",
          name: "São José do Bonfim/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.35232 -6.213480000000001)",
          name: "São José do Brejo do Cruz/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.654379999999996 -21.02555)",
          name: "São José do Calçado/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.714310000000005 -6.316479999999999)",
          name: "São José do Campestre/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.49448 -26.45554)",
          name: "São José do Cedro/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.58046 -27.663549999999997)",
          name: "São José do Cerrito/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.38937 -18.47954)",
          name: "São José do Divino/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.83335 -3.81146)",
          name: "São José do Divino/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.274319999999996 -7.47949)",
          name: "São José do Egito/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.705380000000005 -19.929550000000003)",
          name: "São José do Goiabal/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.296479999999995 -29.04454)",
          name: "São José do Herval/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.25148 -29.52855)",
          name: "São José do Hortêncio/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.12949 -27.72554)",
          name: "São José do Inhacorá/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.86734 -11.412510000000001)",
          name: "São José do Jacuípe/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.670379999999994 -18.27554)",
          name: "São José do Jacuri/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.74537 -20.00555)",
          name: "São José do Mantimento/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.0425 -32.01555)",
          name: "São José do Norte/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.59447 -27.76954)",
          name: "São José do Ouro/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.56436 -7.49448)",
          name: "São José do Peixe/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.47535 -6.87248)",
          name: "São José do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.25545 -16.46551)",
          name: "São José do Povo/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.72146 -13.44749)",
          name: "São José do Rio Claro/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.88942 -21.596539999999997)",
          name: "São José do Rio Pardo/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.37943 -20.82053)",
          name: "São José do Rio Preto/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.79932 -6.77648)",
          name: "São José do Sabugi/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.87832 -6.44948)",
          name: "São José do Seridó/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.48248 -29.53155)",
          name: "São José do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.924389999999995 -22.15155)",
          name: "São José do Vale do Rio Preto/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.74443 -10.804490000000001)",
          name: "São José do Xingu/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.066469999999995 -28.74855)",
          name: "São José dos Ausentes/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.58437 -5.05147)",
          name: "São José dos Basílios/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.88741 -23.179550000000003)",
          name: "São José dos Campos/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.808319999999995 -7.39149)",
          name: "São José dos Cordeiros/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.206450000000004 -25.53555)",
          name: "São José dos Pinhais/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-58.176469999999995 -15.621500000000001)",
          name: "São José dos Quatro Marcos/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.38431 -7.25149)",
          name: "São José dos Ramos/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.826350000000005 -7.08548)",
          name: "São Julião/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.14748 -29.76055)",
          name: "São Leopoldo/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.054399999999994 -22.11655)",
          name: "São Lourenço/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.018299999999996 -8.00249)",
          name: "São Lourenço da Mata/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.943419999999996 -23.853550000000002)",
          name: "São Lourenço da Serra/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.85148 -26.359540000000003)",
          name: "São Lourenço do Oeste/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.545359999999995 -9.16949)",
          name: "São Lourenço do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.97849 -31.365550000000002)",
          name: "São Lourenço do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.177459999999996 -28.32655)",
          name: "São Ludgero/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.37243 -16.52552)",
          name: "São Luís de Montes Belos/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.24333 -3.67046)",
          name: "São Luís do Curu/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.31041 -23.22255)",
          name: "São Luís do Paraitinga/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.32435 -6.82548)",
          name: "São Luis do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.56131 -9.3185)",
          name: "São Luís do Quitunde/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.67037 -4.380459999999999)",
          name: "São Luís Gonzaga do Maranhão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-60.15947 1.00457)",
          name: "São Luiz/RR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.329420000000006 -14.86351)",
          name: "São Luíz do Norte/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.9615 -28.40853)",
          name: "São Luiz Gonzaga/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.096320000000006 -6.92748)",
          name: "São Mamede/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.64446 -23.40353)",
          name: "São Manoel do Paraná/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.57143000000001 -22.73154)",
          name: "São Manuel/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.068470000000005 -28.971549999999997)",
          name: "São Marcos/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.96949 -27.707539999999998)",
          name: "São Martinho/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.97946 -28.16555)",
          name: "São Martinho/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.8555 -29.53854)",
          name: "São Martinho da Serra/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.85936 -18.716549999999998)",
          name: "São Mateus/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.47037 -4.0404599999999995)",
          name: "São Mateus do Maranhão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.38346 -25.87454)",
          name: "São Mateus do Sul/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.49733 -6.21248)",
          name: "São Miguel/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.99743 -23.87855)",
          name: "São Miguel Arcanjo/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.18635999999999 -5.86447)",
          name: "São Miguel da Baixa Grande/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.25148 -26.69054)",
          name: "São Miguel da Boa Vista/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.456340000000004 -13.04852)",
          name: "São Miguel das Matas/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.5545 -28.56354)",
          name: "São Miguel das Missões/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.210300000000004 -7.25049)",
          name: "São Miguel de Taipu/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.63931 -5.12547)",
          name: "São Miguel de Touros/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.38132 -10.38851)",
          name: "São Miguel do Aleixo/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.71938 -20.707549999999998)",
          name: "São Miguel do Anta/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.16342 -13.275500000000001)",
          name: "São Miguel do Araguaia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.37036 -7.58648)",
          name: "São Miguel do Fidalgo/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.48339 -1.62744)",
          name: "São Miguel do Guamá/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-62.68449 -11.681479999999999)",
          name: "São Miguel do Guaporé/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.23848 -25.34853)",
          name: "São Miguel do Iguaçu/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.51848 -26.72554)",
          name: "São Miguel do Oeste/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.66342 -17.05952)",
          name: "São Miguel do Passa Quatro/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.323350000000005 -5.50447)",
          name: "São Miguel do Tapuio/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.575390000000006 -5.55547)",
          name: "São Miguel do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.09431 -9.781500000000001)",
          name: "São Miguel dos Campos/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.373310000000004 -9.2665)",
          name: "São Miguel dos Milagres/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.2675 -28.18353)",
          name: "São Nicolau/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.81842 -15.35051)",
          name: "São Patrício/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.936499999999995 -28.02153)",
          name: "São Paulo das Missões/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-68.87351 -3.37845)",
          name: "São Paulo de Olivença/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.76331 -5.895479999999999)",
          name: "São Paulo do Potengi/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.63431 -5.898479999999999)",
          name: "São Pedro/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.914429999999996 -22.54954)",
          name: "São Pedro/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.4294 -5.08547)",
          name: "São Pedro da Água Branca/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.10338 -22.83956)",
          name: "São Pedro da Aldeia/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.921459999999996 -16.00151)",
          name: "São Pedro da Cipa/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.51348 -29.42155)",
          name: "São Pedro da Serra/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.615410000000004 -21.12754)",
          name: "São Pedro da União/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.25548 -27.771539999999998)",
          name: "São Pedro das Missões/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.80545 -27.56655)",
          name: "São Pedro de Alcântara/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.8875 -28.12453)",
          name: "São Pedro do Butiá/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.85548 -24.93653)",
          name: "São Pedro do Iguaçu/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.85646 -23.865540000000003)",
          name: "São Pedro do Ivaí/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.22046 -22.82453)",
          name: "São Pedro do Paraná/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.71936 -5.92947)",
          name: "São Pedro do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.60338 -18.36654)",
          name: "São Pedro do Suaçuí/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.1795 -29.62154)",
          name: "São Pedro do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.74044 -22.74754)",
          name: "São Pedro do Turvo/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.53239 -6.82648)",
          name: "São Pedro dos Crentes/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.52438 -20.170550000000002)",
          name: "São Pedro dos Ferros/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.921319999999994 -5.79948)",
          name: "São Rafael/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.48138 -7.02248)",
          name: "São Raimundo das Mangabeiras/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.077380000000005 -5.1054699999999995)",
          name: "São Raimundo do Doca Bezerra/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.69936 -9.01549)",
          name: "São Raimundo Nonato/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.99138 -5.02147)",
          name: "São Roberto/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.069390000000006 -16.36953)",
          name: "São Romão/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.135419999999996 -23.52955)",
          name: "São Roque/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.36641 -20.245540000000002)",
          name: "São Roque de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.65736 -19.73955)",
          name: "São Roque do Canaã/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.23641 -12.744499999999999)",
          name: "São Salvador do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.55432 -9.9345)",
          name: "São Sebastião/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.41041 -23.76055)",
          name: "São Sebastião/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.76145 -23.46554)",
          name: "São Sebastião da Amoreira/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.75441 -22.15955)",
          name: "São Sebastião da Bela Vista/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.54141 -1.7184400000000002)",
          name: "São Sebastião da Boa Vista/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.82142 -21.71154)",
          name: "São Sebastião da Grama/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.63638 -21.07255)",
          name: "São Sebastião da Vargem Alegre/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.83531 -7.083489999999999)",
          name: "São Sebastião de Lagoa de Roça/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.13538 -21.95756)",
          name: "São Sebastião do Alto/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.98437 -19.49855)",
          name: "São Sebastião do Anta/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.37648 -29.58755)",
          name: "São Sebastião do Caí/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.571380000000005 -18.08454)",
          name: "São Sebastião do Maranhão/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.0054 -20.27654)",
          name: "São Sebastião do Oeste/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.99142 -20.917540000000002)",
          name: "São Sebastião do Paraíso/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.49533 -12.51352)",
          name: "São Sebastião do Passé/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.17438 -19.292540000000002)",
          name: "São Sebastião do Rio Preto/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.976400000000005 -22.218549999999997)",
          name: "São Sebastião do Rio Verde/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.2004 -5.25747)",
          name: "São Sebastião do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-57.87145 -2.57245)",
          name: "São Sebastião do Uatumã/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.01032 -8.15249)",
          name: "São Sebastião do Umbuzeiro/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.5655 -30.16154)",
          name: "São Sepé/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.55142 -21.47954)",
          name: "São Simão/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.54444 -18.99153)",
          name: "São Simão/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.9854 -21.72255)",
          name: "São Thomé das Letras/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.5094 -20.913549999999997)",
          name: "São Tiago/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.098420000000004 -20.784540000000003)",
          name: "São Tomás de Aquino/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.07531 -5.97348)",
          name: "São Tomé/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.591460000000005 -23.53853)",
          name: "São Tomé/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.52448 -27.55854)",
          name: "São Valentim/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.76548 -29.04755)",
          name: "São Valentim do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.234410000000004 -11.9755)",
          name: "São Valério da Natividade/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.93749 -27.78754)",
          name: "São Valério do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.37748 -29.36955)",
          name: "São Vendelino/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.39242 -23.963549999999998)",
          name: "São Vicente/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.684309999999996 -6.21648)",
          name: "São Vicente/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.444399999999995 -21.713549999999998)",
          name: "São Vicente de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.6795 -29.69254)",
          name: "São Vicente do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.88037 -2.89445)",
          name: "São Vicente Ferrer/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.49131 -7.591489999999999)",
          name: "São Vicente Ferrer/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.2333 -7.09549)",
          name: "Sapé/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.182339999999996 -12.72852)",
          name: "Sapeaçu/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-58.76447 -12.98949)",
          name: "Sapezal/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.00748 -29.63855)",
          name: "Sapiranga/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.580450000000006 -23.91154)",
          name: "Sapopema/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.68241 -6.94747)",
          name: "Sapucaia/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.91439 -21.99555)",
          name: "Sapucaia/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.14448 -29.83955)",
          name: "Sapucaia do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.743410000000004 -22.74855)",
          name: "Sapucaí-Mirim/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.51039 -22.920560000000002)",
          name: "Saquarema/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.92348 -27.94454)",
          name: "Sarandi/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.87446 -23.44453)",
          name: "Sarandi/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.825430000000004 -23.64155)",
          name: "Sarapuí/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.36538 -18.784540000000003)",
          name: "Sardoá/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.48044 -23.27354)",
          name: "Sarutaiá/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.14539 -20.03554)",
          name: "Sarzedo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.60033 -11.60051)",
          name: "Sátiro Dias/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.824310000000004 -9.563500000000001)",
          name: "Satuba/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.23838 -4.03946)",
          name: "Satubinha/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.76934 -12.73852)",
          name: "Saubara/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.61947 -25.69454)",
          name: "Saudade do Iguaçu/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.00348 -26.92454)",
          name: "Saudades/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.41835 -10.941510000000001)",
          name: "Saúde/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.07345 -26.413549999999997)",
          name: "Schroeder/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.77036 -12.419509999999999)",
          name: "Seabra/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.31147 -27.14954)",
          name: "Seara/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.92144 -20.65553)",
          name: "Sebastianópolis do Sul/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.83438 -10.817499999999999)",
          name: "Sebastião Barros/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.940369999999994 -14.57352)",
          name: "Sebastião Laranjeiras/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.06437 -7.566479999999999)",
          name: "Sebastião Leal/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.40348 -27.47854)",
          name: "Seberi/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.94649 -27.63554)",
          name: "Sede Nova/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.01249 -29.26954)",
          name: "Segredo/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.95349 -28.629540000000002)",
          name: "Selbach/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.419439999999994 -20.367530000000002)",
          name: "Selvíria/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.839380000000006 -20.109550000000002)",
          name: "Sem-Peixe/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-68.65751 -9.066460000000001)",
          name: "Sena Madureira/AC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.056369999999994 -5.25647)",
          name: "Senador Alexandre Costa/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.177409999999995 -22.58755)",
          name: "Senador Amaral/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.09342 -16.70852)",
          name: "Senador Canedo/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.946389999999994 -21.801550000000002)",
          name: "Senador Cortes/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.69331 -6.03648)",
          name: "Senador Elói de Souza/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.097390000000004 -20.91255)",
          name: "Senador Firmino/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.1233 -6.163480000000001)",
          name: "Senador Georgino Avelino/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-67.73651 -10.15147)",
          name: "Senador Guiomard/AC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.17941 -22.16455)",
          name: "Senador José Bento/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.954420000000006 -2.59145)",
          name: "Senador José Porfírio/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.29139 -5.4434700000000005)",
          name: "Senador La Rocque/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.22538 -17.94754)",
          name: "Senador Modestino Gonçalves/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.37234 -5.58847)",
          name: "Senador Pompeu/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.50732 -9.3545)",
          name: "Senador Rui Palmeira/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.46334 -3.35146)",
          name: "Senador Sá/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.54349 -28.03153)",
          name: "Senador Salgado Filho/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.46444 -24.11354)",
          name: "Sengés/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.19135 -10.4635)",
          name: "Senhor do Bonfim/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.344390000000004 -20.79455)",
          name: "Senhora de Oliveira/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.08438 -18.89254)",
          name: "Senhora do Porto/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.58339 -21.02855)",
          name: "Senhora dos Remédios/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.57949 -30.61155)",
          name: "Sentinela do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.88536 -9.7465)",
          name: "Sento Sé/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.93548 -28.71255)",
          name: "Serafina Corrêa/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.48238 -20.474549999999997)",
          name: "Sericita/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.40231 -6.934480000000001)",
          name: "Seridó/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-63.03149 -11.79848)",
          name: "Seringueiras/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.26948 -29.38354)",
          name: "Sério/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.5194 -21.90955)",
          name: "Seritinga/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.708400000000005 -22.74455)",
          name: "Seropédica/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.30836 -20.129550000000002)",
          name: "Serra/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.04248 -26.72954)",
          name: "Serra Alta/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.566419999999994 -21.31154)",
          name: "Serra Azul/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.170379999999994 -18.362540000000003)",
          name: "Serra Azul de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.66532 -7.48349)",
          name: "Serra Branca/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.444309999999994 -6.68748)",
          name: "Serra da Raiz/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.7964 -19.43854)",
          name: "Serra da Saudade/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.70431 -6.41748)",
          name: "Serra de São Bento/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.02932 -5.17047)",
          name: "Serra do Mel/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.00242 0.89557)",
          name: "Serra do Navio/AP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.598380000000006 -13.572519999999999)",
          name: "Serra do Ramalho/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.69041 -19.111530000000002)",
          name: "Serra do Salitre/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.24836 -17.783540000000002)",
          name: "Serra dos Aimorés/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.95038 -12.76151)",
          name: "Serra Dourada/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.37033 -7.21548)",
          name: "Serra Grande/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.701420000000006 -22.612550000000002)",
          name: "Serra Negra/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.39732 -6.66648)",
          name: "Serra Negra do Norte/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.402429999999995 -12.092500000000001)",
          name: "Serra Nova Dourada/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.33234 -12.16051)",
          name: "Serra Preta/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.675309999999996 -7.17849)",
          name: "Serra Redonda/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.29633 -7.98649)",
          name: "Serra Talhada/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.59642 -21.21154)",
          name: "Serrana/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.04041 -21.548540000000003)",
          name: "Serrania/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.12338 -1.8564500000000002)",
          name: "Serrano do Maranhão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.96244 -18.30652)",
          name: "Serranópolis/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.87137 -15.82953)",
          name: "Serranópolis de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.052479999999996 -25.38053)",
          name: "Serranópolis do Iguaçu/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.5104 -21.89055)",
          name: "Serranos/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.63331 -6.82048)",
          name: "Serraria/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.00834 -11.66451)",
          name: "Serrinha/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.49931 -6.27648)",
          name: "Serrinha/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.956320000000005 -6.11048)",
          name: "Serrinha dos Pintos/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.29634 -7.93349)",
          name: "Serrita/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.37938 -18.60554)",
          name: "Serro/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.30235 -11.41651)",
          name: "Serrolândia/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.83845 -23.03754)",
          name: "Sertaneja/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.26432 -8.074489999999999)",
          name: "Sertânia/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.036449999999995 -23.059540000000002)",
          name: "Sertanópolis/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.26048 -27.980539999999998)",
          name: "Sertão/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.603480000000005 -30.460549999999998)",
          name: "Sertão Santana/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.99042 -21.13854)",
          name: "Sertãozinho/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.44231 -6.75148)",
          name: "Sertãozinho/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.926429999999996 -24.38855)",
          name: "Sete Barras/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.46349 -28.13154)",
          name: "Sete de Setembro/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.24739 -19.46654)",
          name: "Sete Lagoas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.03648 -23.97053)",
          name: "Sete Quedas/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.159369999999996 -17.600540000000002)",
          name: "Setubinha/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.11647 -27.43354)",
          name: "Severiano de Almeida/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.95832 -5.77748)",
          name: "Severiano Melo/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.80343 -20.809540000000002)",
          name: "Severínia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.424459999999996 -28.59855)",
          name: "Siderópolis/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.961470000000006 -20.93252)",
          name: "Sidrolândia/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.732350000000004 -4.91847)",
          name: "Sigefredo Pacheco/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.39239 -22.65156)",
          name: "Silva Jardim/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.60842 -16.659519999999997)",
          name: "Silvânia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.169399999999996 -11.147499999999999)",
          name: "Silvanópolis/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.586490000000005 -29.64254)",
          name: "Silveira Martins/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.21539 -21.15955)",
          name: "Silveirânia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.8534 -22.66455)",
          name: "Silveiras/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-58.20946 -2.8394500000000003)",
          name: "Silves/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.83541 -22.02955)",
          name: "Silvianópolis/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.81133 -10.73851)",
          name: "Simão Dias/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.31239 -21.96455)",
          name: "Simão Pereira/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.81835 -7.599489999999999)",
          name: "Simões/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.40433 -12.78452)",
          name: "Simões Filho/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.4834 -14.47452)",
          name: "Simolândia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.00138 -20.12455)",
          name: "Simonésia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.91036 -7.854489999999999)",
          name: "Simplício Mendes/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.52249 -29.539540000000002)",
          name: "Sinimbu/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.50445 -11.86449)",
          name: "Sinop/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.83444 -23.68954)",
          name: "Siqueira Campos/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.1163 -8.5915)",
          name: "Sirinhaém/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.11332 -10.60451)",
          name: "Siriri/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.2534 -14.805520000000001)",
          name: "Sítio d'Abadia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.46537 -13.085510000000001)",
          name: "Sítio do Mato/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.217330000000004 -10.3505)",
          name: "Sítio do Quinto/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.91131 -6.10448)",
          name: "Sítio Novo/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.699389999999994 -5.87847)",
          name: "Sítio Novo/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.63839 -5.60147)",
          name: "Sítio Novo do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.029489999999996 -29.42154)",
          name: "Sobradinho/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.823350000000005 -9.455499999999999)",
          name: "Sobradinho/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.2393 -7.14449)",
          name: "Sobrado/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.23934 -3.67446)",
          name: "Sobral/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.09837 -19.23554)",
          name: "Sobrália/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.52942 -22.591549999999998)",
          name: "Socorro/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.49136 -7.86649)",
          name: "Socorro do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.697309999999995 -6.77848)",
          name: "Solânea/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.51048 -28.81854)",
          name: "Soledade/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.36331 -7.05749)",
          name: "Soledade/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.0454 -22.06055)",
          name: "Soledade de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.652319999999996 -7.60049)",
          name: "Solidão/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.00833 -5.73347)",
          name: "Solonópole/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.62946 -29.10455)",
          name: "Sombrio/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.75846 -17.57751)",
          name: "Sonora/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.09836 -19.19755)",
          name: "Sooretama/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.45843 -23.50255)",
          name: "Sorocaba/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.711450000000006 -12.54549)",
          name: "Sorriso/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.25431 -6.76948)",
          name: "Sossêgo/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.5234 -0.71744)",
          name: "Soure/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.23133 -6.76148)",
          name: "Sousa/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.63836 -12.08951)",
          name: "Souto Soares/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.97141 -11.9935)",
          name: "Sucupira/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.19237 -6.47748)",
          name: "Sucupira do Norte/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.546369999999996 -6.41148)",
          name: "Sucupira do Riachão/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.92444 -20.69153)",
          name: "Sud Mennucci/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.96548 -26.73654)",
          name: "Sul Brasil/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.72247 -25.70254)",
          name: "Sulina/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.26742 -22.82255)",
          name: "Sumaré/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.88032 -7.672490000000001)",
          name: "Sumé/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.67539 -22.05055)",
          name: "Sumidouro/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.75631 -7.83249)",
          name: "Surubim/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.38435 -7.04348)",
          name: "Sussuapara/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.025439999999996 -20.50153)",
          name: "Suzanápolis/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.31142 -23.543550000000003)",
          name: "Suzano/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.68248 -29.64355)",
          name: "Tabaí/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.62046 -10.80748)",
          name: "Tabaporã/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.03243 -20.96454)",
          name: "Tabapuã/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.68843 -21.71754)",
          name: "Tabatinga/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-69.93851000000001 -4.25345)",
          name: "Tabatinga/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.53932 -7.591489999999999)",
          name: "Tabira/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.75342 -23.60255)",
          name: "Taboão da Serra/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.00738 -12.70651)",
          name: "Tabocas do Brejo Velho/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.04533 -5.93048)",
          name: "Taboleiro Grande/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.24839 -21.359550000000002)",
          name: "Tabuleiro/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.13133 -5.24747)",
          name: "Tabuleiro do Norte/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.29331 -8.31649)",
          name: "Tacaimbó/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.15033 -9.1065)",
          name: "Tacaratu/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.28545 -22.39053)",
          name: "Taciba/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.01648 -23.63353)",
          name: "Tacuru/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.40944 -23.45254)",
          name: "Taguaí/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.436389999999996 -12.40451)",
          name: "Taguatinga/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.51343 -21.14454)",
          name: "Taiaçu/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.9534 -2.9474500000000003)",
          name: "Tailândia/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.99846 -27.11655)",
          name: "Taió/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.23337 -15.808530000000001)",
          name: "Taiobeiras/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.9894 -12.1885)",
          name: "Taipas do Tocantins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.59731 -5.62248)",
          name: "Taipu/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.45243 -21.12454)",
          name: "Taiúva/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.093410000000006 -12.7955)",
          name: "Talismã/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.1053 -8.7605)",
          name: "Tamandaré/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.09745 -23.72354)",
          name: "Tamarana/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.27442 -21.70554)",
          name: "Tambaú/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.469460000000005 -23.20053)",
          name: "Tamboara/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.321340000000006 -4.83247)",
          name: "Tamboril/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.91436 -8.40049)",
          name: "Tamboril do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.64943 -20.62653)",
          name: "Tanabi/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.80231 -6.19948)",
          name: "Tangará/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.24747 -27.10554)",
          name: "Tangará/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-57.486470000000004 -14.6195)",
          name: "Tangará da Serra/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.71439 -22.730559999999997)",
          name: "Tanguá/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.24836 -14.02152)",
          name: "Tanhaçu/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.433319999999995 -9.5325)",
          name: "Tanque d'Arca/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.28236 -6.600479999999999)",
          name: "Tanque do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.49137 -13.54652)",
          name: "Tanque Novo/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.10434 -11.97951)",
          name: "Tanquinho/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.61637 -19.75955)",
          name: "Taparuba/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-63.183479999999996 -5.6284600000000005)",
          name: "Tapauá/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.01448 -28.06854)",
          name: "Tapejara/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.87347 -23.733530000000002)",
          name: "Tapejara/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.87048 -28.626540000000002)",
          name: "Tapera/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.099340000000005 -13.53852)",
          name: "Taperoá/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.82732 -7.20749)",
          name: "Taperoá/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.39648 -30.673550000000002)",
          name: "Tapes/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.82341 -19.92254)",
          name: "Tapira/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.06846 -23.323529999999998)",
          name: "Tapira/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.50743 -23.96455)",
          name: "Tapiraí/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.02041 -19.88854)",
          name: "Tapiraí/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.79135 -11.84751)",
          name: "Tapiramutá/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.74942 -21.468539999999997)",
          name: "Tapiratiba/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.55446 -12.772490000000001)",
          name: "Tapurah/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.78148 -29.65155)",
          name: "Taquara/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.68738999999999 -19.670540000000003)",
          name: "Taquaraçu de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.41043 -21.07254)",
          name: "Taquaral/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.60642 -16.05452)",
          name: "Taquaral de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.49732 -9.6455)",
          name: "Taquarana/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.86448 -29.80055)",
          name: "Taquari/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.50543 -21.40654)",
          name: "Taquaritinga/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.044309999999996 -7.903490000000001)",
          name: "Taquaritinga do Norte/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.244440000000004 -23.533540000000002)",
          name: "Taquarituba/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.693439999999995 -23.92455)",
          name: "Taquarivaí/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.46748 -27.40054)",
          name: "Taquaruçu do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.35146 -22.48853)",
          name: "Taquarussu/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.55945 -22.303530000000002)",
          name: "Tarabai/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-70.76652 -8.16146)",
          name: "Tarauacá/AC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.76134 -6.684480000000001)",
          name: "Tarrafas/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.91241 1.50558)",
          name: "Tartarugalzinho/AP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.577450000000006 -22.74754)",
          name: "Tarumã/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.00737 -19.28155)",
          name: "Tarumirim/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.74338 -8.47549)",
          name: "Tasso Fragoso/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.85743 -23.356550000000002)",
          name: "Tatuí/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.29334 -6.00348)",
          name: "Tauá/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.555409999999995 -23.02655)",
          name: "Taubaté/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.09449 -31.287550000000003)",
          name: "Tavares/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.87833 -7.636489999999999)",
          name: "Tavares/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-64.71149 -3.35445)",
          name: "Tefé/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.25432 -7.22349)",
          name: "Teixeira/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.74235 -17.53554)",
          name: "Teixeira de Freitas/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.461450000000006 -25.36854)",
          name: "Teixeira Soares/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.85738 -20.65155)",
          name: "Teixeiras/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-62.24949 -10.918479999999999)",
          name: "Teixeirópolis/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.581340000000004 -3.9894600000000002)",
          name: "Tejuçuoca/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.37644 -23.343539999999997)",
          name: "Tejupá/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.61645 -24.32454)",
          name: "Telêmaco Borba/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.88432 -10.208509999999999)",
          name: "Telha/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.18033 -6.46548)",
          name: "Tenente Ananias/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.71932 -6.14848)",
          name: "Tenente Laurentino Cruz/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.75849 -27.37154)",
          name: "Tenente Portela/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.629310000000004 -6.942480000000001)",
          name: "Tenório/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.64334 -12.30352)",
          name: "Teodoro Sampaio/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.168459999999996 -22.533530000000003)",
          name: "Teodoro Sampaio/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.99834 -11.48951)",
          name: "Teofilândia/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.50537 -17.85854)",
          name: "Teófilo Otoni/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.49134 -13.60252)",
          name: "Teolândia/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.353320000000004 -9.9055)",
          name: "Teotônio Vilela/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.86047 -20.442520000000002)",
          name: "Terenos/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.2654 -13.77651)",
          name: "Teresina de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.966390000000004 -22.41256)",
          name: "Teresópolis/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.62332 -9.056500000000002)",
          name: "Terezinha/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.080420000000004 -16.39552)",
          name: "Terezópolis de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.90839 -1.03844)",
          name: "Terra Alta/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.44446 -23.76853)",
          name: "Terra Boa/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.071470000000005 -29.585549999999998)",
          name: "Terra de Areia/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.62534 -12.39252)",
          name: "Terra Nova/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.37634 -8.23049)",
          name: "Terra Nova/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.23145 -10.51748)",
          name: "Terra Nova do Norte/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.61746 -22.70953)",
          name: "Terra Rica/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.330420000000004 -20.789540000000002)",
          name: "Terra Roxa/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.09747 -24.157529999999998)",
          name: "Terra Roxa/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.48745 -2.10445)",
          name: "Terra Santa/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.55345 -16.07951)",
          name: "Tesouro/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.80648 -29.44855)",
          name: "Teutônia/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-62.35548 -10.24447)",
          name: "Theobroma/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.99235 -3.73246)",
          name: "Tianguá/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.414449999999995 -24.50954)",
          name: "Tibagi/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.25332 -4.83747)",
          name: "Tibau/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.0923 -6.18748)",
          name: "Tibau do Sul/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.715430000000005 -23.10255)",
          name: "Tietê/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.15848 -26.68854)",
          name: "Tigrinhos/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.63445 -27.24155)",
          name: "Tijucas/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.19945 -25.92855)",
          name: "Tijucas do Sul/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.3183 -7.50549)",
          name: "Timbaúba/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.274319999999996 -6.46548)",
          name: "Timbaúba dos Batistas/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.847460000000005 -28.83055)",
          name: "Timbé do Sul/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.94137 -4.25546)",
          name: "Timbiras/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.27245 -26.82355)",
          name: "Timbó/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.674459999999996 -26.615550000000002)",
          name: "Timbó Grande/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.607440000000004 -23.20554)",
          name: "Timburi/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.837360000000004 -5.094469999999999)",
          name: "Timon/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.64438 -19.58355)",
          name: "Timóteo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.59948 -28.57954)",
          name: "Tio Hugo/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.178399999999996 -21.11055)",
          name: "Tiradentes/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.08449 -27.39854)",
          name: "Tiradentes do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.964400000000005 -19.00454)",
          name: "Tiros/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.99833 -11.18451)",
          name: "Tobias Barreto/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.3774 -9.564490000000001)",
          name: "Tocantínia/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.41639 -6.32947)",
          name: "Tocantinópolis/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.01839 -21.17555)",
          name: "Tocantins/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.096410000000006 -22.37155)",
          name: "Tocos do Moji/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.37242 -22.743550000000003)",
          name: "Toledo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.74347 -24.71453)",
          name: "Toledo/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.84133 -11.373510000000001)",
          name: "Tomar do Geru/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.950450000000004 -23.77854)",
          name: "Tomazina/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.023379999999996 -20.905549999999998)",
          name: "Tombos/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.1524 -2.41945)",
          name: "Tomé-Açu/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-67.8025 -2.87344)",
          name: "Tonantins/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.051309999999994 -7.99949)",
          name: "Toritama/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.556439999999995 -16.19951)",
          name: "Torixoréu/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.228500000000004 -29.47854)",
          name: "Toropi/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.195429999999995 -23.24454)",
          name: "Torre de Pedra/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.727470000000004 -29.335549999999998)",
          name: "Torres/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.16943 -22.426540000000003)",
          name: "Torrinha/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.4613 -5.19947)",
          name: "Touros/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.33643 -22.042540000000002)",
          name: "Trabiju/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.89739 -1.07244)",
          name: "Tracuateua/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.2403 -7.80549)",
          name: "Tracunhaém/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.00332 -9.9715)",
          name: "Traipu/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.944449999999996 -4.57446)",
          name: "Trairão/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.26933 -3.27846)",
          name: "Trairi/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.066379999999995 -22.06356)",
          name: "Trajano de Morais/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.13447 -29.98555)",
          name: "Tramandaí/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.055479999999996 -29.29455)",
          name: "Travesseiro/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.41136 -14.97653)",
          name: "Tremedal/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.549409999999995 -22.95855)",
          name: "Tremembé/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.14748 -27.49954)",
          name: "Três Arroios/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.32246000000001 -26.106550000000002)",
          name: "Três Barras/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.18147 -25.41954)",
          name: "Três Barras do Paraná/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.92447 -29.45655)",
          name: "Três Cachoeiras/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.25341 -21.69755)",
          name: "Três Corações/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.77847 -29.51755)",
          name: "Três Coroas/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.24049 -27.77354)",
          name: "Três de Maio/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.06447 -29.537550000000003)",
          name: "Três Forquilhas/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.89044 -20.23553)",
          name: "Três Fronteiras/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.67845 -20.75153)",
          name: "Três Lagoas/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.2424 -18.20653)",
          name: "Três Marias/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.841480000000004 -27.615540000000003)",
          name: "Três Palmeiras/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.932489999999994 -27.45654)",
          name: "Três Passos/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.51341 -21.36755)",
          name: "Três Pontas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.783409999999996 -18.35453)",
          name: "Três Ranchos/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.209390000000006 -22.11755)",
          name: "Três Rios/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.45846 -28.51655)",
          name: "Treviso/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.14846 -28.55955)",
          name: "Treze de Maio/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.40647 -27.00254)",
          name: "Treze Tílias/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.48942 -16.64952)",
          name: "Trindade/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.26834 -7.76249)",
          name: "Trindade/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.89448 -27.52254)",
          name: "Trindade do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.71848 -29.943550000000002)",
          name: "Triunfo/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.59733 -6.579479999999999)",
          name: "Triunfo/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.10233 -7.838489999999999)",
          name: "Triunfo/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.189319999999995 -5.8674800000000005)",
          name: "Triunfo Potiguar/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.628370000000004 -4.53846)",
          name: "Trizidela do Vale/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.740410000000004 -13.50951)",
          name: "Trombas/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.790459999999996 -27.29955)",
          name: "Trombudo Central/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.00746 -28.46755)",
          name: "Tubarão/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.78734 -10.96351)",
          name: "Tucano/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.16142 -6.74847)",
          name: "Tucumã/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.44049 -27.657529999999998)",
          name: "Tucunduva/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.67341 -3.76846)",
          name: "Tucuruí/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.554379999999995 -3.72946)",
          name: "Tufilândia/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.694419999999994 -22.81655)",
          name: "Tuiuti/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.64537 -18.97954)",
          name: "Tumiritinga/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.63948 -26.96954)",
          name: "Tunápolis/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.95649 -29.103540000000002)",
          name: "Tunas/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.08644 -24.974549999999997)",
          name: "Tunas do Paraná/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.87647 -23.87153)",
          name: "Tuneiras do Oeste/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.64937 -5.25847)",
          name: "Tuntum/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.51444 -21.93553)",
          name: "Tupã/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.705420000000004 -18.593529999999998)",
          name: "Tupaciguara/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.340320000000006 -8.7535)",
          name: "Tupanatinga/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.53647 -27.92555)",
          name: "Tupanci do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.836490000000005 -29.08154)",
          name: "Tupanciretã/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.421479999999995 -29.47655)",
          name: "Tupandi/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.48249 -27.75653)",
          name: "Tuparendi/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.311319999999995 -7.6024899999999995)",
          name: "Tuparetama/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.51247 -24.58853)",
          name: "Tupãssi/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.571450000000006 -21.38153)",
          name: "Tupi Paulista/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.188399999999994 -8.97349)",
          name: "Tupirama/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.1164 -8.39448)",
          name: "Tupiratins/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.37238 -1.6634499999999999)",
          name: "Turiaçu/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.34338 -2.2014500000000004)",
          name: "Turilândia/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.10844 -20.93353)",
          name: "Turiúba/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.476440000000004 -20.05253)",
          name: "Turmalina/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.730380000000004 -17.286540000000002)",
          name: "Turmalina/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.17849 -31.42255)",
          name: "Turuçu/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.437329999999996 -3.58146)",
          name: "Tururu/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.13443 -16.614520000000002)",
          name: "Turvânia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.302429999999994 -17.853520000000003)",
          name: "Turvelândia/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.53046 -25.04354)",
          name: "Turvo/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.67946 -28.926550000000002)",
          name: "Turvo/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.78741 -21.87655)",
          name: "Turvolândia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.27436 -2.76245)",
          name: "Tutóia/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-65.10848999999999 -2.99045)",
          name: "Uarini/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.48234 -9.842500000000001)",
          name: "Uauá/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.943389999999994 -21.12055)",
          name: "Ubá/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.77839 -16.28553)",
          name: "Ubaí/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.66335 -13.26852)",
          name: "Ubaíra/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.32334 -14.31353)",
          name: "Ubaitaba/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.92135 -3.85446)",
          name: "Ubajara/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.10638 -19.63555)",
          name: "Ubaporanga/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.71844 -21.166529999999998)",
          name: "Ubarana/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.52335 -14.21453)",
          name: "Ubatã/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.07141 -23.43455)",
          name: "Ubatuba/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.93242 -19.748530000000002)",
          name: "Uberaba/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.27742 -18.91953)",
          name: "Uberlândia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.66344 -22.52754)",
          name: "Ubirajara/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.98847 -24.545530000000003)",
          name: "Ubiratã/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.68149 -28.04653)",
          name: "Ubiretama/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.17543 -20.95353)",
          name: "Uchoa/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.133359999999996 -11.33751)",
          name: "Uibaí/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-60.16847 4.59559)",
          name: "Uiramutã/RR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.922419999999995 -14.28551)",
          name: "Uirapuru/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.41233 -6.51848)",
          name: "Uiraúna/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.50139 -3.75646)",
          name: "Ulianópolis/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.70033 -6.648479999999999)",
          name: "Umari/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.814319999999995 -5.99148)",
          name: "Umarizal/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.65833 -11.38351)",
          name: "Umbaúba/SE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.326350000000005 -10.7335)",
          name: "Umburanas/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.57336 -17.25654)",
          name: "Umburatiba/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.66431 -7.69649)",
          name: "Umbuzeiro/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.35033 -3.67746)",
          name: "Umirim/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.32547 -23.76653)",
          name: "Umuarama/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.075340000000004 -15.29353)",
          name: "Una/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.9064 -16.358520000000002)",
          name: "Unaí/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.864360000000005 -4.586469999999999)",
          name: "União/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.037479999999995 -28.795540000000003)",
          name: "União da Serra/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.08646 -26.230539999999998)",
          name: "União da Vitória/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.33644 -19.53053)",
          name: "União de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.85548 -26.76154)",
          name: "União do Oeste/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.35344 -11.53349)",
          name: "União do Sul/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.03231 -9.1635)",
          name: "União dos Palmares/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.897439999999996 -20.887529999999998)",
          name: "União Paulista/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.15746 -23.087529999999997)",
          name: "Uniflor/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.1505 -29.047530000000002)",
          name: "Unistalda/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.25832 -5.64248)",
          name: "Upanema/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.79645 -23.19854)",
          name: "Uraí/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.65537 -14.77152)",
          name: "Urandi/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.64344 -20.24653)",
          name: "Urânia/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.40436 -3.20846)",
          name: "Urbano Santos/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.28143 -21.784540000000003)",
          name: "Uru/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.14142 -14.52551)",
          name: "Uruaçu/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.688419999999994 -15.49851)",
          name: "Uruana/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.2544 -16.06452)",
          name: "Uruana de Minas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.73743 -3.7184500000000003)",
          name: "Uruará/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.59246 -28.01555)",
          name: "Urubici/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.50834 -3.62546)",
          name: "Uruburetama/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.739380000000004 -20.351550000000003)",
          name: "Urucânia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-57.76045 -2.53645)",
          name: "Urucará/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.28434 -14.593530000000001)",
          name: "Uruçuca/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.556369999999994 -7.22948)",
          name: "Uruçuí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.7424 -16.13352)",
          name: "Urucuia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-58.15546 -3.13145)",
          name: "Urucurituba/AM",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-57.08852 -29.75553)",
          name: "Uruguaiana/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.557339999999996 -3.31446)",
          name: "Uruoca/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-62.376490000000004 -11.12548)",
          name: "Urupá/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.87346 -27.95355)",
          name: "Urupema/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.29043 -21.20254)",
          name: "Urupês/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.32146 -28.518549999999998)",
          name: "Urussanga/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.20342 -17.46452)",
          name: "Urutaí/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.094350000000006 -12.08251)",
          name: "Utinga/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.93447 -28.51255)",
          name: "Vacaria/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-59.061479999999996 -15.29449)",
          name: "Vale de São Domingos/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-62.186479999999996 -9.86347)",
          name: "Vale do Anari/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-62.134479999999996 -10.44947)",
          name: "Vale do Paraíso/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.68349 -29.60454)",
          name: "Vale do Sol/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.25448 -29.39855)",
          name: "Vale Real/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.18449 -29.787550000000003)",
          name: "Vale Verde/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.07334 -13.37052)",
          name: "Valença/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.700390000000006 -22.246550000000003)",
          name: "Valença/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.74635 -6.40848)",
          name: "Valença do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.462340000000005 -11.412510000000001)",
          name: "Valente/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.088440000000006 -20.422530000000002)",
          name: "Valentim Gentil/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.99642 -22.971549999999997)",
          name: "Valinhos/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.86844 -21.22853)",
          name: "Valparaíso/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.97941 -16.06652)",
          name: "Valparaíso de Goiás/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.84548 -28.47855)",
          name: "Vanini/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.15547 -26.86454)",
          name: "Vargeão/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.41442 -22.88955)",
          name: "Vargem/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.97547 -27.48955)",
          name: "Vargem/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.29838 -19.60855)",
          name: "Vargem Alegre/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.00737 -20.67155)",
          name: "Vargem Alta/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.36641 -20.32754)",
          name: "Vargem Bonita/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.74047 -27.00754)",
          name: "Vargem Bonita/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.91637 -3.54346)",
          name: "Vargem Grande/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.30837 -15.40353)",
          name: "Vargem Grande do Rio Pardo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.89442 -21.832539999999998)",
          name: "Vargem Grande do Sul/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.02642 -23.603550000000002)",
          name: "Vargem Grande Paulista/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.430409999999995 -21.551550000000002)",
          name: "Varginha/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.63142 -17.045520000000003)",
          name: "Varjão/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.032399999999996 -18.37853)",
          name: "Varjão de MInas/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.477340000000005 -4.19446)",
          name: "Varjota/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.86938 -20.93155)",
          name: "Varre-Sai/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.3763 -6.3484799999999995)",
          name: "Várzea/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.99232 -6.77248)",
          name: "Várzea/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.29634 -6.78948)",
          name: "Várzea Alegre/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.96437 -9.23949)",
          name: "Várzea Branca/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.731390000000005 -17.59853)",
          name: "Várzea da Palma/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.13735 -11.60751)",
          name: "Várzea da Roça/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.320350000000005 -11.52951)",
          name: "Várzea do Poço/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-56.13346 -15.647499999999999)",
          name: "Várzea Grande/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.24636 -6.5454799999999995)",
          name: "Várzea Grande/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.94235 -11.25951)",
          name: "Várzea Nova/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.82842 -23.21155)",
          name: "Várzea Paulista/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.39434 -12.97152)",
          name: "Varzedo/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.02838 -15.70153)",
          name: "Varzelândia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.66339 -22.404549999999997)",
          name: "Vassouras/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.908409999999996 -17.98753)",
          name: "Vazante/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.192479999999996 -29.606550000000002)",
          name: "Venâncio Aires/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.13537 -20.34055)",
          name: "Venda Nova do Imigrante/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.48433 -6.32648)",
          name: "Venha-Ver/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.24345 -24.24654)",
          name: "Ventania/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.87432 -8.57549)",
          name: "Venturosa/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-55.31745 -12.30649)",
          name: "Vera/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.81944 -22.22054)",
          name: "Vera Cruz/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.50649 -29.71554)",
          name: "Vera Cruz/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.60934 -12.960519999999999)",
          name: "Vera Cruz/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.4283 -6.04448)",
          name: "Vera Cruz/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.87748 -25.05853)",
          name: "Vera Cruz do Oeste/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.48335 -7.60349)",
          name: "Vera Mendes/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.549479999999996 -28.93655)",
          name: "Veranópolis/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.97233 -7.92649)",
          name: "Verdejante/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.60338 -15.58953)",
          name: "Verdelândia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.90847 -25.88154)",
          name: "Verê/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.09035 -17.22354)",
          name: "Vereda/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.736380000000004 -17.39954)",
          name: "Veredinha/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.30842 -19.663529999999998)",
          name: "Veríssimo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.267379999999996 -20.036550000000002)",
          name: "Vermelho Novo/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.85031 -7.77149)",
          name: "Vertente do Lério/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.98831 -7.903490000000001)",
          name: "Vertentes/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.92339 -19.69254)",
          name: "Vespasiano/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.859480000000005 -29.06855)",
          name: "Vespasiano Correa/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.020469999999996 -27.56954)",
          name: "Viadutos/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.02348 -30.08155)",
          name: "Viamão/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.49636 -20.39055)",
          name: "Viana/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.00438 -3.22046)",
          name: "Viana/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.51642 -16.742520000000003)",
          name: "Vianópolis/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.3273 -7.65749)",
          name: "Vicência/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.40548 -27.16254)",
          name: "Vicente Dutra/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.43647 -22.409519999999997)",
          name: "Vicentina/MS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.80643 -17.73552)",
          name: "Vicentinópolis/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.88238 -20.75455)",
          name: "Viçosa/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.94432 -5.99448)",
          name: "Viçosa/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-36.24131 -9.371500000000001)",
          name: "Viçosa/AL",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.09235 -3.5624599999999997)",
          name: "Viçosa do Ceará/CE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.74848 -28.56054)",
          name: "Victor Graeff/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.35645 -27.39255)",
          name: "Vidal Ramos/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.15247 -27.00854)",
          name: "Videira/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.24438 -20.86655)",
          name: "Vieiras/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-38.25633 -6.50748)",
          name: "Vieirópolis/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.1424 -0.85844)",
          name: "Vigia/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.72847 -23.50853)",
          name: "Vila Alta/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-59.951480000000004 -15.00849)",
          name: "Vila Bela da Santíssima Trindade/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.0594 -15.03852)",
          name: "Vila Boa/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.0773 -6.31448)",
          name: "Vila Flor/RN",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.53348 -28.86355)",
          name: "Vila Flores/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.14448 -28.10754)",
          name: "Vila Lângaro/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.15448 -28.53554)",
          name: "Vila Maria/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.940349999999995 -7.136480000000001)",
          name: "Vila Nova do Piauí/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.8835 -30.34454)",
          name: "Vila Nova do Sul/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.1364 -5.188470000000001)",
          name: "Vila Nova dos Martírios/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.611360000000005 -18.615550000000002)",
          name: "Vila Pavão/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.88942 -15.457519999999999)",
          name: "Vila Propício/GO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.11642 -10.01249)",
          name: "Vila Rica/MT",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.389359999999996 -18.99855)",
          name: "Vila Valério/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.292359999999995 -20.33055)",
          name: "Vila Velha/ES",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-60.14648 -12.74148)",
          name: "Vilhena/RO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.97542 -23.030549999999998)",
          name: "Vinhedo/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.297419999999995 -20.873540000000002)",
          name: "Viradouro/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.34337 -16.80453)",
          name: "Virgem da Lapa/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.09241 -22.33355)",
          name: "Virgínia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.70438 -18.82354)",
          name: "Virginópolis/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.30737 -18.47654)",
          name: "Virgolândia/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.19947 -25.38154)",
          name: "Virmond/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.84138 -21.01055)",
          name: "Visconde do Rio Branco/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-46.14038 -1.19744)",
          name: "Viseu/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.49048 -27.36754)",
          name: "Vista Alegre/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.62943 -21.17154)",
          name: "Vista Alegre do Alto/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.790479999999995 -28.80955)",
          name: "Vista Alegre do Prata/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.70248 -27.29154)",
          name: "Vista Gaúcha/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.56732 -6.73848)",
          name: "Vista Serrana/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.83346 -26.88155)",
          name: "Vitor Meireles/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.48444 -20.19753)",
          name: "Vitória Brasil/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-40.83936 -14.86653)",
          name: "Vitória da Conquista/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-54.49649 -28.35154)",
          name: "Vitória das Missões/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.2913 -8.118490000000001)",
          name: "Vitória de Santo Antão/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.42442 -0.93844)",
          name: "Vitória do Jari/AP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.87137 -3.46246)",
          name: "Vitória do Mearim/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.01042 -2.88045)",
          name: "Vitória do Xingu/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.78447 -26.27754)",
          name: "Vitorino/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.25138 -4.28246)",
          name: "Vitorino Freire/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.53938 -21.771549999999998)",
          name: "Volta Grande/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-44.1044 -22.52355)",
          name: "Volta Redonda/RJ",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.43843 -23.54755)",
          name: "Votorantim/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.973440000000004 -20.42353)",
          name: "Votuporanga/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.16836 -12.28751)",
          name: "Wagner/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-41.91036 -7.23348)",
          name: "Wall Ferraz/PI",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-47.9634 -6.84948)",
          name: "Wanderlândia/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-43.88838 -12.120510000000001)",
          name: "Wanderley/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.36341 -22.534550000000003)",
          name: "Wenceslau Braz/MG",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.803439999999995 -23.87454)",
          name: "Wenceslau Braz/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-39.47934 -13.687520000000001)",
          name: "Wenceslau Guimarães/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.76548 -29.417550000000002)",
          name: "Westfalia/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.796459999999996 -26.926550000000002)",
          name: "Witmarsum/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-48.5364 -6.4114700000000004)",
          name: "Xambioá/TO",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-53.49047 -23.736530000000002)",
          name: "Xambrê/PR",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.04447 -29.801550000000002)",
          name: "Xangri-lá/RS",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.404469999999996 -26.87754)",
          name: "Xanxerê/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-68.50451 -10.65246)",
          name: "Xapuri/AC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.342470000000006 -27.06954)",
          name: "Xavantina/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-52.53548 -26.96254)",
          name: "Xaxim/SC",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-35.62731 -8.8025)",
          name: "Xexéu/PE",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-49.94641 -7.09547)",
          name: "Xinguara/PA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-42.731370000000005 -10.8225)",
          name: "Xique-Xique/BA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-37.09832 -8.07649)",
          name: "Zabelê/PB",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-50.05144 -21.05253)",
          name: "Zacarias/SP",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-45.824380000000005 -3.2434600000000002)",
          name: "Zé Doca/MA",
        },
        {
          guuid: UUIDV4(),
          geom: "POINT (-51.55547 -27.451539999999998)",
          name: "Zortéa/SC",
        },
      ],
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete({
      schema: "public",
      tableName: "cities_brazil",
    });
  },
};
