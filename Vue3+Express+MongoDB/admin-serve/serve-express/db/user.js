// 用户数据模型和文档
var { mongoose } = require("./index");
var UserSchema = mongoose.Schema({
  name: String,
  password: String,
});
var UserModel = mongoose.model("User", UserSchema);

// 增删查改
var user = {};
// 修改某一个
user.updateOne = (data, req, res) => {
  console.log(req.body);
  return UserModel.findByIdAndUpdate(data, req.body, (err, result) => {
    if (err) console.log(err);
    if (result) res.send(result);
    else  return res.status(200).send({
      code: "A01002",
      data: null,
      err: 0,
      msg: "用户不存在",
    });
  });
};
// 通过名称查找
user.findByName = (data, res) => {
  return UserModel.findOne({name: data}, (err, result) => {
      if (result) res.send(result);
      else return res.status(200).send({
        code: "A01002",
        data: null,
        err: 0,
        msg: "用户不存在",
      });
    }
  );
};

user.findAll = (res) => {
  return UserModel.find((err, result) => {
    if (err) send(err);
    res.send(result);
  });
};
user.findAndCreate = (req, res) => {
  UserModel.findOne(
    {
      name: req.body.name,
    },
    (err, result) => {
      if (err) send(err);
      if (result) {
        return res.status(200).send({
          code: "A01002",
          data: null,
          err: 0,
          msg: "用户已经存在了",
        });
      }
      return UserModel.create(
        {
          name: req.body.name,
          password: req.body.password,
        },
        function (err, result) {
          if (err) res.send("err");
          else {
            res.send("添加" + result + "成功");
          }
        }
      );
    }
  );
};
user.findAndDelete = (data, res) => {
  return UserModel.findByIdAndDelete(data, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
};

module.exports.user = user;
