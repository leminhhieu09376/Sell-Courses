import mongoose from "mongoose";
import ContentDetail from "../models/contentDetail.js";
import ContentMaster from "../models/contentMaster.js";

export const createContentDetail = async (req, res) => {
    const {
        title,
        subTitle,
        url,
        contentMaster,
        length,
    } = req.body;

    const newModel = new ContentDetail({
        title,
        subTitle,
        url,
        contentMaster,
        length,
    });

    try {
        if (!(await ContentMaster.findById({ _id: contentMaster }))) {
            return res.status(200).json({ message: "contentMaster not found !!" });
        }
        await newModel.save();
        var newcontentMaster = await ContentMaster.findById({ _id: newModel.contentMaster })

        await ContentMaster.findByIdAndUpdate(newcontentMaster._id, {
            contentDetails:
                newcontentMaster.contentDetails === undefined
                    ? [newModel._id]
                    : [...newcontentMaster.contentDetails, newModel._id],

        });
        return res.status(200).json({ code: true, result: newModel });
    } catch (error) {
        return res.status(409).json({ message: error.message });
    }
};


export const getContentDetails = async (req, res) => {
    const contentMaster = req.query.contentMaster;
    try {
        const models = await ContentDetail.find({ contentMaster });
        res.status(200).json({ code: true, result: models });
    } catch (error) {
        res.status(200).json({ code: false, message: error.message });
    }
};
