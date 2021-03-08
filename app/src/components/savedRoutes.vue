
 <template>
  <div class="container">
    <div class="col">
          <b-form-select
            id="saved"
            name="routeSelect"
            v-model="selected"
            :options="sortedOptions"
            v-on:change="storeInput"
          ></b-form-select>
        </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
    const data = [
      { room: "101A", floor: 1, coordinate1: 120, coordinate2: 300 },
      { room: "101B", floor: 1, coordinate1: 170, coordinate2: 300 },
      { room: "101C", floor: 1, coordinate1: 220, coordinate2: 300 },
      { room: "101", floor: 1, coordinate1: 225, coordinate2: 330 },
      { room: "110A", floor: 1, coordinate1: 281, coordinate2: 288 },
      { room: "110B", floor: 1, coordinate1: 281, coordinate2: 242 },
      { room: "110C", floor: 1, coordinate1: 285, coordinate2: 182 },
      { room: "110D", floor: 1, coordinate1: 289, coordinate2: 150 },
      { room: "110E", floor: 1, coordinate1: 288, coordinate2: 84 },
      { room: "110F", floor: 1, coordinate1: 341, coordinate2: 56 },
      { room: "110G", floor: 1, coordinate1: 388, coordinate2: 65 },
      { room: "110H", floor: 1, coordinate1: 443, coordinate2: 69 },
      { room: "110J", floor: 1, coordinate1: 513, coordinate2: 100 },
      { room: "110K", floor: 1, coordinate1: 512, coordinate2: 160 },
      { room: "110M", floor: 1, coordinate1: 518, coordinate2: 222 },
      { room: "110N", floor: 1, coordinate1: 494, coordinate2: 286 },
      { room: "110P", floor: 1, coordinate1: 418, coordinate2: 242 },
      { room: "110Q", floor: 1, coordinate1: 418, coordinate2: 174 },
      { room: "110R", floor: 1, coordinate1: 369, coordinate2: 174 },
      { room: "110S", floor: 1, coordinate1: 369, coordinate2: 245 },
      { room: "110", floor: 1, coordinate1: 385, coordinate2: 295 },
      { room: "112", floor: 1, coordinate1: 481, coordinate2: 330 },
      { room: "114", floor: 1, coordinate1: 720, coordinate2: 314 },
      { room: "114.01", floor: 1, coordinate1: 674, coordinate2: 324 },
      { room: "114.02", floor: 1, coordinate1: 755, coordinate2: 320 },
      { room: "114A", floor: 1, coordinate1: 616, coordinate2: 326 },
      { room: "114B", floor: 1, coordinate1: 627, coordinate2: 254 },
      { room: "114C", floor: 1, coordinate1: 691, coordinate2: 256 },
      { room: "114D", floor: 1, coordinate1: 749, coordinate2: 256 },
      { room: "115", floor: 1, coordinate1: 805, coordinate2: 322 },
      { room: "115A", floor: 1, coordinate1: 804, coordinate2: 262 },
      { room: "116", floor: 1, coordinate1: 897, coordinate2: 298 },
      { room: "116A", floor: 1, coordinate1: 968, coordinate2: 334 },
      { room: "119", floor: 1, coordinate1: 1184, coordinate2: 326 },
      { room: "119A", floor: 1, coordinate1: 1085, coordinate2: 320 },
      { room: "119B", floor: 1, coordinate1: 1085, coordinate2: 320 },
      { room: "119C", floor: 1, coordinate1: 1196, coordinate2: 268 },
      { room: "120", floor: 1, coordinate1: 1285, coordinate2: 330 },
      { room: "120A", floor: 1, coordinate1: 1256, coordinate2: 272 },
      { room: "120B", floor: 1, coordinate1: 1309, coordinate2: 262 },
      { room: "120C", floor: 1, coordinate1: 1361, coordinate2: 329 },
      { room: "120CA", floor: 1, coordinate1: 1361, coordinate2: 280 },
      { room: "121", floor: 1, coordinate1: 1409, coordinate2: 314 },
      { room: "121A", floor: 1, coordinate1: 1409, coordinate2: 252 },
      { room: "122", floor: 1, coordinate1: 1590, coordinate2: 317 },
      { room: "123", floor: 1, coordinate1: 1520, coordinate2: 280 },
      { room: "124", floor: 1, coordinate1: 1577, coordinate2: 282 },
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
      { room: "140A", floor: 1, coordinate1: 1605, coordinate2: 450 },
      { room: "140B", floor: 1, coordinate1: 1610, coordinate2: 550 },
      { room: "143", floor: 1, coordinate1: 1525, coordinate2: 460 },
      { room: "144", floor: 1, coordinate1: 1420, coordinate2: 444 },
      { room: "144.01", floor: 1, coordinate1: 1384, coordinate2: 449 },
      { room: "144.02", floor: 1, coordinate1: 1350, coordinate2: 449 },
      { room: "144A", floor: 1, coordinate1: 1473, coordinate2: 506 },
      { room: "144B", floor: 1, coordinate1: 1401, coordinate2: 504 },
      { room: "144C", floor: 1, coordinate1: 1348, coordinate2: 504 },
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
      { room: "147.04", floor: 1, coordinate1: 912, coordinate2: 445 },
      { room: "147A", floor: 1, coordinate1: 852, coordinate2: 510 },
      { room: "147B", floor: 1, coordinate1: 901, coordinate2: 504 },
      { room: "149", floor: 1, coordinate1: 694, coordinate2: 450 },
      { room: "149.01", floor: 1, coordinate1: 749, coordinate2: 454 },
      { room: "149.02", floor: 1, coordinate1: 636, coordinate2: 454 },
      { room: "149A", floor: 1, coordinate1: 744, coordinate2: 510 },
      { room: "149B", floor: 1, coordinate1: 669, coordinate2: 504 },
      { room: "149C", floor: 1, coordinate1: 617, coordinate2: 504 },
      { room: "149D", floor: 1, coordinate1: 568, coordinate2: 504 },
      { room: "150", floor: 1, coordinate1: 507, coordinate2: 438 },
      { room: "151", floor: 1, coordinate1: 438, coordinate2: 470 },
      { room: "151A", floor: 1, coordinate1: 425, coordinate2: 535 },
      { room: "151Z", floor: 1, coordinate1: 404, coordinate2: 465 },
      { room: "155", floor: 1, coordinate1: 250, coordinate2: 450 },
      { room: "155A", floor: 1, coordinate1: 300, coordinate2: 530 },
      { room: "155B", floor: 1, coordinate1: 130, coordinate2: 470 },
      { room: "155BA", floor: 1, coordinate1: 225, coordinate2: 420 },
      { room: "155BB", floor: 1, coordinate1: 130, coordinate2: 420 },
      { room: "197A", floor: 1, coordinate1: 521, coordinate2: 330 },
      { room: "197B", floor: 1, coordinate1: 1510, coordinate2: 330 },
      { room: "198A", floor: 1, coordinate1: 130, coordinate2: 374 },
      { room: "198B", floor: 1, coordinate1: 569, coordinate2: 344 },
      { room: "198C", floor: 1, coordinate1: 1469, coordinate2: 336 },
      { room: "198D", floor: 1, coordinate1: 1792, coordinate2: 383 },
      { room: "198E", floor: 1, coordinate1: 1082, coordinate2: 432 },
      { room: "198F", floor: 1, coordinate1: 953, coordinate2: 440 },
      { room: "199", floor: 1, coordinate1: 357, coordinate2: 388 },
      { room: "201", floor: 2, coordinate1: 165, coordinate2: 1052 },
      { room: "201A", floor: 2, coordinate1: 64, coordinate2: 1027 },
      { room: "201B", floor: 2, coordinate1: 105, coordinate2: 1166 },
      { room: "201C", floor: 2, coordinate1: 170, coordinate2: 1150 },
      { room: "203", floor: 2, coordinate1: 248, coordinate2: 1440 },
      { room: "205", floor: 2, coordinate1: 262, coordinate2: 929 },
      { room: "205A", floor: 2, coordinate1: 250, coordinate2: 1034 },
      { room: "206", floor: 2, coordinate1: 384, coordinate2: 1296 },
      { room: "206A", floor: 2, coordinate1: 497, coordinate2: 1275 },
      { room: "206B", floor: 2, coordinate1: 500, coordinate2: 1241 },
      { room: "206C", floor: 2, coordinate1: 435, coordinate2: 1224 },
      { room: "206D", floor: 2, coordinate1: 370, coordinate2: 1229 },
      { room: "207", floor: 2, coordinate1: 490, coordinate2: 1382 },
      { room: "208", floor: 2, coordinate1: 459, coordinate2: 1455 },
      { room: "208A", floor: 2, coordinate1: 407, coordinate2: 1509 },
      { room: "209", floor: 2, coordinate1: 460, coordinate2: 1515 },
      { room: "210", floor: 2, coordinate1: 630, coordinate2: 1496 },
      { room: "211", floor: 2, coordinate1: 740, coordinate2: 1487 },
      { room: "212", floor: 2, coordinate1: 885, coordinate2: 1487 },
      { room: "214", floor: 2, coordinate1: 1070, coordinate2: 1511 },
      { room: "214A", floor: 2, coordinate1: 1008, coordinate2: 1510 },
      { room: "214B", floor: 2, coordinate1: 1000, coordinate2: 1466 },
      { room: "214C", floor: 2, coordinate1: 1047, coordinate2: 1452 },
      { room: "214D", floor: 2, coordinate1: 1104, coordinate2: 1454 },
      { room: "219", floor: 2, coordinate1: 1154, coordinate2: 1490 },
      { room: "220", floor: 2, coordinate1: 1307, coordinate2: 1485 },
      { room: "221", floor: 2, coordinate1: 1445, coordinate2: 1477 },
      { room: "222", floor: 2, coordinate1: 1535, coordinate2: 1475 },
      { room: "223", floor: 2, coordinate1: 1715, coordinate2: 1507 },
      { room: "224", floor: 2, coordinate1: 1704, coordinate2: 1456 },
      { room: "225", floor: 2, coordinate1: 1732, coordinate2: 1249 },
      { room: "225A", floor: 2, coordinate1: 1682, coordinate2: 1410 },
      { room: "225B", floor: 2, coordinate1: 1675, coordinate2: 1357 },
      { room: "225C", floor: 2, coordinate1: 1667, coordinate2: 1305 },
      { room: "225D", floor: 2, coordinate1: 1665, coordinate2: 1249 },
      { room: "225E", floor: 2, coordinate1: 1665, coordinate2: 1205 },
      { room: "227", floor: 2, coordinate1: 1782, coordinate2: 1270 },
      { room: "229", floor: 2, coordinate1: 1832, coordinate2: 1266 },
      { room: "229A", floor: 2, coordinate1: 1790, coordinate2: 1227 },
      { room: "229B", floor: 2, coordinate1: 1868, coordinate2: 1202 },
      { room: "229C", floor: 2, coordinate1: 1864, coordinate2: 1267 },
      { room: "229D", floor: 2, coordinate1: 1864, coordinate2: 1307 },
      { room: "229E", floor: 2, coordinate1: 1820, coordinate2: 1319 },
      { room: "240", floor: 2, coordinate1: 1880, coordinate2: 1360 },
      { room: "241", floor: 2, coordinate1: 1828, coordinate2: 1416 },
      { room: "241A ", floor: 2, coordinate1: 1825, coordinate2: 1489 },
      { room: "244", floor: 2, coordinate1: 1904, coordinate2: 1464 },
      { room: "245", floor: 2, coordinate1: 1970, coordinate2: 1298 },
      { room: "245A", floor: 2, coordinate1: 1970, coordinate2: 1245 },
      { room: "245B", floor: 2, coordinate1: 2030, coordinate2: 1247 },
      { room: "245C", floor: 2, coordinate1: 2090, coordinate2: 1252 },
      { room: "248", floor: 2, coordinate1: 1902, coordinate2: 1664 },
      { room: "248A", floor: 2, coordinate1: 2084, coordinate2: 1436 },
      { room: "249A", floor: 2, coordinate1: 1865, coordinate2: 1518 },
      { room: "249B", floor: 2, coordinate1: 1912, coordinate2: 1515 },
      { room: "249C", floor: 2, coordinate1: 1870, coordinate2: 1434 },
      { room: "250", floor: 2, coordinate1: 1760, coordinate2: 1688 },
      { room: "251", floor: 2, coordinate1: 1658, coordinate2: 1437 },
      { room: "252", floor: 2, coordinate1: 1544, coordinate2: 1461 },
      { room: "253", floor: 2, coordinate1: 1415, coordinate2: 1448 },
      { room: "254", floor: 2, coordinate1: 1256, coordinate2: 1672 },
      { room: "255", floor: 2, coordinate1: 896, coordinate2: 1452 },
      { room: "256", floor: 2, coordinate1: 758, coordinate2: 1449 },
      { room: "257", floor: 2, coordinate1: 599, coordinate2: 1458 },
      { room: "258", floor: 2, coordinate1: 494, coordinate2: 1424 },
      { room: "259", floor: 2, coordinate1: 302, coordinate2: 1648 },
      { room: "259A", floor: 2, coordinate1: 425, coordinate2: 1472 },
      { room: "259B", floor: 2, coordinate1: 364, coordinate2: 1506 },
      { room: "259C", floor: 2, coordinate1: 320, coordinate2: 1513 },
      { room: "259D", floor: 2, coordinate1: 269, coordinate2: 1428 },
      { room: "259E", floor: 2, coordinate1: 279, coordinate2: 1508 },
      { room: "260", floor: 2, coordinate1: 225, coordinate2: 1440 },
      { room: "260A", floor: 2, coordinate1: 218, coordinate2: 1530 },
      { room: "261", floor: 2, coordinate1: 113, coordinate2: 1404 },
      { room: "261A", floor: 2, coordinate1: 164, coordinate2: 1469 },
      { room: "261B", floor: 2, coordinate1: 122, coordinate2: 1461 },
      { room: "261C", floor: 2, coordinate1: 68, coordinate2: 1464 },
      { room: "297A", floor: 2, coordinate1: 508, coordinate2: 1512 },
      { room: "297B", floor: 2, coordinate1: 1642, coordinate2: 1512 },
      { room: "298A", floor: 2, coordinate1: 144, coordinate2: 1568 },
      { room: "298B", floor: 2, coordinate1: 552, coordinate2: 1512 },
      { room: "298C", floor: 2, coordinate1: 1592, coordinate2: 1507 },
      { room: "298D", floor: 2, coordinate1: 2006, coordinate2: 1339 },
      { room: "298E", floor: 2, coordinate1: 1148, coordinate2: 1458 },
      { room: "298F", floor: 2, coordinate1: 1010, coordinate2: 1458 },
      { room: "298G", floor: 2, coordinate1: 1059, coordinate2: 1458 },
      { room: "299", floor: 2, coordinate1: 1077, coordinate2: 1344 },
      { room: "301", floor: 3, coordinate1: 178, coordinate2: 2633 },
      { room: "301A", floor: 3, coordinate1: 74, coordinate2: 2590 },
      { room: "301B", floor: 3, coordinate1: 129, coordinate2: 2586 },
      { room: "301C", floor: 3, coordinate1: 183, coordinate2: 2583 },
      { room: "302", floor: 3, coordinate1: 320, coordinate2: 2600 },
      { room: "303", floor: 3, coordinate1: 455, coordinate2: 2572 },
      { room: "304", floor: 3, coordinate1: 465, coordinate2: 2617 },
      { room: "310", floor: 3, coordinate1: 743, coordinate2: 2622 },
      { room: "310A", floor: 3, coordinate1: 663, coordinate2: 2631 },
      { room: "310B", floor: 3, coordinate1: 635, coordinate2: 2566 },
      { room: "310C", floor: 3, coordinate1: 695, coordinate2: 2560 },
      { room: "310D", floor: 3, coordinate1: 758, coordinate2: 2556 },
      { room: "310E", floor: 3, coordinate1: 827, coordinate2: 2567 },
      { room: "310F", floor: 3, coordinate1: 796, coordinate2: 2633 },
      { room: "310G", floor: 3, coordinate1: 833, coordinate2: 2628 },
      { room: "315", floor: 3, coordinate1: 933, coordinate2: 2576 },
      { room: "320", floor: 3, coordinate1: 1076, coordinate2: 2622 },
      { room: "320A", floor: 3, coordinate1: 1025, coordinate2: 2627 },
      { room: "320B", floor: 3, coordinate1: 1004, coordinate2: 2588 },
      { room: "320C", floor: 3, coordinate1: 1052, coordinate2: 2548 },
      { room: "320D", floor: 3, coordinate1: 1103, coordinate2: 2562 },
      { room: "320E", floor: 3, coordinate1: 1156, coordinate2: 2561 },
      { room: "320F", floor: 3, coordinate1: 1166, coordinate2: 2624 },
      { room: "322", floor: 3, coordinate1: 1208, coordinate2: 2591 },
      { room: "323", floor: 3, coordinate1: 1301, coordinate2: 2600 },
      { room: "324", floor: 3, coordinate1: 1427, coordinate2: 2610 },
      { room: "325", floor: 3, coordinate1: 1532, coordinate2: 2594 },
      { room: "329", floor: 3, coordinate1: 1702, coordinate2: 2630 },
      { room: "330", floor: 3, coordinate1: 1768, coordinate2: 2600 },
      { room: "331", floor: 3, coordinate1: 1835, coordinate2: 2600 },
      { room: "333", floor: 3, coordinate1: 1906, coordinate2: 2614 },
      { room: "335", floor: 3, coordinate1: 2020, coordinate2: 2639 },
      { room: "335A", floor: 3, coordinate1: 1976, coordinate2: 2576 },
      { room: "335B", floor: 3, coordinate1: 2036, coordinate2: 2587 },
      { room: "335C", floor: 3, coordinate1: 2096, coordinate2: 2606 },
      { room: "340", floor: 3, coordinate1: 2008, coordinate2: 2744 },
      { room: "340A", floor: 3, coordinate1: 2093, coordinate2: 2784 },
      { room: "340B", floor: 3, coordinate1: 2032, coordinate2: 2784 },
      { room: "340C", floor: 3, coordinate1: 1934, coordinate2: 2738 },
      { room: "350", floor: 3, coordinate1: 1760, coordinate2: 2800 },
      { room: "350A", floor: 3, coordinate1: 1772, coordinate2: 2754 },
      { room: "350B", floor: 3, coordinate1: 1829, coordinate2: 2758 },
      { room: "350C", floor: 3, coordinate1: 1893, coordinate2: 2762 },
      { room: "350E", floor: 3, coordinate1: 1976, coordinate2: 2789 },
      { room: "350F", floor: 3, coordinate1: 1931, coordinate2: 2868 },
      { room: "350G", floor: 3, coordinate1: 1871, coordinate2: 2862 },
      { room: "350H", floor: 3, coordinate1: 1821, coordinate2: 2870 },
      { room: "350I", floor: 3, coordinate1: 1745, coordinate2: 2873 },
      { room: "351", floor: 3, coordinate1: 1664, coordinate2: 1768 },
      { room: "351B ", floor: 3, coordinate1: 1589, coordinate2: 2808 },
      { room: "353", floor: 3, coordinate1: 1382, coordinate2: 2752 },
      { room: "353A", floor: 3, coordinate1: 1397, coordinate2: 2826 },
      { room: "353B", floor: 3, coordinate1: 1455, coordinate2: 2834 },
      { room: "353C", floor: 3, coordinate1: 1522, coordinate2: 2826 },
      { room: "353D", floor: 3, coordinate1: 1469, coordinate2: 2751 },
      { room: "354", floor: 3, coordinate1: 1268, coordinate2: 2786 },
      { room: "355", floor: 3, coordinate1: 1142, coordinate2: 2786 },
      { room: "357", floor: 3, coordinate1: 1001, coordinate2: 2784 },
      { room: "358", floor: 3, coordinate1: 904, coordinate2: 2784 },
      { room: "360", floor: 3, coordinate1: 680, coordinate2: 2749 },
      { room: "360A", floor: 3, coordinate1: 754, coordinate2: 2738 },
      { room: "360B", floor: 3, coordinate1: 827, coordinate2: 2822 },
      { room: "360C", floor: 3, coordinate1: 758, coordinate2: 2818 },
      { room: "360D", floor: 3, coordinate1: 698, coordinate2: 2820 },
      { room: "360E", floor: 3, coordinate1: 638, coordinate2: 2818 },
      { room: "360F", floor: 3, coordinate1: 569, coordinate2: 2816 },
      { room: "360G", floor: 3, coordinate1: 785, coordinate2: 2744 },
      { room: "367", floor: 3, coordinate1: 506, coordinate2: 2770 },
      { room: "368", floor: 3, coordinate1: 384, coordinate2: 2824 },
      { room: "368A ", floor: 3, coordinate1: 418, coordinate2: 2734 },
      { room: "369", floor: 3, coordinate1: 256, coordinate2: 2760 },
      { room: "369A", floor: 3, coordinate1: 293, coordinate2: 2848 },
      { room: "369B", floor: 3, coordinate1: 230, coordinate2: 2848 },
      { room: "370", floor: 3, coordinate1: 119, coordinate2: 2734 },
      { room: "370A", floor: 3, coordinate1: 68, coordinate2: 2786 },
      { room: "370B", floor: 3, coordinate1: 122, coordinate2: 2786 },
      { room: "370C", floor: 3, coordinate1: 176, coordinate2: 2784 },
      { room: "397A", floor: 3, coordinate1: 514, coordinate2: 2630 },
      { room: "397B", floor: 3, coordinate1: 1644, coordinate2: 2630 },
      { room: "398A", floor: 3, coordinate1: 155, coordinate2: 2680 },
      { room: "398B", floor: 3, coordinate1: 569, coordinate2: 2627 },
      { room: "398C", floor: 3, coordinate1: 1594, coordinate2: 2624 },
      { room: "398D", floor: 3, coordinate1: 2000, coordinate2: 2692 },
      { room: "399", floor: 3, coordinate1: 1049, coordinate2: 2685 },
    ];

