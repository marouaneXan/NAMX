const asyncHandler = require("express-async-handler");
const Admin = require('../../Models/Admin/Admin')
const generateToken = require('../../Utils/generateToken')

// @desc POST Login
// @route /api/v1/admin/auth/login
// access private
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const admin = await Admin.findOne({ email })
  
  if (admin) {
      res.json({
          id: admin._id,
          token: generateToken(admin._id),
          message: "Admin loged successfully"
      })
  } else {
      res.status(400)
      throw new Error('Invalid admin data')
  } 
});

module.exports = {
    login,
};
