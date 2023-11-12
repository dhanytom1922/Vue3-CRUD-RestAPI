<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="deletePopup"
    tabindex="-1"
    aria-labelledby="deletePopupLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="deletePopupLabel">Delete Confirmation</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">Are you sure to delete this item?</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-danger" @click="$emit('confirm-delete-click')">Confirm Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>
