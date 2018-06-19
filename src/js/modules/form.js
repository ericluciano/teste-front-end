(($) => {
  const formMask = {
    mask9(val) {
      return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    init() {
      $('#phone').mask(this.mask9);
    },
  };

  const validateEmail = (uemail) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // eslint-disable-line
    return uemail.match(mailformat) || false;
  };

  const setSwalInvalid = ({ title }) => {
    const textPtBr = {
      name: 'Nome',
      email: 'E-mail',
      phone: 'Telefone',
      message: 'Mensagem',
    };
    const message = {
      name: 'Digite o seu nome.',
      email: 'Informe um e-mail valido.',
      phone: 'Informe um número de telefone válido.',
      message: 'Digite a sua mensagem.',
    };
    const header = textPtBr[title];
    // eslint-disable-next-line no-undef
    swal(header, message[title], 'warning', {
      button: 'Fechar',
    });
  };

  formMask.init();
  // eslint-disable-next-line consistent-return
  $('#frmContact').on('submit', (event) => {
    event.preventDefault();
    const self = event.currentTarget;
    const name = $('#name').val();
    const email = $('#email').val();
    const phone = $('#phone').val();
    const message = $('#message').val();

    if (!name || name.length <= 1) {
      setSwalInvalid({
        title: 'name',
      });
      return false;
    }
    if (!validateEmail(email)) {
      setSwalInvalid({
        title: 'email',
      });
      return true;
    }

    if (!phone || phone.length < 14) {
      setSwalInvalid({
        title: 'phone',
      });
      return true;
    }

    if (!message || message.length <= 10) {
      setSwalInvalid({
        title: 'message',
      });
      return true;
    }
    self.submit();
  });
})(jQuery);
