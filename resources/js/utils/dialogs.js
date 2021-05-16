/* eslint-disable no-unused-vars */
import Swal from 'sweetalert2';

export default {
  success(title = '', message = '', position = 'center', showConfirmButton = true, timer = 2000) {
    Swal.fire({
      position,
      icon: 'success',
      title,
      message,
      showConfirmButton,
      timer,
    });
  },

  async error(text = '', title = '', autoClose) {
    return Swal.fire({
      icon: 'error', title, text, timer: autoClose ? 1000 : null,
    });
  },

  loading(title = 'Aguarde...') {
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

  confirm(
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
    });
  },

  close() {
    Swal.close();
  },

};
