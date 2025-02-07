import { Document } from "mongoose";
import { model, models, Schema } from "mongoose";

export interface ICategory extends Document{
    _id: string;
    name: string;
}

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
}, { timestamps: true });

const Category = models.Category || model('Category', CategorySchema);

export default Category;