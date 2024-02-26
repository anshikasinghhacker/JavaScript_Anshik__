class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

        get password(){
            return this._password.toUpperCase()
            //  Cannot set property password of #<User> which has only a getter 
            // this type of error come if we not apply setter
        }

        get password(){
            return `${this._password}anshika`
        }

        set password(value){
            this._password = value
        }
    }


const anshika = new User("anshika.2154","abc")
console.log(anshika.password);
console.log(anshika.email);

// if we dont wnt to give access of password to everyone then in such cases we apply getter or setter