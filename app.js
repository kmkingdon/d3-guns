
var gunOwnership = [
  0,
  0.7925445705,
  1,
  0.5235008104,
  0.9384116694,
  0.3257698541,
  0.5542949757,
  0.2690437601,
  0.08427876823,
  0.5267423015,
  0.5121555916,
  0.7309562399,
  0.9222042139,
  0.4246353323,
  0.5478119935,
  0.5478119935,
  0.5218800648,
  0.6871961102,
  0.7212317666,
  0.3662884927,
  0.3354943274,
  0.3662884927,
  0.4667747164,
  0.5948136143,
  0.6936790924,
  0.4392220421,
  0.847649919,
  0.3209076175,
  0.6077795786,
  0.2333873582,
  0.1831442464,
  0.8087520259,
  0.1669367909,
  0.4651539708,
  0.7763371151,
  0.3176661264,
  0.5056726094,
  0.4311183144,
  0.4392220421,
  0.09400324149,
  0.7196110211,
  0.56726094,
  0.6385737439,
  0.5786061588,
  0.5170178282,
  0.4667747164,
  0.4748784441,
  0.4489465154,
  0.8784440843,
  0.5623987034,
  0.8719611021
];

var deathRates = [
  0,
  0.9081163859,
  1,
  0.7248596223,
  0.864216437,
  0.4027565084,
  0.5997958142,
  0.2286881062,
  0.5513016845,
  0.6375701889,
  0.6447166922,
  0.1383358857,
  0.718734048,
  0.4425727412,
  0.6656457376,
  0.4180704441,
  0.583971414,
  0.7223072996,
  0.977539561,
  0.6069423175,
  0.4977029096,
  0.1623277182,
  0.6140888208,
  0.4022460439,
  0.8938233793,
  0.7432363451,
  0.8647269015,
  0.4589076059,
  0.7228177642,
  0.3588565595,
  0.2904543134,
  0.797856049,
  0.2240939255,
  0.6339969372,
  0.6069423175,
  0.5686574783,
  0.8376722818,
  0.6003062787,
  0.5798876978,
  0.2720775906,
  0.7963246554,
  0.483409903,
  0.809596733,
  0.5359877489,
  0.5967330271,
  0.5293517101,
  0.5339458908,
  0.4629913221,
  0.7708014293,
  0.5068912711,
  0.8938233793
]

var deathRatesAverage = [
  0,
  1.671992481,
1.841165414,
1.334586466,
1.591165414,
0.7415413534,
1.104323308,
0.4210526316,
1.015037594,
1.17387218,
1.187030075,
0.2546992481,
1.323308271,
0.8148496241,
1.22556391,
0.7697368421,
1.07518797,
1.329887218,
1.79981203,
1.117481203,
0.9163533835,
0.2988721805,
1.130639098,
0.7406015038,
1.645676692,
1.368421053,
1.592105263,
0.844924812,
1.330827068,
0.6607142857,
0.5347744361,
1.468984962,
0.412593985,
1.167293233,
1.117481203,
1.046992481,
1.542293233,
1.105263158,
1.067669173,
0.5009398496,
1.466165414,
0.890037594,
1.490601504,
0.9868421053,
1.098684211,
0.9746240602,
0.9830827068,
0.852443609,
1.419172932,
0.9332706767,
1.645676692
]

var gunLawAverage = [ 0,
  1.5,
1.8,
1.8,
1.5,
0.5,
1,
0.5,
0.7,
1.5,
1.8,
0.5,
1.5,
0.7,
1,
1,
1.8,
1.5,
1.5,
1.5,
0.5,
0.5,
1,
1,
1.5,
1.8,
1.8,
1,
1,
1.5,
0.5,
1.5,
0.5,
1,
1.8,
1,
1.8,
1,
1,
0.7,
1.5,
1.5,
1.5,
1.8,
1.8,
1.5,
1,
0.7,
1.5,
1,
1.5]

var gunLaw = [
  0,
  0.7,
0.6,
0.6,
0.7,
1,
0.8,
1,
0.9,
0.7,
0.6,
1,
0.7,
0.9,
0.8,
0.8,
0.6,
0.7,
0.7,
0.7,
1,
1,
0.8,
0.8,
0.7,
0.6,
0.6,
0.8,
0.8,
0.7,
1,
0.7,
1,
0.8,
0.6,
0.8,
0.6,
0.8,
0.8,
0.9,
0.7,
0.7,
0.7,
0.6,
0.6,
0.7,
0.8,
0.9,
0.7,
0.8,
0.7
]


// stateArray.forEach(state => {
//   let rate = deathRates[state.id]
//   console.log(rate)
// })

var svg = d3.select("svg");

var path = d3.geoPath();

d3.json("./us/10m.json", function(error, us) {
  if (error) throw error;

  svg.append("path")
      .attr("stroke", "#aaa")
      .attr("stroke-width", 0.5)
      .attr("class", "state-borders")
      .attr("fill", "transparent")
      .attr("d", path(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; })));

  svg.append("path")
      .attr("stroke", "#aaa")
      .attr("stroke-width", 0.5)
      .attr("fill", "transparent")
      .attr("d", path(topojson.feature(us, us.objects.nation)));
});

d3.json("./us/10m.json", function(error, us) {
  if (error) throw error;

  svg.selectAll(".state")
    .data(topojson.feature(us, us.objects.states).features)
    .enter().append("path")
      .attr("class", "state")
      .attr("d", path)
      .attr("transform", function(d) {

            var centroid = path.centroid(d),
                x = centroid[0],
                y = centroid[1];
            return "translate(" + x + "," + y + ")"
                + "scale(" + Math.sqrt(gunLaw[d.id]) + ")"
                + "translate(" + -x + "," + -y + ")"
      })

      .style("stroke-width", function(d) {
        return 1 / Math.sqrt(gunLaw[d.id]);
      })
      .attr("id", function(d){
        return d.id
      })
      .attr("fill", function(d) {
        let rate = deathRatesAverage[d.id];
        if(rate < .6){
          return "#009933"
        } else if( rate > .6 && rate < .9) {
          return "#4CB824"
        } else if( rate > .9 && rate < 1.1) {
          return "#8CD117"
        } else if( rate > 1.1 && rate < 1.6) {
          return "#CCEB0A"
        } else if( rate > 1.6) {
          return "#FFFF00"
        }
      })
});


const svgObject = document.getElementById('map');
svgObject.addEventListener("click", showStats);

function showStats(event) {
  console.log(event.path[0].id)
}