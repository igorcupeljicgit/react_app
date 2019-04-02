class User {
    constructor(name, picture, birthday, email, gender) {

        this.name = name.first + " " + " " + name.last;
        this.picture = picture;
        this.birthday = birthday;
        this.email = email.slice(0, 3) + "..." + email.slice(email.indexOf("@") - 3, email.indexOf("@")) + email.slice(email.indexOf("@"));
        this.gender = gender;
    }
}

export { User };