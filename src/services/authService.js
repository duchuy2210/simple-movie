const authService = {
  handleSignUp: async (signUpData)=>{
    return new Promise(async(resolve, reject)=>{
      try {
        // Kiểm tra xem có nhập email password, user_name không
      if (
        !signUpData.email ||
        !signUpData.password ||
        !signUpData.user_name
      ) {
        return resolve({
          status: 422,
          payload: {
            message: 'Nhập thiếu dữ liệu',
          },
        });
      }
      } catch (error) {
        reject(err);
      }
    })
  }
};
