import { model, models, Schema } from "mongoose";

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
}, { timestamps: true });

const Category = models.Category || model('Category', CategorySchema);

export default Category;