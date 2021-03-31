
 <template>
  <div class="container">
    <div class="col">
          <b-form-select
            id="saved"
            name="routeSelect"
            class="SavedRoutesStyling"
            v-model="selected"
            :options="sortedOptions"
            v-on:change="storeInput"
            :select-size="8"
          ></b-form-select>
          
        </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
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
      { room: "301", floor: 3, coordinate1: 176, coordinate2: 2624 },
      { room: "301A ", floor: 3, coordinate1: 112, coordinate2: 2592 },
      { room: "301B ", floor: 3, coordinate1: 176, coordinate2: 2592 },
      { room: "301C ", floor: 3, coordinate1: 224, coordinate2: 2592 },
      { room: "302", floor: 3, coordinate1: 368, coordinate2: 2608 },
      { room: "303", floor: 3, coordinate1: 480, coordinate2: 2576 },
      { room: "304", floor: 3, coordinate1: 464, coordinate2: 2624 },
      { room: "310", floor: 3, coordinate1: 688, coordinate2: 2608 },
      { room: "310A ", floor: 3, coordinate1: 640, coordinate2: 2624 },
      { room: "310B ", floor: 3, coordinate1: 608, coordinate2: 2576 },
      { room: "310C ", floor: 3, coordinate1: 672, coordinate2: 2576 },
      { room: "310D ", floor: 3, coordinate1: 720, coordinate2: 2576 },
      { room: "310E ", floor: 3, coordinate1: 768, coordinate2: 2576 },
      { room: "310F ", floor: 3, coordinate1: 736, coordinate2: 2624 },
      { room: "310G ", floor: 3, coordinate1: 784, coordinate2: 2624 },
      { room: "315", floor: 3, coordinate1: 848, coordinate2: 2592 },
      { room: "320", floor: 3, coordinate1: 992, coordinate2: 2608 },
      { room: "320A ", floor: 3, coordinate1: 944, coordinate2: 2624 },
      { room: "320B ", floor: 3, coordinate1: 928, coordinate2: 2544 },
      { room: "320C ", floor: 3, coordinate1: 976, coordinate2: 2576 },
      { room: "320D ", floor: 3, coordinate1: 1008, coordinate2: 2576 },
      { room: "320E ", floor: 3, coordinate1: 1072, coordinate2: 2560 },
      { room: "320F ", floor: 3, coordinate1: 1072, coordinate2: 2624 },
      { room: "322", floor: 3, coordinate1: 1104, coordinate2: 2608 },
      { room: "323", floor: 3, coordinate1: 1184, coordinate2: 2592 },
      { room: "324", floor: 3, coordinate1: 1280, coordinate2: 2592 },
      { room: "325", floor: 3, coordinate1: 1376, coordinate2: 2592 },
      { room: "329", floor: 3, coordinate1: 1520, coordinate2: 2592 },
      { room: "330", floor: 3, coordinate1: 1600, coordinate2: 2608 },
      { room: "331", floor: 3, coordinate1: 1664, coordinate2: 2608 },
      { room: "333", floor: 3, coordinate1: 1744, coordinate2: 2608 },
      { room: "335", floor: 3, coordinate1: 1824, coordinate2: 2560 },
      { room: "335A ", floor: 3, coordinate1: 1792, coordinate2: 2592 },
      { room: "335B ", floor: 3, coordinate1: 1824, coordinate2: 2560 },
      { room: "335C ", floor: 3, coordinate1: 1888, coordinate2: 2608 },
      { room: "340", floor: 3, coordinate1: 1808, coordinate2: 2720 },
      { room: "340A ", floor: 3, coordinate1: 1888, coordinate2: 2752 },
      { room: "340B ", floor: 3, coordinate1: 1824, coordinate2: 2784 },
      { room: "340C ", floor: 3, coordinate1: 1744, coordinate2: 2720 },
      { room: "350", floor: 3, coordinate1: 1632, coordinate2: 2784 },
      { room: "350A", floor: 3, coordinate1: 1600, coordinate2: 2736 },
      { room: "350B ", floor: 3, coordinate1: 1648, coordinate2: 2736 },
      { room: "350C ", floor: 3, coordinate1: 1696, coordinate2: 2720 },
      { room: "350E ", floor: 3, coordinate1: 1776, coordinate2: 2752 },
      { room: "350F ", floor: 3, coordinate1: 1744, coordinate2: 2816 },
      { room: "350G ", floor: 3, coordinate1: 1696, coordinate2: 2848 },
      { room: "350H ", floor: 3, coordinate1: 1648, coordinate2: 2848 },
      { room: "350I ", floor: 3, coordinate1: 1568, coordinate2: 2832 },
      { room: "351", floor: 3, coordinate1: 1536, coordinate2: 2752 },
      { room: "351B ", floor: 3, coordinate1: 1440, coordinate2: 2768 },
      { room: "353", floor: 3, coordinate1: 1264, coordinate2: 2768 },
      { room: "353A ", floor: 3, coordinate1: 1264, coordinate2: 2800 },
      { room: "353B ", floor: 3, coordinate1: 1328, coordinate2: 2800 },
      { room: "353C ", floor: 3, coordinate1: 1392, coordinate2: 2800 },
      { room: "353D ", floor: 3, coordinate1: 1344, coordinate2: 2720 },
      { room: "354", floor: 3, coordinate1: 1136, coordinate2: 2768 },
      { room: "355", floor: 3, coordinate1: 1056, coordinate2: 2768 },
      { room: "357", floor: 3, coordinate1: 928, coordinate2: 2784 },
      { room: "358", floor: 3, coordinate1: 848, coordinate2: 2784 },
      { room: "360", floor: 3, coordinate1: 640, coordinate2: 2736 },
      { room: "360A ", floor: 3, coordinate1: 704, coordinate2: 2720 },
      { room: "360B ", floor: 3, coordinate1: 768, coordinate2: 2800 },
      { room: "360C ", floor: 3, coordinate1: 704, coordinate2: 2800 },
      { room: "360D ", floor: 3, coordinate1: 672, coordinate2: 2800 },
      { room: "360E ", floor: 3, coordinate1: 608, coordinate2: 2800 },
      { room: "360F ", floor: 3, coordinate1: 544, coordinate2: 2800 },
      { room: "360G ", floor: 3, coordinate1: 752, coordinate2: 2720 },
      { room: "367", floor: 3, coordinate1: 480, coordinate2: 2752 },
      { room: "368", floor: 3, coordinate1: 400, coordinate2: 2800 },
      { room: "368A ", floor: 3, coordinate1: 432, coordinate2: 2720 },
      { room: "369", floor: 3, coordinate1: 304, coordinate2: 2752 },
      { room: "369A ", floor: 3, coordinate1: 304, coordinate2: 2848 },
      { room: "369B ", floor: 3, coordinate1: 256, coordinate2: 2848 },
      { room: "370", floor: 3, coordinate1: 160, coordinate2: 2720 },
      { room: "370A ", floor: 3, coordinate1: 112, coordinate2: 2736 },
      { room: "370B ", floor: 3, coordinate1: 160, coordinate2: 2768 },
      { room: "370C ", floor: 3, coordinate1: 208, coordinate2: 2768 },
      { room: "01A", floor: 0, coordinate1: 160, coordinate2: 3824 },
      { room: "01B", floor: 0, coordinate1: 240, coordinate2: 3840 },
      { room: "3", floor: 0, coordinate1: 336, coordinate2: 3840 },
      { room: "6.04", floor: 0, coordinate1: 320, coordinate2: 3792 },
      { room: "6.05", floor: 0, coordinate1: 304, coordinate2: 3776 },
      { room: "6.06", floor: 0, coordinate1: 288, coordinate2: 3776 },
      { room: "6.07", floor: 0, coordinate1: 256, coordinate2: 3776 },
      { room: "6.03", floor: 0, coordinate1: 272, coordinate2: 3728 },
      { room: "6.02", floor: 0, coordinate1: 352, coordinate2: 3728 },
      { room: "6.01", floor: 0, coordinate1: 256, coordinate2: 3680 },
      { room: "6", floor: 0, coordinate1: 320, coordinate2: 3680 },
      { room: "7", floor: 0, coordinate1: 304, coordinate2: 3584 },
      { room: "07A", floor: 0, coordinate1: 272, coordinate2: 3648 },
      { room: "8", floor: 0, coordinate1: 432, coordinate2: 4600 },
      { room: "8.01", floor: 0, coordinate1: 448, coordinate2: 3584 },
      { room: "8.02", floor: 0, coordinate1: 480, coordinate2: 3584 },
      { room: "8.03", floor: 0, coordinate1: 512, coordinate2: 3584 },
      { room: "9", floor: 0, coordinate1: 464, coordinate2: 3664 },
      { room: "09A", floor: 0, coordinate1: 432, coordinate2: 3728 },
      { room: "9.01", floor: 0, coordinate1: 432, coordinate2: 3648 },
      { room: "9.02", floor: 0, coordinate1: 480, coordinate2: 3712 },
      { room: "9.03", floor: 0, coordinate1: 480, coordinate2: 3632 },
      { room: "9.04", floor: 0, coordinate1: 512, coordinate2: 3712 },
      { room: "9.05", floor: 0, coordinate1: 512, coordinate2: 3632 },
      { room: "10", floor: 0, coordinate1: 480, coordinate2: 3792 },
      { room: "11", floor: 0, coordinate1: 448, coordinate2: 3872 },
      { room: "13", floor: 0, coordinate1: 688, coordinate2: 3856 },
      { room: "13A", floor: 0, coordinate1: 608, coordinate2: 3808 },
      { room: "13B", floor: 0, coordinate1: 656, coordinate2: 3808 },
      { room: "13C", floor: 0, coordinate1: 704, coordinate2: 3808 },
      { room: "13D", floor: 0, coordinate1: 768, coordinate2: 3808 },
      { room: "13E", floor: 0, coordinate1: 752, coordinate2: 3872 },
      { room: "13F", floor: 0, coordinate1: 640, coordinate2: 3872 },
      { room: "13G", floor: 0, coordinate1: 800, coordinate2: 3872 },
      { room: "13H", floor: 0, coordinate1: 592, coordinate2: 3872 },
      { room: "13J", floor: 0, coordinate1: 768, coordinate2: 3840 },
      { room: "22", floor: 0, coordinate1: 896, coordinate2: 3824 },
      { room: "22A", floor: 0, coordinate1: 928, coordinate2: 3856 },
      { room: "22B", floor: 0, coordinate1: 994, coordinate2: 3792 },
      { room: "22C", floor: 0, coordinate1: 832, coordinate2: 3808 },
      { room: "22.01", floor: 0, coordinate1: 848, coordinate2: 3872 },
      { room: "22.02", floor: 0, coordinate1: 880, coordinate2: 3208 },
      { room: "25", floor: 0, coordinate1: 1088, coordinate2: 3872 },
      { room: "25A", floor: 0, coordinate1: 1136, coordinate2: 3808 },
      { room: "25B", floor: 0, coordinate1: 1072, coordinate2: 3808 },
      { room: "26", floor: 0, coordinate1: 1248, coordinate2: 3824 },
      { room: "27", floor: 0, coordinate1: 1376, coordinate2: 3608 },
      { room: "27A", floor: 0, coordinate1: 1328, coordinate2: 3856 },
      { room: "27B", floor: 0, coordinate1: 1424, coordinate2: 3872 },
      { room: "97A", floor: 0, coordinate1: 512, coordinate2: 3904 },
      { room: "98B", floor: 0, coordinate1: 544, coordinate2: 3872 },
      { room: "98C", floor: 0, coordinate1: 1472, coordinate2: 3872 },
      { room: "97B", floor: 0, coordinate1: 1504, coordinate2: 3904 },
      { room: "29", floor: 0, coordinate1: 1568, coordinate2: 3856 },
      { room: "30", floor: 0, coordinate1: 1520, coordinate2: 3792 },
      { room: "30A", floor: 0, coordinate1: 1584, coordinate2: 3824 },
      { room: "31", floor: 0, coordinate1: 1536, coordinate2: 3664 },
      { room: "34", floor: 0, coordinate1: 1712, coordinate2: 3860 },
      { room: "36", floor: 0, coordinate1: 1696, coordinate2: 3824 },
      { room: "37A", floor: 0, coordinate1: 1792, coordinate2: 3824 },
      { room: "37B", floor: 0, coordinate1: 1840, coordinate2: 3824 },
      { room: "37C", floor: 0, coordinate1: 1888, coordinate2: 3840 },
      { room: "37D", floor: 0, coordinate1: 1744, coordinate2: 3824 },
      { room: "41", floor: 0, coordinate1: 1888, coordinate2: 3904 },
      { room: "98D", floor: 0, coordinate1: 1776, coordinate2: 3920 },
      { room: "42", floor: 0, coordinate1: 1808, coordinate2: 3968 },
      { room: "42A", floor: 0, coordinate1: 1792, coordinate2: 4016 },
      { room: "42B", floor: 0, coordinate1: 1856, coordinate2: 4016 },
      { room: "42C", floor: 0, coordinate1: 1888, coordinate2: 4016 },
      { room: "43", floor: 0, coordinate1: 1664, coordinate2: 4032 },
      { room: "43A", floor: 0, coordinate1: 1664, coordinate2: 3936 },
      { room: "45", floor: 0, coordinate1: 1520, coordinate2: 4000 },
      { room: "45A", floor: 0, coordinate1: 1456, coordinate2: 4016 },
      { room: "46", floor: 0, coordinate1: 1360, coordinate2: 4000 },
      { room: "47", floor: 0, coordinate1: 1280, coordinate2: 4016 },
      { room: "48", floor: 0, coordinate1: 1168, coordinate2: 3984 },
      { room: "48A", floor: 0, coordinate1: 1168, coordinate2: 4048 },
      { room: "49", floor: 0, coordinate1: 1024, coordinate2: 4032 },
      { room: "49A", floor: 0, coordinate1: 848, coordinate2: 4032 },
      { room: "50", floor: 0, coordinate1: 672, coordinate2: 3984 },
      { room: "50A", floor: 0, coordinate1: 720, coordinate2: 4032 },
      { room: "50B", floor: 0, coordinate1: 688, coordinate2: 4032 },
      { room: "50C", floor: 0, coordinate1: 640, coordinate2: 4032 },
      { room: "50D", floor: 0, coordinate1: 640, coordinate2: 3968 },
      { room: "50E", floor: 0, coordinate1: 784, coordinate2: 4032 },
      { room: "50EZ", floor: 0, coordinate1: 752, coordinate2: 3984 },
      { room: "51", floor: 0, coordinate1: 576, coordinate2: 4032 },
      { room: "52", floor: 0, coordinate1: 496, coordinate2: 3984 },
      { room: "53", floor: 0, coordinate1: 336, coordinate2: 4032 },
      { room: "53A", floor: 0, coordinate1: 192, coordinate2: 4000 },
      { room: "53B", floor: 0, coordinate1: 128, coordinate2: 3984 },
      { room: "54", floor: 0, coordinate1: 112, coordinate2: 3920 },
      { room: "54A", floor: 0, coordinate1: 176, coordinate2: 3936 }
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

<style scoped>

.SavedRoutesStyling {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 20px;
  }

</style>