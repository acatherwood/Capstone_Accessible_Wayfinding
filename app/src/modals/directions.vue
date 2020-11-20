
 <template>

    <div class="modal" id="directions">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title"></h5>
        <button class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
        <div class="input-group mb-3">
            <input 
                type="text" 
                v-model="inputTo"
                @keyup.enter="submit"
                class="form-control"  
                id="To" 
                value="To.." 
                placeholder="Where are you?" 
                aria-label="Where are you?" 
                aria-describedby="basic-addon2">
        </div>
        <div class="input-group mb-3">
            <input type="text" class="form-control"   
            id="From"
            placeholder="Where are you going?" 
            aria-label="Where are you going?" 
            aria-describedby="basic-addon2">
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
    export default {
        name: 'modal',
        data(){
            return {
                inputTo: ""
            };
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