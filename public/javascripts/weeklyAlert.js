const Swal = require('sweetalert2');

weeklyUpdate = () => Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  type: 'error',
  confirmButtonText: 'Cool'
})

export default weeklyUpdate();