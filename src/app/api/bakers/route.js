// handle GET request from google maps api

// const express = require("express");
// const router = express.Router();
// const axios = require("axios");
// const { googleMapsApiKey } = require("../../config/keys");

// // fetch bakeries from google maps api

// router.get("/", (req, res) => {
//   const { lat, lng } = req.query;
//   axios
//     .get(
//       `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1500&type=bakery&key=${googleMapsApiKey}`
//     )
//     .then((response) => {
//       res.json(response.data.results);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// module.exports = router;

// // http://localhost:3000/api/bakers

// export async function GET(request) {
//   const bakers = [
//     {
//         "id": "ChIJfeuhE1L0OxARUb90YGIM6Eo",
//         "name": "Nuts About Cakes Lekki",
//         "opening_hours": {
//           "open_now": true
//         },
//         "ratings": 4.4,
//         "business_status": "OPERATIONAL",
//         "formatted_address": "33 Fola Osibo Rd, Eti-Osa 106104, Lekki, Lagos, Nigeria",
//         "geometry": {
//           "location": {
//             "lat": 6.4428397,
//             "lng": 3.4693214
//           },
//           "viewport": {
//             "northeast": {
//               "lat": 6.44407777989272,
//               "lng": 3.470671229892722
//             },
//             "southwest": {
//               "lat": 6.441378120107276,
//               "lng": 3.467971570107277
//             }
//           }
//         },
//         "photos": [
//           {
//             "photo_reference": "AUacShjMySO7mxY2yU0JWwWF3ZPQQWHcIHXhrJKrseXTNv7AVek_FVPHCoc4gZiiwyt4gqt_g2ls71Onu76ZDIKfXS7wxzeSJS7tKfisQd65kpiY9YtKG0l8WUyr7XuwjnVG6C_3PnaYbCtz0I98yIAco3vjHZmVQpqI3WpNQA6nTAzFf0yb",
//             "height": 2968,
//             "width": 2952,
//             "html_attributions": [
//               "<a href=\"https://maps.google.com/maps/contrib/102929197627417505803\">Nuts About Cakes</a>"
//             ]
//           }
//         ],
//         "place_id": "ChIJfeuhE1L0OxARUb90YGIM6Eo"
//       },
//       {
//         "id": "ChIJ89H--Q_1OxARhhE_Ko4R7YM",
//         "name": "D Cakery Cafe",
//         "opening_hours": {
//           "open_now": true
//         },
//         "ratings": 4.7,
//         "business_status": "OPERATIONAL",
//         "formatted_address": "Block 52A, Plot 28 Omorinre Johnson Street, Lekki Phase I 106104, Lagos, Nigeria",
//         "geometry": {
//           "location": {
//             "lat": 6.4364525,
//             "lng": 3.4625309
//           },
//           "viewport": {
//             "northeast": {
//               "lat": 6.437833829892721,
//               "lng": 3.463880829892722
//             },
//             "southwest": {
//               "lat": 6.435134170107277,
//               "lng": 3.461181170107277
//             }
//           }
//         },
//         "photos": [
//           {
//             "photo_reference": "AUacShgSYl4gJQaCgRRZGAtsO0qDVKDGJ__Az9kc3efyXUdl2nZmdnwWrlCuPDy7F3_JHoIBxYgwaRtaT3P0iKMuucAdu3HyCQKXYQOFBntuxrFeqaxT_1SMCWmG4A7_XW0kpztZBx-b9xA0hCNaal6dcoBUSGhQgdrvREVpLSJBTlv9ws-x",
//             "height": 4032,
//             "width": 3024,
//             "html_attributions": [
//               "<a href=\"https://maps.google.com/maps/contrib/101755323370317415614\">A Google User</a>"
//             ]
//           }
//         ],
//         "place_id": "ChIJ89H--Q_1OxARhhE_Ko4R7YM"
//       },
//       {
//         "id": "ChIJ7yt1R1L0OxARvX3yg6ps_dM",
//         "name": "Cake World Nigeria",
//         "opening_hours": {
//           "open_now": true
//         },
//         "ratings": 4.1,
//         "business_status": "OPERATIONAL",
//         "formatted_address": "26B Fola Osibo Rd, Street 234001, Lagos, Nigeria",
//         "geometry": {
//           "location": {
//             "lat": 6.442486499999999,
//             "lng": 3.4681489
//           },
//           "viewport": {
//             "northeast": {
//               "lat": 6.443895779892721,
//               "lng": 3.469498329892722
//             },
//             "southwest": {
//               "lat": 6.441196120107278,
//               "lng": 3.466798670107277
//             }
//           }
//         },
//         "photos": [
//           {
//             "photo_reference": "AUacShjMJ1ERuBwN2RnnakgORdEKQ5KchJHE0oSuKNHFNqA98_Jf83A-cd3ivhGBbISKeJf6BW0WxlCTawIjFwD4N9CJo1aTmYvxvaP1RjoL53faF9UHlRpqJ38-3YxZgpl6WurubClHTZox3WzFJ0r7XrLix-mUD8cqFP2PmdGIVEsD336g",
//             "height": 1520,
//             "width": 2688,
//             "html_attributions": [
//               "<a href=\"https://maps.google.com/maps/contrib/104757915252588305849\">Agwoani a</a>"
//             ]
//           }
//         ],
//         "place_id": "ChIJ7yt1R1L0OxARvX3yg6ps_dM"
//       },
//       {
//         "id": "ChIJVaaSJpj1OxARJe-AQbEQpxw",
//         "name": "cakesbynj",
//         "opening_hours": {
//           "open_now": true
//         },
//         "ratings": 0,
//         "business_status": "OPERATIONAL",
//         "formatted_address": "lekki phase 1 lagos, 106101, Lekki, Lagos, Nigeria",
//         "geometry": {
//           "location": {
//             "lat": 6.440548000000001,
//             "lng": 3.470287
//           },
//           "viewport": {
//             "northeast": {
//               "lat": 6.441899629892722,
//               "lng": 3.471543979892722
//             },
//             "southwest": {
//                         "lat": 6.441899629892722,
//             "lng": 3.471543979892722
//           },
//           "southwest": {
//             "lat": 6.439199970107278,
//             "lng": 3.468844320107277
//           }
//         }
//       },
//       "photos": [
//         {
//           "photo_reference": "AUacShioqbpT2Izc0bjaht2xxF808hCYmb8xY2RBHjwCeBgAClUMqp644AvnEf_BmHY_CeBJ4PfxVpn30Krfr8pb2K68s_d8D_WZATx3QrvCYXjBncBWXK9VJQ7tBb9l-Ev-wXkH6vq1i2L-Kg0hMqjxpvbye3cJPgFWGgdEQLQRlzkNaYH3",
//           "height": 1920,
//           "width": 1920,
//           "html_attributions": [
//             "<a href=\"https://maps.google.com/maps/contrib/102024981120166971995\">A Google User</a>"
//           ]
//         }
//       ],
//       "place_id": "ChIJVaaSJpj1OxARJe-AQbEQpxw"
//     },
//     {
//         "id": "ChIJe18wdob2OxARd6Ibyt_eIIU",
//         "name": "Dewdrops Cakes Bake factory",
//         "opening_hours": {
//           "open_now": true
//         },
//         "ratings": 4.9,
//         "business_status": "OPERATIONAL",
//         "formatted_address": "20b Babatunde Anjous Ave, Lekki Phase 1 105102, Lekki, Lagos, Nigeria",
//         "geometry": {
//           "location": {
//             "lat": 6.4489698,
//             "lng": 3.4775698
//           },
//           "viewport": {
//             "northeast": {
//               "lat": 6.450319329892722,
//               "lng": 3.478974329892722
//             },
//             "southwest": {
//               "lat": 6.447619670107278,
//               "lng": 3.476274670107277
//             }
//           }
//         },
//         "photos": [
//           {
//             "photo_reference": "AUacShiM_PWsS8hRPBGQOP4eOSeIJcTfiWXOQOk6BMZi8_RBItShWwaCv10ZizfWi9XLBZrHaBWhiyY0wGFUbp38X4D8qv9g1LNEFs9hKktQZNEEdrx1EzPN1ECoFrJi1H_uZUfMLKcXk3gmOSNko3pZozVXprQMc-dTzZVPjdrp7KRWyp7i",
//             "height": 454,
//             "width": 1008,
//             "html_attributions": [
//               "<a href=\"https://maps.google.com/maps/contrib/109825030637365886775\">DewDrops Cakes</a>"
//             ]
//           }
//         ],
//         "place_id": "ChIJe18wdob2OxARd6Ibyt_eIIU"
//       },
//       {
//         "id": "ChIJsXqPLpP1OxAR9bgzH7ccpaI",
//         "name": "Cakes by Somchez",
//         "opening_hours": {
//           "open_now": true
//         },
//         "ratings": 5,
//         "business_status": "OPERATIONAL",
//         "formatted_address": "1 Olawale Cole Onitiri Ave, Lekki Phase I 106104, Lagos, Nigeria",
//         "geometry": {
//           "location": {
//             "lat": 6.4492689,
//             "lng": 3.4708949
//           },
//           "viewport": {
//             "northeast": {
//               "lat": 6.450779829892722,
//               "lng": 3.472321579892722
//             },
//             "southwest": {
//               "lat": 6.448080170107278,
//               "lng": 3.469621920107278
//             }
//           }
//         },
//         "photos": [
//           {
//             "photo_reference": "AUacShiG01q8zErMt6QitHyH8aHtzq2QyJJLdyqxuOJbuSl1YRs_dkbRPEpa_l_vbk7EuAIi2GMykLFnZ749SmcCBS7BgpuUVxJ9g8z3dUNPLYg7GnyfzNRlFCDcqIjffIE9zQ_bnd9Wwwqswfo8HH9V5ft8zW1FX7KxCzb6aFkUJopC7qM3",
//             "height": 2773,
//             "width": 2207,
//             "html_attributions": [
//               "<a href=\"https://maps.google.com/maps/contrib/106638336724196836191\">A Google User</a>"
//             ]
//           }
//         ],
//         "place_id": "ChIJsXqPLpP1OxAR9bgzH7ccpaI"
//       },
//       {
//         "id": "ChIJldQP89T0OxAR_HyBFHY7zos",
//         "name": "Bake House Bakery",
//         "opening_hours": {
//           "open_now": true
//         },
//         "ratings": 3.8,
//         "business_status": "OPERATIONAL",
//         "formatted_address": "inside oando filling station, 166 Awolowo Rd, Ikoyi, Lagos, Nigeria",
//         "geometry": {
//           "location": {
//             "lat": 6.442727199999999,
//             "lng": 3.4216914
//           },
//           "viewport": {
//             "northeast": {
//               "lat": 6.444166679892722,
//               "lng": 3.422994129892722
//             },
//             "southwest": {
//               "lat": 6.441467020107278,
//               "lng": 3.420294470107278
//             }
//           }
//         },
//         "photos": [
//           {
//             "photo_reference": "AUacShjqKt-DCg0SrRmp-lPTo4Wn5zfZFrB_Ud-WcGb31W2uZ6klbAmyMpA7ZRWtJKRFBKWLdzHGEf35rRiiTxPUgqgEDloedjj9-gBfoIRLe6_tV_62UUL32n-TYMAQydgABt_ZuykRIyPpKgw6_rEKj5WG8-0IEBFJgCQ4Nm7c4Izi6APU",
//             "height": 3840,
//             "width": 2160,
//             "html_attributions": [
//               "<a href=\"https://maps.google.com/maps/contrib/109331479841981433757\">Patrick Sagay</a>"
//             ]
//           }
//         ],
//         "place_id": "ChIJldQP89T0OxAR_HyBFHY7zos"
//       }
    
//   ];

//   return new Response(JSON.stringify(bakers));
// }



// GET reguest for bakers from google MAPS/PLACES API

async function getBakers(request) {
  // const url = new URL(request.url);
  const params = url.searchParams;
  const location = params.get('location');
  const radius = params.get('radius');
  const type = params.get('type');
  const keyword = params.get('keyword');
  const key = params.get('key');
  const url2 = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=cake,coffee,dessert,bakers,bakery&key=AIzaSyBQtP39VcK_fjHPezApT6C1jHn2rkU3Frw`;
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&type=${type}&keyword=${keyword}&key=AIzaSyBQtP39VcK_fjHPezApT6C1jHn2rkU3Frw`;
  const response = await fetch(url);
  const json = await response.json();
  return new Response(JSON.stringify(json));
}



