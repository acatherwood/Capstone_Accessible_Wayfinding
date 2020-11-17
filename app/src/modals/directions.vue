
 <template>

    <div class="modal" id="directions">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title"></h5>
        <button class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
        <label for="directions">From:</label>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Where are you?" aria-label="Where are you?" aria-describedby="basic-addon2">
        </div>

        <label for="directions">To:</label>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Where are you going?" aria-label="Where are you going?" aria-describedby="basic-addon2">
        </div>
        </div>

        <div class="modal-footer">
        <button class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
    </div>
    </div>
    </div>

</template>

<script>
        export default {
            name: 'modal'
        };
    </script>