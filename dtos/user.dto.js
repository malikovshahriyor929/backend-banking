module.exports = class UserDto {
  id;
  email;
  isActive;
  constructor(model) {
    this.email = model.email;
    this.id = model._id;
    this.isActive = model.isActive;
  }
};