export default {
  name: "savedRoutes",
  data() {
    return {
        selected: "",
        selectedTo: null,
        selectedFrom: null,
        inputTo: "",
    };
  },
  mounted() {

    var sortedTestCollection = Object.keys(data).sort(function (a, b) {
      a = data[a].room.substring(0, data[a].room.length);
      b = data[b].room.substring(0, data[b].room.length);
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });

    
  },
  computed: {
    savedRoutes(){      
      return this.$store.state.routes.map(this.mapRoute); 
    },
    options(){
        return this.savedRoutes.map(route => ({
            value: route.from + '/' + route.to,
        text: `Room ${route.fromRoom.room} to Room ${route.toRoom.room} `,
        }));
    },
    sortedOptions(){
        return [{value: "", text: "Select an Option"}].concat(this.options.sort((a, b) => {
            if (a.text == b.text) return 0;
            return a.text < b.text ? -1 : 1;
        }))
    }
  },
  methods: {
    ...mapActions(['SET_DIRECTIONS']),
    mapRoute(route){
        var to = this.lookupRoom(...route.to.split(","));
        var from = this.lookupRoom(...route.from.split(","));
        return {
            ...route, 
                fromRoom: from,
                toRoom: to
        }
    },
    lookupRoom(floor, coordinate1, coordinate2){
       return data.find(room => {
                return room.floor == parseInt(floor) 
                && room.coordinate1 == parseInt(coordinate1)
                && room.coordinate2 == parseInt(coordinate2)
            }
        )
    },

    displaySearch: function (event) {
      var block = document.getElementById("search-box");
      block.style.visibility = "visible";

      /*change code to dynamically add div with textboxes*/
      var newDiv = document.createElement("div");
    },
    storeInput(event) {
      const [inputFrom, inputTo] = document.getElementById("saved").value.split("/");
      console.log(inputFrom, inputTo);

      // update the state
      this.$store.commit("SET_DIRECTIONS", { from: inputFrom, to: inputTo });
      
    },
    selectSavedRoute(from, to){
        this.$store.commit("SET_DIRECTIONS", { from: from, to: to });
    },
  },
};
</script>
