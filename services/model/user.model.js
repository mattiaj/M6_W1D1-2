import {Schema, model} from 'mongoose';

const userSchema = new Schema(

    {
        nome: {
            type: String,
            required: true
        },

        cognome: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true
        },

        data_di_nascita: {
            type: String,
            required: true
        },

        avatar: {
            type: String,
            required: true
        }

    },

    {
      collection: "users"  
    }

);

export default model("User", userSchema);