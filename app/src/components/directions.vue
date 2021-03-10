  
<template>
  <div id="directions">
    <div>
      <div class="mb-2">
      <label>Start</label>
      <b-form-select
        type="text"
        id="From"
        class="DirectionStyling"
        v-model="selectedFrom"
        :options="options"
        v-on:change="storeInput"
      ></b-form-select>
    </div>
      <label>End</label>
      <b-form-select
        id="To"
        name="routeSelect"
        class="DirectionStyling"
        v-model="selectedTo"
        :options="options"
        v-on:change="storeInput"
      ></b-form-select>
    </div>
     <div>
      <button type="button" class="btn btn-danger font-weight-bold"
        @click="saveRoute"
      >Save Route</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  data() {
    return {
      selectedTo: null,
      selectedFrom: null,
      options: [],
      inputTo: "",
    };
  },
  mounted() {
    const data = [
      { room: "101A", floor: 1, coordinate1: 120, coordinate2: 300 },
{ room: "101B", floor: 1, coordinate1: 160, coordinate2: 288 },
{ room: "101C", floor: 1, coordinate1: 220, coordinate2: 300 },
{ room: "101D", floor: 1, coordinate1: 240, coordinate2: 336 },
{ room: "101", floor: 1, coordinate1: 225, coordinate2: 330 },
{ room: "110A", floor: 1, coordinate1: 281, coordinate2: 288 },
{ room: "110B ", floor: 1, coordinate1: 281, coordinate2: 242 },
{ room: "110C ", floor: 1, coordinate1: 285, coordinate2: 182 },
{ room: "110D ", floor: 1, coordinate1: 288, coordinate2: 144 },
{ room: "110E ", floor: 1, coordinate1: 288, coordinate2: 84 },
{ room: "110F ", floor: 1, coordinate1: 341, coordinate2: 56 },
{ room: "110G ", floor: 1, coordinate1: 388, coordinate2: 65 },
{ room: "110H ", floor: 1, coordinate1: 432, coordinate2: 48 },
{ room: "110J ", floor: 1, coordinate1: 513, coordinate2: 100 },
{ room: "110K ", floor: 1, coordinate1: 512, coordinate2: 160 },
{ room: "110M ", floor: 1, coordinate1: 518, coordinate2: 222 },
{ room: "110N ", floor: 1, coordinate1: 494, coordinate2: 286 },
{ room: "110P ", floor: 1, coordinate1: 418, coordinate2: 242 },
{ room: "110Q", floor: 1, coordinate1: 418, coordinate2: 174 },
{ room: "110R", floor: 1, coordinate1: 369, coordinate2: 174 },
{ room: "110S ", floor: 1, coordinate1: 369, coordinate2: 245 },
{ room: "110", floor: 1, coordinate1: 385, coordinate2: 295 },
{ room: "112", floor: 1, coordinate1: 480, coordinate2: 320 },
{ room: "114", floor: 1, coordinate1: 720, coordinate2: 314 },
{ room: "114.01", floor: 1, coordinate1: 674, coordinate2: 324 },
{ room: "114.02", floor: 1, coordinate1: 735, coordinate2: 320 },
{ room: "114A", floor: 1, coordinate1: 616, coordinate2: 326 },
{ room: "114B", floor: 1, coordinate1: 627, coordinate2: 254 },
{ room: "114C ", floor: 1, coordinate1: 691, coordinate2: 256 },
{ room: "114D ", floor: 1, coordinate1: 736, coordinate2: 256 },
{ room: "115", floor: 1, coordinate1: 805, coordinate2: 322 },
{ room: "115A ", floor: 1, coordinate1: 804, coordinate2: 262 },
{ room: "116", floor: 1, coordinate1: 897, coordinate2: 298 },
{ room: "116A", floor: 1, coordinate1: 960, coordinate2: 320 },
{ room: "119", floor: 1, coordinate1: 1184, coordinate2: 326 },
{ room: "119A ", floor: 1, coordinate1: 1085, coordinate2: 320 },
{ room: "119B", floor: 1, coordinate1: 1085, coordinate2: 320 },
{ room: "119C ", floor: 1, coordinate1: 1184, coordinate2: 240 },
{ room: "120", floor: 1, coordinate1: 1285, coordinate2: 330 },
{ room: "120A ", floor: 1, coordinate1: 1232, coordinate2: 256 },
{ room: "120B ", floor: 1, coordinate1: 1280, coordinate2: 256 },
{ room: "120C", floor: 1, coordinate1: 1360, coordinate2: 320 },
{ room: "120CA ", floor: 1, coordinate1: 1361, coordinate2: 280 },
{ room: "121", floor: 1, coordinate1: 1409, coordinate2: 314 },
{ room: "121A ", floor: 1, coordinate1: 1409, coordinate2: 252 },
{ room: "122", floor: 1, coordinate1: 1590, coordinate2: 317 },
{ room: "123", floor: 1, coordinate1: 1520, coordinate2: 272 },
{ room: "124", floor: 1, coordinate1: 1536, coordinate2: 224 },
{ room: "127", floor: 1, coordinate1: 1645, coordinate2: 163 },
{ room: "128", floor: 1, coordinate1: 1717, coordinate2: 247 },
{ room: "129", floor: 1, coordinate1: 1767, coordinate2: 245 },
{ room: "130", floor: 1, coordinate1: 1870, coordinate2: 315 },
{ room: "131", floor: 1, coordinate1: 1708, coordinate2: 298 },
{ room: "137", floor: 1, coordinate1: 1742, coordinate2: 498 },
{ room: "137A", floor: 1, coordinate1: 1742, coordinate2: 552 },
{ room: "137B", floor: 1, coordinate1: 1729, coordinate2: 440 },
{ room: "137C", floor: 1, coordinate1: 1782, coordinate2: 442 },
{ room: "137D", floor: 1, coordinate1: 1885, coordinate2: 468 },
{ room: "137DA", floor: 1, coordinate1: 1817, coordinate2: 435 },
{ room: "137DB", floor: 1, coordinate1: 1888, coordinate2: 420 },
{ room: "140", floor: 1, coordinate1: 1607, coordinate2: 491 },
{ room: "140A", floor: 1, coordinate1: 1584, coordinate2: 432 },
{ room: "140B", floor: 1, coordinate1: 1610, coordinate2: 550 },
{ room: "143", floor: 1, coordinate1: 1525, coordinate2: 460 },
{ room: "144", floor: 1, coordinate1: 1420, coordinate2: 444 },
{ room: "144.01", floor: 1, coordinate1: 1384, coordinate2: 449 },
{ room: "144.02", floor: 1, coordinate1: 1350, coordinate2: 449 },
{ room: "144A ", floor: 1, coordinate1: 1473, coordinate2: 506 },
{ room: "144B", floor: 1, coordinate1: 1401, coordinate2: 504 },
{ room: "144C ", floor: 1, coordinate1: 1348, coordinate2: 504 },
{ room: "145", floor: 1, coordinate1: 1271, coordinate2: 458 },
{ room: "145A", floor: 1, coordinate1: 1299, coordinate2: 500 },
{ room: "145B", floor: 1, coordinate1: 1252, coordinate2: 500 },
{ room: "146", floor: 1, coordinate1: 1197, coordinate2: 445 },
{ room: "146B", floor: 1, coordinate1: 1197, coordinate2: 497 },
{ room: "146C", floor: 1, coordinate1: 1150, coordinate2: 483 },
{ room: "146D", floor: 1, coordinate1: 1125, coordinate2: 435 },
{ room: "147", floor: 1, coordinate1: 796, coordinate2: 446 },
{ room: "147.01", floor: 1, coordinate1: 796, coordinate2: 514 },
{ room: "147.02", floor: 1, coordinate1: 835, coordinate2: 445 },
{ room: "147.03", floor: 1, coordinate1: 875, coordinate2: 445 },
{ room: "147.04", floor: 1, coordinate1: 896, coordinate2: 448 },
{ room: "147A ", floor: 1, coordinate1: 852, coordinate2: 510 },
{ room: "147B  ", floor: 1, coordinate1: 901, coordinate2: 504 },
{ room: "149", floor: 1, coordinate1: 694, coordinate2: 450 },
{ room: "149.01", floor: 1, coordinate1: 749, coordinate2: 454 },
{ room: "149.02", floor: 1, coordinate1: 636, coordinate2: 454 },
{ room: "149A", floor: 1, coordinate1: 744, coordinate2: 510 },
{ room: "149B ", floor: 1, coordinate1: 669, coordinate2: 504 },
{ room: "149C ", floor: 1, coordinate1: 617, coordinate2: 504 },
{ room: "149D ", floor: 1, coordinate1: 568, coordinate2: 504 },
{ room: "150", floor: 1, coordinate1: 507, coordinate2: 438 },
{ room: "151", floor: 1, coordinate1: 438, coordinate2: 470 },
{ room: "151A ", floor: 1, coordinate1: 425, coordinate2: 535 },
{ room: "151Z ", floor: 1, coordinate1: 404, coordinate2: 465 },
{ room: "155", floor: 1, coordinate1: 250, coordinate2: 450 },
{ room: "155A ", floor: 1, coordinate1: 300, coordinate2: 530 },
{ room: "155B ", floor: 1, coordinate1: 130, coordinate2: 470 },
{ room: "155BA ", floor: 1, coordinate1: 225, coordinate2: 420 },
{ room: "155BB", floor: 1, coordinate1: 130, coordinate2: 420 },
{ room: "197A ", floor: 1, coordinate1: 521, coordinate2: 330 },
{ room: "197B", floor: 1, coordinate1: 1510, coordinate2: 330 },
{ room: "198A ", floor: 1, coordinate1: 130, coordinate2: 374 },
{ room: "198B ", floor: 1, coordinate1: 569, coordinate2: 344 },
{ room: "198C ", floor: 1, coordinate1: 1469, coordinate2: 336 },
{ room: "198D", floor: 1, coordinate1: 1792, coordinate2: 383 },
{ room: "198E", floor: 1, coordinate1: 1082, coordinate2: 432 },
{ room: "198F ", floor: 1, coordinate1: 953, coordinate2: 440 },
{ room: "199", floor: 1, coordinate1: 357, coordinate2: 388 },
{ room: "201", floor: 2, coordinate1: 224, coordinate2: 1520 },
{ room: "201A ", floor: 2, coordinate1: 128, coordinate2: 1472 },
{ room: "201B ", floor: 2, coordinate1: 176, coordinate2: 1472 },
{ room: "201C ", floor: 2, coordinate1: 208, coordinate2: 1472 },
{ room: "203", floor: 2, coordinate1: 308, coordinate2: 1488 },
{ room: "205", floor: 2, coordinate1: 304, coordinate2: 1280 },
{ room: "205A", floor: 2, coordinate1: 288, coordinate2: 1360 },
{ room: "206", floor: 2, coordinate1: 416, coordinate2: 1328 },
{ room: "206A ", floor: 2, coordinate1: 512, coordinate2: 1344 },
{ room: "206B ", floor: 2, coordinate1: 500, coordinate2: 1241 },
{ room: "206C ", floor: 2, coordinate1: 512, coordinate2: 1256 },
{ room: "206D ", floor: 2, coordinate1: 384, coordinate2: 1248 },
{ room: "207", floor: 2, coordinate1: 512, coordinate2: 1392 },
{ room: "208", floor: 2, coordinate1: 459, coordinate2: 1455 },
{ room: "208A ", floor: 2, coordinate1: 407, coordinate2: 1509 },
{ room: "209", floor: 2, coordinate1: 480, coordinate2: 1504 },
{ room: "210", floor: 2, coordinate1: 630, coordinate2: 1496 },
{ room: "211", floor: 2, coordinate1: 740, coordinate2: 1487 },
{ room: "212", floor: 2, coordinate1: 885, coordinate2: 1487 },
{ room: "214", floor: 2, coordinate1: 1040, coordinate2: 1504 },
{ room: "214A ", floor: 2, coordinate1: 976, coordinate2: 1510 },
{ room: "214B ", floor: 2, coordinate1: 944, coordinate2: 1466 },
{ room: "214C ", floor: 2, coordinate1: 992, coordinate2: 1452 },
{ room: "214D ", floor: 2, coordinate1: 1056, coordinate2: 1454 },
{ room: "219", floor: 2, coordinate1: 1088, coordinate2: 1490 },
{ room: "220", floor: 2, coordinate1: 1168, coordinate2: 1485 },
{ room: "221", floor: 2, coordinate1: 1328, coordinate2: 1477 },
{ room: "222", floor: 2, coordinate1: 1424, coordinate2: 1475 },
{ room: "223", floor: 2, coordinate1: 1584, coordinate2: 1504 },
{ room: "224", floor: 2, coordinate1: 1568, coordinate2: 1472 },
{ room: "225", floor: 2, coordinate1: 1632, coordinate2: 1216 },
{ room: "225A ", floor: 2, coordinate1: 1600, coordinate2: 1408 },
{ room: "225B ", floor: 2, coordinate1: 1552, coordinate2: 1360 },
{ room: "225C ", floor: 2, coordinate1: 1536, coordinate2: 1328 },
{ room: "225D ", floor: 2, coordinate1: 1536, coordinate2: 1280 },
{ room: "225E ", floor: 2, coordinate1: 1536, coordinate2: 1216 },
{ room: "227", floor: 2, coordinate1: 1648, coordinate2: 1296 },
{ room: "229", floor: 2, coordinate1: 1744, coordinate2: 1232 },
{ room: "229A ", floor: 2, coordinate1: 1790, coordinate2: 1227 },
{ room: "229B ", floor: 2, coordinate1: 1790, coordinate2: 1227 },
{ room: "229C ", floor: 2, coordinate1: 1790, coordinate2: 1267 },
{ room: "229D ", floor: 2, coordinate1: 1760, coordinate2: 1328 },
{ room: "229E ", floor: 2, coordinate1: 1712, coordinate2: 1344 },
{ room: "240", floor: 2, coordinate1: 1790, coordinate2: 1360 },
{ room: "241", floor: 2, coordinate1: 1712, coordinate2: 1408 },
{ room: "241A ", floor: 2, coordinate1: 1712, coordinate2: 1488 },
{ room: "244", floor: 2, coordinate1: 1792, coordinate2: 1472 },
{ room: "245", floor: 2, coordinate1: 1888, coordinate2: 1536 },
{ room: "245A ", floor: 2, coordinate1: 1840, coordinate2: 1472 },
{ room: "245B ", floor: 2, coordinate1: 1888, coordinate2: 1488 },
{ room: "245C ", floor: 2, coordinate1: 1952, coordinate2: 1504 },
{ room: "248", floor: 2, coordinate1: 1824, coordinate2: 1632 },
{ room: "248A", floor: 2, coordinate1: 1920, coordinate2: 1648 },
{ room: "249A ", floor: 2, coordinate1: 1712, coordinate2: 1712 },
{ room: "249B ", floor: 2, coordinate1: 1776, coordinate2: 1712 },
{ room: "249C ", floor: 2, coordinate1: 1728, coordinate2: 1648 },
{ room: "250", floor: 2, coordinate1: 1760, coordinate2: 1688 },
{ room: "251", floor: 2, coordinate1: 1552, coordinate2: 1632 },
{ room: "252", floor: 2, coordinate1: 1344, coordinate2: 1648 },
{ room: "253", floor: 2, coordinate1: 1424, coordinate2: 1648 },
{ room: "254", floor: 2, coordinate1: 1216, coordinate2: 1648 },
{ room: "255", floor: 2, coordinate1: 864, coordinate2: 1664 },
{ room: "256", floor: 2, coordinate1: 758, coordinate2: 1664 },
{ room: "257", floor: 2, coordinate1: 640, coordinate2: 1664 },
{ room: "258", floor: 2, coordinate1: 512, coordinate2: 1632 },
{ room: "259", floor: 2, coordinate1: 400, coordinate2: 1632 },
{ room: "259A ", floor: 2, coordinate1: 448, coordinate2: 1632 },
{ room: "259B ", floor: 2, coordinate1: 416, coordinate2: 1712 },
{ room: "259C ", floor: 2, coordinate1: 352, coordinate2: 1712 },
{ room: "259D ", floor: 2, coordinate1: 320, coordinate2: 1623 },
{ room: "259E ", floor: 2, coordinate1: 320, coordinate2: 1712 },
{ room: "260", floor: 2, coordinate1: 272, coordinate2: 1632 },
{ room: "260A ", floor: 2, coordinate1: 272, coordinate2: 1712 },
{ room: "261", floor: 2, coordinate1: 224, coordinate2: 1518 },
{ room: "261A ", floor: 2, coordinate1: 224, coordinate2: 1648 },
{ room: "261B ", floor: 2, coordinate1: 176, coordinate2: 1648 },
{ room: "261C ", floor: 2, coordinate1: 128, coordinate2: 1648 },
{ room: "297A", floor: 2, coordinate1: 508, coordinate2: 1512 }
    ];
    var sortedTestCollection = Object.keys(data).sort(function (a, b) {
      a = data[a].room.substring(0, data[a].room.length);
      b = data[b].room.substring(0, data[b].room.length);
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
    sortedTestCollection.forEach((index) => {
      this.options.push({
        value: [
          data[index].floor,
          data[index].coordinate1,
          data[index].coordinate2,
        ],
        text: `Room ${data[index].room}`,
      });
    });
  },
  methods: {
    displaySearch: function (event) {
      var block = document.getElementById("search-box");
      block.style.visibility = "visible";
      /*change code to dynamically add div with textboxes*/
      var newDiv = document.createElement("div");
    },
    storeInput(event) {
      var inputTo = document.getElementById("To").value;
      //debug only
      //alert(inputTo);
      var inputFrom = document.getElementById("From").value;
      //debug only
     // alert(inputFrom);
      // update the state
      this.$store.commit("SET_DIRECTIONS", { from: inputFrom, to: inputTo });
    },
 saveRoute(event){
            var inputTo = document.getElementById("To").value;
      var inputFrom = document.getElementById("From").value;
      this.$store.dispatch("SAVE_ROUTE", {userId: this.$store.state.user.data.email, from: inputFrom, to: inputTo })
    },
    selectSavedRoute(from, to){
            this.$store.commit("SET_DIRECTIONS", { from: from, to: to });
    }
  },
};
</script>

<style scoped>
.btn {
  width: 50%;
  margin-top: 13px;
}

.DirectionStyling {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

</style>
