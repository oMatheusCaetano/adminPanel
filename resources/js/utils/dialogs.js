/* eslint-disable no-unused-vars */
import Swal from 'sweetalert2';

export default {
  successDialog(title = '', message = '', position = 'center', showConfirmButton = true, timer = 2000) {
    Swal.fire({
      position,
      icon: 'success',
      title,
      message,
      showConfirmButton,
      timer,
    });
  },

  errorDialog(text = '', title = '') {
    Swal.fire({ icon: 'error', title, text });
  },

  loadingDialog(title = 'Aguarde...') {
    Swal.fire({
      title,
      allowOutsideClick: false,
      width: 400,
      padding: '3em',
      showConfirmButton: false,
      backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `,
    });
  },

  confirmDialog(
    title = 'Tem certeza?',
    text = 'Não será possível desfazer esta operação',
    confirmButtonText = 'Sim, remover!',
    cancelButtonText = 'Cancelar',

  ) {
    const classes = 'text-white font-medium py-2 px-5 rounded';
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: `${classes} bg-purple-600 hover:bg-purple-900 ml-2`,
        cancelButton: `${classes} bg-red-500 hover:bg-red-600 mr-2`,
      },
      buttonsStyling: false,
    });

    return swalWithBootstrapButtons.fire({
      title,
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText,
      cancelButtonText,
      reverseButtons: true,
    });// .then(async (result) => {
    //   if (result.isConfirmed) {
    //     await onConfirm();
    //     swalWithBootstrapButtons.fire(successText, '', 'success');
    //   } else if (result.dismiss === Swal.DismissReason.cancel) {
    //     swalWithBootstrapButtons.fire(cancelText, '', 'error');
    //   }
    // });
  },

  close() {
    Swal.close();
  },

};
