
 <template>

    <div class="modal" id="directions">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title"></h5>
        <button class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">

        <div >
            <label>To</label>
                <b-form-select id="To" 
                name="routeSelect" v-model="testCollection">
                <option v-for="item in testCollection" 
                v-bind:key="item.value" 
                v-bind:value="item.room"> {{ item }} </option>
            
                </b-form-select>
        </div>
        <div >
            <label>From</label>
            <b-form-select 
                type="text" 
                class="form-control"  
                id="From" 
                v-model="selected" :options="options"></b-form-select>
        </div>


        <div>
            <h1>System List</h1>
            <ul>
            <li :key="item.key" v-for="item in testCollection">{{item}}</li>
            </ul>
        </div>
        </div>

        <div class="modal-footer">
            <button class="btn btn-secondary" value="Enter" v-on:click="storeInput" data-dismiss="modal">Enter</button>

            <button class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
    
    </div>
    </div>
    </div>

</template>

<script>
import firebase from 'firebase';

    export default {
        name: 'modal',
        data(){
            return {
                    testCollection: [],
       
                    selected: null,
                    options: [
                    { value: null, text: 'Please select an option' },
                    { value: 'a', text: 'Option A' },
                    { value: 'b', text: 'Option B' }
                    ],
                  
                    inputTo: ""
            };
        },
        mounted() {
            const db = firebase.firestore();
            db
            .collection('floors')
            .get()
            .then(snap => {
                const testCollection = [];
                snap.forEach(doc => {
                testCollection.push({ [doc.id]: doc.data() });
                });
                this.testCollection = testCollection;
            });
        },
        methods:{
            displaySearch: function(event){
            var block = document.getElementById("search-box")
            block.style.visibility = "visible"
            
            /*change code to dynamically add div with textboxes*/
            var newDiv = document.createElement('div')
            
            },
            storeInput(event) {
                var inputTo = document.getElementById("To").value;
            // alert(inputTo);
                var inputFrom = document.getElementById("From").value;
            // alert(inputFrom);
                // update the state
            this.$store.commit('SET_DIRECTIONS', { from: inputFrom, to: inputTo });
            },
       
        }
    }
    </script>