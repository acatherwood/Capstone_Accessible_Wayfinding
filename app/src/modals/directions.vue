
 <template>
  <div class="modal" id="directions">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"></h5>
          <button class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
          <div>
            <label>To</label>
            <b-form-select
              id="To"
              name="routeSelect"
              v-model="selectedTo"
              :options="options"
            >
            </b-form-select>
          </div>
          <div>
            <label>From</label>
            <b-form-select
              type="text"
              class="form-control"
              id="From"
              v-model="selectedFrom"
              :options="options"
            ></b-form-select>
          </div>

          <!-- <div>
            <h1>System List</h1>
            <ul>
            <li :key="item.key" v-for="item in selected">{{item}}</li>
            </ul>
        </div> -->
        </div>

        <div class="modal-footer">
          <button
            class="btn btn-secondary"
            value="Enter"
            v-on:click="storeInput"
            data-dismiss="modal"
          >
            Enter
          </button>

          <button class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

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
    const db = firebase.firestore();
    db.collection("floors")
      .get()
      .then((snap) => {
        const data = [];
        snap.forEach((doc) => {
          if (doc.data().room) {
            data.push({
              id: doc.id,
              room: doc.data().room,
              floor: doc.data().floor,
              coordinate1: doc.data().coordinate1,
              coordinate2: doc.data().coordinate2,
            });
          }
        });

        var sortedTestCollection = Object.keys(data).sort(function (a, b) {
          a = data[a].room.substring(0, data[a].room.length);
          b = data[b].room.substring(0, data[b].room.length);
          if (a < b) 
            return -1;
          if (a > b)
            return 1;
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
      alert(inputTo);
      var inputFrom = document.getElementById("From").value;
      alert(inputFrom);
      // update the state
      this.$store.commit("SET_DIRECTIONS", { from: inputFrom, to: inputTo });
    },
  },
};
</script>