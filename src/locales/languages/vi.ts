/* cSpell: disable */

console.log('  🇻🇳 Loaded VI');

export default {
  fields: {
    email_address: 'Thư điện tử',
    password: 'Mật khẩu',
  },

  actions: {
    login: 'Đăng nhập',
    search: 'Tìm kiếm',
  },

  header: {
    what_are_you_looking_for: 'Bạn tìm gì?',
  },
  footer: {
    buy: 'Mua hàng',
    warranty: 'Bảo hành',
  },

  auth: {
    sign_in_to: 'Đăng nhập vào {appName}',
    don_t_have_an_account: 'Chưa có tài khoản?',
    get_started: 'Tạo tài khỏan',
    or: 'hoặc',
    forgot_password: 'Quên mật khẩu?',
    continue_with: 'Tiếp tục với {provider}',
  },
} as const;
